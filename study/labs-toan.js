/* Khám phá (thí nghiệm ảo) môn Toán 8 */
window.LAB_EXT = window.LAB_EXT || {};
(function(){
'use strict';
/* ---------- tiện ích dùng chung ---------- */
const $ = id => document.getElementById(id);
const COL = {pink:'#EC6FAE', purple:'#9B6BDE', blue:'#4FA3E0', orange:'#F2A93B', green:'#34B37E', gold:'#F2B33D'};
const nf = (x,d=2) => fmt(x,d).replace(/\./g,' ');           // 20 000 thay cho 20.000
const num = (x,d=2) => x<0 ? '−'+nf(-x,d) : nf(x,d);              // dấu trừ đẹp
const gcd = (a,b) => { a=Math.abs(a); b=Math.abs(b); while(b){ const t=a%b; a=b; b=t; } return a; };
const fr = (n,d) => `<span class="tm-fr"><i>${n}</i><i>${d}</i></span>`;
function frS(n,d){ const g=gcd(n,d)||1; n/=g; d/=g; if(d<0){n=-n;d=-d} return d===1 ? num(n) : (n<0?'−':'')+fr(Math.abs(n),d); }
function setS(id,v){ const el=$(id); el.value=v; const l=$(id+'-v'); if(l) l.textContent=fmt(el.value)+' '+el.dataset.unit; }
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const rnd = (a,b) => a + Math.floor(Math.random()*(b-a+1));
function hm(h){ let H=Math.floor(h+1e-9), M=Math.round((h-H)*60); if(M===60){H++;M=0} return (H? H+' giờ':'')+(M? (H?' ':'')+M+' phút':'')||'0 phút'; }
const CSS = `<style>
.tm-fr{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;line-height:1.12;font-size:.86em;margin:0 2px}
.tm-fr>i{font-style:normal;padding:0 3px}
.tm-fr>i:first-child{border-bottom:1.5px solid currentColor}
.tm-btns{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
.tm-btns .btn{padding:7px 12px;font-size:14.5px}
.tm-chip{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:5px 12px;font-size:14px;font-weight:600}
.tm-chip[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:var(--paper)}
.tm-term{border-radius:6px;padding:0 3px;cursor:pointer;border-bottom:2px dotted var(--accent);white-space:nowrap}
.tm-term.on{background:var(--hl-soft)}
.tm-sub{margin:4px 0 6px;font-size:17px}
.tm-task{border:1.5px dashed var(--accent);border-radius:14px;padding:8px 12px;margin:12px 0 4px;font-size:15px}
.tm-log{font-size:15px;margin:6px 0 0;padding-left:22px}
.tm-log li{margin:2px 0}
.tm-in{width:150px;padding:7px 10px;border-radius:10px;border:1.5px solid var(--line);background:var(--paper)}
.tm-hide{display:none!important}
.tm-cell{cursor:pointer}
.tm-ok{color:var(--ok);font-weight:700}.tm-no{color:var(--bad);font-weight:700}
.tm-tbl table{min-width:0;width:100%}
.tm-tbl td,.tm-tbl th{text-align:center;padding:4px 5px;font-size:14px}
.tm-face{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin:8px 0}
.lab svg.tm-small{width:84px;height:84px;flex:0 0 auto}
.tm-guess .opt{display:inline-block;width:auto;margin:4px 6px 4px 0}
.lab svg .tm-halo{paint-order:stroke;stroke:var(--paper);stroke-width:3px;stroke-linejoin:round}
.tm-eq{font-size:22px;font-weight:800;text-align:center;margin:6px 0 2px;letter-spacing:.01em}
</style>`;

Object.assign(window.LAB_EXT, {

/* =================================================================
   1. Mô hình diện tích nhân đa thức
   ================================================================= */
toan_tiles(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Mô hình diện tích: nhân hai đa thức</h3>
   <p class="muted">Hình chữ nhật có hai cạnh (a + b) và (c + d) bị hai đường kẻ chia thành các ô. <b>Đoán trước:</b> diện tích cả hình bằng tổng của mấy ô? Kéo các cạnh, rồi bấm vào từng ô (hoặc từng hạng tử bên dưới) để xem chúng khớp nhau.</p>
   <div class="ctrl"><div><label for="tt-mode">Chế độ</label><select id="tt-mode"><option value="g">Tổng quát: (a + b)(c + d)</option><option value="x">Có biến x: (x + 2)(x + 3)</option></select></div></div>
   <svg viewBox="0 0 320 272" id="tt-svg" role="img" aria-label="Hình chữ nhật được chia thành 4 ô diện tích"></svg>
   <div class="ctrl" id="tt-g">
     <div>${slider('tt-a','Cạnh a',1,8,1,4,'')}</div>
     <div>${slider('tt-b','Cạnh b',1,8,1,2,'')}</div>
     <div>${slider('tt-c','Cạnh c',1,8,1,3,'')}</div>
     <div>${slider('tt-d','Cạnh d',1,8,1,2,'')}</div>
   </div>
   <div class="ctrl tm-hide" id="tt-x"><div>${slider('tt-xv','Giá trị của x',1,10,1,4,'')}</div></div>
   <div class="row" id="tt-wrongrow"><button class="btn ghost" id="tt-wrong">Bạn Lan viết (a + b)(c + d) = ac + bd. Đúng không?</button></div>
   <div class="readout" id="tt-out"></div>
   <div class="tm-task" id="tt-task"></div></div>`;
  const svg=$('tt-svg'); let sel=null, wrong=false, lastMode='g';
  function geo(){
    if($('tt-mode').value==='g'){ const a=val('tt-a'),b=val('tt-b'),c=val('tt-c'),d=val('tt-d');
      return {m:'g',a,b,c,d, cols:[['a',a],['b',b]], rows:[['c',c],['d',d]], cells:[
        {k:'ac',ci:0,ri:0,name:'ac',v:a*c,col:COL.pink,why:`cạnh a = ${a} nhân cạnh c = ${c}`},
        {k:'bc',ci:1,ri:0,name:'bc',v:b*c,col:COL.purple,why:`cạnh b = ${b} nhân cạnh c = ${c}`},
        {k:'ad',ci:0,ri:1,name:'ad',v:a*d,col:COL.blue,why:`cạnh a = ${a} nhân cạnh d = ${d}`},
        {k:'bd',ci:1,ri:1,name:'bd',v:b*d,col:COL.orange,why:`cạnh b = ${b} nhân cạnh d = ${d}`}]};
    }
    const x=val('tt-xv');
    return {m:'x',x, cols:[['x',x],['2',2]], rows:[['x',x],['3',3]], cells:[
      {k:'xx',ci:0,ri:0,name:'x²',v:x*x,col:COL.pink,why:`cạnh x nhân cạnh x: x · x = x² = ${x}² = ${x*x}`},
      {k:'2x',ci:1,ri:0,name:'2x',v:2*x,col:COL.purple,why:`cạnh 2 nhân cạnh x: 2 · x = 2x = 2 · ${x} = ${2*x}`},
      {k:'3x',ci:0,ri:1,name:'3x',v:3*x,col:COL.blue,why:`cạnh x nhân cạnh 3: x · 3 = 3x = 3 · ${x} = ${3*x}`},
      {k:'6',ci:1,ri:1,name:'6',v:6,col:COL.orange,why:`cạnh 2 nhân cạnh 3: 2 · 3 = 6`}]};
  }
  const T = (k,t) => `<span class="tm-term${sel===k?' on':''}" data-k="${k}" role="button" tabindex="0">${t}</span>`;
  function draw(){
    const g=geo();
    if(g.m!==lastMode){ sel=null; wrong=false; lastMode=g.m; }
    $('tt-g').classList.toggle('tm-hide', g.m!=='g'); $('tt-x').classList.toggle('tm-hide', g.m!=='x');
    $('tt-wrongrow').classList.toggle('tm-hide', g.m!=='g');
    $('tt-wrong').textContent = wrong ? 'Bỏ chế độ “cách tính của Lan”' : 'Bạn Lan viết (a + b)(c + d) = ac + bd. Đúng không?';
    const W=g.cols[0][1]+g.cols[1][1], H=g.rows[0][1]+g.rows[1][1];
    const s=Math.min(250/W, 200/H), ox=56+(250-W*s)/2, oy=34;
    const xs=[ox, ox+g.cols[0][1]*s, ox+W*s], ys=[oy, oy+g.rows[0][1]*s, oy+H*s];
    let h=`<defs><pattern id="tt-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="var(--bad)" stroke-width="2.5"/></pattern></defs>`;
    g.cols.forEach((c,i)=>{ const x1=xs[i]+2,x2=xs[i+1]-2,w=x2-x1, cx=(x1+x2)/2;
      const t = g.m==='g' ? (w>=40? `${c[0]} = ${c[1]}` : c[0]) : (c[0]==='x' && w>=40 ? `x = ${c[1]}` : c[0]);
      h+=`<path d="M${x1} ${oy-4}V${oy-9}H${x2}V${oy-4}" fill="none" stroke="var(--muted)"/><text x="${cx}" y="${oy-13}" class="svgt" text-anchor="middle" font-weight="700">${t}</text>`; });
    g.rows.forEach((r,i)=>{ const y1=ys[i]+2,y2=ys[i+1]-2, cy=(y1+y2)/2;
      const t = r[0]==='x' || g.m==='g' ? `${r[0]} = ${r[1]}` : r[0];
      h+=`<path d="M${ox-4} ${y1}H${ox-9}V${y2}H${ox-4}" fill="none" stroke="var(--muted)"/><text x="${ox-13}" y="${cy+4}" class="svgt" text-anchor="end" font-weight="700">${t}</text>`; });
    g.cells.forEach(c=>{ const x0=xs[c.ci], y0=ys[c.ri], w=xs[c.ci+1]-x0, hh=ys[c.ri+1]-y0, cx=x0+w/2, cy=y0+hh/2;
      const miss = wrong && (c.k==='ad'||c.k==='bc'); const on = sel===c.k;
      let t='';
      if(w>=40 && hh>=34) t=`<text x="${cx}" y="${cy-2}" class="svgt" text-anchor="middle" font-size="14" font-weight="800">${c.name}</text><text x="${cx}" y="${cy+14}" class="svgt" text-anchor="middle">${miss?'bị quên!':'= '+c.v}</text>`;
      else if(w>=20 && hh>=15) t=`<text x="${cx}" y="${cy+4}" class="svgt" text-anchor="middle" font-weight="800">${c.name}</text>`;
      h+=`<g class="tm-cell" data-k="${c.k}" role="button" tabindex="0" aria-label="Ô ${c.name}, diện tích ${c.v}"><rect x="${x0}" y="${y0}" width="${w}" height="${hh}" fill="${c.col}" fill-opacity="${on?.8:(miss?.1:.42)}"/>${miss?`<rect x="${x0}" y="${y0}" width="${w}" height="${hh}" fill="url(#tt-hatch)" opacity=".45"/>`:''}${t}</g>`; });
    h+=`<rect x="${ox}" y="${oy}" width="${W*s}" height="${H*s}" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <line x1="${xs[1]}" y1="${oy}" x2="${xs[1]}" y2="${ys[2]}" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/>
      <line x1="${ox}" y1="${ys[1]}" x2="${xs[2]}" y2="${ys[1]}" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/>`;
    if(sel){ const c=g.cells.find(q=>q.k===sel); h+=`<rect x="${xs[c.ci]+1.5}" y="${ys[c.ri]+1.5}" width="${xs[c.ci+1]-xs[c.ci]-3}" height="${ys[c.ri+1]-ys[c.ri]-3}" fill="none" stroke="var(--ink)" stroke-width="3" pointer-events="none"/>`; }
    const total = W*H;
    h+=`<text x="160" y="${ys[2]+20}" class="svgt" text-anchor="middle">Diện tích cả hình: ${W} × ${H} = ${total}</text>`;
    svg.innerHTML=h;
    const C={}; g.cells.forEach(c=>C[c.k]=c);
    let o='';
    if(g.m==='g'){ const {a,b,c,d}=g;
      o=`<div class="big">(${a} + ${b})(${c} + ${d}) = ${W} × ${H} = ${total}</div>
        ${T('ac','ac')} + ${T('ad','ad')} + ${T('bc','bc')} + ${T('bd','bd')} = ${a}·${c} + ${a}·${d} + ${b}·${c} + ${b}·${d} = ${C.ac.v} + ${C.ad.v} + ${C.bc.v} + ${C.bd.v} = <b>${C.ac.v+C.ad.v+C.bc.v+C.bd.v}</b> <span class="tm-ok">✓ bằng nhau</span>`;
      if(wrong) o+=`<p class="fb no">Lan chỉ lấy ac + bd = ${C.ac.v} + ${C.bd.v} = ${C.ac.v+C.bd.v}, thiếu mất ad + bc = ${C.ad.v+C.bc.v} (hai ô gạch đỏ). Vì sao? Mỗi hạng tử của ngoặc đầu phải nhân với <b>từng</b> hạng tử của ngoặc sau: 2 × 2 = 4 tích, đủ 4 ô.</p>`;
    } else { const x=g.x;
      o=`<div class="big">(x + 2)(x + 3) = x² + 5x + 6</div>
        (x + 2)(x + 3) = ${T('xx','x·x')} + ${T('3x','x·3')} + ${T('2x','2·x')} + ${T('6','2·3')} = x² + 3x + 2x + 6 = <b>x² + 5x + 6</b><br>
        <span class="muted">Hai ô 3x và 2x là hạng tử đồng dạng nên gộp thành 5x.</span><br>
        Kiểm tra với x = ${x}: (${x} + 2)(${x} + 3) = ${x+2} · ${x+3} = <b>${(x+2)*(x+3)}</b>; còn ${x}² + 5·${x} + 6 = ${x*x} + ${5*x} + 6 = <b>${x*x+5*x+6}</b> <span class="tm-ok">✓</span>`;
    }
    if(sel){ const c=C[sel]; o+=`<p style="margin:.4em 0 0">Ô <b>${c.name}</b> (đang tô đậm): ${c.why}${g.m==='g'?' = '+c.v:''}.</p>`; }
    else o+=`<p class="muted" style="margin:.4em 0 0">Bấm vào một ô hoặc một hạng tử gạch chân để tô sáng.</p>`;
    $('tt-out').innerHTML=o;
    $('tt-task').innerHTML = g.m==='g'
      ? `<b>Thử:</b> đặt a = b = c = d = 1. Hình thành hình vuông 2 × 2 = 4 gồm 4 ô nhỏ. Cách viết của Lan (ac + bd) chỉ ra 2, thiếu một nửa! Bấm nút “Bạn Lan viết…” để thấy hai ô bị quên.`
      : `<b>Thử:</b> chọn x = 10. Khi đó (x + 2)(x + 3) = 12 · 13 và x² + 5x + 6 = 100 + 50 + 6 = 156. Một mẹo nhẩm 12 · 13 rất nhanh!`;
  }
  p.addEventListener('click',e=>{ const t=e.target.closest('[data-k]'); if(t){ sel = sel===t.dataset.k?null:t.dataset.k; draw(); } });
  p.addEventListener('keydown',e=>{ if((e.key==='Enter'||e.key===' ') && e.target.dataset && e.target.dataset.k){ e.preventDefault(); sel = sel===e.target.dataset.k?null:e.target.dataset.k; draw(); } });
  $('tt-wrong').onclick=()=>{ wrong=!wrong; draw(); };
  bindSliders(p,draw); draw();
},

/* =================================================================
   2. Hằng đẳng thức bằng hình vuông
   ================================================================= */
toan_square(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Ghép hình hằng đẳng thức</h3>
   <p class="muted">Chọn hằng đẳng thức, kéo a và b. <b>Đoán trước:</b> (a + b)² có bằng a² + b² không? Đếm xem hình vuông lớn gồm những mảnh nào.</p>
   <div class="ctrl"><div><label for="sq-mode">Hằng đẳng thức</label><select id="sq-mode"><option value="p">(a + b)² = a² + 2ab + b²</option><option value="m">(a − b)² = a² − 2ab + b²</option><option value="d">a² − b² = (a − b)(a + b)</option></select></div></div>
   <svg viewBox="0 0 320 262" id="sq-svg" role="img" aria-label="Hình vuông chia thành các mảnh"></svg>
   <div class="ctrl"><div>${slider('sq-a','Cạnh a',2,9,1,5,'')}</div><div>${slider('sq-b','Cạnh b',1,6,1,3,'')}</div></div>
   <div class="row tm-hide" id="sq-cutrow"><button class="btn" id="sq-cut">✂️ Cắt và ghép</button><span class="muted" id="sq-cutnote"></span></div>
   <div class="readout" id="sq-out"></div></div>
   <div class="sec lab"><h3>Tính nhẩm siêu tốc</h3>
   <p class="muted">Gõ một phép tính như <b>99²</b>, <b>51·49</b>, <b>102²</b> (có thể gõ 99^2, 51*49, 51x49). Tự nhẩm trước, rồi bấm “Tách” xem hằng đẳng thức giúp thế nào.</p>
   <div class="row"><input class="tm-in" id="sq-in" value="99²" inputmode="text" aria-label="Phép tính cần nhẩm"><button class="btn" id="sq-go">Tách</button></div>
   <div class="row" style="margin-top:8px" id="sq-chips">${['99²','51·49','102²','65²','48·52','998·1002','19·21','25·99'].map(t=>`<button class="tm-chip" data-q="${t}">${t}</button>`).join('')}</div>
   <div class="readout" id="sq-mres"></div></div>`;
  const svg=$('sq-svg'); let cutK=0, raf=null;
  function stop(){ if(raf){cancelAnimationFrame(raf);raf=null} }
  stopAnim=stop;
  function lbl(x,y,t,size){ return `<text x="${x}" y="${y}" class="svgt" text-anchor="middle" font-weight="800" font-size="${size||13}">${t}</text>`; }
  function fixB(){ const m=$('sq-mode').value; if(m!=='p' && val('sq-b')>=val('sq-a')) setS('sq-b', val('sq-a')-1); }
  function draw(){
    const m=$('sq-mode').value, a=val('sq-a'), b=val('sq-b');
    $('sq-cutrow').classList.toggle('tm-hide', m!=='d');
    let h='';
    if(m==='p'){ const n=a+b, s=212/n, ox=(320-n*s)/2+8, oy=26;
      const R=(x,y,w,hh,c,t)=>{ const big=w*s>=38&&hh*s>=24; return `<rect x="${ox+x*s}" y="${oy+y*s}" width="${w*s}" height="${hh*s}" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="1.5"/>`+(w*s>=18&&hh*s>=14? lbl(ox+(x+w/2)*s, oy+(y+hh/2)*s+(big?0:4), t, big?14:11)+(big?`<text x="${ox+(x+w/2)*s}" y="${oy+(y+hh/2)*s+15}" class="svgt" text-anchor="middle">= ${w*hh}</text>`:''):''); };
      h+=R(0,0,a,a,COL.pink,'a²')+R(a,0,b,a,COL.purple,'ab')+R(0,a,a,b,COL.purple,'ab')+R(a,a,b,b,COL.orange,'b²');
      h+=`<rect x="${ox}" y="${oy}" width="${n*s}" height="${n*s}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
      h+=dims(ox,oy,s,[a,b],[a,b]);
      $('sq-out').innerHTML=`<div class="big">(${a} + ${b})² = ${n}² = ${n*n}</div>
        a² + 2ab + b² = ${a*a} + 2·${a*b} + ${b*b} = <b>${a*a+2*a*b+b*b}</b> <span class="tm-ok">✓</span><br>
        <span class="tm-no">Bẫy:</span> a² + b² = ${a*a} + ${b*b} = ${a*a+b*b}, thiếu hẳn hai mảnh ab (tím) = ${2*a*b}. Vì thế (a + b)² ≠ a² + b².`;
    } else if(m==='m'){ const s=212/a, ox=(320-a*s)/2+8, oy=26, c=a-b;
      h+=`<defs><pattern id="sq-h1" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="${COL.pink}" stroke-width="2.5"/></pattern><pattern id="sq-h2" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="7" stroke="${COL.purple}" stroke-width="2.5"/></pattern></defs>`;
      h+=`<rect x="${ox}" y="${oy}" width="${c*s}" height="${c*s}" fill="${COL.green}" fill-opacity=".45"/>`;
      h+=`<rect x="${ox+c*s}" y="${oy}" width="${b*s}" height="${a*s}" fill="url(#sq-h1)" opacity=".7"/>`;
      h+=`<rect x="${ox}" y="${oy+c*s}" width="${a*s}" height="${b*s}" fill="url(#sq-h2)" opacity=".7"/>`;
      h+=`<rect x="${ox+c*s}" y="${oy+c*s}" width="${b*s}" height="${b*s}" fill="${COL.orange}" fill-opacity=".45"/>`;
      h+=`<rect x="${ox}" y="${oy}" width="${a*s}" height="${a*s}" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <line x1="${ox+c*s}" y1="${oy}" x2="${ox+c*s}" y2="${oy+a*s}" stroke="var(--ink)" stroke-dasharray="5 3"/>
        <line x1="${ox}" y1="${oy+c*s}" x2="${ox+a*s}" y2="${oy+c*s}" stroke="var(--ink)" stroke-dasharray="5 3"/>`;
      if(c*s>=34) h+=lbl(ox+c*s/2, oy+c*s/2+5, '(a − b)²', c*s>=70?14:10);
      if(b*s>=22){ h+=lbl(ox+(c+b/2)*s, oy+c*s/2+5,'ab',12)+lbl(ox+c*s/2, oy+(c+b/2)*s+5,'ab',12); }
      if(b*s>=22) h+=lbl(ox+(c+b/2)*s, oy+(c+b/2)*s+5,'b²',12);
      h+=dims(ox,oy,s,[c,b],[c,b],['a − b','b']);
      h+=`<text x="${ox+a*s/2}" y="${oy+a*s+16}" class="svgm" text-anchor="middle">Cả hình vuông cạnh a = ${a}</text>`;
      $('sq-out').innerHTML=`<div class="big">(${a} − ${b})² = ${c}² = ${c*c}</div>
        Lấy hình vuông a² = ${a*a}, bỏ đi dải hồng ab và dải tím ab. Nhưng ô cam b² nằm trong <b>cả hai</b> dải nên đã bị bỏ hai lần, phải cộng trả lại một lần:<br>
        a² − 2ab + b² = ${a*a} − 2·${a*b} + ${b*b} = <b>${a*a-2*a*b+b*b}</b> <span class="tm-ok">✓</span>`;
    } else { const c=a-b, s=Math.min(256/(a+b), 196/a), ox=52+(256-(a+b)*s)/2, oy=30, k=cutK;
      // mảnh 1: a × (a−b) ở trên; mảnh 2: (a−b) × b ở dưới trái; góc b² bị cắt bỏ
      h+=`<rect x="${ox}" y="${oy}" width="${a*s}" height="${c*s}" fill="${COL.pink}" fill-opacity=".45" stroke="${COL.pink}" stroke-width="1.5"/>`;
      if(a*s>=40&&c*s>=18) h+=lbl(ox+a*s/2, oy+c*s/2+5, 'a·(a − b)', c*s>=24?13:10);
      h+=`<rect x="${ox+c*s}" y="${oy+c*s}" width="${b*s}" height="${b*s}" fill="none" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="4 3" opacity="${1-k}"/>`;
      if(b*s>=26) h+=`<text x="${ox+(c+b/2)*s}" y="${oy+(c+b/2)*s+4}" class="svgm" text-anchor="middle" opacity="${1-k}">b² bỏ đi</text>`;
      const w=c*s, hh=b*s, sx=ox+c*s/2, sy=oy+c*s+b*s/2, ex=ox+a*s+b*s/2, ey=oy+c*s/2;
      const cx=sx+(ex-sx)*k, cy=sy+(ey-sy)*k;
      h+=`<g transform="translate(${cx} ${cy}) rotate(${90*k})"><rect x="${-w/2}" y="${-hh/2}" width="${w}" height="${hh}" fill="${COL.purple}" fill-opacity=".5" stroke="${COL.purple}" stroke-width="1.5"/></g>`;
      if(Math.max(w,hh)>=40&&Math.min(w,hh)>=16) h+=lbl(cx, cy+4, 'b·(a − b)', 10);
      if(k>0) h+=`<path d="M${ox} ${oy}H${ox+a*s}V${oy+a*s}H${ox}Z" fill="none" stroke="var(--muted)" stroke-dasharray="3 4" opacity="${.8*k}"/><text x="${ox+4}" y="${oy+a*s-6}" class="svgm" opacity="${k}">hình vuông a² lúc đầu</text>`;
      if(k===1){ h+=`<rect x="${ox}" y="${oy}" width="${(a+b)*s}" height="${c*s}" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
          <path d="M${ox} ${oy-5}V${oy-10}H${ox+(a+b)*s}V${oy-5}" fill="none" stroke="var(--muted)"/><text x="${ox+(a+b)*s/2}" y="${oy-14}" class="svgt" text-anchor="middle" font-weight="700">a + b = ${a+b}</text>
          <text x="${ox+(a+b)*s/2}" y="${oy+c*s+22}" class="svgt" text-anchor="middle" font-weight="700">cạnh còn lại: a − b = ${c}</text>`;
      } else if(k===0){ h+=`<path d="M${ox} ${oy}H${ox+a*s}V${oy+c*s}H${ox+c*s}V${oy+a*s}H${ox}Z" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
          h+=dims(ox,oy,s,[c,b],[c,b],['a − b','b']);
          h+=`<text x="${ox+a*s/2}" y="${oy+a*s+16}" class="svgm" text-anchor="middle">hình vuông a² = ${a*a}, cắt góc b² = ${b*b}</text>`; }
      $('sq-cut').textContent = cutK? '↩️ Ghép lại hình cũ' : '✂️ Cắt và ghép';
      $('sq-cutnote').textContent = cutK? 'Thành hình chữ nhật!' : 'Mảnh tím sẽ xoay và dời sang phải.';
      $('sq-out').innerHTML=`<div class="big">${a}² − ${b}² = ${a*a} − ${b*b} = ${a*a-b*b}</div>
        Phần còn lại sau khi cắt góc b² gồm mảnh hồng a·(a − b) và mảnh tím b·(a − b). Xoay mảnh tím ghép vào bên phải được hình chữ nhật cạnh (a + b) và (a − b):<br>
        (a − b)(a + b) = ${c} · ${a+b} = <b>${c*(a+b)}</b> <span class="tm-ok">✓</span>`+(cutK?'':`<br><span class="muted">Bấm “Cắt và ghép” để xem tận mắt.</span>`);
    }
    svg.innerHTML=h;
  }
  function dims(ox,oy,s,cols,rows,names){ let h=''; let x=ox;
    cols.forEach((c,i)=>{ const n=names?names[i]:(i?'b':'a'); h+=`<path d="M${x+2} ${oy-4}V${oy-9}H${x+c*s-2}V${oy-4}" fill="none" stroke="var(--muted)"/><text x="${x+c*s/2}" y="${oy-12}" class="svgt" text-anchor="middle" font-weight="700">${c*s>=40?n+' = '+c:n}</text>`; x+=c*s; });
    let y=oy; rows.forEach((r,i)=>{ const n=names?names[i]:(i?'b':'a'); h+=`<path d="M${ox-4} ${y+2}H${ox-9}V${y+r*s-2}H${ox-4}" fill="none" stroke="var(--muted)"/><text x="${ox-12}" y="${y+r*s/2+4}" class="svgt" text-anchor="end" font-weight="700">${!names&&r*s>=40?n+' = '+r:(r*s>=18?n:'')}</text>`; y+=r*s; });
    return h; }
  $('sq-cut').onclick=()=>{ stop(); const from=cutK, to=cutK?0:1;
    if(reduce()){ cutK=to; draw(); return; }
    const t0=performance.now(), dur=1300;
    const step=now=>{ const u=Math.min(1,(now-t0)/dur), e=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2; cutK=from+(to-from)*e; if(u>=1) cutK=to; draw(); if(u<1) raf=requestAnimationFrame(step); else raf=null; };
    raf=requestAnimationFrame(step); };
  bindSliders(p.querySelector('.sec'),()=>{ stop(); cutK = cutK>=.5?1:0; fixB(); draw(); });
  draw();
  /* ---- tính nhẩm ---- */
  function round(n){ let R=Math.round(n/10)*10; const R100=Math.round(n/100)*100; if(R100>0 && Math.abs(n-R100)<=5) R=R100; return R; }
  function sq(n){ const r=n*n;
    if(n%10===5 && n>=15){ const a=(n-5)/10; return `<div class="big">${nf(n,0)}² = ${nf(r,0)}</div>Số tận cùng bằng 5: (10a + 5)² = 100·a(a + 1) + 25, ở đây a = ${nf(a,0)}.<br>${nf(a,0)} · ${nf(a+1,0)} = ${nf(a*(a+1),0)}, viết thêm 25 vào sau ⇒ <b>${nf(r,0)}</b>`; }
    const R=round(n), d=n-R;
    if(R===0||d===0) return `<div class="big">${nf(n,0)}² = ${nf(r,0)}</div>${d===0?'Số tròn: bình phương phần khác 0 rồi viết thêm gấp đôi số chữ số 0.':'Số nhỏ, em nhẩm bảng cửu chương là được.'}`;
    if(d>0) return `<div class="big">${nf(n,0)}² = ${nf(r,0)}</div>Dùng (A + B)² = A² + 2AB + B² với A = ${nf(R,0)}, B = ${d}:<br>${nf(n,0)}² = (${nf(R,0)} + ${d})² = ${nf(R*R,0)} + ${nf(2*R*d,0)} + ${d*d} = <b>${nf(r,0)}</b>`;
    return `<div class="big">${nf(n,0)}² = ${nf(r,0)}</div>Dùng (A − B)² = A² − 2AB + B² với A = ${nf(R,0)}, B = ${-d}:<br>${nf(n,0)}² = (${nf(R,0)} − ${-d})² = ${nf(R*R,0)} − ${nf(-2*R*d,0)} + ${d*d} = <b>${nf(r,0)}</b>`; }
  function prod(u,v){ const r=u*v;
    if((u+v)%2===0){ const M=(u+v)/2, t=Math.abs(u-v)/2;
      return `<div class="big">${nf(u,0)} · ${nf(v,0)} = ${nf(r,0)}</div>Hai số cách đều ${nf(M,0)} (cùng cách ${nf(t,0)}), dùng hiệu hai bình phương A² − B² = (A − B)(A + B):<br>${nf(u,0)} · ${nf(v,0)} = (${nf(M,0)} ${u<v?'−':'+'} ${nf(t,0)})(${nf(M,0)} ${u<v?'+':'−'} ${nf(t,0)}) = ${nf(M,0)}² − ${nf(t,0)}² = ${nf(M*M,0)} − ${nf(t*t,0)} = <b>${nf(r,0)}</b>`+(M%10?`<br><span class="muted">${nf(M,0)}² chưa tròn, em nhẩm tiếp bằng (A ± B)² nhé.</span>`:''); }
    const du=Math.abs(u-round(u)), dv=Math.abs(v-round(v)); const w = dv<=du? v : u, k = w===v? u : v; const R=round(w), d=w-R;
    return `<div class="big">${nf(u,0)} · ${nf(v,0)} = ${nf(r,0)}</div>Hai số không cách đều một số tròn, nên tách ${nf(w,0)} = ${nf(R,0)} ${d<0?'−':'+'} ${Math.abs(d)} rồi nhân phân phối A(B ± C) = AB ± AC:<br>${nf(k,0)} · (${nf(R,0)} ${d<0?'−':'+'} ${Math.abs(d)}) = ${nf(k*R,0)} ${d<0?'−':'+'} ${nf(Math.abs(k*d),0)} = <b>${nf(r,0)}</b>`; }
  function mental(){ const raw=$('sq-in').value; let s=raw.replace(/\s+/g,'').replace('^2','²').replace(/[×xX*.·•]/g,'·'); let m, html=null;
    if((m=s.match(/^(\d{1,5})²$/))) html=sq(+m[1]);
    else if((m=s.match(/^(\d{1,5})·(\d{1,5})$/))) html= +m[1]===+m[2]? sq(+m[1]) : prod(+m[1],+m[2]);
    $('sq-mres').innerHTML = html || `<span class="fb no">Em gõ theo dạng 99² (hoặc 99^2) hoặc 51·49 (51*49, 51x49) nhé, mỗi số tối đa 5 chữ số.</span>`; }
  $('sq-go').onclick=mental; $('sq-in').onkeydown=e=>{ if(e.key==='Enter') mental(); };
  $('sq-chips').onclick=e=>{ const b=e.target.closest('[data-q]'); if(b){ $('sq-in').value=b.dataset.q; mental(); } };
  mental();
},

/* =================================================================
   3. Hai vòi nước
   ================================================================= */
toan_tank(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Hai vòi nước cùng chảy</h3>
   <p class="muted">Vòi A chảy một mình đầy bể trong a giờ, vòi B trong b giờ. Chọn số giờ, đoán thời gian rồi bấm “Mở cả hai vòi”.</p>
   <svg viewBox="0 0 320 262" id="tk-svg" role="img" aria-label="Bể nước với hai vòi"></svg>
   <div class="row" style="margin-top:10px"><button class="btn" id="tk-run">💧 Mở cả hai vòi</button><button class="btn ghost" id="tk-reset">Xả hết, làm lại</button><span class="muted" id="tk-clock">⏱ 0 phút</span></div>
   <div class="ctrl">
    <div>${slider('tk-a','Vòi A đầy bể một mình sau',1,12,1,3,'giờ')}</div>
    <div>${slider('tk-b','Vòi B đầy bể một mình sau',1,12,1,6,'giờ')}</div>
    <div><label><input type="checkbox" id="tk-on"> Mở thêm vòi xả C ở đáy bể</label></div>
    <div id="tk-cbox" class="tm-hide">${slider('tk-c','Vòi C xả cạn bể đầy sau',2,30,1,12,'giờ')}</div>
   </div>
   <div class="tm-guess" id="tk-guess"></div>
   <div class="readout" id="tk-out"></div></div>`;
  const svg=$('tk-svg'); let raf=null, tau=0, revealed=false, guessed=null;
  function stop(){ if(raf){cancelAnimationFrame(raf);raf=null} }
  stopAnim=stop;
  function P(){ const a=val('tk-a'), b=val('tk-b'), C=$('tk-on').checked, c=val('tk-c');
    const num_=C? b*c+a*c-a*b : a+b, den=C? a*b*c : a*b; const r=num_/den; return {a,b,C,c,num:num_,den,r,t: r>0? 1/r : Infinity}; }
  const X0=70, X1=250, Y0=70, Y1=232, HT=Y1-Y0;
  function draw(running){
    const q=P(); const lvl = q.r>0? Math.min(1, tau*q.r) : 0;
    const ga=tau/q.a, gb=tau/q.b, tot=ga+gb; const hA = tot>0? lvl*HT*ga/tot : 0, hB = tot>0? lvl*HT*gb/tot : 0;
    const top=Y1-hA-hB;
    let h='';
    // vạch giờ
    if(q.r>0 && q.r<1 && HT*q.r>=13){ for(let k=1;k*q.r<1 && k<=12;k++){ const y=Y1-k*q.r*HT; h+=`<line x1="${X0}" y1="${y}" x2="${X1}" y2="${y}" stroke="var(--muted)" stroke-dasharray="2 4" opacity=".7"/><text x="${X1+4}" y="${y+3}" class="svgm">sau ${k} giờ</text>`; } }
    h+=`<rect x="${X0}" y="${Y1-hA}" width="${X1-X0}" height="${hA}" fill="${COL.pink}" fill-opacity=".6"/>
        <rect x="${X0}" y="${top}" width="${X1-X0}" height="${hB}" fill="${COL.purple}" fill-opacity=".6"/>`;
    if(hA>16) h+=`<text x="${(X0+X1)/2}" y="${Y1-hA/2+4}" class="svgt" text-anchor="middle" font-weight="700">nước vòi A</text>`;
    if(hB>16) h+=`<text x="${(X0+X1)/2}" y="${top+hB/2+4}" class="svgt" text-anchor="middle" font-weight="700">nước vòi B</text>`;
    h+=`<path d="M${X0} ${Y0-8}V${Y1}H${X1}V${Y0-8}" fill="none" stroke="var(--ink)" stroke-width="3"/>`;
    [['đầy',1],['¾',.75],['½',.5],['¼',.25]].forEach(([t,f])=>{ const y=Y1-f*HT; h+=`<line x1="${X0-6}" y1="${y}" x2="${X0}" y2="${y}" stroke="var(--ink)"/><text x="${X0-9}" y="${y+4}" class="svgm" text-anchor="end">${t}</text>`; });
    // vòi A trái, vòi B phải
    h+=`<path d="M6 34H96V50" fill="none" stroke="var(--muted)" stroke-width="9" stroke-linejoin="round"/><rect x="88" y="48" width="16" height="7" rx="2" fill="var(--ink)"/>
        <path d="M314 34H224V50" fill="none" stroke="var(--muted)" stroke-width="9" stroke-linejoin="round"/><rect x="216" y="48" width="16" height="7" rx="2" fill="var(--ink)"/>
        <text x="8" y="22" class="svgt" font-weight="700" fill="${COL.pink}">Vòi A: ${q.a} giờ</text><text x="312" y="22" class="svgt" font-weight="700" text-anchor="end">Vòi B: ${q.b} giờ</text>`;
    if(running){ h+=`<rect x="93" y="55" width="6" height="${Math.max(0,top-55)}" fill="${COL.pink}" opacity=".8"/><rect x="221" y="55" width="6" height="${Math.max(0,top-55)}" fill="${COL.purple}" opacity=".8"/>`; }
    if(q.C){ h+=`<path d="M${X1} 222H292V246" fill="none" stroke="var(--muted)" stroke-width="8"/><rect x="284" y="238" width="16" height="6" rx="2" fill="var(--ink)"/><text x="285" y="190" class="svgm" text-anchor="middle">vòi xả C</text><text x="285" y="202" class="svgm" text-anchor="middle">${q.c} giờ</text>`;
      if(running && lvl>0) h+=`<rect x="289" y="244" width="6" height="16" fill="var(--liquid2)" opacity=".8"/>`; }
    h+=`<text x="${(X0+X1)/2}" y="250" class="svgt" text-anchor="middle" font-weight="700">⏱ ${hm(tau)} · bể đầy ${nf(lvl*100,0)}%</text>`;
    svg.innerHTML=h; $('tk-clock').textContent='⏱ '+hm(tau);
  }
  function guess(){ const q=P(); const g=$('tk-guess');
    if(q.C || revealed){ g.innerHTML=''; return; }
    const opts=shuffle([[q.a+q.b,'sum'],[(q.a+q.b)/2,'avg'],[q.t,'ok']]);
    g.innerHTML=`<b>Đoán trước:</b> hai vòi cùng chảy thì sau bao lâu đầy bể?<br>`+opts.map(o=>`<button class="opt" data-g="${o[1]}">${hm(o[0])}</button>`).join('')+`<div id="tk-gfb" class="fb"></div>`;
    g.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{ const k=b.dataset.g; g.querySelectorAll('[data-g]').forEach(x=>{ x.disabled=true; if(x.dataset.g==='ok') x.classList.add('right'); }); if(k!=='ok') b.classList.add('wrong');
      const fb=$('tk-gfb'); fb.className='fb '+(k==='ok'?'ok':'no');
      fb.innerHTML = k==='ok'? 'Chính xác! Em đã cộng năng suất của hai vòi.' : k==='sum'? 'Chưa đúng: cộng thời gian ra lâu hơn cả khi chỉ mở một vòi, vô lý! Phải cộng năng suất.' : 'Chưa đúng: lấy trung bình vẫn chậm hơn vòi nhanh nhất, trong khi thêm vòi thì phải nhanh hơn.';
      revealed=true; result(); }); }
  function result(){ const q=P(); const o=$('tk-out');
    let line=`Mỗi giờ: vòi A chảy ${fr(1,q.a)} bể, vòi B chảy ${fr(1,q.b)} bể`+(q.C?`, vòi C xả ${fr(1,q.c)} bể`:'')+'.<br>';
    if(!revealed){ o.innerHTML=line+`<span class="muted">Hãy đoán rồi bấm “Mở cả hai vòi” để xem kết quả.</span>`; return; }
    line+=`Cả ${q.C?'ba':'hai'} vòi cùng mở, mỗi giờ: ${fr(1,q.a)} + ${fr(1,q.b)}${q.C?' − '+fr(1,q.c):''} = ${frS(q.num,q.den)} bể.<br>`;
    if(q.r<=0){ o.innerHTML=line+`<div class="big">Bể không bao giờ đầy!</div>Vòi C xả nhanh bằng hoặc hơn cả hai vòi cộng lại, nên nước ${q.r<0?'không đọng lại được':'vào bao nhiêu ra bấy nhiêu'}.`; return; }
    o.innerHTML=line+`<div class="big">t = ${frS(q.den,q.num)} giờ = ${hm(q.t)}</div>`+
      (q.C? `Vì 1/t = tổng năng suất (vòi xả thì trừ đi). So với khi không có vòi C (${hm(q.a*q.b/(q.a+q.b))}), bể đầy chậm hơn.`
          : `Công thức: t = ab/(a + b) = ${q.a}·${q.b}/(${q.a} + ${q.b}) = ${hm(q.t)}. Nhanh hơn cả vòi nhanh nhất (${Math.min(q.a,q.b)} giờ) vì vòi chậm vẫn góp thêm nước.`); }
  function reset(){ stop(); tau=0; revealed=false; $('tk-cbox').classList.toggle('tm-hide',!$('tk-on').checked); draw(false); guess(); result(); }
  $('tk-run').onclick=()=>{ stop(); const q=P(); const T=isFinite(q.t)? q.t : 4;
    if(reduce()){ tau=T; revealed=true; draw(false); guess(); result(); return; }
    tau=0; const t0=performance.now(), dur=3800;
    const step=now=>{ const k=Math.min(1,(now-t0)/dur); tau=T*k; draw(k<1); if(k<1) raf=requestAnimationFrame(step); else { raf=null; revealed=true; guess(); result(); } };
    raf=requestAnimationFrame(step); };
  $('tk-reset').onclick=reset;
  bindSliders(p,reset); reset();
},

/* =================================================================
   4. Cân thăng bằng giải phương trình
   ================================================================= */
toan_scale(p){
  const SAMPLES=[
    {L:[1,3],R:[0,7],t:'Ví dụ trong bài: hộp x và 3 quả cân nặng bằng 7 quả cân.'},
    {L:[3,0],R:[0,12],t:'3 hộp bánh như nhau nặng bằng 12 quả cân 1 kg. Mỗi hộp nặng mấy kg?'},
    {L:[2,3],R:[1,7],t:'2 túi táo và 3 kg cân bằng 1 túi táo và 7 kg. Một túi táo nặng bao nhiêu?'},
    {L:[2,5],R:[0,11],t:'2 cuốn sách và quả cân 5 đơn vị bằng 11 đơn vị.'},
    {L:[3,4],R:[5,0],t:'3 hộp sữa và 4 quả cân 100 g nặng bằng 5 hộp sữa. Mỗi hộp sữa nặng mấy trăm gam?'},
    {L:[4,2],R:[1,14],t:'4 gói kẹo và 2 kg cân bằng 1 gói kẹo và 14 kg.'}];
  p.innerHTML = CSS + `<div class="sec lab"><h3>Cân thăng bằng giải phương trình</h3>
   <p class="muted">Mỗi hộp <b>x</b> nặng như nhau (chưa biết), mỗi ô vàng nặng 1 đơn vị. Làm cùng một việc ở <b>cả hai</b> đĩa thì cân vẫn thăng bằng. Nhiệm vụ: để lại đúng <b>một hộp x</b> ở một bên, bên kia chỉ còn quả cân.</p>
   <div class="ctrl"><div><label for="scl-pick">Chọn đề</label><select id="scl-pick">${SAMPLES.map((s,i)=>`<option value="${i}">${eqS(s.L,s.R)}</option>`).join('')}<option value="r">Đề ngẫu nhiên</option></select></div></div>
   <p id="scl-story" class="note" style="margin:4px 0 8px"></p>
   <div class="tm-eq" id="scl-eq"></div>
   <svg viewBox="0 0 320 236" id="scl-svg" role="img" aria-label="Cân đĩa hai bên"></svg>
   <div class="tm-btns" id="scl-ops"></div>
   <div class="fb" id="scl-fb" aria-live="polite"></div>
   <div class="readout"><b>Các bước em đã làm</b><ol class="tm-log" id="scl-log"></ol></div>
   <div class="row" style="margin-top:10px"><button class="btn ghost" id="scl-undo">↶ Hoàn tác</button><button class="btn ghost" id="scl-new">🎲 Đề mới</button><button class="btn ghost" id="scl-tilt">Thử: bớt 1 quả cân chỉ bên trái</button></div></div>`;
  function side(x,u){ const xs = x===0?'':(x===1?'x':x+'x'); if(!xs) return String(u); return u? xs+' + '+u : xs; }
  function eqS(L,R){ return side(L[0],L[1])+' = '+side(R[0],R[1]); }
  let st, hist, log, tiltT=null, tilt=null;
  const svg=$('scl-svg');
  function stop(){ if(tiltT){clearTimeout(tiltT);tiltT=null} tilt=null; }
  stopAnim=stop;
  function solved(){ return (st.L[0]===1&&st.L[1]===0&&st.R[0]===0) || (st.R[0]===1&&st.R[1]===0&&st.L[0]===0); }
  function sol(){ return st.L[0]===1? st.R[1] : st.L[1]; }
  function load(s){ stop(); st={L:s.L.slice(),R:s.R.slice(),orig:{L:s.L.slice(),R:s.R.slice()},t:s.t}; hist=[]; log=[{op:'Đề bài',eq:eqS(st.L,st.R)}]; $('scl-fb').textContent=''; render(); }
  function random(){ for(let i=0;i<200;i++){ const x=rnd(1,6), a=rnd(1,5), c=rnd(0,4), b=rnd(0,9); if(a===c) continue; const d=a*x+b-c*x; if(d<0||d>20||a*x+b>40) continue; if(a===1&&b===0&&c===0) continue;
      const L=[a,b], R=[c,d]; if(Math.random()<.5) return {L:R,R:L,t:'Đề ngẫu nhiên: cân đang thăng bằng, em hãy tìm x.'}; return {L,R,t:'Đề ngẫu nhiên: cân đang thăng bằng, em hãy tìm x.'}; }
    return SAMPLES[2]; }
  function apply(fn,opName){ const before={L:st.L.slice(),R:st.R.slice()}; const msg=fn(); if(msg){ fb(msg,false); return; }
    hist.push({L:before.L,R:before.R,logLen:log.length}); log.push({op:opName,eq:eqS(st.L,st.R)});
    fb(solved()? '' : 'Cân vẫn thăng bằng vì em làm giống nhau ở cả hai đĩa.', true); render(); }
  function fb(m,ok){ const f=$('scl-fb'); f.className='fb '+(ok?'ok':'no'); f.textContent=m; }
  const OPS=[
    ['−1 x mỗi bên', ()=> (st.L[0]<1||st.R[0]<1)? 'Một bên không còn hộp x nào để bớt. Thử bớt quả cân hoặc chia đều.' : (st.L[0]--,st.R[0]--,null), 'bớt 1 x ở cả hai vế (trừ hai vế cho x)'],
    ['−1 quả cân mỗi bên', ()=> (st.L[1]<1||st.R[1]<1)? 'Một bên không còn quả cân nào. Không bớt được nữa!' : (st.L[1]--,st.R[1]--,null), 'bớt 1 quả cân ở cả hai vế (trừ hai vế cho 1)'],
    ['+1 x mỗi bên', ()=> (st.L[0]>=8||st.R[0]>=8)? 'Đĩa đầy rồi!' : (st.L[0]++,st.R[0]++,null), 'thêm 1 x vào cả hai vế'],
    ['+1 quả cân mỗi bên', ()=> (st.L[1]>=20||st.R[1]>=20)? 'Đĩa đầy rồi!' : (st.L[1]++,st.R[1]++,null), 'thêm 1 quả cân vào cả hai vế']];
  function render(){
    $('scl-story').textContent=st.t; $('scl-eq').textContent=eqS(st.L,st.R);
    const kx=Math.min(st.L[0],st.R[0]), ku=Math.min(st.L[1],st.R[1]), g=gcd(gcd(st.L[0],st.L[1]),gcd(st.R[0],st.R[1]));
    let b=OPS.map((o,i)=>`<button class="btn${i<2?'':' ghost'}" data-op="${i}">${o[0]}</button>`).join('');
    if(kx>=2) b+=`<button class="btn" data-op="kx">−${kx} x mỗi bên</button>`;
    if(ku>=2) b+=`<button class="btn" data-op="ku">−${ku} quả cân mỗi bên</button>`;
    b+=`<button class="btn" data-op="div">${g>=2?'÷ Chia hai bên cho '+g:'÷ Chia đều hai bên'}</button>`;
    $('scl-ops').innerHTML=b;
    $('scl-log').innerHTML=log.map(l=>`<li>${l.op}: <b>${l.eq}</b></li>`).join('');
    if(solved()){ const x=sol(), o=st.orig; const lv=o.L[0]*x+o.L[1], rv=o.R[0]*x+o.R[1];
      $('scl-log').innerHTML+=`<li class="tm-ok" style="list-style:none;margin-left:-22px">🎉 Tìm ra x = ${x} sau ${log.length-1} bước! Thử lại: ${side2(o.L,x)} = ${lv} và ${side2(o.R,x)} = ${rv} ✓<br><span class="muted" style="font-weight:400">Bớt quả cân ở hai bên chính là <b>quy tắc chuyển vế</b>; chia đều là <b>quy tắc chia</b> hai vế cho cùng một số khác 0.</span></li>`; }
    drawScale();
  }
  function side2(s,x){ const parts=[]; if(s[0]) parts.push((s[0]===1?'':s[0]+'·')+x); if(s[1]||!parts.length) parts.push(s[1]); return parts.join(' + '); }
  function pile(cx,py,x,u){ let h=''; const bw=20, gap=3, per=4; let row=0;
    for(let i=0;i<x;i+=per){ const n=Math.min(per,x-i), w=n*(bw+gap)-gap; for(let j=0;j<n;j++){ const X=cx-w/2+j*(bw+gap), Y=py-2-(row+1)*(bw+2);
        h+=`<rect x="${X}" y="${Y}" width="${bw}" height="${bw}" rx="4" fill="${COL.purple}" stroke="#5B3A99"/><text x="${X+bw/2}" y="${Y+14.5}" font-size="13" font-weight="800" fill="#fff" text-anchor="middle" font-family="system-ui,sans-serif">x</text>`; } row++; }
    let base=py-2-row*(bw+2); const uw=13, ug=2, up=7; let r2=0;
    for(let i=0;i<u;i+=up){ const n=Math.min(up,u-i), w=n*(uw+ug)-ug; for(let j=0;j<n;j++){ const X=cx-w/2+j*(uw+ug), Y=base-(r2+1)*(uw+2);
        h+=`<rect x="${X}" y="${Y}" width="${uw}" height="${uw}" rx="3" fill="${COL.gold}" stroke="#A8761A"/><text x="${X+uw/2}" y="${Y+10}" font-size="9" font-weight="700" fill="#3B1F4A" text-anchor="middle" font-family="system-ui,sans-serif">1</text>`; } r2++; }
    return h; }
  function drawScale(){ const s=tilt||st; const th=(tilt? 7 : 0)*Math.PI/180, cx=160, cy=58, R=100;
    const L={x:cx-R*Math.cos(th), y:cy-R*Math.sin(th)}, Rr={x:cx+R*Math.cos(th), y:cy+R*Math.sin(th)};
    const pan=(e,x,u)=>{ const py=e.y+122; return `<line x1="${e.x}" y1="${e.y}" x2="${e.x-55}" y2="${py}" stroke="var(--muted)"/><line x1="${e.x}" y1="${e.y}" x2="${e.x+55}" y2="${py}" stroke="var(--muted)"/>`+pile(e.x,py,x,u)+`<path d="M${e.x-57} ${py}H${e.x+57}L${e.x+46} ${py+9}H${e.x-46}Z" fill="var(--line)" stroke="var(--ink)" stroke-width="1.5"/>`; };
    svg.innerHTML=`<path d="M138 228H182L170 214H150Z" fill="var(--muted)"/><line x1="160" y1="${cy}" x2="160" y2="216" stroke="var(--muted)" stroke-width="6"/>
      <line x1="${L.x}" y1="${L.y}" x2="${Rr.x}" y2="${Rr.y}" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="6" fill="var(--accent)"/>
      ${pan(L,s.L[0],s.L[1])}${pan(Rr,s.R[0],s.R[1])}
      <text x="160" y="20" class="svgt" text-anchor="middle" font-weight="700" fill="${tilt?'var(--bad)':'var(--ok)'}" style="fill:${tilt?'var(--bad)':'var(--ok)'}">${tilt?'⚠ Cân bị lệch!':'⚖ Cân thăng bằng'}</text>`; }
  $('scl-ops').onclick=e=>{ const b=e.target.closest('[data-op]'); if(!b||tilt) return; const k=b.dataset.op;
    if(k==='kx'){ const n=Math.min(st.L[0],st.R[0]); apply(()=>{st.L[0]-=n;st.R[0]-=n;return null}, `bớt ${n}x ở cả hai vế`); }
    else if(k==='ku'){ const n=Math.min(st.L[1],st.R[1]); apply(()=>{st.L[1]-=n;st.R[1]-=n;return null}, `bớt ${n} quả cân ở cả hai vế (chuyển vế)`); }
    else if(k==='div'){ const g=gcd(gcd(st.L[0],st.L[1]),gcd(st.R[0],st.R[1]));
      if(g<2){ fb('Chưa chia đều được: số hộp x và số quả cân ở hai bên phải cùng chia hết cho một số. Hãy bớt cho gọn trước đã.',false); return; }
      apply(()=>{ st.L=st.L.map(v=>v/g); st.R=st.R.map(v=>v/g); return null; }, `chia mỗi đĩa thành ${g} phần bằng nhau, giữ 1 phần (chia hai vế cho ${g})`); }
    else { const o=OPS[+k]; apply(o[1], o[2]); } };
  $('scl-undo').onclick=()=>{ if(tilt) return; const h=hist.pop(); if(!h){ fb('Chưa có bước nào để hoàn tác.',false); return; } st.L=h.L; st.R=h.R; log.length=h.logLen; fb('',true); render(); };
  $('scl-new').onclick=()=>{ $('scl-pick').value='r'; load(random()); };
  $('scl-pick').onchange=()=>{ const v=$('scl-pick').value; load(v==='r'? random() : SAMPLES[+v]); };
  $('scl-tilt').onclick=()=>{ if(tilt) return; if(st.L[1]<1){ fb('Bên trái không có quả cân nào để thử.',false); return; }
    tilt={L:[st.L[0],st.L[1]-1],R:st.R.slice()}; fb('Bớt chỉ một bên thì cân lệch, hai vế không còn bằng nhau nữa. Vì vậy mọi phép biến đổi phải làm ở CẢ HAI vế.',false); drawScale();
    tiltT=setTimeout(()=>{ tilt=null; tiltT=null; drawScale(); }, 2200); };
  load(SAMPLES[0]);
},

/* =================================================================
   5. Đồ thị hàm số bậc nhất & hai hãng taxi
   ================================================================= */
toan_graph(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Đồ thị y = ax + b</h3>
   <div class="ctrl"><div><label for="gr-mode">Chế độ</label><select id="gr-mode"><option value="f">Kéo a, b xem đường thẳng</option><option value="t">So sánh hai hãng taxi</option></select></div></div>
   <div id="gr-f">
    <p class="muted">Kéo a: đường thẳng <b>xoay</b>. Kéo b: đường thẳng <b>trượt lên xuống</b>. Đoán trước: a âm thì đường đi lên hay đi xuống?</p>
    <svg viewBox="0 0 320 320" id="gr-svg" role="img" aria-label="Mặt phẳng toạ độ và đồ thị"></svg>
    <div class="ctrl">
     <div>${slider('gr-a','Hệ số góc a',-3,3,0.5,2,'')}</div>
     <div>${slider('gr-b','Tung độ gốc b',-5,5,1,1,'')}</div>
     <div><label><input type="checkbox" id="gr-two"> Vẽ thêm đường thứ hai d′: y = a′x + b′</label></div>
     <div></div>
     <div id="gr-two-a" class="tm-hide">${slider('gr-a2','a′',-3,3,0.5,2,'')}</div>
     <div id="gr-two-b" class="tm-hide">${slider('gr-b2','b′',-5,5,1,-2,'')}</div>
    </div>
    <div class="readout" id="gr-out"></div>
    <div class="tm-task" id="gr-task"></div>
   </div>
   <div id="gr-t" class="tm-hide">
    <p class="muted">Hãng A: 20 000 đ mở cửa + 12 000 đ/km. Hãng B: 8 000 đ mở cửa + 14 000 đ/km. Đoán trước: đi xa thì hãng nào lời hơn? Kéo số km để kiểm tra.</p>
    <svg viewBox="0 0 320 300" id="gr-tsvg" role="img" aria-label="Đồ thị giá cước hai hãng taxi"></svg>
    <div class="ctrl"><div>${slider('gr-km','Quãng đường',0,12,0.5,3,'km')}</div></div>
    <div class="readout" id="gr-tout"></div>
   </div></div>`;
  const U=24, O=160, X=x=>O+x*U, Y=y=>O-y*U;
  const C1='var(--accent)', C2=COL.orange;
  function eq(a,b){ let s='y = '; if(a===0) return s+num(b); s+= a===1?'x': a===-1?'−x' : num(a)+'x'; if(b>0) s+=' + '+nf(b); if(b<0) s+=' − '+nf(-b); return s; }
  function line(a,b,col,w){ return `<line x1="${X(-7)}" y1="${Y(a*-7+b)}" x2="${X(7)}" y2="${Y(a*7+b)}" stroke="${col}" stroke-width="${w||3}" clip-path="url(#gr-clip)" stroke-linecap="round"/>`; }
  const inV = (x,y)=>Math.abs(x)<=6.4&&Math.abs(y)<=6.4;
  function drawF(){
    const a=val('gr-a'), b=val('gr-b'), two=$('gr-two').checked, a2=val('gr-a2'), b2=val('gr-b2');
    $('gr-two-a').classList.toggle('tm-hide',!two); $('gr-two-b').classList.toggle('tm-hide',!two);
    let h=`<defs><clipPath id="gr-clip"><rect x="4" y="4" width="312" height="312"/></clipPath><marker id="gr-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--ink)"/></marker></defs>`;
    for(let i=-6;i<=6;i++){ h+=`<line x1="${X(i)}" y1="${Y(-6.5)}" x2="${X(i)}" y2="${Y(6.5)}" stroke="var(--line)"/><line x1="${X(-6.5)}" y1="${Y(i)}" x2="${X(6.5)}" y2="${Y(i)}" stroke="var(--line)"/>`;
      if(i&&i%2===0) h+=`<text x="${X(i)}" y="${O+14}" class="svgm" text-anchor="middle">${num(i)}</text><text x="${O-5}" y="${Y(i)+3.5}" class="svgm" text-anchor="end">${num(i)}</text>`; }
    h+=`<line x1="8" y1="${O}" x2="314" y2="${O}" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#gr-ar)"/><line x1="${O}" y1="312" x2="${O}" y2="6" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#gr-ar)"/>
        <text x="308" y="${O-6}" class="svgt" font-weight="700">x</text><text x="${O+7}" y="14" class="svgt" font-weight="700">y</text><text x="${O-5}" y="${O+13}" class="svgm" text-anchor="end">O</text>`;
    if(two) h+=line(a2,b2,C2,2.5);
    h+=line(a,b,C1,3);
    // tam giác hệ số góc
    if(a!==0 && inV(1,a+b) && inV(0,b)) h+=`<path d="M${X(0)} ${Y(b)}H${X(1)}V${Y(a+b)}" fill="none" stroke="var(--ink)" stroke-dasharray="3 2"/><text x="${X(.5)}" y="${Y(b)+(a>0?12:-5)}" class="svgm" text-anchor="middle">1</text><text x="${X(1)+4}" y="${Y(b+a/2)+3}" class="svgm">${num(a)}</text>`;
    if(Math.abs(b)<=6){ h+=`<circle cx="${X(0)}" cy="${Y(b)}" r="4.5" fill="${C1}" stroke="var(--paper)" stroke-width="1.5"/><text x="${X(0)-7}" y="${Y(b)+(a<0?17:-7)}" class="svgt tm-halo" text-anchor="end" font-weight="700">(0; ${num(b)})</text>`; }
    if(a!==0){ const x0=-b/a; if(Math.abs(x0)<=6.2 && b!==0) h+=`<circle cx="${X(x0)}" cy="${O}" r="4.5" fill="${C1}" stroke="var(--paper)" stroke-width="1.5"/><text x="${X(x0)+7}" y="${O+(a>0?17:-8)}" class="svgt tm-halo" font-weight="700">(${num(x0)}; 0)</text>`; }
    let rel='';
    if(two){ if(a===a2 && b===b2) rel='<b>d trùng d′</b> vì a = a′ và b = b′.';
      else if(a===a2) rel=`<b>d ∥ d′ (song song)</b> vì a = a′ = ${num(a)} và b ≠ b′. Hai đường nghiêng y hệt nhau, chỉ lệch nhau ${nf(Math.abs(b-b2))} đơn vị theo chiều dọc, như hai thanh ray.`;
      else { const xi=(b2-b)/(a-a2), yi=a*xi+b; rel=`<b>d cắt d′</b> vì a ≠ a′. Giải ${num(a)}x ${b<0?'−':'+'} ${nf(Math.abs(b))} = ${num(a2)}x ${b2<0?'−':'+'} ${nf(Math.abs(b2))} được x = ${num(xi)}, y = ${num(yi)}: giao điểm (${num(xi)}; ${num(yi)}).`;
        if(inV(xi,yi)) h+=`<circle cx="${X(xi)}" cy="${Y(yi)}" r="5.5" fill="none" stroke="var(--bad)" stroke-width="2.5"/>`; } }
    // chú thích
    h+=`<rect x="8" y="8" width="${two?132:118}" height="${two?42:24}" rx="8" fill="var(--card)" stroke="var(--line)" opacity=".95"/><line x1="16" y1="20" x2="34" y2="20" stroke="${C1}" stroke-width="3"/><text x="40" y="24" class="svgt" font-weight="700">d: ${eq(a,b)}</text>`+
      (two?`<line x1="16" y1="38" x2="34" y2="38" stroke="${C2}" stroke-width="3"/><text x="40" y="42" class="svgt" font-weight="700">d′: ${eq(a2,b2)}</text>`:'');
    $('gr-svg').innerHTML=h;
    let o=`<div class="big">${eq(a,b)}</div>`;
    if(a===0) o+=`a = 0 nên đây <b>không phải</b> hàm số bậc nhất: đường nằm ngang y = ${num(b)}, x tăng mà y đứng yên.`;
    else o+=`${a>0?'a > 0: đường thẳng <b>đi lên</b> từ trái sang phải, hàm số <b>đồng biến</b> (x tăng thì y tăng).':'a < 0: đường thẳng <b>đi xuống</b> từ trái sang phải, hàm số <b>nghịch biến</b> (x tăng thì y giảm).'} Khi x tăng 1 thì y ${a>0?'tăng':'giảm'} ${nf(Math.abs(a))}${Math.abs(a)>=2?', khá dốc':''}.<br>
       Cắt trục tung tại (0; ${num(b)}), cắt trục hoành tại (−b/a; 0) = (${num(-b/a)}; 0)${Math.abs(b/a)>6.2?' (nằm ngoài khung hình)':''}.`;
    if(two) o+=`<br>`+rel;
    $('gr-out').innerHTML=o;
    $('gr-task').innerHTML = two? `<b>Thử:</b> chỉnh a′ bằng a để hai đường song song; rồi chỉnh tiếp b′ = b xem chuyện gì xảy ra.` : `<b>Thử:</b> đặt a = 2, b = 1 rồi bật đường thứ hai với a′ = 2, b′ = −2 như hình trong bài. Hai đường có bao giờ gặp nhau không?`;
  }
  // ---- taxi ----
  const L0=46,R0=306,T0=16,B0=262, KX=(R0-L0)/12, KY=(B0-T0)/180, PX=x=>L0+x*KX, PY=y=>B0-y*KY;
  const fA=x=>20+12*x, fB=x=>8+14*x;
  function drawT(){ const km=val('gr-km'); let h='';
    for(let x=0;x<=12;x+=2) h+=`<line x1="${PX(x)}" y1="${T0}" x2="${PX(x)}" y2="${B0}" stroke="var(--line)"/><text x="${PX(x)}" y="${B0+14}" class="svgm" text-anchor="middle">${x}</text>`;
    for(let y=0;y<=180;y+=20) h+=`<line x1="${L0}" y1="${PY(y)}" x2="${R0}" y2="${PY(y)}" stroke="var(--line)"/>`+(y%40===0?`<text x="${L0-5}" y="${PY(y)+3.5}" class="svgm" text-anchor="end">${y}</text>`:'');
    h+=`<line x1="${L0}" y1="${B0}" x2="${R0+6}" y2="${B0}" stroke="var(--ink)" stroke-width="1.5"/><line x1="${L0}" y1="${B0}" x2="${L0}" y2="${T0-6}" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="${R0}" y="${B0+28}" class="svgm" text-anchor="end">số km</text><text x="6" y="${T0+2}" class="svgm">nghìn đ</text>
      <rect x="${L0}" y="${T0}" width="${PX(6)-L0}" height="${B0-T0}" fill="${C2}" opacity=".07"/><rect x="${PX(6)}" y="${T0}" width="${R0-PX(6)}" height="${B0-T0}" fill="var(--accent)" opacity=".07"/>
      <text x="${(L0+PX(6))/2}" y="${B0-8}" class="svgm" text-anchor="middle">B rẻ hơn</text><text x="${(PX(6)+R0)/2}" y="${B0-8}" class="svgm" text-anchor="middle">A rẻ hơn</text>
      <line x1="${PX(0)}" y1="${PY(fA(0))}" x2="${PX(12)}" y2="${PY(fA(12))}" stroke="${C1}" stroke-width="3"/><line x1="${PX(0)}" y1="${PY(fB(0))}" x2="${PX(12)}" y2="${PY(fB(12))}" stroke="${C2}" stroke-width="3"/>
      <line x1="${PX(6)}" y1="${PY(92)}" x2="${PX(6)}" y2="${B0}" stroke="var(--bad)" stroke-dasharray="3 3"/><circle cx="${PX(6)}" cy="${PY(92)}" r="5.5" fill="none" stroke="var(--bad)" stroke-width="2.5"/>
      <text x="${PX(6)+9}" y="${PY(92)+16}" class="svgt tm-halo" font-weight="700">giao điểm (6; 92)</text>
      <line x1="${PX(km)}" y1="${T0}" x2="${PX(km)}" y2="${B0}" stroke="var(--ink)" stroke-width="1.5"/>
      <circle cx="${PX(km)}" cy="${PY(fA(km))}" r="5" fill="${C1}" stroke="var(--paper)" stroke-width="1.5"/><circle cx="${PX(km)}" cy="${PY(fB(km))}" r="5" fill="${C2}" stroke="var(--paper)" stroke-width="1.5"/>
      <rect x="${L0+6}" y="${T0+4}" width="156" height="40" rx="8" fill="var(--card)" stroke="var(--line)" opacity=".95"/>
      <line x1="${L0+14}" y1="${T0+16}" x2="${L0+32}" y2="${T0+16}" stroke="${C1}" stroke-width="3"/><text x="${L0+38}" y="${T0+20}" class="svgt" font-weight="700">A: y = 12x + 20</text>
      <line x1="${L0+14}" y1="${T0+34}" x2="${L0+32}" y2="${T0+34}" stroke="${C2}" stroke-width="3"/><text x="${L0+38}" y="${T0+38}" class="svgt" font-weight="700">B: y = 14x + 8</text>`;
    $('gr-tsvg').innerHTML=h;
    const A=fA(km)*1000, B=fB(km)*1000, k=nf(km);
    let v = A===B? `<b>Đi ${k} km: hai hãng bằng tiền nhau</b> (${nf(A,0)} đ). Đây chính là giao điểm!` : A<B? `<b>Đi ${k} km: nên đi hãng A</b>, rẻ hơn ${nf(B-A,0)} đ.` : `<b>Đi ${k} km: nên đi hãng B</b>, rẻ hơn ${nf(A-B,0)} đ.`;
    $('gr-tout').innerHTML=`Hãng A: 20 000 + 12 000 · ${k} = <b>${nf(A,0)} đ</b><br>Hãng B: 8 000 + 14 000 · ${k} = <b>${nf(B,0)} đ</b><div class="big" style="margin:6px 0">${v}</div>
      Vì sao giao ở 6 km? Giải 20 000 + 12 000x = 8 000 + 14 000x ⇒ 12 000 = 2 000x ⇒ x = 6. Hãng B phí mở cửa thấp (b nhỏ) nên lời khi đi gần; hãng A giá mỗi km thấp (a nhỏ, đường thoải hơn) nên lời khi đi xa.`;
  }
  function draw(){ const t=$('gr-mode').value==='t'; $('gr-f').classList.toggle('tm-hide',t); $('gr-t').classList.toggle('tm-hide',!t); if(t) drawT(); else drawF(); }
  bindSliders(p,draw); draw();
},

/* =================================================================
   6. Tứ giác: hình bình hành biến hình
   ================================================================= */
toan_quad(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Biến hình bình hành</h3>
   <p class="muted">ABCD luôn là hình bình hành (các cạnh đối song song). Kéo cạnh và góc A, xem nó biến thành hình gì và hai đường chéo thay đổi ra sao.</p>
   <svg viewBox="0 0 320 250" id="qd-svg" role="img" aria-label="Hình bình hành ABCD và hai đường chéo"></svg>
   <div class="ctrl">
    <div>${slider('qd-ab','Cạnh AB',2,8,0.5,6,'cm')}</div>
    <div>${slider('qd-ad','Cạnh AD',2,8,0.5,4,'cm')}</div>
    <div>${slider('qd-ang','Góc A',30,150,5,60,'°')}</div>
   </div>
   <div class="readout" id="qd-out"></div>
   <div class="tm-task"><b>Câu đố:</b> <span id="qd-goal">chọn một thử thách bên dưới.</span>
    <div class="row" style="margin-top:6px"><button class="tm-chip" data-goal="thoi">Đổi thành hình thoi xem!</button><button class="tm-chip" data-goal="cn">…hình chữ nhật</button><button class="tm-chip" data-goal="vuong">…hình vuông</button></div>
    <div class="fb" id="qd-fb"></div></div></div>`;
  let goal=null;
  const NAMES={hbh:'Hình bình hành',cn:'Hình chữ nhật',thoi:'Hình thoi',vuong:'Hình vuông'};
  const HINT={thoi:'Hình thoi: hình bình hành có hai cạnh kề bằng nhau.',cn:'Hình chữ nhật: hình bình hành có một góc vuông.',vuong:'Hình vuông: vừa có góc vuông vừa có hai cạnh kề bằng nhau.'};
  function draw(){
    const ab=val('qd-ab'), ad=val('qd-ad'), ang=val('qd-ang'), r=ang*Math.PI/180;
    const pA={x:0,y:0}, pB={x:ab,y:0}, pD={x:ad*Math.cos(r),y:ad*Math.sin(r)}, pC={x:ab+pD.x,y:pD.y};
    const xmin=Math.min(0,pD.x), xmax=Math.max(ab,pC.x), ymax=pD.y;
    const s=Math.min(250/(xmax-xmin), 170/ymax), ox=(320-(xmax-xmin)*s)/2 - xmin*s, oy=30+(195+ymax*s)/2;
    const S=q=>({x:ox+q.x*s, y:oy-q.y*s});
    const A=S(pA),B=S(pB),C=S(pC),D=S(pD), O={x:(A.x+C.x)/2,y:(A.y+C.y)/2};
    const right=ang===90, eqs=ab===ad, kind= right&&eqs?'vuong': right?'cn': eqs?'thoi':'hbh';
    const unit=(P,Q)=>{ const dx=Q.x-P.x, dy=Q.y-P.y, l=Math.hypot(dx,dy); return {x:dx/l,y:dy/l}; };
    function tick(P,Q,n){ const M={x:(P.x+Q.x)/2,y:(P.y+Q.y)/2}, u=unit(P,Q), nn={x:-u.y,y:u.x}; let h=''; for(let i=0;i<n;i++){ const o=(i-(n-1)/2)*4; const cx=M.x+u.x*o, cy=M.y+u.y*o; h+=`<line x1="${cx+nn.x*6}" y1="${cy+nn.y*6}" x2="${cx-nn.x*6}" y2="${cy-nn.y*6}" stroke="var(--bad)" stroke-width="2"/>`; } return h; }
    function rmark(V,P,Q,c){ const u=unit(V,P), w=unit(V,Q), k=10; return `<path d="M${V.x+u.x*k} ${V.y+u.y*k}L${V.x+u.x*k+w.x*k} ${V.y+u.y*k+w.y*k}L${V.x+w.x*k} ${V.y+w.y*k}" fill="none" stroke="${c||'var(--ok)'}" stroke-width="2"/>`; }
    let h=`<polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}" fill="var(--accent)" fill-opacity=".12" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round"/>
      <line x1="${A.x}" y1="${A.y}" x2="${C.x}" y2="${C.y}" stroke="${COL.pink}" stroke-width="2" stroke-dasharray="6 4"/>
      <line x1="${B.x}" y1="${B.y}" x2="${D.x}" y2="${D.y}" stroke="${COL.blue}" stroke-width="2" stroke-dasharray="6 4"/>
      <circle cx="${O.x}" cy="${O.y}" r="3.5" fill="var(--ink)"/>`;
    const n1=1, n2=eqs?1:2; h+=tick(A,B,n1)+tick(D,C,n1)+tick(A,D,n2)+tick(B,C,n2);
    if(right){ h+=rmark(A,B,D)+rmark(B,C,A)+rmark(C,D,B)+rmark(D,A,C); }
    else { const R=22, ex=A.x+R*Math.cos(r), ey=A.y-R*Math.sin(r); h+=`<path d="M${A.x+R} ${A.y}A${R} ${R} 0 0 0 ${ex} ${ey}" fill="none" stroke="var(--ok)" stroke-width="2"/>`; }
    if(eqs) h+=rmark(O,A,B,'var(--bad)');
    h+=`<text x="${A.x-13}" y="${A.y+21}" class="svgt" text-anchor="middle" font-weight="800" style="fill:var(--ok)">${ang}°</text>`;
    const cen={x:(A.x+C.x)/2,y:(A.y+C.y)/2}; [['B',B],['C',C],['D',D]].forEach(([t,P])=>{ const u=unit(cen,P); h+=`<text x="${P.x+u.x*13}" y="${P.y+u.y*13+5}" class="svgt" font-size="14" font-weight="800" text-anchor="middle">${t}</text>`; });
    h+=`<text x="${A.x-13}" y="${A.y+6}" class="svgt" font-size="14" font-weight="800" text-anchor="middle">A</text><text x="${O.x+8}" y="${O.y-6}" class="svgt" font-weight="700">O</text>`;
    h+=`<text x="160" y="16" class="svgt" text-anchor="middle" font-weight="800" font-size="14">${NAMES[kind]}</text>`;
    $('qd-svg').innerHTML=h;
    const cos=Math.cos(r), ac=Math.sqrt(ab*ab+ad*ad+2*ab*ad*cos), bd=Math.sqrt(ab*ab+ad*ad-2*ab*ad*cos);
    const eqd=Math.abs(ac-bd)<1e-9;
    const em={hbh:'▱',cn:'▭',thoi:'◇',vuong:'□'}[kind];
    const why={hbh:'Các cạnh đối song song và bằng nhau, nhưng chưa có góc vuông, hai cạnh kề chưa bằng nhau.',
      cn:'Hình bình hành có một góc vuông nên là hình chữ nhật (cả 4 góc đều vuông).',
      thoi:'Hình bình hành có hai cạnh kề bằng nhau nên là hình thoi (4 cạnh bằng nhau).',
      vuong:'Có góc vuông và hai cạnh kề bằng nhau: vừa là hình chữ nhật vừa là hình thoi.'}[kind];
    $('qd-out').innerHTML=`<div class="big">${em} ${NAMES[kind]}</div>${why}<br>
      Góc A = góc C = ${ang}°, góc B = góc D = ${180-ang}° (hai góc kề một cạnh bù nhau).<br>
      Đường chéo AC ≈ <b>${nf(ac,2)} cm</b>, BD ≈ <b>${nf(bd,2)} cm</b>.<br>
      • Cắt nhau tại trung điểm O của mỗi đường: <span class="tm-ok">luôn đúng</span><br>
      • Bằng nhau? ${eqd?'<span class="tm-ok">Có</span> (vì có góc vuông)':'<span class="tm-no">Không</span>'}<br>
      • Vuông góc? ${eqs?'<span class="tm-ok">Có</span> (vì 4 cạnh bằng nhau), xem dấu góc vuông đỏ tại O':'<span class="tm-no">Không</span>'}`;
    if(goal){ const ok = goal==='thoi'? (eqs) : goal==='cn'? right : (right&&eqs); const f=$('qd-fb');
      if(ok){ f.className='fb ok'; f.innerHTML=`🎉 Giỏi quá! Đã thành ${NAMES[goal].toLowerCase()}. ${HINT[goal]}`; } else { f.className='fb'; f.innerHTML=`<span class="muted">${HINT[goal]} Kéo thanh trượt nào nhỉ?</span>`; } }
  }
  p.querySelectorAll('[data-goal]').forEach(b=>b.onclick=()=>{ goal=b.dataset.goal; p.querySelectorAll('[data-goal]').forEach(x=>x.setAttribute('aria-pressed',x===b)); $('qd-goal').textContent=`biến ABCD thành ${NAMES[goal].toLowerCase()}.`;
    // xuất phát từ một hình bình hành thường để có việc mà làm
    if(goal==='thoi'){ setS('qd-ab',6); setS('qd-ad',4); setS('qd-ang',70); } else if(goal==='cn'){ setS('qd-ab',6); setS('qd-ad',4); setS('qd-ang',55); } else { setS('qd-ab',5); setS('qd-ad',3); setS('qd-ang',120); }
    draw(); });
  bindSliders(p,draw); draw();
},

/* =================================================================
   7. Đo chiều cao bằng bóng nắng
   ================================================================= */
toan_shadow(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>Đo chiều cao cây bằng bóng nắng</h3>
   <p class="muted">Tia nắng coi như song song, nên bạn nhỏ với bóng của mình và cái cây với bóng của nó tạo thành <b>hai tam giác vuông đồng dạng</b>. Đo ba độ dài trên mặt đất, tính được chiều cao cây mà không cần trèo!</p>
   <svg viewBox="0 0 320 240" id="sh-svg" role="img" aria-label="Cây, bạn nhỏ và hai cái bóng"></svg>
   <div class="ctrl">
    <div>${slider('sh-h','Chiều cao của bạn h',1,1.8,0.05,1.5,'m')}</div>
    <div>${slider('sh-b','Bóng của bạn b',0.5,4,0.1,2,'m')}</div>
    <div>${slider('sh-B','Bóng của cây B',3,20,0.5,12,'m')}</div>
    <div><label><input type="checkbox" id="sh-hide"> Che kết quả để tự tính trước</label></div>
   </div>
   <div class="readout" id="sh-out"></div>
   <div class="tm-task"><b>Thử:</b> đặt bóng của bạn bằng đúng chiều cao của bạn (b = h). Khi đó bóng cây cũng bằng chiều cao cây. Thalès đã đo kim tự tháp đúng vào lúc như thế!</div></div>
   <div class="sec lab"><h3>Bóng thay đổi theo giờ</h3>
   <p class="muted">Cây cao 9 m, bạn cao 1,5 m. Kéo giờ trong ngày: bóng dài ngắn thay đổi, nhưng <b>tỉ số chiều cao : bóng</b> của hai vật lúc nào cũng bằng nhau. Vì vậy phải đo hai bóng <b>cùng một lúc</b>.</p>
   <svg viewBox="0 0 320 240" id="sh-svg2" role="img" aria-label="Bóng của cây và bạn nhỏ theo giờ"></svg>
   <div class="ctrl"><div>${slider('sh-t','Giờ trong ngày',8,16,0.25,9,'giờ')}</div></div>
   <div class="readout" id="sh-out2"></div></div>`;
  const G=212;
  function scene(svg,o){
    const x0=50, gap=30; const s=Math.min(160/o.H, 236/(o.B+o.b)); const xg=x0+o.B*s+gap;
    const tT={x:x0,y:G-o.H*s}, tS={x:x0+o.B*s,y:G}, gT={x:xg,y:G-o.h*s}, gS={x:xg+o.b*s,y:G};
    const dx=o.b, dy=o.h, L=Math.hypot(dx,dy), ux=dx/L, uy=dy/L;
    const back=(P)=>{ const ty=(P.y-14)/uy, tx=(P.x-6)/ux; const t=Math.min(ty,tx); return {x:P.x-ux*t,y:P.y-uy*t}; };
    const sTop=back(tT), gTop=back(gT);
    let h=`<rect x="0" y="${G}" width="320" height="${240-G}" fill="${COL.green}" opacity=".14"/><line x1="0" y1="${G}" x2="320" y2="${G}" stroke="var(--ink)" stroke-width="1.5"/>`;
    h+=`<circle cx="${Math.max(16,Math.min(300,gTop.x))}" cy="${Math.max(16,gTop.y)}" r="11" fill="${COL.gold}"/>`;
    h+=`<polygon points="${x0},${G} ${tT.x},${tT.y} ${tS.x},${tS.y}" fill="${COL.pink}" opacity=".18"/><polygon points="${xg},${G} ${gT.x},${gT.y} ${gS.x},${gS.y}" fill="${COL.purple}" opacity=".22"/>`;
    h+=`<line x1="${sTop.x}" y1="${sTop.y}" x2="${tS.x}" y2="${tS.y}" stroke="${COL.gold}" stroke-width="2" stroke-dasharray="6 4"/><line x1="${gTop.x}" y1="${gTop.y}" x2="${gS.x}" y2="${gS.y}" stroke="${COL.gold}" stroke-width="2" stroke-dasharray="6 4"/>`;
    h+=`<line x1="${x0}" y1="${G}" x2="${tS.x}" y2="${G}" stroke="var(--ink)" stroke-width="5" opacity=".45" stroke-linecap="round"/><line x1="${xg}" y1="${G}" x2="${gS.x}" y2="${G}" stroke="var(--ink)" stroke-width="5" opacity=".45" stroke-linecap="round"/>`;
    // cây
    const Hs=o.H*s, rx=Math.max(8,Hs*.15);
    h+=`<rect x="${x0-3.5}" y="${G-Hs*.5}" width="7" height="${Hs*.5}" fill="#9A6A3E"/><ellipse cx="${x0}" cy="${G-Hs*.7}" rx="${rx}" ry="${Hs*.3}" fill="#4CAF6A" opacity=".9"/>`;
    // bạn nhỏ
    const hp=o.h*s;
    h+=`<line x1="${xg-hp*.05}" y1="${G}" x2="${xg-hp*.05}" y2="${G-hp*.42}" stroke="#7A4E3A" stroke-width="${Math.max(1.5,hp*.04)}"/><line x1="${xg+hp*.05}" y1="${G}" x2="${xg+hp*.05}" y2="${G-hp*.42}" stroke="#7A4E3A" stroke-width="${Math.max(1.5,hp*.04)}"/>
      <polygon points="${xg-hp*.07},${G-hp*.78} ${xg+hp*.07},${G-hp*.78} ${xg+hp*.17},${G-hp*.38} ${xg-hp*.17},${G-hp*.38}" fill="${COL.pink}"/>
      <circle cx="${xg}" cy="${G-hp*.89}" r="${hp*.11}" fill="#F6C9A8"/><path d="M${xg-hp*.11} ${G-hp*.88}A${hp*.11} ${hp*.11} 0 0 1 ${xg+hp*.11} ${G-hp*.88}Z" fill="#4A2C2A"/>`;
    // góc vuông, kích thước
    h+=`<path d="M${x0+7} ${G}V${G-7}H${x0}" fill="none" stroke="var(--ink)"/><path d="M${xg+7} ${G}V${G-7}H${xg}" fill="none" stroke="var(--ink)"/>`;
    h+=`<line x1="${x0-16}" y1="${G}" x2="${x0-16}" y2="${tT.y}" stroke="var(--muted)"/><text x="${x0-20}" y="${(G+tT.y)/2+4}" class="svgt" text-anchor="end" font-weight="800">H</text>`;
    h+=`<line x1="${xg-hp*.2-6}" y1="${G}" x2="${xg-hp*.2-6}" y2="${gT.y}" stroke="var(--muted)"/><text x="${xg-hp*.2-10}" y="${(G+gT.y)/2+4}" class="svgt" text-anchor="end" font-weight="800">h</text>`;
    h+=`<text x="${(x0+tS.x)/2}" y="${G+17}" class="svgt" text-anchor="middle" font-weight="700">B = ${nf(o.B,1)} m</text><text x="${Math.min((xg+gS.x)/2,284)}" y="${G+17}" class="svgt" text-anchor="middle" font-weight="700">b = ${nf(o.b,2)} m</text>`;
    h+=`<text x="${x0+rx+5}" y="${G-Hs*.72}" class="svgt tm-halo" font-weight="700">${o.hide?'H = ?':'H = '+nf(o.H,2)+' m'}</text>`;
    if(o.label) h+=`<text x="314" y="${Math.max(30,Math.min(G-10,60))}" class="svgm" text-anchor="end">${o.label}</text>`;
    svg.innerHTML=h;
  }
  function d1(){ const h=val('sh-h'), b=val('sh-b'), B=val('sh-B'), H=h*B/b, hide=$('sh-hide').checked;
    scene($('sh-svg'),{H,B,h,b,hide});
    $('sh-out').innerHTML=`Hai tam giác vuông đồng dạng (cùng góc nắng) nên <span class="f" style="font-size:17px">H/B = h/b</span><br>`+
      (hide? `<span class="muted">Em tự tính H = h · B / b ra giấy, rồi bỏ dấu tích để kiểm tra.</span>`
        : `<div class="big">H = h · B / b = ${nf(h)} · ${nf(B,1)} / ${nf(b)} ≈ ${nf(H,2)} m</div>Tỉ số chiều cao : bóng lúc này là ${nf(h)} : ${nf(b)} ≈ ${nf(h/b,2)}. Cây ${H>=h*3?'cao gấp khoảng '+nf(H/h,1)+' lần em':''}${H>25?' (cao như một toà nhà '+Math.round(H/3.2)+' tầng!)':''}.`); }
  function d2(){ const t=val('sh-t'), e=75*Math.sin(Math.PI*(t-6)/12), tn=Math.tan(e*Math.PI/180), H=9, h=1.5, B=H/tn, b=h/tn;
    scene($('sh-svg2'),{H,B,h,b,label:`${hm(t)} · nắng ${nf(e,0)}°`});
    const near=Math.abs(b-h)/h<0.05;
    $('sh-out2').innerHTML=`<div class="tbl tm-tbl"><table><tr><th></th><th>Chiều cao</th><th>Bóng</th><th>Cao : bóng</th></tr>
      <tr><td>Cây</td><td>9 m</td><td>${nf(B,2)} m</td><td><b>${nf(H/B,2)}</b></td></tr>
      <tr><td>Bạn</td><td>1,5 m</td><td>${nf(b,2)} m</td><td><b>${nf(h/b,2)}</b></td></tr></table></div>
      Hai tỉ số luôn bằng nhau, nên H = h · B / b = 1,5 · ${nf(B,2)} / ${nf(b,2)} = 9 m ở bất kì giờ nào. ${e>60?'Gần trưa nắng chiếu gần thẳng đứng nên bóng ngắn.':'Nắng xiên nhiều nên bóng dài.'}`+
      (near?`<br><span class="tm-ok">✨ Lúc này bóng gần bằng chiều cao, đúng thời điểm Thalès chọn để đo kim tự tháp!</span>`:''); }
  bindSliders(p.querySelectorAll('.sec')[0],d1); bindSliders(p.querySelectorAll('.sec')[1],d2); d1(); d2();
},

/* =================================================================
   8. Pythagoras: thang, màn hình, hình chóp đều
   ================================================================= */
toan_pyth(p){
  p.innerHTML = CSS + `<div class="sec lab"><h3>1. Thang dựa tường</h3>
   <p class="muted">Thang, tường và mặt đất tạo thành tam giác vuông, thang là cạnh huyền. <b>Đoán trước:</b> thang 5 m, chân cách tường 1,25 m thì đỉnh thang cao bao nhiêu?</p>
   <svg viewBox="0 0 320 250" id="py-svg1" role="img" aria-label="Thang dựa vào tường"></svg>
   <div class="ctrl"><div>${slider('py-L','Chiều dài thang L',2,8,0.25,5,'m')}</div><div>${slider('py-x','Chân thang cách tường x',0.2,4.8,0.05,1.25,'m')}</div></div>
   <div class="row"><button class="btn ghost" id="py-safe">Đặt chân thang an toàn (x = L/4)</button></div>
   <div class="readout" id="py-out1"></div></div>

   <div class="sec lab"><h3>2. Màn hình bao nhiêu inch?</h3>
   <p class="muted">Số inch là độ dài <b>đường chéo</b> màn hình (1 inch = 2,54 cm). Chọn kích cỡ và tỉ lệ để tính chiều ngang, chiều cao.</p>
   <svg viewBox="0 0 320 210" id="py-svg2" role="img" aria-label="Màn hình với đường chéo"></svg>
   <div class="ctrl"><div>${slider('py-in','Đường chéo',4,85,0.1,55,'inch')}</div><div><label for="py-r">Tỉ lệ ngang : cao</label><select id="py-r"><option value="16,9">16 : 9 (tivi, laptop)</option><option value="21,9">21 : 9 (màn siêu rộng)</option><option value="4,3">4 : 3 (tivi đời cũ, iPad)</option><option value="19.5,9">19,5 : 9 (điện thoại)</option></select></div></div>
   <div class="row" id="py-q2"><button class="tm-chip" data-in="55" data-r="16,9">Tivi 55 inch</button><button class="tm-chip" data-in="55" data-r="21,9">55 inch 21:9</button><button class="tm-chip" data-in="14" data-r="16,9">Laptop 14 inch</button><button class="tm-chip" data-in="6.1" data-r="19.5,9">Điện thoại 6,1 inch</button></div>
   <div class="readout" id="py-out2"></div></div>

   <div class="sec lab"><h3>3. Hình chóp tứ giác đều</h3>
   <p class="muted">Đáy là hình vuông cạnh a, chiều cao h. Tam giác vuông SOM (vuông tại O) cho trung đoạn d. Nhớ: diện tích xung quanh dùng <b>d</b>, thể tích dùng <b>h</b>.</p>
   <svg viewBox="0 0 320 240" id="py-svg3" role="img" aria-label="Hình chóp tứ giác đều"></svg>
   <div class="ctrl"><div>${slider('py-a','Cạnh đáy a',0.5,10,0.5,3,'m')}</div><div>${slider('py-h','Chiều cao h',0.5,10,0.5,2,'m')}</div></div>
   <div class="row"><button class="tm-chip" id="py-tent">⛺ Lều 3 m × 2 m</button><button class="tm-chip" id="py-kh">🏜️ Kim tự tháp Kheops</button></div>
   <div class="readout" id="py-out3"></div></div>`;
  const secs=p.querySelectorAll('.sec');
  /* --- thang --- */
  function d1(){ const L=val('py-L'); const xs=$('py-x'); const mx=+(L-0.2).toFixed(2); xs.max=mx; if(val('py-x')>mx) setS('py-x',mx);
    const x=val('py-x'), H=Math.sqrt(L*L-x*x), th=Math.acos(x/L)*180/Math.PI, r=x/L;
    const s=190/L, Wx=84, G=226, top={x:Wx,y:G-H*s}, foot={x:Wx+x*s,y:G};
    let h=`<rect x="${Wx-26}" y="18" width="26" height="${G-18}" fill="var(--line)"/><line x1="${Wx}" y1="18" x2="${Wx}" y2="${G}" stroke="var(--ink)" stroke-width="2"/>
      <line x1="10" y1="${G}" x2="310" y2="${G}" stroke="var(--ink)" stroke-width="2"/><rect x="10" y="${G}" width="300" height="${250-G}" fill="${COL.green}" opacity=".14"/>
      <path d="M${Wx+9} ${G}V${G-9}H${Wx}" fill="none" stroke="var(--ink)"/>`;
    const ux=(foot.x-top.x)/(L*s), uy=(foot.y-top.y)/(L*s), nx=-uy*5, ny=ux*5;
    h+=`<line x1="${top.x+nx}" y1="${top.y+ny}" x2="${foot.x+nx}" y2="${foot.y+ny}" stroke="${COL.orange}" stroke-width="3"/><line x1="${top.x-nx}" y1="${top.y-ny}" x2="${foot.x-nx}" y2="${foot.y-ny}" stroke="${COL.orange}" stroke-width="3"/>`;
    for(let k=0.3;k<L;k+=0.3){ const px=top.x+ux*k*s, py=top.y+uy*k*s; h+=`<line x1="${px+nx}" y1="${py+ny}" x2="${px-nx}" y2="${py-ny}" stroke="${COL.orange}" stroke-width="2"/>`; }
    const R=26;
    h+=`<path d="M${foot.x-R} ${G}A${R} ${R} 0 0 1 ${foot.x-R*Math.cos(th*Math.PI/180)} ${G-R*Math.sin(th*Math.PI/180)}" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <text x="${foot.x-(R+15)*Math.cos(th*Math.PI/360)}" y="${G-(R+15)*Math.sin(th*Math.PI/360)+4}" class="svgt tm-halo" text-anchor="middle" font-weight="700">${nf(th,0)}°</text>
      <text x="${(top.x+foot.x)/2+12}" y="${(top.y+foot.y)/2}" class="svgt tm-halo" font-weight="800">L = ${nf(L)} m</text>
      <text x="${Wx-30}" y="${(G+top.y)/2+4}" class="svgt" text-anchor="end" font-weight="800">${nf(H,2)} m</text><line x1="${Wx-34}" y1="${top.y}" x2="${Wx-34}" y2="${(G+top.y)/2-10}" stroke="var(--muted)"/><line x1="${Wx-34}" y1="${(G+top.y)/2+12}" x2="${Wx-34}" y2="${G}" stroke="var(--muted)"/>
      <text x="${(Wx+foot.x)/2}" y="${G+16}" class="svgt" text-anchor="middle" font-weight="800">x = ${nf(x)} m</text>`;
    $('py-svg1').innerHTML=h;
    const safe = r<0.2? `<p class="fb no">⚠️ Quá dốc (góc ${nf(th,0)}°): khi trèo lên thang dễ bị ngửa ra sau.</p>` : r>0.3? `<p class="fb no">⚠️ Quá thoải (góc ${nf(th,0)}°): chân thang dễ trượt ra xa tường.</p>` : `<p class="fb ok">✅ An toàn: chân thang cách tường khoảng ¼ chiều dài, góc nghiêng ≈ ${nf(th,0)}° (khuyến nghị ≈ 75°).</p>`;
    $('py-out1').innerHTML=`<div class="big">Chiều cao đỉnh thang = √(L² − x²) = √(${nf(L)}² − ${nf(x)}²) ≈ ${nf(H,2)} m</div>Thang là cạnh huyền nên phải <b>trừ</b>: ${nf(L*L,4)} − ${nf(x*x,4)} = ${nf(L*L-x*x,4)}. Tỉ số x : L = ${nf(r,2)}.`+safe; }
  $('py-safe').onclick=()=>{ setS('py-x', Math.round(val('py-L')/4/0.05)*0.05); d1(); };
  bindSliders(secs[0],d1); d1();
  /* --- màn hình --- */
  function d2(){ const inch=val('py-in'), rr=$('py-r').value.split(',').map(Number), w=rr[0], hh=rr[1];
    const D=inch*2.54, k=D/Math.hypot(w,hh), W=w*k, H=hh*k;
    const s=Math.min(270/W, 150/H), sw=W*s, sh=H*s, x0=(320-sw)/2, y0=22+(150-sh)/2;
    const SC='style="fill:#2B2233"';
    let h=`<rect x="${x0-6}" y="${y0-6}" width="${sw+12}" height="${sh+12}" rx="8" fill="#2B2233"/><rect x="${x0}" y="${y0}" width="${sw}" height="${sh}" fill="#CFE6FA"/>
      <line x1="${x0}" y1="${y0+sh}" x2="${x0+sw}" y2="${y0}" stroke="#E08A00" stroke-width="2.5"/>
      <text x="${x0+sw/2}" y="${y0+sh/2-6}" class="svgt" ${SC} text-anchor="middle" font-weight="800" transform="rotate(${-Math.atan2(sh,sw)*180/Math.PI} ${x0+sw/2} ${y0+sh/2})">${nf(inch,1)}″ = ${nf(D,1)} cm</text>
      <text x="${x0+sw/2}" y="${y0+sh+24}" class="svgt" text-anchor="middle" font-weight="700">ngang ≈ ${nf(W,1)} cm</text>
      `+(x0+sw+12<=232? `<text x="${x0+sw+12}" y="${y0+sh/2+4}" class="svgt" font-weight="700">cao ≈ ${nf(H,1)} cm</text>` : `<text x="${x0+8}" y="${y0+16}" class="svgt" ${SC} font-weight="700">cao ≈ ${nf(H,1)} cm</text>`);
    $('py-svg2').innerHTML=h;
    const rs=$('py-r').value.replace('.',',').replace(',9',' : 9').replace(',3',' : 3');
    $('py-out2').innerHTML=`Đường chéo d = ${nf(inch,1)} × 2,54 ≈ ${nf(D,1)} cm. Tỉ lệ ${rs}: ngang = ${nf(w,1)}k, cao = ${hh}k.<br>
      Pythagoras: (${nf(w,1)}k)² + (${hh}k)² = d² ⇒ k = d / √(${nf(w*w,2)} + ${hh*hh}) ≈ ${nf(D,1)} / ${nf(Math.hypot(w,hh),2)} ≈ ${nf(k,2)} cm
      <div class="big">Ngang ≈ ${nf(W,1)} cm, cao ≈ ${nf(H,1)} cm</div>
      <span class="muted">Mua kệ tivi phải đo theo chiều ngang, không theo số inch! Cùng số inch, màn càng “dẹt” (21 : 9) thì càng thấp.</span>`; }
  $('py-q2').onclick=e=>{ const b=e.target.closest('[data-in]'); if(!b) return; setS('py-in',+b.dataset.in); $('py-r').value=b.dataset.r; d2(); };
  bindSliders(secs[1],d2); d2();
  /* --- hình chóp --- */
  function setRange(big){ [['py-a',big?[20,300,1]:[0.5,10,0.5]],['py-h',big?[20,300,1]:[0.5,10,0.5]]].forEach(([id,r])=>{ const el=$(id); el.min=r[0]; el.max=r[1]; el.step=r[2]; }); }
  $('py-tent').onclick=()=>{ setRange(false); setS('py-a',3); setS('py-h',2); d3(); };
  $('py-kh').onclick=()=>{ setRange(true); setS('py-a',230); setS('py-h',146); d3(); };
  function d3(){ const a=val('py-a'), hgt=val('py-h'), d=Math.sqrt(hgt*hgt+a*a/4), Sxq=2*a*d, V=a*a*hgt/3, edge=Math.sqrt(d*d+a*a/4);
    const P3=(x,y,z)=>({X:x+0.45*z, Y:y+0.32*z}), q=a/2;
    const pts={A:P3(-q,0,-q),B:P3(q,0,-q),C:P3(q,0,q),D:P3(-q,0,q),S:P3(0,hgt,0),O:P3(0,0,0),M:P3(0,0,-q)};
    const xs=Object.values(pts).map(v=>v.X), ys=Object.values(pts).map(v=>v.Y);
    const mnx=Math.min(...xs), mxx=Math.max(...xs), mny=Math.min(...ys), mxy=Math.max(...ys);
    const s=Math.min(250/(mxx-mnx), 180/(mxy-mny)), ox=(320-(mxx-mnx)*s)/2, oy=210-(180-(mxy-mny)*s)/2;
    const Pt={}; Object.keys(pts).forEach(k=>Pt[k]={x:ox+(pts[k].X-mnx)*s, y:oy-(pts[k].Y-mny)*s});
    const {A,B,C,D,S,O,M}=Pt, L=(P,Q,st)=>`<line x1="${P.x}" y1="${P.y}" x2="${Q.x}" y2="${Q.y}" ${st}/>`;
    const solid='stroke="var(--ink)" stroke-width="2"', dash='stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"';
    const un=(P,Q)=>{ const dx=Q.x-P.x, dy=Q.y-P.y, l=Math.hypot(dx,dy)||1; return {x:dx/l,y:dy/l}; };
    const u1=un(O,M), u2=un(O,S), k=8;
    let h=`<polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y} ${D.x},${D.y}" fill="var(--accent)" fill-opacity=".08"/>
      <polygon points="${S.x},${S.y} ${A.x},${A.y} ${B.x},${B.y}" fill="${COL.gold}" fill-opacity=".28"/><polygon points="${S.x},${S.y} ${B.x},${B.y} ${C.x},${C.y}" fill="${COL.gold}" fill-opacity=".14"/>
      ${L(A,D,dash)}${L(D,C,dash)}${L(S,D,dash)}${L(S,O,'stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"')}${L(O,M,'stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="3 3"')}
      ${L(A,B,solid)}${L(B,C,solid)}${L(S,A,solid)}${L(S,B,solid)}${L(S,C,solid)}${L(S,M,`stroke="${COL.pink}" stroke-width="3"`)}
      <path d="M${O.x+u1.x*k} ${O.y+u1.y*k}L${O.x+u1.x*k+u2.x*k} ${O.y+u1.y*k+u2.y*k}L${O.x+u2.x*k} ${O.y+u2.y*k}" fill="none" stroke="var(--ink)"/>
      <path d="M${M.x+un(M,B).x*7} ${M.y+un(M,B).y*7}L${M.x+un(M,B).x*7+un(M,S).x*7} ${M.y+un(M,B).y*7+un(M,S).y*7}L${M.x+un(M,S).x*7} ${M.y+un(M,S).y*7}" fill="none" stroke="var(--ink)"/>`;
    const wide=Math.hypot(B.x-A.x,B.y-A.y)>=70, tallp=Math.hypot(S.x-O.x,S.y-O.y)>=26;
    [['S',S,0,-8],['A',A,-10,6],['B',B,8,8],['C',C,10,4],['D',D,-10,-2],['O',O,-11,-3],['M',M,0,15]].forEach(([t,P,dx,dy])=>{ if(t==='S'||(wide&&(t!=='O'||tallp))) h+=`<text x="${P.x+dx}" y="${P.y+dy}" class="svgt tm-halo" font-weight="800" text-anchor="middle">${t}</text>`; });
    if(tallp) h+=`<text x="${(S.x+O.x)/2-6}" y="${(S.y+O.y)/2}" class="svgt tm-halo" text-anchor="end" font-weight="800" style="fill:var(--accent)">h</text>`;
    h+=`<text x="${(S.x+M.x)/2+6}" y="${(S.y+M.y)/2+12}" class="svgt tm-halo" font-weight="800" style="fill:${COL.pink}">d</text>`+
      (wide?`<text x="${(A.x+M.x)/2}" y="${A.y+16}" class="svgt" text-anchor="middle" font-weight="700">a = ${nf(a,1)}</text>`:`<text x="160" y="232" class="svgm" text-anchor="middle">a = ${nf(a,1)} m (đáy rất nhỏ so với chiều cao)</text>`);
    $('py-svg3').innerHTML=h;
    const big=a>=20, dp=big?1:2;
    $('py-out3').innerHTML=`Trung đoạn: d = √(h² + (a/2)²) = √(${nf(hgt,1)}² + ${nf(a/2,2)}²) ≈ <b>${nf(d,dp)} m</b><br>
      Diện tích xung quanh: S<sub>xq</sub> = p · d = 2a · d = 2 · ${nf(a,1)} · ${nf(d,dp)} ≈ <b>${nf(Sxq,big?0:2)} m²</b> <span class="muted">(p = nửa chu vi đáy = 2a)</span><br>
      <div class="big">Thể tích V = ⅓ · a² · h = ⅓ · ${nf(a*a,2)} · ${nf(hgt,1)} ≈ ${nf(V,big?0:2)} m³</div>
      Cạnh bên SA = √(d² + (a/2)²) ≈ ${nf(edge,dp)} m.`+(big?`<br><span class="muted">Thể tích cỡ ${nf(V/1e6,2)} triệu m³, bằng khoảng ${nf(V/2500,0)} bể bơi Olympic (2 500 m³ mỗi bể)!</span>`:'')+
      (Math.abs(a-3)<1e-9&&Math.abs(hgt-2)<1e-9?`<br><span class="muted">Lều 3 m × 2 m cần 15 m² vải phủ bốn mặt bên, đúng như ví dụ trong bài.</span>`:''); }
  bindSliders(secs[2],d3); d3();
},

/* =================================================================
   9. Tung đồng xu, xúc xắc
   ================================================================= */
toan_dice(p){
  const EV={coin:[['s','Ra mặt sấp',[0]],['n','Ra mặt ngửa',[1]]],
    die:[['chan','Ra mặt chẵn (2, 4, 6)',[2,4,6]],['ge5','Ra số ≥ 5 (5, 6)',[5,6]],['six','Ra mặt 6',[6]],['nt','Ra số nguyên tố (2, 3, 5)',[2,3,5]],['b3','Ra số chia hết cho 3 (3, 6)',[3,6]]]};
  p.innerHTML = CSS + `<div class="sec lab"><h3>Tung đồng xu, gieo xúc xắc</h3>
   <p class="muted"><b>Đoán trước:</b> tung đồng xu 10 lần có chắc được đúng 5 lần sấp không? Còn 1 000 lần thì sao? Bấm tung rồi xem tần suất thay đổi.</p>
   <div class="ctrl"><div><label for="dc-obj">Dụng cụ</label><select id="dc-obj"><option value="die">Xúc xắc 6 mặt cân đối</option><option value="coin">Đồng xu cân đối</option></select></div>
     <div><label for="dc-ev">Biến cố A</label><select id="dc-ev"></select></div></div>
   <div class="tm-face"><svg viewBox="0 0 84 84" class="tm-small" id="dc-face" aria-label="Kết quả lần tung gần nhất"></svg>
     <div><div class="tm-btns" style="margin:0"><button class="btn" data-n="1">Tung 1 lần</button><button class="btn ghost" data-n="10">10 lần</button><button class="btn ghost" data-n="100">100 lần</button><button class="btn ghost" data-n="1000">1 000 lần</button><button class="btn ghost" id="dc-reset">Làm lại</button></div>
     <div class="muted" id="dc-n" style="margin-top:4px"></div></div></div>
   <svg viewBox="0 0 320 210" id="dc-bar" role="img" aria-label="Biểu đồ cột tần suất"></svg>
   <div class="tbl tm-tbl" id="dc-tbl" style="margin-top:8px"></div>
   <div class="readout" id="dc-out"></div>
   <h3 class="tm-sub" style="margin-top:14px">Xác suất thực nghiệm của A theo số lần tung</h3>
   <svg viewBox="0 0 320 170" id="dc-line" role="img" aria-label="Xác suất thực nghiệm theo số lần tung"></svg></div>`;
  let obj='die', seq=[], cnt=[], last=null, iv=null;
  function stop(){ if(iv){clearInterval(iv);iv=null; p.querySelectorAll('[data-n]').forEach(b=>b.disabled=false);} }
  stopAnim=stop;
  const faces=()=>obj==='coin'?2:6, fname=i=>obj==='coin'?(i===0?'Sấp':'Ngửa'):String(i+1);
  function fillEv(){ $('dc-ev').innerHTML=EV[obj].map(e=>`<option value="${e[0]}">${e[1]}</option>`).join(''); }
  function ev(){ const k=$('dc-ev').value; return EV[obj].find(e=>e[0]===k)||EV[obj][0]; }
  function inEv(o,e){ return obj==='coin'? e[2].indexOf(o)>=0 : e[2].indexOf(o+1)>=0; }
  function reset(){ stop(); seq=[]; cnt=new Array(faces()).fill(0); last=null; draw(); }
  function face(o){ const f=$('dc-face');
    if(obj==='coin'){ const s=o===0; f.innerHTML=`<circle cx="42" cy="42" r="36" fill="${COL.gold}" stroke="#A8761A" stroke-width="3"/><circle cx="42" cy="42" r="28" fill="none" stroke="#A8761A" stroke-dasharray="3 3"/><text x="42" y="${o===null?50:47}" text-anchor="middle" font-size="${o===null?22:15}" font-weight="800" fill="#3B1F4A" font-family="system-ui,sans-serif">${o===null?'?':(s?'SẤP':'NGỬA')}</text>`; return; }
    const P={1:[[42,42]],2:[[26,26],[58,58]],3:[[24,24],[42,42],[60,60]],4:[[26,26],[58,26],[26,58],[58,58]],5:[[24,24],[60,24],[42,42],[24,60],[60,60]],6:[[26,22],[58,22],[26,42],[58,42],[26,62],[58,62]]};
    f.innerHTML=`<rect x="6" y="6" width="72" height="72" rx="14" fill="#FFFFFF" stroke="#3B1F4A" stroke-width="3"/>`+(o===null?`<text x="42" y="52" text-anchor="middle" font-size="28" font-weight="800" fill="#3B1F4A" font-family="system-ui,sans-serif">?</text>`:P[o+1].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6.5" fill="${o===0?'#D6456F':'#3B1F4A'}"/>`).join('')); }
  function toss(n){ stop(); const F=faces(); if(seq.length+n>200000){ $('dc-n').textContent='Đã tung rất nhiều lần rồi, bấm “Làm lại” để bắt đầu lại nhé.'; return; }
    for(let i=0;i<n;i++){ const o=Math.floor(Math.random()*F); seq.push(o); cnt[o]++; last=o; }
    if(n===1 && !reduce()){ let k=0; const btns=p.querySelectorAll('[data-n]'); btns.forEach(b=>b.disabled=true);
      iv=setInterval(()=>{ k++; face(Math.floor(Math.random()*F)); if(k>=9){ stop(); btns.forEach(b=>b.disabled=false); draw(); } },70); return; }
    draw(); }
  function draw(){ const F=faces(), n=seq.length, e=ev(), pT=e[2].length/F;
    face(last);
    $('dc-n').textContent = n? `Đã tung ${nf(n,0)} lần. Lần gần nhất: ${fname(last)}${inEv(last,e)?' (A xảy ra)':''}.` : 'Chưa tung lần nào.';
    // biểu đồ cột
    const L0=40,R0=310,T0=14,B0=176, th=1/F; const mf=n? Math.max(...cnt)/n : 0; const ymax= F===2? 1 : Math.min(1, Math.max(0.4, Math.ceil(mf*10)/10));
    const PY=v=>B0-(v/ymax)*(B0-T0), bw=(R0-L0)/F;
    let h=''; for(let k=0;k<=4;k++){ const v=ymax*k/4; h+=`<line x1="${L0}" y1="${PY(v)}" x2="${R0}" y2="${PY(v)}" stroke="var(--line)"/><text x="${L0-5}" y="${PY(v)+3.5}" class="svgm" text-anchor="end">${nf(v*100,0)}%</text>`; }
    for(let i=0;i<F;i++){ const f=n?cnt[i]/n:0, x=L0+i*bw+bw*.18, w=bw*.64, inA=inEv(i,e);
      h+=`<rect x="${x}" y="${PY(f)}" width="${w}" height="${B0-PY(f)}" rx="4" fill="${inA?COL.pink:COL.purple}" fill-opacity="${inA?.85:.5}"/>`+
        `<text x="${x+w/2}" y="${B0+15}" class="svgt" text-anchor="middle" font-weight="700">${fname(i)}</text>`+(n?`<text x="${x+w/2}" y="${Math.max(T0+9,PY(f)-4)}" class="svgm" text-anchor="middle">${cnt[i]}</text>`:''); }
    h+=`<line x1="${L0}" y1="${PY(th)}" x2="${R0}" y2="${PY(th)}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 4"/>
       <line x1="${L0}" y1="${B0}" x2="${R0}" y2="${B0}" stroke="var(--ink)" stroke-width="1.5"/>
       <rect x="${L0+4}" y="${B0+21}" width="10" height="10" rx="2" fill="${COL.pink}" fill-opacity=".85"/><text x="${L0+18}" y="${B0+30}" class="svgm">thuộc biến cố A</text><rect x="${L0+108}" y="${B0+21}" width="10" height="10" rx="2" fill="${COL.purple}" fill-opacity=".5"/><text x="${L0+122}" y="${B0+30}" class="svgm">không thuộc A</text><line x1="${L0+192}" y1="${B0+26}" x2="${L0+208}" y2="${B0+26}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/><text x="${L0+212}" y="${B0+30}" class="svgm">lí thuyết ${F===2?'1/2':'1/6'}</text>`;
    $('dc-bar').innerHTML=h;
    // bảng
    $('dc-tbl').innerHTML=`<table><tr><th>Mặt</th><th>Số lần</th><th>Tần suất</th><th>Lí thuyết</th></tr>${cnt.map((c,i)=>`<tr><td><b>${fname(i)}</b>${inEv(i,e)?' <span class="tag">A</span>':''}</td><td>${c}</td><td>${n?nf(100*c/n,1)+'%':'–'}</td><td>${nf(100/F,1)}%</td></tr>`).join('')}</table>`;
    // kết quả
    const k=n? seq.reduce((s,o)=>s+(inEv(o,e)?1:0),0) : 0;
    const fT=frS(e[2].length,F);
    let cm = !n? 'Bấm tung để bắt đầu.' : n<30? 'Mới tung ít lần nên tần suất còn nhảy lên xuống mạnh, chưa kết luận được gì.' : n<500? 'Tần suất đang tiến dần về xác suất lí thuyết. Tung thêm nữa xem!' : 'Tung rất nhiều lần nên xác suất thực nghiệm đã rất gần lí thuyết. Tung càng nhiều, tần suất càng gần xác suất lí thuyết.';
    $('dc-out').innerHTML=`<b>A: ${e[1]}</b>. Số kết quả thuận lợi: ${e[2].length}/${F} ⇒ P(A) lí thuyết = ${fT} ≈ ${nf(pT*100,1)}%<br>`+
      (n? `<div class="big">P thực nghiệm (A) = ${nf(k,0)}/${nf(n,0)} ≈ ${nf(100*k/n,1)}%</div>Chênh lệch so với lí thuyết: ${nf(Math.abs(100*k/n-100*pT),1)} điểm phần trăm.<br>` : '')+`<span class="muted">${cm}</span>`;
    // đường hội tụ
    const L1=40,R1=310,T1=10,B1=140; const PX=i=>L1+(n>1?(i-1)/(n-1):0)*(R1-L1), PY2=v=>B1-v*(B1-T1);
    let g=''; [0,.25,.5,.75,1].forEach(v=>g+=`<line x1="${L1}" y1="${PY2(v)}" x2="${R1}" y2="${PY2(v)}" stroke="var(--line)"/><text x="${L1-5}" y="${PY2(v)+3.5}" class="svgm" text-anchor="end">${v*100}%</text>`);
    g+=`<line x1="${L1}" y1="${PY2(pT)}" x2="${R1}" y2="${PY2(pT)}" stroke="var(--bad)" stroke-width="2" stroke-dasharray="6 4"/>`;
    if(n){ const step=Math.max(1,Math.floor(n/300)); let c=0, pts=[]; for(let i=0;i<n;i++){ if(inEv(seq[i],e)) c++; if((i+1)%step===0||i===n-1) pts.push(`${PX(i+1).toFixed(1)},${PY2(c/(i+1)).toFixed(1)}`); }
      g+=`<polyline points="${pts.join(' ')}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>`; }
    g+=`<line x1="${L1}" y1="${B1}" x2="${R1}" y2="${B1}" stroke="var(--ink)"/><text x="${L1}" y="${B1+15}" class="svgm">1</text><text x="${R1}" y="${B1+15}" class="svgm" text-anchor="end">${n?nf(n,0)+' lần':'số lần tung'}</text><text x="${(L1+R1)/2}" y="${B1+15}" class="svgm" text-anchor="middle" fill="var(--bad)" style="fill:var(--bad)">– – lí thuyết</text>`;
    $('dc-line').innerHTML=g;
  }
  p.querySelectorAll('[data-n]').forEach(b=>b.onclick=()=>toss(+b.dataset.n));
  $('dc-reset').onclick=reset;
  $('dc-obj').onchange=()=>{ obj=$('dc-obj').value; fillEv(); reset(); };
  $('dc-ev').onchange=draw;
  fillEv(); reset();
}
});
})();
