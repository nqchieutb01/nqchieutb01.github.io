/* Khám phá môn Lịch sử 8 (Lịch sử và Địa lí 8, Kết nối tri thức) */
window.LAB_EXT = window.LAB_EXT || {};
(function(){
const reduceMotion = () => { try{ return matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } };
const $ = id => document.getElementById(id);
/* Phép chiếu equirectangular: b = {lon0, lat1 (vĩ độ mép trên), s (px/độ vĩ), x0, y0, k (hệ số cos)} */
const proj = (b, lon, lat) => [b.x0 + (lon - b.lon0)*b.s*b.k, b.y0 + (b.lat1 - lat)*b.s];
const deg = (v, pos, neg) => Math.abs(v) + '°' + (v >= 0 ? pos : neg);
function haversine(a, b){
  const R = 6371, r = Math.PI/180, dLa = (b[0]-a[0])*r, dLo = (b[1]-a[1])*r;
  const h = Math.sin(dLa/2)**2 + Math.cos(a[0]*r)*Math.cos(b[0]*r)*Math.sin(dLo/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}
/* Lưới kinh vĩ tuyến trong khung (x1,y1)-(x2,y2) */
function grid(b, lons, lats, x1, y1, x2, y2){
  let s = '';
  lons.forEach(L => { const x = proj(b, L, 0)[0]; if(x < x1 || x > x2) return;
    s += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="var(--line)" stroke-dasharray="2 4"/><text class="svgm" x="${x+2}" y="${y2-3}" style="font-size:9px">${deg(L,'Đ','T')}</text>`; });
  lats.forEach(L => { const y = proj(b, 0, L)[1]; if(y < y1 || y > y2) return;
    s += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="var(--line)" stroke-dasharray="2 4"/><text class="svgm" x="${x1+2}" y="${y-3}" style="font-size:9px">${deg(L,'B','N')}</text>`; });
  return s;
}
/* CSS dùng chung cho các lab Lịch sử (tiền tố sux-) */
const SUX = `<style>
 .sux-top{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:14.5px;margin:8px 0;flex-wrap:wrap}
 .sux-chips{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}
 .sux-chip{border:1.5px solid var(--line);background:var(--paper);color:var(--ink);border-radius:999px;padding:6px 12px;font-size:14px;font-weight:600;line-height:1.3;text-align:left}
 .sux-chip.on{border-color:var(--accent);background:var(--accent-soft)}
 .sux-chip.ok{border-color:var(--ok);background:var(--ok-soft)}
 .sux-chip.no{border-color:var(--bad);background:var(--bad-soft)}
 .sux-chip:disabled{cursor:default}
 .sux-fb{margin-top:10px;padding:10px 12px;border-radius:12px;font-size:15px;background:var(--accent-soft)}
 .sux-fb:empty{display:none}
 .sux-fb.ok{background:var(--ok-soft)} .sux-fb.no{background:var(--bad-soft)}
 .sux-fb.ok>b:first-child{color:var(--ok)} .sux-fb.no>b:first-child{color:var(--bad)}
 .sux-h4{font-size:16.5px;margin:18px 0 4px}
 .sux-small{font-size:12.5px;color:var(--muted);margin:4px 0 0}
 .sux-shake{animation:suxsh .35s}
 @keyframes suxsh{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
 .sux-tbl table{width:100%;min-width:0;font-size:13.5px}
 .sux-tbl td,.sux-tbl th{padding:5px 7px;vertical-align:top}
 .sux-big{font-size:17px;font-weight:700}
 @media (prefers-reduced-motion:reduce){.sux-shake{animation:none}}
</style>`;
function shake(el){ if(!el) return; el.classList.remove('sux-shake'); void el.offsetWidth; el.classList.add('sux-shake'); }

Object.assign(window.LAB_EXT, {

/* =========================================================
   1. BA CUỘC CÁCH MẠNG TƯ SẢN + CÁCH MẠNG CÔNG NGHIỆP
   ========================================================= */
su_revo(p){
  const REV = {
    A:{n:'Anh', full:'Cách mạng tư sản Anh', ico:'👑', c:'#D9534F'},
    M:{n:'Bắc Mỹ', full:'Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ', ico:'🗽', c:'#2BA36B'},
    P:{n:'Pháp', full:'Cách mạng tư sản Pháp', ico:'🥖', c:'#4A7FE0'}
  };
  const CARDS = [
    {t:'Ô-li-vơ Crôm-oen', s:'Crôm-oen', r:'A', why:'Chỉ huy "quân đội kiểu mới" của Quốc hội đánh bại quân nhà vua; năm 1653 ông tự xưng Bảo hộ công, nắm mọi quyền hành.'},
    {t:'Xử tử vua Sác-lơ I (1649)', s:'Xử tử Sác-lơ I', r:'A', why:'Sác-lơ I bị xử tử theo bản án của toà án; nước Anh trở thành nước cộng hoà.'},
    {t:'Nội chiến giữa Vua và Quốc hội (1642–1648)', s:'Nội chiến 1642', r:'A', why:'Quốc hội, được tư sản và quý tộc mới ủng hộ, đánh nhau với phe nhà vua và thắng.'},
    {t:'Quý tộc mới liên minh với tư sản', s:'Quý tộc mới', r:'A', why:'Quý tộc mới là quý tộc làm ăn kiểu tư bản (rào đất, nuôi cừu lấy lông). Họ cùng tư sản lãnh đạo cách mạng Anh.'},
    {t:'Chính biến 1688, xác lập quân chủ lập hiến', s:'Chính biến 1688', r:'A', why:'Nhà vua vẫn còn nhưng "trị vì mà không cai trị", quyền lực thật sự thuộc về Quốc hội.'},
    {t:'Sự kiện chè Bô-xtơn (1773)', s:'Chè Bô-xtơn', r:'M', why:'Người dân Bô-xtơn đổ các thùng chè của Công ty Đông Ấn Anh xuống biển để phản đối chính sách thuế của Anh, châm ngòi cho cuộc chiến.'},
    {t:'Tuyên ngôn Độc lập (4/7/1776)', s:'Tuyên ngôn 1776', r:'M', why:'Do Tô-mát Giép-phéc-xơn khởi thảo, khẳng định quyền sống, quyền tự do và quyền mưu cầu hạnh phúc. Ngày 4/7 là Quốc khánh nước Mỹ.'},
    {t:'Giô-giơ Oa-sinh-tơn', s:'Oa-sinh-tơn', r:'M', why:'Tổng chỉ huy quân đội thuộc địa, sau trở thành Tổng thống đầu tiên của Hợp chúng quốc Mỹ. Thủ đô nước Mỹ mang tên ông.'},
    {t:'Trận Xa-ra-tô-ga (1777)', s:'Xa-ra-tô-ga', r:'M', why:'Chiến thắng lớn tạo bước ngoặt của cuộc chiến tranh giành độc lập.'},
    {t:'Hiến pháp 1787', s:'Hiến pháp 1787', r:'M', why:'Quy định nước Mỹ theo chế độ cộng hoà liên bang, đứng đầu là Tổng thống.'},
    {t:'Phá ngục Ba-xti (14/7/1789)', s:'Phá ngục Ba-xti', r:'P', why:'Quần chúng Pa-ri tấn công nhà tù Ba-xti, biểu tượng của chế độ quân chủ chuyên chế. Ngày 14/7 là Quốc khánh nước Pháp.'},
    {t:'Tuyên ngôn Nhân quyền và Dân quyền (1789)', s:'Tuyên ngôn Nhân quyền', r:'P', why:'Khẳng định con người sinh ra tự do và bình đẳng về quyền lợi.'},
    {t:'Rô-be-xpi-e', s:'Rô-be-xpi-e', r:'P', why:'Lãnh tụ phái Gia-cô-banh, đứng đầu nền chuyên chính Gia-cô-banh (1793–1794), đỉnh cao của cách mạng Pháp.'},
    {t:'Xử tử vua Lu-i XVI (1793)', s:'Xử tử Lu-i XVI', r:'P', why:'Sau khi nền cộng hoà ra đời (9/1792), vua Lu-i XVI bị xử tử vì tội phản quốc.'},
    {t:'Khẩu hiệu "Tự do, Bình đẳng, Bác ái"', s:'Tự do, Bình đẳng, Bác ái', r:'P', why:'Khẩu hiệu nổi tiếng của cách mạng Pháp, ngày nay vẫn là khẩu hiệu của nước Pháp.'}
  ];
  const CMP = [
    ['Thời gian', '1642–1688', '1775–1783', '1789–1794'],
    ['Hình thức', 'Nội chiến giữa Quốc hội và nhà vua', 'Chiến tranh giành độc lập chống thực dân Anh', 'Nhân dân nổi dậy lật đổ vua, chiến đấu bảo vệ Tổ quốc'],
    ['Lãnh đạo', 'Tư sản và quý tộc mới', 'Tư sản và chủ nô', 'Giai cấp tư sản'],
    ['Kết quả', 'Lật đổ chế độ quân chủ chuyên chế, lập chế độ quân chủ lập hiến', 'Giành độc lập, Hợp chúng quốc Mỹ ra đời', 'Lật đổ chế độ phong kiến, lập nền cộng hoà'],
    ['Hạn chế', 'Chưa đáp ứng quyền lợi của nhân dân, nhất là ruộng đất', 'Chưa xoá bỏ chế độ nô lệ; người da đỏ bị xua đuổi', 'Chủ yếu bảo vệ quyền lợi giai cấp tư sản; vẫn là cuộc cách mạng triệt để nhất']
  ];
  const INV = [
    {y:1733, t:'Giôn Cay sáng chế thoi bay, dệt nhanh gấp đôi'},
    {y:1764, t:'Giêm Ha-gri-vơ chế tạo máy kéo sợi Gien-ni'},
    {y:1769, t:'Ác-crai-tơ chế tạo máy kéo sợi chạy bằng sức nước'},
    {y:1784, t:'Giêm Oát phát minh máy hơi nước'},
    {y:1785, t:'Ét-mơn Các-rai chế tạo máy dệt'},
    {y:1814, t:'Xti-phen-xơn chế tạo đầu máy xe lửa'}
  ];
  let deck, i, score, placed, done1;
  let inv, invNext, invErr;
  p.innerHTML = SUX + `<style>
   .srev-card{border:2px solid var(--accent);border-radius:18px;background:var(--paper);padding:14px;text-align:center;font-size:17px;font-weight:700;min-height:64px;display:flex;align-items:center;justify-content:center}
   .srev-bins{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}
   .srev-bin{border:2px solid var(--line);border-radius:14px;background:var(--card);padding:8px 5px;min-height:150px;display:flex;flex-direction:column;gap:4px;text-align:center;color:var(--ink);font:inherit}
   .srev-bin:disabled{cursor:default}
   .srev-bin .h{font-weight:800;font-size:14.5px}
   .srev-bin .h i{display:block;font-style:normal;font-size:22px}
   .srev-bin .c{font-size:11.5px;line-height:1.25;border-radius:8px;padding:3px 4px;background:var(--paper);border:1px solid var(--line)}
   .srev-bin .c.ok{border-color:var(--ok)} .srev-bin .c.no{border-color:var(--bad);border-style:dashed}
   .srev-cmp td.q{color:var(--muted);text-align:center}
   .srev-cmp td.new{background:var(--ok-soft)}
   .srev-inv{display:grid;gap:6px;margin-top:8px}
   .srev-inv .opt{margin:0;font-size:14.5px}
   .srev-seq{list-style:none;padding:0;margin:8px 0;display:grid;gap:4px}
   .srev-seq li{font-size:14px;border-left:3px solid var(--accent);padding:2px 8px}
   .srev-seq b{color:var(--accent)}
  </style>
  <div class="sec lab"><h3>Ba cuộc cách mạng: ai thuộc nơi nào?</h3>
   <p class="muted">Mỗi thẻ là một sự kiện, nhân vật hay văn kiện. Đoán xem nó thuộc cuộc cách mạng nào rồi <b>bấm vào cột</b> tương ứng. Xếp đủ 5 thẻ của một cuộc cách mạng thì cột của nó trong bảng so sánh sẽ hiện ra.</p>
   <div class="sux-top"><span id="srev-cnt"></span><b id="srev-sc"></b></div>
   <div class="srev-card" id="srev-card"></div>
   <div class="srev-bins" id="srev-bins"></div>
   <div class="sux-fb" id="srev-fb"></div>
   <div class="row" style="margin-top:8px"><button class="btn ghost" id="srev-again">Xáo thẻ, chơi lại</button></div>
   <h4 class="sux-h4">Bảng so sánh ba cuộc cách mạng</h4>
   <div class="tbl sux-tbl srev-cmp"><table id="srev-cmp"></table></div>
  </div>
  <div class="sec lab"><h3>Máy hơi nước và những cỗ máy đi trước</h3>
   <p class="muted">Cách mạng công nghiệp bắt đầu ở Anh từ ngành dệt. Thử: <b>bấm các phát minh theo thứ tự thời gian</b>, từ sớm nhất đến muộn nhất. Gợi ý: máy móc dệt vải ra đời trước, rồi cần một nguồn động lực mạnh hơn sức nước.</p>
   <div class="sux-top"><span id="srev-icnt"></span><b id="srev-ierr"></b></div>
   <ol class="srev-seq" id="srev-seq"></ol>
   <div class="srev-inv" id="srev-inv"></div>
   <div class="sux-fb" id="srev-ifb"></div>
   <div class="row" style="margin-top:8px"><button class="btn ghost" id="srev-iagain">Chơi lại</button></div>
  </div>`;
  const bins = $('srev-bins'), fb = $('srev-fb');
  function start(){ deck = shuffle(CARDS); i = 0; score = 0; placed = {A:[], M:[], P:[]}; done1 = false; fb.className = 'sux-fb'; fb.innerHTML = ''; render(); }
  function full(r){ return placed[r].length === CARDS.filter(c => c.r === r).length; }
  function render(){
    $('srev-cnt').textContent = i < deck.length ? `Thẻ ${i+1}/${deck.length}` : 'Đã xếp xong!';
    $('srev-sc').textContent = `⭐ ${score}/${deck.length}`;
    $('srev-card').textContent = i < deck.length ? deck[i].t : '🎉 Em đã xếp hết 15 thẻ';
    bins.innerHTML = Object.keys(REV).map(r => `<button class="srev-bin" data-r="${r}" style="border-color:${full(r)?REV[r].c:'var(--line)'}" ${i>=deck.length?'disabled':''} aria-label="Xếp vào cách mạng ${REV[r].n}">
      <span class="h"><i aria-hidden="true">${REV[r].ico}</i>${REV[r].n}</span>
      ${placed[r].map(x => `<span class="c ${x.ok?'ok':'no'}">${x.c.s}</span>`).join('')}</button>`).join('');
    bins.querySelectorAll('[data-r]').forEach(b => b.onclick = () => pick(b.dataset.r));
    $('srev-cmp').innerHTML = `<tr><th></th>${Object.keys(REV).map(r => `<th>${REV[r].n}</th>`).join('')}</tr>` +
      CMP.map(row => `<tr><th>${row[0]}</th>${['A','M','P'].map((r, j) => full(r) ? `<td>${row[j+1]}</td>` : `<td class="q">?</td>`).join('')}</tr>`).join('');
  }
  function pick(r){
    if(i >= deck.length) return;
    const c = deck[i], ok = c.r === r;
    placed[c.r].push({c, ok}); if(ok) score++;
    fb.className = 'sux-fb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = `<b>${ok ? 'Đúng rồi!' : 'Chưa đúng: thẻ này thuộc ' + REV[c.r].full + '.'}</b> ${c.why}`;
    i++;
    render();
    if(!ok) shake($('srev-bins').querySelector(`[data-r="${r}"]`));
    if(i >= deck.length && !done1){ done1 = true;
      fb.innerHTML += `<div style="margin-top:8px"><b>Kết quả: ${score}/${deck.length} thẻ đúng ngay lần đầu.</b> ${score === deck.length ? 'Tuyệt vời! 🏆' : score >= 11 ? 'Giỏi lắm! Thẻ viền đứt là thẻ em xếp nhầm.' : 'Xem lại bảng so sánh rồi chơi lại nhé!'}<br>Nhớ nhanh: <b>Anh</b> có Quốc hội đấu với vua, <b>Bắc Mỹ</b> là giành độc lập khỏi Anh, <b>Pháp</b> có Ba-xti và Rô-be-xpi-e.</div>`;
    }
  }
  $('srev-again').onclick = start;
  /* Phát minh */
  function istart(){ inv = shuffle(INV); invNext = 0; invErr = 0; $('srev-ifb').className = 'sux-fb'; $('srev-ifb').innerHTML = ''; irender(); }
  function irender(){
    const sorted = INV.slice().sort((a, b) => a.y - b.y);
    $('srev-icnt').textContent = `Đã xếp ${invNext}/${INV.length}`;
    $('srev-ierr').textContent = `Bấm nhầm: ${invErr}`;
    $('srev-seq').innerHTML = sorted.slice(0, invNext).map(x => `<li><b>${x.y}</b> ${x.t}</li>`).join('');
    $('srev-inv').innerHTML = inv.filter(x => sorted.indexOf(x) >= invNext).map(x => `<button class="opt" data-y="${x.y}">${x.t}</button>`).join('');
    $('srev-inv').querySelectorAll('[data-y]').forEach(b => b.onclick = () => ipick(b));
  }
  function ipick(b){
    const sorted = INV.slice().sort((a, c) => a.y - c.y), want = sorted[invNext], f = $('srev-ifb');
    if(+b.dataset.y === want.y){
      invNext++; irender();
      if(invNext === INV.length){ f.className = 'sux-fb ok';
        f.innerHTML = `<b>Hoàn thành!</b> ${invErr === 0 ? 'Không nhầm lần nào. ' : ''}Máy móc ngành dệt ra đời trước, nhưng sức nước phụ thuộc vào dòng sông. <b>Máy hơi nước của Giêm Oát (1784)</b> cho phép đặt nhà máy ở bất cứ đâu, chạy cả tàu hoả, tàu thuỷ. Vì thế người ta gọi đó là "thời đại hơi nước". Ngày nay, tàu hoả Bắc Nam mà em đi là "cháu chắt" của đầu máy Xti-phen-xơn đấy!`; }
      else { f.className = 'sux-fb ok'; f.innerHTML = `<b>Đúng!</b> Năm ${want.y}: ${want.t}.`; }
    } else {
      invErr++; irender(); f.className = 'sux-fb no';
      f.innerHTML = `<b>Chưa phải.</b> Phát minh đó ra đời năm ${b.dataset.y}, còn có một phát minh sớm hơn. Thử lại!`;
      shake($('srev-inv'));
    }
  }
  $('srev-iagain').onclick = istart;
  start(); istart();
},

/* =========================================================
   2. ĐÔNG NAM Á: AI CAI TRỊ NƯỚC NÀO?
   ========================================================= */
su_sea(p){
  const COL = {
    anh:{n:'Anh', c:'#D9534F'},
    phap:{n:'Pháp', c:'#4A7FE0'},
    hl:{n:'Hà Lan', c:'#F08A24'},
    tbn:{n:'Tây Ban Nha, rồi Mỹ', c:'#9B6BE0'},
    bdn:{n:'Bồ Đào Nha', c:'#2BA36B'},
    dl:{n:'Giữ được độc lập', c:'#D4A017'}
  };
  /* toạ độ thủ đô (thời thuộc địa dùng Ran-gun cho Miến Điện, Ba-ta-vi-a cho In-đô-nê-xi-a) */
  const C = [
    {id:'vn', n:'Việt Nam', cap:'Hà Nội', lat:21.03, lon:105.85, a:'phap', lp:[7,4,'start'], why:'Pháp nổ súng xâm lược năm 1858, đến năm 1884 đặt ách cai trị cả nước. Năm 1887 Pháp lập Liên bang Đông Dương gồm Việt Nam và Cam-pu-chia (Lào nhập vào năm 1899).'},
    {id:'la', n:'Lào', cap:'Viêng Chăn', lat:17.97, lon:102.60, a:'phap', lp:[-7,-5,'end'], why:'Cuối thế kỉ XIX Pháp gây áp lực buộc Xiêm nhường quyền kiểm soát Lào; năm 1899 Lào bị sáp nhập vào Liên bang Đông Dương thuộc Pháp.'},
    {id:'cpc', n:'Cam-pu-chia', cap:'Phnôm Pênh', lat:11.56, lon:104.92, a:'phap', lp:[0,16,'middle'], why:'Năm 1863 Pháp buộc vua Nô-rô-đôm kí hiệp ước nhận sự "bảo hộ" của Pháp; sau đó Cam-pu-chia thuộc Liên bang Đông Dương.'},
    {id:'xiem', n:'Xiêm (Thái Lan)', cap:'Băng Cốc', lat:13.76, lon:100.50, a:'dl', lp:[-4,17,'middle'], why:'Nhờ cải cách của vua Rama V (Chu-la-long-con) và chính sách ngoại giao mềm dẻo, lợi dụng vị trí "vùng đệm" giữa thuộc địa Anh và Pháp, Xiêm giữ được độc lập (dù phải nhượng một số vùng đất).'},
    {id:'md', n:'Miến Điện', cap:'Ran-gun', lat:16.84, lon:96.17, a:'anh', lp:[0,-12,'middle'], why:'Anh tiến hành 3 cuộc chiến tranh (1824–1885) rồi sáp nhập Miến Điện vào Ấn Độ thuộc Anh (1886).'},
    {id:'ml', n:'Mã Lai', cap:'Cu-a-la Lăm-pơ', lat:3.14, lon:101.69, a:'anh', lp:[-8,4,'end'], why:'Anh từng bước chiếm các vùng đất trên bán đảo Mã Lai, lập nên Mã Lai thuộc Anh, khai thác thiếc và cao su.'},
    {id:'sg', n:'Xin-ga-po', cap:'Xin-ga-po', lat:1.29, lon:103.85, a:'anh', lp:[0,17,'middle'], why:'Năm 1819 người Anh lập thương cảng Xin-ga-po; nhờ nằm trên eo biển Ma-lắc-ca, nó trở thành cảng trung chuyển quan trọng của Anh.'},
    {id:'bn', n:'Bru-nây', cap:'Ban-đa Xê-ri Bê-ga-oan', lat:4.89, lon:114.94, a:'anh', lp:[8,4,'start'], why:'Năm 1888 Bru-nây trở thành vùng đất do Anh "bảo hộ".'},
    {id:'indo', n:'In-đô-nê-xi-a', cap:'Ba-ta-vi-a (Gia-các-ta)', lat:-6.20, lon:106.85, a:'hl', lp:[0,17,'middle'], why:'Công ty Đông Ấn Hà Lan đặt trụ sở ở Ba-ta-vi-a, dần dần Hà Lan thống trị cả quần đảo In-đô-nê-xi-a ("Đông Ấn Hà Lan").'},
    {id:'phi', n:'Phi-líp-pin', cap:'Ma-ni-la', lat:14.60, lon:120.98, a:'tbn', lp:[8,4,'start'], why:'Tây Ban Nha cai trị từ thế kỉ XVI. Sau chiến tranh Mỹ – Tây Ban Nha (1898), Phi-líp-pin rơi vào tay Mỹ.'},
    {id:'tm', n:'Đông Ti-mo', cap:'Đi-li', lat:-8.56, lon:125.57, a:'bdn', lp:[0,-11,'middle'], why:'Bồ Đào Nha chiếm phần phía đông đảo Ti-mo; phía tây đảo thuộc Hà Lan.'}
  ];
  const B = {lon0:92, lat1:25, s:9.4, k:0.99, x0:12, y0:6};
  let ans, sel, score;
  p.innerHTML = SUX + `<style>
   .ssea-pt{cursor:pointer}
   .ssea-pt:focus{outline:none}
   .ssea-pt:focus-visible circle.d{stroke:var(--accent);stroke-width:3}
   .ssea-opts{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
   .ssea-opts .opt{margin:0;font-size:14.5px;font-weight:600;display:flex;align-items:center;gap:8px}
   .ssea-opts .opt i,.ssea-leg i{display:inline-block;width:13px;height:13px;border-radius:50%;flex:0 0 auto;border:1px solid var(--ink)}
   .ssea-leg{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:13px;color:var(--muted);margin:8px 0 0}
   .ssea-leg span{display:inline-flex;align-items:center;gap:5px}
   .ssea-q{font-size:16px;margin-top:10px}
  </style>
  <div class="sec lab"><h3>Đông Nam Á: nước nào thuộc thực dân nào?</h3>
   <p class="muted">Cuối thế kỉ XIX, gần như cả Đông Nam Á bị các nước phương Tây chiếm. <b>Bấm vào một nước</b> (chấm trên sơ đồ hoặc tên bên dưới), đoán xem thực dân nào cai trị, rồi chọn đáp án. Có một nước giữ được độc lập, em tìm ra không?</p>
   <div class="sux-top"><span id="ssea-cnt"></span><b id="ssea-sc"></b></div>
   <svg viewBox="0 0 360 346" id="ssea-map" role="img" aria-label="Sơ đồ vị trí thủ đô các nước Đông Nam Á"></svg>
   <p class="sux-small">Sơ đồ giản lược: chỉ đánh dấu vị trí thủ đô theo kinh độ, vĩ độ thật, không vẽ biên giới.</p>
   <div class="ssea-leg" id="ssea-leg"></div>
   <div class="sux-chips" id="ssea-list"></div>
   <div id="ssea-ask"></div>
   <div class="sux-fb" id="ssea-fb"></div>
   <div class="row" style="margin-top:8px"><button class="btn ghost" id="ssea-again">Chơi lại</button><button class="btn ghost" id="ssea-show">Xem đáp án hết</button></div>
  </div>`;
  const map = $('ssea-map'), fb = $('ssea-fb');
  $('ssea-leg').innerHTML = Object.keys(COL).map(k => `<span><i style="background:${COL[k].c}"></i>${COL[k].n}</span>`).join('') + `<span><i style="background:var(--paper)"></i>Chưa đoán</span>`;
  function start(){ ans = {}; sel = null; score = 0; fb.className = 'sux-fb'; fb.innerHTML = ''; render(); }
  function render(){
    const n = Object.keys(ans).length;
    $('ssea-cnt').textContent = n < C.length ? `Đã đoán ${n}/${C.length} nước` : 'Hoàn thành!';
    $('ssea-sc').textContent = `⭐ ${score}`;
    let s = grid(B, [95,100,105,110,115,120,125], [-5,0,5,10,15,20], 4, 2, 356, 342);
    s += `<text class="svgm" x="${proj(B,112,12)[0]}" y="${proj(B,112,12)[1]}" text-anchor="middle" style="font-size:11px;font-style:italic">Biển Đông</text>`;
    s += `<text class="svgm" x="${proj(B,96,6)[0]}" y="${proj(B,96,6)[1]}" text-anchor="middle" style="font-size:10px;font-style:italic">Ấn Độ Dương</text>`;
    s += C.map(c => {
      const [x, y] = proj(B, c.lon, c.lat), a = ans[c.id], fill = a ? COL[c.a].c : 'var(--paper)', on = sel === c.id;
      return `<g class="ssea-pt" data-id="${c.id}" tabindex="0" role="button" aria-label="${c.n}">
        <circle cx="${x}" cy="${y}" r="16" fill="transparent"/>
        ${on ? `<circle cx="${x}" cy="${y}" r="12" fill="none" stroke="var(--accent)" stroke-width="2.5"/>` : ''}
        <circle class="d" cx="${x}" cy="${y}" r="7" fill="${fill}" stroke="var(--ink)" stroke-width="1.5"/>
        ${a && !a.ok ? `<text x="${x}" y="${y+3.5}" text-anchor="middle" style="font-size:9px;font-weight:800;fill:#fff">!</text>` : ''}
        <text class="svgt" x="${x + c.lp[0]}" y="${y + c.lp[1]}" text-anchor="${c.lp[2]}" style="font-size:12px;font-weight:${on?800:600}">${c.n}</text></g>`;
    }).join('');
    map.innerHTML = s;
    map.querySelectorAll('[data-id]').forEach(g => { g.onclick = () => choose(g.dataset.id); g.onkeydown = e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); choose(g.dataset.id); } }; });
    $('ssea-list').innerHTML = C.map(c => `<button class="sux-chip ${sel===c.id?'on':''} ${ans[c.id]?(ans[c.id].ok?'ok':'no'):''}" data-id="${c.id}">${c.n}</button>`).join('');
    $('ssea-list').querySelectorAll('[data-id]').forEach(b => b.onclick = () => choose(b.dataset.id));
    const ask = $('ssea-ask');
    if(!sel){ ask.innerHTML = n < C.length ? '<p class="ssea-q muted">👆 Chọn một nước để bắt đầu.</p>' : ''; return; }
    const c = C.find(x => x.id === sel);
    if(ans[sel]){ ask.innerHTML = `<p class="ssea-q"><b>${c.n}</b> (thủ đô ${c.cap}): <b style="color:${COL[c.a].c}">●</b> ${COL[c.a].n}</p>`; return; }
    ask.innerHTML = `<p class="ssea-q">Cuối thế kỉ XIX, <b>${c.n}</b> (thủ đô ${c.cap}) thuộc về ai?</p>
      <div class="ssea-opts">${Object.keys(COL).map(k => `<button class="opt" data-a="${k}"><i style="background:${COL[k].c}"></i>${COL[k].n}</button>`).join('')}</div>`;
    ask.querySelectorAll('[data-a]').forEach(b => b.onclick = () => guess(c, b.dataset.a));
  }
  function choose(id){ sel = id; const c = C.find(x => x.id === id);
    if(ans[id]){ fb.className = 'sux-fb'; fb.innerHTML = c.why; } else { fb.className = 'sux-fb'; fb.innerHTML = ''; }
    render(); }
  function guess(c, a){
    const ok = a === c.a; ans[c.id] = {ok}; if(ok) score++;
    fb.className = 'sux-fb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = `<b>${ok ? 'Chính xác!' : 'Chưa đúng: ' + c.n + ' thuộc ' + COL[c.a].n + '.'}</b> ${c.why}`;
    const n = Object.keys(ans).length;
    if(n === C.length) fb.innerHTML += `<div style="margin-top:8px"><b>Em đúng ${score}/${C.length} nước.</b> Thấy không, màu đỏ của Anh và xanh của Pháp phủ gần hết bán đảo Trung Ấn và Mã Lai. Chỉ có <b>Xiêm</b> giữ được độc lập vì nằm kẹp giữa hai "đế quốc" Anh và Pháp, lại biết cải cách kịp thời.</div>`;
    render();
  }
  $('ssea-again').onclick = start;
  $('ssea-show').onclick = () => { C.forEach(c => { if(!ans[c.id]) ans[c.id] = {ok:false}; }); sel = null; fb.className = 'sux-fb'; fb.innerHTML = 'Đây là đáp án đầy đủ. Bấm từng nước để đọc giải thích, hoặc bấm "Chơi lại" để tự đoán nhé.'; render(); };
  start();
},

/* =========================================================
   3. PHONG TRÀO TÂY SƠN
   ========================================================= */
su_tayson(p){
  const EV = [
    {y:1771, k:1771, t:'Dựng cờ khởi nghĩa', d:'Ba anh em <b>Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ</b> dựng cờ khởi nghĩa ở Tây Sơn (Bình Định), lấy khẩu hiệu "lấy của nhà giàu chia cho dân nghèo", được nông dân khắp nơi hưởng ứng.'},
    {y:1777, k:1777, t:'Lật đổ chúa Nguyễn', d:'Nghĩa quân Tây Sơn đánh chiếm Gia Định, <b>lật đổ chính quyền chúa Nguyễn</b> ở Đàng Trong. Nguyễn Ánh chạy thoát, sau đó cầu cứu quân Xiêm.'},
    {y:1785, k:1785, t:'Rạch Gầm – Xoài Mút', d:'Tháng 1/1785, Nguyễn Huệ mai phục trên sông Tiền, đoạn từ Rạch Gầm đến Xoài Mút (Tiền Giang), <b>đánh tan khoảng 5 vạn quân Xiêm</b> do Nguyễn Ánh rước về.'},
    {y:1786, k:1786, t:'Lật đổ chúa Trịnh', d:'Với khẩu hiệu "phù Lê diệt Trịnh", Nguyễn Huệ tiến quân ra Bắc, <b>lật đổ chính quyền chúa Trịnh</b>, xoá bỏ ranh giới chia cắt Đàng Trong – Đàng Ngoài.'},
    {y:1788, k:1788, t:'Nguyễn Huệ lên ngôi', d:'Lê Chiêu Thống cầu cứu nhà Thanh, <b>29 vạn quân Thanh</b> do Tôn Sĩ Nghị chỉ huy kéo vào Thăng Long. Ngày 22/12/1788 Nguyễn Huệ <b>lên ngôi Hoàng đế</b> ở Phú Xuân, lấy niên hiệu <b>Quang Trung</b>, rồi lập tức tiến quân ra Bắc.'},
    {y:1789, k:1789, t:'Ngọc Hồi – Đống Đa', d:'Tết Kỷ Dậu 1789: đêm mùng 3 Tết hạ đồn Hà Hồi, mờ sáng <b>mùng 5 Tết</b> phá đồn Ngọc Hồi, Đô đốc Long đánh Đống Đa. Trưa mùng 5, Quang Trung tiến vào Thăng Long, <b>đại phá quân Thanh</b>.'},
    {y:'1789–1792', k:1790, t:'Quang Trung xây dựng đất nước', d:'Ban <b>Chiếu khuyến nông</b> cho dân phiêu tán về quê làm ruộng, <b>Chiếu lập học</b> mở trường đến tận xã, dùng <b>chữ Nôm</b> làm chữ chính thức, mở cửa buôn bán.'},
    {y:1792, k:1792, t:'Quang Trung qua đời', d:'Năm 1792 vua Quang Trung đột ngột qua đời khi mới 40 tuổi, nhiều dự định còn dang dở. Triều Tây Sơn suy yếu, năm 1802 Nguyễn Ánh lập ra nhà Nguyễn.'}
  ];
  const STOP = [
    {n:'Phú Xuân', lat:16.46, lon:107.59, lp:[8,4,'start'], d:'22/12/1788 (25 tháng Một năm Mậu Thân): Nguyễn Huệ lên ngôi Hoàng đế ở núi Bân, lấy niên hiệu Quang Trung và xuất quân ngay trong ngày.'},
    {n:'Nghệ An', lat:18.68, lon:105.68, lp:[-8,4,'end'], d:'Dừng lại khoảng 10 ngày để tuyển thêm quân, tổ chức duyệt binh và khích lệ tướng sĩ. Quân số lên tới khoảng 10 vạn.'},
    {n:'Tam Điệp', lat:20.16, lon:105.92, lp:[-8,4,'end'], d:'Hội quân với cánh quân của Ngô Văn Sở, Ngô Thì Nhậm. Quang Trung mở tiệc khao quân ăn Tết trước, hẹn mùng 7 Tết vào Thăng Long. Đêm 30 Tết, chia 5 đạo quân tiến ra Bắc.'},
    {n:'Hà Hồi', lat:20.86, lon:105.86, lp:[8,4,'start'], inset:1, d:'Đêm mùng 3 Tết: quân Tây Sơn bí mật vây đồn Hà Hồi, đồng thanh hô vang khiến quân Thanh hoảng sợ xin hàng.'},
    {n:'Ngọc Hồi', lat:20.915, lon:105.843, lp:[8,4,'start'], inset:1, d:'Mờ sáng mùng 5 Tết: quân Tây Sơn núp sau những tấm ván ghép phủ rơm ướt, xông vào phá đồn Ngọc Hồi. Cùng lúc, Đô đốc Long đánh đồn Đống Đa, tướng giặc Sầm Nghi Đống thắt cổ tự tử.'},
    {n:'Thăng Long', lat:21.028, lon:105.852, lp:[8,-4,'start'], inset:1, d:'Trưa mùng 5 Tết Kỷ Dậu (30/1/1789): Quang Trung tiến vào Thăng Long, Tôn Sĩ Nghị bỏ chạy. Sớm hơn lời hẹn tận 2 ngày!'}
  ];
  const DONGDA = {lat:21.008, lon:105.823};
  const BM = {lon0:104.6, lat1:21.5, s:52, k:Math.cos(18.7*Math.PI/180), x0:14, y0:14};   // bản đồ chính
  const BI = {lon0:105.74, lat1:21.07, s:520, k:Math.cos(21*Math.PI/180), x0:224, y0:34};  // ô phóng to Thăng Long
  const COAST = [[20.95,107.07],[20.72,106.79],[20.56,106.57],[20.13,106.30],[19.74,105.90],[18.82,105.72],[18.47,105.87],[17.95,106.48],[17.48,106.62],[17.02,107.11],[16.56,107.63],[16.23,108.07],[16.07,108.22]];
  let cur = -1, seq, pos, err, stage = 0, raf = null, tmr = null, mk = null;
  p.innerHTML = SUX + `<style>
   .stay-dot{cursor:pointer}
   .stay-dot:focus{outline:none}
   .stay-dot:focus-visible circle{stroke:var(--accent);stroke-width:3}
   .stay-det{min-height:64px}
   .stay-ord{display:grid;gap:6px;margin-top:8px}
   .stay-ord .opt{margin:0;font-size:14.5px}
   .stay-seq{list-style:none;padding:0;margin:8px 0;display:grid;gap:4px}
   .stay-seq li{font-size:14px;border-left:3px solid var(--accent);padding:2px 8px}
   .stay-seq b{color:var(--accent)}
   .stay-stops{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0}
   .stay-stops span{font-size:12.5px;padding:2px 8px;border-radius:999px;border:1px solid var(--line);color:var(--muted)}
   .stay-stops span.on{border-color:var(--accent);background:var(--accent-soft);color:var(--ink);font-weight:700}
  </style>
  <div class="sec lab"><h3>Dòng thời gian phong trào Tây Sơn</h3>
   <p class="muted">Bấm vào từng mốc trên trục (hoặc tên mốc bên dưới) để xem chuyện gì đã xảy ra. Để ý: chỉ trong khoảng 20 năm, phong trào Tây Sơn đã lật đổ cả chúa Nguyễn, chúa Trịnh và đánh tan hai đạo quân xâm lược!</p>
   <svg viewBox="0 0 360 120" id="stay-tl" role="img" aria-label="Trục thời gian 1770 đến 1793"></svg>
   <div class="sux-chips" id="stay-chips"></div>
   <div class="readout stay-det" id="stay-det"></div>
  </div>
  <div class="sec lab"><h3>Thử thách: xếp đúng thứ tự</h3>
   <p class="muted">Các sự kiện đã bị xáo trộn. <b>Bấm lần lượt từ sự kiện xảy ra sớm nhất</b> đến muộn nhất. Mẹo: trong Nam trước, ra Bắc sau; lên ngôi rồi mới đại phá quân Thanh.</p>
   <div class="sux-top"><span id="stay-ocnt"></span><b id="stay-oerr"></b></div>
   <ol class="stay-seq" id="stay-seq"></ol>
   <div class="stay-ord" id="stay-ord"></div>
   <div class="sux-fb" id="stay-ofb"></div>
   <div class="row" style="margin-top:8px"><button class="btn ghost" id="stay-oagain">Xáo lại</button></div>
  </div>
  <div class="sec lab"><h3>Hành quân thần tốc</h3>
   <p class="muted">Cuối năm 1788, quân Tây Sơn đi bộ từ Phú Xuân ra Thăng Long. <b>Đoán trước:</b> từ lúc xuất quân đến khi vào Thăng Long mất bao lâu? Rồi bấm <b>Tiến quân</b> để đi qua từng chặng.</p>
   <svg viewBox="0 0 360 330" id="stay-map" role="img" aria-label="Sơ đồ giản lược đường hành quân của vua Quang Trung"></svg>
   <p class="sux-small">Sơ đồ giản lược theo kinh độ, vĩ độ thật của các địa điểm; nét đứt là đường nối vài điểm ven biển, không phải bờ biển chính xác. Đường hành quân vẽ thẳng giữa các chặng.</p>
   <div class="stay-stops" id="stay-stops"></div>
   <div class="row"><button class="btn" id="stay-go">Tiến quân ▶</button><button class="btn ghost" id="stay-reset">Về Phú Xuân</button></div>
   <div class="readout" id="stay-mout"></div>
  </div>`;
  /* --- Trục thời gian --- */
  const X = y => 20 + (y - 1770)*(320/23);
  function tl(){
    let s = `<line x1="14" y1="96" x2="346" y2="96" stroke="var(--ink)" stroke-width="2"/>`;
    for(let y = 1770; y <= 1790; y += 5) s += `<line x1="${X(y)}" y1="92" x2="${X(y)}" y2="100" stroke="var(--ink)"/><text class="svgm" x="${X(y)}" y="113" text-anchor="middle">${y}</text>`;
    EV.forEach((e, j) => {
      const x = X(e.k), y = 72 - (j % 2)*34, on = j === cur;
      s += `<g class="stay-dot" data-i="${j}" tabindex="0" role="button" aria-label="${e.y}: ${e.t}">
        <line x1="${x}" y1="${y}" x2="${x}" y2="96" stroke="var(--muted)"/>
        <circle cx="${x}" cy="${y}" r="17" fill="transparent"/>
        <circle cx="${x}" cy="${y}" r="${on?12:10}" fill="${on?'var(--accent)':'var(--paper)'}" stroke="var(--accent)" stroke-width="2"/>
        <text x="${x}" y="${y+4}" text-anchor="middle" style="font-size:11px;font-weight:800;fill:${on?'var(--paper)':'var(--accent)'}">${j+1}</text></g>`;
    });
    $('stay-tl').innerHTML = s;
    $('stay-tl').querySelectorAll('[data-i]').forEach(g => { g.onclick = () => showEv(+g.dataset.i); g.onkeydown = e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); showEv(+g.dataset.i); } }; });
    $('stay-chips').innerHTML = EV.map((e, j) => `<button class="sux-chip ${j===cur?'on':''}" data-i="${j}">${j+1}. ${e.y}</button>`).join('');
    $('stay-chips').querySelectorAll('[data-i]').forEach(b => b.onclick = () => showEv(+b.dataset.i));
  }
  function showEv(j){ cur = j; tl(); const e = EV[j]; $('stay-det').innerHTML = `<span class="sux-big">${e.y}: ${e.t}</span><br>${e.d}`; }
  /* --- Xếp thứ tự --- */
  function ostart(){ seq = shuffle(EV); pos = 0; err = 0; $('stay-ofb').className = 'sux-fb'; $('stay-ofb').innerHTML = ''; orender(); }
  function orender(){
    $('stay-ocnt').textContent = `Đã xếp ${pos}/${EV.length}`;
    $('stay-oerr').textContent = `Bấm nhầm: ${err}`;
    $('stay-seq').innerHTML = EV.slice(0, pos).map(e => `<li><b>${e.y}</b> ${e.t}</li>`).join('');
    $('stay-ord').innerHTML = seq.filter(e => EV.indexOf(e) >= pos).map(e => `<button class="opt" data-k="${EV.indexOf(e)}">${e.t}</button>`).join('');
    $('stay-ord').querySelectorAll('[data-k]').forEach(b => b.onclick = () => opick(+b.dataset.k));
  }
  function opick(k){
    const f = $('stay-ofb');
    if(k === pos){ pos++; orender();
      f.className = 'sux-fb ok';
      f.innerHTML = pos === EV.length ? `<b>Hoàn thành${err ? '' : ' không nhầm lần nào'}! 🎉</b> Thứ tự: khởi nghĩa (1771) → lật đổ chúa Nguyễn (1777) → đánh quân Xiêm (1785) → lật đổ chúa Trịnh (1786) → lên ngôi (1788) → đánh quân Thanh (1789) → xây dựng đất nước → Quang Trung mất (1792).`
        : `<b>Đúng!</b> ${EV[k].y}: ${EV[k].t}.`;
    } else { err++; orender(); f.className = 'sux-fb no';
      f.innerHTML = `<b>Chưa phải.</b> "${EV[k].t}" xảy ra năm ${EV[k].y}, còn sự kiện khác sớm hơn.`; shake($('stay-ord')); }
  }
  /* --- Hành quân --- */
  const PM = STOP.map(s => s.inset ? null : proj(BM, s.lon, s.lat));
  const PI = STOP.map(s => s.inset ? proj(BI, s.lon, s.lat) : null);
  const box = [proj(BM, BI.lon0, BI.lat1), proj(BM, BI.lon0 + 132/(BI.s*BI.k), BI.lat1 - 130/BI.s)];
  /* điểm vẽ trên bản đồ chính cho mỗi chặng (các chặng trong ô phóng to vẽ ở Thăng Long) */
  const mainPt = j => PM[j] || proj(BM, STOP[j].lon, STOP[j].lat);
  /* điểm trung gian trong đất liền (Quảng Bình, Hà Tĩnh) để đường vẽ không cắt ra biển */
  const VIA = {1:[[17.45,106.45],[18.05,106.15]]};
  const segMain = j => [mainPt(j-1)].concat((VIA[j]||[]).map(v => proj(BM, v[1], v[0]))).concat([mainPt(j)]);
  const fullMain = () => { let a = [mainPt(0)]; for(let j = 1; j < STOP.length; j++) a = a.concat(segMain(j).slice(1)); return a; };
  function mapBase(){
    let s = grid(BM, [105,106,107,108], [16,17,18,19,20,21], 4, 4, 206, 326);
    s += `<polyline points="${COAST.map(c => proj(BM, c[1], c[0]).join(',')).join(' ')}" fill="none" stroke="var(--liquid)" stroke-width="2" stroke-dasharray="5 3"/>`;
    s += `<text class="svgm" x="${proj(BM,107.5,18.5)[0]}" y="${proj(BM,107.5,18.5)[1]}" text-anchor="middle" style="font-style:italic">Biển Đông</text>`;
    /* đường đã đi */
    const done = [];
    done.push(mainPt(0)); for(let j = 1; j <= stage; j++) segMain(j).slice(1).forEach(q => done.push(q));
    s += `<polyline points="${fullMain().map(q => q.join(',')).join(' ')}" fill="none" stroke="var(--line)" stroke-width="2"/>`;
    s += `<polyline id="stay-path" points="${done.map(q => q.join(',')).join(' ')}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`;
    STOP.forEach((st, j) => { if(st.inset) return; const [x, y] = PM[j];
      s += `<circle cx="${x}" cy="${y}" r="5" fill="${j<=stage?'var(--accent)':'var(--paper)'}" stroke="var(--ink)" stroke-width="1.3"/><text class="svgt" x="${x+st.lp[0]}" y="${y+st.lp[1]}" text-anchor="${st.lp[2]}" style="font-weight:${j===stage?800:500}">${st.n}</text>`; });
    const tl = proj(BM, 105.852, 21.028);
    s += `<circle cx="${tl[0]}" cy="${tl[1]}" r="5" fill="${stage>=3?'var(--accent)':'var(--paper)'}" stroke="var(--ink)" stroke-width="1.3"/><text class="svgt" x="${tl[0]-8}" y="${tl[1]-4}" text-anchor="end">Thăng Long</text>`;
    /* khung phóng to */
    s += `<rect x="${box[0][0]}" y="${box[0][1]}" width="${box[1][0]-box[0][0]}" height="${box[1][1]-box[0][1]}" fill="none" stroke="var(--muted)" stroke-dasharray="3 2"/>`;
    s += `<line x1="${box[1][0]}" y1="${box[0][1]}" x2="222" y2="32" stroke="var(--muted)" stroke-dasharray="3 2"/>`;
    s += `<rect x="222" y="32" width="134" height="134" rx="8" fill="var(--card)" stroke="var(--muted)"/>`;
    s += `<text class="svgm" x="289" y="27" text-anchor="middle">Phóng to: quanh Thăng Long</text>`;
    const dd = proj(BI, DONGDA.lon, DONGDA.lat);
    s += `<polyline points="${PI.slice(3).map(q => q.join(',')).join(' ')}" fill="none" stroke="var(--line)" stroke-width="2"/>`;
    const di = PI.slice(3, Math.max(3, stage + 1)).map(q => q.join(','));
    if(stage >= 3) s += `<polyline id="stay-ipath" points="${di.join(' ')}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>`;
    s += `<rect x="${dd[0]-4.5}" y="${dd[1]-4.5}" width="9" height="9" transform="rotate(45 ${dd[0]} ${dd[1]})" fill="${stage>=4?'var(--bad)':'var(--paper)'}" stroke="var(--ink)" stroke-width="1.2"/><text class="svgt" x="${dd[0]}" y="${dd[1]+16}" text-anchor="middle">Đống Đa</text>`;
    STOP.forEach((st, j) => { if(!st.inset) return; const [x, y] = PI[j];
      s += `<circle cx="${x}" cy="${y}" r="5" fill="${j<=stage?'var(--accent)':'var(--paper)'}" stroke="var(--ink)" stroke-width="1.3"/><text class="svgt" x="${x+st.lp[0]}" y="${y+st.lp[1]}" text-anchor="${st.lp[2]}" style="font-weight:${j===stage?800:500}">${st.n}</text>`; });
    return s;
  }
  function marker(x, y){ return `<g id="stay-mk"><circle cx="${x}" cy="${y}" r="9" fill="var(--hl)" stroke="var(--ink)" stroke-width="1.5"/><text x="${x}" y="${y+4}" text-anchor="middle" style="font-size:10px">🐘</text></g>`; }
  function mrender(mx, my){
    const at = STOP[stage].inset ? PI[stage] : PM[stage];
    $('stay-map').innerHTML = mapBase() + marker(mx != null ? mx : at[0], my != null ? my : at[1]);
    $('stay-stops').innerHTML = STOP.map((s, j) => `<span class="${j===stage?'on':''}">${j+1}. ${s.n}</span>`).join('');
    const st = STOP[stage];
    let km = 0; for(let j = 1; j <= stage; j++) km += haversine([STOP[j-1].lat, STOP[j-1].lon], [STOP[j].lat, STOP[j].lon]);
    $('stay-mout').innerHTML = `<span class="sux-big">Chặng ${stage+1}: ${st.n}</span><br>${st.d}<br><span class="muted" style="font-size:13.5px">Đã đi khoảng ${fmt(Math.round(km/10)*10, 0)} km theo đường chim bay (đường bộ thực tế dài hơn nhiều).</span>` +
      (stage === STOP.length - 1 ? `<div style="margin-top:6px"><b>Kết quả:</b> chỉ khoảng 40 ngày từ Phú Xuân đến Thăng Long, trong đó trận quyết chiến chỉ 5 ngày Tết! Đi nhanh nhờ cách luân phiên: <b>cứ 3 người một tốp, 2 người khiêng 1 người ngồi võng</b>, thay nhau đi suốt ngày đêm. Ngày nay, mùng 5 Tết hằng năm có <b>lễ hội Gò Đống Đa</b> ở Hà Nội để tưởng nhớ chiến thắng này.</div>` : '');
    $('stay-go').disabled = stage >= STOP.length - 1;
  }
  function stopMove(){ if(raf){ cancelAnimationFrame(raf); raf = null; } if(tmr){ clearTimeout(tmr); tmr = null; } }
  function go(){
    if(stage >= STOP.length - 1 || raf) return;
    const from = STOP[stage].inset ? PI[stage] : PM[stage], nx = stage + 1;
    const to = STOP[nx].inset ? PI[nx] : PM[nx];
    /* chặng Tam Điệp → Hà Hồi: chạy trên bản đồ chính tới khung phóng to rồi xuất hiện trong ô */
    const pts = STOP[nx].inset && STOP[stage].inset ? [from, to] : segMain(nx);
    const L = [0]; for(let j = 1; j < pts.length; j++) L.push(L[j-1] + Math.hypot(pts[j][0]-pts[j-1][0], pts[j][1]-pts[j-1][1]));
    const at = d => { let j = 1; while(j < pts.length - 1 && L[j] < d) j++; const t = (d - L[j-1])/((L[j] - L[j-1]) || 1);
      return [pts[j-1][0] + (pts[j][0]-pts[j-1][0])*t, pts[j-1][1] + (pts[j][1]-pts[j-1][1])*t]; };
    if(reduceMotion()){ stage = nx; mrender(); return; }
    $('stay-go').disabled = true;
    const T = 1300, t0 = performance.now();
    const step = now => {
      const u = Math.min(1, (now - t0)/T), e = u < .5 ? 2*u*u : 1 - Math.pow(-2*u + 2, 2)/2;
      const g = $('stay-mk');
      if(g){ const [x, y] = at(e*L[L.length-1]); g.innerHTML = marker(x, y).replace(/^<g id="stay-mk">|<\/g>$/g, ''); }
      if(u < 1) raf = requestAnimationFrame(step);
      else { raf = null; stage = nx; mrender(); }
    };
    raf = requestAnimationFrame(step);
  }
  $('stay-go').onclick = go;
  $('stay-reset').onclick = () => { stopMove(); stage = 0; mrender(); };
  stopAnim = stopMove;
  $('stay-oagain').onclick = ostart;
  tl(); showEv(0); ostart(); mrender();
},

/* =========================================================
   4. XẾP DÒNG THỜI GIAN (Âu – Mỹ cuối XVIII – đầu XX)
   ========================================================= */
su_timeline(p){
  const BANK = [
    {y:1776, t:'Tuyên ngôn Độc lập của nước Mỹ', s:'Tuyên ngôn Độc lập Mỹ'},
    {y:1789, t:'Cách mạng tư sản Pháp bùng nổ (phá ngục Ba-xti)', s:'Cách mạng Pháp bùng nổ'},
    {y:1804, t:'Na-pô-lê-ông lên ngôi Hoàng đế Pháp', s:'Na-pô-lê-ông lên ngôi'},
    {y:1831, t:'Khởi nghĩa của thợ dệt Li-ông (Pháp)', s:'Thợ dệt Li-ông khởi nghĩa'},
    {y:1844, t:'Khởi nghĩa của thợ dệt Xi-lê-di (Đức)', s:'Thợ dệt Xi-lê-di khởi nghĩa'},
    {y:1848, t:'Mác và Ăng-ghen công bố Tuyên ngôn của Đảng Cộng sản', s:'Tuyên ngôn Đảng Cộng sản'},
    {y:1861, t:'Nội chiến Mỹ bùng nổ (1861–1865)', s:'Nội chiến Mỹ bùng nổ'},
    {y:1864, t:'Quốc tế thứ nhất thành lập ở Luân Đôn', s:'Quốc tế thứ nhất'},
    {y:1871, t:'Công xã Pa-ri, nhà nước kiểu mới đầu tiên', s:'Công xã Pa-ri'},
    {y:1886, t:'Công nhân Chi-ca-gô (Mỹ) bãi công ngày 1/5', s:'Bãi công Chi-ca-gô 1/5'},
    {y:1889, t:'Quốc tế thứ hai thành lập', s:'Quốc tế thứ hai'},
    {y:1903, t:'Lê-nin thành lập đảng Bôn-sê-vích ở Nga', s:'Đảng Bôn-sê-vích ra đời'},
    {y:1905, t:'Cách mạng Nga 1905–1907 bùng nổ', s:'Cách mạng Nga 1905'},
    {y:1914, t:'Chiến tranh thế giới thứ nhất bùng nổ', s:'Thế chiến I bùng nổ'},
    {y:1917, t:'Cách mạng tháng Mười Nga thắng lợi', s:'Cách mạng tháng Mười'},
    {y:1918, t:'Chiến tranh thế giới thứ nhất kết thúc', s:'Thế chiến I kết thúc'}
  ];
  const N = 8;
  let deck, order, checked, best = 0;
  p.innerHTML = SUX + `<style>
   .stl-pool{display:grid;gap:6px;margin-top:8px}
   .stl-pool .opt{margin:0;font-size:14.5px}
   .stl-mine{list-style:none;padding:0;margin:8px 0;display:grid;gap:5px;counter-reset:stl}
   .stl-mine li button{width:100%;text-align:left;border:1.5px solid var(--accent);background:var(--accent-soft);color:var(--ink);border-radius:10px;padding:7px 10px;font-size:14.5px;display:flex;gap:8px;align-items:baseline}
   .stl-mine li button:disabled{cursor:default}
   .stl-mine li button.ok{border-color:var(--ok);background:var(--ok-soft)}
   .stl-mine li button.no{border-color:var(--bad);background:var(--bad-soft)}
   .stl-mine .n{font-weight:800;color:var(--accent);min-width:1.4em}
   .stl-mine .y{margin-left:auto;font-weight:800;white-space:nowrap}
   .stl-empty{color:var(--muted);font-size:14px;border:1.5px dashed var(--line);border-radius:10px;padding:10px;text-align:center}
  </style>
  <div class="sec lab"><h3>Xếp dòng thời gian</h3>
   <p class="muted">Có ${N} thẻ sự kiện bốc ngẫu nhiên, chưa ghi năm. <b>Bấm lần lượt theo thứ tự từ sớm đến muộn</b>; bấm lại một thẻ đã chọn để gỡ ra. Xếp xong bấm "Chấm điểm". Mẹo: Cách mạng tư sản trước, phong trào công nhân sau, chiến tranh thế giới ở cuối.</p>
   <div class="sux-top"><span id="stl-cnt"></span><b id="stl-best"></b></div>
   <h4 class="sux-h4" style="margin-top:6px">Thứ tự của em</h4>
   <ol class="stl-mine" id="stl-mine"></ol>
   <div class="stl-pool" id="stl-pool"></div>
   <div class="row" style="margin-top:10px"><button class="btn" id="stl-check">Chấm điểm</button><button class="btn ghost" id="stl-new">Bộ thẻ mới</button></div>
   <div class="sux-fb" id="stl-fb"></div>
   <div id="stl-axis"></div>
  </div>`;
  function start(){
    deck = []; const used = new Set();
    shuffle(BANK).forEach(e => { if(deck.length < N && !used.has(e.y)){ deck.push(e); used.add(e.y); } });
    order = []; checked = false; $('stl-fb').className = 'sux-fb'; $('stl-fb').innerHTML = ''; $('stl-axis').innerHTML = ''; render();
  }
  function render(){
    const right = deck.slice().sort((a, b) => a.y - b.y);
    $('stl-cnt').textContent = checked ? 'Đã chấm' : `Đã xếp ${order.length}/${N}`;
    $('stl-best').textContent = best ? `Kỉ lục: ${best}/${N}` : '';
    $('stl-mine').innerHTML = order.length ? order.map((e, j) => {
      const cls = checked ? (right[j] === e ? 'ok' : 'no') : '';
      return `<li><button class="${cls}" data-j="${j}" ${checked?'disabled':''}><span class="n">${j+1}.</span><span>${e.t}</span>${checked?`<span class="y">${e.y}</span>`:''}</button></li>`; }).join('')
      : '<li class="stl-empty">Chưa chọn thẻ nào. Bấm vào thẻ em nghĩ là sớm nhất.</li>';
    $('stl-mine').querySelectorAll('[data-j]').forEach(b => b.onclick = () => { order.splice(+b.dataset.j, 1); render(); });
    $('stl-pool').innerHTML = deck.filter(e => !order.includes(e)).map(e => `<button class="opt" data-y="${e.y}">${e.t}</button>`).join('');
    $('stl-pool').querySelectorAll('[data-y]').forEach(b => b.onclick = () => { order.push(deck.find(e => e.y === +b.dataset.y)); render(); });
    $('stl-check').disabled = checked || order.length < N;
  }
  function check(){
    if(order.length < N) return;
    checked = true;
    const right = deck.slice().sort((a, b) => a.y - b.y), sc = order.filter((e, j) => right[j] === e).length;
    best = Math.max(best, sc);
    render();
    const f = $('stl-fb');
    f.className = 'sux-fb ' + (sc === N ? 'ok' : sc >= 5 ? '' : 'no');
    f.innerHTML = `<b>Em đặt đúng vị trí ${sc}/${N} thẻ.</b> ${sc === N ? 'Hoàn hảo! 🏆' : sc >= 5 ? 'Khá lắm! Nhìn trục thời gian bên dưới để thấy chỗ nhầm.' : 'Không sao, xem trục thời gian rồi thử bộ thẻ mới nhé.'}`;
    axis(right);
  }
  /* Trục thời gian dọc, đúng tỉ lệ năm */
  function axis(ev){
    const y0 = ev[0].y, y1 = ev[ev.length-1].y, top = 30, bot = 380, AX = 70;
    const Y = y => top + (y - y0)*(bot - top)/(y1 - y0);
    const lab = ev.map(e => Y(e.y));
    for(let k = 1; k < lab.length; k++) lab[k] = Math.max(lab[k], lab[k-1] + 30);
    const over = lab[lab.length-1] - bot; if(over > 0){ lab[lab.length-1] = bot; for(let k = lab.length - 2; k >= 0; k--) lab[k] = Math.min(lab[k], lab[k+1] - 30); }
    const H = Math.max(bot, lab[lab.length-1]) + 26;
    let s = `<line x1="${AX}" y1="${top-10}" x2="${AX}" y2="${bot+10}" stroke="var(--ink)" stroke-width="2"/>`;
    const step = (y1 - y0) > 80 ? 25 : (y1 - y0) > 40 ? 10 : 5;
    for(let y = Math.ceil(y0/step)*step; y <= y1; y += step) s += `<line x1="${AX-5}" y1="${Y(y)}" x2="${AX}" y2="${Y(y)}" stroke="var(--ink)"/><text class="svgm" x="${AX-8}" y="${Y(y)+3.5}" text-anchor="end">${y}</text>`;
    ev.forEach((e, j) => {
      const yd = Y(e.y), yl = lab[j], ok = order[j] === e;
      s += `<path d="M${AX} ${yd} L${AX+16} ${yd} L${AX+26} ${yl} L${AX+32} ${yl}" fill="none" stroke="var(--muted)" stroke-width="1"/>`;
      s += `<circle cx="${AX}" cy="${yd}" r="5" fill="${ok?'var(--ok)':'var(--bad)'}" stroke="var(--ink)" stroke-width="1"/>`;
      s += `<text class="svgt" x="${AX+36}" y="${yl-2}" style="font-weight:800;fill:var(--accent)">${e.y}</text><text class="svgt" x="${AX+36}" y="${yl+11}">${e.s}</text>`;
    });
    $('stl-axis').innerHTML = `<h4 class="sux-h4">Trục thời gian đúng tỉ lệ</h4>
      <svg viewBox="0 0 285 ${H}" role="img" aria-label="Trục thời gian các sự kiện theo đúng tỉ lệ năm">${s}</svg>
      <p class="sux-small">Chấm xanh: em xếp đúng vị trí; chấm đỏ: xếp nhầm. Khoảng cách giữa các chấm tỉ lệ với số năm.</p>
      <div class="readout">Từ <b>${y0}</b> đến <b>${y1}</b> là <b>${y1 - y0} năm</b>. ${y1 >= 1914 && y0 <= 1789 ? 'Chỉ khoảng hơn một thế kỉ, châu Âu đi từ cách mạng tư sản đến chiến tranh thế giới!' : 'Để ý các sự kiện dồn dày ở cuối thế kỉ XIX, đầu thế kỉ XX: phong trào công nhân phát triển mạnh và mâu thuẫn giữa các nước đế quốc ngày càng gay gắt.'}</div>`;
  }
  $('stl-check').onclick = check;
  $('stl-new').onclick = start;
  start();
},

/* =========================================================
   5. PHÁT MINH, TÁC PHẨM VÀ "MỘT NGÀY KHÔNG CÓ PHÁT MINH"
   ========================================================= */
su_invent(p){
  const PAIRS = [
    {g:'kh', a:'Niu-tơn', b:'Định luật vạn vật hấp dẫn', f:'Nhà bác học Anh; tương truyền ông nảy ra ý tưởng khi thấy quả táo rơi.'},
    {g:'kh', a:'Lô-mô-nô-xốp', b:'Định luật bảo toàn khối lượng', f:'Nhà bác học Nga. Định luật này em đã gặp trong môn Khoa học tự nhiên 8 đấy!'},
    {g:'kh', a:'Đác-uyn', b:'Thuyết tiến hoá', f:'Cuốn "Nguồn gốc các loài" (1859) giải thích sinh vật biến đổi qua chọn lọc tự nhiên.'},
    {g:'kh', a:'Giêm Oát', b:'Máy hơi nước', f:'Máy hơi nước (1784) mở ra "thời đại hơi nước" của cách mạng công nghiệp.'},
    {g:'kh', a:'Pa-xtơ', b:'Vắc-xin phòng bệnh dại', f:'Năm 1885 ông cứu sống một cậu bé bị chó dại cắn. Ở Việt Nam có Viện Pasteur TP Hồ Chí Minh, Nha Trang mang tên ông.'},
    {g:'kh', a:'Mo-xơ', b:'Máy điện tín', f:'Bộ mã Mo-xơ dùng chấm và gạch: tín hiệu cấp cứu SOS là · · · – – – · · ·'},
    {g:'kh', a:'Ê-đi-xơn', b:'Bóng đèn điện', f:'Năm 1879 bóng đèn sợi đốt của Ê-đi-xơn sáng liên tục được nhiều giờ; ông có hơn 1 000 bằng sáng chế.'},
    {g:'kh', a:'Men-đê-lê-ép', b:'Bảng tuần hoàn các nguyên tố', f:'Năm 1869 ông sắp xếp các nguyên tố thành bảng, còn chừa ô trống cho nguyên tố chưa tìm ra.'},
    {g:'kh', a:'Gra-ham Beo', b:'Máy điện thoại', f:'Năm 1876, lần đầu tiên giọng nói con người được truyền qua dây điện.'},
    {g:'vh', a:'Vích-to Huy-gô', b:'"Những người khốn khổ"', f:'Nhà văn Pháp kể chuyện Giăng Van-giăng và cô bé Cô-dét, lên án xã hội bất công.'},
    {g:'vh', a:'Lép Tôn-xtôi', b:'"Chiến tranh và hoà bình"', f:'Đại văn hào Nga viết về cuộc kháng chiến của nhân dân Nga chống quân Na-pô-lê-ông năm 1812.'},
    {g:'vh', a:'Bét-tô-ven', b:'Bản giao hưởng số 9', f:'Nhạc sĩ Đức sáng tác khi đã gần như điếc hoàn toàn; đoạn "Hướng tới niềm vui" nay là bài ca của Liên minh châu Âu.'},
    {g:'vh', a:'Mác Tuên', b:'"Những cuộc phiêu lưu của Tom Xoay-ơ"', f:'Nhà văn Mỹ kể chuyện cậu bé tinh nghịch Tom bên dòng sông Mít-xi-xi-pi.'},
    {g:'vh', a:'Van Gốc', b:'Tranh "Hoa hướng dương"', f:'Hoạ sĩ Hà Lan với những nét cọ xoáy, sắc vàng rực rỡ.'}
  ];
  const INV = [
    {id:'steam', n:'Máy hơi nước, đầu máy xe lửa', w:'Giêm Oát, Xti-phen-xơn'},
    {id:'loom', n:'Máy kéo sợi, máy dệt', w:'Ha-gri-vơ, Các-rai'},
    {id:'light', n:'Bóng đèn điện', w:'Ê-đi-xơn'},
    {id:'tele', n:'Điện tín, điện thoại', w:'Mo-xơ, Gra-ham Beo'},
    {id:'vac', n:'Vắc-xin, phương pháp thanh trùng', w:'Pa-xtơ'}
  ];
  const DAY = [
    {h:'6:00', e:'💡', need:'light', on:'Bật đèn điện sáng trưng để chải tóc, soạn sách vở.', off:'Phải thắp đèn dầu, ánh sáng leo lét, khói ám đen cả bóng đèn.'},
    {h:'6:30', e:'🥛', need:'vac', on:'Uống hộp sữa đã được thanh trùng, để tủ lạnh vẫn ngon.', off:'Không có phương pháp thanh trùng của Pa-xtơ, sữa để lâu một chút đã chua hỏng.'},
    {h:'6:45', e:'👕', need:'loom', on:'Mặc bộ đồng phục mới, quần áo vải giá rẻ, nhiều kiểu.', off:'Vải dệt tay vừa đắt vừa lâu; có khi cả năm mới được may một bộ áo mới.'},
    {h:'7:00', e:'🚆', need:'steam', on:'Hàng hoá ở cửa hàng gần nhà được chở bằng tàu hoả, tàu biển từ khắp nơi về.', off:'Hàng chở bằng xe ngựa, thuyền buồm: đắt, chậm, nhiều thứ ở xa em không bao giờ được thấy.'},
    {h:'10:00', e:'💉', need:'vac', on:'Cô giáo nhắc cả lớp đi tiêm vắc-xin đúng lịch.', off:'Chưa có vắc-xin: bệnh dại, sởi, bạch hầu cướp đi rất nhiều trẻ em.'},
    {h:'17:00', e:'🧳', need:'steam', on:'Bố đi tàu hoả Bắc – Nam công tác, hôm sau đã tới nơi.', off:'Bố phải đi ngựa hoặc đi bộ, mất hàng tháng trời.'},
    {h:'19:30', e:'📞', need:'tele', on:'Gọi điện cho bà ở quê, nghe rõ tiếng bà cười.', off:'Phải viết thư nhờ người mang đi, cả tuần sau bà mới đọc được.'},
    {h:'21:00', e:'📚', need:'light', on:'Ôn bài dưới ánh đèn bàn.', off:'Học dưới đèn dầu mỏi mắt, đành đi ngủ sớm.'}
  ];
  let left, right, sel = {}, done, err, offs = {};
  p.innerHTML = SUX + `<style>
   .sinv-grid{display:grid;grid-template-columns:1fr 1.25fr;gap:6px 8px;margin-top:8px}
   .sinv-col{display:grid;gap:6px;align-content:start}
   .sinv-col .opt{margin:0;font-size:14px;padding:8px 9px;line-height:1.3}
   .sinv-col .opt.on{border-color:var(--accent);background:var(--accent-soft);font-weight:700}
   .sinv-col .opt.right{opacity:.75}
   .sinv-hd{font-size:12.5px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.03em}
   .sinv-tg{display:grid;gap:6px;margin-top:8px}
   .sinv-tg button{display:flex;justify-content:space-between;align-items:center;gap:8px;border:1.5px solid var(--ok);background:var(--ok-soft);color:var(--ink);border-radius:12px;padding:8px 12px;font-size:14.5px;text-align:left}
   .sinv-tg button[aria-pressed="false"]{border-color:var(--bad);background:var(--bad-soft)}
   .sinv-tg small{display:block;color:var(--muted);font-size:12.5px}
   .sinv-sw{flex:0 0 auto;width:42px;height:24px;border-radius:999px;background:var(--ok);position:relative}
   .sinv-sw::after{content:"";position:absolute;top:3px;left:21px;width:18px;height:18px;border-radius:50%;background:var(--paper);transition:left .2s}
   [aria-pressed="false"] .sinv-sw{background:var(--muted)}
   [aria-pressed="false"] .sinv-sw::after{left:3px}
   .sinv-day{list-style:none;padding:0;margin:10px 0 0;display:grid;gap:6px}
   .sinv-day li{display:flex;gap:10px;align-items:flex-start;border:1px solid var(--line);border-radius:12px;padding:8px 10px;background:var(--paper);font-size:14.5px}
   .sinv-day li.off{background:var(--bad-soft);border-color:var(--bad)}
   .sinv-day .h{font-weight:800;min-width:3.1em;color:var(--accent)}
   .sinv-day .e{font-size:20px;line-height:1}
   @media (prefers-reduced-motion:reduce){.sinv-sw::after{transition:none}}
  </style>
  <div class="sec lab"><h3>Ai làm ra điều gì?</h3>
   <p class="muted">Bấm một <b>người</b> ở cột trái rồi bấm <b>phát minh / tác phẩm</b> của người đó ở cột phải. Mỗi ván có 6 cặp ngẫu nhiên (khoa học và văn học nghệ thuật).</p>
   <div class="sux-top"><span id="sinv-cnt"></span><b id="sinv-err"></b></div>
   <div class="sinv-grid"><div class="sinv-col" id="sinv-l"><span class="sinv-hd">Người</span></div><div class="sinv-col" id="sinv-r"><span class="sinv-hd">Phát minh, tác phẩm</span></div></div>
   <div class="sux-fb" id="sinv-fb"></div>
   <div class="row" style="margin-top:8px"><button class="btn ghost" id="sinv-new">Ván mới</button></div>
  </div>
  <div class="sec lab"><h3>Một ngày không có phát minh</h3>
   <p class="muted"><b>Đoán trước:</b> nếu tắt "Bóng đèn điện", những lúc nào trong ngày của em bị ảnh hưởng? Bấm công tắc để tắt hoặc bật từng phát minh của thế kỉ XVIII–XIX và xem ngày của em thay đổi.</p>
   <div class="sinv-tg" id="sinv-tg"></div>
   <ul class="sinv-day" id="sinv-day"></ul>
   <div class="readout" id="sinv-out"></div>
  </div>`;
  function start(){
    const kh = shuffle(PAIRS.filter(x => x.g === 'kh')).slice(0, 4), vh = shuffle(PAIRS.filter(x => x.g === 'vh')).slice(0, 2);
    const set = kh.concat(vh);
    left = shuffle(set); right = shuffle(set); sel = {}; done = new Set(); err = 0;
    $('sinv-fb').className = 'sux-fb'; $('sinv-fb').innerHTML = ''; render();
  }
  function render(){
    $('sinv-cnt').textContent = `Đã ghép ${done.size}/${left.length}`;
    $('sinv-err').textContent = `Nhầm: ${err}`;
    const btn = (x, side) => { const d = done.has(x.a), on = sel[side] === x;
      return `<button class="opt ${d?'right':''} ${on?'on':''}" data-s="${side}" data-a="${esc(x.a)}" ${d?'disabled':''}>${side==='l'?x.a:x.b}</button>`; };
    $('sinv-l').innerHTML = '<span class="sinv-hd">Người</span>' + left.map(x => btn(x, 'l')).join('');
    $('sinv-r').innerHTML = '<span class="sinv-hd">Phát minh, tác phẩm</span>' + right.map(x => btn(x, 'r')).join('');
    document.querySelectorAll('#sinv-l [data-s], #sinv-r [data-s]').forEach(b => b.onclick = () => tap(b));
  }
  function tap(b){
    const side = b.dataset.s, x = PAIRS.find(q => q.a === b.dataset.a);
    sel[side] = sel[side] === x ? null : x;
    if(sel.l && sel.r){
      const f = $('sinv-fb');
      if(sel.l === sel.r){ done.add(sel.l.a); f.className = 'sux-fb ok'; f.innerHTML = `<b>Đúng: ${sel.l.a} → ${sel.l.b}.</b> ${sel.l.f}`;
        if(done.size === left.length) f.innerHTML += `<div style="margin-top:6px"><b>Hoàn thành ván với ${err} lần nhầm!</b> ${err === 0 ? '🏆' : ''} Bấm "Ván mới" để gặp thêm nhà khoa học, nghệ sĩ khác.</div>`;
        sel = {}; render();
      } else {
        err++; const a = sel.l, r = sel.r; sel = {}; render();
        f.className = 'sux-fb no'; f.innerHTML = `<b>Chưa đúng.</b> "${r.b}" không phải của ${a.a}. Thử lại nhé!`;
        shake($('sinv-r').parentNode);
      }
      return;
    }
    render();
  }
  $('sinv-new').onclick = start;
  /* Một ngày không có phát minh */
  function day(){
    $('sinv-tg').innerHTML = INV.map(v => `<button aria-pressed="${!offs[v.id]}" data-id="${v.id}"><span>${v.n}<small>${v.w}</small></span><span class="sinv-sw" aria-hidden="true"></span></button>`).join('');
    $('sinv-tg').querySelectorAll('[data-id]').forEach(b => b.onclick = () => { offs[b.dataset.id] = !offs[b.dataset.id]; day(); });
    $('sinv-day').innerHTML = DAY.map(d => { const o = offs[d.need];
      return `<li class="${o?'off':''}"><span class="h">${d.h}</span><span class="e" aria-hidden="true">${d.e}</span><span>${o ? '<b>❌</b> ' + d.off : d.on}</span></li>`; }).join('');
    const nOff = INV.filter(v => offs[v.id]).length, hit = DAY.filter(d => offs[d.need]).length;
    $('sinv-out').innerHTML = `<span class="sux-big">${hit}/${DAY.length} hoạt động trong ngày bị ảnh hưởng</span><br>` + (
      nOff === 0 ? 'Mọi thứ bình thường. Thử tắt một phát minh xem sao!' :
      nOff === INV.length ? 'Em vừa "quay về" khoảng năm 1750, trước cách mạng công nghiệp! Những phát minh của thế kỉ XVIII–XIX đã làm thay đổi tận gốc cuộc sống hằng ngày: sản xuất nhiều hơn, đi lại nhanh hơn, liên lạc tức thời và con người sống khoẻ, sống lâu hơn.' :
      'Mỗi phát minh tác động đến nhiều việc nhỏ trong ngày. Thứ ta coi là "đương nhiên" hôm nay từng là điều kì diệu cách đây chỉ khoảng 200 năm. (Tàu hoả, điện thoại ngày nay đã hiện đại hơn rất nhiều nhưng đều bắt nguồn từ những phát minh đó.)');
  }
  start(); day();
},

/* =========================================================
   6. NẾU EM LÀ THIÊN HOÀNG MINH TRỊ
   ========================================================= */
su_meiji(p){
  const SC = [
    {k:'Mở cửa', ctx:'Năm 1868. Chế độ Mạc phủ của Tướng quân (Sô-gun) vừa bị lật đổ, quyền lực trở về tay Thiên hoàng Minh Trị còn rất trẻ. Từ năm 1854, tàu chiến Mỹ đã ép Nhật Bản mở cửa; các nước phương Tây đang dòm ngó. Em sẽ làm gì?',
     o:[{t:'Tiến hành cải cách toàn diện, học hỏi phương Tây', ok:1, r:'Đúng như lịch sử! Tháng 1/1868, Thiên hoàng Minh Trị tuyên bố cải cách, gọi là <b>cuộc Duy tân Minh Trị</b>.'},
        {t:'Đóng cửa đất nước, cấm người phương Tây vào', r:'Nhà Thanh (Trung Quốc) và triều Nguyễn (Việt Nam) đã chọn đóng cửa và đều bị phương Tây dùng súng đạn buộc mở cửa, rồi xâm lược.'},
        {t:'Giữ nguyên mọi thứ, chỉ mua thêm súng tàu', r:'Mua vũ khí mà không đổi mới chính trị, kinh tế, giáo dục thì không có công nghiệp và người giỏi để sử dụng; đất nước vẫn yếu.'}]},
    {k:'Chính trị', ctx:'Bộ máy nhà nước cũ do các lãnh chúa nắm giữ, mỗi vùng một kiểu. Em tổ chức lại chính quyền thế nào?',
     o:[{t:'Xoá bỏ chế độ Mạc phủ, lập chính phủ mới, ban hành Hiến pháp, theo chế độ quân chủ lập hiến', ok:1, r:'Nhật Bản thành lập chính phủ mới; năm <b>1889 ban hành Hiến pháp</b>, xác lập chế độ <b>quân chủ lập hiến</b>.'},
        {t:'Trả quyền lại cho Tướng quân (Sô-gun) như cũ', r:'Chế độ Mạc phủ bảo thủ chính là nguyên nhân khiến Nhật trì trệ và phải kí các hiệp ước bất bình đẳng. Quay lại là đi lùi!'}]},
    {k:'Kinh tế', ctx:'Ở nông thôn, ruộng đất không được mua bán; mỗi vùng có tiền tệ, thuế khoá riêng. Em làm gì để kinh tế mạnh lên?',
     o:[{t:'Thống nhất tiền tệ và thị trường, cho mua bán ruộng đất, xây đường sắt, nhà máy', ok:1, r:'Nhật làm đúng như vậy: thống nhất tiền tệ, thị trường, cho phép mua bán ruộng đất, phát triển kinh tế tư bản chủ nghĩa, xây dựng đường sắt, đường bộ. Các công ti lớn như <b>Mít-xưi, Mít-xu-bi-si</b> ra đời.'},
        {t:'Giữ nền nông nghiệp cũ, hạn chế buôn bán với nước ngoài', r:'Không có công nghiệp và thương nghiệp, Nhật sẽ mãi nghèo và yếu như nhiều nước châu Á khác thời đó.'}]},
    {k:'Quân sự', ctx:'Quân đội vẫn dựa vào các võ sĩ Sa-mu-rai với gươm giáo truyền thống. Em cải cách quân đội ra sao?',
     o:[{t:'Tổ chức, huấn luyện quân đội theo kiểu phương Tây; thực hiện chế độ nghĩa vụ quân sự; phát triển công nghiệp quốc phòng', ok:1, r:'Đúng! Quân đội Nhật được tổ chức và huấn luyện theo kiểu phương Tây, <b>chế độ nghĩa vụ quân sự</b> thay cho chế độ trưng binh; Nhật tự đóng tàu chiến, sản xuất vũ khí.'},
        {t:'Chỉ dựa vào tinh thần võ sĩ Sa-mu-rai', r:'Tinh thần dũng cảm là quý, nhưng gươm giáo không thể chống lại tàu chiến, đại bác của phương Tây.'}]},
    {k:'Giáo dục', ctx:'Muốn đất nước mạnh, cần có người giỏi. Em chọn cách giáo dục nào?',
     o:[{t:'Giáo dục bắt buộc, chú trọng khoa học kĩ thuật, cử học sinh giỏi đi du học phương Tây', ok:1, r:'Nhật thi hành chính sách <b>giáo dục bắt buộc</b>, tăng nội dung khoa học kĩ thuật, cử người giỏi du học. Đây được coi là "chìa khoá" của Duy tân Minh Trị.'},
        {t:'Chỉ dạy kinh sách cổ, thi cử theo lối cũ', r:'Lối học cũ chỉ đào tạo người thuộc lòng sách vở, không có kĩ sư, nhà khoa học để xây dựng công nghiệp.'},
        {t:'Chỉ cho con em quý tộc đi học', r:'Nếu chỉ một nhóm nhỏ được học, đất nước sẽ thiếu nghiêm trọng người lao động có kiến thức.'}]}
  ];
  let i, pts, ans;
  p.innerHTML = SUX + `<style>
   .smj-ctx{border:2px solid var(--accent);border-radius:16px;background:var(--paper);padding:12px 14px;font-size:15.5px}
   .smj-ctx .k{display:inline-block;font-size:12.5px;font-weight:800;color:var(--accent);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px}
   .smj-opts .opt{font-size:15px}
   .smj-meter{display:flex;align-items:center;gap:10px;font-size:13.5px;margin:6px 0}
   .smj-meter .bar{flex:1;height:12px;border-radius:999px;background:var(--line);overflow:hidden;margin:0}
   .smj-meter .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:999px;transition:width .4s}
   @media (prefers-reduced-motion:reduce){.smj-meter .bar i{transition:none}}
  </style>
  <div class="sec lab"><h3>Nếu em là Thiên hoàng Minh Trị</h3>
   <p class="muted">Giữa thế kỉ XIX, Nhật Bản đứng trước nguy cơ bị phương Tây xâm lược. Em hãy thử làm người quyết định: qua ${SC.length} tình huống, chọn chính sách em thấy hợp lí nhất. Sau mỗi lựa chọn, lịch sử sẽ cho em biết Nhật Bản đã thật sự làm gì.</p>
   <div class="smj-meter"><span>Sức mạnh nước Nhật</span><span class="bar"><i id="smj-bar"></i></span><b id="smj-pts"></b></div>
   <div id="smj-stage"></div>
  </div>
  <div class="sec lab"><h3>Cách mạng Tân Hợi (1911) ở Trung Quốc</h3>
   <p class="muted">Trong khi Nhật Bản lớn mạnh, Trung Quốc bị các nước đế quốc xâu xé. Đầu thế kỉ XX, những người yêu nước Trung Quốc đứng lên làm cách mạng. Bấm từng dòng để kiểm tra trí nhớ của em: đoán trước rồi mới mở.</p>
   <div id="smj-th"></div>
  </div>`;
  const stage = $('smj-stage');
  function meter(){ $('smj-bar').style.width = (100*pts/SC.length) + '%'; $('smj-pts').textContent = `${pts}/${SC.length}`; }
  function start(){ i = 0; pts = 0; ans = []; meter(); show(); }
  function show(){
    const s = SC[i];
    stage.innerHTML = `<div class="sux-top"><span>Tình huống ${i+1}/${SC.length}</span></div>
      <div class="smj-ctx"><span class="k">${s.k}</span><br>${s.ctx}</div>
      <div class="smj-opts">${shuffle(s.o).map(o => `<button class="opt" data-j="${s.o.indexOf(o)}">${o.t}</button>`).join('')}</div>
      <div class="sux-fb" id="smj-fb"></div>`;
    stage.querySelectorAll('[data-j]').forEach(b => b.onclick = () => pick(b));
  }
  function pick(b){
    const s = SC[i], o = s.o[+b.dataset.j], best = s.o.find(x => x.ok);
    stage.querySelectorAll('[data-j]').forEach(x => { x.disabled = true; if(s.o[+x.dataset.j].ok) x.classList.add('right'); });
    if(!o.ok) b.classList.add('wrong'); else pts++;
    ans.push(!!o.ok); meter();
    const f = $('smj-fb'); f.className = 'sux-fb ' + (o.ok ? 'ok' : 'no');
    f.innerHTML = `<b>${o.ok ? 'Quyết định sáng suốt!' : 'Hãy xem điều gì sẽ xảy ra...'}</b> ${o.r}${o.ok ? '' : `<br><b>Nhật Bản đã chọn:</b> ${best.r}`}
      <div class="row" style="margin-top:8px;justify-content:flex-end"><button class="btn" id="smj-next">${i < SC.length - 1 ? 'Tình huống tiếp →' : 'Xem kết quả'}</button></div>`;
    $('smj-next').onclick = () => { i++; if(i < SC.length) show(); else end(); };
  }
  function end(){
    stage.innerHTML = `<div class="readout"><span class="sux-big">Em chọn giống lịch sử ${pts}/${SC.length} lần.</span><br>
      ${pts === SC.length ? 'Em có tầm nhìn của một nhà cải cách! 🏆' : 'Không sao, giờ em đã biết Nhật Bản thực sự đã làm gì.'}
      <br><b>Kết quả của Duy tân Minh Trị:</b> Nhật Bản thoát khỏi nguy cơ trở thành thuộc địa, trở thành nước tư bản công nghiệp phát triển đầu tiên ở châu Á. Cuối thế kỉ XIX, đầu thế kỉ XX, Nhật chuyển sang chủ nghĩa đế quốc, gây chiến tranh với Trung Quốc (1894–1895) và Nga (1904–1905) để bành trướng.</div>
     <h4 class="sux-h4">So sánh: Nhật Bản và Trung Quốc (nhà Thanh)</h4>
     <div class="tbl sux-tbl"><table>
      <tr><th></th><th>Nhật Bản</th><th>Trung Quốc</th></tr>
      <tr><th>Thái độ với phương Tây</th><td>Chủ động mở cửa, học hỏi cái hay</td><td>Bảo thủ, đóng cửa; bị Anh ép mở cửa qua Chiến tranh thuốc phiện (1840–1842)</td></tr>
      <tr><th>Cải cách</th><td>Duy tân toàn diện từ 1868, có Thiên hoàng đứng đầu ủng hộ</td><td>Duy tân Mậu Tuất (1898) của Khang Hữu Vi, Lương Khải Siêu chỉ kéo dài 103 ngày thì bị phái Từ Hi Thái hậu dập tắt</td></tr>
      <tr><th>Kết quả</th><td>Trở thành cường quốc, rồi đế quốc</td><td>Bị các nước đế quốc xâu xé, trở thành nước nửa thuộc địa, nửa phong kiến</td></tr>
     </table></div>
     <div class="readout"><b>Bài học:</b> Cùng đứng trước nguy cơ như nhau, nước nào dám đổi mới kịp thời thì giữ được độc lập. Đó cũng là điều mà các sĩ phu Việt Nam như Phan Bội Châu đầu thế kỉ XX rất ngưỡng mộ, phát động phong trào Đông du sang Nhật học tập.</div>
     <div class="row" style="margin-top:10px;justify-content:center"><button class="btn" id="smj-again">Chơi lại</button></div>`;
    $('smj-again').onclick = start;
  }
  const TH = [
    ['Thời gian', 'Bùng nổ bằng <b>khởi nghĩa Vũ Xương ngày 10/10/1911</b> (năm Tân Hợi), lan ra khắp các tỉnh miền Nam, miền Trung.'],
    ['Lãnh đạo', '<b>Trung Quốc Đồng minh hội</b> (thành lập 1905), đứng đầu là <b>Tôn Trung Sơn</b>.'],
    ['Cương lĩnh', '<b>Chủ nghĩa Tam dân</b>: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc.'],
    ['Kết quả', 'Lật đổ triều Mãn Thanh, chấm dứt chế độ quân chủ chuyên chế hơn 2 000 năm. <b>Trung Hoa Dân quốc</b> thành lập (1/1912), Tôn Trung Sơn làm Đại Tổng thống lâm thời.'],
    ['Tính chất', 'Cuộc cách mạng <b>dân chủ tư sản</b>, nhưng chưa triệt để.'],
    ['Hạn chế', 'Không thủ tiêu thật sự giai cấp phong kiến, không giải quyết ruộng đất cho nông dân, không chống đế quốc; chính quyền sau đó rơi vào tay Viên Thế Khải.'],
    ['Ảnh hưởng', 'Cổ vũ phong trào giải phóng dân tộc ở châu Á, trong đó có <b>Việt Nam</b>.']
  ];
  const open = new Set();
  function th(){
    $('smj-th').innerHTML = `<div class="tbl sux-tbl"><table>${TH.map((r, j) => `<tr><th style="width:30%">${r[0]}</th><td>${open.has(j) ? r[1] : `<button class="sux-chip" data-j="${j}">Bấm để mở</button>`}</td></tr>`).join('')}</table></div>
      <div class="row" style="margin-top:8px"><button class="btn ghost" id="smj-all">${open.size === TH.length ? 'Ẩn hết để tự kiểm tra' : 'Mở tất cả'}</button></div>`;
    $('smj-th').querySelectorAll('[data-j]').forEach(b => b.onclick = () => { open.add(+b.dataset.j); th(); });
    $('smj-all').onclick = () => { if(open.size === TH.length) open.clear(); else TH.forEach((_, j) => open.add(j)); th(); };
  }
  start(); th();
},

/* =========================================================
   7. VIỆT NAM 1858–1913: PHÁP XÂM LƯỢC VÀ NHÂN DÂN KHÁNG CHIẾN
   ========================================================= */
su_vn1858(p){
  const PT = {
    dn:{n:'Đà Nẵng', lat:16.07, lon:108.22, lp:[8,8,'start']},
    hue:{n:'Huế', lat:16.46, lon:107.59, lp:[6,-6,'start']},
    ts:{n:'Tân Sở', lat:16.79, lon:106.98, lp:[-8,0,'end']},
    hk:{n:'Hương Khê', lat:18.18, lon:105.70, lp:[8,4,'start']},
    hn:{n:'Hà Nội', lat:21.03, lon:105.85, lp:[-8,8,'end']},
    yt:{n:'Yên Thế', lat:21.52, lon:106.12, lp:[8,0,'start']},
    gd:{n:'Gia Định', lat:10.78, lon:106.70, lp:[-10,4,'end'], s:1},
    bh:{n:'Biên Hoà', lat:10.95, lon:106.82, lp:[-10,-4,'end'], s:1},
    dt:{n:'Định Tường', lat:10.36, lon:106.36, lp:[8,23,'middle'], s:1},
    vl:{n:'Vĩnh Long', lat:10.25, lon:105.97, lp:[-10,4,'end'], s:1},
    ag:{n:'An Giang', lat:10.70, lon:105.12, lp:[0,-8,'middle'], s:1},
    ht:{n:'Hà Tiên', lat:10.38, lon:104.49, lp:[0,15,'middle'], s:1}
  };
  const TREATY = [
    {k:'nt', n:'Nhâm Tuất 1862'}, {k:'gt', n:'Giáp Tuất 1874'}, {k:'hm', n:'Hác-măng 1883'}, {k:'pt', n:'Pa-tơ-nốt 1884'}
  ];
  const ST = [
    {y:'1858', t:'Pháp nổ súng ở Đà Nẵng', hl:['dn'], lost:[], tr:null,
     d:'Ngày <b>1/9/1858</b>, liên quân Pháp – Tây Ban Nha tấn công bán đảo Sơn Trà (Đà Nẵng), mở đầu cuộc xâm lược Việt Nam. Quân dân ta dưới sự chỉ huy của <b>Nguyễn Tri Phương</b> đắp luỹ, thực hiện "vườn không nhà trống", làm kế hoạch "đánh nhanh thắng nhanh" của Pháp thất bại.', who:['Nguyễn Tri Phương']},
    {y:'1859–1862', t:'Mất ba tỉnh miền Đông Nam Kỳ', hl:['gd','bh','dt','vl'], lost:['gd','bh','dt'], tr:'nt',
     d:'Năm 1859 Pháp đánh Gia Định; 1861 chiếm Định Tường, Biên Hoà, rồi Vĩnh Long (1862). Ngày <b>5/6/1862</b> triều Nguyễn kí <b>Hiệp ước Nhâm Tuất</b>, nhượng hẳn 3 tỉnh miền Đông Nam Kỳ (Gia Định, Định Tường, Biên Hoà) và đảo Côn Lôn cho Pháp (Pháp trả lại Vĩnh Long). Nhân dân vẫn chiến đấu: <b>Nguyễn Trung Trực</b> đốt cháy tàu Hy Vọng trên sông Vàm Cỏ Đông (12/1861); <b>Trương Định</b> không tuân lệnh bãi binh, được nhân dân suy tôn "Bình Tây đại nguyên soái".', who:['Nguyễn Trung Trực','Trương Định']},
    {y:'1867', t:'Mất ba tỉnh miền Tây Nam Kỳ', hl:['vl','ag','ht'], lost:['gd','bh','dt','vl','ag','ht'], tr:null,
     d:'Tháng 6/1867, Pháp chiếm nốt 3 tỉnh miền Tây Nam Kỳ (Vĩnh Long, An Giang, Hà Tiên) mà không tốn một viên đạn. Cả <b>6 tỉnh Nam Kỳ</b> rơi vào tay Pháp. Năm 1868 Nguyễn Trung Trực đánh đồn Kiên Giang, câu nói của ông còn vang mãi: "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây".', who:['Nguyễn Trung Trực']},
    {y:'1873', t:'Pháp đánh Bắc Kỳ lần thứ nhất', hl:['hn'], lost:['gd','bh','dt','vl','ag','ht'], tr:'gt',
     d:'Ngày <b>20/11/1873</b>, Pháp (Gác-ni-ê chỉ huy) đánh thành Hà Nội; Nguyễn Tri Phương bị thương, nhịn ăn cho đến chết. Ngày 21/12/1873, quân Cờ Đen của Lưu Vĩnh Phúc phục kích ở <b>Cầu Giấy</b>, Gác-ni-ê tử trận. Nhưng năm 1874 triều đình lại kí <b>Hiệp ước Giáp Tuất</b>, thừa nhận cả 6 tỉnh Nam Kỳ là đất của Pháp.', who:['Nguyễn Tri Phương']},
    {y:'1882', t:'Pháp đánh Bắc Kỳ lần thứ hai', hl:['hn'], lost:['gd','bh','dt','vl','ag','ht','hn'], tr:null,
     d:'Ngày <b>25/4/1882</b>, Pháp (Ri-vi-e chỉ huy) đánh thành Hà Nội lần thứ hai. Tổng đốc <b>Hoàng Diệu</b> chỉ huy quân dân chiến đấu đến cùng; thành mất, ông thắt cổ tự vẫn. Ngày 19/5/1883, Ri-vi-e cũng tử trận ở Cầu Giấy như Gác-ni-ê.', who:['Hoàng Diệu']},
    {y:'1883', t:'Hiệp ước Hác-măng', hl:['hue'], lost:['gd','bh','dt','vl','ag','ht','hn'], tr:'hm',
     d:'Tháng 8/1883, Pháp tấn công cửa biển Thuận An, sát kinh thành Huế. Ngày <b>25/8/1883</b> triều đình kí <b>Hiệp ước Hác-măng</b>: Việt Nam đặt dưới sự "bảo hộ" của Pháp; Nam Kỳ là thuộc địa, Bắc Kỳ là xứ bảo hộ, Trung Kỳ giao cho triều đình quản lí.', who:[]},
    {y:'1884', t:'Hiệp ước Pa-tơ-nốt', hl:['hue'], lost:['gd','bh','dt','vl','ag','ht','hn','hue'], tr:'pt',
     d:'Ngày <b>6/6/1884</b>, <b>Hiệp ước Pa-tơ-nốt</b> được kí, về cơ bản giống Hác-măng. Từ đây, Việt Nam chính thức trở thành nước thuộc địa nửa phong kiến. Nhưng cuộc kháng chiến của nhân dân vẫn tiếp tục!', who:[]},
    {y:'1885', t:'Phong trào Cần vương', hl:['hue','ts','hk'], lost:['gd','bh','dt','vl','ag','ht','hn','hue'], tr:null,
     d:'Đêm 4 rạng sáng 5/7/1885, phái chủ chiến do <b>Tôn Thất Thuyết</b> đứng đầu tấn công Pháp ở kinh thành Huế nhưng thất bại. Ông đưa vua <b>Hàm Nghi</b> ra <b>Tân Sở</b> (Quảng Trị), ngày 13/7/1885 nhân danh vua xuống <b>chiếu Cần vương</b> kêu gọi văn thân, sĩ phu và nhân dân giúp vua cứu nước. Tiêu biểu nhất là <b>khởi nghĩa Hương Khê</b> (Hà Tĩnh, 1885–1896) do <b>Phan Đình Phùng</b> và Cao Thắng lãnh đạo.', who:['Tôn Thất Thuyết','Hàm Nghi','Phan Đình Phùng']},
    {y:'1884–1913', t:'Khởi nghĩa Yên Thế', hl:['yt'], lost:['gd','bh','dt','vl','ag','ht','hn','hue'], tr:null,
     d:'Ở Yên Thế (Bắc Giang), nông dân tự đứng lên giữ đất, giữ làng, không theo chiếu Cần vương. Thủ lĩnh nổi tiếng nhất là <b>Hoàng Hoa Thám (Đề Thám)</b>, "Hùm thiêng Yên Thế". Cuộc khởi nghĩa kéo dài <b>gần 30 năm</b>, lâu nhất trong các phong trào chống Pháp cuối thế kỉ XIX, đến năm 1913 mới tan rã sau khi Đề Thám bị sát hại.', who:['Hoàng Hoa Thám']}
  ];
  const QZ = [
    {q:'Hiệp ước nào nhượng 3 tỉnh miền Đông Nam Kỳ cho Pháp?', o:['Nhâm Tuất (1862)','Giáp Tuất (1874)','Hác-măng (1883)','Pa-tơ-nốt (1884)'], w:'Hiệp ước Nhâm Tuất (5/6/1862) nhượng Gia Định, Định Tường, Biên Hoà và đảo Côn Lôn.'},
    {q:'Ai chỉ huy giữ thành Hà Nội năm 1882 và tự vẫn khi thành mất?', o:['Hoàng Diệu','Nguyễn Tri Phương','Tôn Thất Thuyết','Phan Đình Phùng'], w:'Tổng đốc Hoàng Diệu. Nguyễn Tri Phương hi sinh khi Pháp đánh Hà Nội lần thứ nhất (1873). Hà Nội hiện có phố Hoàng Diệu cạnh Hoàng thành Thăng Long.'},
    {q:'Chiếu Cần vương (1885) được ban ra nhân danh vua nào?', o:['Hàm Nghi','Tự Đức','Đồng Khánh','Thành Thái'], w:'Tôn Thất Thuyết nhân danh vua Hàm Nghi xuống chiếu Cần vương ở Tân Sở (Quảng Trị).'},
    {q:'Cuộc khởi nghĩa nào kéo dài gần 30 năm (1884–1913)?', o:['Yên Thế','Hương Khê','Ba Đình','Bãi Sậy'], w:'Khởi nghĩa Yên Thế của nông dân, do Hoàng Hoa Thám lãnh đạo. Hương Khê kéo dài 1885–1896.'},
    {q:'Ai chỉ huy nghĩa quân đốt cháy tàu Hy Vọng của Pháp trên sông Vàm Cỏ Đông?', o:['Nguyễn Trung Trực','Trương Định','Hoàng Hoa Thám','Hoàng Diệu'], w:'Nguyễn Trung Trực (12/1861). Ở Rạch Giá (Kiên Giang) có đền thờ ông.'}
  ];
  const BM = {lon0:103.8, lat1:22.2, s:30, k:0.967, x0:10, y0:10};
  const BI = {lon0:104.3, lat1:11.3, s:63, k:0.98, x0:175, y0:20};
  const COAST = [[21.52,107.97],[20.95,107.07],[20.72,106.79],[20.56,106.57],[20.13,106.30],[19.74,105.90],[18.82,105.72],[18.47,105.87],[17.95,106.48],[17.48,106.62],[17.02,107.11],[16.56,107.63],[16.23,108.07],[16.07,108.22],[15.88,108.38],[15.40,108.80],[14.67,109.07],[13.77,109.23],[13.09,109.32],[12.65,109.46],[12.24,109.20],[11.92,109.16],[11.56,108.99],[11.36,109.02],[10.93,108.28],[10.66,107.77],[10.35,107.08],[10.40,106.80],[9.92,106.62],[9.63,106.50],[9.32,105.98],[9.25,105.75],[9.03,105.42],[8.62,104.72],[9.04,104.82],[10.01,105.08],[10.25,104.60],[10.38,104.49]];
  let st = 0, qi, qsc, qdone;
  p.innerHTML = SUX + `<style>
   .svn-pulse{animation:svnp 1.4s ease-out infinite;transform-box:fill-box;transform-origin:center}
   @keyframes svnp{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(1.6)}}
   @media (prefers-reduced-motion:reduce){.svn-pulse{animation:none;opacity:.6}}
   .svn-wrap{display:grid;grid-template-columns:1fr;gap:10px}
   @media(min-width:640px){.svn-wrap{grid-template-columns:1.1fr 1fr;align-items:start}}
   .svn-steps{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}
   .svn-steps .sux-chip{padding:5px 9px;font-size:13px}
   .svn-tr{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
   .svn-tr span{font-size:12.5px;border-radius:999px;padding:2px 9px;border:1px dashed var(--line);color:var(--muted)}
   .svn-tr span.past{border-style:solid;border-color:var(--bad);color:var(--ink)}
   .svn-tr span.now{border-style:solid;border-color:var(--bad);background:var(--bad-soft);color:var(--ink);font-weight:800}
   .svn-who{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
   .svn-who span{font-size:13px;border-radius:999px;padding:2px 10px;background:var(--ok-soft);border:1px solid var(--ok)}
   .svn-leg{display:flex;flex-wrap:wrap;gap:4px 12px;font-size:12.5px;color:var(--muted);margin-top:6px}
   .svn-leg i{display:inline-block;width:11px;height:11px;border-radius:50%;border:1px solid var(--ink);vertical-align:-1px;margin-right:4px}
  </style>
  <div class="sec lab"><h3>Hành trình 1858–1913 trên sơ đồ</h3>
   <p class="muted">Bấm <b>Tiếp ▶</b> để đi qua từng mốc. Địa điểm liên quan sẽ sáng lên, các hiệp ước triều Nguyễn đã kí hiện ở dưới. <b>Thử:</b> trước mỗi bước, đoán xem Pháp sẽ đánh vào đâu tiếp theo.</p>
   <div class="svn-steps" id="svn-steps"></div>
   <div class="svn-wrap">
    <div><svg viewBox="0 0 360 440" id="svn-map" role="img" aria-label="Sơ đồ giản lược Việt Nam với các địa điểm lịch sử 1858 đến 1913"></svg>
     <div class="svn-leg"><span><i style="background:var(--hl)"></i>Đang nói tới</span><span><i style="background:var(--bad)"></i>Đã rơi vào tay Pháp</span><span><i style="background:var(--paper)"></i>Địa điểm khác</span></div>
     <p class="sux-small">Sơ đồ giản lược, không theo tỉ lệ chính xác: chấm đặt theo kinh độ, vĩ độ thật; nét đứt nối một số điểm ven biển thay cho đường bờ biển. Ô bên phải phóng to vùng Nam Kỳ.</p></div>
    <div><div class="readout" id="svn-out"></div>
     <div class="row" style="margin-top:8px"><button class="btn ghost" id="svn-prev">◀ Trước</button><button class="btn" id="svn-next">Tiếp ▶</button></div></div>
   </div>
  </div>
  <div class="sec lab"><h3>Câu hỏi nhanh</h3>
   <p class="muted">${QZ.length} câu kiểm tra lại những gì em vừa xem trên sơ đồ.</p>
   <div id="svn-quiz"></div>
  </div>`;
  const P = id => PT[id].s ? proj(BI, PT[id].lon, PT[id].lat) : proj(BM, PT[id].lon, PT[id].lat);
  function dot(x, y, fill, r, hl){
    return (hl ? `<circle class="svn-pulse" cx="${x}" cy="${y}" r="${r+7}" fill="none" stroke="var(--accent)" stroke-width="2.5"/>` : '') +
      `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="var(--ink)" stroke-width="1.3"/>`;
  }
  function map(){
    const S = ST[st];
    const fillOf = id => S.hl.includes(id) ? 'var(--hl)' : S.lost.includes(id) ? 'var(--bad)' : 'var(--paper)';
    let s = `<defs><clipPath id="svn-clip"><rect x="168" y="8" width="188" height="112" rx="8"/></clipPath></defs>`;
    s += grid(BM, [104,106,108,110,112,114], [10,12,14,16,18,20,22], 2, 2, 358, 438);
    s += `<polyline points="${COAST.map(c => proj(BM, c[1], c[0]).join(',')).join(' ')}" fill="none" stroke="var(--liquid)" stroke-width="1.8" stroke-dasharray="5 3"/>`;
    s += `<text class="svgm" x="${proj(BM,111.5,13.5)[0]}" y="${proj(BM,111.5,13.5)[1]}" text-anchor="middle" style="font-size:12px;font-style:italic">Biển Đông</text>`;
    /* Quần đảo Hoàng Sa, Trường Sa của Việt Nam */
    [[16.5,111.6],[16.8,112.3],[16.3,112.0]].forEach(c => { const q = proj(BM, c[1], c[0]); s += `<circle cx="${q[0]}" cy="${q[1]}" r="1.8" fill="var(--muted)"/>`; });
    [[10.4,114.3],[9.9,114.0],[8.65,111.9],[10.7,115.0],[9.4,113.2]].forEach(c => { const q = proj(BM, c[1], c[0]); s += `<circle cx="${q[0]}" cy="${q[1]}" r="1.8" fill="var(--muted)"/>`; });
    const hs = proj(BM, 112, 16.5), tsa = proj(BM, 113.6, 9.8);
    s += `<text class="svgm" x="${hs[0]}" y="${hs[1]+14}" text-anchor="middle" style="font-size:9.5px">QĐ. Hoàng Sa</text><text class="svgm" x="${tsa[0]}" y="${tsa[1]+16}" text-anchor="middle" style="font-size:9.5px">QĐ. Trường Sa</text>`;
    /* khung Nam Kỳ trên bản đồ chính + ô phóng to */
    const a = proj(BM, 104.3, 11.3), b = proj(BM, 107.2, 9.9);
    s += `<rect x="${a[0]}" y="${a[1]}" width="${b[0]-a[0]}" height="${b[1]-a[1]}" fill="none" stroke="var(--muted)" stroke-dasharray="3 2"/>`;
    s += `<line x1="${b[0]}" y1="${a[1]}" x2="168" y2="120" stroke="var(--muted)" stroke-dasharray="3 2"/>`;
    s += `<text class="svgm" x="${a[0]+2}" y="${b[1]+11}" style="font-size:9.5px">Nam Kỳ</text>`;
    Object.keys(PT).forEach(id => { if(!PT[id].s) return; const q = proj(BM, PT[id].lon, PT[id].lat); s += `<circle cx="${q[0]}" cy="${q[1]}" r="2.6" fill="${fillOf(id)}" stroke="var(--ink)" stroke-width=".8"/>`; });
    s += `<rect x="168" y="8" width="188" height="112" rx="8" fill="var(--card)" stroke="var(--muted)"/>`;
    s += `<g clip-path="url(#svn-clip)"><polyline points="${COAST.map(c => proj(BI, c[1], c[0]).join(',')).join(' ')}" fill="none" stroke="var(--liquid)" stroke-width="1.8" stroke-dasharray="5 3"/></g>`;
    s += `<text class="svgm" x="352" y="116" text-anchor="end" style="font-size:9px">Phóng to Nam Kỳ</text>`;
    Object.keys(PT).forEach(id => { const t = PT[id], [x, y] = P(id), on = S.hl.includes(id);
      s += dot(x, y, fillOf(id), t.s ? 5 : 5.5, on) + `<text class="svgt" x="${x+t.lp[0]}" y="${y+t.lp[1]}" text-anchor="${t.lp[2]}" style="font-weight:${on?800:500};font-size:${t.s?10.5:11}px">${t.n}</text>`; });
    $('svn-map').innerHTML = s;
  }
  function render(){
    const S = ST[st], tIdx = TREATY.findIndex(t => t.k === S.tr);
    const reached = new Set(); ST.slice(0, st + 1).forEach(x => { if(x.tr) reached.add(x.tr); });
    $('svn-steps').innerHTML = ST.map((x, j) => `<button class="sux-chip ${j===st?'on':''}" data-j="${j}">${x.y}</button>`).join('');
    $('svn-steps').querySelectorAll('[data-j]').forEach(b => b.onclick = () => { st = +b.dataset.j; render(); });
    $('svn-out').innerHTML = `<span class="sux-big">${S.y}: ${S.t}</span><br>${S.d}
      ${S.who.length ? `<div class="svn-who">${S.who.map(w => `<span>👤 ${w}</span>`).join('')}</div>` : ''}
      <div style="margin-top:8px;font-size:13px;color:var(--muted)">Các hiệp ước triều Nguyễn đã kí:</div>
      <div class="svn-tr">${TREATY.map((t, j) => `<span class="${j===tIdx?'now':reached.has(t.k)?'past':''}">${reached.has(t.k) ? '📜 ' + t.n : '?'}</span>`).join('')}</div>`;
    $('svn-prev').disabled = st === 0;
    $('svn-next').disabled = st === ST.length - 1;
    map();
  }
  $('svn-prev').onclick = () => { if(st > 0){ st--; render(); } };
  $('svn-next').onclick = () => { if(st < ST.length - 1){ st++; render(); } };
  /* Câu hỏi nhanh */
  function qstart(){ qi = 0; qsc = 0; qdone = false; qshow(); }
  function qshow(){
    const q = QZ[qi], box = $('svn-quiz');
    box.innerHTML = `<div class="sux-top"><span>Câu ${qi+1}/${QZ.length}</span><b>⭐ ${qsc}</b></div>
      <p style="font-weight:600;margin:4px 0">${q.q}</p>
      ${shuffle(q.o).map(o => `<button class="opt" data-o="${esc(o)}">${o}</button>`).join('')}
      <div class="sux-fb" id="svn-qfb"></div>`;
    box.querySelectorAll('[data-o]').forEach(b => b.onclick = () => {
      if(qdone) return; qdone = true;
      const ok = b.dataset.o === q.o[0]; if(ok) qsc++;
      box.querySelectorAll('[data-o]').forEach(x => { x.disabled = true; if(x.dataset.o === q.o[0]) x.classList.add('right'); });
      if(!ok) b.classList.add('wrong');
      const f = $('svn-qfb'); f.className = 'sux-fb ' + (ok ? 'ok' : 'no');
      f.innerHTML = `<b>${ok ? 'Đúng rồi!' : 'Chưa đúng.'}</b> ${q.w}<div class="row" style="margin-top:8px;justify-content:flex-end"><button class="btn" id="svn-qn">${qi < QZ.length - 1 ? 'Câu tiếp →' : 'Xem kết quả'}</button></div>`;
      $('svn-qn').onclick = () => { qi++; qdone = false; if(qi < QZ.length) qshow(); else qend(); };
    });
  }
  function qend(){
    $('svn-quiz').innerHTML = `<div class="readout"><span class="sux-big">Em đúng ${qsc}/${QZ.length} câu.</span><br>${qsc === QZ.length ? 'Xuất sắc! 🏆' : 'Xem lại các mốc trên sơ đồ rồi làm lại nhé.'}<br>Nhớ nhanh 4 hiệp ước theo thứ tự: <b>Nhâm Tuất (1862) → Giáp Tuất (1874) → Hác-măng (1883) → Pa-tơ-nốt (1884)</b>: mỗi hiệp ước lại mất thêm đất, mất thêm chủ quyền.</div>
      <div class="row" style="margin-top:10px;justify-content:center"><button class="btn" id="svn-qa">Làm lại</button></div>`;
    $('svn-qa').onclick = qstart;
  }
  render(); qstart();
}

});
})();
