/* =================================================================
   TÀI KHOẢN HỌC SINH: đăng nhập bằng tên đăng nhập + mật khẩu,
   lưu tiến độ học vào Supabase (bảng progress) để học tiếp trên máy khác.
   Không cần email thật: tên đăng nhập được đổi thành một email ảo nội bộ.
   Mỗi môn lưu một dòng riêng (bảng progress, khóa user_id + subject).
   ================================================================= */
(function(){
  const cfg = window.APP_CONFIG || {};
  const cur = () => (typeof SUBJ !== 'undefined' && SUBJ) ? SUBJ : { key: cfg.SUBJECT || 'vat-ly-8', store: 'vl8' };
  const DOMAIN = 'hocsinh.sotay';
  const enabled = !!(window.supabase && cfg.SUPABASE_URL && !cfg.SUPABASE_URL.includes('xxxx')
                     && cfg.SUPABASE_KEY && !cfg.SUPABASE_KEY.includes('DAN_'));
  let sb = null, user = null, state = '';
  let remote = {};          // tiến độ trên server, theo từng môn
  const timers = {};
  const ACC = { enabled };
  window.ACC = ACC;
  const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const css = `
  .acct{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:space-between;margin:14px 0 0;padding:10px 14px;border:1.5px dashed var(--accent);border-radius:16px;background:var(--card);font-size:14.5px}
  .acct b{color:var(--accent)}
  .acct .st{color:var(--muted);font-size:13px}
  .acct button{border:0;border-radius:999px;padding:7px 14px;font-weight:700;background:var(--accent);color:#fff;cursor:pointer}
  .acct button.ghost{background:none;color:var(--accent);border:1.5px solid var(--accent)}
  dialog.acc-dlg{border:0;border-radius:20px;padding:0;width:min(400px,calc(100vw - 32px));background:var(--card);color:var(--ink);box-shadow:0 20px 60px rgba(60,20,80,.3)}
  dialog.acc-dlg::backdrop{background:rgba(40,15,55,.45)}
  .acc-in{padding:22px}
  .acc-in h2{margin:0 0 4px;font-size:22px;color:var(--accent)}
  .acc-sw{display:flex;gap:6px;margin:14px 0}
  .acc-sw button{flex:1;border:1.5px solid var(--line);background:none;border-radius:999px;padding:7px;font-weight:700;color:var(--ink);cursor:pointer}
  .acc-sw button[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff}
  .acc-in label{display:block;font-size:13.5px;font-weight:700;color:var(--muted);margin-top:10px}
  .acc-in input{display:block;width:100%;margin-top:4px;padding:9px 12px;border:1.5px solid var(--line);border-radius:12px;background:var(--paper);color:var(--ink);font:inherit;font-size:16px}
  .acc-in input:focus{outline:none;border-color:var(--accent)}
  .acc-err{color:var(--bad);min-height:1.3em;font-size:14px;margin:8px 0 0}
  .acc-act{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}
  .acc-act button{border:0;border-radius:999px;padding:9px 18px;font-weight:700;cursor:pointer;font:inherit;font-weight:700}
  .acc-act .go{background:var(--accent);color:#fff}
  .acc-act .no{background:none;color:var(--muted)}
  .acc-act button:disabled{opacity:.6}
  .acc-note{font-size:12.5px;color:var(--muted);margin:10px 0 0}`;
  if(enabled){ const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st); }

  const nameOf = u => (u && u.user_metadata && (u.user_metadata.full_name || u.user_metadata.username)) || (u && u.email || '').split('@')[0];
  const toEmail = n => n.trim().toLowerCase() + '@' + DOMAIN;
  const empty = () => ({quiz:{}, ex:{}});
  function merge(a, b){
    const r = {quiz:{...(a.quiz||{})}, ex:{...(a.ex||{})}};
    for(const k in (b.quiz||{})) r.quiz[k] = Math.max(r.quiz[k]||0, b.quiz[k]||0);
    for(const k in (b.ex||{})) if(b.ex[k]) r.ex[k] = true;
    // Sổ lỗi sai: mỗi câu giữ bản được sửa gần nhất (theo thời điểm u)
    const ma = a.mis||{}, mb = b.mis||{};
    if(Object.keys(ma).length || Object.keys(mb).length){
      r.mis = {...ma};
      for(const k in mb) if(!r.mis[k] || (mb[k].u||0) > (r.mis[k].u||0)) r.mis[k] = mb[k];
    }
    return r;
  }
  function setState(s){ state = s; const el = document.getElementById('acct-st'); if(el) el.textContent = s; }

  ACC.init = async function(){
    if(!enabled) return;
    sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_KEY);
    try{
      const { data } = await sb.auth.getSession();
      user = data.session ? data.session.user : null;
      if(user) await fetchAll();
    }catch(e){ console.warn(e); }
  };

  async function fetchAll(){
    const { data, error } = await sb.from('progress').select('subject,data').eq('user_id', user.id);
    if(error){ console.warn('Không đọc được tiến độ', error); setState('Chưa đồng bộ được, sẽ thử lại.'); return; }
    remote = {};
    (data || []).forEach(r => { if(r.data && r.data.quiz) remote[r.subject] = r.data; });
  }

  /* Gọi sau khi trang đọc tiến độ của môn hiện tại từ máy: gộp với tiến độ trong tài khoản. */
  ACC.afterLoad = function(){
    if(!enabled || !user) return;
    const key = cur().key, r = remote[key] || empty();
    const merged = merge(r, prog);
    prog = merged;
    if(JSON.stringify(merged) !== JSON.stringify(merge(r, empty()))) save();   // máy này có phần làm thêm → đẩy lên
    else { try{ localStorage.setItem(cur().store + '-prog', JSON.stringify(prog)); }catch(e){} }
  };

  ACC.push = function(p){
    if(!enabled || !user) return;
    const key = cur().key, snap = JSON.parse(JSON.stringify(p));
    remote[key] = snap;
    clearTimeout(timers[key]);
    setState('Đang lưu…');
    timers[key] = setTimeout(async ()=>{
      const { error } = await sb.from('progress').upsert({
        user_id:user.id, subject:key, display_name:nameOf(user), data:snap, updated_at:new Date().toISOString()
      });
      setState(error ? 'Chưa lưu được (mất mạng?). Sẽ lưu lại ở lần làm bài sau.' : 'Tiến độ đã được lưu vào tài khoản.');
    }, 700);
  };

  ACC.footer = function(){
    return !enabled ? 'Tiến độ được lưu trên trình duyệt của máy này.'
      : user ? 'Tiến độ được lưu vào tài khoản của bạn.' : 'Đăng nhập để lưu tiến độ vào tài khoản và học tiếp trên máy khác.';
  };

  ACC.renderBar = function(){
    if(!enabled) return;
    const hero = document.querySelector('.hero'); if(!hero) return;
    let bar = document.getElementById('acct');
    if(!bar){ bar = document.createElement('div'); bar.id = 'acct'; bar.className = 'acct'; hero.appendChild(bar); }
    bar.innerHTML = user
      ? `<span>Chào <b>${esc(nameOf(user))}</b> ✿ <span class="st" id="acct-st">${esc(state || 'Tiến độ đã được lưu vào tài khoản.')}</span></span><button class="ghost" id="acct-out">Đăng xuất</button>`
      : `<span>Đăng nhập để lưu tiến độ và học tiếp trên máy khác.</span><button id="acct-in">Đăng nhập</button>`;
    const o = document.getElementById('acct-out'), i = document.getElementById('acct-in');
    if(o) o.onclick = logout;
    if(i) i.onclick = () => openDialog('in');
  };

  async function logout(){
    if(!confirm('Đăng xuất khỏi tài khoản? Tiến độ vẫn được giữ trong tài khoản.')) return;
    await sb.auth.signOut();
    user = null; state = ''; remote = {};
    try{ (typeof SUBJECTS !== 'undefined' ? SUBJECTS : [cur()]).forEach(x => localStorage.removeItem(x.store + '-prog')); }catch(e){}
    if(typeof loadProg === 'function') loadProg(); else prog = empty();
    home();
  }

  function openDialog(mode){
    let d = document.getElementById('acc-dlg');
    if(!d){ d = document.createElement('dialog'); d.id = 'acc-dlg'; d.className = 'acc-dlg'; document.body.appendChild(d); }
    const signup = mode === 'up';
    d.innerHTML = `<form class="acc-in" method="dialog" id="acc-f">
      <h2>${signup ? 'Tạo tài khoản' : 'Đăng nhập'}</h2>
      <div class="acc-sw"><button type="button" data-m="in" aria-pressed="${!signup}">Đăng nhập</button><button type="button" data-m="up" aria-pressed="${signup}">Tạo tài khoản</button></div>
      ${signup ? '<label>Tên hiển thị<input id="acc-nm" autocomplete="nickname" maxlength="40" placeholder="Ví dụ: Ngọc Anh 8A" required></label>' : ''}
      <label>Tên đăng nhập<input id="acc-u" autocomplete="username" autocapitalize="none" spellcheck="false" maxlength="24" placeholder="Ví dụ: ngocanh8a" required></label>
      <label>Mật khẩu<input id="acc-p" type="password" autocomplete="${signup ? 'new-password' : 'current-password'}" minlength="6" required></label>
      <p class="acc-err" id="acc-e"></p>
      <div class="acc-act"><button type="button" class="no" id="acc-x">Để sau</button><button type="submit" class="go" id="acc-go">${signup ? 'Tạo tài khoản' : 'Đăng nhập'}</button></div>
      <p class="acc-note">${signup ? 'Tên đăng nhập chỉ gồm chữ không dấu, số, dấu chấm hoặc gạch dưới (3–24 ký tự). Mật khẩu ít nhất 6 ký tự. Không cần email.' : 'Quên mật khẩu? Nhờ thầy cô đặt lại giúp.'}</p>
    </form>`;
    d.querySelectorAll('[data-m]').forEach(b => b.onclick = () => openDialog(b.dataset.m));
    document.getElementById('acc-x').onclick = () => d.close();
    document.getElementById('acc-f').onsubmit = async ev => {
      ev.preventDefault();
      const e = document.getElementById('acc-e'), go = document.getElementById('acc-go');
      const u = document.getElementById('acc-u').value.trim().toLowerCase(), p = document.getElementById('acc-p').value;
      if(!/^[a-z0-9._]{3,24}$/.test(u)){ e.textContent = 'Tên đăng nhập chỉ gồm chữ không dấu, số, dấu chấm, gạch dưới (3–24 ký tự).'; return; }
      if(p.length < 6){ e.textContent = 'Mật khẩu cần ít nhất 6 ký tự.'; return; }
      go.disabled = true; e.textContent = '';
      let res;
      if(signup){
        const nm = document.getElementById('acc-nm').value.trim() || u;
        res = await sb.auth.signUp({ email:toEmail(u), password:p, options:{ data:{ username:u, full_name:nm } } });
        if(!res.error && !res.data.session){ go.disabled = false; e.textContent = 'Đã tạo tài khoản nhưng hệ thống đang yêu cầu xác nhận email. Nhờ thầy cô tắt mục "Confirm email" trong Supabase.'; return; }
      }else{
        res = await sb.auth.signInWithPassword({ email:toEmail(u), password:p });
      }
      if(res.error){
        go.disabled = false;
        const m = res.error.message || '';
        e.textContent = /already|registered|exists/i.test(m) ? 'Tên đăng nhập này đã có người dùng, hãy chọn tên khác.'
          : /invalid/i.test(m) ? 'Sai tên đăng nhập hoặc mật khẩu.'
          : /rate|limit|many/i.test(m) ? 'Thử quá nhiều lần, đợi một lát rồi thử lại.'
          : m;
        return;
      }
      user = res.data.user || (res.data.session && res.data.session.user);
      d.close();
      await fetchAll();
      if(typeof loadProg === 'function') loadProg(); else ACC.afterLoad();
      home();
    };
    if(!d.open) d.showModal();
    setTimeout(() => { const f = document.getElementById(signup ? 'acc-nm' : 'acc-u'); if(f) f.focus(); }, 30);
  }
})();
