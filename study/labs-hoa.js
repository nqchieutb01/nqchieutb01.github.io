/* Thí nghiệm ảo môn Hoá học 8 */
window.LAB_EXT = window.LAB_EXT || {};
(function(){
const SUBD = '₀₁₂₃₄₅₆₇₈₉';
const sub = s => String(s).replace(/\d/g, d => SUBD[d]);
const clamp = (x,a,b) => Math.max(a, Math.min(b, x));
const reduceMotion = () => { try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } };
function sci(x){
  if(!isFinite(x) || x === 0) return '0';
  let e = Math.floor(Math.log10(Math.abs(x))), m = Number((x/Math.pow(10, e)).toFixed(3));
  if(m >= 10){ m = Number((m/10).toFixed(3)); e++; }
  return `${fmt(m, 3)}·10<sup>${e}</sup>`;
}
function gcd(a,b){ while(b){ [a,b] = [b, a%b]; } return a; }

/* Nguyên tố dùng chung (màu cố định cho vật thể, đọc được trên cả nền sáng và tối) */
const EL = {
  H:{c:'#FFFFFF',r:7,M:1}, O:{c:'#E5484D',r:9,M:16}, Fe:{c:'#B4703C',r:11,M:56}, Al:{c:'#A9B4C2',r:11,M:27},
  Cl:{c:'#4CC46A',r:10,M:35.5}, C:{c:'#4A4A4A',r:9,M:12}, Na:{c:'#8E6CE0',r:11,M:23}, K:{c:'#C77DFF',r:12,M:39},
  Ca:{c:'#F2C14E',r:11,M:40}, P:{c:'#F28C38',r:10,M:31}, N:{c:'#3B82F6',r:9,M:14}, He:{c:'#FF9EC9',r:8,M:4}
};
const EL_NAME = {H:'hydrogen',O:'oxygen',Fe:'sắt',Al:'nhôm',Cl:'chlorine',C:'carbon',Na:'sodium',K:'potassium',Ca:'calcium',P:'phosphorus',N:'nitrogen'};
function parseF(f){ const o = {}; f.replace(/([A-Z][a-z]?)(\d*)/g, (_, e, n) => { o[e] = (o[e]||0) + (n ? +n : 1); return ''; }); return o; }
const molarMass = f => { const c = parseF(f); let m = 0; for(const e in c) m += EL[e].M * c[e]; return m; };

Object.assign(window.LAB_EXT, {

/* =========================================================
   1. VẬT LÍ HAY HOÁ HỌC?
   ========================================================= */
hoa_sort(p){
  const POOL = [
    {e:'🧊', t:'Viên đá trong cốc nước chanh tan dần thành nước', a:'vl', why:'Nước chỉ đổi trạng thái rắn → lỏng, vẫn là nước. <b>Không có chất mới.</b>'},
    {e:'🍮', t:'Thắng đường quá lửa: đường cháy đen thành than, bốc khói khét', a:'hh', why:'Đường bị phân huỷ thành than (carbon) và hơi nước: <b>có chất mới</b>. Dấu hiệu: đổi màu đen, có mùi khét.'},
    {e:'🔩', t:'Đinh sắt để ngoài mưa bị phủ lớp gỉ nâu đỏ', a:'hh', why:'Sắt tác dụng với oxygen và hơi nước tạo gỉ sắt, <b>một chất mới</b>. Dấu hiệu: đổi màu, đinh giòn, xốp.'},
    {e:'🧴', t:'Chai cồn quên đậy nắp, cồn vơi dần', a:'vl', why:'Cồn chỉ <b>bay hơi</b> (lỏng → hơi), vẫn là cồn. Chỉ khi đốt cháy cồn mới có chất mới.'},
    {e:'🥚', t:'Luộc trứng, lòng trắng trong suốt đông lại thành màu trắng', a:'hh', why:'Protein trong trứng bị biến tính khi đun nóng, <b>không trở lại như cũ</b> được nữa. Dấu hiệu: đổi màu, đổi trạng thái không thuận nghịch.'},
    {e:'🥛', t:'Sữa ủ với men thành sữa chua, có vị chua và đặc lại', a:'hh', why:'Vi khuẩn lên men biến đường trong sữa thành lactic acid, <b>chất mới</b> có vị chua. Dấu hiệu: mùi vị thay đổi.'},
    {e:'✂️', t:'Cắt tờ giấy màu thành nhiều mảnh nhỏ', a:'vl', why:'Chỉ đổi <b>hình dạng, kích thước</b>. Mảnh nhỏ vẫn là giấy.'},
    {e:'🕯️', t:'Thắp nến: sáp nóng chảy ra, bấc nến cháy sáng', a:'both', why:'Sáp <b>nóng chảy</b> là biến đổi vật lí (vẫn là sáp). Hơi sáp <b>cháy</b> với oxygen tạo carbon dioxide và nước là biến đổi hoá học. Nến có <b>cả hai</b>!'},
    {e:'🧂', t:'Cho muối vào nồi canh, muối tan hết', a:'vl', why:'Muối chỉ <b>hoà tan</b> vào nước. Cô cạn canh vẫn thu lại được muối, không có chất mới.'},
    {e:'♨️', t:'Cho vôi sống vào nước, nước nóng sôi lên sùng sục', a:'hh', why:'Vôi sống (CaO) tác dụng với nước tạo vôi tôi Ca(OH)₂, <b>chất mới</b>. Dấu hiệu: <b>toả rất nhiều nhiệt</b>.'},
    {e:'🍎', t:'Quả táo bổ đôi để lâu, mặt cắt bị thâm nâu', a:'hh', why:'Chất trong quả phản ứng với oxygen (nhờ enzyme) tạo <b>chất màu nâu mới</b>. Dấu hiệu: đổi màu.'},
    {e:'🫖', t:'Đun nước đến sôi, bọt khí nổi lên sùng sục', a:'vl', why:'Bẫy! Bọt khí chỉ là <b>hơi nước</b>, vẫn là nước. Sủi bọt không phải lúc nào cũng là phản ứng hoá học.'},
    {e:'🌊', t:'Phơi nước biển trên ruộng muối, thu được muối hạt', a:'vl', why:'Nước bay hơi, muối có sẵn trong nước biển kết tinh lại. <b>Không có chất mới.</b>'},
    {e:'🍚', t:'Cơm để qua đêm ngoài trời bị thiu, có mùi chua', a:'hh', why:'Vi khuẩn phân huỷ cơm tạo <b>chất mới</b> có mùi lạ. Dấu hiệu: mùi chua, nhớt.'},
    {e:'💊', t:'Thả viên sủi vitamin C vào nước, sủi bọt mạnh', a:'hh', why:'Acid và baking soda trong viên sủi phản ứng tạo <b>khí carbon dioxide</b>, một chất mới. Khác với nước sôi nhé!'},
    {e:'🔥', t:'Vặn bếp gas, gas cháy cho ngọn lửa xanh', a:'hh', why:'Gas tác dụng với oxygen tạo carbon dioxide và nước. Dấu hiệu: <b>phát sáng, toả nhiệt</b>.'},
    {e:'🍫', t:'Thanh sô-cô-la để trong túi áo bị chảy mềm', a:'vl', why:'Sô-cô-la chỉ <b>nóng chảy</b>, cho vào tủ lạnh lại cứng. Không có chất mới.'}
  ];
  const LAB = {vl:'Biến đổi vật lí', hh:'Biến đổi hoá học', both:'Cả hai'};
  const N = 12;
  let deck, i, score, missed, answered;
  p.innerHTML = `<style>
   .hsort-top{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:14.5px;margin:6px 0 10px}
   .hsort-prog{flex:1;height:8px;border-radius:999px;background:var(--line);overflow:hidden}
   .hsort-prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:999px;transition:width .3s}
   .hsort-card{border:2px solid var(--line);border-radius:18px;background:var(--paper);padding:18px 14px;text-align:center;min-height:150px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:8px}
   .hsort-card .e{font-size:48px;line-height:1}
   .hsort-card .t{font-size:17px;font-weight:700;max-width:26em}
   .hsort-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
   .hsort-btns .opt{margin:0;text-align:center;font-weight:700;padding:12px 8px}
   .hsort-btns .opt.both{grid-column:1/-1}
   .hsort-fb{margin-top:10px;padding:10px 12px;border-radius:12px;font-size:15px}
   .hsort-fb.ok{background:var(--ok-soft)} .hsort-fb.no{background:var(--bad-soft)}
   .hsort-sum li{margin:.35em 0}
   @media (prefers-reduced-motion:reduce){.hsort-prog i{transition:none}}
  </style>
  <div class="sec lab"><h3>Vật lí hay hoá học?</h3>
   <p class="muted">Đọc từng hiện tượng và tự hỏi câu then chốt: <b>sau biến đổi có chất mới tạo thành không?</b> Đoán trước rồi bấm chọn. Có ${N} thẻ, cẩn thận vài cái bẫy nhé!</p>
   <div class="hsort-top"><span id="hsort-cnt"></span><span class="hsort-prog"><i id="hsort-bar"></i></span><b id="hsort-sc"></b></div>
   <div id="hsort-stage"></div>
  </div>`;
  const stage = document.getElementById('hsort-stage');
  function start(){
    deck = shuffle(POOL.filter(x => x.a !== 'both')).slice(0, N-1);
    deck.splice(Math.floor(Math.random()*N), 0, POOL.find(x => x.a === 'both'));
    i = 0; score = 0; missed = []; show();
  }
  function head(){
    document.getElementById('hsort-cnt').textContent = `Thẻ ${Math.min(i+1, N)}/${N}`;
    document.getElementById('hsort-bar').style.width = (100*(i + (answered?1:0))/N) + '%';
    document.getElementById('hsort-sc').textContent = `⭐ ${score}`;
  }
  function show(){
    answered = false;
    const c = deck[i];
    stage.innerHTML = `<div class="hsort-card"><span class="e" aria-hidden="true">${c.e}</span><span class="t">${c.t}</span></div>
      <div class="hsort-btns">
        <button class="opt" data-a="vl">🧊 Biến đổi vật lí</button>
        <button class="opt" data-a="hh">🔥 Biến đổi hoá học</button>
        <button class="opt both" data-a="both">Có cả hai</button>
      </div>
      <div id="hsort-fb"></div>`;
    head();
    stage.querySelectorAll('[data-a]').forEach(b => b.onclick = () => pick(b));
  }
  function pick(b){
    if(answered) return; answered = true;
    const c = deck[i], ok = b.dataset.a === c.a;
    stage.querySelectorAll('[data-a]').forEach(x => { x.disabled = true; if(x.dataset.a === c.a) x.classList.add('right'); });
    if(!ok){ b.classList.add('wrong'); missed.push(c); } else score++;
    const fb = document.getElementById('hsort-fb');
    fb.className = 'hsort-fb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = `<b style="color:var(${ok?'--ok':'--bad'})">${ok ? 'Đúng rồi!' : 'Chưa đúng, đáp án là: ' + LAB[c.a] + '.'}</b> ${c.why}
      <div class="row" style="margin-top:8px;justify-content:flex-end"><button class="btn" id="hsort-next">${i < N-1 ? 'Thẻ tiếp →' : 'Xem kết quả'}</button></div>`;
    head();
    const nb = document.getElementById('hsort-next'); nb.focus({preventScroll:true});
    nb.onclick = () => { i++; if(i < N) show(); else end(); };
  }
  function end(){
    const msg = score === N ? 'Xuất sắc, không sai thẻ nào! 🎉' : score >= 9 ? 'Giỏi lắm! Xem lại vài thẻ bị nhầm nhé.' : score >= 6 ? 'Khá rồi! Nhớ câu hỏi then chốt: có chất mới không?' : 'Không sao, chơi lại để nhớ hơn nhé!';
    stage.innerHTML = `<div class="hsort-card"><span class="e" aria-hidden="true">${score===N?'🏆':score>=9?'🌟':'💪'}</span>
      <span class="t">Em đúng ${score}/${N} thẻ</span><span class="muted">${msg}</span></div>
      ${missed.length ? `<div class="readout hsort-sum"><b>Các thẻ cần xem lại:</b><ul>${missed.map(c => `<li>${c.e} ${c.t}: <b>${LAB[c.a]}</b>. ${c.why}</li>`).join('')}</ul></div>` : ''}
      <div class="readout"><b>Mẹo nhớ:</b> Vật lí: đổi trạng thái, hình dạng, kích thước, hoà tan; chất vẫn là nó. Hoá học: có chất mới, nhận ra qua đổi màu, mùi lạ, sủi khí (khí mới), kết tủa, toả nhiệt hay phát sáng.</div>
      <div class="row" style="margin-top:10px;justify-content:center"><button class="btn" id="hsort-again">Chơi lại (thẻ mới)</button></div>`;
    document.getElementById('hsort-bar').style.width = '100%';
    document.getElementById('hsort-cnt').textContent = 'Hoàn thành';
    document.getElementById('hsort-again').onclick = start;
  }
  start();
},

/* =========================================================
   2. CÂN BẰNG PHƯƠNG TRÌNH
   ========================================================= */
hoa_balance(p){
  const EQS = [
    {r:['H2','O2'], p:['H2O'], k:[2,1,2], h:['Vế phải chỉ có 1 O, vế trái có 2 O: đặt 2 trước H₂O.', 'Bây giờ vế phải có 4 H, đặt 2 trước H₂.']},
    {r:['Al','O2'], p:['Al2O3'], k:[4,3,2], h:['O ở Al₂O₃ là 3 (lẻ): nhân đôi thành 2Al₂O₃ để có 6 O, rồi đặt 3 trước O₂.', 'Vế phải có 2 × 2 = 4 Al, đặt 4 trước Al.']},
    {r:['Fe','O2'], p:['Fe3O4'], k:[3,2,1], h:['Fe₃O₄ có 4 O, mỗi O₂ có 2 O: cần 2O₂.', 'Fe₃O₄ có 3 Fe: đặt 3 trước Fe.']},
    {r:['CH4','O2'], p:['CO2','H2O'], k:[1,2,1,2], h:['Cân C trước (đã bằng 1 = 1), rồi cân H: 4 H ở CH₄ cần 2H₂O.', 'Đếm O vế phải: 2 (CO₂) + 2 (2H₂O) = 4, vậy cần 2O₂.']},
    {r:['Na','H2O'], p:['NaOH','H2'], k:[2,2,2,1], h:['H₂ có 2 H, thử đặt 2 trước H₂O và 2 trước NaOH.', 'Vế phải có 2 Na nên đặt 2 trước Na. Kiểm tra H: trái 4, phải 2 + 2 = 4.']},
    {r:['Al','HCl'], p:['AlCl3','H2'], k:[2,6,2,3], h:['Cl ở AlCl₃ là 3 (lẻ), H ở H₂ là 2: nhân đôi thành 2AlCl₃ (6 Cl) và 6HCl.', '6HCl có 6 H → 3H₂. Vế phải có 2 Al → 2Al.']},
    {r:['KClO3'], p:['KCl','O2'], k:[2,2,3], h:['O: trái 3 (lẻ), phải 2. Đặt 2KClO₃ để có 6 O, vậy cần 3O₂.', 'Còn lại K và Cl: đặt 2 trước KCl.']},
    {r:['P','O2'], p:['P2O5'], k:[4,5,2], h:['O₂ có 2 O, P₂O₅ có 5 O. Bội chung nhỏ nhất là 10: 5O₂ và 2P₂O₅.', 'Vế phải có 4 P → 4P.']},
    {r:['CaCO3','HCl'], p:['CaCl2','H2O','CO2'], k:[1,2,1,1,1], h:['Ca và C đều đã bằng nhau (1 = 1). Cl ở CaCl₂ là 2 → 2HCl.', 'Kiểm tra H: 2 = 2; O: 3 = 1 + 2. Chỉ cần sửa một hệ số!']}
  ];
  const eqStr = (e, k) => { const s = (arr, off) => arr.map((f, j) => (k && k[off+j] > 1 ? k[off+j] : '') + sub(f)).join(' + ');
    return s(e.r, 0) + ' → ' + s(e.p, e.r.length); };
  let ei = 0, k = [], hint = 0;
  p.innerHTML = `<style>
   .hbal-eq{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px 4px;margin:10px 0}
   .hbal-sp{display:flex;flex-direction:column;align-items:center;border:1.5px solid var(--line);border-radius:14px;padding:6px 6px 4px;background:var(--paper);min-width:82px}
   .hbal-k{display:flex;align-items:center;gap:4px}
   .hbal-k button{width:30px;height:30px;border-radius:50%;border:1.5px solid var(--accent);background:var(--card);color:var(--accent);font-weight:800;font-size:18px;line-height:1;padding:0}
   .hbal-k button:disabled{opacity:.35}
   .hbal-k b{min-width:22px;text-align:center;font-size:20px;color:var(--accent)}
   .hbal-f{font-size:19px;font-weight:700}
   .hbal-op{font-size:20px;font-weight:800;color:var(--muted);padding:0 2px}
   .hbal-tbl table{width:100%;min-width:0;text-align:center}
   .hbal-tbl td,.hbal-tbl th{text-align:center;padding:4px 6px}
   .hbal-tbl td.ok{background:var(--ok-soft);color:var(--ok);font-weight:700}
   .hbal-tbl td.no{background:var(--bad-soft);color:var(--bad);font-weight:700}
   .hbal-leg{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:13.5px;color:var(--muted);margin:6px 0}
   .hbal-leg i{display:inline-block;width:12px;height:12px;border-radius:50%;border:1px solid var(--ink);vertical-align:-1px;margin-right:4px}
   .hbal-win{border:2px solid var(--ok);background:var(--ok-soft)}
  </style>
  <div class="sec lab"><h3>Cân bằng phương trình hoá học</h3>
   <p class="muted">Bấm − / + để đổi <b>hệ số</b> trước mỗi chất (không được sửa chỉ số!). Mục tiêu: số nguyên tử mỗi nguyên tố ở hai vế bằng nhau, cái cân nằm ngang. Đoán trước hệ số trong đầu rồi mới bấm.</p>
   <label for="hbal-sel" class="muted" style="font-size:14px">Chọn phương trình</label>
   <select id="hbal-sel">${EQS.map((e, j) => `<option value="${j}">${j+1}. ${eqStr(e)}</option>`).join('')}</select>
   <div class="hbal-eq" id="hbal-eq"></div>
   <svg viewBox="0 0 360 160" id="hbal-mol" role="img" aria-label="Mô hình phân tử hai vế"></svg>
   <div class="hbal-leg" id="hbal-leg"></div>
   <div class="tbl hbal-tbl" style="margin-top:8px"><table id="hbal-tbl"></table></div>
   <svg viewBox="0 0 360 148" id="hbal-scale" role="img" aria-label="Cái cân so sánh khối lượng hai vế" style="margin-top:10px"></svg>
   <div class="row" style="margin-top:10px"><button class="btn ghost" id="hbal-hint">💡 Gợi ý</button><button class="btn ghost" id="hbal-reset">Đặt lại hệ số 1</button></div>
   <div class="readout" id="hbal-out"></div>
  </div>`;
  const sel = document.getElementById('hbal-sel');
  function load(){ ei = +sel.value; const e = EQS[ei]; k = e.r.concat(e.p).map(() => 1); hint = 0; render(); }
  function counts(){ const e = EQS[ei], all = e.r.concat(e.p), L = {}, R = {};
    all.forEach((f, j) => { const c = parseF(f), side = j < e.r.length ? L : R; for(const x in c) side[x] = (side[x]||0) + c[x]*k[j]; });
    const els = []; all.forEach(f => Object.keys(parseF(f)).forEach(x => { if(!els.includes(x)) els.push(x); }));
    return {L, R, els}; }
  function molGroup(f, cx, cy, sc){
    const c = parseF(f), atoms = []; for(const x in c) for(let j = 0; j < c[x]; j++) atoms.push(x);
    let pos = [];
    if(atoms.length === 1) pos = [[0,0]];
    else if(atoms.length === 2){ const d = (EL[atoms[0]].r + EL[atoms[1]].r)*0.72; pos = [[-d/2,0],[d/2,0]]; }
    else {
      let ci = -1, best = -1; atoms.forEach((x, j) => { if(c[x] === 1 && EL[x].r > best){ best = EL[x].r; ci = j; } });
      if(ci >= 0 && atoms.length <= 5){
        const others = atoms.map((x, j) => j).filter(j => j !== ci), n = others.length;
        pos = atoms.map(() => [0,0]);
        others.forEach((j, q) => { const a = -Math.PI/2 + 2*Math.PI*q/n + (n === 2 ? Math.PI/2 : 0), d = EL[atoms[ci]].r + EL[atoms[j]].r*0.62; pos[j] = [d*Math.cos(a), d*Math.sin(a)]; });
        const order = others.concat([ci]);
        return order.map(j => `<circle cx="${cx + pos[j][0]*sc}" cy="${cy + pos[j][1]*sc}" r="${EL[atoms[j]].r*sc}" fill="${EL[atoms[j]].c}" stroke="var(--ink)" stroke-width=".8"/>`).join('');
      }
      const n = atoms.length, ra = atoms.reduce((s, x) => s + EL[x].r, 0)/n, R = n*ra*0.82/Math.PI;
      // xen kẽ nguyên tố cho đẹp
      const byEl = {}; atoms.forEach(x => (byEl[x] = byEl[x] || []).push(x)); const mixed = []; let left = n;
      while(left){ for(const x in byEl) if(byEl[x].length){ mixed.push(byEl[x].pop()); left--; } }
      return mixed.map((x, q) => { const a = -Math.PI/2 + 2*Math.PI*q/n; return `<circle cx="${cx + R*Math.cos(a)*sc}" cy="${cy + R*Math.sin(a)*sc}" r="${EL[x].r*sc}" fill="${EL[x].c}" stroke="var(--ink)" stroke-width=".8"/>`; }).join('');
    }
    return pos.map((q, j) => `<circle cx="${cx + q[0]*sc}" cy="${cy + q[1]*sc}" r="${EL[atoms[j]].r*sc}" fill="${EL[atoms[j]].c}" stroke="var(--ink)" stroke-width=".8"/>`).join('');
  }
  function molExt(f){ const c = parseF(f), atoms = []; for(const x in c) for(let j = 0; j < c[x]; j++) atoms.push(x);
    if(atoms.length === 1) return EL[atoms[0]].r;
    if(atoms.length === 2) return (EL[atoms[0]].r + EL[atoms[1]].r)*0.36 + Math.max(EL[atoms[0]].r, EL[atoms[1]].r);
    const single = atoms.filter(x => c[x] === 1);
    if(single.length && atoms.length <= 5){ const ce = single.reduce((a, b) => EL[a].r >= EL[b].r ? a : b); return Math.max(...atoms.map(x => EL[ce].r + EL[x].r*1.62)); }
    const n = atoms.length, ra = atoms.reduce((s, x) => s + EL[x].r, 0)/n; return n*ra*0.82/Math.PI + Math.max(...atoms.map(x => EL[x].r)); }
  function drawMol(){
    const e = EQS[ei], all = e.r.concat(e.p), ext = Math.max(...all.map(molExt));
    const W = 160, sides = [e.r.map((f, j) => [f, k[j]]), e.p.map((f, j) => [f, k[e.r.length + j]])];
    const nOf = s => s.reduce((a, [, n]) => a + n, 0);
    let cell = 58; const maxH = 180;
    const rowsFor = (s, cl) => { const cols = Math.max(1, Math.floor(W/cl)); return s.reduce((a, [, n]) => a + Math.ceil(n/cols), 0); };
    while(cell > 16 && Math.max(rowsFor(sides[0], cell), rowsFor(sides[1], cell))*cell > maxH) cell -= 2;
    const sc = (cell/2 - 1.5)/ext;
    const rows = Math.max(rowsFor(sides[0], cell), rowsFor(sides[1], cell));
    const H = Math.max(110, rows*cell + 34);
    let out = `<text x="85" y="16" class="svgm" text-anchor="middle">Vế trái (chất phản ứng)</text><text x="275" y="16" class="svgm" text-anchor="middle">Vế phải (sản phẩm)</text>
      <line x1="180" y1="24" x2="180" y2="${H-8}" stroke="var(--line)" stroke-dasharray="4 4"/>
      <text x="180" y="${(H+20)/2}" class="svgt" text-anchor="middle" style="font-size:18px">→</text>`;
    sides.forEach((s, si) => { const x0 = si ? 195 : 5, cols = Math.max(1, Math.floor(W/cell)); let row = 0;
      s.forEach(([f, n]) => { for(let q = 0; q < n; q++){ const cx = x0 + (q % cols + .5)*cell, cy = 26 + (row + Math.floor(q/cols) + .5)*cell; out += molGroup(f, cx, cy, sc); }
        row += Math.ceil(n/cols); }); });
    const svg = document.getElementById('hbal-mol'); svg.setAttribute('viewBox', `0 0 360 ${H}`); svg.innerHTML = out;
    const els = []; all.forEach(f => Object.keys(parseF(f)).forEach(x => { if(!els.includes(x)) els.push(x); }));
    document.getElementById('hbal-leg').innerHTML = els.map(x => `<span><i style="background:${EL[x].c}"></i>${x} (${EL_NAME[x]})</span>`).join('') + '<span>Mô hình đơn giản, không đúng hình dạng thật.</span>';
  }
  function drawScale(mL, mR){
    const diff = mR - mL, ang = Math.abs(diff) < 1e-9 ? 0 : clamp(diff/Math.max(mL, mR)*40 + (diff > 0 ? 3 : -3), -16, 16);
    const rad = ang*Math.PI/180, cx = 180, cy = 40, L = 120;
    const lx = cx - L*Math.cos(rad), ly = cy - L*Math.sin(rad), rx = cx + L*Math.cos(rad), ry = cy + L*Math.sin(rad);
    const pan = (x, y, m, lab) => `<line x1="${x}" y1="${y}" x2="${x-30}" y2="${y+34}" stroke="var(--muted)"/><line x1="${x}" y1="${y}" x2="${x+30}" y2="${y+34}" stroke="var(--muted)"/>
      <path d="M${x-38} ${y+34} Q${x} ${y+52} ${x+38} ${y+34} Z" fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="${x}" y="${y+30}" class="svgt" text-anchor="middle" style="font-weight:700">${fmt(m, 1)}</text><text x="${x}" y="${y+66}" class="svgm" text-anchor="middle">${lab}</text>`;
    document.getElementById('hbal-scale').innerHTML = `
      <polygon points="${cx},${cy} ${cx-16},${cy+78} ${cx+16},${cy+78}" fill="var(--muted)"/>
      <rect x="${cx-40}" y="${cy+78}" width="80" height="6" rx="3" fill="var(--ink)"/>
      <line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="5" fill="var(--accent)"/>
      ${pan(lx, ly, mL, 'vế trái (amu)')}${pan(rx, ry, mR, 'vế phải (amu)')}
      <text x="${cx}" y="${cy-20}" class="svgm" text-anchor="middle">${Math.abs(diff) < 1e-9 ? 'thăng bằng ⚖️' : 'nghiêng về vế ' + (diff > 0 ? 'phải' : 'trái')}</text>`;
  }
  function render(){
    const e = EQS[ei], all = e.r.concat(e.p);
    let h = '';
    all.forEach((f, j) => {
      if(j > 0) h += `<span class="hbal-op">${j === e.r.length ? '→' : '+'}</span>`;
      h += `<div class="hbal-sp"><div class="hbal-k"><button data-j="${j}" data-d="-1" aria-label="Giảm hệ số ${sub(f)}" ${k[j] <= 1 ? 'disabled' : ''}>−</button><b>${k[j]}</b><button data-j="${j}" data-d="1" aria-label="Tăng hệ số ${sub(f)}" ${k[j] >= 12 ? 'disabled' : ''}>+</button></div><span class="hbal-f">${sub(f)}</span></div>`;
    });
    const eqBox = document.getElementById('hbal-eq'); eqBox.innerHTML = h;
    eqBox.querySelectorAll('button').forEach(b => b.onclick = () => { const j = +b.dataset.j; k[j] = clamp(k[j] + +b.dataset.d, 1, 12); render(); });
    const {L, R, els} = counts();
    document.getElementById('hbal-tbl').innerHTML = `<tr><th>Nguyên tố</th>${els.map(x => `<th>${x}</th>`).join('')}</tr>
      <tr><th>Vế trái</th>${els.map(x => `<td class="${L[x] === R[x] ? 'ok' : 'no'}">${L[x]||0}</td>`).join('')}</tr>
      <tr><th>Vế phải</th>${els.map(x => `<td class="${L[x] === R[x] ? 'ok' : 'no'}">${R[x]||0}</td>`).join('')}</tr>`;
    drawMol();
    const mL = e.r.reduce((s, f, j) => s + k[j]*molarMass(f), 0), mR = e.p.reduce((s, f, j) => s + k[e.r.length + j]*molarMass(f), 0);
    drawScale(mL, mR);
    const bal = els.every(x => L[x] === R[x]), g = k.reduce(gcd);
    const out = document.getElementById('hbal-out');
    out.classList.toggle('hbal-win', bal && g === 1);
    if(bal && g === 1){
      const word = f => { const c = parseF(f), ks = Object.keys(c); return ks.length === 1 && c[ks[0]] === 1 ? 'nguyên tử' : 'phân tử'; };
      const parts = all.map((f, j) => `${k[j]} ${word(f)} ${sub(f)}`);
      out.innerHTML = `<div class="big" style="color:var(--ok)">🎉 Cân bằng rồi! ${eqStr(e, k)}</div>
        <b>Ý nghĩa:</b> cứ ${parts.slice(0, e.r.length).join(' tác dụng với ')} tạo ra ${parts.slice(e.r.length).join(' và ')}. Tỉ lệ <b>${k.join(' : ')}</b>.<br>
        Khối lượng hai vế: ${fmt(mL, 1)} = ${fmt(mR, 1)} amu, đúng định luật bảo toàn khối lượng (nguyên tử chỉ “đổi bạn nắm tay”, không mất đi).
        <div class="muted" style="margin-top:4px">Thử: chọn phương trình tiếp theo trong danh sách.</div>`;
    } else if(bal){
      out.innerHTML = `<div class="big">Đã cân bằng nhưng chưa tối giản</div>Các hệ số ${k.join(', ')} cùng chia hết cho ${g}. Hãy chia hết cho ${g} để được hệ số nhỏ nhất: <b>${k.map(x => x/g).join(' : ')}</b>.`;
    } else {
      const bad = els.filter(x => L[x] !== R[x]);
      out.innerHTML = `<div class="big">Chưa cân bằng</div>Nguyên tố còn lệch: ${bad.map(x => `<b>${x}</b> (trái ${L[x]||0}, phải ${R[x]||0})`).join(', ')}.<br><span class="muted">Mẹo: bắt đầu từ nguyên tố có chỉ số lẻ hoặc lớn; gặp số lẻ thì nhân 2 cho chẵn; cân H và O sau cùng.</span>`;
    }
    const hb = document.getElementById('hbal-hint');
    hb.textContent = hint < 2 ? `💡 Gợi ý ${hint + 1}` : '👀 Xem đáp án';
  }
  document.getElementById('hbal-hint').onclick = () => {
    const e = EQS[ei], out = document.getElementById('hbal-out');
    if(hint < 2){ out.insertAdjacentHTML('beforeend', `<div class="note" style="margin-bottom:0">💡 ${e.h[hint]}</div>`); hint++; document.getElementById('hbal-hint').textContent = hint < 2 ? `💡 Gợi ý ${hint + 1}` : '👀 Xem đáp án'; }
    else { k = e.k.slice(); hint = 3; render(); }
  };
  document.getElementById('hbal-reset').onclick = () => { k = k.map(() => 1); render(); };
  sel.onchange = load;
  load();
},

/* =========================================================
   3. MOL, KHỐI LƯỢNG MOL, THỂ TÍCH KHÍ, TỈ KHỐI
   ========================================================= */
hoa_mole(p){
  const S = [
    {id:'H2O', n:'Nước', f:'H₂O', st:'l', c:'#7FB7F0'},
    {id:'NaCl', n:'Muối ăn', f:'NaCl', st:'s', c:'#F4F4F4'},
    {id:'C12H22O11', n:'Đường kính', f:'C₁₂H₂₂O₁₁', st:'s', c:'#FFF4D6'},
    {id:'CaCO3', n:'Đá vôi', f:'CaCO₃', st:'s', c:'#E8E1D6'},
    {id:'H2', n:'Khí hydrogen', f:'H₂', st:'g', c:'#9FD8FF'},
    {id:'He', n:'Khí helium (heli)', f:'He', st:'g', c:'#FF9EC9'},
    {id:'CH4', n:'Khí methane', f:'CH₄', st:'g', c:'#9EE6B8'},
    {id:'NH3', n:'Khí ammonia', f:'NH₃', st:'g', c:'#C7B3FF'},
    {id:'N2', n:'Khí nitrogen', f:'N₂', st:'g', c:'#A7C4FF'},
    {id:'O2', n:'Khí oxygen', f:'O₂', st:'g', c:'#FF8A8A'},
    {id:'CO2', n:'Khí carbon dioxide', f:'CO₂', st:'g', c:'#B9B9B9'},
    {id:'C4H10', n:'Khí butane (gas)', f:'C₄H₁₀', st:'g', c:'#FFC36B'}
  ];
  S.forEach(s => s.M = molarMass(s.id));
  p.innerHTML = `<style>
   .hmol-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
   .hmol-chips button{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:5px 11px;font-size:14px}
   .hmol-chips button[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff}
   #hmol-bal{transition:transform .9s cubic-bezier(.3,1.4,.5,1)}
   @media (prefers-reduced-motion:reduce){#hmol-bal{transition:none}}
  </style>
  <div class="sec lab"><h3>Đếm hạt bằng mol</h3>
   <p class="muted">Chọn chất, kéo khối lượng. Đoán trước: <b>10 g muối và 10 g đường, bên nào nhiều phân tử hơn?</b> Với chất khí, xem quả bóng bơm khí đó bay lên hay chìm xuống.</p>
   <div class="hmol-chips" id="hmol-chips">${S.map((s, j) => `<button data-j="${j}" aria-pressed="${j === 0}">${s.f} <span style="opacity:.75">${s.n.replace('Khí ', '')}</span></button>`).join('')}</div>
   <svg viewBox="0 0 320 190" id="hmol-svg" role="img" aria-label="Mẫu chất và các túi mol"></svg>
   <div class="ctrl"><div>${slider('hmol-m', 'Khối lượng m', 0.5, 360, 0.5, 18, 'g')}</div>
    <div class="row" style="align-self:end"><button class="btn ghost" id="hmol-cup">🥛 Cốc nước 180 g</button><button class="btn ghost" id="hmol-cmp">🧂 vs 🍬 10 g</button></div></div>
   <div class="readout" id="hmol-out"></div>
  </div>`;
  let cur = 0;
  const chips = document.getElementById('hmol-chips');
  function setSub(j){ cur = j; chips.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.j === j)); draw(); }
  chips.querySelectorAll('button').forEach(b => b.onclick = () => setSub(+b.dataset.j));
  function setM(m){ const el = document.getElementById('hmol-m'); el.value = m; document.getElementById('hmol-m-v').textContent = fmt(m) + ' g'; }
  document.getElementById('hmol-cup').onclick = () => { setM(180); setSub(0); };
  document.getElementById('hmol-cmp').onclick = () => { setM(10); setSub(1);
    const nS = 10/58.5, nD = 10/342;
    document.getElementById('hmol-out').insertAdjacentHTML('beforeend', `<div class="note" style="margin-bottom:0">So sánh 10 g: muối n = 10/58,5 ≈ ${fmt(nS, 3)} mol, đường n = 10/342 ≈ ${fmt(nD, 3)} mol. Muối có M nhỏ hơn nên nhiều “hạt” hơn, gấp khoảng ${fmt(nS/nD, 1)} lần! (Bấm chip đường để xem.)</div>`); };
  function bags(n){
    let unit = 1; while(n/unit > 12) unit *= 10;
    const full = n/unit; let s = `<text x="248" y="22" class="svgm" text-anchor="middle">mỗi túi = ${fmt(unit)} mol</text>`;
    for(let q = 0; q < 12; q++){ const x = 190 + (q % 3)*40, y = 32 + Math.floor(q/3)*38, fr = clamp(full - q, 0, 1);
      s += `<rect x="${x}" y="${y}" width="32" height="30" rx="7" fill="var(--paper)" stroke="var(--line)" stroke-width="1.5"/>`;
      if(fr > 0) s += `<rect x="${x}" y="${y + 30*(1 - fr)}" width="32" height="${30*fr}" rx="${fr > .2 ? 7 : 2}" fill="var(--accent)" opacity=".75"/>`;
      if(fr >= 1) s += `<text x="${x+16}" y="${y+19}" class="svgm" text-anchor="middle" style="fill:#fff;font-weight:700">${unit >= 1000 ? fmt(unit/1000) + 'k' : fmt(unit)}</text>`; }
    return s;
  }
  function draw(){
    const s = S[cur], m = val('hmol-m'), n = m/s.M, Np = n*6.022e23;
    let pic = '';
    if(s.st === 'g'){
      const d = s.M/29, V = 24.79*n;
      const r = clamp(10 + Math.cbrt(V)*2.2, 12, 30), y = clamp(95 + (d - 1)*300, 16 + r, 166 - r - 2), sl = clamp(176 - y - r, 4, 60);
      pic = `<rect x="6" y="10" width="170" height="170" rx="10" fill="var(--accent-soft)"/>
        <text x="91" y="172" class="svgm" text-anchor="middle">phòng đầy không khí (M ≈ 29)</text>
        <line x1="6" y1="178" x2="176" y2="178" stroke="var(--ink)" stroke-width="3"/>
        <g id="hmol-bal" style="transform:translate(91px,${y}px)">
          <path d="M0 ${r} Q -6 ${r+sl*0.3} 4 ${r+sl*0.5} T 0 ${r+sl}" fill="none" stroke="var(--muted)" stroke-width="1.2"/>
          <ellipse cx="0" cy="0" rx="${r*0.88}" ry="${r}" fill="${s.c}" stroke="var(--ink)" stroke-width="1.5"/>
          <polygon points="-4,${r} 4,${r} 0,${r+6}" fill="${s.c}" stroke="var(--ink)" stroke-width="1"/>
          <ellipse cx="${-r*0.35}" cy="${-r*0.4}" rx="${r*0.18}" ry="${r*0.3}" fill="#fff" opacity=".6"/>
          <text x="0" y="4" class="svgt" text-anchor="middle" style="fill:#222;font-weight:700">${s.f}</text></g>`;
    } else {
      const k = Math.cbrt(m/360);
      if(s.st === 'l'){ const h = 20 + 100*m/360;
        pic = `<path d="M40 50 L50 172 H132 L142 50" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
          <path d="M${40 + 10*(1 - h/122)} ${172 - h} L50 171 H132 L${142 - 10*(1 - h/122)} ${172 - h} Z" fill="${s.c}" opacity=".75"/>
          <text x="91" y="40" class="svgm" text-anchor="middle">cốc nước</text>`;
      } else { const w = 30 + 110*k, h = 12 + 70*k;
        pic = `<rect x="16" y="160" width="150" height="14" rx="5" fill="var(--muted)"/><text x="91" y="187" class="svgm" text-anchor="middle">cân nhà bếp</text>
          <path d="M${91 - w/2} 160 Q91 ${160 - h*1.6} ${91 + w/2} 160 Z" fill="${s.c}" stroke="var(--ink)" stroke-width="1.5"/>`;
        for(let q = 0; q < 14; q++){ const xx = 91 + (Math.sin(q*7.3))*w*0.35, yy = 156 - Math.abs(Math.cos(q*3.1))*h*0.6; pic += `<rect x="${xx}" y="${yy}" width="3" height="3" fill="var(--muted)" opacity=".5"/>`; }
      }
    }
    document.getElementById('hmol-svg').innerHTML = pic + bags(n) + `<text x="248" y="186" class="svgt" text-anchor="middle">n = ${fmt(n, n < 1 ? 3 : 2)} mol</text>`;
    const bal = document.getElementById('hmol-bal');
    let h = `<div class="big">n = m / M = ${fmt(m)} / ${fmt(s.M, 1)} = ${fmt(n, n < 1 ? 4 : 3)} mol</div>
      M(${s.f}) = ${fmt(s.M, 1)} g/mol (cộng khối lượng các nguyên tử)<br>
      Số phân tử: N = n · 6,022·10<sup>23</sup> = <b>${sci(Np)}</b> ${s.id === 'NaCl' ? 'cặp Na, Cl' : s.id === 'He' ? 'nguyên tử' : 'phân tử'}<br>`;
    if(s.st === 'g'){ const d = s.M/29, V = 24.79*n;
      h += `Thể tích ở đkc (25 °C, 1 bar): V = 24,79 · n = <b>${fmt(V, 2)} L</b><br>
        Tỉ khối so với không khí: d = ${fmt(s.M, 1)} / 29 = <b>${fmt(d, 2)}</b> ⇒ ${d < 0.9 ? 'nhẹ hơn không khí, bóng <b>bay lên</b> 🎈' : d > 1.1 ? 'nặng hơn không khí, bóng <b>chìm xuống</b> sàn' : 'xấp xỉ không khí, bóng gần như lơ lửng (thực tế vỏ cao su làm bóng rơi)'}.
        ${s.id === 'H2' ? '<br><span class="muted">Nhẹ nhất nhưng rất dễ cháy nổ, không dùng bơm bóng!</span>' : s.id === 'CO2' ? '<br><span class="muted">Vì nặng hơn không khí, CO₂ đọng ở đáy giếng, hầm ủ: phải thông khí trước khi xuống.</span>' : s.id === 'C4H10' ? '<br><span class="muted">Gas rò rỉ đọng sát sàn: khoá van, mở cửa, không bật công tắc điện.</span>' : ''}`;
    } else h += `<span class="muted">Đây là chất ${s.st === 'l' ? 'lỏng' : 'rắn'}: <b>không</b> dùng V = 24,79·n (công thức chỉ dành cho chất khí).</span>`;
    if(s.id === 'H2O' && Math.abs(m - 180) < 0.01) h += `<div class="note" style="margin-bottom:0">Một cốc nước 180 g = 10 mol ≈ <b>6,022·10<sup>24</sup> phân tử</b>. Nếu mỗi giây đếm 1 phân tử thì phải mất khoảng 190 triệu tỉ năm!</div>`;
    document.getElementById('hmol-out').innerHTML = h + `<div class="muted" style="margin-top:6px">Thử: chọn He, CH₄, CO₂ và C₄H₁₀ cùng 10 g. Khí nào bay lên? Khí nào chiếm thể tích lớn nhất?</div>`;
    void bal;
  }
  bindSliders(p, draw); draw();
},

/* =========================================================
   4. DUNG DỊCH VÀ NỒNG ĐỘ
   ========================================================= */
hoa_solution(p){
  // Độ tan (g/100 g nước) theo nhiệt độ, số liệu tra bảng
  const SOL = {
    salt:{n:'Muối ăn NaCl', M:58.5, T:[0,20,40,60,80,100], S:[35.7,35.9,36.4,37.1,38.0,39.2], col:[90,170,230], max:250},
    sugar:{n:'Đường kính C₁₂H₂₂O₁₁', M:342, T:[0,20,40,60,80,100], S:[179,204,238,287,362,487], col:[240,170,60], max:1200}
  };
  // khối lượng riêng gần đúng của dung dịch (g/mL) theo C%
  const dens = (kind, c) => kind === 'salt' ? 1 + 0.0072*c : 1 + 0.0038*c + 0.000022*c*c;
  const Sat = (sol, t) => { const T = sol.T, S = sol.S; for(let j = 0; j < T.length - 1; j++) if(t <= T[j+1]) return S[j] + (S[j+1] - S[j])*(t - T[j])/(T[j+1] - T[j]); return S[S.length - 1]; };
  p.innerHTML = `<style>.hsol-pre{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 2px}.hsol-pre .btn{padding:6px 11px;font-size:14px}</style>
  <div class="sec lab"><h3>Pha dung dịch</h3>
   <p class="muted">Chọn chất tan, kéo lượng chất tan, lượng nước và nhiệt độ. Đoán trước: <b>100 mL nước ở 25 °C hoà tan được tối đa bao nhiêu gam muối?</b> Cho dần muối vào để kiểm tra.</p>
   <svg viewBox="0 0 320 220" id="hsol-svg" role="img" aria-label="Cốc dung dịch và nhiệt kế"></svg>
   <div class="ctrl">
    <div><label for="hsol-kind">Chất tan</label><select id="hsol-kind"><option value="salt">Muối ăn (NaCl, M = 58,5)</option><option value="sugar">Đường kính (C₁₂H₂₂O₁₁, M = 342)</option></select></div>
    <div>${slider('hsol-t', 'Nhiệt độ nước', 0, 100, 5, 25, '°C')}</div>
    <div>${slider('hsol-m', 'Chất tan cho vào', 0, 250, 0.5, 10, 'g')}</div>
    <div>${slider('hsol-w', 'Nước (1 mL nặng 1 g)', 10, 500, 0.5, 90, 'mL')}</div>
   </div>
   <div class="hsol-pre"><span class="muted" style="font-size:14px;align-self:center">Mốc thực tế:</span>
    <button class="btn ghost" data-pre="phys">💧 Nước muối sinh lí 0,9%</button><button class="btn ghost" data-pre="sea">🌊 Nước biển ~3,5%</button><button class="btn ghost" data-pre="trap">⚠️ 10 g muối + 90 g nước</button></div>
   <div class="readout" id="hsol-out"></div>
  </div>`;
  const kindSel = document.getElementById('hsol-kind'), mEl = document.getElementById('hsol-m');
  const setS = (id, v) => { const el = document.getElementById(id); el.value = v; document.getElementById(id + '-v').textContent = fmt(v) + ' ' + el.dataset.unit; };
  let note = '';
  p.querySelectorAll('[data-pre]').forEach(b => b.onclick = () => {
    kindSel.value = 'salt'; mEl.max = SOL.salt.max;
    const pr = b.dataset.pre;
    if(pr === 'phys'){ setS('hsol-m', 4.5); setS('hsol-w', 495.5); note = 'Chai nước muối sinh lí 500 g: 4,5 g NaCl + 495,5 g nước ⇒ C% = 4,5/500 × 100% = 0,9%. Gần bằng nồng độ muối trong cơ thể nên nhỏ mắt không xót.'; }
    if(pr === 'sea'){ setS('hsol-w', 500); setS('hsol-m', 18); note = 'Nước biển trung bình có khoảng 35 g muối trong 1 kg (≈ 3,5%). Ở đây: 18 g muối + 500 g nước ≈ 3,5%. Uống nước biển làm cơ thể mất nước thêm!'; }
    if(pr === 'trap'){ setS('hsol-m', 10); setS('hsol-w', 90); note = 'Bẫy hay gặp: C% = 10/(10 + 90) = 10%, chia cho khối lượng <b>dung dịch</b>, không phải 10/90 ≈ 11,1%.'; }
    draw();
  });
  kindSel.addEventListener('input', () => { const s = SOL[kindSel.value]; mEl.max = s.max; if(+mEl.value > s.max) setS('hsol-m', s.max); });
  function draw(){
    const kind = kindSel.value, sol = SOL[kind], t = val('hsol-t'), m = val('hsol-m'), w = val('hsol-w');
    document.getElementById('hsol-m-v').textContent = fmt(m) + ' g';
    const S = Sat(sol, t), maxDis = S*w/100, dis = Math.min(m, maxDis), extra = Math.max(0, m - maxDis);
    const mdd = dis + w, C = mdd > 0 ? dis/mdd*100 : 0, n = dis/sol.M, D = dens(kind, C), Vdd = mdd/D, CM = n/(Vdd/1000);
    const satState = m > maxDis + 1e-9 ? 'over' : Math.abs(m - maxDis) < 0.25 ? 'sat' : 'un';
    // hình vẽ
    const cupTop = 40, cupBot = 200, cupL = 70, cupR = 210, capMl = Vdd <= 240 ? 250 : Vdd <= 580 ? 600 : 1500, tstep = capMl === 250 ? 50 : capMl === 600 ? 100 : 250;
    const h = clamp(Vdd/capMl, 0.03, 1)*(cupBot - cupTop - 10);
    const yL = cupBot - h;
    const a = clamp(0.12 + C/ (kind === 'salt' ? 30 : 75)*0.75, 0.12, 0.9);
    const [r, g, b] = sol.col;
    let dots = ''; const nd = Math.round(clamp(C*(kind === 'salt' ? 3 : 1.1), 0, 80));
    for(let q = 0; q < nd; q++){ const xx = cupL + 8 + ((q*53.7) % (cupR - cupL - 16)), yy = yL + 6 + ((q*37.3) % Math.max(4, cupBot - yL - 14)); dots += `<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="1.6" fill="rgb(${r},${g},${b})" opacity=".9"/>`; }
    let cry = ''; const nc = Math.round(clamp(Math.sqrt(extra)*3, extra > 0 ? 2 : 0, 60));
    for(let q = 0; q < nc; q++){ const row = Math.floor(q/16), xx = cupL + 10 + (q % 16)*7.6 + (row % 2)*3, yy = cupBot - 6 - row*5; cry += `<rect x="${xx}" y="${yy}" width="5.5" height="5.5" transform="rotate(${(q*37) % 45} ${xx + 2.7} ${yy + 2.7})" fill="#FFFFFF" stroke="#8A7A99" stroke-width=".7"/>`; }
    const thY = 196 - t*1.35;
    document.getElementById('hsol-svg').innerHTML = `
      <rect x="${cupL+1}" y="${yL}" width="${cupR - cupL - 2}" height="${cupBot - yL}" fill="rgba(${r},${g},${b},${a.toFixed(2)})"/>
      ${dots}${cry}
      <path d="M${cupL} ${cupTop - 10} V${cupBot} H${cupR} V${cupTop - 10}" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      ${Array.from({length: capMl/tstep}, (_, q) => (q + 1)*tstep).map(v => { const yy = cupBot - v/capMl*(cupBot - cupTop - 10); return `<line x1="${cupR - 12}" y1="${yy}" x2="${cupR}" y2="${yy}" stroke="var(--ink)"/><text x="${cupR + 4}" y="${yy + 3}" class="svgm">${v}</text>`; }).join('')}
      <text x="${cupR + 4}" y="${cupTop - 14}" class="svgm">mL (cốc ${capMl} mL)</text>
      ${extra > 0 ? `<text x="${(cupL + cupR)/2}" y="${cupBot + 15}" class="svgt" text-anchor="middle" style="fill:var(--bad);font-weight:700">↑ ${fmt(extra, 1)} g không tan, lắng đáy</text>` : `<text x="${(cupL + cupR)/2}" y="${cupBot + 15}" class="svgm" text-anchor="middle">màu tô đậm theo nồng độ (để dễ nhìn)</text>`}
      <rect x="28" y="40" width="12" height="160" rx="6" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.3"/>
      <rect x="31" y="${thY}" width="6" height="${200 - thY}" fill="#E5484D"/><circle cx="34" cy="204" r="8" fill="#E5484D" stroke="var(--ink)" stroke-width="1.3"/>
      <text x="34" y="32" class="svgt" text-anchor="middle">${t} °C</text>
      <text x="${(cupL + cupR)/2}" y="18" class="svgt" text-anchor="middle" style="font-weight:700">${satState === 'un' ? 'Dung dịch chưa bão hoà' : 'Dung dịch bão hoà'}</text>`;
    const out = document.getElementById('hsol-out');
    out.innerHTML = `<div class="big">C% = ${fmt(dis, 2)} / ${fmt(mdd, 2)} × 100% = ${fmt(C, 2)}%</div>
      m<sub>dd</sub> = m<sub>ct đã tan</sub> + m<sub>nước</sub> = ${fmt(dis, 2)} + ${fmt(w, 1)} = ${fmt(mdd, 2)} g<br>
      Độ tan của ${sol.n.split(' ')[0] === 'Muối' ? 'muối ăn' : 'đường'} ở ${t} °C: S ≈ <b>${fmt(S, 1)} g</b>/100 g nước ⇒ ${fmt(w, 1)} g nước tan tối đa ${fmt(maxDis, 1)} g.<br>
      ${satState === 'over' ? `<b style="color:var(--bad)">Dung dịch bão hoà!</b> Còn ${fmt(extra, 1)} g không tan lắng xuống đáy (không tính vào C%). Thử tăng nhiệt độ hoặc thêm nước.<br>` : satState === 'sat' ? '<b style="color:var(--ok)">Vừa đủ bão hoà.</b><br>' : `Chưa bão hoà: còn hoà tan thêm được ${fmt(maxDis - m, 1)} g.<br>`}
      Nồng độ mol: n = ${fmt(dis, 2)}/${fmt(sol.M, 1)} = ${fmt(n, 4)} mol; V<sub>dd</sub> ≈ m<sub>dd</sub>/D = ${fmt(mdd, 1)}/${fmt(D, 3)} ≈ ${fmt(Vdd, 1)} mL ⇒ <b>C<sub>M</sub> = n/V = ${fmt(CM, 3)} M</b><br>
      <span class="muted">V trong C<sub>M</sub> là thể tích <b>dung dịch</b> (lít), không phải thể tích nước. Ở đây ước tính từ khối lượng riêng D của dung dịch (tra bảng, gần đúng).${kind === 'sugar' ? ' Đường làm thể tích tăng rõ rệt.' : ''}</span>
      ${note ? `<div class="note" style="margin-bottom:0">${note}</div>` : ''}`;
    note = '';
  }
  bindSliders(p, draw); draw();
},

/* =========================================================
   5. TỐC ĐỘ PHẢN ỨNG
   ========================================================= */
hoa_rate(p){
  const TMAX = 300, DUR = 6000;
  const COLORS = ['#E86FB4', '#3B82F6', '#2E9E6E', '#F28C38', '#9B6BDE'];
  let runs = [], raf = null, cur = null;
  p.innerHTML = `<style>
   .hrate-leg{display:flex;flex-direction:column;gap:3px;font-size:13.5px;margin-top:6px}
   .hrate-leg i{display:inline-block;width:18px;height:4px;border-radius:2px;vertical-align:3px;margin-right:6px}
   .hrate-modes{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0 10px}
  </style>
  <div class="sec lab"><h3>Cuộc đua sủi bọt</h3>
   <p class="muted">Chọn điều kiện rồi bấm “Bắt đầu”, đo thể tích khí thoát ra theo thời gian. Mỗi lần chạy giữ lại đường cũ để so sánh. Đoán trước: <b>đá vôi bột và đá vôi viên, cái nào về đích trước? Cuối cùng có thu được nhiều khí hơn không?</b></p>
   <div class="hrate-modes"><button class="btn" id="hrate-mA">🪨 Đá vôi + HCl</button><button class="btn ghost" id="hrate-mB">🫧 Nước oxy già + MnO₂</button></div>
   <p class="muted" id="hrate-eq" style="font-size:14.5px"></p>
   <svg viewBox="0 0 320 150" id="hrate-app" role="img" aria-label="Bình phản ứng và xi lanh thu khí"></svg>
   <div class="ctrl">
    <div>${slider('hrate-T', 'Nhiệt độ', 10, 60, 5, 25, '°C')}</div>
    <div id="hrate-cbox">${slider('hrate-C', 'Nồng độ HCl', 0.5, 2, 0.5, 1, 'M')}</div>
    <div id="hrate-fbox"><label for="hrate-form">Dạng đá vôi (1 g)</label><select id="hrate-form"><option value="v">Viên to</option><option value="b">Bột mịn</option></select></div>
    <div id="hrate-kbox" hidden><label><input type="checkbox" id="hrate-cat"> Thêm một ít MnO₂ (chất xúc tác)</label></div>
   </div>
   <div class="row"><button class="btn" id="hrate-go">▶ Bắt đầu</button><button class="btn ghost" id="hrate-clr">Xoá đồ thị</button><span class="muted" id="hrate-clock">t = 0 s</span></div>
   <svg viewBox="0 0 320 210" id="hrate-g" role="img" aria-label="Đồ thị thể tích khí theo thời gian" style="margin-top:10px"></svg>
   <div class="hrate-leg" id="hrate-leg"></div>
   <div class="readout" id="hrate-out"></div>
  </div>`;
  let mode = 'A';
  function cfg(){
    const T = val('hrate-T'), f2 = Math.pow(2, (T - 25)/10);
    if(mode === 'A'){ const C = val('hrate-C'), b = document.getElementById('hrate-form').value === 'b';
      return {Vmax:247.9, k:0.012*C*f2*(b ? 6 : 1), label:`Đá vôi ${b ? 'bột' : 'viên'}, HCl ${fmt(C)} M, ${T} °C`, gas:'CO₂'}; }
    const cat = document.getElementById('hrate-cat').checked;
    return {Vmax:218.7, k:(cat ? 0.05 : 0.00004)*f2, label:`H₂O₂ 3%, ${cat ? 'có MnO₂' : 'không xúc tác'}, ${T} °C`, gas:'O₂'};
  }
  const Vt = (c, t) => c.Vmax*(1 - Math.exp(-c.k*t));
  function setMode(m){ mode = m; stop(); cur = null; runs = [];
    document.getElementById('hrate-mA').className = 'btn' + (m === 'A' ? '' : ' ghost');
    document.getElementById('hrate-mB').className = 'btn' + (m === 'B' ? '' : ' ghost');
    document.getElementById('hrate-cbox').hidden = m !== 'A'; document.getElementById('hrate-fbox').hidden = m !== 'A'; document.getElementById('hrate-kbox').hidden = m !== 'B';
    document.getElementById('hrate-eq').innerHTML = m === 'A'
      ? 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. Dùng 1 g đá vôi (0,01 mol) và 50 mL HCl luôn dư, nên thể tích CO₂ tối đa = 0,01 × 24,79 L ≈ 248 mL.'
      : '2H₂O₂ → 2H₂O + O₂↑ (xúc tác MnO₂). Dùng 20 mL nước oxy già 3% (≈ 0,0176 mol H₂O₂), thể tích O₂ tối đa ≈ 219 mL.';
    drawApp(0, 0, []); drawGraph(0); readout(); }
  document.getElementById('hrate-mA').onclick = () => setMode('A');
  document.getElementById('hrate-mB').onclick = () => setMode('B');
  function drawApp(V, rate, bubbles){
    const c = cur || cfg(), mA = mode === 'A';
    const liq = mA ? 'rgba(180,220,255,.55)' : 'rgba(200,230,255,.5)';
    let solid = '';
    if(mA){ const b = document.getElementById('hrate-form').value === 'b', left = clamp(1 - V/c.Vmax, 0, 1);
      if(b) for(let q = 0; q < Math.round(28*left); q++) solid += `<circle cx="${42 + (q*13.7) % 56}" cy="${128 - (q % 3)*2}" r="1.8" fill="#D8CFC2" stroke="#8A7F70" stroke-width=".4"/>`;
      else solid = `<ellipse cx="70" cy="${126}" rx="${4 + 12*Math.sqrt(left)}" ry="${2 + 6*Math.sqrt(left)}" fill="#D8CFC2" stroke="#8A7F70"/>`; }
    else if(document.getElementById('hrate-cat').checked) for(let q = 0; q < 10; q++) solid += `<circle cx="${48 + q*5}" cy="${129 - (q % 2)*2}" r="2" fill="#333" stroke="#000" stroke-width=".3"/>`;
    const px = 150 + 140*clamp(V/260, 0, 1);
    document.getElementById('hrate-app').innerHTML = `
      <rect x="31" y="70" width="78" height="62" fill="${liq}"/>
      ${solid}${bubbles.map(b => `<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r}" fill="none" stroke="var(--ink)" stroke-width=".8" opacity=".75"/>`).join('')}
      <path d="M30 30 V133 H110 V30" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="26" y="22" width="88" height="10" rx="3" fill="var(--muted)"/>
      <path d="M100 22 V12 H150 V40" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <rect x="150" y="32" width="145" height="20" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <rect x="151" y="33" width="${Math.max(0, px - 151)}" height="18" fill="var(--accent-soft)"/>
      <rect x="${px}" y="30" width="5" height="24" fill="var(--ink)"/><line x1="${px + 5}" y1="42" x2="${px + 22}" y2="42" stroke="var(--ink)" stroke-width="2"/>
      ${[0, 100, 200].map(v => `<line x1="${150 + 140*v/260}" y1="52" x2="${150 + 140*v/260}" y2="58" stroke="var(--ink)"/><text x="${150 + 140*v/260}" y="68" class="svgm" text-anchor="middle">${v}</text>`).join('')}
      <text x="222" y="86" class="svgt" text-anchor="middle">xi lanh thu khí ${c.gas}: <tspan style="font-weight:700">${fmt(V, 1)} mL</tspan></text>
      <text x="222" y="104" class="svgm" text-anchor="middle">tốc độ lúc này ≈ ${fmt(rate, 2)} mL/s</text>
      <text x="70" y="147" class="svgm" text-anchor="middle">${mA ? 'đá vôi + HCl' : 'H₂O₂ 3%'}</text>`;
  }
  const gx = t => 40 + 270*t/TMAX, gy = V => 180 - 160*V/260;
  function path(c, tEnd){ let d = ''; const N = 90; for(let q = 0; q <= N; q++){ const t = tEnd*q/N; d += (q ? 'L' : 'M') + gx(t).toFixed(1) + ' ' + gy(Vt(c, t)).toFixed(1); } return d; }
  function drawGraph(tNow){
    let s = `<line x1="40" y1="180" x2="315" y2="180" stroke="var(--ink)" stroke-width="1.5"/><line x1="40" y1="180" x2="40" y2="12" stroke="var(--ink)" stroke-width="1.5"/>`;
    for(let t = 0; t <= TMAX; t += 60) s += `<line x1="${gx(t)}" y1="180" x2="${gx(t)}" y2="184" stroke="var(--ink)"/><text x="${gx(t)}" y="195" class="svgm" text-anchor="middle">${t}</text>`;
    for(let V = 0; V <= 250; V += 50) s += `<line x1="36" y1="${gy(V)}" x2="315" y2="${gy(V)}" stroke="var(--line)" stroke-dasharray="${V ? '3 4' : '0'}"/><text x="33" y="${gy(V) + 3}" class="svgm" text-anchor="end">${V}</text>`;
    s += `<text x="315" y="207" class="svgm" text-anchor="end">thời gian (s)</text><text x="44" y="10" class="svgm">V khí (mL)</text>`;
    runs.forEach((r, j) => { s += `<path d="${path(r.c, TMAX)}" fill="none" stroke="${r.col}" stroke-width="2" stroke-dasharray="${j % 2 ? '6 4' : '0'}" opacity=".75"/>`; });
    if(cur) s += `<path d="${path(cur, tNow)}" fill="none" stroke="var(--accent)" stroke-width="3"/><circle cx="${gx(tNow)}" cy="${gy(Vt(cur, tNow))}" r="4" fill="var(--accent)"/>`;
    document.getElementById('hrate-g').innerHTML = s;
    document.getElementById('hrate-leg').innerHTML = runs.map(r => `<span><i style="background:${r.col}"></i>${r.c.label}</span>`).join('') + (cur ? `<span><i style="background:var(--accent)"></i><b>Đang chạy: ${cur.label}</b></span>` : '');
  }
  function readout(done){
    const out = document.getElementById('hrate-out');
    const c = done || cfg();
    const v30 = Vt(c, 30), t95 = 3/c.k;
    out.innerHTML = (done ? `<div class="big">Sau 30 s: V = ${fmt(v30, 1)} mL</div>Tốc độ trung bình 30 s đầu = ${fmt(v30, 1)} / 30 ≈ <b>${fmt(v30/30, 2)} mL/s</b><br>
      ${t95 <= TMAX ? `Gần xong (95%) sau khoảng <b>${fmt(t95, 0)} s</b>, đường đồ thị nằm ngang ở ≈ ${fmt(c.Vmax, 0)} mL.` : `Sau ${TMAX} s mới thu được ${fmt(Vt(c, TMAX), 1)} mL, phản ứng còn ${c.k < 0.001 ? 'rất rất chậm' : 'chưa xong'}.`}<br>`
      : `<b>Điều kiện:</b> ${c.label}. Bấm “Bắt đầu” để đo.<br>`) +
      `<span class="muted">${mode === 'A' ? 'Đường càng dốc thì phản ứng càng nhanh. Đá vôi bột hay viên đều cho cùng ≈ 248 mL CO₂ (cùng 1 g đá vôi), bột chỉ về đích sớm hơn. Thử: cùng điều kiện, đổi viên → bột; rồi tăng nhiệt độ thêm 10 °C (tốc độ khoảng gấp đôi).' : 'Không có MnO₂, nước oxy già phân huỷ rất chậm (đường gần như nằm sát trục). Thêm MnO₂, sủi bọt mạnh. Sau phản ứng lọc lại MnO₂ vẫn còn nguyên: chất xúc tác không bị tiêu hao.'}</span>`;
  }
  let bubbles = [];
  function stop(){ if(raf){ cancelAnimationFrame(raf); raf = null; } }
  stopAnim = stop;
  function finish(c){ runs.push({c, col:COLORS[runs.length % COLORS.length]}); if(runs.length > 4) runs.shift(); cur = null; bubbles = [];
    drawGraph(TMAX); drawApp(Vt(c, TMAX), c.k*(c.Vmax - Vt(c, TMAX)), []); readout(c);
    document.getElementById('hrate-clock').textContent = `t = ${TMAX} s`; document.getElementById('hrate-go').textContent = '▶ Bắt đầu'; }
  document.getElementById('hrate-go').onclick = () => {
    stop(); const c = cfg(); cur = c; bubbles = [];
    document.getElementById('hrate-go').textContent = '↻ Chạy lại';
    document.getElementById('hrate-out').innerHTML = `<b>Đang đo…</b> ${c.label}. Quan sát bọt khí và độ dốc của đường đồ thị.`;
    if(reduceMotion()){ const n = Math.round(clamp(c.k*c.Vmax*2, 0, 30)); for(let q = 0; q < n; q++) bubbles.push({x:38 + (q*17.3) % 64, y:76 + (q*23.1) % 50, r:2 + q % 3}); drawApp(Vt(c, 30), c.k*(c.Vmax - Vt(c, 30)), bubbles); finish(c); drawApp(Vt(c, TMAX), 0, bubbles); return; }
    const t0 = performance.now(); let carry = 0;
    const step = now => {
      const ts = Math.min(TMAX, (now - t0)/DUR*TMAX), V = Vt(c, ts), rate = c.k*(c.Vmax - V);
      carry += Math.min(3, rate*0.25); while(carry >= 1){ carry -= 1; bubbles.push({x:36 + Math.random()*68, y:130, r:1.5 + Math.random()*2.5, v:0.6 + Math.random()*0.9}); }
      if(Math.random() < (carry)) { carry = 0; bubbles.push({x:36 + Math.random()*68, y:130, r:1.5 + Math.random()*2.5, v:0.6 + Math.random()*0.9}); }
      bubbles.forEach(b => { b.y -= b.v*2; b.x += Math.sin(b.y/6)*0.3; }); bubbles = bubbles.filter(b => b.y > 72).slice(-140);
      drawApp(V, rate, bubbles); drawGraph(ts);
      document.getElementById('hrate-clock').textContent = `t = ${fmt(ts, 0)} s`;
      if(ts < TMAX) raf = requestAnimationFrame(step); else { raf = null; finish(c); }
    };
    raf = requestAnimationFrame(step);
  };
  document.getElementById('hrate-clr').onclick = () => { stop(); runs = []; cur = null; bubbles = []; drawApp(0, 0, []); drawGraph(0); readout(); document.getElementById('hrate-clock').textContent = 't = 0 s'; document.getElementById('hrate-go').textContent = '▶ Bắt đầu'; };
  bindSliders(p, () => { if(raf){ stop(); cur = null; bubbles = []; document.getElementById('hrate-go').textContent = '▶ Bắt đầu'; } drawApp(0, 0, []); drawGraph(0); readout(); });
  setMode('A');
},

/* =========================================================
   6. THANG pH VÀ TRUNG HOÀ
   ========================================================= */
hoa_ph(p){
  const STOPS = ['#C0182B','#E2332B','#F0612A','#F7942B','#F8C22C','#E8D72E','#B6D33A','#6DBE45','#35A859','#1FA184','#1F86B5','#2B5FB0','#3A3E9C','#4E2A88','#5E1F73'];
  const ITEMS = [
    {e:'🫃', n:'Dịch vị dạ dày', ph:2, s:'1,5 – 3,5', note:'Chứa HCl giúp tiêu hoá và diệt khuẩn. Thừa acid gây ợ chua, đau dạ dày.'},
    {e:'🍋', n:'Nước chanh', ph:2.2, s:'≈ 2', note:'Citric acid làm chanh chua. Vắt chanh khử mùi tanh cá (trung hoà chất base).'},
    {e:'🥤', n:'Nước ngọt có ga', ph:2.8, s:'2,5 – 3', note:'Có carbonic và phosphoric acid, lại nhiều đường: hại men răng.'},
    {e:'🫙', n:'Giấm ăn', ph:3, s:'≈ 3', note:'Acetic acid 4 – 5%. Ngâm giấm làm sạch cặn trắng trong ấm đun nước.'},
    {e:'☕', n:'Cà phê', ph:5, s:'≈ 5', note:'Hơi chua nhẹ.'},
    {e:'🌧️', n:'Nước mưa sạch', ph:5.6, s:'≈ 5,6', note:'Có một ít CO₂ tan vào nên hơi acid. Mưa acid có pH dưới 5,6.'},
    {e:'🥛', n:'Sữa tươi', ph:6.6, s:'≈ 6,5', note:'Gần trung tính. Sữa để lâu bị chua, pH giảm.'},
    {e:'💧', n:'Nước tinh khiết', ph:7, s:'7', note:'Trung tính: không acid, không base.'},
    {e:'🩸', n:'Máu', ph:7.4, s:'7,35 – 7,45', note:'Hơi base. Cơ thể giữ pH máu rất ổn định, lệch nhẹ cũng nguy hiểm.'},
    {e:'🌊', n:'Nước biển', ph:8, s:'≈ 8', note:'Hơi base.'},
    {e:'🧁', n:'Dung dịch baking soda', ph:8.3, s:'≈ 8,3', note:'NaHCO₃ có tính base nhẹ, dùng làm bánh, trung hoà acid.'},
    {e:'🧼', n:'Nước xà phòng', ph:9.5, s:'9 – 10', note:'Base nhẹ. Rửa vết kiến cắn (formic acid) bằng xà phòng.'},
    {e:'🥣', n:'Nước vôi trong', ph:12, s:'≈ 12', note:'Dung dịch Ca(OH)₂, kiềm. Thổi hơi thở vào thấy vẩn đục do CO₂.'},
    {e:'🧴', n:'Nước tẩy javel', ph:12.5, s:'12 – 13', note:'Kiềm mạnh và có tính tẩy màu: thực tế nó làm mất màu giấy quỳ, chất chỉ thị. Không trộn với chất tẩy bồn cầu (sinh khí chlorine độc)!'}
  ];
  const phColor = ph => STOPS[clamp(Math.round(ph), 0, 14)];
  const litmus = ph => ph < 5 ? ['#D8323C', 'đỏ'] : ph < 6.5 ? ['#B5407A', 'đỏ tím (hơi đỏ)'] : ph <= 7.5 ? ['#7B4FA8', 'tím'] : ph < 8.3 ? ['#5A5CB8', 'tím xanh'] : ['#2F6FC9', 'xanh'];
  const phenol = ph => ph < 8.2 ? [null, 'không màu'] : ph < 10 ? ['#F7A8D0', 'hồng nhạt'] : ['#E0338F', 'hồng đậm'];
  const cabbage = ph => ph < 3 ? ['#D7263D', 'đỏ'] : ph < 5 ? ['#E05A9A', 'hồng'] : ph < 6.5 ? ['#A0479E', 'tím hồng'] : ph <= 7.5 ? ['#7A4BA8', 'tím'] : ph < 9 ? ['#4E6FC9', 'xanh lam'] : ph < 11 ? ['#2BA89A', 'xanh ngọc'] : ph < 13 ? ['#4CB648', 'xanh lục'] : ['#E6CF3A', 'vàng'];
  const kind = ph => ph < 6.95 ? (ph < 3 ? 'acid mạnh' : ph < 5.5 ? 'acid' : 'acid rất yếu') : ph <= 7.05 ? 'trung tính' : (ph > 11 ? 'base mạnh (kiềm)' : ph > 8.5 ? 'base' : 'base rất yếu');
  const tube = (x, col, name, lab) => `<path d="M${x - 13} 20 V92 a13 13 0 0 0 26 0 V20" fill="${col || 'rgba(210,210,230,.25)'}" stroke="var(--ink)" stroke-width="1.5"/>
    <rect x="${x - 16}" y="14" width="32" height="7" rx="3" fill="var(--muted)"/>
    <text x="${x}" y="122" class="svgt" text-anchor="middle" style="font-weight:700">${name}</text><text x="${x}" y="136" class="svgm" text-anchor="middle">${lab}</text>`;
  p.innerHTML = `<style>
   .hph-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
   .hph-chips button{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:5px 11px;font-size:14px}
   .hph-chips button[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);font-weight:700}
   #hph-needle{transition:transform .6s ease}
   @media (prefers-reduced-motion:reduce){#hph-needle{transition:none}}
  </style>
  <div class="sec lab"><h3>Đặt các chất trong nhà lên thang pH</h3>
   <p class="muted">Đoán trước: <b>xà phòng, nước chanh, máu</b> nằm ở đâu trên thang pH? Bấm từng chất để kiểm tra và xem màu ba chất chỉ thị.</p>
   <div class="hph-chips" id="hph-chips">${ITEMS.map((it, j) => `<button data-j="${j}" aria-pressed="false">${it.e} ${it.n}</button>`).join('')}</div>
   <svg viewBox="0 0 340 92" id="hph-scale" role="img" aria-label="Thang pH từ 0 đến 14"></svg>
   <svg viewBox="0 0 320 142" id="hph-tubes" role="img" aria-label="Màu ba chất chỉ thị" style="margin-top:10px"></svg>
   <div class="readout" id="hph-out"></div>
  </div>
  <div class="sec lab"><h3>Trung hoà: nhỏ base vào acid</h3>
   <p class="muted">Trong cốc có <b>20 mL dung dịch HCl 0,1 M</b>. Kéo để thêm dần dung dịch NaOH 0,1 M. Đoán trước: cần bao nhiêu mL NaOH để dung dịch trung tính?</p>
   <p style="text-align:center;font-weight:700;margin:4px 0">NaOH + HCl → NaCl + H₂O</p>
   <svg viewBox="0 0 320 200" id="hph-tit" role="img" aria-label="Cốc dung dịch và đồ thị pH"></svg>
   <div class="ctrl">
    <div>${slider('hph-v', 'Thể tích NaOH 0,1 M đã thêm', 0, 40, 0.5, 0, 'mL')}</div>
    <div><label for="hph-ind">Chất chỉ thị trong cốc</label><select id="hph-ind"><option value="p">Phenolphthalein</option><option value="l">Quỳ tím (nhúng giấy)</option><option value="c">Nước bắp cải tím</option></select></div>
   </div>
   <div class="readout" id="hph-tout"></div>
  </div>`;
  // thang pH
  let grad = ''; STOPS.forEach((c, j) => grad += `<stop offset="${(j/14*100).toFixed(1)}%" stop-color="${c}"/>`);
  const sx = ph => 20 + 300*ph/14;
  let sel = 7;
  function drawScale(ph, it){
    let s = `<defs><linearGradient id="hph-gr" x1="0" x2="1">${grad}</linearGradient></defs>
      <rect x="20" y="34" width="300" height="22" rx="8" fill="url(#hph-gr)" stroke="var(--ink)" stroke-width="1"/>`;
    for(let k = 0; k <= 14; k++) s += `<line x1="${sx(k)}" y1="56" x2="${sx(k)}" y2="61" stroke="var(--ink)"/><text x="${sx(k)}" y="72" class="svgm" text-anchor="middle">${k}</text>`;
    s += `<text x="20" y="86" class="svgm">← acid mạnh dần</text><text x="${sx(7)}" y="86" class="svgm" text-anchor="middle">trung tính</text><text x="320" y="86" class="svgm" text-anchor="end">base mạnh dần →</text>`;
    s += `<g id="hph-needle" style="transform:translateX(${sx(ph)}px)"><polygon points="0,32 -7,16 7,16" fill="var(--ink)"/><text x="0" y="11" class="svgt" text-anchor="middle" style="font-weight:700">${it ? it.e + ' pH ' + it.s : 'pH ?'}</text></g>`;
    const svg = document.getElementById('hph-scale');
    const old = svg.querySelector('#hph-needle'); const prev = old ? old.style.transform : null;
    svg.innerHTML = s;
    const nd = svg.querySelector('#hph-needle');
    if(prev && !reduceMotion()){ nd.style.transform = prev; void nd.getBoundingClientRect(); nd.style.transform = `translateX(${sx(ph)}px)`; }
    // giữ nhãn trong khung
    const lab = nd.querySelector('text'); const x = sx(ph); if(x < 60) lab.setAttribute('text-anchor', 'start'), lab.setAttribute('x', -8); if(x > 280) lab.setAttribute('text-anchor', 'end'), lab.setAttribute('x', 8);
  }
  function pick(j){
    const it = ITEMS[j]; sel = j;
    document.querySelectorAll('#hph-chips button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.j === j));
    drawScale(it.ph, it);
    const L = litmus(it.ph), P = phenol(it.ph), C = cabbage(it.ph);
    document.getElementById('hph-tubes').innerHTML = tube(55, L[0], 'Quỳ tím', L[1]) + tube(160, P[0], 'Phenolphthalein', P[1]) + tube(265, C[0], 'Bắp cải tím', C[1]);
    const k = kind(it.ph);
    document.getElementById('hph-out').innerHTML = `<div class="big">${it.e} ${it.n}: pH ${it.s} → <span style="color:${it.ph < 6.95 ? 'var(--bad)' : it.ph <= 7.05 ? 'var(--ok)' : 'var(--accent)'}">${k}</span></div>
      ${it.ph < 6.95 ? 'pH &lt; 7: dung dịch có tính acid' : it.ph <= 7.05 ? 'pH = 7: trung tính' : 'pH &gt; 7: dung dịch có tính base'}. Quỳ tím ${L[1]}, phenolphthalein ${P[1]}, nước bắp cải tím ${C[1]}.<br>
      <span class="muted">${it.note}</span>
      ${it.ph >= 7.05 && it.ph < 8.3 ? '<br><span class="muted">Base rất yếu nên quỳ đổi màu không rõ, phenolphthalein chưa hồng (chỉ hồng khi pH ≳ 8,2).</span>' : ''}
      ${it.ph > 5 && it.ph < 6.95 ? '<br><span class="muted">Acid rất yếu nên quỳ chỉ hơi ngả đỏ.</span>' : ''}`;
  }
  document.querySelectorAll('#hph-chips button').forEach(b => b.onclick = () => pick(+b.dataset.j));
  drawScale(7, null);
  document.getElementById('hph-tubes').innerHTML = tube(55, '#7B4FA8', 'Quỳ tím', 'tím (ban đầu)') + tube(160, null, 'Phenolphthalein', 'không màu') + tube(265, '#7A4BA8', 'Bắp cải tím', 'tím (ban đầu)');
  document.getElementById('hph-out').innerHTML = 'Chọn một chất ở trên. <span class="muted">Thử: tìm chất có tính acid mạnh nhất và chất có tính base mạnh nhất.</span>';
  void sel;
  // trung hoà
  const nA = 0.1*20/1000;
  function phOf(v){ const nB = 0.1*v/1000, Vt = (20 + v)/1000;
    if(Math.abs(nB - nA) < 1e-12) return 7;
    if(nA > nB) return -Math.log10((nA - nB)/Vt);
    return 14 + Math.log10((nB - nA)/Vt); }
  function drawTit(){
    const v = val('hph-v'), ph = phOf(v), ind = document.getElementById('hph-ind').value;
    const IC = ind === 'p' ? phenol(ph) : ind === 'l' ? litmus(ph) : cabbage(ph);
    const liqH = 40 + (20 + v)*1.3, top = 182 - liqH;
    let s = `<path d="M18 ${top} V182 H112 V${top} Z" fill="${IC[0] || 'rgba(210,210,230,.28)'}" opacity=".85"/>
      <path d="M16 70 V184 H114 V70" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
      <rect x="58" y="4" width="14" height="44" rx="3" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.3"/>
      <rect x="60" y="${6 + 40*v/40}" width="10" height="${40 - 40*v/40}" fill="rgba(160,190,255,.6)"/>
      <path d="M62 48 L65 60 L68 48" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.3"/>
      <text x="80" y="18" class="svgm">NaOH</text>
      ${v > 0 ? `<circle cx="65" cy="66" r="2.5" fill="rgba(160,190,255,.9)"/>` : ''}
      <text x="65" y="198" class="svgm" text-anchor="middle">${fmt(20 + v, 1)} mL, ${IC[1]}</text>`;
    // đồ thị
    const X = vv => 150 + 160*vv/40, Y = pp => 182 - 164*pp/14;
    s += `<line x1="150" y1="182" x2="312" y2="182" stroke="var(--ink)"/><line x1="150" y1="182" x2="150" y2="14" stroke="var(--ink)"/>
      <line x1="150" y1="${Y(7)}" x2="312" y2="${Y(7)}" stroke="var(--line)" stroke-dasharray="3 3"/>`;
    [0, 7, 14].forEach(k => s += `<text x="146" y="${Y(k) + 3}" class="svgm" text-anchor="end">${k}</text>`);
    [0, 20, 40].forEach(k => s += `<text x="${X(k)}" y="194" class="svgm" text-anchor="middle">${k}</text>`);
    s += `<text x="312" y="176" class="svgm" text-anchor="end">mL NaOH</text><text x="154" y="12" class="svgm">pH</text>`;
    let d = ''; for(let q = 0; q <= 160; q++){ const vv = 40*q/160; d += (q ? 'L' : 'M') + X(vv).toFixed(1) + ' ' + Y(phOf(vv)).toFixed(1); }
    s += `<path d="${d}" fill="none" stroke="var(--muted)" stroke-width="1.5"/><circle cx="${X(v)}" cy="${Y(ph)}" r="5" fill="${phColor(ph)}" stroke="var(--ink)" stroke-width="1.5"/>`;
    document.getElementById('hph-tit').innerHTML = s;
    const nB = 0.1*v/1000;
    let h = `<div class="big">pH = ${fmt(ph, 2)} (${kind(ph)})</div>
      n<sub>HCl</sub> = 0,1 × 0,020 = 0,002 mol; n<sub>NaOH</sub> = 0,1 × ${fmt(v/1000, 4)} = ${fmt(nB, 5)} mol<br>`;
    if(nB < nA - 1e-12) h += `<b>Dư acid</b>: n<sub>HCl dư</sub> = ${fmt(nA - nB, 5)} mol trong ${fmt(20 + v, 1)} mL ⇒ [H⁺] = ${fmt((nA - nB)/((20 + v)/1000), 4)} M ⇒ pH = −log[H⁺] = ${fmt(ph, 2)}.`;
    else if(nB > nA + 1e-12) h += `<b>Dư base</b>: n<sub>NaOH dư</sub> = ${fmt(nB - nA, 5)} mol ⇒ [OH⁻] = ${fmt((nB - nA)/((20 + v)/1000), 4)} M ⇒ pH = 14 + log[OH⁻] = ${fmt(ph, 2)}.`;
    else h += `<b style="color:var(--ok)">Vừa đủ!</b> 20 mL NaOH trung hoà hết 20 mL HCl cùng nồng độ, chỉ còn NaCl và nước: dung dịch trung tính.`;
    h += `<br>Màu chỉ thị: <b>${IC[1]}</b>. <span class="muted">Để ý: pH thay đổi rất chậm lúc đầu rồi “nhảy vọt” quanh 20 mL. Phenolphthalein chuyển hồng chỉ cần dư một giọt NaOH. (Công thức pH = −log[H⁺] là kiến thức mở rộng.)</span>`;
    document.getElementById('hph-tout').innerHTML = h;
  }
  document.getElementById('hph-v').addEventListener('input', () => { document.getElementById('hph-v-v').textContent = fmt(val('hph-v')) + ' mL'; drawTit(); });
  document.getElementById('hph-ind').addEventListener('input', drawTit);
  drawTit();
},

/* =========================================================
   7. PHÂN BÓN HOÁ HỌC
   ========================================================= */
hoa_fert(p){
  const F = [
    {id:'urea', n:'Urea', f:'(NH₂)₂CO', N:28/60, P:0, K:0, calc:'%N = 2 × 14 / 60 × 100% ≈ 46,7%', kind:'đạm'},
    {id:'an', n:'Ammonium nitrate', f:'NH₄NO₃', N:28/80, P:0, K:0, calc:'%N = 2 × 14 / 80 × 100% = 35%', kind:'đạm'},
    {id:'acl', n:'Ammonium chloride', f:'NH₄Cl', N:14/53.5, P:0, K:0, calc:'%N = 14 / 53,5 × 100% ≈ 26,2%', kind:'đạm'},
    {id:'sa', n:'Ammonium sulfate', f:'(NH₄)₂SO₄', N:28/132, P:0, K:0, calc:'%N = 2 × 14 / 132 × 100% ≈ 21,2%', kind:'đạm'},
    {id:'sp', n:'Ca(H₂PO₄)₂ nguyên chất', f:'Ca(H₂PO₄)₂', N:0, P:142/234, K:0, calc:'1 phân tử có 2 P, ứng với 1 P₂O₅ (M = 142). %P₂O₅ = 142 / 234 × 100% ≈ 60,7%', kind:'lân'},
    {id:'spt', n:'Supe lân bán ngoài cửa hàng', f:'Ca(H₂PO₄)₂ + CaSO₄', N:0, P:0.16, K:0, calc:'Ghi trên bao khoảng 16% P₂O₅ vì có lẫn thạch cao CaSO₄', kind:'lân'},
    {id:'kcl', n:'Potassium chloride', f:'KCl', N:0, P:0, K:94/149, calc:'2 KCl ứng với 1 K₂O (M = 94). %K₂O = 94 / (2 × 74,5) × 100% ≈ 63,1%', kind:'kali'},
    {id:'k2so4', n:'Potassium sulfate', f:'K₂SO₄', N:0, P:0, K:94/174, calc:'1 K₂SO₄ ứng với 1 K₂O. %K₂O = 94 / 174 × 100% ≈ 54%', kind:'kali'},
    {id:'npk', n:'NPK 16-16-8', f:'hỗn hợp', N:0.16, P:0.16, K:0.08, calc:'Ba số trên bao: 16% N, 16% P₂O₅, 8% K₂O theo khối lượng', kind:'hỗn hợp'},
    {id:'npk2', n:'NPK 20-20-15', f:'hỗn hợp', N:0.20, P:0.20, K:0.15, calc:'20% N, 20% P₂O₅, 15% K₂O theo khối lượng', kind:'hỗn hợp'}
  ];
  const NUT = {N:{n:'N', c:'#2E9E6E', role:'đạm: thân lá xanh tốt'}, P:{n:'P₂O₅', c:'#F28C38', role:'lân: rễ, hoa, quả'}, K:{n:'K₂O', c:'#9B6BDE', role:'kali: củ quả to ngọt, cây cứng cáp'}};
  p.innerHTML = `<style>
   .hfert-bar{display:grid;grid-template-columns:52px 1fr 64px;gap:8px;align-items:center;font-size:14px;margin:6px 0}
   .hfert-bar .tr{height:16px;border-radius:999px;background:var(--line);overflow:hidden}
   .hfert-bar .tr i{display:block;height:100%;border-radius:999px;transition:width .4s}
   .hfert-bar.sel{font-weight:800}
   .hfert-bar.sel .tr{outline:2px solid var(--accent);outline-offset:1px}
   .hfert-bar .nm{font-size:13px;line-height:1.2}
   .hfert-need{grid-template-columns:118px 1fr 68px}
   @media (prefers-reduced-motion:reduce){.hfert-bar .tr i{transition:none}}
  </style>
  <div class="sec lab"><h3>Bao phân này có bao nhiêu chất dinh dưỡng?</h3>
   <p class="muted">Chọn loại phân và khối lượng. Đoán trước: <b>10 kg urea và 10 kg ammonium sulfate, bao nào cung cấp nhiều đạm hơn?</b></p>
   <svg viewBox="0 0 320 150" id="hfert-svg" role="img" aria-label="Bao phân và lượng dinh dưỡng"></svg>
   <div class="ctrl">
    <div><label for="hfert-sel">Loại phân</label><select id="hfert-sel">${F.map((x, j) => `<option value="${j}">${x.n} ${x.f !== 'hỗn hợp' ? '(' + x.f + ')' : ''}</option>`).join('')}</select></div>
    <div>${slider('hfert-m', 'Khối lượng phân', 1, 50, 1, 10, 'kg')}</div>
   </div>
   <div id="hfert-bars"></div>
   <div class="readout" id="hfert-out"></div>
  </div>
  <div class="sec lab"><h3>Bài toán vườn nhà</h3>
   <p class="muted">Vườn rau cần một lượng chất dinh dưỡng. Mỗi loại phân phải bón bao nhiêu kg? Phân càng “đậm” thì cần càng ít.</p>
   <div class="ctrl">
    <div><label for="hfert-nut">Chất dinh dưỡng cần</label><select id="hfert-nut"><option value="N">Đạm (tính theo N)</option><option value="P">Lân (tính theo P₂O₅)</option><option value="K">Kali (tính theo K₂O)</option></select></div>
    <div>${slider('hfert-x', 'Lượng cần cung cấp', 0.5, 10, 0.5, 2, 'kg')}</div>
   </div>
   <div id="hfert-need"></div>
   <div class="readout" id="hfert-nout"></div>
   <div class="note"><b>Dùng phân an toàn (4 đúng):</b> đúng loại, đúng lúc, đúng liều lượng, đúng cách. Bón thừa đạm làm rau tích nitrate có hại và gây tảo nở hoa ở ao hồ. Không trộn phân đạm ammonium với vôi (mất đạm do sinh khí ammonia). Đeo găng tay, khẩu trang khi bón, rửa tay sạch; thu hoạch rau sau đủ thời gian cách li ghi trên bao.</div>
  </div>`;
  const sel = document.getElementById('hfert-sel');
  function draw(){
    const f = F[+sel.value], m = val('hfert-m');
    const mN = m*f.N, mP = m*f.P, mK = m*f.K;
    const fill = clamp(m/50, 0.08, 1);
    let svg = `<path d="M30 30 Q30 18 42 18 H118 Q130 18 130 30 V132 Q130 140 122 140 H38 Q30 140 30 132 Z" fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="2"/>
      <rect x="31" y="${140 - 120*fill}" width="98" height="${120*fill - 1}" fill="#E9DCC6" opacity=".9"/>
      <path d="M36 18 L44 8 L52 18 M70 18 L80 8 L90 18 M108 18 L116 8 L124 18" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      <rect x="40" y="56" width="80" height="44" rx="6" fill="var(--card)" stroke="var(--ink)"/>
      <text x="80" y="74" class="svgt" text-anchor="middle" style="font-weight:700">${f.n.length > 14 ? f.n.split(' ')[0] : f.n}</text>
      <text x="80" y="90" class="svgt" text-anchor="middle" style="font-weight:800">${fmt(m)} kg</text>`;
    const items = [['N', mN], ['P', mP], ['K', mK]];
    items.forEach(([k, x], j) => { const y = 34 + j*38, w = clamp(x/m*150, x > 0 ? 3 : 0, 150);
      svg += `<text x="150" y="${y}" class="svgt" style="font-weight:700">${NUT[k].n}: ${fmt(x, 2)} kg</text>
        <rect x="150" y="${y + 6}" width="150" height="12" rx="6" fill="var(--line)"/><rect x="150" y="${y + 6}" width="${w}" height="12" rx="6" fill="${NUT[k].c}"/>`; });
    svg += `<text x="150" y="146" class="svgm">thanh đầy = cả bao ${fmt(m)} kg</text>`;
    document.getElementById('hfert-svg').innerHTML = svg;
    document.getElementById('hfert-bars').innerHTML = '<div class="muted" style="font-size:14px;margin-top:6px">Độ dinh dưỡng (% khối lượng):</div>' + items.map(([k]) => { const pc = f[k]*100;
      return `<div class="hfert-bar"><b>${NUT[k].n}</b><span class="tr"><i style="width:${pc}%;background:${NUT[k].c}"></i></span><span>${fmt(pc, 1)}%</span></div>`; }).join('');
    const parts = items.filter(([, x]) => x > 0).map(([k, x]) => `${fmt(m)} × ${fmt(f[k]*100, 1)}% = <b>${fmt(x, 2)} kg ${NUT[k].n}</b>`);
    document.getElementById('hfert-out').innerHTML = `<div class="big">${f.n}: phân ${f.kind}</div>${f.calc}<br>${parts.join('<br>')}<br>
      <span class="muted">${f.kind === 'hỗn hợp' ? 'Phân hỗn hợp cung cấp cùng lúc cả ba chất.' : 'Vai trò: ' + NUT[f.N ? 'N' : f.P ? 'P' : 'K'].role + '.'} Khối lượng chất dinh dưỡng = khối lượng phân × % dinh dưỡng.</span>`;
  }
  function need(){
    const nut = document.getElementById('hfert-nut').value, X = val('hfert-x'), cur = F[+sel.value];
    const list = F.filter(f => f[nut] > 0).map(f => ({f, kg:X/f[nut]})), mx = Math.max(...list.map(l => l.kg));
    document.getElementById('hfert-need').innerHTML = list.map(l => `<div class="hfert-bar hfert-need ${l.f === cur ? 'sel' : ''}"><span class="nm">${l.f.n}</span><span class="tr"><i style="width:${l.kg/mx*100}%;background:${NUT[nut].c}"></i></span><span>${fmt(l.kg, 1)} kg</span></div>`).join('');
    const best = list.reduce((a, b) => a.kg < b.kg ? a : b);
    const c = list.find(l => l.f === cur);
    document.getElementById('hfert-nout').innerHTML = (c ? `<div class="big">Cần ${fmt(c.kg, 1)} kg ${cur.n}</div>m<sub>phân</sub> = ${fmt(X)} kg : ${fmt(cur[nut]*100, 1)}% = ${fmt(X)} / ${fmt(cur[nut], 3)} ≈ ${fmt(c.kg, 1)} kg<br>`
      : `<div class="big">${cur.n} không chứa ${NUT[nut].n}</div>Chọn loại phân khác ở phần trên, hoặc xem bảng so sánh.<br>`) +
      `<span class="muted">Ít nhất là ${best.f.n}: chỉ ${fmt(best.kg, 1)} kg. ${nut === 'N' ? 'Thử: so sánh urea với ammonium sulfate.' : 'Thử: chọn đạm (N) và so sánh urea với ammonium sulfate.'}</span>`;
  }
  bindSliders(p, () => { draw(); need(); });
  draw(); need();
}
});
})();
