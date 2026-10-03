/* Thí nghiệm ảo môn Sinh học 8 */
window.LAB_EXT = window.LAB_EXT || {};
(function(){
'use strict';
const RM = () => { try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } };
const clamp = (x,a,b) => Math.max(a, Math.min(b, x));
const $ = id => document.getElementById(id);
function setSlider(id, v){ const el=$(id); if(!el) return; el.value=v; const l=$(id+'-v'); if(l) l.textContent=fmt(el.value)+' '+el.dataset.unit; }

/* CSS dùng chung, mọi lớp có tiền tố sl- */
const CSS = `<style>
.sl-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
.sl-chip{border:1.5px solid var(--line);background:var(--card);color:var(--ink);border-radius:999px;padding:5px 11px;font-size:14px;font-weight:600;line-height:1.3}
.sl-chip small{font-weight:500;color:var(--muted)}
.sl-chip[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:var(--paper)}
.sl-chip[aria-pressed="true"] small{color:inherit;opacity:.85}
.sl-ok{color:var(--ok);font-weight:700}.sl-bad{color:var(--bad);font-weight:700}.sl-warn{color:#A35F00;font-weight:700}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .sl-warn{color:#FFC46B}}
:root[data-theme="dark"] .sl-warn{color:#FFC46B}
.sl-meter{position:relative;height:14px;background:var(--line);border-radius:999px;overflow:hidden;margin:6px 0 2px}
.sl-meter>i{display:block;height:100%;border-radius:999px;background:var(--accent);transition:width .3s}
.sl-meter>b{position:absolute;top:0;bottom:0;border-left:2px solid var(--ink);border-right:2px solid var(--ink);background:rgba(127,127,127,.12)}
@media (prefers-reduced-motion:reduce){.sl-meter>i{transition:none}}
.sl-sub{font-size:13px;color:var(--muted)}
.sl-h4{font-size:16px;margin:14px 0 4px}
.sl-list{margin:.3em 0;padding-left:20px}.sl-list li{margin:.2em 0}
.sl-try{border:1.5px dashed var(--accent);border-radius:14px;padding:8px 12px;margin:10px 0;font-size:14.5px}
.sl-try b:first-child{color:var(--accent)}
.sl-foods{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:8px;margin:8px 0}
.sl-food{border:1.5px solid var(--line);border-radius:14px;padding:8px 10px;background:var(--paper);display:flex;flex-direction:column;gap:6px;justify-content:space-between}
.sl-food.on{border-color:var(--accent);background:var(--accent-soft)}
.sl-food .nm{font-size:14.5px;line-height:1.3;font-weight:700}
.sl-food .nm small{display:block;font-weight:500;font-size:12.5px;color:var(--muted)}
.sl-pm{display:flex;align-items:center;justify-content:space-between;gap:6px}
.sl-pm button{width:36px;height:32px;border-radius:10px;border:1.5px solid var(--line);background:var(--card);color:var(--ink);font-size:18px;font-weight:700;line-height:1;padding:0}
.sl-pm button:disabled{opacity:.4;cursor:default}
.sl-pm span{font-weight:800;font-size:16px;min-width:20px;text-align:center}
.sl-grp{font-size:13px;font-weight:800;color:var(--accent);margin:10px 0 0;text-transform:uppercase;letter-spacing:.03em}
.sl-stack{display:flex;height:22px;border-radius:999px;overflow:hidden;background:var(--line);margin:4px 0}
.sl-stack>i{display:block;height:100%;font-style:normal;font-size:11.5px;font-weight:700;color:#2A1630;text-align:center;line-height:22px;white-space:nowrap;overflow:hidden}
.sl-leg{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:13px;color:var(--muted);margin:2px 0 6px}
.sl-leg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:5px;vertical-align:-1px}
.sl-grid{display:grid;grid-template-columns:auto repeat(4,1fr);gap:4px;font-size:14px;max-width:340px;margin:8px 0}
.sl-grid>div{border-radius:8px;padding:4px 0;text-align:center;background:var(--paper);border:1px solid var(--line)}
.sl-grid>.h{background:none;border:0;font-weight:700;color:var(--muted);padding:4px 6px}
.sl-grid>.y{background:var(--ok-soft);border-color:var(--ok);color:var(--ok);font-weight:800}
.sl-grid>.n{background:var(--bad-soft);border-color:var(--bad);color:var(--bad);font-weight:800}
.sl-grid>.cur{outline:2.5px solid var(--accent);outline-offset:1px}
.sl-gas{display:grid;grid-template-columns:72px 1fr;gap:4px 8px;align-items:center;font-size:13.5px;margin:6px 0}
.sl-gas .bars{display:flex;flex-direction:column;gap:3px}
.sl-gas .bar2{display:flex;align-items:center;gap:6px}
.sl-gas .bar2 i{display:block;height:11px;border-radius:999px;min-width:3px}
.sl-gas .bar2 span{font-size:12.5px;color:var(--muted);white-space:nowrap}
.sl-swatch{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;margin:8px 0}
.sl-swatch button{height:46px;border-radius:12px;border:2px solid var(--line);font-weight:800;font-size:14px;color:#3B2A10;padding:0}
.sl-swatch button[aria-pressed="true"]{border-color:var(--ink);box-shadow:0 0 0 3px var(--accent-soft);transform:translateY(-2px)}
.sl-react{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;min-height:170px;border-radius:20px;border:2px solid var(--line);font-size:20px;font-weight:800;text-align:center;padding:16px;touch-action:manipulation;user-select:none;-webkit-user-select:none;background:var(--paper);color:var(--ink)}
.sl-react small{font-size:14px;font-weight:600;opacity:.85;margin-top:4px}
.sl-react.wait{background:#F6C7D8;border-color:#D6456F;color:#5A1430}
.sl-react.go{background:#5ED39A;border-color:#1E8F5B;color:#0D3A23}
.sl-react.early{background:#FFE08A;border-color:#C99A00;color:#4A3500}
.sl-tries{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}
.sl-tries span{border:1.5px solid var(--line);border-radius:10px;padding:3px 9px;font-size:14px;font-weight:700;background:var(--paper)}
.sl-tries span.e{color:var(--muted);font-weight:500}
.sl-btnrow{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
.sl-btnrow .btn{padding:7px 12px;font-size:14.5px}
.sl-cmp{display:grid;grid-template-columns:1fr;gap:6px;margin:8px 0}
.sl-cmp .it{border:1px solid var(--line);border-radius:12px;padding:8px 10px;background:var(--paper);font-size:14px}
.sl-cmp .it .sl-meter{height:10px}
</style>`;

/* =====================================================================
   1. CẶP SÁCH
   ===================================================================== */
const BP_ITEMS = [
  ['📘','SGK Toán',0.35,1],['📗','SGK KHTN',0.45,1],['📙','SGK Ngữ văn',0.3,1],['📕','SGK Tiếng Anh',0.3,1],
  ['📒','6 quyển vở',0.6,1],['✏️','Hộp bút',0.25,1],['🍱','Hộp cơm',0.6,1],['🚰','Bình nước 1 L',1.1,1],
  ['🧮','Máy tính',0.1,0],['🧥','Áo khoác',0.4,0],['📚','Truyện tranh',0.3,0]
];
const BP_EMPTY = 0.8;

function sinh_backpack(p){
  const chips = BP_ITEMS.map((it,i)=>`<button class="sl-chip" data-bpi="${i}" aria-pressed="${it[3]?'true':'false'}">${it[0]} ${it[1]} <small>${fmt(it[2])} kg</small></button>`).join('');
  p.innerHTML = CSS + `<div class="sec lab" id="bp-sec"><h3>🎒 Kiểm tra cặp sách</h3>
   <p class="muted">Đoán trước: cặp của em đang nặng khoảng bao nhiêu phần trăm khối lượng cơ thể? Chọn đồ mang theo hôm nay (hoặc kéo thanh khối lượng cặp), rồi xem tư thế lưng thay đổi thế nào.</p>
   <svg viewBox="0 0 320 222" id="bp-svg" role="img" aria-label="Bạn nữ đeo cặp nhìn ngang và nhìn từ phía sau"></svg>
   <div class="sl-sub">Hình minh hoạ: cặp càng nặng, người càng phải ngả về trước để giữ thăng bằng.</div>
   <div class="sl-h4">Hôm nay em mang gì? <span class="sl-sub">(cặp rỗng ${fmt(BP_EMPTY)} kg)</span></div>
   <div class="sl-chips" id="bp-chips">${chips}</div>
   <div class="ctrl">
    <div>${slider('bp-w','Khối lượng cơ thể em',25,75,1,42,'kg')}</div>
    <div>${slider('bp-m','Khối lượng cặp',0.5,12,0.05,5,'kg')}</div>
    <div><label for="bp-strap">Cách đeo cặp</label><select id="bp-strap"><option value="two">Đeo cả 2 quai</option><option value="one">Đeo 1 quai, lệch một bên vai</option></select></div>
    <div><label><input type="checkbox" id="bp-close" checked> Xếp sách nặng sát lưng (ngăn trong)</label></div>
   </div>
   <div class="readout" id="bp-res"></div>
   <div class="sl-try"><b>Thử:</b> An nặng 42 kg, cặp 6 kg (bài tập ★). Kéo đúng hai số này rồi bỏ bớt đồ trong danh sách cho đến khi cặp xuống dưới 10%. Sau đó đổi sang “Đeo 1 quai” và bỏ dấu “sát lưng” xem lưng thay đổi ra sao.</div>
   <div class="sl-h4">Mẹo xếp cặp</div>
   <ul class="sl-list">
    <li>Sách nặng, to đặt <b>sát lưng</b>; đồ nhẹ (hộp bút, áo mưa) để ngăn ngoài. Trọng tâm cặp càng gần cột sống, lưng càng ít phải cúi.</li>
    <li>Chỉnh quai để đáy cặp nằm trên thắt lưng, cặp áp sát lưng, không lủng lẳng.</li>
    <li>Xem thời khoá biểu tối hôm trước, chỉ mang sách cần dùng; bình nước nhỏ, đến trường rót thêm.</li>
   </ul></div>`;
  const sec = $('bp-sec');
  function recalcFromChips(){
    let m = BP_EMPTY; sec.querySelectorAll('[data-bpi]').forEach(b=>{ if(b.getAttribute('aria-pressed')==='true') m += BP_ITEMS[+b.dataset.bpi][2]; });
    setSlider('bp-m', Math.round(m*20)/20); draw();
  }
  sec.querySelectorAll('[data-bpi]').forEach(b=>b.onclick=()=>{ b.setAttribute('aria-pressed', b.getAttribute('aria-pressed')==='true'?'false':'true'); recalcFromChips(); });

  function draw(){
    const W=val('bp-w'), m=val('bp-m'), one=$('bp-strap').value==='one', close=$('bp-close').checked;
    const pct = m/W*100;
    const lean = Math.min(28, pct*1.05 + (close?0:3.5));
    const bh = 26 + Math.min(m,12)*2.3, bw = 16 + Math.min(m,12)*0.9;
    const gap = close?0:7;
    const lvl = pct<=10?'ok':(pct<=15?'warn':'bad');
    const lvlCol = lvl==='ok'?'var(--ok)':(lvl==='warn'?'#E0A21B':'var(--bad)');
    const SK='#F6D3B5', HAIR='#5B3B6E', SHIRT='#A66BE0', SKIRT='#F48FC6', BAG='#E86FB4', STRAP='#7A3FB0';
    // ----- nhìn ngang (hip tại 78,130) -----
    const hx=78, hy=130;
    const bagX = 66 - gap - bw;
    const side = `
      <text x="80" y="16" class="svgt" text-anchor="middle" font-weight="700">Nhìn ngang</text>
      <line x1="${hx}" y1="${hy}" x2="${hx}" y2="40" stroke="var(--muted)" stroke-dasharray="3 4" stroke-width="1"/>
      <line x1="6" y1="203" x2="154" y2="203" stroke="var(--muted)" stroke-width="1.5"/>
      <path d="M72 146 L71 199" stroke="${SK}" stroke-width="6" stroke-linecap="round"/>
      <path d="M84 146 L87 199" stroke="${SK}" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="74" cy="201" rx="7" ry="3.2" fill="${HAIR}"/><ellipse cx="90" cy="201" rx="7" ry="3.2" fill="${HAIR}"/>
      <g transform="rotate(${lean.toFixed(1)} ${hx} ${hy})">
        <rect x="${bagX}" y="80" width="${bw}" height="${bh}" rx="7" fill="${BAG}" stroke="var(--ink)" stroke-width="1.2"/>
        <rect x="${bagX+3}" y="${80+bh*0.55}" width="${bw-6}" height="${bh*0.32}" rx="4" fill="#F7B5D8" stroke="var(--ink)" stroke-width=".8"/>
        <rect x="66" y="78" width="25" height="54" rx="9" fill="${SHIRT}"/>
        <path d="M${bagX+bw-3} 84 Q 76 70 86 84" stroke="${STRAP}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <rect x="74" y="66" width="8" height="12" rx="3" fill="${SK}"/>
        <g transform="rotate(${(-lean*0.55).toFixed(1)} 78 70)">
          <circle cx="76" cy="56" r="15.5" fill="${HAIR}"/>
          <ellipse cx="59" cy="62" rx="5" ry="11" fill="${HAIR}" transform="rotate(14 59 62)"/>
          <circle cx="81" cy="60" r="13" fill="${SK}"/>
          <path d="M67 50 Q76 39 92 50 Q84 46 74 48 Z" fill="${HAIR}"/>
          <circle cx="88" cy="58" r="1.7" fill="#3B1F4A"/>
          <circle cx="88" cy="65" r="3" fill="#F48FC6" opacity=".65"/>
          <path d="M86 69 Q89 71 92 68" stroke="#3B1F4A" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <path d="M60 46 l6 4 l-6 4 z M72 46 l-6 4 l6 4 z" fill="${SKIRT}" stroke="#C2417F" stroke-width=".6"/>
        </g>
        <path d="M80 84 Q 84 104 92 116" stroke="${SK}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      </g>
      <path d="M64 124 L92 124 L99 150 L58 150 Z" fill="${SKIRT}"/>
      <path d="M${hx} ${hy-92} A 92 92 0 0 1 ${(hx+92*Math.sin(lean*Math.PI/180)).toFixed(1)} ${(hy-92*Math.cos(lean*Math.PI/180)).toFixed(1)}" fill="none" stroke="${lvlCol}" stroke-width="2"/>
      <text x="126" y="34" class="svgt" text-anchor="middle" font-weight="700" fill="${lvlCol}" style="fill:${lvlCol}">${lean<3?'lưng thẳng':'ngả ' + Math.round(lean) + '°'}</text>`;
    // ----- nhìn từ sau -----
    const cx=240, t = one? Math.min(11, 2 + pct*0.55) : 0;
    const Ly = 76 + t, Ry = 76 - t;
    const bend = one? t*1.5 : 0;
    const spP = [[cx,72],[cx-bend,96],[cx+bend*0.6,120],[cx,142]];
    const bez = (u)=>{ const v=1-u; const P=spP; return [v*v*v*P[0][0]+3*v*v*u*P[1][0]+3*v*u*u*P[2][0]+u*u*u*P[3][0], v*v*v*P[0][1]+3*v*v*u*P[1][1]+3*v*u*u*P[2][1]+u*u*u*P[3][1]]; };
    let verts=''; for(let k=0;k<9;k++){ const [x,y]=bez(k/8); verts+=`<rect x="${(x-4.5).toFixed(1)}" y="${(y-2.6).toFixed(1)}" width="9" height="5.2" rx="2" fill="#FFF8F0" stroke="#3B1F4A" stroke-width=".8"/>`; }
    const headX = cx - bend*0.5;
    let bagBack;
    if(!one){
      bagBack = `<rect x="${cx-bw*1.25}" y="80" width="${bw*2.5}" height="${bh}" rx="9" fill="${BAG}" opacity=".38" stroke="var(--ink)" stroke-dasharray="4 3"/>
        <path d="M${cx-17} ${Ly+1} L${cx-15} ${80+bh*0.8} M${cx+17} ${Ry+1} L${cx+15} ${80+bh*0.8}" stroke="${STRAP}" stroke-width="3.2" stroke-linecap="round"/>`;
    } else {
      const bx = 266 + 6, by = Ry + 18;
      bagBack = `<path d="M${cx+20} ${Ry} Q ${bx+4} ${Ry-4} ${bx+bw*0.6} ${by}" stroke="${STRAP}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <rect x="${bx}" y="${by}" width="${bw*1.4}" height="${bh}" rx="8" fill="${BAG}" stroke="var(--ink)" stroke-width="1.2"/>
        <text x="${bx+bw*0.7}" y="${by+bh+12}" class="svgm" text-anchor="middle">cặp</text>`;
    }
    const back = `
      <line x1="160" y1="8" x2="160" y2="212" stroke="var(--line)" stroke-width="1.5"/>
      <text x="240" y="16" class="svgt" text-anchor="middle" font-weight="700">Nhìn từ phía sau</text>
      <line x1="${cx}" y1="26" x2="${cx}" y2="200" stroke="var(--muted)" stroke-dasharray="3 4" stroke-width="1"/>
      <line x1="170" y1="203" x2="314" y2="203" stroke="var(--muted)" stroke-width="1.5"/>
      <path d="M${cx-7} 146 L${cx-8} 199 M${cx+7} 146 L${cx+8} 199" stroke="${SK}" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="${cx-9}" cy="201" rx="6" ry="3" fill="${HAIR}"/><ellipse cx="${cx+9}" cy="201" rx="6" ry="3" fill="${HAIR}"/>
      <path d="M${cx-24} ${Ly} L${cx+24} ${Ry} L${cx+17} 140 L${cx-17} 140 Z" fill="${SHIRT}" stroke-linejoin="round"/>
      <path d="M${cx-24} ${Ly+2} Q ${cx-30} ${Ly+30} ${cx-28} ${Ly+52}" stroke="${SK}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path d="M${cx+24} ${Ry+2} Q ${cx+30} ${Ry+30} ${cx+28} ${Ry+52}" stroke="${SK}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path d="M${cx-20} 136 L${cx+20} 136 L${cx+27} 160 L${cx-27} 160 Z" fill="${SKIRT}"/>
      <rect x="${headX-4}" y="58" width="8" height="${Math.min(Ly,Ry)-56}" fill="${SK}"/>
      <circle cx="${headX}" cy="44" r="15" fill="${HAIR}"/>
      <ellipse cx="${headX}" cy="64" rx="4.5" ry="9" fill="${HAIR}"/>
      <path d="M${headX-8} 52 l7 4 l-7 4 z M${headX+8} 52 l-7 4 l7 4 z" fill="${SKIRT}" stroke="#C2417F" stroke-width=".6"/>
      <line x1="${cx-24}" y1="${Ly}" x2="${cx+24}" y2="${Ry}" stroke="${t>0.5?'var(--bad)':'var(--ok)'}" stroke-width="1.6" stroke-dasharray="${t>0.5?'4 3':'0'}"/>
      ${bagBack}
      ${verts}
      ${one?`<text x="${cx-34}" y="${Ly-2}" class="svgm" text-anchor="end">vai lệch</text><text x="165" y="128" class="svgm">cột sống</text><text x="165" y="140" class="svgm">cong</text>`:`<text x="165" y="128" class="svgm">cột sống</text><text x="165" y="140" class="svgm">thẳng</text>`}`;
    $('bp-svg').innerHTML = side + back;

    const r = $('bp-res');
    const verdict = lvl==='ok' ? `<span class="sl-ok">Nhẹ nhàng, tốt cho lưng ✓</span>` : lvl==='warn' ? `<span class="sl-warn">Hơi nặng (trên 10%)</span>` : `<span class="sl-bad">Quá nặng (trên 15%)</span>`;
    let html = `<div class="big">Tỉ lệ = ${fmt(m,2)} / ${fmt(W)} × 100% ≈ ${fmt(pct,1)}%</div>${verdict}<br>
      Khuyến nghị: cặp không quá <b>10%</b> khối lượng cơ thể (≈ ${fmt(W*0.1,1)} kg), tối đa <b>15%</b> (≈ ${fmt(W*0.15,1)} kg).`;
    if(pct>10) html += `<br>Để về mức 10%, em cần bớt khoảng <b>${fmt(m-W*0.1,2)} kg</b>: để SGK ở lớp, mang vở mỏng, bình nước nhỏ hơn.`;
    html += one
      ? `<br><span class="sl-bad">Đeo 1 quai:</span> cả cặp dồn lên một vai, vai đó phải nhô lên giữ quai, người nghiêng sang bên kia cho cân bằng nên cột sống bị kéo cong. Xương tuổi em còn nhiều chất hữu cơ, mềm dẻo, ngày nào cũng đeo lệch thì dễ <b>cong vẹo cột sống</b>.`
      : `<br><span class="sl-ok">Đeo 2 quai:</span> trọng lượng chia đều lên hai vai, hai vai ngang nhau, cột sống thẳng.`;
    html += close
      ? `<br>Sách nặng sát lưng: trọng tâm cặp gần cột sống nên em chỉ cần ngả ít về trước.`
      : `<br><span class="sl-warn">Sách nặng ở ngăn ngoài</span> kéo cặp ra xa lưng, em phải cúi về trước nhiều hơn để không bị ngã ngửa, cơ lưng và cổ mau mỏi.`;
    r.innerHTML = html;
  }
  bindSliders(sec, draw);
  recalcFromChips();
}

/* =====================================================================
   2. KHẨU PHẦN
   ===================================================================== */
// [id, emoji, tên, khẩu phần, protein g, lipid g, glucid g, nhóm]
const FOODS = [
  ['com','🍚','Cơm trắng','1 bát (150 g)',4,0.5,44,'main'],
  ['pho','🍜','Phở bò','1 bát',25,10,60,'main'],
  ['banhmi','🥖','Bánh mì trứng','1 ổ',14,14,50,'main'],
  ['xoi','🍙','Xôi đậu xanh','1 gói',10,6,75,'main'],
  ['khoai','🍠','Khoai lang luộc','1 củ (150 g)',1.8,0.2,30,'main'],
  ['trung','🥚','Trứng luộc','1 quả',6,5,0.5,'pro'],
  ['ca','🐟','Cá kho','1 khúc (100 g)',18,8,3,'pro'],
  ['thit','🥓','Thịt rang','1 đĩa nhỏ (100 g)',16,18,2,'pro'],
  ['ga','🍗','Thịt gà luộc','100 g',22,9,0,'pro'],
  ['dauphu','🧈','Đậu phụ sốt cà chua','1 bìa',11,7,4,'pro'],
  ['raumuong','🥬','Rau muống luộc','1 đĩa',4,0.3,4,'veg'],
  ['rauxao','🥦','Rau cải xào','1 đĩa',3,5,5,'veg'],
  ['canh','🥣','Canh rau','1 bát',2,1,3,'veg'],
  ['sua','🥛','Sữa tươi','1 hộp 180 mL',5.4,6.3,9,'milk'],
  ['suachua','🍶','Sữa chua','1 hộp 100 g',3.5,3,15,'milk'],
  ['chuoi','🍌','Chuối','1 quả',1.2,0.3,22,'fruit'],
  ['cam','🍊','Cam','1 quả',1.2,0.2,13,'fruit'],
  ['trasua','🧋','Trà sữa trân châu','1 cốc lớn',3,12,55,'sweet'],
  ['nuocngot','🥤','Nước ngọt có ga','1 lon 330 mL',0,0,35,'sweet'],
  ['snack','🍟','Bim bim','1 gói 40 g',2.5,13,22,'sweet']
];
const GROUPS = {main:'Cơm, bún, bánh (bột đường)', pro:'Đạm: thịt, cá, trứng, đậu', veg:'Rau', milk:'Sữa', fruit:'Hoa quả', sweet:'Đồ ăn vặt, đồ uống ngọt'};
const kcalOf = f => 4.1*f[4] + 9.3*f[5] + 4.3*f[6];
const MEAL_TARGET = {
  day:{lo:2100,hi:2200,name:'cả ngày'},
  meal:{lo:630,hi:770,name:'một bữa chính (≈ 30–35% cả ngày)'},
  bf:{lo:525,hi:660,name:'bữa sáng (≈ 25–30% cả ngày)'}
};
const MEAL_PRESET = {
  bf:{xoi:1,sua:1,cam:1},
  day:{banhmi:1,sua:1,com:4,ca:1,raumuong:1,canh:2,dauphu:1,trung:1,rauxao:1,chuoi:1,cam:1,suachua:1}
};
// khuyến nghị % năng lượng
const REC = {P:[13,20], L:[20,30], G:[55,65]};
const CP = {P:'#E86FB4', L:'#F2B544', G:'#6CB8F0'};

function sinh_meal(p){
  const cnt = {}; FOODS.forEach(f=>cnt[f[0]]=0);
  let cards=''; let lastG='';
  FOODS.forEach(f=>{
    if(f[7]!==lastG){ if(lastG) cards+='</div>'; cards+=`<div class="sl-grp">${GROUPS[f[7]]}</div><div class="sl-foods">`; lastG=f[7]; }
    cards+=`<div class="sl-food" id="ml-c-${f[0]}"><div class="nm">${f[1]} ${f[2]}<small>${f[3]} · ${fmt(kcalOf(f),0)} kcal</small></div>
      <div class="sl-pm"><button data-ml="${f[0]}" data-d="-1" aria-label="Bớt ${f[2]}">−</button><span id="ml-n-${f[0]}">0</span><button data-ml="${f[0]}" data-d="1" aria-label="Thêm ${f[2]}">+</button></div></div>`;
  });
  cards+='</div>';
  p.innerHTML = CSS + `<div class="sec lab" id="ml-sec"><h3>🍱 Xây khẩu phần của em</h3>
   <p class="muted">Bấm + / − để chọn món và số phần. Đoán trước: một cốc trà sữa lớn bằng khoảng mấy bát cơm về năng lượng? Bảng tự tính năng lượng theo hệ số trong bài: 1 g đạm ≈ 4,1 kcal, 1 g béo ≈ 9,3 kcal, 1 g bột đường ≈ 4,3 kcal.</p>
   <div class="ctrl">
    <div><label for="ml-tg">So sánh với nhu cầu của bạn nữ 13–14 tuổi</label><select id="ml-tg"><option value="day">Cả ngày (2 100–2 200 kcal)</option><option value="meal">Một bữa chính (≈ 630–770 kcal)</option><option value="bf">Bữa sáng (≈ 525–660 kcal)</option></select></div>
    <div class="row" style="align-self:end"><button class="btn ghost" id="ml-pbf">Bữa sáng mẫu</button><button class="btn ghost" id="ml-pday">Một ngày mẫu</button><button class="btn ghost" id="ml-clr">Xoá hết</button></div>
   </div>
   ${cards}
   <div class="readout" id="ml-res"></div>
   <div class="sl-try"><b>Thử:</b> Bấm “Một ngày mẫu”, sau đó thêm 1 cốc trà sữa và 1 lon nước ngọt. Tổng năng lượng tăng bao nhiêu? Phần trăm năng lượng từ bột đường và chất béo thay đổi thế nào?</div>
   <p class="sl-sub">Số liệu dinh dưỡng là giá trị gần đúng cho một phần ăn thông thường; món nấu ở mỗi nhà sẽ khác một chút.</p></div>`;
  const sec = $('ml-sec');
  function setCounts(obj){ FOODS.forEach(f=>cnt[f[0]]=obj[f[0]]||0); update(); }
  sec.querySelectorAll('[data-ml]').forEach(b=>b.onclick=()=>{ const id=b.dataset.ml; cnt[id]=clamp(cnt[id]+(+b.dataset.d),0,6); update(); });
  $('ml-pbf').onclick=()=>{ $('ml-tg').value='bf'; setCounts(MEAL_PRESET.bf); };
  $('ml-pday').onclick=()=>{ $('ml-tg').value='day'; setCounts(MEAL_PRESET.day); };
  $('ml-clr').onclick=()=>setCounts({});
  $('ml-tg').onchange=update;

  function update(){
    let P=0,L=0,G=0,n=0, grp={main:0,pro:0,veg:0,milk:0,fruit:0,sweet:0}, sweetG=0;
    FOODS.forEach(f=>{ const k=cnt[f[0]]; $('ml-n-'+f[0]).textContent=k; $('ml-c-'+f[0]).classList.toggle('on',k>0);
      const bs=sec.querySelectorAll(`[data-ml="${f[0]}"]`); bs[0].disabled = k<=0; bs[1].disabled = k>=6;
      P+=k*f[4]; L+=k*f[5]; G+=k*f[6]; n+=k; grp[f[7]]+=k; if(f[7]==='sweet') sweetG+=k*f[6]; });
    const eP=4.1*P, eL=9.3*L, eG=4.3*G, E=eP+eL+eG;
    const tg=MEAL_TARGET[$('ml-tg').value]; const mid=(tg.lo+tg.hi)/2;
    const r=$('ml-res');
    if(n===0){ r.innerHTML = `<div class="big">Khay còn trống 🍽️</div>Chọn vài món ở trên, hoặc bấm “Bữa sáng mẫu”, “Một ngày mẫu” để bắt đầu.`; return; }
    const pctNeed = E/mid*100;
    const scaleMax = Math.max(tg.hi*1.4, E*1.05);
    const pp = x => fmt(E>0? x/E*100 : 0,1);
    const pv = x => E>0? x/E*100 : 0;
    const status = E < tg.lo*0.9 ? `<span class="sl-warn">còn thiếu so với nhu cầu</span>` : E <= tg.hi*1.1 ? `<span class="sl-ok">vừa đủ ✓</span>` : `<span class="sl-warn">nhiều hơn nhu cầu</span>`;
    const recTag = (k,v)=>{ const [a,b]=REC[k]; return v<a?`<span class="sl-warn">thấp</span>`:(v>b?`<span class="sl-warn">cao</span>`:`<span class="sl-ok">ổn</span>`); };
    // nhận xét
    const tips=[];
    const day = $('ml-tg').value==='day';
    if(E < tg.lo*0.9) tips.push(`Cơ thể tuổi dậy thì đang lớn nhanh nên cần đủ năng lượng. Em có thể thêm cơm, khoai, xôi hoặc một hộp sữa${day?', và đừng bỏ bữa sáng':''}.`);
    else if(E <= tg.hi*1.1) tips.push(`Năng lượng vừa với nhu cầu ${tg.name}. Tuyệt!`);
    else tips.push(`Năng lượng hơi nhiều hơn nhu cầu ${tg.name}. Không cần nhịn ăn hay ăn kiêng đâu; chỗ dễ điều chỉnh nhất thường là đồ uống ngọt và đồ ăn vặt.`);
    if(grp.sweet>0) tips.push(`Đồ ngọt, ăn vặt trong khay có khoảng <b>${fmt(sweetG,0)} g</b> bột đường (phần lớn là đường). Thỉnh thoảng thì không sao; ngày thường em thử đổi sang sữa, sữa chua hoặc hoa quả nhé.`);
    if(day && grp.veg + grp.fruit < 4) tips.push(`Rau và quả mới có ${grp.veg+grp.fruit} phần. Một ngày nên có khoảng 3 đĩa/bát rau và 2 phần quả để đủ vitamin, chất xơ, ít táo bón.`);
    else if(!day && grp.veg + grp.fruit < 1) tips.push(`Bữa này chưa có rau hay quả. Thêm một đĩa rau hoặc một quả cam cho đủ vitamin và chất xơ.`);
    if(pv(eP)<REC.P[0]) tips.push(`Phần đạm còn ít: thêm trứng, cá, đậu phụ hoặc sữa giúp cơ thể xây dựng cơ, xương, tạo kháng thể.`);
    if(pv(eL)>REC.L[1]) tips.push(`Năng lượng từ chất béo hơi cao: bớt món chiên rán, bim bim; ưu tiên món luộc, hấp, kho.`);
    if(day && grp.milk===0) tips.push(`Chưa có sữa hay sữa chua: đây là nguồn calcium rất tốt cho xương đang lớn.`);
    r.innerHTML = `<div class="big">Tổng: ${fmt(E,0)} kcal ≈ ${fmt(pctNeed,0)}% nhu cầu ${tg.name.split(' (')[0]}</div>${status}
      <div class="sl-meter" aria-hidden="true"><i style="width:${clamp(E/scaleMax*100,0,100)}%"></i><b style="left:${tg.lo/scaleMax*100}%;width:${(tg.hi-tg.lo)/scaleMax*100}%"></b></div>
      <div class="sl-sub">Khung viền đậm: nhu cầu ${fmt(tg.lo)}–${fmt(tg.hi)} kcal.</div>
      <div class="tbl" style="margin-top:8px"><table style="font-size:13.5px"><tr><th>Chất</th><th>Khối lượng</th><th>Năng lượng</th><th>% (khuyến nghị)</th></tr>
       <tr><td>Đạm</td><td>${fmt(P,1)} g</td><td>${fmt(eP,0)} kcal<br><span class="sl-sub">${fmt(P,1)} × 4,1</span></td><td>${pp(eP)}% (13–20) ${recTag('P',pv(eP))}</td></tr>
       <tr><td>Béo</td><td>${fmt(L,1)} g</td><td>${fmt(eL,0)} kcal<br><span class="sl-sub">${fmt(L,1)} × 9,3</span></td><td>${pp(eL)}% (20–30) ${recTag('L',pv(eL))}</td></tr>
       <tr><td>Bột đường</td><td>${fmt(G,1)} g</td><td>${fmt(eG,0)} kcal<br><span class="sl-sub">${fmt(G,1)} × 4,3</span></td><td>${pp(eG)}% (55–65) ${recTag('G',pv(eG))}</td></tr></table></div>
      <div class="sl-h4">Năng lượng đến từ đâu?</div>
      <div class="sl-sub">Khẩu phần của em</div>
      <div class="sl-stack"><i style="width:${pv(eP)}%;background:${CP.P}">${pv(eP)>=9?Math.round(pv(eP))+'%':''}</i><i style="width:${pv(eL)}%;background:${CP.L}">${pv(eL)>=9?Math.round(pv(eL))+'%':''}</i><i style="width:${pv(eG)}%;background:${CP.G}">${pv(eG)>=9?Math.round(pv(eG))+'%':''}</i></div>
      <div class="sl-sub">Khuyến nghị (giữa khoảng)</div>
      <div class="sl-stack"><i style="width:16%;background:${CP.P}">16%</i><i style="width:25%;background:${CP.L}">25%</i><i style="width:59%;background:${CP.G}">59%</i></div>
      <div class="sl-leg"><span><i style="background:${CP.P}"></i>Đạm</span><span><i style="background:${CP.L}"></i>Béo</span><span><i style="background:${CP.G}"></i>Bột đường</span></div>
      <div class="sl-h4">Nhận xét</div><ul class="sl-list">${tips.map(t=>`<li>${t}</li>`).join('')}</ul>
      <div class="sl-sub">Không cần ngày nào cũng đếm kcal. Ăn đủ 3 bữa, đa dạng món, nhiều rau quả là đủ để lớn khoẻ.</div>`;
  }
  update();
}

/* =====================================================================
   3. MÁU: TRUYỀN MÁU + NHỊP TIM
   ===================================================================== */
const AG = {O:[], A:['A'], B:['B'], AB:['A','B']};
const AB_ = {O:['α','β'], A:['β'], B:['α'], AB:[]};
const canGive = (d,r) => !( (AG[d].includes('A') && AB_[r].includes('α')) || (AG[d].includes('B') && AB_[r].includes('β')) );
const RBC='#E0475B', RBC2='#F38A97', CA='#FFD34D', CB='#69C9F2', CAL='#16A37C', CBE='#8E5BD8';

function rbcSVG(x,y,r,grp){
  let s=`<circle cx="${x}" cy="${y}" r="${r}" fill="${RBC}" stroke="#9E2235" stroke-width="1"/><circle cx="${x}" cy="${y}" r="${r*0.45}" fill="${RBC2}"/>`;
  const ag=AG[grp]; const n=ag.length===2?8:6;
  for(let k=0;k<(ag.length?n:0);k++){
    const a = k/n*2*Math.PI + 0.3, kind = ag.length===2 ? ag[k%2] : ag[0];
    const px=x+Math.cos(a)*r, py=y+Math.sin(a)*r, sz=r*0.22+1.2;
    if(kind==='A') s+=`<polygon points="${px+Math.cos(a)*sz*1.3},${py+Math.sin(a)*sz*1.3} ${px+Math.cos(a+1.6)*sz},${py+Math.sin(a+1.6)*sz} ${px+Math.cos(a-1.6)*sz},${py+Math.sin(a-1.6)*sz}" fill="${CA}" stroke="#8A6A00" stroke-width=".6"/>`;
    else s+=`<rect x="${px-sz*0.8}" y="${py-sz*0.8}" width="${sz*1.6}" height="${sz*1.6}" fill="${CB}" stroke="#1D6F93" stroke-width=".6" transform="rotate(${a*180/Math.PI} ${px} ${py})"/>`;
  }
  return s;
}
function abSVG(x,y,s,kind,rot){
  const c = kind==='α'?CAL:CBE;
  return `<g transform="translate(${x} ${y}) rotate(${rot||0}) scale(${s})"><path d="M0 8 V0 M0 0 L-5 -6 M0 0 L5 -6" stroke="${c}" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>`;
}

function sinh_blood(p){
  const grpBtns = (pre)=>['O','A','B','AB'].map(g=>`<button class="sl-chip" data-${pre}="${g}" aria-pressed="false">Nhóm ${g}</button>`).join('');
  let grid = `<div class="h"></div>` + ['O','A','B','AB'].map(g=>`<div class="h">${g}</div>`).join('');
  ['O','A','B','AB'].forEach(d=>{ grid += `<div class="h">${d}</div>` + ['O','A','B','AB'].map(r=>`<div id="bl-g-${d}-${r}">?</div>`).join(''); });
  p.innerHTML = CSS + `<div class="sec lab" id="bl-sec1"><h3>🩸 Ai truyền máu được cho ai?</h3>
   <p class="muted">Chọn nhóm máu người cho và người nhận. Đoán trước: truyền được hay hồng cầu sẽ bị ngưng kết?</p>
   <div class="sl-h4">Người cho</div><div class="sl-chips" id="bl-d">${grpBtns('bld')}</div>
   <div class="sl-h4">Người nhận</div><div class="sl-chips" id="bl-r">${grpBtns('blr')}</div>
   <svg viewBox="0 0 320 170" id="bl-abo" role="img" aria-label="Sơ đồ truyền máu hệ ABO"></svg>
   <div class="readout" id="bl-res"></div>
   <svg viewBox="0 0 320 210" id="bl-mod" role="img" aria-label="Mô hình hồng cầu và kháng thể" style="margin-top:10px"></svg>
   <div class="sl-leg" style="margin-top:6px"><span><i style="background:${CA}"></i>kháng nguyên A</span><span><i style="background:${CB}"></i>kháng nguyên B</span><span><i style="background:${CAL}"></i>kháng thể α (chống A)</span><span><i style="background:${CBE}"></i>kháng thể β (chống B)</span></div>
   <div class="sl-h4">Bảng 16 cặp <span class="sl-sub" id="bl-cnt"></span></div>
   <div class="sl-sub">Hàng: người cho · Cột: người nhận. Ô chỉ hiện kết quả sau khi em đã thử cặp đó.</div>
   <div class="sl-grid" id="bl-grid">${grid}</div>
   <div class="sl-try"><b>Thử:</b> Tìm tất cả các nhóm mà nhóm O cho được, và tất cả các nhóm mà nhóm AB nhận được. Vì sao người ta vẫn ưu tiên truyền cùng nhóm máu?</div></div>

  <div class="sec lab" id="bl-sec2"><h3>❤️ Nhịp tim theo hoạt động</h3>
   <p class="muted">Chọn một hoạt động. Đoán trước: khi chạy, mỗi chu kì tim dài hơn hay ngắn hơn 0,8 s?</p>
   <div class="sl-chips" id="bl-act">
    <button class="sl-chip" data-hr="60" aria-pressed="false">😴 Ngủ</button>
    <button class="sl-chip" data-hr="75" aria-pressed="true">📖 Ngồi học</button>
    <button class="sl-chip" data-hr="100" aria-pressed="false">🚶‍♀️ Đi bộ nhanh</button>
    <button class="sl-chip" data-hr="145" aria-pressed="false">🏃‍♀️ Chạy</button>
    <button class="sl-chip" data-hr="165" aria-pressed="false">🪢 Nhảy dây</button>
   </div>
   <svg viewBox="0 0 320 150" id="bl-hsvg" role="img" aria-label="Tim đập và điện tim"></svg>
   <div class="ctrl"><div>${slider('bl-hr','Nhịp tim (chỉnh thêm nếu muốn)',40,200,1,75,'lần/phút')}</div></div>
   <div class="readout" id="bl-hres"></div>
   <div class="sl-try"><b>Thử ở nhà:</b> đặt hai ngón tay lên cổ tay, đếm số nhịp trong 15 giây rồi nhân 4. Sau đó nhảy dây 1 phút và đo lại. Kéo thanh trượt đúng nhịp của em để xem tim bơm bao nhiêu máu.</div>
   <p class="sl-sub">Nhịp ở đây là ước lượng. Ở tuổi em, lúc ngồi nghỉ tim thường đập khoảng 60–100 lần/phút; người hay tập thể thao thường có nhịp nghỉ thấp hơn.</p></div>`;

  // ---------- Phần 1 ----------
  const sec1=$('bl-sec1'); let D='O', R='A'; const tried={};
  function pick(attr,g){ sec1.querySelectorAll(`[data-${attr}]`).forEach(b=>b.setAttribute('aria-pressed', b.dataset[attr]===g?'true':'false')); }
  sec1.querySelectorAll('[data-bld]').forEach(b=>b.onclick=()=>{D=b.dataset.bld; upd1();});
  sec1.querySelectorAll('[data-blr]').forEach(b=>b.onclick=()=>{R=b.dataset.blr; upd1();});
  const NODE = {O:[160,28], A:[64,86], B:[256,86], AB:[160,144]};
  const EDGES = [['O','A'],['O','B'],['O','AB'],['A','AB'],['B','AB']];
  function upd1(){
    pick('bld',D); pick('blr',R);
    const ok = canGive(D,R); tried[D+'-'+R]=ok;
    // sơ đồ ABO
    let s=`<defs><marker id="bl-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
      <marker id="bl-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ok)"/></marker>
      <marker id="bl-ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--bad)"/></marker></defs>`;
    const seg=(a,b,pad)=>{ const [x1,y1]=NODE[a],[x2,y2]=NODE[b]; const L=Math.hypot(x2-x1,y2-y1); const ux=(x2-x1)/L, uy=(y2-y1)/L; return [x1+ux*pad,y1+uy*pad,x2-ux*pad,y2-uy*pad]; };
    EDGES.forEach(([a,b])=>{ if(!ok && a===R && b===D) return; const on = a===D && b===R; const [x1,y1,x2,y2]=seg(a,b,24);
      s+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${on?'var(--ok)':'var(--muted)'}" stroke-width="${on?4:1.6}" marker-end="url(#${on?'bl-ar2':'bl-ar'})" opacity="${on?1:.7}"/>`; });
    if(!ok){ const [x1,y1,x2,y2]=seg(D,R,24); const mx=(x1+x2)/2, my=(y1+y2)/2;
      s+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--bad)" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#bl-ar3)"/>
        <circle cx="${mx}" cy="${my}" r="10" fill="var(--card)" stroke="var(--bad)" stroke-width="2"/><path d="M${mx-4} ${my-4} l8 8 M${mx+4} ${my-4} l-8 8" stroke="var(--bad)" stroke-width="2.4" stroke-linecap="round"/>`; }
    Object.keys(NODE).forEach(g=>{ const [x,y]=NODE[g]; const isD=g===D, isR=g===R;
      s+=`<circle cx="${x}" cy="${y}" r="21" fill="${isD||isR?'var(--accent-soft)':'var(--card)'}" stroke="${isD||isR?'var(--accent)':'var(--line)'}" stroke-width="${isD||isR?2.5:1.5}"/>
        <text x="${x}" y="${y+5}" class="svgt" text-anchor="middle" font-weight="800" font-size="15">${g}</text>`;
      const lab = isD&&isR ? 'cho & nhận' : isD ? 'người cho' : isR ? 'người nhận' : '';
      if(lab){ const ly = g==='AB'? y+5 : (g==='O'? y+5 : y+36); const lx = g==='AB'? x+28 : (g==='O'? x+28 : x);
        s+=`<text x="${lx}" y="${ly}" class="svgm" text-anchor="${(g==='AB'||g==='O')?'start':'middle'}" font-weight="700" style="fill:var(--accent)">${lab}</text>`; }
    });
    if(D===R) s+=`<text x="160" y="92" class="svgt" text-anchor="middle" style="fill:var(--ok)" font-weight="700">cùng nhóm: tốt nhất</text>`;
    $('bl-abo').innerHTML=s;

    // mô hình
    const agTxt = AG[D].length? 'có kháng nguyên '+AG[D].join(' và ') : 'không có kháng nguyên A, B';
    const abTxt = AB_[R].length? 'có kháng thể '+AB_[R].join(' và ') : 'không có kháng thể α, β';
    let m = `<rect x="4" y="4" width="148" height="78" rx="12" fill="var(--card)" stroke="var(--line)"/>
      <rect x="168" y="4" width="148" height="78" rx="12" fill="#F6E6A8" opacity=".35" stroke="var(--line)"/>
      <text x="78" y="20" class="svgt" text-anchor="middle" font-weight="700">Hồng cầu người cho (${D})</text>
      ${rbcSVG(78,50,19,D)}
      <text x="242" y="20" class="svgt" text-anchor="middle" font-weight="700">Huyết tương người nhận (${R})</text>`;
    if(AB_[R].length){ AB_[R].forEach((k,i)=>{ const bx = AB_[R].length===2 ? 212+i*60 : 242; m+=abSVG(bx-10,52,1.5,k,-10)+abSVG(bx+12,48,1.5,k,15)+`<text x="${bx}" y="76" class="svgt" text-anchor="middle" font-weight="800">${k}</text>`; }); }
    else m+=`<text x="242" y="54" class="svgm" text-anchor="middle">không có α, β</text>`;
    m += `<rect x="4" y="92" width="312" height="114" rx="12" fill="#F6E6A8" opacity=".25" stroke="var(--line)"/>
      <text x="12" y="108" class="svgt" font-weight="700">Trong mạch máu người nhận:</text>
      <text x="308" y="108" class="svgt" text-anchor="end" font-weight="800" style="fill:${ok?'var(--ok)':'var(--bad)'}">${ok?'không ngưng kết ✓':'NGƯNG KẾT ✕'}</text>`;
    if(ok){
      const pos=[[40,140],[96,172],[150,136],[206,176],[262,142],[60,186],[290,186]];
      pos.forEach(([x,y])=>m+=rbcSVG(x,y,12,D));
      const abs=AB_[R]; const ap=[[124,170],[180,150],[236,160],[30,166],[300,124]];
      if(abs.length) ap.forEach(([x,y],i)=>m+=abSVG(x,y,1.2,abs[i%abs.length],i*40-30));
    } else {
      const bad = AG[D].filter(a=>AB_[R].includes(a==='A'?'α':'β')).map(a=>a==='A'?'α':'β');
      const clump=(cx,cy)=>{ const pts=[[0,0],[22,-6],[-20,8],[6,20],[-6,-20],[24,16]]; let t='';
        pts.forEach(([dx,dy],i)=>{ if(i>0){ const [ax,ay]=pts[i-1]; t+=abSVG(cx+(dx+ax)/2,cy+(dy+ay)/2,1.15,bad[i%bad.length],i*55); } });
        pts.forEach(([dx,dy])=>t+=rbcSVG(cx+dx,cy+dy,11,D));
        [[11,-3],[-10,4],[14,8]].forEach(([dx,dy],i)=>t+=abSVG(cx+dx,cy+dy,1.15,bad[i%bad.length],i*70+20));
        return t; };
      m += clump(90,160) + clump(228,158);
    }
    $('bl-mod').innerHTML=m;

    const why = ok
      ? (D===R ? `Cùng nhóm ${D}: kháng thể của người nhận không “nhận ra” hồng cầu người cho nên không ngưng kết. Đây là cách truyền an toàn nhất.`
        : AG[D].length===0 ? `Hồng cầu nhóm O <b>không có kháng nguyên A, B</b>, nên kháng thể α, β của người nhận không có gì để bám vào. Vì vậy nhóm O có thể cho các nhóm khác (khi khẩn cấp, truyền ít và chậm).`
        : `Người nhận nhóm ${R} ${abTxt}, không có kháng thể chống ${AG[D].join(', ')} nên hồng cầu người cho không bị ngưng kết.`)
      : `Hồng cầu người cho ${agTxt}; huyết tương người nhận ${abTxt}. ${AG[D].filter(a=>AB_[R].includes(a==='A'?'α':'β')).map(a=>`Kháng nguyên <b>${a}</b> gặp kháng thể <b>${a==='A'?'α':'β'}</b>`).join(' và ')} nên các hồng cầu bị dính chùm lại (ngưng kết), có thể làm tắc mạch máu, rất nguy hiểm.`;
    $('bl-res').innerHTML = `<div class="big">${D} → ${R}: ${ok?'<span class="sl-ok">truyền được</span>':'<span class="sl-bad">không truyền được</span>'}</div>${why}
      <br><span class="sl-sub">Quy tắc: chỉ cần xét kháng nguyên trên hồng cầu người cho có gặp kháng thể tương ứng trong huyết tương người nhận hay không (A gặp α, B gặp β).</span>`;
    // bảng
    let c=0; ['O','A','B','AB'].forEach(d=>['O','A','B','AB'].forEach(r=>{ const el=$(`bl-g-${d}-${r}`); const k=d+'-'+r;
      if(k in tried){ c++; el.textContent=tried[k]?'✓':'✕'; el.className=tried[k]?'y':'n'; } else { el.textContent='?'; el.className=''; }
      if(d===D&&r===R) el.classList.add('cur'); }));
    $('bl-cnt').textContent = `(đã thử ${c}/16${c===16?' 🎉':''})`;
  }
  upd1();

  // ---------- Phần 2 ----------
  const sec2=$('bl-sec2'); const hsvg=$('bl-hsvg'); let raf=null, t0=performance.now(), beats=0, lastBeatIdx=-1;
  sec2.querySelectorAll('[data-hr]').forEach(b=>b.onclick=()=>{ sec2.querySelectorAll('[data-hr]').forEach(x=>x.setAttribute('aria-pressed', x===b?'true':'false')); setSlider('bl-hr', +b.dataset.hr); hrChange(); });
  function ecg(tau,T){ // tau: thời gian trong chu kì (s); đỉnh R tại 0
    const d = ((tau%T)+T)%T;
    if(d<0.03) return -32*(d/0.03);
    if(d<0.06) return -32 + 44*((d-0.03)/0.03);
    if(d<0.09) return 12 - 12*((d-0.06)/0.03);
    const tw0=Math.min(0.18, T*0.22), tw1=Math.min(0.36, T*0.45);
    if(d>tw0 && d<tw1) return -8*Math.sin(Math.PI*(d-tw0)/(tw1-tw0));
    const p0=T-Math.min(0.16,T*0.2), p1=T-Math.min(0.06,T*0.07);
    if(d>p0 && d<p1) return -4*Math.sin(Math.PI*(d-p0)/(p1-p0));
    return 0;
  }
  function frame(now){
    const hr=val('bl-hr'), T=60/hr; const t=(now-t0)/1000;
    const idx=Math.floor(t/T); if(idx!==lastBeatIdx){ lastBeatIdx=idx; beats++; }
    const ph=(t%T)/T; const pulse = ph<0.12? Math.sin(ph/0.12*Math.PI) : 0;
    const sc = 2.5*(1+0.14*pulse);
    let pts=''; const x0=130, x1=312, win=3; // 3 giây
    for(let i=0;i<=120;i++){ const x=x0+(x1-x0)*i/120; const tt = t - win + win*i/120; pts+=`${x.toFixed(1)},${(78+ecg(tt,T)).toFixed(1)} `; }
    hsvg.innerHTML = `<text x="68" y="18" class="svgt" text-anchor="middle" font-weight="700">Tim</text>
      <g transform="translate(68 74) scale(${sc.toFixed(3)})"><path d="M0 -6 C -4 -14 -16 -12 -16 -2 C -16 8 -4 14 0 20 C 4 14 16 8 16 -2 C 16 -12 4 -14 0 -6 Z" fill="${RBC}" stroke="#9E2235" stroke-width=".6"/>
      <path d="M-9 -6 Q -11 0 -7 5" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>
      <text x="68" y="140" class="svgm" text-anchor="middle">${RM()?'(chuyển động đã tắt)':'đã đập '+beats+' lần'}</text>
      <rect x="128" y="30" width="186" height="96" rx="8" fill="var(--card)" stroke="var(--line)"/>
      ${[0,1,2,3].map(k=>`<line x1="${x0+(x1-x0)*k/3}" y1="34" x2="${x0+(x1-x0)*k/3}" y2="122" stroke="var(--line)" stroke-width="1"/>`).join('')}
      <polyline points="${pts}" fill="none" stroke="var(--bad)" stroke-width="1.8" stroke-linejoin="round"/>
      <text x="221" y="20" class="svgt" text-anchor="middle" font-weight="700">Điện tim 3 giây gần nhất</text>
      <text x="221" y="142" class="svgm" text-anchor="middle">1 ô = 1 giây · 1 đỉnh nhọn = 1 nhịp</text>`;
    if(!RM()) raf=requestAnimationFrame(frame);
  }
  function hrChange(){
    const hr=val('bl-hr'), T=60/hr, Q=hr*70;
    sec2.querySelectorAll('[data-hr]').forEach(x=>x.setAttribute('aria-pressed', +x.dataset.hr===hr?'true':'false'));
    const rest = 0.8; const sysT = T<rest ? 0.4*Math.pow(T/rest,0.4) : 0.4; // co tim (nhĩ 0,1 + thất 0,3) ngắn đi ít
    const dia = Math.max(0, T - sysT);
    $('bl-hres').innerHTML = `<div class="big">${hr} lần/phút → chu kì T = 60 / ${hr} ≈ ${fmt(T,2)} s</div>
      ${T<rest-0.005?`Ngắn hơn chu kì lúc nghỉ (0,8 s).`:T>rest+0.005?`Dài hơn chu kì 0,8 s lúc nghỉ, tim được nghỉ nhiều hơn.`:`Đúng bằng chu kì chuẩn trong bài: nhĩ co 0,1 s, thất co 0,3 s, dãn chung 0,4 s.`}
      ${T<rest-0.005?` Thời gian co tim chỉ ngắn đi một chút (≈ ${fmt(sysT,2)} s so với 0,4 s), còn thời gian <b>dãn chung</b> bị rút ngắn nhiều, chỉ còn khoảng ${fmt(dia,2)} s (lúc nghỉ 0,4 s): tim được nghỉ ít hơn.`:''}<br>
      Lưu lượng tim = ${hr} × 70 mL = <b>${fmt(Q)} mL/phút ≈ ${fmt(Q/1000,1)} L/phút</b>${Q>=5000&&Q<=5500?' (gần bằng toàn bộ lượng máu cơ thể người lớn chỉ trong 1 phút!)':''}.<br>
      Nếu giữ nhịp này cả ngày: ${fmt(Q/1000,1)} × ${fmt(1440)} phút ≈ ${fmt(Q*1440/1000,0)} L máu.
      ${hr>=120?`<br><span class="sl-sub">Thực tế khi vận động mạnh, mỗi lần co tim còn đẩy nhiều hơn 70 mL nên lượng máu bơm còn lớn hơn, mang thêm O₂ cho cơ đang làm việc.</span>`:''}`;
    if(RM()) frame(performance.now());
  }
  bindSliders(sec2, hrChange);
  hrChange();
  stopAnim = ()=>{ if(raf){ cancelAnimationFrame(raf); raf=null; } };
  if(RM()) frame(performance.now()); else raf=requestAnimationFrame(frame);
}

/* =====================================================================
   4. HÔ HẤP
   ===================================================================== */
const DEAD = 150;
function sinh_breath(p){
  p.innerHTML = CSS + `<div class="sec lab" id="br-sec"><h3>🫁 Phổi phồng, phổi xẹp</h3>
   <p class="muted">Quan sát: khi hít vào, cơ hoành co và hạ xuống, lồng ngực rộng ra, phổi nở. Chỉnh nhịp thở và khí lưu thông. Đoán trước: thở nhanh gấp đôi mà mỗi lần chỉ hít nửa lượng khí thì phổi nhận được bao nhiêu khí?</p>
   <svg viewBox="0 0 320 230" id="br-svg" role="img" aria-label="Mô phỏng phổi và cơ hoành"></svg>
   <div class="ctrl">
    <div><label for="br-st">Trạng thái</label><select id="br-st"><option value="rest">Ngồi nghỉ (16 lần/phút, 500 mL)</option><option value="ex">Tập thể dục (30 lần/phút, 1 500 mL)</option><option value="custom">Tự chỉnh</option></select></div>
    <div>${slider('br-f','Nhịp thở',6,40,1,16,'lần/phút')}</div>
    <div>${slider('br-v','Khí lưu thông (mỗi lần thở)',100,2500,10,500,'mL')}</div>
   </div>
   <div class="readout" id="br-res"></div>
   <div class="sl-h4">Khí hít vào và khí thở ra khác nhau thế nào?</div>
   <div class="sl-sub">Mỗi hàng một thang đo riêng để dễ so sánh. Số liệu theo bảng trong bài.</div>
   <div id="br-gas"></div>
   <div class="sl-leg"><span><i style="background:#6CB8F0"></i>Khí hít vào</span><span><i style="background:#E86FB4"></i>Khí thở ra</span></div>
   <p style="font-size:14.5px">O₂ giảm vì phế nang đã trao O₂ cho máu; CO₂ tăng gấp hơn 100 lần vì máu thải CO₂ ra phế nang (khuếch tán từ nơi nồng độ cao sang nơi thấp). N₂ gần như không đổi vì cơ thể không dùng N₂. Hơi nước tăng vì đường hô hấp làm ẩm khí.</p>
  </div>
  <div class="sec lab" id="br-sec2"><h3>🤔 Thở sâu chậm hay nông nhanh tốt hơn?</h3>
   <p class="muted">Ba cách thở dưới đây có <b>cùng thông khí phút 8 000 mL</b>. Bấm từng cách để nạp vào mô phỏng ở trên.</p>
   <div class="sl-cmp" id="br-cmp"></div>
   <div class="eg"><b>Ví dụ (bài tập ★★★):</b> An thở 18 lần/phút × 420 mL, sau khi tập thở 12 lần/phút × 620 mL. Thông khí phút gần như nhau (7 560 và 7 440 mL) nhưng khí vào phế nang: (420 − 150) × 18 = 4 860 mL so với (620 − 150) × 12 = 5 640 mL, nhiều hơn <b>780 mL</b> mỗi phút.
    <div class="row" style="margin-top:6px"><button class="btn ghost" data-brl="18,420">Nạp 18 × 420</button><button class="btn ghost" data-brl="12,620">Nạp 12 × 620</button></div></div>
   <p style="font-size:14.5px">Mỗi lần thở đều có khoảng 150 mL “mắc lại” ở đường dẫn khí (khoảng chết). Thở nông nhanh thì “mất” 150 mL nhiều lần hơn. Vì vậy thở <b>chậm, sâu bằng bụng</b> đưa nhiều khí sạch tới phế nang hơn, cũng giúp em bình tĩnh trước giờ kiểm tra.</p></div>`;
  const sec=$('br-sec'), svg=$('br-svg'); let raf=null, t0=performance.now(); const hist=[];
  const GAS=[['O₂',20.96,16.40,'%'],['CO₂',0.03,4.10,'%'],['N₂',79.01,79.50,'%'],['Hơi nước',null,null,'']];
  $('br-gas').innerHTML = GAS.map(g=>{
    if(g[1]===null) return `<div class="sl-gas"><b>${g[0]}</b><div class="bars"><div class="bar2"><i style="width:28%;background:#6CB8F0"></i><span>ít</span></div><div class="bar2"><i style="width:80%;background:#E86FB4"></i><span>bão hoà</span></div></div></div>`;
    const mx=Math.max(g[1],g[2]); const w=v=>Math.max(1.5,v/mx*80);
    return `<div class="sl-gas"><b>${g[0]}</b><div class="bars"><div class="bar2"><i style="width:${w(g[1])}%;background:#6CB8F0"></i><span>${fmt(g[1])}%</span></div><div class="bar2"><i style="width:${w(g[2])}%;background:#E86FB4"></i><span>${fmt(g[2])}%</span></div></div></div>`;
  }).join('');
  const CMP=[['😮‍💨 Nông, nhanh',32,250],['🙂 Bình thường',16,500],['🧘‍♀️ Sâu, chậm',8,1000]];
  $('br-cmp').innerHTML = CMP.map(([n,f,v])=>{ const al=Math.max(0,v-DEAD)*f; return `<button class="it" data-brl="${f},${v}" style="text-align:left;color:var(--ink)"><b>${n}</b>: ${f} lần × ${fmt(v)} mL
     <div class="sl-meter"><i style="width:${al/8000*100}%;background:var(--ok)"></i></div>
     <span class="sl-sub">Vào phế nang: (${fmt(v)} − 150) × ${f} = <b>${fmt(al)} mL/phút</b> (${fmt(al/8000*100,0)}%)</span></button>`; }).join('');
  p.querySelectorAll('[data-brl]').forEach(b=>b.onclick=()=>{ const [f,v]=b.dataset.brl.split(',').map(Number); setSlider('br-f',f); setSlider('br-v',v); $('br-st').value='custom'; calc(); sec.scrollIntoView({behavior:RM()?'auto':'smooth',block:'start'}); });

  function lungFrac(t,f){ const T=60/f, ph=(((t%T)+T)%T)/T; return ph<0.4 ? (1-Math.cos(Math.PI*ph/0.4))/2 : (1+Math.cos(Math.PI*(ph-0.4)/0.6))/2; }
  function draw(now){
    const f=val('br-f'), V=val('br-v'); const t=(now-t0)/1000;
    const v = RM()? 0.5 : lungFrac(t,f);
    const amp = clamp(V/2500,0.04,1);
    const s = 1 + 0.32*amp*v;            // phổi nở
    const dy = 22*amp*v;                 // cơ hoành hạ
    const inh = !RM() && ((t%(60/f))/(60/f) < 0.4);
    // phổi trái/phải (hình học quanh điểm rốn phổi)
    const lung = (side)=>{ const k=side; return `<g transform="translate(${100+k*20} 62) scale(${(1+(s-1)*0.45).toFixed(3)} ${s.toFixed(3)})">
       <path d="M0 0 C ${k*28} -10 ${k*40} 20 ${k*42} 60 C ${k*43} 90 ${k*28} 98 ${k*14} 96 C ${k*4} 96 0 80 0 60 Z" fill="#F7A9BE" stroke="#C2416B" stroke-width="1.4"/>
       <path d="M0 12 Q ${k*14} 30 ${k*18} 52 M${k*8} 30 Q ${k*26} 44 ${k*30} 70" stroke="#C2416B" stroke-width=".9" fill="none" opacity=".7"/></g>`; };
    let ribs=''; for(let i=0;i<5;i++){ const y=72+i*15; ribs+=`<path d="M100 ${y-6} Q ${40-3*v*amp*6} ${y+2} 48 ${y+16}" stroke="var(--muted)" stroke-width="2" fill="none" opacity=".45"/><path d="M100 ${y-6} Q ${160+3*v*amp*6} ${y+2} 152 ${y+16}" stroke="var(--muted)" stroke-width="2" fill="none" opacity=".45"/>`; }
    const dia = `<path d="M34 ${168+dy} Q 100 ${118+dy*1.5} 166 ${168+dy}" stroke="#B5487A" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    // phế dung đồ (spirogram) 12 giây
    const x0=206, x1=314, yb=200, yt=40, win=12; let pts='';
    if(!RM()){ for(let i=0;i<=90;i++){ const tt=t-win+win*i/90; const vv=lungFrac(tt,f)*V; pts+=`${(x0+(x1-x0)*i/90).toFixed(1)},${(yb-vv/2500*(yb-yt)).toFixed(1)} `; } }
    else { for(let i=0;i<=90;i++){ const tt=win*i/90; const vv=lungFrac(tt,f)*V; pts+=`${(x0+(x1-x0)*i/90).toFixed(1)},${(yb-vv/2500*(yb-yt)).toFixed(1)} `; } }
    svg.innerHTML = `
      <path d="M100 10 q -12 0 -12 12 q 0 10 12 12 q 12 -2 12 -12 q 0 -12 -12 -12z" fill="#F6D3B5" opacity=".9"/>
      <path d="M40 60 Q 30 120 34 ${170+dy} L166 ${170+dy} Q 170 120 160 60 Q 130 44 100 44 Q 70 44 40 60 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>
      ${ribs}
      ${lung(-1)}${lung(1)}
      <path d="M100 30 V62 M100 62 L 86 72 M100 62 L114 72" stroke="#8C5AB8" stroke-width="5" fill="none" stroke-linecap="round"/>
      ${dia}
      <text x="100" y="${186+dy}" class="svgt" text-anchor="middle" style="fill:#B5487A" font-weight="700">cơ hoành</text>
      <text x="8" y="100" class="svgm">phổi</text>
      <text x="108" y="46" class="svgm">khí quản</text>
      <text x="100" y="222" class="svgt" text-anchor="middle" font-weight="700">${RM()?'Bật chuyển động để xem phổi thở':(inh?'⬇ Hít vào: cơ hoành co, hạ xuống':'⬆ Thở ra: cơ hoành dãn, nâng lên')}</text>
      <rect x="${x0-4}" y="${yt-6}" width="${x1-x0+8}" height="${yb-yt+12}" rx="8" fill="var(--card)" stroke="var(--line)"/>
      <text x="${(x0+x1)/2}" y="22" class="svgt" text-anchor="middle" font-weight="700">Lượng khí hít vào</text>
      ${[500,1000,1500,2000,2500].map(q=>`<line x1="${x0}" y1="${yb-q/2500*(yb-yt)}" x2="${x1}" y2="${yb-q/2500*(yb-yt)}" stroke="var(--line)"/><text x="${x1}" y="${yb-q/2500*(yb-yt)-2}" class="svgm" text-anchor="end" font-size="8">${fmt(q)}</text>`).join('')}
      <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="${(x0+x1)/2}" y="${yb+18}" class="svgm" text-anchor="middle">12 giây gần nhất (mL)</text>`;
    if(!RM()) raf=requestAnimationFrame(draw);
  }
  function calc(){
    const f=val('br-f'), V=val('br-v'); const VE=f*V, VA=Math.max(0,V-DEAD)*f, VD=Math.min(V,DEAD)*f;
    const state=$('br-st').value;
    $('br-res').innerHTML = `<div class="big">Thông khí phút = ${fmt(V)} × ${f} = ${fmt(VE)} mL ≈ ${fmt(VE/1000,1)} L/phút</div>
      Khí vào phế nang mỗi phút = (${fmt(V)} − 150) × ${f} = <b>${fmt(VA)} mL</b>${VE>0?` (${fmt(VA/VE*100,0)}% thông khí phút)`:''}<br>
      Khí nằm lại ở khoảng chết: ${fmt(Math.min(V,DEAD))} × ${f} = ${fmt(VD)} mL/phút.
      ${V<=DEAD?`<br><span class="sl-bad">Khí lưu thông chỉ ${fmt(V)} mL, không vượt quá khoảng chết 150 mL: gần như không có khí mới tới phế nang!</span>`:''}
      ${state==='ex'?`<br>Khi tập, cơ cần nhiều O₂ và thải nhiều CO₂ nên em thở <b>nhanh và sâu</b> hơn: thông khí phút tăng khoảng ${fmt(VE/8000,1)} lần so với lúc nghỉ.`:''}
      <br><span class="sl-sub">Ước lượng: cơ thể lấy khoảng (20,96% − 16,40%) × ${fmt(VE)} ≈ ${fmt(VE*0.0456,0)} mL O₂ mỗi phút.</span>`;
  }
  $('br-st').addEventListener('change',()=>{ const s=$('br-st').value; if(s==='rest'){setSlider('br-f',16);setSlider('br-v',500);} if(s==='ex'){setSlider('br-f',30);setSlider('br-v',1500);} calc(); if(RM()) draw(performance.now()); });
  sec.querySelectorAll('input[type=range]').forEach(el=>el.addEventListener('input',()=>{ $('br-st').value='custom'; }));
  bindSliders(sec, ()=>{ calc(); if(RM()) draw(performance.now()); });
  calc();
  stopAnim = ()=>{ if(raf){ cancelAnimationFrame(raf); raf=null; } };
  if(RM()) draw(performance.now()); else raf=requestAnimationFrame(draw);
}

/* =====================================================================
   5. CÂN BẰNG NƯỚC
   ===================================================================== */
const WEATHER = {
  cool:{n:'Mát mẻ (~22 °C)', skin:0.5, sweat:0.5, breath:0.4, note:'Trời mát, mồ hôi ít, bay hơi nhanh.'},
  hn:{n:'Hè Hà Nội nóng ẩm (~35 °C, ẩm 75%)', skin:1.0, sweat:0.9, breath:0.35, note:'Không khí ẩm nên mồ hôi bay hơi chậm, đọng lại trên da; cơ thể phải tiết nhiều mồ hôi hơn mới toả đủ nhiệt.'},
  dubai:{n:'Hè Dubai nóng khô (~42 °C, ẩm 25%)', skin:1.4, sweat:1.2, breath:0.5, note:'Rất nóng và khô: mồ hôi bay hơi ngay nên em có thể không thấy ướt áo nhưng vẫn mất rất nhiều nước; hơi thở cũng mang theo nhiều hơi nước hơn.'},
  cold:{n:'Đông lạnh (~12 °C)', skin:0.4, sweat:0.35, breath:0.45, note:'Trời lạnh ít mồ hôi, nhưng không khí khô lạnh làm hơi thở mất nhiều hơi nước; ngày lạnh em hay quên uống nước.'}
};
const URINE = ['#FBF8E0','#F8F1B4','#F5E67E','#F1D64C','#E7BF2E','#D9A31D','#C08414','#9F6A10'];
function sinh_water(p){
  p.innerHTML = CSS + `<div class="sec lab" id="wt-sec"><h3>💧 Cân bằng nước một ngày</h3>
   <p class="muted">Nước vào phải bằng nước ra. Chọn thời tiết, thời gian vận động và cân nặng. Đoán trước: ngày hè có giờ thể dục, em cần uống bao nhiêu cốc 250 mL?</p>
   <div class="ctrl">
    <div><label for="wt-wx">Thời tiết</label><select id="wt-wx">${Object.entries(WEATHER).map(([k,w])=>`<option value="${k}">${w.n}</option>`).join('')}</select></div>
    <div>${slider('wt-ex','Vận động (thể dục, chạy nhảy)',0,180,15,45,'phút')}</div>
    <div>${slider('wt-w','Cân nặng',30,70,1,45,'kg')}</div>
   </div>
   <svg viewBox="0 0 320 210" id="wt-svg" role="img" aria-label="Bình nước và cân bằng nước vào, ra"></svg>
   <div class="sl-btnrow"><button class="btn" id="wt-d1">🥤 Uống 1 cốc (250 mL)</button><button class="btn ghost" id="wt-d2">Uống nửa cốc</button><button class="btn ghost" id="wt-d0">Đổ lại từ đầu</button></div>
   <div class="readout" id="wt-res"></div>
   <div class="sl-try"><b>Thử:</b> Giữ nguyên 45 phút vận động, đổi thời tiết từ “Mát mẻ” sang “Hè Hà Nội” rồi “Hè Dubai”. Lượng nước cần uống thay đổi thế nào? Phần nào trong “nước ra” tăng nhiều nhất?</div>
  </div>
  <div class="sec lab" id="wt-sec2"><h3>🚽 Bảng màu nước tiểu</h3>
   <p class="muted">Màu nước tiểu là “đèn báo” đơn giản. Bấm vào màu giống nhất với lần đi vệ sinh gần đây của em.</p>
   <div class="sl-swatch" id="wt-sw">${URINE.map((c,i)=>`<button style="background:${c}" data-u="${i+1}" aria-pressed="false" aria-label="Màu số ${i+1}">${i+1}</button>`).join('')}</div>
   <div class="row sl-sub" style="justify-content:space-between"><span>⬅ đủ nước</span><span>thiếu nước ➡</span></div>
   <div class="readout" id="wt-ures">Chọn một màu để xem nhận xét.</div>
   <p class="sl-sub">Lưu ý: uống vitamin nhóm B có thể làm nước tiểu vàng tươi; ăn thanh long ruột đỏ, củ dền có thể làm nước tiểu hồng đỏ. Nếu nước tiểu đỏ, nâu sẫm như trà đặc hoặc buốt khi đi tiểu mà không rõ lý do, hãy báo bố mẹ để đi khám.</p></div>`;
  const sec=$('wt-sec'); let drunk=0;
  function model(){
    const W=val('wt-w'), h=val('wt-ex')/60, w=WEATHER[$('wt-wx').value]; const s=Math.sqrt(W/55);
    const out={urine:1.5*s, skin:w.skin*s + w.sweat*h, breath:w.breath*s + 0.1*h, feces:0.1};
    const inn={food:0.7*s, met:0.3*s + 0.05*h};
    const O=out.urine+out.skin+out.breath+out.feces, I=inn.food+inn.met;
    const need=Math.max(0, O-I);
    return {W,h,w,s,out,inn,O,I,need};
  }
  function draw(){
    const m=model(); const need=m.need, cups=Math.ceil(need/0.25-1e-9);
    const svg=$('wt-svg');
    // bình nước: chứa tối đa max(need, drunk) * 1.15
    const cap = Math.max(need*1.15, drunk*1.05, 1);
    const bx=24, bw=70, by=40, bh=150; const lv = clamp(drunk/cap,0,1)*bh; const needY = by+bh - need/cap*bh;
    let ticks=''; for(let k=1;k*0.25<=cap+1e-9;k++){ const y=by+bh-(k*0.25)/cap*bh; if(bh/(cap/0.25)>5 || k%2===0) ticks+=`<line x1="${bx+bw-10}" y1="${y}" x2="${bx+bw}" y2="${y}" stroke="var(--muted)" stroke-width="1"/>`; }
    // cột vào/ra
    const tot=Math.max(m.O, m.I+drunk, 0.1); const cx0=150, cw=160, sc=cw/(tot*1.02);
    const seg=(arr,y,label)=>{ let x=cx0, s=`<text x="${cx0}" y="${y-5}" class="svgt" font-weight="700">${label}</text>`; arr.forEach(([v,c,n])=>{ if(v<=0) return; const w=v*sc; s+=`<rect x="${x}" y="${y}" width="${w}" height="22" fill="${c}" stroke="var(--card)" stroke-width="1"/>`; if(w>26) s+=`<text x="${x+w/2}" y="${y+15}" text-anchor="middle" style="fill:#2A1630;font-size:9.5px;font-weight:700;font-family:inherit">${n}</text>`; x+=w; }); return s; };
    const inArr=[[drunk,'#6CB8F0','uống'],[m.inn.food,'#9FD27A','ăn'],[m.inn.met,'#F2C14E','c.hoá']];
    const outArr=[[m.out.urine,'#F1D64C','tiểu'],[m.out.skin,'#F7A9BE','da'],[m.out.breath,'#C9B3F2','thở'],[m.out.feces,'#C79A6B','']];
    const bal = m.I+drunk - m.O;
    svg.innerHTML = `
      <rect x="${bx+22}" y="${by-22}" width="26" height="14" rx="4" fill="var(--accent)"/>
      <path d="M${bx+16} ${by-8} h38 v8 h-38z" fill="var(--muted)" opacity=".5"/>
      <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="16" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <clipPath id="wt-clip"><rect x="${bx+2}" y="${by+2}" width="${bw-4}" height="${bh-4}" rx="14"/></clipPath>
      <g clip-path="url(#wt-clip)"><rect x="${bx}" y="${by+bh-lv}" width="${bw}" height="${lv}" fill="#6CB8F0" opacity=".85"/>
       <rect x="${bx}" y="${by+bh-lv}" width="${bw}" height="4" fill="#A9D6F7"/></g>
      ${ticks}
      <line x1="${bx-6}" y1="${needY}" x2="${bx+bw+6}" y2="${needY}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="5 3"/>
      <text x="${bx+bw/2}" y="${needY-5}" class="svgm" text-anchor="middle" style="fill:var(--bad)" font-weight="700">cần ${fmt(need,2)} L</text>
      <text x="${bx+bw/2}" y="${by+bh+16}" class="svgt" text-anchor="middle" font-weight="700">đã uống ${fmt(drunk,2)} L</text>
      ${seg(inArr,58,'Nước vào: '+fmt(m.I+drunk,2)+' L')}
      ${seg(outArr,118,'Nước ra: '+fmt(m.O,2)+' L')}
      <text x="${cx0}" y="166" class="svgt" font-weight="800" style="fill:${Math.abs(bal)<0.125?'var(--ok)':(bal<0?'var(--bad)':'var(--accent)')}">${Math.abs(bal)<0.125?'Cân bằng rồi ✓':(bal<0?'Còn thiếu '+fmt(-bal,2)+' L':'Dư '+fmt(bal,2)+' L')}</text>
      <text x="${cx0}" y="184" class="svgm">${bal< -0.125?'≈ '+Math.ceil(-bal/0.25-1e-9)+' cốc 250 mL nữa':(bal>0.125?'thận sẽ thải bớt qua nước tiểu':'nước vào = nước ra')}</text>`;
    const r=$('wt-res');
    r.innerHTML = `<div class="big">Cần uống khoảng ${fmt(need,2)} L ≈ ${cups} cốc 250 mL</div>
      Nước ra: tiểu ${fmt(m.out.urine,2)} + da/mồ hôi ${fmt(m.out.skin,2)} + thở ${fmt(m.out.breath,2)} + phân ${fmt(m.out.feces,2)} = <b>${fmt(m.O,2)} L</b><br>
      Không cần uống: nước trong thức ăn ${fmt(m.inn.food,2)} + nước do chuyển hoá ${fmt(m.inn.met,2)} = ${fmt(m.I,2)} L<br>
      Cần uống = ${fmt(m.O,2)} − ${fmt(m.I,2)} = <b>${fmt(need,2)} L</b>.
      ${m.h>0?`<br>${fmt(m.h*60)} phút vận động làm em mất thêm khoảng ${fmt(m.w.sweat*m.h,2)} L mồ hôi.`:''}
      <br><span class="sl-sub">${m.w.note} Số liệu bài học (người lớn, ngày mát): vào 2,5 L = uống 1,5 + thức ăn 0,7 + chuyển hoá 0,3; ra 2,5 L = tiểu 1,5 + da 0,5 + thở 0,4 + phân 0,1. Ở đây được điều chỉnh gần đúng theo cân nặng, thời tiết.</span>
      ${drunk>=need-1e-9 && need>0 ? `<br><span class="sl-ok">Em đã uống đủ cho hôm nay! 🎉</span> Uống rải rác cả ngày tốt hơn uống một hơi thật nhiều.`:''}
      ${drunk>need+1 ? `<br><span class="sl-sub">Uống dư một chút thì thận thải bớt qua nước tiểu (nước tiểu nhạt màu hơn). Không cần ép uống quá nhiều.</span>`:''}`;
  }
  $('wt-d1').onclick=()=>{ drunk=Math.min(6, drunk+0.25); draw(); };
  $('wt-d2').onclick=()=>{ drunk=Math.min(6, drunk+0.125); draw(); };
  $('wt-d0').onclick=()=>{ drunk=0; draw(); };
  bindSliders(sec, draw); draw();
  const UC = [
    ['ok','Trong, gần như không màu: em uống đủ nước, thậm chí hơi nhiều. Không sao cả, có thể giãn bớt lượng uống.'],
    ['ok','Vàng rất nhạt: cơ thể đủ nước. Rất tốt!'],
    ['ok','Vàng nhạt trong: đủ nước, thận đang làm việc thoải mái.'],
    ['warn','Vàng: vẫn ổn, nhưng em nên uống thêm một cốc nước trong giờ tới.'],
    ['warn','Vàng đậm: hơi thiếu nước. Thận đang tăng tái hấp thụ nước ở ống thận nên nước tiểu đặc hơn. Uống 1–2 cốc nước nhé.'],
    ['bad','Vàng sẫm: thiếu nước. Hay gặp sau giờ thể dục, ngày nắng nóng. Uống nước từng ngụm, nghỉ ở chỗ mát.'],
    ['bad','Vàng nâu: thiếu nước khá nhiều. Uống nước ngay; nếu kèm chóng mặt, mệt lả thì báo người lớn.'],
    ['bad','Màu hổ phách sẫm: thiếu nước nhiều. Uống nước và báo bố mẹ. Nếu đã uống đủ mà vẫn sẫm như vậy, cần đi khám.']
  ];
  $('wt-sw').querySelectorAll('[data-u]').forEach(b=>b.onclick=()=>{
    $('wt-sw').querySelectorAll('[data-u]').forEach(x=>x.setAttribute('aria-pressed', x===b?'true':'false'));
    const i=+b.dataset.u-1, [lv,t]=UC[i];
    $('wt-ures').innerHTML = `<div class="big"><span style="display:inline-block;width:20px;height:20px;border-radius:6px;background:${URINE[i]};border:1.5px solid var(--line);vertical-align:-3px"></span> Màu số ${i+1}: <span class="sl-${lv}">${lv==='ok'?'đủ nước':(lv==='warn'?'nên uống thêm':'thiếu nước')}</span></div>${t}`;
  });
}

/* =====================================================================
   6. PHẢN XẠ
   ===================================================================== */
function sinh_reflex(p){
  p.innerHTML = CSS + `<div class="sec lab" id="rf-sec"><h3>⚡ Đo thời gian phản xạ</h3>
   <p class="muted">Bấm “Bắt đầu”. Ô sẽ chuyển hồng (chờ…), sau 1,5–4 giây bất chợt chuyển <b>xanh</b>: bấm vào ô thật nhanh! Đoán trước: em phản xạ mất bao nhiêu mili giây?</p>
   <button class="sl-react" id="rf-box" type="button">Sẵn sàng?<small>Bấm “Bắt đầu” hoặc chạm vào ô này</small></button>
   <div class="sl-btnrow"><button class="btn" id="rf-start">Bắt đầu</button><button class="btn ghost" id="rf-reset">Chơi lại từ đầu</button></div>
   <div class="sl-tries" id="rf-tries"></div>
   <div class="readout" id="rf-res"></div>
   <svg viewBox="0 0 320 200" id="rf-svg" role="img" aria-label="Đường đi của xung thần kinh" style="margin-top:10px"></svg>
   <p style="font-size:14.5px">Mắt thấy màu xanh → <b>dây thần kinh thị giác</b> đưa xung lên <b>não</b> (vùng thị giác nhận ra màu, vùng vận động ra lệnh) → xung đi xuống <b>tuỷ sống</b> → <b>dây thần kinh vận động</b> → <b>cơ ngón tay</b> co, em bấm. Đây là phản xạ có điều kiện, phải qua não “suy nghĩ” nên chậm hơn phản xạ rụt tay khi chạm nồi nóng (chỉ cần qua tuỷ sống).</p>
   <p style="font-size:14.5px">Xung thần kinh trên sợi có bao myelin đi khoảng <b>50–100 m/s</b>. Quãng đường mắt → não → tay chỉ chừng 1–1,5 m nên dẫn truyền trên dây thần kinh chỉ mất khoảng 10–30 ms. Phần lớn thời gian còn lại là để màng lưới cảm nhận ánh sáng, não xử lý, ra quyết định và xung đi qua các xinap.</p>
   <p class="sl-sub">Màn hình cảm ứng và chuột cũng có độ trễ khoảng vài chục mili giây, nên kết quả trên điện thoại thường chậm hơn thực tế một chút.</p></div>
  <div class="sec lab" id="rf-sec2"><h3>📏 Thí nghiệm bắt thước rơi</h3>
   <p class="muted">Bạn thả thước rơi tự do giữa hai ngón tay em; em bắt được khi thước đã rơi một đoạn d. Thước rơi càng xa, phản xạ càng chậm. Kéo d để tính thời gian.</p>
   <svg viewBox="0 0 320 200" id="rf-rsvg" role="img" aria-label="Thước rơi và đồ thị thời gian"></svg>
   <div class="ctrl"><div>${slider('rf-d','Quãng thước rơi d',2,45,0.5,20,'cm')}</div></div>
   <div class="readout" id="rf-rres"></div></div>`;
  const box=$('rf-box'); let state='idle', timer=null, tGo=0, raf=null; let tries=[];
  const svg=$('rf-svg');
  const PATH = 'M58 70 C 80 40, 110 34, 140 40 C 160 44, 168 60, 170 78 L 170 150 C 170 160, 190 164, 214 160 C 244 154, 262 150, 286 150';
  function drawPath(dot){
    svg.innerHTML = `<path d="${PATH}" fill="none" stroke="var(--line)" stroke-width="7" stroke-linecap="round"/>
      <path d="${PATH}" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-dasharray="5 5" id="rf-pth"/>
      <g><ellipse cx="48" cy="72" rx="16" ry="10" fill="var(--card)" stroke="var(--ink)" stroke-width="1.4"/><circle cx="52" cy="72" r="5" fill="#5B3B6E"/><circle cx="53.5" cy="70.5" r="1.5" fill="#fff"/></g>
      <text x="48" y="98" class="svgt" text-anchor="middle" font-weight="700">mắt</text>
      <path d="M118 36 C 112 10, 168 6, 178 22 C 196 16, 206 44, 190 56 C 186 70, 140 72, 128 60 C 108 60, 108 44, 118 36 Z" fill="#F7C6DA" stroke="#B5487A" stroke-width="1.4"/>
      <text x="154" y="44" class="svgt" text-anchor="middle" font-weight="700" style="fill:#5A1430">não</text>
      <rect x="164" y="76" width="12" height="70" rx="6" fill="#F7C6DA" stroke="#B5487A" stroke-width="1.2"/>
      <text x="182" y="112" class="svgt" font-weight="700">tuỷ sống</text>
      <path d="M284 134 q 14 -2 22 8 q 4 8 -4 12 l-18 4 q -8 0 -8 -10 q 0 -12 8 -14z" fill="#F6D3B5" stroke="var(--ink)" stroke-width="1.2"/>
      <text x="290" y="178" class="svgt" text-anchor="middle" font-weight="700">cơ tay</text>
      <text x="104" y="86" class="svgm" text-anchor="middle">dây TK thị giác</text>
      <text x="226" y="148" class="svgm" text-anchor="middle">dây TK vận động</text>
      ${dot?`<circle id="rf-dot" r="6" fill="var(--bad)" stroke="var(--card)" stroke-width="2" cx="${dot[0]}" cy="${dot[1]}"/>`:''}`;
  }
  drawPath(null);
  function pulseAnim(){
    if(RM()) return;
    const pth=$('rf-pth'); if(!pth) return; const L=pth.getTotalLength(); const t0=performance.now(), dur=1600;
    const step=now=>{ const k=Math.min(1,(now-t0)/dur); const pt=pth.getPointAtLength(L*k); drawPath([pt.x,pt.y]); if(k<1) raf=requestAnimationFrame(step); else { raf=null; drawPath(null); } };
    if(raf) cancelAnimationFrame(raf); raf=requestAnimationFrame(step);
  }
  function setBox(cls, html){ box.className='sl-react'+(cls?' '+cls:''); box.innerHTML=html; }
  function start(){
    if(tries.length>=5) tries=[];
    clearTimeout(timer); state='wait';
    setBox('wait','Chờ…<small>Khi ô chuyển xanh thì bấm!</small>');
    const delay = 1500 + Math.random()*2500;
    timer=setTimeout(()=>{ state='go'; setBox('go','BẤM!'); tGo=performance.now(); }, delay);
    renderTries();
  }
  function hit(){
    if(state==='idle' || state==='done' || state==='early'){ start(); return; }
    if(state==='wait'){ clearTimeout(timer); state='early'; setBox('early','Hơi vội rồi! 🙈<small>Ô chưa xanh. Chạm để thử lại lượt này</small>'); return; }
    if(state==='go'){ const ms=Math.round(performance.now()-tGo); tries.push(ms); state='done';
      setBox('', `${ms} ms<small>${tries.length<5?'Chạm để làm lượt '+(tries.length+1)+'/5':'Xong 5 lượt! Chạm để chơi lại'}</small>`);
      renderTries(); pulseAnim(); }
  }
  box.addEventListener('pointerdown', e=>{ e.preventDefault(); hit(); });
  box.addEventListener('keydown', e=>{ if(e.key===' '||e.key==='Enter'){ e.preventDefault(); if(!e.repeat) hit(); } });
  box.addEventListener('click', e=>e.preventDefault());
  $('rf-start').onclick=()=>start();
  $('rf-reset').onclick=()=>{ clearTimeout(timer); tries=[]; state='idle'; setBox('','Sẵn sàng?<small>Bấm “Bắt đầu” hoặc chạm vào ô này</small>'); renderTries(); };
  function renderTries(){
    let h=''; for(let i=0;i<5;i++) h+= i<tries.length? `<span>Lượt ${i+1}: ${tries[i]} ms</span>` : `<span class="e">Lượt ${i+1}: …</span>`;
    $('rf-tries').innerHTML=h;
    const r=$('rf-res');
    if(!tries.length){ r.innerHTML=`<div class="big">Chưa có lượt nào</div>Mức thường gặp ở học sinh: khoảng <b>200–300 ms</b> (0,2–0,3 s).`; return; }
    const avg=tries.reduce((a,b)=>a+b,0)/tries.length; const best=Math.min(...tries);
    const cmt = avg<200? `<span class="sl-ok">Rất nhanh!</span> Nhanh hơn mức thường gặp.` : avg<=300? `<span class="sl-ok">Bình thường ✓</span> Nằm trong mức thường gặp 200–300 ms.` : avg<=400? `<span class="sl-warn">Hơi chậm một chút</span>, có thể do màn hình cảm ứng trễ, em đang mệt hoặc chưa tập trung. Thử lại khi tỉnh táo nhé.` : `<span class="sl-warn">Chậm hơn mức thường</span>: có lẽ em bị phân tâm hoặc thiết bị trễ. Ngủ đủ, tập trung giúp phản xạ nhanh hơn.`;
    const dCar = 30/3.6*avg/1000;
    const dRuler = 0.5*9.8*Math.pow(avg/1000,2)*100;
    r.innerHTML = `<div class="big">Trung bình ${tries.length} lượt: ${fmt(avg,0)} ms = ${fmt(avg/1000,3)} s</div>Nhanh nhất: ${best} ms. ${cmt}
      <br>Trong ${fmt(avg/1000,2)} s đó, một xe đạp điện chạy 30 km/h đã đi thêm ≈ ${fmt(dCar,1)} m trước khi người lái kịp phanh. Vì vậy không nhìn điện thoại khi đi đường!
      <br><span class="sl-sub">Với thời gian này, trong thí nghiệm bắt thước, thước sẽ rơi khoảng d = g·t²/2 ≈ ${fmt(dRuler,1)} cm.</span>`;
  }
  renderTries();

  // Thước rơi
  const rsec=$('rf-sec2');
  function drawRuler(){
    const d=val('rf-d'), t=Math.sqrt(2*d/100/9.8);
    const k=3.3, y0=14; // px/cm
    let ticks=''; for(let c=0;c<=45;c++){ const y=y0+c*k; const big=c%5===0; ticks+=`<line x1="40" y1="${y}" x2="${big?52:46}" y2="${y}" stroke="#3B2A10" stroke-width="${big?1.2:.7}"/>`+(big?`<text x="56" y="${y+3.5}" style="fill:#3B2A10;font-size:8.5px;font-family:inherit">${c}</text>`:''); }
    const yh=y0+d*k;
    // đồ thị t(d)
    const gx0=128, gx1=308, gy0=166, gy1=24, dMax=45, tMax=0.32;
    let curve=''; for(let i=0;i<=60;i++){ const dd=2+(dMax-2)*i/60; const tt=Math.sqrt(2*dd/100/9.8); curve+=`${(gx0+(dd/dMax)*(gx1-gx0)).toFixed(1)},${(gy0-tt/tMax*(gy0-gy1)).toFixed(1)} `; }
    const px=gx0+d/dMax*(gx1-gx0), py=gy0-t/tMax*(gy0-gy1);
    const band = `<rect x="${gx0}" y="${gy0-0.3/tMax*(gy0-gy1)}" width="${gx1-gx0}" height="${(0.1/tMax)*(gy0-gy1)}" fill="var(--ok-soft)"/>`;
    $('rf-rsvg').innerHTML = `
      <rect x="38" y="8" width="34" height="${45*k+12}" rx="3" fill="#F2D27A" stroke="#8A6A00"/>
      ${ticks}
      <path d="M8 ${yh-9} q 20 -6 30 4 l0 4 q -14 2 -30 -2z" fill="#F6D3B5" stroke="var(--ink)" stroke-width="1"/>
      <path d="M8 ${yh+9} q 20 6 30 -4 l0 -4 q -14 -2 -30 2z" fill="#F6D3B5" stroke="var(--ink)" stroke-width="1"/>
      <line x1="30" y1="${yh}" x2="80" y2="${yh}" stroke="var(--bad)" stroke-width="2"/>
      <text x="84" y="${clamp(yh+4,20,170)}" class="svgt" font-weight="700" style="fill:var(--bad)">${fmt(d,1)} cm</text>
      ${band}
      <line x1="${gx0}" y1="${gy0}" x2="${gx1}" y2="${gy0}" stroke="var(--ink)"/><line x1="${gx0}" y1="${gy0}" x2="${gx0}" y2="${gy1}" stroke="var(--ink)"/>
      ${[0.1,0.2,0.3].map(v=>`<text x="${gx0-4}" y="${gy0-v/tMax*(gy0-gy1)+3}" class="svgm" text-anchor="end">${fmt(v,1)}</text><line x1="${gx0}" y1="${gy0-v/tMax*(gy0-gy1)}" x2="${gx1}" y2="${gy0-v/tMax*(gy0-gy1)}" stroke="var(--line)"/>`).join('')}
      ${[10,20,30,40].map(v=>`<text x="${gx0+v/dMax*(gx1-gx0)}" y="${gy0+12}" class="svgm" text-anchor="middle">${v}</text>`).join('')}
      <polyline points="${curve}" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <line x1="${px}" y1="${gy0}" x2="${px}" y2="${py}" stroke="var(--bad)" stroke-dasharray="3 3"/><line x1="${gx0}" y1="${py}" x2="${px}" y2="${py}" stroke="var(--bad)" stroke-dasharray="3 3"/>
      <circle cx="${px}" cy="${py}" r="4.5" fill="var(--bad)"/>
      <text x="${gx0+4}" y="${gy1-8}" class="svgm">t (s)</text><text x="${gx1}" y="${gy0+27}" class="svgm" text-anchor="end">d (cm)</text>
      <text x="${gx0+5}" y="${gy0-0.3/tMax*(gy0-gy1)+11}" class="svgm" style="fill:var(--ok)">mức thường gặp</text>`;
    $('rf-rres').innerHTML = `<div class="big">t = √(2d / g) = √(2 × ${fmt(d/100,3)} / 9,8) ≈ ${fmt(t,3)} s ≈ ${fmt(t*1000,0)} ms</div>
      Nhớ đổi d sang mét (${fmt(d,1)} cm = ${fmt(d/100,3)} m), g = 9,8 m/s². ${t<0.2?'Bắt thước rất nhanh!':t<=0.3?'Nằm trong mức thường gặp 0,2–0,3 s.':'Hơi chậm hơn mức thường gặp.'}
      <br><span class="sl-sub">Bài tập ★★: d = 20 cm → t ≈ 0,20 s. Thước dài 30 cm thì chỉ đo được phản xạ tới khoảng ${fmt(Math.sqrt(2*0.3/9.8),2)} s.</span>`;
  }
  bindSliders(rsec, drawRuler); drawRuler();
  stopAnim = ()=>{ clearTimeout(timer); timer=null; if(raf){ cancelAnimationFrame(raf); raf=null; } };
}

/* =====================================================================
   7. CHUỖI THỨC ĂN + QUẦN THỂ THỎ – CÁO
   ===================================================================== */
const CHAINS = {
  rice:{n:'Lúa → châu chấu → ếch → rắn → đại bàng', s:[['🌾','Lúa'],['🦗','Châu chấu'],['🐸','Ếch'],['🐍','Rắn'],['🦅','Đại bàng']]},
  grass:{n:'Cỏ → thỏ → cáo (ví dụ trong bài)', s:[['🌿','Cỏ'],['🐇','Thỏ'],['🦊','Cáo']]},
  frog:{n:'Cỏ → châu chấu → ếch (bài tập ★)', s:[['🌿','Cỏ'],['🦗','Châu chấu'],['🐸','Ếch']]}
};
const TIER_COL = ['#7CCB8E','#F2C14E','#F59E6B','#E86FB4','#A66BE0'];
const ECO = {Km:1000, r:1.0, g:0.6, c:1.2, s:30, H:100, e:0.02, m:0.4};
function ecoStep(st){
  const {R,F,G}=st; const K=Math.max(1, ECO.Km*G/100);
  const eat = F>0 ? Math.min(R*0.9, ECO.s*F*R/(R+ECO.H)) : 0;
  let R2 = R + ECO.r*R*(1-R/K) - eat;
  let G2 = G + ECO.g*G*(1-G/100) - ECO.c*(R/ECO.Km)*G;
  let F2 = F + ECO.e*eat - ECO.m*F;
  R2=Math.max(0,R2); G2=clamp(G2,3,100); F2=Math.max(0,F2);
  if(F2<0.5) F2=0; if(R2<1) R2=0;
  return {R:R2,F:F2,G:G2};
}
function sinh_food(p){
  p.innerHTML = CSS + `<div class="sec lab" id="fd-sec"><h3>🔺 Tháp năng lượng</h3>
   <p class="muted">Năng lượng đi từ sinh vật sản xuất lên các bậc trên, mỗi bậc chỉ giữ lại một phần. Đoán trước: nếu hiệu suất tăng từ 10% lên 20%, bậc cao nhất nhận nhiều hơn mấy lần?</p>
   <div class="ctrl">
    <div><label for="fd-ch">Chuỗi thức ăn</label><select id="fd-ch">${Object.entries(CHAINS).map(([k,c])=>`<option value="${k}">${c.n}</option>`).join('')}</select></div>
    <div><label><input type="checkbox" id="fd-log"> Vẽ theo thang “chia 10” (dễ nhìn bậc nhỏ)</label></div>
    <div>${slider('fd-e','Năng lượng sinh vật sản xuất',1000,100000,1000,10000,'kcal')}</div>
    <div>${slider('fd-h','Hiệu suất truyền H',5,20,1,10,'%')}</div>
   </div>
   <svg viewBox="0 0 320 210" id="fd-svg" role="img" aria-label="Tháp năng lượng"></svg>
   <div class="readout" id="fd-res"></div>
   <div class="sl-try"><b>Thử:</b> Chọn chuỗi “Cỏ → châu chấu → ếch”, để 10 000 kcal và H = 10%: ếch nhận bao nhiêu? (bài tập ★). Sau đó tìm xem cần bao nhiêu kcal lúa để đại bàng nhận được 10 kcal.</div></div>
  <div class="sec lab" id="fd-sec2"><h3>🐇🦊 Thỏ, cáo và đồng cỏ</h3>
   <p class="muted">Mô hình đơn giản theo từng năm: thỏ ăn cỏ, cáo ăn thỏ. Bấm “Chạy tự động” để xem số lượng dao động rồi ổn định. Sau đó thử “Săn bắt hết cáo”: đoán xem thỏ và cỏ sẽ ra sao?</p>
   <svg viewBox="0 0 320 210" id="fd-psvg" role="img" aria-label="Đồ thị số lượng thỏ, cáo và độ phủ cỏ theo năm"></svg>
   <div class="sl-leg"><span><i style="background:#E86FB4"></i>Thỏ (con)</span><span><i style="background:#F59E6B"></i>Cáo (con × 20)</span><span><i style="background:#7CCB8E"></i>Cỏ phủ (% × 10)</span></div>
   <div class="sl-btnrow"><button class="btn" id="fd-auto">▶ Chạy tự động</button><button class="btn ghost" id="fd-1">+1 năm</button><button class="btn ghost" id="fd-hunt">🚫 Săn bắt hết cáo</button><button class="btn ghost" id="fd-add">🦊 Thả 6 con cáo</button><button class="btn ghost" id="fd-rs">↺ Làm lại</button></div>
   <div class="readout" id="fd-pres"></div></div>`;
  // ---------- Tháp ----------
  const sec=$('fd-sec');
  function drawPyr(){
    const ch=CHAINS[$('fd-ch').value], E0=val('fd-e'), H=val('fd-h')/100, lg=$('fd-log').checked;
    const n=ch.s.length; const E=ch.s.map((_,i)=>E0*Math.pow(H,i));
    const rowH = Math.min(36, 186/n), top = 12 + (186 - rowH*n);
    const maxW=170, cx=225;
    const wLog = i => maxW - i*(maxW-24)/Math.max(1,n-1);
    let s='';
    E.forEach((e,i)=>{ const y = top + (n-1-i)*rowH; const w = lg ? wLog(i) : Math.max(2,maxW*e/E0);
      s+=`<rect x="${(cx-w/2).toFixed(1)}" y="${y+2}" width="${w.toFixed(1)}" height="${rowH-4}" rx="4" fill="${TIER_COL[i]}" stroke="var(--ink)" stroke-width=".8"/>
        <text x="6" y="${y+rowH/2+4}" class="svgt" font-weight="700">${ch.s[i][0]} ${ch.s[i][1]}</text>
        <text x="132" y="${y+rowH/2+4}" class="svgt" text-anchor="end">${e>=10?fmt(e,0):fmt(e,e>=1?2:4)}</text>`;
    });
    s+=`<text x="132" y="${top-2}" class="svgm" text-anchor="end">kcal</text><text x="${cx}" y="${top-2}" class="svgm" text-anchor="middle">${lg?'mỗi tầng: chia ' + fmt(1/H,1) + ' lần':'chiều rộng đúng tỉ lệ'}</text>`;
    $('fd-svg').innerHTML=s;
    const last=E[n-1];
    const need10 = 10/Math.pow(H,n-1);
    $('fd-res').innerHTML = `<div class="big">${ch.s[n-1][1]} nhận ${fmt(E0)} × (${fmt(H*100)}%)<sup>${n-1}</sup> = ${last>=1?fmt(last,2):fmt(last,4)} kcal</div>
      ${E.slice(1).map((e,i)=>`${ch.s[i+1][1]}: ${fmt(E[i],E[i]<10?2:0)} × ${fmt(H*100)}% = ${fmt(e,e<10?(e<1?4:2):0)} kcal`).join('<br>')}
      <br>Mỗi bậc khoảng <b>${fmt(100-H*100)}%</b> năng lượng mất đi qua hô hấp (toả nhiệt), chất thải và phần không ăn được.
      <br>Muốn ${ch.s[n-1][1].toLowerCase()} nhận 10 kcal cần ${fmt(need10,0)} kcal ${ch.s[0][1].toLowerCase()}.
      <br><span class="sl-sub">Vì năng lượng giảm nhanh như vậy nên chuỗi thức ăn thường không dài quá 4–5 mắt xích, và hổ, đại bàng luôn ít hơn nhiều so với con mồi.</span>`;
  }
  bindSliders(sec, drawPyr); drawPyr();

  // ---------- Thỏ – cáo ----------
  let st, hist, year, timer=null, events;
  function reset(){ st={R:240,F:6,G:60}; hist=[{...st}]; year=0; events=[]; drawPop(); }
  function stepYear(){ st=ecoStep(st); year++; hist.push({...st}); if(hist.length>61) hist.shift(); drawPop(); }
  function drawPop(){
    const svg=$('fd-psvg'); const x0=34, x1=312, y0=180, y1=14; const N=60;
    const start = Math.max(0, year-(hist.length-1));
    const ymax = 800;
    const X = i => x0 + (i)/(N)*(x1-x0);
    const Y = v => y0 - clamp(v,0,ymax)/ymax*(y0-y1);
    const line = (fn,col,w)=> `<polyline points="${hist.map((h,i)=>X(i).toFixed(1)+','+Y(fn(h)).toFixed(1)).join(' ')}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linejoin="round"/>`;
    let grid=''; [0,200,400,600,800].forEach(v=>grid+=`<line x1="${x0}" y1="${Y(v)}" x2="${x1}" y2="${Y(v)}" stroke="var(--line)"/><text x="${x0-4}" y="${Y(v)+3}" class="svgm" text-anchor="end">${v}</text>`);
    for(let k=0;k<=N;k+=10){ grid+=`<text x="${X(k)}" y="${y0+13}" class="svgm" text-anchor="middle">${start+k}</text>`; }
    let ev=''; events.forEach(e=>{ const i=e.y-start; if(i>=0&&i<=N) ev+=`<line x1="${X(i)}" y1="${y1}" x2="${X(i)}" y2="${y0}" stroke="var(--muted)" stroke-dasharray="3 3"/><text x="${X(i)+3}" y="${y1+9}" class="svgm">${e.t}</text>`; });
    const area = `<polygon points="${X(0)},${y0} ${hist.map((h,i)=>X(i).toFixed(1)+','+Y(h.G*10).toFixed(1)).join(' ')} ${X(hist.length-1)},${y0}" fill="#7CCB8E" opacity=".28"/>`;
    svg.innerHTML = `${grid}${area}${ev}
      ${line(h=>h.G*10,'#4FA866',1.4)}${line(h=>h.F*20,'#F59E6B',2.4)}${line(h=>h.R,'#E86FB4',2.6)}
      <line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="var(--ink)"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="var(--ink)"/>
      <text x="${x1}" y="${y0+26}" class="svgm" text-anchor="end">năm</text>`;
    const prev = hist.length>1? hist[hist.length-2] : st;
    let msg;
    const noFox = st.F===0;
    if(noFox && st.R>prev.R+5) msg = `Không còn cáo khống chế, thỏ <b>tăng vọt</b>. Thỏ đông quá thì ăn trụi cỏ…`;
    else if(noFox && st.G < 40 && st.R < prev.R-5) msg = `Cỏ bị ăn trụi, thỏ thiếu thức ăn nên <b>chết đói hàng loạt</b>. Đồng cỏ xơ xác hơn hẳn so với lúc còn cáo.`;
    else if(noFox) msg = `Không có cáo, số thỏ chỉ còn bị giới hạn bởi lượng cỏ. Đồng cỏ bị gặm nhiều, phủ chỉ khoảng ${fmt(st.G,0)}%. Thử “Thả 6 con cáo” để khôi phục cân bằng.`;
    else if(Math.abs(st.R-prev.R)<4 && Math.abs(st.F-prev.F)<0.15) msg = `Số lượng thỏ và cáo <b>dao động quanh một mức ổn định</b>: đó là cân bằng tự nhiên. Thỏ nhiều → cáo có nhiều mồi nên tăng → thỏ bị ăn nhiều nên giảm → cáo thiếu mồi nên giảm theo.`;
    else if(st.R>prev.R) msg = `Thỏ đang tăng (nhiều cỏ, ít cáo). Cáo sẽ có nhiều mồi và tăng theo sau.`;
    else msg = `Thỏ đang giảm vì bị cáo ăn nhiều hoặc thiếu cỏ. Cáo sẽ thiếu mồi và giảm theo sau.`;
    $('fd-pres').innerHTML = `<div class="big">Năm ${year}: 🐇 ${fmt(st.R,0)} thỏ · 🦊 ${fmt(st.F,0)} cáo · 🌿 cỏ phủ ${fmt(st.G,0)}%</div>${msg}`;
  }
  function stopAuto(){ if(timer){ clearInterval(timer); timer=null; } const b=$('fd-auto'); if(b) b.textContent='▶ Chạy tự động'; }
  $('fd-auto').onclick=()=>{ if(timer){ stopAuto(); return; } timer=setInterval(stepYear, RM()?900:420); $('fd-auto').textContent='⏸ Dừng'; };
  $('fd-1').onclick=()=>{ stopAuto(); stepYear(); };
  $('fd-hunt').onclick=()=>{ st.F=0; hist[hist.length-1]={...st}; events.push({y:year,t:'săn hết cáo'}); drawPop(); };
  $('fd-add').onclick=()=>{ st.F+=6; hist[hist.length-1]={...st}; events.push({y:year,t:'thả cáo'}); drawPop(); };
  $('fd-rs').onclick=()=>{ stopAuto(); reset(); };
  reset();
  stopAnim = ()=>{ if(timer){ clearInterval(timer); timer=null; } };
}

Object.assign(window.LAB_EXT, { sinh_backpack, sinh_meal, sinh_blood, sinh_breath, sinh_water, sinh_reflex, sinh_food });
})();
