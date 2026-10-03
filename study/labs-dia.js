/* Khám phá môn Địa lý 8 (Lịch sử và Địa lí 8, Kết nối tri thức) */
window.LAB_EXT = window.LAB_EXT || {};
(function(){
const clamp = (x,a,b) => Math.max(a, Math.min(b, x));
/* Số kiểu SGK: nghìn cách bằng khoảng trắng, thập phân dấu phẩy */
function nf(x, d){
  d = d == null ? 1 : d;
  const p = Math.pow(10, d), r = Math.round(x*p)/p;
  let s = Math.abs(r).toFixed(d), i = s.split('.')[0], f = s.split('.')[1] || '';
  f = f.replace(/0+$/, '');
  if(i.length >= 4) i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (r < 0 ? '−' : '') + i + (f ? ',' + f : '');
}
const dms = (v, pos, neg) => { const a = Math.abs(v); let d = Math.floor(a), m = Math.round((a - d)*60); if(m === 60){ d++; m = 0; } return `${d}°${String(m).padStart(2,'0')}′${v >= 0 ? pos : neg}`; };
const MONTHS = ['1','2','3','4','5','6','7','8','9','10','11','12'];
/* Đọc số liệu từ data-dia.js nếu có (ưu tiên số trong bài học) */
function dataCh(lab){ try{ return ((window.DEFAULT_DATA||{})['dia-8']||[]).find(c => c.lab === lab) || null; }catch(e){ return null; } }

/* Lưới kinh vĩ tuyến (phép chiếu equirectangular) */
function mapProj(o){
  const x = lon => o.pl + (lon - o.lon0)*o.k, y = lat => o.pt + (o.lat1 - lat)*o.k;
  return {x, y, w: o.pl + (o.lon1 - o.lon0)*o.k + o.pr, h: o.pt + (o.lat1 - o.lat0)*o.k + o.pb, o};
}
function gridSvg(P, step){
  const o = P.o; let s = '';
  for(let lon = Math.ceil(o.lon0/step)*step; lon <= o.lon1; lon += step){
    s += `<line x1="${P.x(lon)}" y1="${P.y(o.lat1)}" x2="${P.x(lon)}" y2="${P.y(o.lat0)}" stroke="var(--line)" stroke-width="1"/>
      <text x="${P.x(lon)}" y="${P.y(o.lat0) + 13}" class="svgm" text-anchor="middle">${lon}°Đ</text>`;
  }
  for(let lat = Math.ceil(o.lat0/step)*step; lat <= o.lat1; lat += step){
    s += `<line x1="${P.x(o.lon0)}" y1="${P.y(lat)}" x2="${P.x(o.lon1)}" y2="${P.y(lat)}" stroke="var(--line)" stroke-width="1"/>
      <text x="${P.x(o.lon0) - 3}" y="${P.y(lat) + 3.5}" class="svgm" text-anchor="end">${lat}°B</text>`;
  }
  return s;
}

/* Hỏi nhanh dùng chung: list {q, o:[đúng,…], why} */
function quickQuiz(root, pfx, POOL, N, title){
  let deck, i, score, done;
  root.innerHTML = `<div class="dq-top"><span id="${pfx}-cnt"></span><b id="${pfx}-sc"></b></div><div id="${pfx}-st"></div>`;
  const st = root.querySelector('#'+pfx+'-st');
  function start(){ deck = shuffle(POOL).slice(0, N); i = 0; score = 0; show(); }
  function head(){ root.querySelector('#'+pfx+'-cnt').textContent = i < N ? `${title} ${i+1}/${N}` : 'Hoàn thành'; root.querySelector('#'+pfx+'-sc').textContent = `⭐ ${score}`; }
  function show(){
    done = false; head();
    const c = deck[i], opts = shuffle(c.o.map((t, j) => ({t, ok: j === 0})));
    st.innerHTML = `<div class="dq-card">${c.q}</div>${opts.map((x, j) => `<button class="opt" data-k="${j}">${x.t}</button>`).join('')}<div id="${pfx}-fb"></div>`;
    st.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
      if(done) return; done = true;
      const ok = opts[+b.dataset.k].ok; if(ok) score++;
      st.querySelectorAll('[data-k]').forEach(x => { x.disabled = true; if(opts[+x.dataset.k].ok) x.classList.add('right'); });
      if(!ok) b.classList.add('wrong');
      const fb = st.querySelector('#'+pfx+'-fb');
      fb.className = 'dq-fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<b style="color:var(${ok ? '--ok' : '--bad'})">${ok ? 'Đúng rồi!' : 'Chưa đúng.'}</b> ${c.why}
        <div class="row" style="margin-top:8px;justify-content:flex-end"><button class="btn" id="${pfx}-next">${i < N-1 ? 'Câu tiếp →' : 'Xem kết quả'}</button></div>`;
      head();
      st.querySelector('#'+pfx+'-next').onclick = () => { i++; if(i < N) show(); else end(); };
    });
  }
  function end(){
    head();
    st.innerHTML = `<div class="dq-card" style="text-align:center"><div style="font-size:40px">${score === N ? '🏆' : score >= N*0.7 ? '🌟' : '💪'}</div><b>Em đúng ${score}/${N} câu</b><br><span class="muted">${score === N ? 'Xuất sắc!' : 'Chơi lại để nhớ chắc hơn nhé.'}</span></div>
      <div class="row" style="justify-content:center;margin-top:10px"><button class="btn" id="${pfx}-again">Chơi lại (câu mới)</button></div>`;
    st.querySelector('#'+pfx+'-again').onclick = start;
  }
  start();
}
const QSTYLE = `.dq-top{display:flex;justify-content:space-between;align-items:center;font-size:14.5px;margin:4px 0 8px}
 .dq-card{border:2px solid var(--line);border-radius:16px;background:var(--paper);padding:14px;font-weight:700;font-size:16px}
 .dq-fb{margin-top:8px;padding:10px 12px;border-radius:12px;font-size:15px}
 .dq-fb.ok{background:var(--ok-soft)} .dq-fb.no{background:var(--bad-soft)}`;

Object.assign(window.LAB_EXT, {

/* =========================================================
   1. VỊ TRÍ, PHẠM VI LÃNH THỔ + ĐỒNG HỒ MÚI GIỜ
   ========================================================= */
dia_location(p){
  const PTS = [
    {n:'Lũng Cú', lat:23+23/60, lon:105+20/60, k:'cuc', d:'Điểm cực Bắc', info:'Xã Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang (từ 7/2025 thuộc tỉnh Tuyên Quang). Cột cờ Lũng Cú trên đỉnh núi Rồng là biểu tượng nơi địa đầu Tổ quốc.', lab:'23°23′B'},
    {n:'Đất Mũi', lat:8+34/60, lon:104+40/60, k:'cuc', d:'Điểm cực Nam', info:'Xã Đất Mũi, huyện Ngọc Hiển, tỉnh Cà Mau. Mũi Cà Mau là nơi duy nhất trên đất liền nước ta có thể ngắm mặt trời mọc trên biển Đông và lặn trên biển Tây (vịnh Thái Lan).', lab:'8°34′B'},
    {n:'Sín Thầu', lat:22+22/60, lon:102+9/60, k:'cuc', d:'Điểm cực Tây', info:'Xã Sín Thầu, huyện Mường Nhé, tỉnh Điện Biên, gần ngã ba biên giới Việt Nam, Lào, Trung Quốc (mốc A Pa Chải).', lab:'102°09′Đ'},
    {n:'Vạn Thạnh', lat:12+40/60, lon:109+28/60, k:'cuc', d:'Điểm cực Đông', info:'Xã Vạn Thạnh, huyện Vạn Ninh, tỉnh Khánh Hoà, trên bán đảo Hòn Gốm (Mũi Đôi). Nơi đón bình minh sớm nhất trên đất liền Việt Nam.', lab:'109°28′Đ'},
    {n:'Hà Nội', lat:21.03, lon:105.85, k:'tp', info:'Thủ đô, nằm ở Đồng bằng sông Hồng.'},
    {n:'Hải Phòng', lat:20.86, lon:106.68, k:'tp', info:'Thành phố cảng lớn nhất miền Bắc.'},
    {n:'Sa Pa', lat:22.34, lon:103.84, k:'tp', info:'Thị xã vùng núi cao, khoảng 1 500 m, khí hậu mát quanh năm.'},
    {n:'Vinh', lat:18.68, lon:105.68, k:'tp', info:'Thành phố lớn của Bắc Trung Bộ.'},
    {n:'Huế', lat:16.46, lon:107.59, k:'tp', info:'Cố đô, mùa mưa lệch về thu đông.'},
    {n:'Đà Nẵng', lat:16.05, lon:108.22, k:'tp', info:'Thành phố biển miền Trung; quần đảo Hoàng Sa thuộc thành phố Đà Nẵng.'},
    {n:'Nha Trang', lat:12.24, lon:109.19, k:'tp', info:'Thành phố biển của tỉnh Khánh Hoà; quần đảo Trường Sa thuộc tỉnh Khánh Hoà.'},
    {n:'Đà Lạt', lat:11.94, lon:108.44, k:'tp', info:'Trên cao nguyên Lâm Viên, khoảng 1 500 m.'},
    {n:'TP Hồ Chí Minh', lat:10.78, lon:106.70, k:'tp', info:'Thành phố đông dân nhất cả nước.'},
    {n:'Cần Thơ', lat:10.03, lon:105.78, k:'tp', info:'Trung tâm Đồng bằng sông Cửu Long.'},
    {n:'Phú Quốc', lat:10.23, lon:103.96, k:'dao', info:'Đảo lớn nhất nước ta, trong vịnh Thái Lan.'},
    {n:'Côn Đảo', lat:8.69, lon:106.61, k:'dao', info:'Quần đảo ngoài khơi Đông Nam Bộ.'},
    {n:'QĐ Hoàng Sa', lat:16.5, lon:112.0, k:'dao', info:'Quần đảo Hoàng Sa, thuộc thành phố Đà Nẵng. Một bộ phận lãnh thổ không thể tách rời của Việt Nam.'},
    {n:'QĐ Trường Sa', lat:8.64, lon:111.92, k:'dao', info:'Quần đảo Trường Sa (chấm ở đây là đảo Trường Sa), thuộc tỉnh Khánh Hoà. Một bộ phận lãnh thổ không thể tách rời của Việt Nam.'}
  ];
  const P = mapProj({lon0:101.5, lon1:113.5, lat0:7.5, lat1:24, k:25, pl:40, pr:14, pt:12, pb:22});
  const KC = {cuc:'#E5484D', tp:'var(--accent)', dao:'#2BA39A'};
  const opts = PTS.map((q, j) => `<option value="${j}">${q.d ? q.d.replace('Điểm cực ','Cực ') + ': ' : ''}${q.n}</option>`).join('');
  p.innerHTML = `<style>
   .dloc-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
   .dloc-chips button{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:4px 10px;font-size:13.5px}
   .dloc-chips button[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);font-weight:700}
   .dloc-pt{cursor:pointer}
   .dloc-leg{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:13px;color:var(--muted);margin-top:6px}
   .dloc-leg i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px;vertical-align:-1px}
   .dloc-clocks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
   .dloc-ck{border:1.5px solid var(--line);border-radius:14px;background:var(--paper);padding:8px 10px;font-size:13.5px}
   .dloc-ck b{display:block;font-size:22px;line-height:1.2}
   .dloc-ck.vn{border-color:var(--accent);background:var(--accent-soft)}
   .dloc-ck .dd{font-size:12.5px;color:var(--muted)}
   ${QSTYLE}
  </style>
  <div class="sec lab"><h3>Lưới kinh vĩ tuyến và 4 điểm cực</h3>
   <p class="muted">Các điểm được đặt đúng theo toạ độ thật trên lưới kinh tuyến, vĩ tuyến (sơ đồ, không vẽ biên giới). <b>Đoán trước:</b> phần đất liền nước ta kéo dài bao nhiêu độ vĩ? Bấm vào chấm đỏ hoặc nút bên dưới để xem.</p>
   <svg viewBox="0 0 ${P.w} ${P.h}" id="dloc-map" role="img" aria-label="Sơ đồ lưới kinh vĩ tuyến với các điểm cực và thành phố"></svg>
   <div class="dloc-leg"><span><i style="background:${KC.cuc}"></i>Điểm cực phần đất liền</span><span><i style="background:var(--accent)"></i>Thành phố</span><span><i style="background:${KC.dao}"></i>Đảo, quần đảo</span><span>Sơ đồ giản lược theo toạ độ, không vẽ biên giới</span></div>
   <div class="dloc-chips" id="dloc-chips">${PTS.map((q, j) => `<button data-j="${j}" aria-pressed="false">${q.n}</button>`).join('')}</div>
   <div class="readout" id="dloc-info"></div>
   <h3 style="margin-top:16px">Tính chiều dài theo vĩ độ</h3>
   <p class="muted">Mỗi độ vĩ dài khoảng <b>111 km</b>. Chọn hai điểm, máy tính khoảng cách Bắc – Nam giữa chúng.</p>
   <div class="ctrl">
    <div><label for="dloc-a">Điểm thứ nhất</label><select id="dloc-a">${opts}</select></div>
    <div><label for="dloc-b">Điểm thứ hai</label><select id="dloc-b">${opts}</select></div>
   </div>
   <div class="readout" id="dloc-dist"></div>
  </div>
  <div class="sec lab"><h3>Đồng hồ múi giờ</h3>
   <p class="muted">Trái Đất chia 24 múi giờ, mỗi múi rộng 15° kinh tuyến. Việt Nam nằm ở <b>múi giờ số 7</b> (GMT+7). Kéo thanh trượt giờ ở Việt Nam, xem các nơi khác lúc đó là mấy giờ.</p>
   <div class="ctrl">
    <div>${slider('dloc-h','Giờ ở Việt Nam',0,23.5,0.5,20,'giờ')}</div>
    <div><label><input type="checkbox" id="dloc-dst"> Đang là giờ mùa hè ở châu Âu, Bắc Mỹ (khoảng cuối tháng 3 đến cuối tháng 10)</label></div>
   </div>
   <div class="dloc-clocks" id="dloc-clocks"></div>
   <div class="readout" id="dloc-rule"></div>
   <h3 style="margin-top:16px">Tình huống: gọi video cho bố mẹ ở Dubai</h3>
   <div id="dloc-q"></div>
  </div>`;
  const svg = document.getElementById('dloc-map');
  let sel = 0;
  function drawMap(){
    const a = PTS[0], b = PTS[1], w = PTS[2], e = PTS[3];
    let s = gridSvg(P, 2);
    // khung phạm vi 4 điểm cực
    s += `<rect x="${P.x(w.lon)}" y="${P.y(a.lat)}" width="${P.x(e.lon) - P.x(w.lon)}" height="${P.y(b.lat) - P.y(a.lat)}" fill="var(--accent-soft)" stroke="var(--accent)" stroke-dasharray="5 4" stroke-width="1.2"/>`;
    // chú thích chiều dài vĩ độ (bên trái khung)
    const xr = P.x(w.lon) - 7, ym = (P.y(a.lat) + P.y(b.lat))/2;
    s += `<line x1="${xr}" y1="${P.y(a.lat)}" x2="${xr}" y2="${P.y(b.lat)}" stroke="var(--ink)" stroke-width="1.2" marker-start="url(#dloc-ar)" marker-end="url(#dloc-ar)"/>
      <text x="${xr + 12}" y="${ym}" class="svgt" text-anchor="middle" transform="rotate(-90 ${xr + 12} ${ym})">khoảng 15° vĩ ≈ 1 650 km</text>`;
    s = `<defs><marker id="dloc-ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>` + s;
    PTS.forEach((q, j) => {
      const x = P.x(q.lon), y = P.y(q.lat), on = j === sel, r = q.k === 'cuc' ? 5.5 : 4.5;
      const LP = {'Lũng Cú':['start',8,-4],'Sín Thầu':['start',-4,14],'Sa Pa':['start',7,-6],'Hà Nội':['start',7,-4],'Hải Phòng':['end',-7,10],
        'Vinh':['start',7,3.5],'Huế':['start',7,-3],'Đà Nẵng':['end',-7,9],'Vạn Thạnh':['end',-8,-5],'Nha Trang':['end',-7,6],'Đà Lạt':['start',5,12],
        'TP Hồ Chí Minh':['start',7,-3],'Cần Thơ':['start',7,10],'Phú Quốc':['middle',0,15],'Côn Đảo':['start',6,-6],'Đất Mũi':['middle',0,15],
        'QĐ Hoàng Sa':['end',-7,3.5],'QĐ Trường Sa':['end',4,-9]};
      const [ta, dx, dy] = LP[q.n] || ['start',7,3.5];
      const lbl = q.k === 'cuc' ? `${q.n} ${q.lab}` : q.n;
      s += `<g class="dloc-pt" data-j="${j}" role="button" tabindex="0" aria-label="${q.n}">
        <circle cx="${x}" cy="${y}" r="14" fill="transparent"/>
        ${on ? `<circle cx="${x}" cy="${y}" r="${r + 5}" fill="none" stroke="var(--ink)" stroke-width="2"/>` : ''}
        <circle cx="${x}" cy="${y}" r="${r}" fill="${KC[q.k]}" stroke="var(--paper)" stroke-width="1.5"/>
        <text x="${x + dx}" y="${y + dy}" class="${q.k === 'cuc' || on ? 'svgt' : 'svgm'}" text-anchor="${ta}" style="${on ? 'font-weight:700' : ''}">${lbl}</text></g>`;
    });
    svg.innerHTML = s;
    svg.querySelectorAll('.dloc-pt').forEach(g => { g.onclick = () => pick(+g.dataset.j); g.onkeydown = ev => { if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); pick(+g.dataset.j); } }; });
  }
  function pick(j){
    sel = j; const q = PTS[j];
    drawMap();
    document.querySelectorAll('#dloc-chips button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.j === j));
    document.getElementById('dloc-info').innerHTML = `<div class="big">${q.d ? q.d + ': ' : ''}${q.n}</div>
      Toạ độ: ${dms(q.lat, 'B', 'N')}, ${dms(q.lon, 'Đ', 'T')}. ${q.info}
      ${q.k === 'cuc' ? '<br><span class="muted">Phần đất liền nước ta trải từ vĩ độ 23°23′B đến 8°34′B và từ kinh độ 102°09′Đ đến 109°28′Đ.</span>' : ''}`;
  }
  document.querySelectorAll('#dloc-chips button').forEach(b => b.onclick = () => pick(+b.dataset.j));
  document.getElementById('dloc-a').value = '0'; document.getElementById('dloc-b').value = '1';
  function dist(){
    const a = PTS[val('dloc-a')], b = PTS[val('dloc-b')];
    const dl = Math.abs(a.lat - b.lat), deg = Math.floor(dl + 1e-9), min = Math.round((dl - deg)*60);
    const km = dl*111;
    const north = a.lat >= b.lat ? a : b, south = north === a ? b : a;
    document.getElementById('dloc-dist').innerHTML = a === b ? 'Hãy chọn hai điểm khác nhau nhé.' :
      `${north.n} (${dms(north.lat,'B','N')}) − ${south.n} (${dms(south.lat,'B','N')}) = <b>${deg}°${String(min).padStart(2,'0')}′</b> ≈ ${nf(dl, 2)}° vĩ
       <div class="big">Khoảng cách Bắc – Nam ≈ ${nf(dl, 2)} × 111 ≈ ${nf(Math.round(km/5)*5, 0)} km</div>
       ${(a.k === 'cuc' && b.k === 'cuc' && /Bắc|Nam/.test(a.d) && /Bắc|Nam/.test(b.d)) ? 'Đúng như SGK: lãnh thổ phần đất liền kéo dài khoảng <b>1 650 km</b> theo chiều Bắc – Nam, trải qua gần 15 vĩ độ, nên khí hậu, cảnh quan miền Bắc và miền Nam khác nhau rõ.' : '<span class="muted">Đây là khoảng cách theo đường kinh tuyến (chỉ tính phần chênh vĩ độ), không phải quãng đường đi xe.</span>'}`;
  }
  ['dloc-a','dloc-b'].forEach(id => document.getElementById(id).addEventListener('input', dist));

  /* ---- Múi giờ ---- */
  const TZ = [
    {n:'Việt Nam', f:'🇻🇳', z:7, vn:1},
    {n:'Đu-bai (UAE)', f:'🇦🇪', z:4},
    {n:'Luân Đôn (Anh)', f:'🇬🇧', z:0, s:1},
    {n:'Pa-ri (Pháp)', f:'🇫🇷', z:1, s:1},
    {n:'Tô-ky-ô (Nhật Bản)', f:'🇯🇵', z:9},
    {n:'Xít-ni (Ô-xtrây-li-a)', f:'🇦🇺', z:10, sS:1},
    {n:'Niu Oóc (Hoa Kỳ)', f:'🇺🇸', z:-5, s:1},
    {n:'Băng Cốc (Thái Lan)', f:'🇹🇭', z:7}
  ];
  const hm = h => { const t = ((h % 24) + 24) % 24, H = Math.floor(t), M = Math.round((t - H)*60); return `${String(H).padStart(2,'0')}:${String(M).padStart(2,'0')}`; };
  const zoneOf = (c, dst) => c.z + (c.s && dst ? 1 : 0) + (c.sS && !dst ? 1 : 0);
  function clocks(){
    const h = val('dloc-h'), dst = document.getElementById('dloc-dst').checked;
    document.getElementById('dloc-clocks').innerHTML = TZ.map(c => {
      const z = zoneOf(c, dst), t = h - 7 + z, day = t < 0 ? 'hôm trước' : t >= 24 ? 'hôm sau' : 'cùng ngày', tt = ((t % 24) + 24) % 24;
      const icon = tt >= 6 && tt < 18 ? '☀️' : '🌙';
      return `<div class="dloc-ck${c.vn ? ' vn' : ''}"><span aria-hidden="true">${c.f}</span> ${c.n}<b>${icon} ${hm(t)}</b><span class="dd">GMT${z >= 0 ? '+' : '−'}${Math.abs(z)} · ${day}${c.s && dst ? ' · giờ mùa hè' : ''}${c.sS && !dst ? ' · giờ mùa hè (Nam bán cầu)' : ''}${c.z === 4 ? ' · không đổi giờ' : ''}</span></div>`;
    }).join('');
    document.getElementById('dloc-rule').innerHTML = `<b>Quy tắc:</b> giờ nơi khác = giờ Việt Nam − 7 + số múi giờ của nơi đó. Ví dụ Dubai: ${hm(h)} − 7 + 4 = <b>${hm(h - 3)}</b> (Dubai chậm hơn Việt Nam <b>3 giờ</b>). Đi về phía Tây giờ lùi lại, đi về phía Đông giờ tăng lên.
      <br><span class="muted">Anh, Pháp, Mỹ chỉnh đồng hồ nhanh thêm 1 giờ vào mùa hè; Việt Nam và Dubai không đổi giờ. Nam bán cầu (Xít-ni) có mùa hè ngược lại.</span>`;
  }
  bindSliders(p.querySelectorAll('.sec')[1], clocks);

  /* ---- Câu hỏi tình huống ---- */
  const qBox = document.getElementById('dloc-q');
  const fmtH = (h, base) => { const day = h < 0 ? ' (hôm trước)' : h >= 24 ? ' (hôm sau)' : ''; return hm(h) + day; };
  function makeQ(){
    const T = [
      () => { const h = 17 + Math.floor(Math.random()*5); return {q:`Em học xong bài lúc <b>${h} giờ</b> tối ở Việt Nam và muốn gọi video ngay. Lúc đó ở Dubai là mấy giờ?`, a:h - 3, w:[h + 3, h - 4, h - 7], why:`Dubai (GMT+4) chậm hơn Việt Nam (GMT+7) 3 giờ: ${h} − 3 = ${h - 3} giờ. Giờ đó bố mẹ thường đã đi làm về, gọi rất hợp lí.`}; },
      () => { const h = 19 + Math.floor(Math.random()*3); return {q:`Bố mẹ ở Dubai rảnh lúc <b>${h} giờ</b> tối (giờ Dubai). Em cần gọi lúc mấy giờ theo giờ Việt Nam?`, a:h + 3, w:[h - 3, h + 4, h], why:`Việt Nam nhanh hơn Dubai 3 giờ: ${h} + 3 = ${h + 3} giờ. ${h + 3 >= 23 ? 'Hơi muộn đấy! Em có thể hẹn sớm hơn, hoặc gọi vào cuối tuần.' : 'Vẫn kịp trước giờ đi ngủ.'}`}; },
      () => { const h = 6 + Math.floor(Math.random()*2); return {q:`Em muốn chúc bố mẹ buổi sáng trước khi đi học, lúc <b>${h} giờ</b> sáng ở Việt Nam. Ở Dubai lúc đó là mấy giờ?`, a:h - 3, w:[h + 3, h - 1, h - 7], why:`${h} − 3 = ${h - 3} giờ sáng ở Dubai: bố mẹ có thể còn đang ngủ! Gọi buổi tối giờ Việt Nam sẽ dễ hơn.`}; },
      () => ({q:`Một trận bóng ở Luân Đôn bắt đầu lúc <b>20 giờ</b> vào mùa đông (GMT+0). Ở Việt Nam xem trực tiếp lúc mấy giờ?`, a:27, w:[13, 26, 20], why:'Việt Nam nhanh hơn Luân Đôn 7 giờ (mùa đông): 20 + 7 = 27, tức 3 giờ sáng hôm sau. Vào giờ mùa hè (GMT+1) thì chỉ chênh 6 giờ.'}),
      () => ({q:`Bố mẹ bay từ Dubai lúc <b>21 giờ</b> (giờ Dubai), chuyến bay dài 6 giờ. Hạ cánh ở Hà Nội lúc mấy giờ (giờ Việt Nam)?`, a:30, w:[27, 24, 33], why:'21 giờ Dubai = 24 giờ (0 giờ) Việt Nam. Bay thêm 6 giờ: 24 + 6 = 30, tức 6 giờ sáng hôm sau. Cộng múi giờ trước rồi mới cộng thời gian bay.'})
    ];
    const g = T[Math.floor(Math.random()*T.length)]();
    const opts = shuffle([{h:g.a, ok:1}].concat(g.w.filter((x, j, arr) => x !== g.a && arr.indexOf(x) === j).slice(0, 3).map(h => ({h}))));
    qBox.innerHTML = `<div class="dq-card" style="font-weight:600">${g.q}</div>${opts.map((o, j) => `<button class="opt" data-k="${j}">${fmtH(o.h)}</button>`).join('')}
      <div id="dloc-qfb"></div>`;
    let done = false;
    qBox.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
      if(done) return; done = true; const ok = opts[+b.dataset.k].ok;
      qBox.querySelectorAll('[data-k]').forEach(x => { x.disabled = true; if(opts[+x.dataset.k].ok) x.classList.add('right'); });
      if(!ok) b.classList.add('wrong');
      const fb = document.getElementById('dloc-qfb'); fb.className = 'dq-fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<b style="color:var(${ok ? '--ok' : '--bad'})">${ok ? 'Đúng rồi!' : 'Chưa đúng.'}</b> ${g.why}<div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn" id="dloc-qn">Tình huống khác</button></div>`;
      document.getElementById('dloc-qn').onclick = makeQ;
    });
  }
  pick(0); dist(); clocks(); makeQ();
},

/* =========================================================
   2. ĐỊA HÌNH: LÁT CẮT VÀ NHIỆT ĐỘ THEO ĐỘ CAO
   ========================================================= */
dia_terrain(p){
  const ROUTES = [
    {n:'Hà Nội → Lào Cai → Sa Pa → Phan-xi-păng', T0:23.5, base:'Hà Nội', pts:[[0,'Hà Nội',10],[70,'Việt Trì',25],[150,'Yên Bái',45],[255,'Lào Cai',90],[268,'',700],[278,'',1200],[290,'Sa Pa',1500],[296,'',2300],[302,'Phan-xi-păng',3143]],
      real:{'Sa Pa':'Nhiệt độ trung bình năm đo được ở Sa Pa khoảng 15 – 16 °C, rất gần với ước tính!'},
      note:'Phan-xi-păng (3 143 m) là “nóc nhà Đông Dương”, đỉnh núi cao nhất nước ta, thuộc dãy Hoàng Liên Sơn.'},
    {n:'TP Hồ Chí Minh → Bảo Lộc → Đà Lạt → Lang Biang', T0:27.1, base:'TP Hồ Chí Minh', pts:[[0,'TP HCM',10],[60,'',30],[120,'Định Quán',150],[160,'',400],[190,'Bảo Lộc',850],[235,'Di Linh',1000],[270,'Liên Khương',950],[285,'',1250],[300,'Đà Lạt',1500],[312,'Lang Biang',2167]],
      real:{'Đà Lạt':'Đà Lạt đo được trung bình năm khoảng 18 °C: “thành phố ngàn hoa” mát quanh năm.'},
      note:'Đà Lạt nằm trên cao nguyên Lâm Viên; đỉnh Lang Biang cao 2 167 m.'},
    {n:'Hà Nội → Vĩnh Yên → Tam Đảo', T0:23.5, base:'Hà Nội', pts:[[0,'Hà Nội',10],[30,'',12],[50,'Vĩnh Yên',20],[62,'',100],[68,'',500],[72,'Tam Đảo',900],[76,'',1300],[79,'Đỉnh Rùng Rình',1590]],
      real:{'Tam Đảo':'Thị trấn Tam Đảo (gần 900 m) đo được trung bình năm khoảng 18 °C, là nơi nghỉ mát gần Hà Nội.'},
      note:'Dãy Tam Đảo có đỉnh Rùng Rình cao khoảng 1 590 m, ngay rìa Đồng bằng sông Hồng.'}
  ];
  p.innerHTML = `<style>
   .dter-chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}
   .dter-chips button{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:4px 10px;font-size:13.5px}
   .dter-chips button[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);font-weight:700}
   .dter-wf{display:grid;grid-template-columns:repeat(10,1fr);gap:3px;max-width:300px;margin:10px auto}
   .dter-wf i{aspect-ratio:1;border-radius:4px;background:var(--line);transition:background .25s}
   .dter-leg{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:13px;color:var(--muted);justify-content:center}
   .dter-leg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:4px;vertical-align:-1px}
   @media (prefers-reduced-motion:reduce){.dter-wf i{transition:none}}
   ${QSTYLE}
  </style>
  <div class="sec lab"><h3>Lát cắt địa hình và nhiệt độ theo độ cao</h3>
   <p class="muted">Càng lên cao, không khí càng loãng, nhiệt độ giảm trung bình <b>0,6 °C mỗi 100 m</b>. Chọn tuyến, rồi kéo người leo núi lên cao.</p>
   <div id="dter-guess"></div>
   <div class="ctrl" style="margin-top:10px">
    <div><label for="dter-r">Tuyến lát cắt</label><select id="dter-r">${ROUTES.map((r, j) => `<option value="${j}">${r.n}</option>`).join('')}</select></div>
    <div id="dter-t0box"></div>
   </div>
   <svg viewBox="0 0 360 230" id="dter-svg" role="img" aria-label="Lát cắt địa hình"></svg>
   <div class="dter-chips" id="dter-chips"></div>
   <div class="ctrl"><div id="dter-xbox"></div></div>
   <div class="readout" id="dter-out"></div>
  </div>
  <div class="sec lab"><h3>Đồi núi chiếm bao nhiêu phần lãnh thổ?</h3>
   <p class="muted"><b>Đoán trước:</b> kéo thanh trượt đến tỉ lệ em nghĩ là diện tích đồi núi (cả đồi núi thấp và núi cao), rồi bấm Kiểm tra. Mỗi ô vuông là 1% diện tích phần đất liền.</p>
   <div class="ctrl"><div>${slider('dter-g','Em đoán đồi núi chiếm',0,100,5,50,'%')}</div></div>
   <div class="row"><button class="btn" id="dter-chk">Kiểm tra</button><button class="btn ghost" id="dter-rs">Đoán lại</button></div>
   <div class="dter-wf" id="dter-wf" aria-hidden="true">${'<i></i>'.repeat(100)}</div>
   <div class="dter-leg" id="dter-leg"></div>
   <div class="readout" id="dter-wout"></div>
  </div>`;
  const svg = document.getElementById('dter-svg');
  let R, X;
  const elevAt = x => { const q = R.pts; for(let j = 1; j < q.length; j++) if(x <= q[j][0]){ const a = q[j-1], b = q[j], t = (x - a[0])/(b[0] - a[0]); return a[2] + t*(b[2] - a[2]); } return q[q.length-1][2]; };
  function load(){
    R = ROUTES[val('dter-r')];
    const maxX = R.pts[R.pts.length-1][0];
    document.getElementById('dter-t0box').innerHTML = slider('dter-t0', 'Nhiệt độ ở ' + R.base, 10, 40, 0.5, R.T0, '°C');
    document.getElementById('dter-xbox').innerHTML = slider('dter-x', 'Vị trí người leo núi (tính từ ' + R.base + ')', 0, maxX, 1, 0, 'km');
    document.getElementById('dter-chips').innerHTML = R.pts.filter(q => q[1]).map(q => `<button data-x="${q[0]}" aria-pressed="false">${q[1]} · ${nf(q[2],0)} m</button>`).join('');
    bindSliders(document.getElementById('dter-t0box'), draw);
    bindSliders(document.getElementById('dter-xbox'), draw);
    document.querySelectorAll('#dter-chips button').forEach(b => b.onclick = () => setX(+b.dataset.x));
    setX(0);
  }
  function setX(x){ const el = document.getElementById('dter-x'); el.value = x; document.getElementById('dter-x-v').textContent = fmt(x) + ' km'; draw(); }
  function draw(){
    X = val('dter-x'); const T0 = val('dter-t0');
    const maxX = R.pts[R.pts.length-1][0], maxH = Math.ceil(Math.max(...R.pts.map(q => q[2]))*1.12/500)*500;
    const x0 = 44, x1 = 340, y0 = 190, y1 = 26, n = R.pts.length - 1;
    /* trục ngang chia đều giữa các điểm (không theo tỉ lệ) để thấy rõ đoạn leo dốc */
    const sx = x => { const q = R.pts; for(let j = 1; j <= n; j++) if(x <= q[j][0]) return x0 + (j - 1 + (x - q[j-1][0])/(q[j][0] - q[j-1][0]))/n*(x1 - x0); return x1; };
    const sy = h => y0 - h/maxH*(y0 - y1);
    let s = '';
    for(let h = 0; h <= maxH; h += 500){ s += `<line x1="${x0}" y1="${sy(h)}" x2="${x1}" y2="${sy(h)}" stroke="var(--line)" stroke-width="1"/><text x="${x0 - 4}" y="${sy(h) + 3.5}" class="svgm" text-anchor="end">${nf(h,0)}</text>`; }
    s += `<text x="${x0 - 4}" y="${y1 - 6}" class="svgm" text-anchor="end">m</text>`;
    // vành đai màu theo độ cao (vật thể)
    const poly = `${sx(0)},${y0} ` + R.pts.map(q => `${sx(q[0])},${sy(q[2])}`).join(' ') + ` ${sx(maxX)},${y0}`;
    s += `<defs><linearGradient id="dter-gr" gradientUnits="userSpaceOnUse" x1="0" y1="${sy(0)}" x2="0" y2="${sy(maxH)}">
       <stop offset="0" stop-color="#7DBE6A"/><stop offset="${Math.min(1,500/maxH)}" stop-color="#A9C46A"/><stop offset="${Math.min(1,1000/maxH)}" stop-color="#C9A46A"/><stop offset="${Math.min(1,2000/maxH)}" stop-color="#9C7A5A"/><stop offset="1" stop-color="#8E8E9A"/></linearGradient></defs>
      <polygon points="${poly}" fill="url(#dter-gr)" stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round"/>`;
    let li = 0; R.pts.forEach((q, j) => { if(!q[1]) return; const up = li++ % 2 === 0;
      s += `<line x1="${sx(q[0])}" y1="${sy(q[2])}" x2="${sx(q[0])}" y2="${y0}" stroke="var(--ink)" stroke-width=".6" stroke-dasharray="2 3" opacity=".5"/>
        <text x="${sx(q[0])}" y="${y0 + (up ? 13 : 25)}" class="svgm" text-anchor="${j === R.pts.length-1 ? 'end' : j === 0 ? 'start' : 'middle'}">${q[1]}</text>`; });
    // người leo núi
    const h = elevAt(X), T = T0 - 0.6*(h - R.pts[0][2])/100;
    s += `<g transform="translate(${sx(X)},${sy(h)})"><line x1="0" y1="0" x2="0" y2="-22" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 -22 L14 -18 L0 -14 z" fill="#E5484D"/><circle r="4.5" fill="var(--accent)" stroke="var(--paper)" stroke-width="1.5"/></g>
      <text x="${clamp(sx(X), 70, 300)}" y="${Math.max(12, sy(h) - 28)}" class="svgt" text-anchor="middle" style="font-weight:700">${nf(h,0)} m · ${nf(T,1)} °C</text>
      <text x="${x1}" y="${y0 + 38}" class="svgm" text-anchor="end">Sơ đồ: chiều ngang không theo tỉ lệ (tổng khoảng ${nf(maxX,0)} km).</text>`;
    svg.innerHTML = s;
    const here = R.pts.find(q => q[1] && q[0] === X);
    document.querySelectorAll('#dter-chips button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.x === X));
    const dh = h - R.pts[0][2];
    let why = '';
    if(h >= 1500) why = `Lên tới ${nf(h,0)} m, trời mát như mùa thu, mùa đông có thể có sương muối, thậm chí băng tuyết. Vì thế ở Sa Pa, Đà Lạt người ta trồng được <b>rau, hoa, quả ôn đới</b> (bắp cải, súp lơ, su hào, dâu tây, hoa hồng, đào, mận) và phát triển <b>du lịch nghỉ mát</b>.`;
    else if(h >= 600) why = `Ở độ cao ${nf(h,0)} m, khí hậu đã dịu hơn rõ rệt so với vùng thấp: mùa hè mát, thích hợp trồng chè, cây ăn quả cận nhiệt và làm khu nghỉ mát.`;
    else why = 'Vùng thấp, nóng ẩm quanh năm (miền Nam) hoặc có mùa đông lạnh (miền Bắc): trồng lúa, cây nhiệt đới.';
    document.getElementById('dter-out').innerHTML = `<div class="big">${here ? here[1] + ': ' : ''}cao ${nf(h,0)} m → khoảng ${nf(T,1)} °C</div>
      Cao hơn ${R.base} ${nf(dh,0)} m nên lạnh hơn: 0,6 × ${nf(dh,0)} / 100 ≈ <b>${nf(0.6*dh/100,1)} °C</b>. Vậy ${nf(T0,1)} − ${nf(0.6*dh/100,1)} ≈ ${nf(T,1)} °C.
      ${here && R.real[here[1]] && Math.abs(T0 - R.T0) < 0.01 ? '<br>✅ ' + R.real[here[1]] : ''}<br>${why}
      ${X === R.pts[R.pts.length-1][0] ? '<br><span class="muted">' + R.note + '</span>' : ''}`;
  }
  /* Đoán trước */
  (function guess(){
    const box = document.getElementById('dter-guess'), T = 30 - 0.6*(3143 - 15)/100;
    const opts = shuffle([[nf(Math.round(T),0) + ' °C', 1], ['21 °C'], ['29 °C'], ['0 °C']]);
    box.innerHTML = `<div class="dq-card" style="font-weight:600">🤔 <b>Đoán trước:</b> Một ngày hè Hà Nội 30 °C. Trên đỉnh Phan-xi-păng (3 143 m) lúc đó khoảng bao nhiêu độ?</div>
      ${opts.map((o, j) => `<button class="opt" data-k="${j}">${o[0]}</button>`).join('')}<div id="dter-gfb"></div>`;
    let done = false;
    box.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
      if(done) return; done = true; const ok = !!opts[+b.dataset.k][1];
      box.querySelectorAll('[data-k]').forEach(x => { x.disabled = true; if(opts[+x.dataset.k][1]) x.classList.add('right'); });
      if(!ok) b.classList.add('wrong');
      const fb = document.getElementById('dter-gfb'); fb.className = 'dq-fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<b style="color:var(${ok ? '--ok' : '--bad'})">${ok ? 'Chính xác!' : 'Chưa đúng.'}</b> Chênh cao khoảng 3 130 m nên lạnh hơn 0,6 × 3 130 / 100 ≈ 18,8 °C: 30 − 18,8 ≈ <b>11 °C</b>. Leo Phan-xi-păng giữa mùa hè vẫn phải mang áo ấm! Thử kiểm tra bằng lát cắt bên dưới.`;
    });
  })();
  document.getElementById('dter-r').addEventListener('input', load);
  load();

  /* Ô vuông tỉ lệ địa hình */
  const SEG = [
    {n:'Đồng bằng', v:25, c:'#7DBE6A'},
    {n:'Đồi núi thấp (dưới 1 000 m)', v:60, c:'#C9A46A'},
    {n:'Núi trung bình (1 000 – 2 000 m)', v:14, c:'#9C7A5A'},
    {n:'Núi cao (trên 2 000 m)', v:1, c:'#5E5A6E'}
  ];
  const wf = document.querySelectorAll('#dter-wf i');
  function showGuess(){ const g = val('dter-g'); wf.forEach((c, j) => c.style.background = j < g ? 'var(--accent)' : 'var(--line)');
    document.getElementById('dter-leg').innerHTML = `<span><i style="background:var(--accent)"></i>Em đoán: đồi núi ${g}%</span>`; }
  bindSliders(p.querySelectorAll('.sec')[1], () => { showGuess(); document.getElementById('dter-wout').innerHTML = 'Bấm “Kiểm tra” để xem đáp án.'; });
  document.getElementById('dter-chk').onclick = () => {
    const g = val('dter-g'); let k = 0;
    // núi cao xếp trước (trên cùng), đồng bằng cuối cùng
    const order = SEG.slice().reverse(); const cols = [];
    order.forEach(s => { for(let j = 0; j < s.v; j++) cols.push(s.c); });
    wf.forEach((c, j) => c.style.background = cols[j]);
    document.getElementById('dter-leg').innerHTML = order.map(s => `<span><i style="background:${s.c}"></i>${s.n}: ${s.v === 1 ? 'khoảng 1' : s.v}%</span>`).join('');
    const diff = Math.abs(g - 75);
    document.getElementById('dter-wout').innerHTML = `<div class="big">Đồi núi chiếm khoảng 3/4 diện tích (75%)</div>
      Em đoán ${g}%: ${diff === 0 ? '<b style="color:var(--ok)">chính xác!</b>' : diff <= 10 ? '<b style="color:var(--ok)">rất gần!</b>' : 'lệch ' + diff + '%, nhớ con số “ba phần tư” nhé.'}
      <br>Nhưng chủ yếu là <b>đồi núi thấp</b>: địa hình dưới 1 000 m (gồm đồng bằng và đồi núi thấp) chiếm khoảng <b>85%</b> diện tích; núi cao trên 2 000 m chỉ khoảng <b>1%</b>. Đồng bằng chỉ chiếm 1/4 nhưng là nơi tập trung đông dân, trồng lúa chính.`;
    void k;
  };
  document.getElementById('dter-rs').onclick = () => { showGuess(); document.getElementById('dter-wout').innerHTML = 'Bấm “Kiểm tra” để xem đáp án.'; };
  showGuess(); document.getElementById('dter-wout').innerHTML = 'Bấm “Kiểm tra” để xem đáp án.';
},

/* =========================================================
   3. BIỂU ĐỒ KHÍ HẬU
   ========================================================= */
dia_climate(p){
  /* Số liệu trung bình nhiều năm (nhiệt độ °C, lượng mưa mm) */
  const ST = [
    {n:'Hà Nội', t:[16.4,17.0,20.2,23.7,27.3,28.8,28.9,28.2,27.2,24.6,21.4,18.2], r:[18.6,26.2,43.8,90.1,188.5,239.9,288.2,318.0,265.4,130.7,43.4,23.4], h:'Đồng bằng Bắc Bộ, độ cao khoảng 6 m'},
    {n:'Huế', t:[20.0,20.9,23.1,26.0,28.3,29.3,29.4,28.9,27.1,25.1,23.1,20.8], r:[161.3,62.6,47.1,51.6,82.1,116.7,95.3,104.0,473.4,795.6,580.6,297.4], h:'Ven biển Trung Bộ, độ cao khoảng 11 m'},
    {n:'TP Hồ Chí Minh', t:[25.8,26.7,27.9,28.9,28.3,27.5,27.1,27.1,26.8,26.7,26.4,25.7], r:[13.8,4.1,10.5,50.4,218.4,311.7,293.7,269.8,327.1,266.7,116.5,48.3], h:'Đông Nam Bộ, độ cao khoảng 11 m'},
    {n:'Sa Pa', t:[8.9,10.6,14.3,17.6,19.7,20.6,20.6,20.3,18.8,16.4,12.9,9.9], r:[70,85,120,225,380,430,480,450,320,230,100,60], h:'Vùng núi Hoàng Liên Sơn, độ cao khoảng 1 500 m (số liệu làm tròn)'},
    {n:'Đà Lạt', t:[16.4,17.4,18.5,19.6,20.2,19.8,19.4,19.3,19.1,18.6,17.8,16.7], r:[11,23,65,158,214,202,228,213,289,256,91,36], h:'Cao nguyên Lâm Viên, độ cao khoảng 1 500 m (số liệu làm tròn)'}
  ];
  const RAIN = '#4F8FD8', TEMP = '#E0503A';
  const sum = a => a.reduce((s, x) => s + x, 0);
  const stats = s => { const tb = sum(s.t)/12, mx = Math.max(...s.t), mn = Math.min(...s.t), R = sum(s.r);
    const wet = s.r.map((x, j) => x > 100 ? j + 1 : 0).filter(Boolean), mxR = s.r.indexOf(Math.max(...s.r)) + 1;
    return {tb, amp: mx - mn, R, wet, mxR, mxT: s.t.indexOf(mx) + 1, mnT: s.t.indexOf(mn) + 1}; };
  const monthsTxt = arr => { if(!arr.length) return 'không có'; const out = []; let a = arr[0], b = arr[0];
    for(let j = 1; j <= arr.length; j++){ if(arr[j] === b + 1){ b = arr[j]; continue; } out.push(a === b ? `${a}` : `${a} – ${b}`); a = b = arr[j]; } return 'tháng ' + out.join(', '); };
  p.innerHTML = `<style>
   .dcli-grid{display:grid;grid-template-columns:1fr;gap:12px}
   @media(min-width:640px){.dcli-grid.two{grid-template-columns:1fr 1fr}}
   .dcli-box h4{margin:4px 0;font-size:16px}
   .dcli-leg{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:13px;color:var(--muted);margin:6px 0}
   .dcli-leg i{display:inline-block;width:14px;height:10px;border-radius:2px;margin-right:4px;vertical-align:-1px}
   .dcli-leg i.ln{height:3px;border-radius:2px;vertical-align:3px}
   .dcli-m{cursor:pointer}
   .dcli-st{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px;font-size:14px}
   .dcli-st div{background:var(--accent-soft);border-radius:10px;padding:6px 8px}
   .dcli-st b{display:block;font-size:17px}
   .dcli-tip{font-size:14px;min-height:1.6em;margin-top:4px}
   ${QSTYLE}
  </style>
  <div class="sec lab"><h3>Biểu đồ khí hậu</h3>
   <div id="dcli-guess"></div>
   <p class="muted" style="margin-top:12px">Cột xanh là <b>lượng mưa</b> (đọc trục trái, mm), đường đỏ là <b>nhiệt độ</b> (đọc trục phải, °C). Chạm vào một tháng để xem số liệu.</p>
   <div class="ctrl">
    <div><label for="dcli-a">Trạm khí tượng</label><select id="dcli-a">${ST.map((s, j) => `<option value="${j}">${s.n}</option>`).join('')}</select></div>
    <div><label for="dcli-b">So sánh với</label><select id="dcli-b"><option value="-1">(không so sánh)</option>${ST.map((s, j) => `<option value="${j}">${s.n}</option>`).join('')}</select></div>
   </div>
   <div class="dcli-leg"><span><i style="background:${RAIN}"></i>Lượng mưa (mm)</span><span><i class="ln" style="background:${TEMP}"></i>Nhiệt độ (°C)</span><span><i style="background:var(--accent-soft);border:1px dashed var(--accent)"></i>Tháng mưa trên 100 mm</span></div>
   <div class="dcli-grid" id="dcli-grid"></div>
   <div class="readout" id="dcli-cmp"></div>
   <details class="wq" style="margin-top:10px"><summary>Xem bảng số liệu</summary><div class="tbl" id="dcli-tbl"></div></details>
  </div>`;
  let selM = [-1, -1];
  function chart(si, slot, maxR){
    const s = ST[si], S = stats(s);
    const x0 = 34, x1 = 318, y0 = 182, y1 = 16, bw = (x1 - x0)/12;
    const sr = v => y0 - v/maxR*(y0 - y1), st = v => y0 - (v)/40*(y0 - y1);
    let g = '';
    const step = maxR > 600 ? 200 : 100;
    for(let v = 0; v <= maxR; v += step){ const t = v/maxR*40;
      g += `<line x1="${x0}" y1="${sr(v)}" x2="${x1}" y2="${sr(v)}" stroke="var(--line)" stroke-width="1"/><text x="${x0 - 4}" y="${sr(v) + 3.5}" class="svgm" text-anchor="end">${v}</text>`; }
    for(let v = 0; v <= 40; v += 10) g += `<text x="${x1 + 4}" y="${st(v) + 3.5}" class="svgm" style="fill:${TEMP}">${v}</text>`;
    g += `<text x="${x0 - 4}" y="${y1 - 5}" class="svgm" text-anchor="end">mm</text><text x="${x1 + 4}" y="${y1 - 5}" class="svgm" style="fill:${TEMP}">°C</text>`;
    s.r.forEach((v, j) => { const x = x0 + j*bw;
      if(v > 100) g += `<rect x="${x + 1}" y="${y1}" width="${bw - 2}" height="${y0 - y1}" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width=".6" stroke-dasharray="3 3"/>`; });
    s.r.forEach((v, j) => { const x = x0 + j*bw + 3, h = y0 - sr(v);
      g += `<path d="M${x} ${y0} V${y0 - h + Math.min(3, h)} q0 -3 3 -3 h${bw - 12} q3 0 3 3 V${y0} z" fill="${RAIN}" opacity="${selM[slot] < 0 || selM[slot] === j ? 1 : .55}"/>`;
      g += `<text x="${x0 + j*bw + bw/2}" y="${y0 + 13}" class="svgm" text-anchor="middle">${j + 1}</text>`; });
    g += `<polyline points="${s.t.map((v, j) => `${x0 + j*bw + bw/2},${st(v)}`).join(' ')}" fill="none" stroke="${TEMP}" stroke-width="2" stroke-linejoin="round"/>`;
    s.t.forEach((v, j) => g += `<circle cx="${x0 + j*bw + bw/2}" cy="${st(v)}" r="${selM[slot] === j ? 5 : 3.5}" fill="${TEMP}" stroke="var(--paper)" stroke-width="1.5"/>`);
    g += `<text x="${(x0 + x1)/2}" y="${y0 + 27}" class="svgm" text-anchor="middle">Tháng</text>`;
    if(selM[slot] >= 0){ const j = selM[slot]; g += `<line x1="${x0 + j*bw + bw/2}" y1="${y1}" x2="${x0 + j*bw + bw/2}" y2="${y0}" stroke="var(--ink)" stroke-width="1" stroke-dasharray="2 2"/>`; }
    for(let j = 0; j < 12; j++) g += `<rect class="dcli-m" data-s="${slot}" data-m="${j}" x="${x0 + j*bw}" y="${y1}" width="${bw}" height="${y0 - y1 + 16}" fill="transparent"/>`;
    const tip = selM[slot] >= 0 ? `<b>Tháng ${selM[slot] + 1}:</b> mưa ${nf(s.r[selM[slot]],1)} mm, nhiệt độ ${nf(s.t[selM[slot]],1)} °C` : '<span class="muted">Chạm vào cột tháng để xem số liệu.</span>';
    return `<div class="dcli-box"><h4>${s.n}</h4><div class="muted" style="font-size:13px">${s.h}</div>
      <svg viewBox="0 0 346 214" role="img" aria-label="Biểu đồ nhiệt độ và lượng mưa ${s.n}">${g}</svg>
      <div class="dcli-tip">${tip}</div>
      <div class="dcli-st"><div>Nhiệt độ TB năm<b>${nf(S.tb,1)} °C</b></div><div>Biên độ nhiệt năm<b>${nf(S.amp,1)} °C</b></div>
       <div>Tổng lượng mưa<b>${nf(S.R,0)} mm</b></div><div>Mưa nhiều nhất<b>tháng ${S.mxR}</b></div></div>
      <div style="font-size:14px;margin-top:6px">Các tháng mưa trên 100 mm: <b>${monthsTxt(S.wet)}</b>.</div></div>`;
  }
  function draw(){
    const a = val('dcli-a'), b = val('dcli-b'), two = b >= 0 && b !== a;
    const maxR = Math.ceil(Math.max(...ST[a].r, ...(two ? ST[b].r : [0]))/100)*100;
    const grid = document.getElementById('dcli-grid');
    grid.className = 'dcli-grid' + (two ? ' two' : '');
    grid.innerHTML = chart(a, 0, maxR) + (two ? chart(b, 1, maxR) : '');
    grid.querySelectorAll('.dcli-m').forEach(r => r.onclick = () => { const k = +r.dataset.s; selM[k] = selM[k] === +r.dataset.m ? -1 : +r.dataset.m; draw(); });
    const A = stats(ST[a]);
    let c = '';
    if(two){ const B = stats(ST[b]), sa = ST[a].n, sb = ST[b].n;
      c = `<b>So sánh ${sa} và ${sb}</b> (hai biểu đồ cùng thang mưa ${maxR} mm để so cho công bằng):<ul>
        <li>Nhiệt độ TB năm: ${sa} ${nf(A.tb,1)} °C, ${sb} ${nf(B.tb,1)} °C. ${A.tb > B.tb ? sa : sb} nóng hơn ${nf(Math.abs(A.tb - B.tb),1)} °C.</li>
        <li>Biên độ nhiệt: ${nf(A.amp,1)} °C và ${nf(B.amp,1)} °C. ${A.amp > B.amp ? sa : sb} chênh lệch giữa tháng nóng và tháng lạnh lớn hơn${(A.amp > 9 || B.amp > 9) ? ' (miền Bắc có mùa đông lạnh do gió mùa Đông Bắc)' : ''}.</li>
        <li>Tổng mưa: ${nf(A.R,0)} mm và ${nf(B.R,0)} mm. Mưa nhiều nhất: tháng ${A.mxR} và tháng ${B.mxR}.</li></ul>`;
    } else c = `Thử chọn trạm ở ô <b>So sánh với</b> để đặt hai biểu đồ cạnh nhau.`;
    c += insight(ST[a].n);
    document.getElementById('dcli-cmp').innerHTML = c;
    document.getElementById('dcli-tbl').innerHTML = `<table><tr><th>Tháng</th>${ST.map(s => `<th>${s.n}<br><span class="muted" style="font-weight:400">°C · mm</span></th>`).join('')}</tr>
      ${MONTHS.map((m, j) => `<tr><td>${m}</td>${ST.map(s => `<td>${nf(s.t[j],1)} · ${nf(s.r[j],1)}</td>`).join('')}</tr>`).join('')}
      <tr><th>Năm</th>${ST.map(s => { const S = stats(s); return `<th>${nf(S.tb,1)} · ${nf(S.R,0)}</th>`; }).join('')}</tr></table>`;
  }
  function insight(n){
    const M = {
      'Hà Nội':'<br><b>Hà Nội:</b> mùa hè nóng, mưa nhiều (tháng 5 – 10); mùa đông lạnh, ít mưa (tháng 1 dưới 17 °C) do gió mùa Đông Bắc. Đây là kiểu khí hậu nhiệt đới gió mùa có mùa đông lạnh.',
      'Huế':'<br><b>Huế:</b> mưa dồn vào <b>thu đông (tháng 9 – 12)</b>, chiếm khoảng 3/4 lượng mưa cả năm. Gió mùa Đông Bắc thổi qua biển mang hơi ẩm, gặp dãy Trường Sơn và dãy Bạch Mã chắn lại, cộng thêm bão và áp thấp nhiệt đới, nên mưa rất to. Mùa hè lại khô nóng vì gió Tây khô nóng (gió Lào).',
      'TP Hồ Chí Minh':'<br><b>TP Hồ Chí Minh:</b> nóng quanh năm, biên độ nhiệt nhỏ (chỉ khoảng 3 °C). Hai mùa rõ rệt: mùa mưa (tháng 5 – 11) và mùa khô (tháng 12 – 4), tháng 2 gần như không mưa.',
      'Sa Pa':'<br><b>Sa Pa:</b> ở độ cao khoảng 1 500 m nên mát quanh năm, nhiệt độ TB năm chỉ khoảng 16 °C, mùa đông có thể có băng tuyết. Mưa rất nhiều vì sườn núi chắn gió ẩm.',
      'Đà Lạt':'<br><b>Đà Lạt:</b> mát quanh năm (TB khoảng 18 °C) nhờ độ cao 1 500 m, nhưng mùa mưa, mùa khô vẫn giống Nam Bộ: mưa tháng 5 – 10, khô tháng 12 – 3.'
    };
    return M[n] || '';
  }
  /* Đoán trước */
  (function(){
    const box = document.getElementById('dcli-guess'), hue = ST.find(s => s.n === 'Huế');
    const ans = hue ? hue.r.indexOf(Math.max(...hue.r)) + 1 : 10;
    const opts = shuffle([ans, 7, 8, 12].filter((x, j, a) => a.indexOf(x) === j).slice(0, 4));
    box.innerHTML = `<div class="dq-card" style="font-weight:600">🤔 <b>Đoán trước:</b> Ở Hà Nội và TP Hồ Chí Minh, mưa nhiều nhất vào mùa hạ (tháng 8, tháng 9). Còn ở <b>Huế</b>, tháng nào mưa nhiều nhất?</div>
      <div class="row">${opts.map(m => `<button class="opt" style="width:auto;flex:1;text-align:center" data-m="${m}">Tháng ${m}</button>`).join('')}</div><div id="dcli-gfb"></div>`;
    let done = false;
    box.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
      if(done) return; done = true; const ok = +b.dataset.m === ans;
      box.querySelectorAll('[data-m]').forEach(x => { x.disabled = true; if(+x.dataset.m === ans) x.classList.add('right'); });
      if(!ok) b.classList.add('wrong');
      const fb = document.getElementById('dcli-gfb'); fb.className = 'dq-fb ' + (ok ? 'ok' : 'no');
      fb.innerHTML = `<b style="color:var(${ok ? '--ok' : '--bad'})">${ok ? 'Giỏi quá!' : 'Bất ngờ chưa!'}</b> Huế mưa nhiều nhất vào <b>tháng ${ans}</b>${hue ? ` (khoảng ${nf(hue.r[ans-1],0)} mm, gấp hơn 2 lần cả tháng mưa nhất ở Hà Nội)` : ''}. Mùa mưa ở Trung Bộ lệch về thu đông. Biểu đồ Huế đã được chọn bên dưới, xem nhé!`;
      document.getElementById('dcli-a').value = String(ST.indexOf(hue)); document.getElementById('dcli-b').value = String(ST.findIndex(s => s.n === 'Hà Nội')); selM = [ans - 1, -1]; draw();
    });
  })();
  bindSliders(p, () => { selM = [-1, -1]; draw(); });
  draw();
},

/* =========================================================
   4. THUỶ VĂN: LƯU LƯỢNG SÔNG VÀ MỰC NƯỚC BÁO ĐỘNG
   ========================================================= */
dia_river(p){
  const RV = [
    {n:'Sông Hồng', st:'trạm Sơn Tây', reg:'Bắc Bộ', q:[1318,1100,914,1071,1893,4692,7986,9246,6690,4122,2813,1746], src:'SGK'},
    {n:'Sông Gianh', st:'trạm Đồng Tâm', reg:'Trung Bộ', q:[27.7,19.3,17.5,10.7,28.7,36.7,40.6,58.4,185,178,94.1,43.7], src:'SGK'},
    {n:'Sông Mê Công', st:'hạ lưu', reg:'Nam Bộ', q:[9000,6000,4500,3800,4500,9000,18000,27000,33000,36000,25500,15000], src:'làm tròn'}
  ];
  const sum = a => a.reduce((s, x) => s + x, 0);
  const info = r => { const tb = sum(r.q)/12, fl = r.q.map((x, j) => x > tb ? j + 1 : 0).filter(Boolean); return {tb, fl, mx: r.q.indexOf(Math.max(...r.q)) + 1, mn: r.q.indexOf(Math.min(...r.q)) + 1}; };
  const FLOOD = '#2E6FB8', DRY = '#9DBFE3';
  p.innerHTML = `<style>
   .driv-strip{display:grid;grid-template-columns:110px repeat(12,1fr);gap:2px;font-size:12.5px;align-items:center;margin:4px 0}
   .driv-strip span{text-align:center;color:var(--muted)}
   .driv-strip i{height:20px;border-radius:4px;background:var(--line)}
   .driv-strip i.on{background:${FLOOD}}
   .driv-strip .nm{text-align:left;color:var(--ink);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
   .driv-lv{display:inline-block;padding:2px 10px;border-radius:999px;font-weight:800;color:#fff}
   .driv-m{cursor:pointer}
   ${QSTYLE}
  </style>
  <div class="sec lab"><h3>Lưu lượng nước theo mùa</h3>
   <p class="muted">Lưu lượng là lượng nước chảy qua mặt cắt ngang lòng sông trong 1 giây (m³/s). <b>Mùa lũ</b> gồm các tháng có lưu lượng <b>lớn hơn trung bình năm</b>. Chọn sông, xem cột nào vượt qua đường trung bình.</p>
   <div class="ctrl"><div><label for="driv-s">Chọn sông</label><select id="driv-s">${RV.map((r, j) => `<option value="${j}">${r.n} (${r.st})</option>`).join('')}</select></div></div>
   <svg viewBox="0 0 360 220" id="driv-svg" role="img" aria-label="Biểu đồ lưu lượng nước trung bình tháng"></svg>
   <div class="readout" id="driv-out"></div>
   <h3 style="margin-top:16px">So sánh mùa lũ ba miền</h3>
   <p class="muted"><b>Đoán trước:</b> miền nào có mùa lũ đến muộn nhất? Ô xanh đậm là tháng mùa lũ.</p>
   <div id="driv-cmp"></div>
   <div class="readout" id="driv-cmpt"></div>
  </div>
  <div class="sec lab"><h3>Mực nước báo động sông Hồng tại Hà Nội</h3>
   <p class="muted">Kéo thanh trượt để dâng mực nước sông Hồng (trạm Long Biên, Hà Nội). Khi nào phải báo động, và em cần làm gì?</p>
   <svg viewBox="0 0 360 262" id="driv-lvsvg" role="img" aria-label="Mặt cắt sông Hồng và đê"></svg>
   <div class="ctrl"><div>${slider('driv-h','Mực nước sông Hồng tại Hà Nội',1,14.5,0.1,6,'m')}</div></div>
   <div class="readout" id="driv-lv"></div>
  </div>`;
  let selM = -1;
  function draw(){
    const r = RV[val('driv-s')], I = info(r);
    const x0 = 46, x1 = 346, y0 = 180, y1 = 18, bw = (x1 - x0)/12;
    const raw = Math.max(...r.q), stepV = raw > 10000 ? 5000 : raw > 4000 ? 2000 : raw > 1000 ? 200 : 50, dd = raw < 1000 ? 1 : 0, maxV = Math.ceil(raw/stepV)*stepV;
    const sy = v => y0 - v/maxV*(y0 - y1);
    let s = '';
    for(let v = 0; v <= maxV; v += stepV) s += `<line x1="${x0}" y1="${sy(v)}" x2="${x1}" y2="${sy(v)}" stroke="var(--line)"/><text x="${x0 - 4}" y="${sy(v) + 3.5}" class="svgm" text-anchor="end">${nf(v,0)}</text>`;
    s += `<text x="${x0 - 4}" y="${y1 - 6}" class="svgm" text-anchor="end">m³/s</text>`;
    r.q.forEach((v, j) => { const x = x0 + j*bw + 3, h = y0 - sy(v), fl = v > I.tb;
      s += `<path d="M${x} ${y0} V${y0 - h + Math.min(3, h)} q0 -3 3 -3 h${bw - 12} q3 0 3 3 V${y0} z" fill="${fl ? FLOOD : DRY}"${selM === j ? ' stroke="var(--ink)" stroke-width="1.5"' : ''}/>
        <text x="${x0 + j*bw + bw/2}" y="${y0 + 13}" class="svgm" text-anchor="middle">${j + 1}</text>`; });
    s += `<line x1="${x0}" y1="${sy(I.tb)}" x2="${x1}" y2="${sy(I.tb)}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="${x0 + 4}" y="${sy(I.tb) - 5}" class="svgt" style="fill:var(--bad);font-weight:700;paint-order:stroke;stroke:var(--paper);stroke-width:3px">TB năm ${nf(I.tb,dd)} m³/s</text>
      <text x="${(x0 + x1)/2}" y="${y0 + 27}" class="svgm" text-anchor="middle">Tháng · ■ đậm: mùa lũ · ■ nhạt: mùa cạn</text>`;
    if(selM >= 0) s += `<text x="${clamp(x0 + selM*bw + bw/2, 80, 320)}" y="${Math.max(30, sy(r.q[selM]) - 8)}" class="svgt" text-anchor="middle" style="font-weight:700">${nf(r.q[selM],dd)}</text>`;
    for(let j = 0; j < 12; j++) s += `<rect class="driv-m" data-m="${j}" x="${x0 + j*bw}" y="${y1}" width="${bw}" height="${y0 - y1 + 16}" fill="transparent"/>`;
    const svg = document.getElementById('driv-svg'); svg.innerHTML = s;
    svg.querySelectorAll('.driv-m').forEach(e => e.onclick = () => { selM = selM === +e.dataset.m ? -1 : +e.dataset.m; draw(); });
    const fl = I.fl, ratio = Math.max(...r.q)/Math.min(...r.q);
    document.getElementById('driv-out').innerHTML = `${selM >= 0 ? `<b>Tháng ${selM + 1}:</b> ${nf(r.q[selM],dd)} m³/s, ${r.q[selM] > I.tb ? 'thuộc mùa lũ' : 'thuộc mùa cạn'}.<br>` : ''}
      <div class="big">Mùa lũ ${r.n}: tháng ${fl[0]} – ${fl[fl.length-1]} (${fl.length} tháng)</div>
      Trung bình năm: (${r.q.map(x => nf(x,dd)).join(' + ')}) / 12 ≈ <b>${nf(I.tb,dd)} m³/s</b>. Đỉnh lũ tháng ${I.mx}, cạn nhất tháng ${I.mn}; tháng lũ lớn nhất gấp khoảng <b>${nf(ratio,0)} lần</b> tháng cạn nhất.
      <br><span class="muted">${r.n} (${r.st}), ${r.reg}${r.src === 'SGK' ? '' : '; số liệu trung bình nhiều năm, làm tròn'}.</span>`;
  }
  function cmp(){
    document.getElementById('driv-cmp').innerHTML = `<div class="driv-strip"><span></span>${MONTHS.map(m => `<span>${m}</span>`).join('')}</div>` +
      RV.map(r => { const I = info(r); return `<div class="driv-strip"><span class="nm" title="${r.n}">${r.reg}</span>${r.q.map((x, j) => `<i class="${x > I.tb ? 'on' : ''}" aria-label="Tháng ${j + 1}${x > I.tb ? ' mùa lũ' : ''}"></i>`).join('')}</div>`; }).join('');
    const t = RV.map(r => { const f = info(r).fl; return `<b>${r.reg}</b> (${r.n}): tháng ${f[0]} – ${f[f.length-1]}`; }).join('; ');
    document.getElementById('driv-cmpt').innerHTML = `${t}.<br>Mùa lũ <b>trùng với mùa mưa</b> của từng miền: Bắc Bộ mưa nhiều vào mùa hạ nên lũ sớm (tháng 6 – 10); Trung Bộ mưa dồn vào thu đông nên lũ muộn (vào khoảng tháng 9 – 12), lên nhanh, rút nhanh vì sông ngắn, dốc; sông Mê Công lũ tháng 7 – 11, lên chậm, rút chậm nhờ hồ Tôn-lê Sáp (Cam-pu-chia) điều tiết và lưu vực rất rộng.`;
  }
  /* Mực nước báo động: QĐ 05/2020/QĐ-TTg, sông Hồng tại Hà Nội: BĐ I 9,5 m; BĐ II 10,5 m; BĐ III 11,5 m */
  const LV = [
    {h:0, n:'Bình thường', c:'#2E9E6E', a:'Sông ở mức an toàn. Mùa cạn, nước có thể xuống rất thấp, lộ bãi cát giữa sông. Dù vậy, không tắm sông, không chơi ở bãi sông khi không có người lớn.'},
    {h:9.5, n:'Báo động I', c:'#D9A300', a:'Lũ đang lên. Theo dõi bản tin dự báo lũ trên tivi, đài, điện thoại. Không ra bãi giữa sông, không tắm, câu cá, vớt củi trên sông. Người dân ngoài đê chuẩn bị kê đồ đạc lên cao.'},
    {h:10.5, n:'Báo động II', c:'#E07A20', a:'Lũ lớn, nước ngập bãi ven sông. Khu vực ngoài đê chuẩn bị di dời người già, trẻ em, tài sản; lực lượng chức năng tuần tra đê. Gia đình chuẩn bị túi đồ khẩn cấp (đèn pin, nước uống, thuốc, giấy tờ, sạc dự phòng).'},
    {h:11.5, n:'Báo động III', c:'#D6456F', a:'Lũ rất lớn, nguy cơ cao. Sơ tán dân ngoài đê theo hướng dẫn chính quyền, canh đê suốt ngày đêm. Ngắt điện khi nước vào nhà, không lội qua dòng nước chảy xiết, luôn đi cùng người lớn.'}
  ];
  function level(){
    const h = val('driv-h'); let L = LV[0]; LV.forEach(l => { if(h >= l.h) L = l; });
    const x0 = 30, x1 = 330, y0 = 236, y1 = 14, Hmax = 15, sy = v => y0 - v/Hmax*(y0 - y1);
    const dyke = 13.5; // cao trình đê (minh hoạ)
    const bed = `${x0},${sy(0.4)} ${x0 + 60},${sy(2.5)} ${x0 + 95},${sy(0.6)} ${x0 + 165},${sy(0.2)} ${x0 + 210},${sy(1)} ${x0 + 240},${sy(7)} ${x0 + 255},${sy(dyke)} ${x0 + 268},${sy(dyke)} ${x0 + 290},${sy(9)} ${x1},${sy(9)}`;
    let s = '';
    for(let v = 0; v <= 14; v += 2) s += `<line x1="${x0}" y1="${sy(v)}" x2="${x1}" y2="${sy(v)}" stroke="var(--line)" stroke-width=".8"/><text x="${x0 - 4}" y="${sy(v) + 3.5}" class="svgm" text-anchor="end">${v}</text>`;
    s += `<text x="${x0 - 4}" y="${y1 - 2}" class="svgm" text-anchor="end">m</text>`;
    // nước (không vượt đê)
    const hw = Math.min(h, dyke);
    s += `<clipPath id="driv-clip"><rect x="${x0}" y="${sy(hw)}" width="${x0 + 255 - x0}" height="${y0 - sy(hw)}"/></clipPath>
      <rect x="${x0}" y="${sy(hw)}" width="255" height="${y0 - sy(hw)}" fill="#5B9BD5" opacity=".75" clip-path="url(#driv-clip)"/>
      <polygon points="${x0},${y0} ${bed} ${x1},${y0}" fill="#B08D63" stroke="var(--ink)" stroke-width="1.2"/>
      <text x="${x0 + 261}" y="${sy(dyke) - 5}" class="svgm" text-anchor="middle">đê</text>
      <text x="${x0 + 300}" y="${sy(9) - 5}" class="svgm" text-anchor="middle">phố</text>
      <rect x="${x0 + 283}" y="${sy(9) - 30}" width="12" height="22" fill="var(--muted)" opacity=".6"/><rect x="${x0 + 299}" y="${sy(9) - 40}" width="14" height="32" fill="var(--muted)" opacity=".6"/>
      <text x="${x0 + 60}" y="${sy(2.5) - 6}" class="svgm" text-anchor="middle" style="paint-order:stroke;stroke:var(--paper);stroke-width:3px">bãi ngoài đê</text>`;
    LV.slice(1).forEach(l => s += `<line x1="${x0}" y1="${sy(l.h)}" x2="${x0 + 250}" y2="${sy(l.h)}" stroke="${l.c}" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="${x0 + 4}" y="${sy(l.h) - 3}" class="svgt" style="fill:${l.c};font-weight:700;paint-order:stroke;stroke:var(--paper);stroke-width:3px">BĐ ${l.n.split(' ')[2]} · ${nf(l.h,1)} m</text>`);
    s += `<text x="${x0 + 170}" y="${sy(hw) + 14}" class="svgt" text-anchor="middle" style="font-weight:700;paint-order:stroke;stroke:var(--paper);stroke-width:3px">${nf(h,1)} m</text>
      <text x="${x1}" y="${y0 + 18}" class="svgm" text-anchor="end">Sơ đồ minh hoạ, không theo tỉ lệ ngang</text>`;
    document.getElementById('driv-lvsvg').innerHTML = s;
    document.getElementById('driv-lv').innerHTML = `<div class="big"><span class="driv-lv" style="background:${L.c}">${L.n}</span> ${nf(h,1)} m</div>
      ${h >= 13 ? '<b>Mức lũ lịch sử!</b> Năm 1971, mực nước sông Hồng tại Hà Nội lên tới 14,13 m, vỡ đê ở nhiều nơi. ' : ''}${L.a}
      <br><span class="muted">Mốc báo động sông Hồng tại Hà Nội: I = 9,5 m; II = 10,5 m; III = 11,5 m (Quyết định 05/2020/QĐ-TTg). Tháng 9/2024, sau bão Yagi, nước sông Hồng ở Hà Nội đã vượt báo động I.</span>`;
  }
  document.getElementById('driv-s').addEventListener('input', () => { selM = -1; draw(); });
  bindSliders(p.querySelectorAll('.sec')[1], level);
  draw(); cmp(); level();
},

/* =========================================================
   5. THỔ NHƯỠNG VÀ SINH VẬT: GHÉP ĐẤT + VƯỜN QUỐC GIA
   ========================================================= */
dia_soil(p){
  const GR = {
    fe:{n:'Đất feralit', ico:'🟥', c:'#C8553D', pct:'khoảng 65%', d:'vùng đồi núi thấp; màu đỏ vàng, chua, nhiều sét'},
    ps:{n:'Đất phù sa', ico:'🟫', c:'#8F7A4E', pct:'khoảng 24%', d:'các đồng bằng; tơi xốp, giàu dinh dưỡng'},
    mun:{n:'Đất mùn núi cao', ico:'⬛', c:'#4E5A4A', pct:'khoảng 11%', d:'núi cao; nhiều mùn, chủ yếu là rừng đầu nguồn'}
  };
  const CARDS = [
    {t:'Vùng đồi núi thấp ở trung du và miền núi', g:'fe', w:'Đất feralit hình thành trên đồi núi thấp (dưới khoảng 1 600 – 1 700 m) trong khí hậu nóng ẩm, mưa nhiều.'},
    {t:'Đất đỏ badan ở Tây Nguyên, Đông Nam Bộ', g:'fe', w:'Đất đỏ badan là loại đất feralit hình thành trên đá badan, rất màu mỡ, tơi xốp.'},
    {t:'Cà phê, hồ tiêu ở Đắk Lắk', g:'fe', w:'Cây công nghiệp lâu năm như cà phê, hồ tiêu trồng trên đất feralit badan ở Tây Nguyên.'},
    {t:'Cao su ở Đông Nam Bộ', g:'fe', w:'Cao su thích hợp với đất feralit (đất đỏ badan, đất xám) ở Đông Nam Bộ và Tây Nguyên.'},
    {t:'Chè ở Thái Nguyên, Phú Thọ', g:'fe', w:'Chè ưa đất feralit chua ở vùng đồi trung du, khí hậu mát.'},
    {t:'Màu đỏ vàng do chứa nhiều hợp chất sắt, nhôm', g:'fe', w:'Mưa nhiều rửa trôi chất bazơ, sắt và nhôm tích tụ lại tạo màu đỏ vàng đặc trưng của đất feralit.'},
    {t:'Rau, hoa ôn đới ở Đà Lạt (cao khoảng 1 500 m)', g:'fe', w:'Bẫy! Đà Lạt cao khoảng 1 500 m, vẫn dưới đai đất mùn núi cao nên chủ yếu là đất feralit. Rau, hoa ôn đới trồng được là nhờ khí hậu mát do độ cao.'},
    {t:'Đồng bằng sông Hồng và đồng bằng sông Cửu Long', g:'ps', w:'Hai đồng bằng châu thổ lớn do sông bồi đắp phù sa.'},
    {t:'Trồng lúa nước', g:'ps', w:'Đất phù sa giữ nước, giàu dinh dưỡng, rất thích hợp trồng lúa: nước ta là một trong những nước xuất khẩu gạo hàng đầu thế giới.'},
    {t:'Hoa màu: ngô, khoai, đậu, rau ở bãi ven sông', g:'ps', w:'Đất phù sa ven sông được bồi hằng năm, tơi xốp, trồng hoa màu rất tốt.'},
    {t:'Do sông ngòi bồi tụ, tơi xốp, ít chua', g:'ps', w:'Phù sa sông bồi tụ lại thành đất ở đồng bằng.'},
    {t:'Vườn cây ăn quả miệt vườn Nam Bộ', g:'ps', w:'Cây ăn quả (xoài, sầu riêng, chôm chôm…) ở Đồng bằng sông Cửu Long trồng trên đất phù sa ngọt ven sông Tiền, sông Hậu.'},
    {t:'Núi cao trên khoảng 1 600 – 1 700 m', g:'mun', w:'Lên cao, nhiệt độ thấp, xác thực vật phân huỷ chậm nên tích tụ thành lớp mùn dày: đất mùn núi cao.'},
    {t:'Rừng đầu nguồn cần được bảo vệ', g:'mun', w:'Đất mùn núi cao chủ yếu là đất rừng đầu nguồn, giữ nước cho sông suối, chống lũ quét, sạt lở: cần bảo vệ, không khai phá.'},
    {t:'Dãy Hoàng Liên Sơn, quanh đỉnh Phan-xi-păng', g:'mun', w:'Vùng núi cao nhất nước ta có đai đất mùn núi cao.'},
    {t:'Nhiệt độ thấp, chất hữu cơ phân giải chậm, tầng mùn dày', g:'mun', w:'Đây chính là lí do hình thành đất mùn núi cao.'}
  ];
  const PARKS = [
    {n:'Hoàng Liên', lat:22.33, lon:103.78, pv:'Lào Cai, Lai Châu', sp:'Đỗ quyên, sa mu dầu, nhiều cây thuốc quý; sơn dương', x:'Có đỉnh Phan-xi-păng (3 143 m), nóc nhà Đông Dương. Mùa xuân đỗ quyên nở đỏ rực.', key:'nóc nhà Đông Dương'},
    {n:'Ba Bể', lat:22.42, lon:105.62, pv:'Bắc Kạn (từ 7/2025 thuộc Thái Nguyên)', sp:'Rừng trên núi đá vôi bao quanh hồ, nhiều loài cá, chim, bướm', x:'Hồ Ba Bể là hồ nước ngọt tự nhiên lớn nhất Việt Nam, là khu Ramsar (đất ngập nước có tầm quan trọng quốc tế).', key:'hồ nước ngọt tự nhiên lớn nhất'},
    {n:'Cúc Phương', lat:20.32, lon:105.60, pv:'Ninh Bình, Hoà Bình, Thanh Hoá', sp:'Voọc mông trắng, cây chò xanh nghìn năm tuổi', x:'Vườn quốc gia đầu tiên của Việt Nam (1962), rừng nhiệt đới trên núi đá vôi, có Trung tâm cứu hộ thú linh trưởng.', key:'vườn quốc gia đầu tiên'},
    {n:'Cát Bà', lat:20.80, lon:107.00, pv:'Hải Phòng', sp:'Voọc Cát Bà (voọc đầu vàng), loài đặc hữu cực kì quý hiếm', x:'Đảo lớn nhất vịnh Lan Hạ, khu dự trữ sinh quyển thế giới, có cả rừng trên đảo đá vôi, rừng ngập mặn và rạn san hô.', key:'voọc đầu vàng'},
    {n:'Phong Nha – Kẻ Bàng', lat:17.55, lon:106.20, pv:'Quảng Bình (từ 7/2025 thuộc Quảng Trị)', sp:'Voọc Hà Tĩnh, nhiều loài bò sát, dơi trong hang', x:'Di sản thiên nhiên thế giới, vùng núi đá vôi với hàng trăm hang động, trong đó có hang Sơn Đoòng, hang động tự nhiên lớn nhất thế giới.', key:'hang Sơn Đoòng'},
    {n:'Bạch Mã', lat:16.20, lon:107.85, pv:'Huế, Đà Nẵng', sp:'Nhiều loài chim quý như trĩ sao, gà lôi', x:'Một trong những nơi mưa nhiều nhất nước ta; dãy Bạch Mã là ranh giới khí hậu giữa miền Bắc và miền Nam.', key:'ranh giới khí hậu'},
    {n:'Yok Đôn', lat:12.88, lon:107.70, pv:'Đắk Lắk', sp:'Voi châu Á, bò rừng; rừng khộp rụng lá mùa khô', x:'Vườn quốc gia rộng nhất nước ta, rừng khộp đặc trưng của Tây Nguyên.', key:'voi'},
    {n:'Cát Tiên', lat:11.45, lon:107.38, pv:'Đồng Nai, Lâm Đồng, Bình Phước', sp:'Bò tót, cá sấu Xiêm ở Bàu Sấu', x:'Khu dự trữ sinh quyển thế giới, rừng nhiệt đới đất thấp; Bàu Sấu là khu Ramsar. Tê giác một sừng ở đây đã tuyệt chủng năm 2010, lời nhắc phải bảo vệ động vật hoang dã.', key:'cá sấu'},
    {n:'Tràm Chim', lat:10.70, lon:105.53, pv:'Đồng Tháp', sp:'Sếu đầu đỏ, rừng tràm, đồng cỏ năng', x:'Vùng đất ngập nước Đồng Tháp Mười, khu Ramsar; nơi sếu đầu đỏ (loài chim quý) từng về trú đông.', key:'sếu đầu đỏ'},
    {n:'U Minh Thượng', lat:9.60, lon:105.08, pv:'Kiên Giang (từ 7/2025 thuộc An Giang)', sp:'Rừng tràm trên đất than bùn; rái cá, nhiều loài chim nước', x:'Rừng tràm ngập nước trên đất than bùn, khu Ramsar. Mùa khô rất dễ cháy rừng, cần canh lửa cẩn thận.', key:'rừng tràm trên đất than bùn'},
    {n:'Côn Đảo', lat:8.70, lon:106.60, pv:'Bà Rịa – Vũng Tàu (từ 7/2025 thuộc TP Hồ Chí Minh)', sp:'Rùa biển, bò biển (dugong), rạn san hô, cỏ biển', x:'Nơi rùa biển lên bãi cát đẻ trứng nhiều nhất Việt Nam; vùng biển là khu Ramsar.', key:'rùa biển'}
  ];
  const P = mapProj({lon0:102, lon1:111.5, lat0:8, lat1:23.5, k:22, pl:40, pr:8, pt:12, pb:20});
  p.innerHTML = `<style>
   .dsoil-pool{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0;min-height:40px}
   .dsoil-c{border:1.5px solid var(--line);background:var(--paper);border-radius:12px;padding:6px 10px;font-size:14px;text-align:left;max-width:100%}
   .dsoil-c[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-soft);box-shadow:0 0 0 2px var(--accent-soft);font-weight:700}
   .dsoil-c.shake{animation:dsoil-sh .35s}
   @keyframes dsoil-sh{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
   @media (prefers-reduced-motion:reduce){.dsoil-c.shake{animation:none}}
   .dsoil-bins{display:grid;grid-template-columns:1fr;gap:8px}
   @media(min-width:560px){.dsoil-bins{grid-template-columns:1fr 1fr 1fr}}
   .dsoil-bin{border:2px dashed var(--line);border-radius:16px;padding:8px 10px;background:var(--card);text-align:left;width:100%}
   .dsoil-bin.ready{border-color:var(--accent);border-style:solid}
   .dsoil-bin h4{margin:0;font-size:15.5px;display:flex;align-items:center;gap:6px}
   .dsoil-bin h4 i{width:14px;height:14px;border-radius:4px;display:inline-block}
   .dsoil-bin .dd{font-size:12.5px;color:var(--muted)}
   .dsoil-bin ul{margin:4px 0 0;padding-left:18px;font-size:13px}
   .dsoil-fb{margin-top:8px;padding:10px 12px;border-radius:12px;font-size:15px}
   .dsoil-fb.ok{background:var(--ok-soft)} .dsoil-fb.no{background:var(--bad-soft)}
   .dpark-pt{cursor:pointer}
   .dpark-wrap svg{max-width:420px;margin:0 auto}
   .dpark-card{border:1.5px solid var(--line);border-radius:16px;padding:10px 12px;background:var(--paper);margin-top:10px;font-size:15px}
   .dpark-card h4{margin:0 0 4px;font-size:17px}
   .dpark-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
   .dpark-chips button{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:4px 10px;font-size:13.5px}
   .dpark-chips button[aria-pressed="true"]{border-color:#2E9E6E;background:var(--ok-soft);font-weight:700}
  </style>
  <div class="sec lab"><h3>Ghép đất với vùng và cây trồng</h3>
   <p class="muted">Bấm một thẻ, rồi bấm vào nhóm đất phù hợp. Nghĩ trước: thẻ nói về <b>nơi phân bố</b>, <b>cây trồng</b> hay <b>đặc điểm</b>? Có 1 thẻ bẫy đấy!</p>
   <div class="dq-top" style="display:flex;justify-content:space-between;font-size:14.5px"><span id="dsoil-cnt"></span><b id="dsoil-sc"></b></div>
   <div class="dsoil-pool" id="dsoil-pool"></div>
   <div class="dsoil-bins" id="dsoil-bins"></div>
   <div id="dsoil-fb"></div>
   <div class="row" style="margin-top:10px"><button class="btn ghost" id="dsoil-again">Chơi lại (thẻ mới)</button></div>
  </div>
  <div class="sec lab"><h3>Vườn quốc gia Việt Nam</h3>
   <p class="muted">Các vườn quốc gia được chấm theo toạ độ thật. Bấm vào chấm xanh hoặc tên để xem. <b>Nhiệm vụ:</b> bấm “Tìm giúp mình” rồi chọn đúng vườn quốc gia.</p>
   <div class="dpark-wrap"><svg viewBox="0 0 ${P.w} ${P.h}" id="dpark-map" role="img" aria-label="Sơ đồ vị trí các vườn quốc gia"></svg></div>
   <div class="muted" style="font-size:13px;margin-top:4px">Sơ đồ theo toạ độ, không vẽ biên giới.</div><div class="dpark-chips" id="dpark-chips">${PARKS.map((q, j) => `<button data-j="${j}" aria-pressed="false">${q.n}</button>`).join('')}</div>
   <div class="row" style="margin-top:10px"><button class="btn" id="dpark-mis">🔎 Tìm giúp mình</button><b id="dpark-sc"></b></div>
   <div id="dpark-task"></div>
   <div class="dpark-card" id="dpark-card"></div>
  </div>`;
  /* --- ghép đất --- */
  let deck, picked, score, tries, wrongOnce;
  function start(){
    const by = g => shuffle(CARDS.filter(c => c.g === g));
    const trap = CARDS.find(c => /Đà Lạt/.test(c.t));
    deck = shuffle(by('fe').filter(c => c !== trap).slice(0, 3).concat([trap], by('ps').slice(0, 3), by('mun').slice(0, 3)));
    deck.forEach(c => { c.done = false; }); picked = -1; score = 0; tries = 0; wrongOnce = new Set();
    document.getElementById('dsoil-fb').innerHTML = '';
    render();
  }
  function render(){
    const left = deck.filter(c => !c.done).length;
    document.getElementById('dsoil-cnt').textContent = left ? `Còn ${left} thẻ` : 'Hoàn thành!';
    document.getElementById('dsoil-sc').textContent = `⭐ ${score}/${deck.length}`;
    document.getElementById('dsoil-pool').innerHTML = deck.map((c, j) => c.done ? '' : `<button class="dsoil-c" data-j="${j}" aria-pressed="${j === picked}">${c.t}</button>`).join('') || '<span class="muted">Đã ghép hết các thẻ. 🎉</span>';
    document.getElementById('dsoil-bins').innerHTML = Object.keys(GR).map(k => { const g = GR[k];
      return `<button class="dsoil-bin${picked >= 0 ? ' ready' : ''}" data-g="${k}"><h4><i style="background:${g.c}"></i>${g.n}</h4><div class="dd">${g.pct} diện tích; ${g.d}</div>
        <ul>${deck.filter(c => c.done && c.g === k).map(c => `<li>${c.t}</li>`).join('')}</ul></button>`; }).join('');
    document.querySelectorAll('.dsoil-c').forEach(b => b.onclick = () => { picked = picked === +b.dataset.j ? -1 : +b.dataset.j; render(); });
    document.querySelectorAll('.dsoil-bin').forEach(b => b.onclick = () => drop(b.dataset.g));
  }
  function drop(g){
    const fb = document.getElementById('dsoil-fb');
    if(picked < 0){ fb.className = 'dsoil-fb no'; fb.innerHTML = 'Hãy bấm chọn một thẻ trước, rồi mới bấm vào nhóm đất nhé.'; return; }
    const c = deck[picked];
    if(c.g === g){
      c.done = true; if(!wrongOnce.has(c)) score++;
      fb.className = 'dsoil-fb ok'; fb.innerHTML = `<b style="color:var(--ok)">Đúng: ${GR[g].n}!</b> ${c.w}`;
      picked = -1; render();
      if(deck.every(x => x.done)) fb.innerHTML += `<br><b>Kết quả: đúng ngay lần đầu ${score}/${deck.length} thẻ.</b> Nhớ: feralit chiếm nhiều nhất (khoảng 65%), phù sa khoảng 24%, mùn núi cao khoảng 11% diện tích đất tự nhiên.`;
    } else {
      wrongOnce.add(c);
      fb.className = 'dsoil-fb no'; fb.innerHTML = `<b style="color:var(--bad)">Chưa đúng,</b> thẻ này không thuộc ${GR[g].n}. Gợi ý: ${GR[c.g].d.split(';')[0]}? Thử nhóm khác nhé.`;
      const el = document.querySelector(`.dsoil-c[data-j="${picked}"]`); if(el){ el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
    }
  }
  document.getElementById('dsoil-again').onclick = start;
  start();

  /* --- vườn quốc gia --- */
  let sel = -1, task = -1, pts = 0, asked = 0;
  function drawMap(){
    let s = gridSvg(P, 2);
    PARKS.forEach((q, j) => { const x = P.x(q.lon), y = P.y(q.lat), on = j === sel;
      const left = ['Cát Bà','Bạch Mã','Yok Đôn','Cát Tiên','Côn Đảo','Phong Nha – Kẻ Bàng','Hoàng Liên','Ba Bể'].indexOf(q.n) < 0;
      let ta = left ? 'end' : 'start', dx = left ? -8 : 8;
      let dy = 3.5; if(q.n === 'Ba Bể') dy = -4; if(q.n === 'Hoàng Liên'){ ta = 'middle'; dx = 0; dy = 16; }
      s += `<g class="dpark-pt" data-j="${j}" role="button" tabindex="0" aria-label="${q.n}"><circle cx="${x}" cy="${y}" r="14" fill="transparent"/>
        ${on ? `<circle cx="${x}" cy="${y}" r="10" fill="none" stroke="var(--ink)" stroke-width="2"/>` : ''}
        <circle cx="${x}" cy="${y}" r="5.5" fill="#2E9E6E" stroke="var(--paper)" stroke-width="1.5"/>
        <text x="${x + dx}" y="${y + dy}" class="${on ? 'svgt' : 'svgm'}" text-anchor="${ta}" style="${on ? 'font-weight:700' : ''}">${task >= 0 ? '?' : q.n}</text></g>`; });
    const svg = document.getElementById('dpark-map'); svg.innerHTML = s;
    svg.querySelectorAll('.dpark-pt').forEach(g => { g.onclick = () => choose(+g.dataset.j); g.onkeydown = ev => { if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); choose(+g.dataset.j); } }; });
    document.querySelectorAll('#dpark-chips button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.j === sel));
  }
  function show(j){ const q = PARKS[j];
    document.getElementById('dpark-card').innerHTML = `<h4>🌳 Vườn quốc gia ${q.n}</h4><div><b>Tỉnh:</b> ${q.pv} <span class="muted">(${dms(q.lat,'B','N')}, ${dms(q.lon,'Đ','T')})</span></div>
      <div><b>Điểm đặc biệt:</b> ${q.x}</div><div><b>Loài tiêu biểu:</b> ${q.sp}</div>`; }
  function choose(j){
    sel = j;
    if(task >= 0){ const t = document.getElementById('dpark-task'), ok = j === task; asked++; if(ok) pts++;
      t.className = 'dsoil-fb ' + (ok ? 'ok' : 'no');
      t.innerHTML = ok ? `<b style="color:var(--ok)">Tìm đúng rồi!</b> Đó là ${PARKS[task].n}.` : `<b style="color:var(--bad)">Chưa đúng,</b> em chọn ${PARKS[j].n}. Nơi có “${PARKS[task].key}” là <b>${PARKS[task].n}</b> (chấm có vòng tròn).`;
      sel = task; task = -1; document.getElementById('dpark-sc').textContent = `⭐ ${pts}/${asked}`; drawMap(); show(sel); return; }
    drawMap(); show(j);
  }
  document.querySelectorAll('#dpark-chips button').forEach(b => b.onclick = () => choose(+b.dataset.j));
  document.getElementById('dpark-mis').onclick = () => {
    let k; do { k = Math.floor(Math.random()*PARKS.length); } while(k === sel && PARKS.length > 1);
    task = k; sel = -1; drawMap();
    const t = document.getElementById('dpark-task'); t.className = 'dsoil-fb'; t.style.background = 'var(--accent-soft)';
    t.innerHTML = `🔎 Bấm vào chấm trên sơ đồ (tên đã được ẩn) hoặc nút tên: vườn quốc gia nào có <b>${PARKS[k].key}</b>?`;
    document.getElementById('dpark-card').innerHTML = '<span class="muted">Gợi ý: nhớ lại vị trí miền Bắc, miền Trung hay miền Nam.</span>';
  };
  drawMap(); choose(2);
},

/* =========================================================
   6. BIỂN ĐẢO: CÁC VÙNG BIỂN THEO LUẬT BIỂN 1982
   ========================================================= */
dia_sea(p){
  /* thang ngang chia khúc: không theo tỉ lệ để thấy rõ vùng hẹp */
  const SEG = [[-8,0,34,70],[0,12,70,140],[12,24,140,192],[24,200,192,300],[200,350,300,350]];
  const X = nm => { for(const s of SEG) if(nm <= s[1]) return s[2] + (nm - s[0])/(s[1] - s[0])*(s[3] - s[2]); return 350; };
  const Z = [
    {id:'nt', a:-8, b:0, n:'Nội thuỷ', c:'#7FB6E8', r:'Vùng nước phía trong đường cơ sở, giáp với bờ biển. Việt Nam có <b>chủ quyền hoàn toàn, tuyệt đối và đầy đủ</b> như trên lãnh thổ đất liền.'},
    {id:'lh', a:0, b:12, n:'Lãnh hải', c:'#5C9BD6', r:'Rộng <b>12 hải lí</b> tính từ đường cơ sở. Việt Nam có <b>chủ quyền đầy đủ và toàn vẹn</b> đối với lãnh hải, vùng trời, đáy biển và lòng đất dưới đáy biển. Tàu thuyền nước ngoài chỉ được <i>đi qua không gây hại</i>. Ranh giới ngoài của lãnh hải là <b>biên giới quốc gia trên biển</b>.'},
    {id:'tg', a:12, b:24, n:'Vùng tiếp giáp lãnh hải', c:'#4A86C5', r:'Rộng 12 hải lí ở phía ngoài lãnh hải (tức <b>24 hải lí</b> tính từ đường cơ sở). Việt Nam có quyền <b>kiểm soát</b> để ngăn ngừa và xử lí vi phạm về hải quan, thuế, y tế, xuất nhập cảnh.'},
    {id:'dq', a:24, b:200, n:'Vùng đặc quyền kinh tế', c:'#3A72B0', r:'Hợp với lãnh hải thành vùng biển rộng <b>200 hải lí</b> tính từ đường cơ sở. Việt Nam có <b>quyền chủ quyền</b> thăm dò, khai thác, bảo vệ, quản lí tài nguyên (cá, dầu khí…) và quyền tài phán về đảo nhân tạo, nghiên cứu khoa học, bảo vệ môi trường biển. Tàu, máy bay nước khác được tự do đi lại, đặt cáp và ống dẫn ngầm.'},
    {id:'qt', a:200, b:350, n:'Vùng biển quốc tế', c:'#2D5C93', r:'Ngoài 200 hải lí là biển quốc tế, tàu mọi nước được tự do đi lại. Riêng <b>đáy biển</b> ở đây vẫn có thể là thềm lục địa Việt Nam nếu rìa lục địa kéo dài tới (tối đa 350 hải lí).'}
  ];
  p.innerHTML = `<style>
   .dsea-z{display:inline-block;padding:2px 10px;border-radius:999px;font-weight:800;color:#fff}
   .dsea-cv{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}
   .dsea-cv input{width:110px;padding:7px 10px;border-radius:8px;border:1.5px solid var(--line);background:var(--paper)}
   ${QSTYLE}
  </style>
  <div class="sec lab"><h3>Các vùng biển Việt Nam (Luật Biển 1982)</h3>
   <p class="muted">Mặt cắt từ bờ ra khơi. Kéo con tàu ra xa đường cơ sở. <b>Đoán trước:</b> tàu cách đường cơ sở 20 hải lí thì đang ở vùng nào?</p>
   <svg viewBox="0 0 360 250" id="dsea-svg" role="img" aria-label="Mặt cắt các vùng biển"></svg>
   <div class="ctrl"><div>${slider('dsea-x','Tàu cách đường cơ sở',-6,350,1,20,'hải lí')}</div>
    <div class="row" style="align-self:end"><button class="btn ghost" data-go="-4">Nội thuỷ</button><button class="btn ghost" data-go="12">12</button><button class="btn ghost" data-go="24">24</button><button class="btn ghost" data-go="200">200</button></div></div>
   <div class="readout" id="dsea-out"></div>
   <h3 style="margin-top:16px">Đổi hải lí ↔ km</h3>
   <p class="muted">1 hải lí = 1 852 m = 1,852 km (bằng chiều dài 1 phút cung kinh tuyến).</p>
   <div class="dsea-cv"><label for="dsea-nm">Hải lí</label><input id="dsea-nm" type="text" value="12" inputmode="decimal" autocomplete="off"><span>⇄</span><label for="dsea-km">km</label><input id="dsea-km" type="text" inputmode="decimal" autocomplete="off"></div>
   <div class="readout" id="dsea-cvo"></div>
  </div>
  <div class="sec lab"><h3>Hỏi nhanh: biển đảo quê hương</h3><div id="dsea-quiz"></div></div>`;
  const svg = document.getElementById('dsea-svg');
  function draw(){
    const nm = val('dsea-x'), z = Z.find(q => nm <= q.b) || Z[4];
    const ys = 92; // mặt biển
    let s = '';
    // dải vùng phía trên mặt biển (nhãn)
    Z.forEach((q, j) => { const a = X(q.a), b = X(q.b), on = q === z;
      s += `<rect x="${a}" y="${ys}" width="${b - a}" height="${200 - ys}" fill="${q.c}" opacity="${on ? .7 : .35}"/>${on ? `<rect x="${a}" y="${ys - 3}" width="${b - a}" height="4" fill="#F2C14E"/>` : ''}`; });
    // lục địa + đáy biển (thềm lục địa đến khoảng 260, sườn lục địa)
    const bed = `M0 ${ys - 18} L22 ${ys - 14} L34 ${ys} L60 ${ys + 14} L140 ${ys + 26} L230 ${ys + 34} L300 ${ys + 40} L318 ${ys + 70} L335 ${ys + 98} L360 ${ys + 104} L360 250 L0 250 z`;
    s += `<path d="${bed}" fill="#B08D63" stroke="var(--ink)" stroke-width="1.2"/>
      <path d="M70 ${ys + 18} L140 ${ys + 26} L230 ${ys + 34} L300 ${ys + 40} L318 ${ys + 70} L330 ${ys + 90}" fill="none" stroke="#E8B04A" stroke-width="4" stroke-linecap="round"/>
      <text x="200" y="${ys + 58}" class="svgt" text-anchor="middle" style="font-weight:700;fill:#3B2A18">Thềm lục địa</text>
      <text x="200" y="${ys + 72}" class="svgm" text-anchor="middle" style="fill:#3B2A18">(đáy biển và lòng đất dưới đáy, ít nhất 200 hải lí)</text>
      <text x="5" y="${ys + 40}" class="svgt" style="font-weight:700;fill:#3B2A18">Đất</text><text x="5" y="${ys + 52}" class="svgt" style="font-weight:700;fill:#3B2A18">liền</text>`;
    // đường cơ sở
    s += `<line x1="${X(0)}" y1="22" x2="${X(0)}" y2="${ys + 18}" stroke="#E5484D" stroke-width="2.2"/>
      <text x="${X(0) - 2}" y="18" class="svgt" text-anchor="middle" style="font-weight:700;fill:#E5484D">Đường cơ sở</text>`;
    // vạch mốc
    [[12,'12'],[24,'24'],[200,'200'],[350,'350']].forEach(([v, t]) => s += `<line x1="${X(v)}" y1="40" x2="${X(v)}" y2="${ys}" stroke="var(--muted)" stroke-dasharray="3 3"/><text x="${Math.min(X(v), 352)}" y="36" class="svgm" text-anchor="${v === 350 ? 'end' : 'middle'}">${t}</text>`);
    s += `<text x="${X(12)}" y="${ys + 12 - 70}" class="svgm" text-anchor="middle"></text>`;
    // nhãn vùng (trong nước)
    const lab = [['Nội', 'thuỷ', -4], ['Lãnh', 'hải', 6], ['Tiếp', 'giáp', 18], ['Đặc quyền', 'kinh tế', 112], ['Biển', 'quốc tế', 275]];
    lab.forEach(([a, b, v]) => s += `<text x="${X(v)}" y="${ys + 6 + 10}" class="svgt" text-anchor="middle" style="font-weight:700;font-size:10px;paint-order:stroke;stroke:var(--paper);stroke-width:2.5px">${a}</text><text x="${X(v)}" y="${ys + 6 + 22}" class="svgt" text-anchor="middle" style="font-weight:700;font-size:10px;paint-order:stroke;stroke:var(--paper);stroke-width:2.5px">${b}</text>`);
    // con tàu
    const xs = X(nm);
    s += `<g transform="translate(${xs},${ys})"><path d="M-13 -3 L13 -3 L9 4 L-9 4 z" fill="#F2C14E" stroke="var(--ink)" stroke-width="1"/><rect x="-5" y="-10" width="9" height="7" fill="var(--card)" stroke="var(--ink)" stroke-width="1"/><line x1="0" y1="-10" x2="0" y2="-20" stroke="var(--ink)"/><path d="M0 -20 L9 -17 L0 -14 z" fill="#E5484D"/></g>
      <text x="${clamp(xs, 52, 320)}" y="${ys - 26}" class="svgt" text-anchor="middle" style="font-weight:700">${nm < 0 ? 'trong đường cơ sở' : nf(nm,0) + ' hải lí'}</text>
      <text x="356" y="246" class="svgm" text-anchor="end" style="fill:#3B2A18">Sơ đồ, không theo tỉ lệ (hải lí)</text>`;
    svg.innerHTML = s;
    const km = Math.max(0, nm)*1.852;
    document.getElementById('dsea-out').innerHTML = `<div class="big"><span class="dsea-z" style="background:${z.c}">${z.n}</span></div>
      ${nm >= 0 ? `Tàu cách đường cơ sở ${nf(nm,0)} hải lí = ${nf(nm,0)} × 1,852 ≈ <b>${nf(km,1)} km</b>.` : 'Tàu ở phía trong đường cơ sở, gần bờ (vũng, vịnh, cửa sông).'}<br>${z.r}
      ${nm > 12 ? '<br><span class="muted">Đáy biển bên dưới con tàu: thềm lục địa Việt Nam, nơi Việt Nam có quyền chủ quyền thăm dò, khai thác dầu khí và khoáng sản.</span>' : ''}`;
  }
  p.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { const el = document.getElementById('dsea-x'); el.value = b.dataset.go; document.getElementById('dsea-x-v').textContent = fmt(el.value) + ' hải lí'; draw(); });
  bindSliders(p.querySelector('.ctrl'), draw);
  const nmI = document.getElementById('dsea-nm'), kmI = document.getElementById('dsea-km');
  function cv(from){
    const o = document.getElementById('dsea-cvo');
    if(from === 'nm'){ const v = parseFloat(String(nmI.value).replace(',', '.')); if(!isFinite(v)){ o.textContent = 'Nhập một số nhé.'; return; } kmI.value = String(+(v*1.852).toFixed(3)).replace('.', ','); o.innerHTML = `${nf(v,2)} hải lí × 1,852 = <b>${nf(v*1.852,3)} km</b>${v === 200 ? ' (bề rộng vùng đặc quyền kinh tế tính từ đường cơ sở)' : v === 12 ? ' (bề rộng lãnh hải)' : ''}.`; }
    else { const v = parseFloat(String(kmI.value).replace(',', '.')); if(!isFinite(v)){ o.textContent = 'Nhập một số nhé.'; return; } nmI.value = String(+(v/1.852).toFixed(3)).replace('.', ','); o.innerHTML = `${nf(v,2)} km : 1,852 ≈ <b>${nf(v/1.852,2)} hải lí</b>.`; }
  }
  nmI.addEventListener('input', () => cv('nm')); kmI.addEventListener('input', () => cv('km'));
  draw(); cv('nm');

  const Q = [
    {q:'Quần đảo Hoàng Sa thuộc đơn vị hành chính nào của nước ta?', o:['Thành phố Đà Nẵng','Tỉnh Khánh Hoà','Tỉnh Quảng Ngãi','Thành phố Hải Phòng'], why:'Quần đảo Hoàng Sa thuộc thành phố Đà Nẵng, là bộ phận lãnh thổ không thể tách rời của Việt Nam.'},
    {q:'Quần đảo Trường Sa thuộc đơn vị hành chính nào?', o:['Tỉnh Khánh Hoà','Thành phố Đà Nẵng','Tỉnh Bình Thuận','Tỉnh Cà Mau'], why:'Quần đảo Trường Sa thuộc tỉnh Khánh Hoà.'},
    {q:'Đảo lớn nhất nước ta là đảo nào?', o:['Phú Quốc','Cái Bầu','Cát Bà','Côn Sơn'], why:'Phú Quốc trong vịnh Thái Lan là đảo lớn nhất, nổi tiếng với nước mắm, hồ tiêu, ngọc trai và du lịch.'},
    {q:'Đảo Cái Bầu (Vân Đồn), một trong những đảo lớn của nước ta, thuộc tỉnh nào?', o:['Quảng Ninh','Hải Phòng','Khánh Hoà','Kiên Giang'], why:'Cái Bầu thuộc huyện đảo Vân Đồn, tỉnh Quảng Ninh, vùng vịnh Bái Tử Long.'},
    {q:'Đường bờ biển nước ta dài khoảng bao nhiêu?', o:['3 260 km','1 650 km','2 360 km','4 600 km'], why:'Bờ biển dài khoảng 3 260 km, chạy từ Móng Cái (Quảng Ninh) đến Hà Tiên (Kiên Giang). 1 650 km là chiều dài Bắc – Nam phần đất liền.'},
    {q:'Vùng biển Việt Nam rộng khoảng bao nhiêu?', o:['Khoảng 1 triệu km²','Khoảng 331 nghìn km²','Khoảng 3,44 triệu km²','Khoảng 100 nghìn km²'], why:'Vùng biển nước ta khoảng 1 triệu km², gấp khoảng 3 lần diện tích đất liền (khoảng 331 nghìn km²). 3,44 triệu km² là diện tích cả Biển Đông.'},
    {q:'Tài nguyên khoáng sản có giá trị nhất ở thềm lục địa phía Nam nước ta là gì?', o:['Dầu mỏ và khí tự nhiên','Than đá','Quặng sắt','Bô-xít'], why:'Các mỏ dầu khí như Bạch Hổ, Rồng, Đại Hùng nằm ở thềm lục địa phía Nam (bể Cửu Long, Nam Côn Sơn).'},
    {q:'Ven biển nào thuận lợi nhất để làm muối?', o:['Ven biển Nam Trung Bộ','Ven biển Bắc Bộ','Ven biển Đồng bằng sông Cửu Long','Ven vịnh Hạ Long'], why:'Nam Trung Bộ (Sa Huỳnh, Cà Ná) nắng nhiều, ít mưa, ít sông lớn đổ ra biển nên nước biển mặn, phơi muối rất tốt.'},
    {q:'Ranh giới phía ngoài của lãnh hải có ý nghĩa gì?', o:['Là biên giới quốc gia trên biển','Là đường cơ sở','Là ranh giới vùng đặc quyền kinh tế','Là đường bờ biển lúc triều thấp'], why:'Lãnh hải rộng 12 hải lí; ranh giới ngoài của nó chính là biên giới quốc gia trên biển.'},
    {q:'1 hải lí bằng bao nhiêu mét?', o:['1 852 m','1 000 m','1 609 m','1 500 m'], why:'1 hải lí = 1 852 m. (1 609 m là 1 dặm Anh trên đất liền.)'},
    {q:'Vùng đặc quyền kinh tế rộng bao nhiêu hải lí tính từ đường cơ sở?', o:['200 hải lí','12 hải lí','24 hải lí','350 hải lí'], why:'Vùng đặc quyền kinh tế hợp với lãnh hải thành vùng biển rộng 200 hải lí tính từ đường cơ sở.'},
    {q:'Ở vùng đặc quyền kinh tế của Việt Nam, tàu nước ngoài được làm gì?', o:['Tự do đi lại, đặt cáp và ống dẫn ngầm','Tự do đánh bắt cá','Tự do khai thác dầu khí','Xây đảo nhân tạo tuỳ ý'], why:'Tài nguyên ở vùng đặc quyền kinh tế thuộc quyền chủ quyền của Việt Nam; nước khác chỉ được tự do hàng hải, hàng không, đặt cáp, ống dẫn ngầm.'},
    {q:'Cát trắng ven biển ở Vân Hải (Quảng Ninh), Cam Ranh (Khánh Hoà) dùng để làm gì?', o:['Nguyên liệu làm thuỷ tinh, pha lê','Làm phân bón','Lọc dầu','Nung vôi'], why:'Cát trắng giàu thạch anh, là nguyên liệu quý cho công nghiệp thuỷ tinh, pha lê.'}
  ];
  quickQuiz(document.getElementById('dsea-quiz'), 'dseq', Q, 8, 'Câu');
}
});
})();
