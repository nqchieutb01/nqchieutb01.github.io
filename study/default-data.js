/* Dữ liệu mẫu Vật lý 8. Trang học sinh dùng file này khi chưa kết nối Supabase.
   Trang quản trị dùng nó cho nút "Nạp dữ liệu mẫu". */
window.DEFAULT_CH = [
 {
  "id": "c1",
  "position": 1,
  "title": "Chuyển động và tốc độ",
  "icon": "🚲",
  "lab": "motion",
  "theory": "<div class=\"sec\"><h3>Chuyển động cơ học</h3>\n  <p>Một vật <span class=\"mark\">chuyển động</span> khi vị trí của nó thay đổi theo thời gian so với một vật được chọn làm mốc. Cùng một vật có thể chuyển động so với vật này nhưng đứng yên so với vật khác, nên chuyển động có <b>tính tương đối</b>.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Em ngồi trên xe buýt: em đứng yên so với ghế ngồi, nhưng chuyển động so với cột điện bên đường.</div>\n </div>\n <div class=\"sec\"><h3>Tốc độ</h3>\n  <div class=\"fbox\"><span class=\"f\">v = s / t</span></div>\n  <ul><li><i>s</i> là quãng đường (m, km), <i>t</i> là thời gian (s, h), <i>v</i> là tốc độ (m/s, km/h).</li>\n  <li>Đổi đơn vị: <b>1 m/s = 3,6 km/h</b>. Muốn đổi km/h sang m/s thì chia cho 3,6.</li>\n  <li>Chuyển động đều: tốc độ không đổi. Chuyển động không đều: tốc độ thay đổi.</li></ul>\n </div>\n <div class=\"sec\"><h3>Tốc độ trung bình</h3>\n  <div class=\"fbox\"><span class=\"f\">v<sub>tb</sub> = (s<sub>1</sub> + s<sub>2</sub> + …) / (t<sub>1</sub> + t<sub>2</sub> + …)</span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> tốc độ trung bình <u>không</u> phải trung bình cộng các tốc độ. Phải lấy tổng quãng đường chia tổng thời gian.</div>\n  <div class=\"eg\"><b>Ví dụ.</b> Đi nửa quãng đường đầu với 40 km/h, nửa sau với 60 km/h. Gọi mỗi nửa là s: t₁ = s/40, t₂ = s/60. v<sub>tb</sub> = 2s / (s/40 + s/60) = 48 km/h, không phải 50 km/h.</div>\n </div>\n <div class=\"sec\"><h3>Hai vật gặp nhau <span class=\"tag\">Nâng cao</span></h3>\n  <p>Hai vật cách nhau một đoạn L, chuyển động đều:</p>\n  <div class=\"fbox\"><span class=\"f\">Ngược chiều: t = L / (v₁ + v₂)</span><span class=\"f\">Cùng chiều (đuổi): t = L / (v₁ − v₂)</span></div>\n  <p class=\"muted\">Mẹo: khi hai vật đi ngược chiều, khoảng cách giữa chúng giảm mỗi giờ một lượng v₁ + v₂. Khi đuổi nhau, khoảng cách giảm v₁ − v₂ mỗi giờ.</p>\n </div>\n <div class=\"sec\"><h3>Đồ thị quãng đường – thời gian</h3>\n  <p>Với chuyển động đều, đồ thị s–t là một đường thẳng. Đường càng dốc thì tốc độ càng lớn. Khi hai vật cùng chạy trên một con đường, <span class=\"mark\">giao điểm của hai đồ thị cho biết thời điểm và vị trí gặp nhau</span>.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đồ thị quãng đường thời gian của hai xe\">\n   <line x1=\"40\" y1=\"140\" x2=\"260\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"14\" stroke=\"var(--ink)\"/>\n   <text x=\"262\" y=\"152\" class=\"svgm\" text-anchor=\"end\">t (h)</text><text x=\"44\" y=\"14\" class=\"svgm\">s (km)</text>\n   <line x1=\"40\" y1=\"140\" x2=\"220\" y2=\"32\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n   <line x1=\"40\" y1=\"140\" x2=\"220\" y2=\"86\" stroke=\"#D29A00\" stroke-width=\"2.5\"/>\n   <text x=\"200\" y=\"28\" class=\"svgt\" fill=\"var(--accent)\">xe máy</text><text x=\"200\" y=\"102\" class=\"svgt\">xe đạp</text>\n   <text x=\"100\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">1</text><text x=\"160\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">2</text><text x=\"220\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">3</text>\n  </svg>\n  <p class=\"muted\">Cùng một khoảng thời gian, đường của xe máy đi lên cao hơn, nghĩa là xe máy đi được quãng đường dài hơn. Tốc độ chính là độ dốc: v = Δs / Δt.</p>\n </div>\n <div class=\"sec real\"><h3>Tốc độ quanh em</h3>\n  <div class=\"tbl\"><table><tr><th>Chuyển động</th><th>Tốc độ khoảng</th></tr>\n  <tr><td>Người đi bộ</td><td>5 km/h (≈ 1,4 m/s)</td></tr>\n  <tr><td>Xe đạp</td><td>12 – 18 km/h</td></tr>\n  <tr><td>Ô tô trên cao tốc</td><td>80 – 120 km/h</td></tr>\n  <tr><td>Máy bay chở khách</td><td>850 – 900 km/h</td></tr>\n  <tr><td>Âm thanh trong không khí</td><td>340 m/s (≈ 1 224 km/h)</td></tr>\n  <tr><td>Âm thanh trong nước</td><td>khoảng 1 500 m/s</td></tr>\n  <tr><td>Ánh sáng</td><td>300 000 km/s</td></tr></table></div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">⛈️</span>Đoán khoảng cách tia sét</b>Ánh sáng tới mắt gần như tức thì, còn tiếng sấm đi 340 m mỗi giây. Đếm số giây từ lúc thấy chớp đến lúc nghe sấm, nhân với 340 là ra khoảng cách (mét). Đếm được 3 giây thì sét cách em khoảng 1 km.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚗</span>Khoảng cách an toàn</b>Từ lúc thấy nguy hiểm đến lúc đạp phanh, người lái mất khoảng 1 giây. Ở 90 km/h (25 m/s), xe đã lao thêm 25 m trước khi bắt đầu phanh. Vì vậy chạy càng nhanh càng phải giữ khoảng cách xa hơn với xe trước.</div>\n   <div class=\"app\"><b><span class=\"ico\">📷</span>Đo tốc độ trung bình trên đoạn đường</b>Một số hệ thống ghi lại thời điểm xe đi qua hai trạm cách nhau một quãng đã biết. Lấy quãng đường chia thời gian là ra tốc độ trung bình, nên giảm tốc chỉ ở chỗ có camera cũng không “qua mặt” được.</div>\n   <div class=\"app\"><b><span class=\"ico\">🐬</span>Sóng siêu âm đo độ sâu</b>Tàu phát sóng siêu âm xuống đáy biển và đo thời gian sóng phản xạ quay lại. Biết tốc độ âm trong nước, ta tính được độ sâu. Dơi và cá heo cũng định vị theo cách này.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Ngồi trên tàu đỗ ở ga, thấy tàu bên cạnh chạy, em lại tưởng tàu mình đang chạy. Vì sao?</summary>Khi chỉ nhìn thấy đoàn tàu bên cạnh, em vô thức lấy nó làm vật mốc. So với tàu bên cạnh, tàu của em quả thật đang chuyển động. Đó là tính tương đối của chuyển động. Nhìn ra sân ga (vật mốc đứng yên) là biết ngay tàu nào chạy.</details>\n  <details class=\"wq\"><summary>Vì sao đồng hồ tốc độ trên xe máy luôn thay đổi?</summary>Trên đường thật, xe phải tăng tốc, giảm tốc, dừng đèn đỏ, nên chuyển động là không đều. Đồng hồ chỉ tốc độ tức thời, tức là tốc độ tại đúng thời điểm đó. Tốc độ trung bình của cả chuyến đi thường nhỏ hơn nhiều so với số lớn nhất em thấy trên đồng hồ.</details>\n  <details class=\"wq\"><summary>Phi hành gia trên trạm vũ trụ quốc tế “đứng yên” hay chuyển động?</summary>So với khoang trạm, họ có thể đứng yên. Nhưng so với mặt đất, trạm bay quanh Trái Đất khoảng 7,7 km/s, mỗi vòng chỉ hơn 90 phút. Không có chuyển động “tuyệt đối”, chỉ có chuyển động so với một vật mốc.</details>\n </div>",
  "formulas": [
   [
    "Tốc độ",
    "v = s / t"
   ],
   [
    "Đổi đơn vị",
    "1 m/s = 3,6 km/h"
   ],
   [
    "Tốc độ trung bình",
    "v_tb = Σs / Σt"
   ],
   [
    "Gặp nhau (ngược chiều)",
    "t = L / (v₁ + v₂)"
   ],
   [
    "Đuổi kịp (cùng chiều)",
    "t = L / (v₁ − v₂)"
   ],
   [
    "Khoảng cách tia sét",
    "s ≈ 340 × số giây"
   ],
   [
    "Đo bằng tiếng vang",
    "s = v·t / 2"
   ]
  ],
  "quiz": [
   {
    "q": "72 km/h bằng bao nhiêu m/s?",
    "o": [
     "20 m/s",
     "7,2 m/s",
     "259,2 m/s",
     "2 m/s"
    ],
    "why": "72 : 3,6 = 20 m/s."
   },
   {
    "q": "Hành khách ngồi yên trên một toa tàu đang chạy. Câu nào đúng?",
    "o": [
     "Hành khách đứng yên so với toa tàu",
     "Hành khách chuyển động so với toa tàu",
     "Hành khách đứng yên so với nhà ga",
     "Hành khách đứng yên so với hàng cây ven đường"
    ],
    "why": "Vị trí của hành khách không đổi so với toa tàu nhưng thay đổi so với nhà ga, hàng cây."
   },
   {
    "q": "Xe đi nửa quãng đường đầu với 40 km/h, nửa sau với 60 km/h. Tốc độ trung bình cả quãng đường là:",
    "o": [
     "48 km/h",
     "50 km/h",
     "45 km/h",
     "52 km/h"
    ],
    "why": "v_tb = 2s / (s/40 + s/60) = 2 / (5/120) = 48 km/h."
   },
   {
    "q": "Một xe máy đi 3 km trong 6 phút. Tốc độ của xe là:",
    "o": [
     "30 km/h",
     "18 km/h",
     "50 km/h",
     "0,5 km/h"
    ],
    "why": "6 phút = 0,1 h; v = 3 : 0,1 = 30 km/h."
   },
   {
    "q": "Hai xe cách nhau 90 km, đi ngược chiều về phía nhau với 40 km/h và 50 km/h. Sau bao lâu chúng gặp nhau?",
    "o": [
     "1 giờ",
     "9 giờ",
     "2 giờ",
     "0,5 giờ"
    ],
    "why": "t = 90 / (40 + 50) = 1 h."
   },
   {
    "q": "Em thấy chớp, sau 5 giây mới nghe sấm. Tia sét cách em khoảng (âm thanh 340 m/s):",
    "o": [
     "1 700 m",
     "68 m",
     "340 m",
     "5 km"
    ],
    "why": "s = 340 × 5 = 1 700 m. Ánh sáng tới gần như tức thì."
   },
   {
    "q": "Trên đồ thị quãng đường – thời gian của chuyển động đều, đường càng dốc thì:",
    "o": [
     "tốc độ càng lớn",
     "tốc độ càng nhỏ",
     "thời gian càng dài",
     "vật đang đứng yên"
    ],
    "why": "Độ dốc chính là quãng đường đi được trong một đơn vị thời gian, tức tốc độ."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Hai xe gặp nhau",
    "q": "Hai xe khởi hành cùng lúc từ A và B cách nhau 120 km, đi ngược chiều nhau. Xe từ A đi với 40 km/h, xe từ B đi với 20 km/h. Sau bao lâu hai xe gặp nhau (tính bằng giờ)? Chỗ gặp cách A bao xa?",
    "hint": "Mỗi giờ khoảng cách giữa hai xe giảm bao nhiêu km?",
    "sol": "Mỗi giờ hai xe lại gần nhau 40 + 20 = 60 km.<br>t = 120 / 60 = <b>2 h</b>.<br>Chỗ gặp cách A: 40 × 2 = <b>80 km</b> (kiểm tra: xe B đi 20 × 2 = 40 km, 80 + 40 = 120 ✓).",
    "ans": 2,
    "unit": "h",
    "tol": 0.01,
    "d": "Gặp nhau"
   },
   {
    "lv": 2,
    "t": "Nửa thời gian và nửa quãng đường",
    "q": "Một người đi xe đạp: nửa <b>thời gian</b> đầu đi với 12 km/h, nửa thời gian sau đi với 18 km/h. Tính tốc độ trung bình (km/h).",
    "hint": "Gọi tổng thời gian là 2t. Viết quãng đường mỗi phần theo t.",
    "sol": "s₁ = 12t, s₂ = 18t. v<sub>tb</sub> = (12t + 18t) / 2t = <b>15 km/h</b>.<br>So sánh: nếu là nửa <i>quãng đường</i> thì v<sub>tb</sub> = 2·12·18/(12+18) = 14,4 km/h. Chia đôi thời gian thì mới được lấy trung bình cộng!",
    "ans": 15,
    "unit": "km/h",
    "tol": 0.01,
    "d": "Tốc độ trung bình"
   },
   {
    "lv": 3,
    "t": "Phải đi nhanh bao nhiêu?",
    "q": "Một người đi nửa quãng đường đầu với 12 km/h. Hỏi nửa quãng đường sau phải đi với tốc độ bao nhiêu (km/h) để tốc độ trung bình cả quãng đường là 16 km/h?",
    "hint": "Gọi mỗi nửa là s. Thời gian cả quãng đường là 2s/16. Đã biết thời gian nửa đầu là s/12.",
    "sol": "Thời gian cả quãng: 2s/16 = s/8. Thời gian nửa đầu: s/12.<br>Thời gian nửa sau: s/8 − s/12 = s/24 ⇒ v₂ = s : (s/24) = <b>24 km/h</b>.<br>Thử thách thêm: muốn v<sub>tb</sub> = 24 km/h thì sao? Khi đó s/12 − s/12 = 0, tức nửa sau phải đi trong 0 giây, không thể làm được.",
    "ans": 24,
    "unit": "km/h",
    "tol": 0.01,
    "d": "Tốc độ trung bình"
   },
   {
    "lv": 3,
    "t": "Thuyền trôi theo dòng nước",
    "q": "Một ca nô đi xuôi dòng từ A đến B mất 2 giờ, đi ngược dòng từ B về A mất 3 giờ. Nếu tắt máy để ca nô trôi theo dòng nước từ A đến B thì mất bao nhiêu giờ?",
    "hint": "Gọi tốc độ ca nô khi nước đứng yên là v, tốc độ dòng nước là u. Xuôi dòng: v + u; ngược dòng: v − u.",
    "sol": "AB = 2(v + u) = 3(v − u) ⇒ 2v + 2u = 3v − 3u ⇒ v = 5u.<br>AB = 2(5u + u) = 12u.<br>Trôi theo dòng: t = AB / u = <b>12 h</b>.",
    "ans": 12,
    "unit": "h",
    "tol": 0.01,
    "d": "Chuyển động trên dòng nước"
   },
   {
    "lv": 3,
    "t": "Chú chó chạy qua lại",
    "q": "Hai bạn ở cách nhau 10 km đi bộ về phía nhau với tốc độ 2 km/h và 3 km/h. Một chú chó chạy với 10 km/h từ bạn này sang bạn kia rồi quay lại, cứ thế cho đến khi hai bạn gặp nhau. Chú chó chạy tổng cộng bao nhiêu km?",
    "hint": "Đừng tính từng lượt chạy! Chú chó chạy liên tục trong bao lâu?",
    "sol": "Hai bạn gặp nhau sau t = 10 / (2 + 3) = 2 h. Suốt 2 giờ đó chú chó chạy không nghỉ với 10 km/h.<br>Quãng đường: 10 × 2 = <b>20 km</b>.",
    "ans": 20,
    "unit": "km",
    "tol": 0.01,
    "d": "Bài toán tư duy"
   },
   {
    "d": "Đọc đồ thị",
    "lv": 2,
    "t": "Hai xe trên đồ thị",
    "q": "Đồ thị bên cho biết vị trí của hai xe trên cùng một con đường (s tính từ A). Sau bao nhiêu giờ hai xe gặp nhau?\n   <svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Đồ thị hai xe\"><line x1=\"40\" y1=\"140\" x2=\"250\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"10\" stroke=\"var(--ink)\"/>\n   <text x=\"250\" y=\"160\" class=\"svgm\" text-anchor=\"end\">t (h)</text><text x=\"44\" y=\"12\" class=\"svgm\">s (km)</text>\n   <line x1=\"40\" y1=\"140\" x2=\"130\" y2=\"20\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/><line x1=\"40\" y1=\"20\" x2=\"220\" y2=\"140\" stroke=\"#D29A00\" stroke-width=\"2.5\"/>\n   <text x=\"135\" y=\"24\" class=\"svgt\">xe I</text><text x=\"200\" y=\"118\" class=\"svgt\">xe II</text>\n   <g class=\"svgm\" text-anchor=\"middle\"><text x=\"70\" y=\"154\">0,5</text><text x=\"100\" y=\"154\">1</text><text x=\"130\" y=\"154\">1,5</text><text x=\"160\" y=\"154\">2</text><text x=\"190\" y=\"154\">2,5</text><text x=\"220\" y=\"154\">3</text></g>\n   <g class=\"svgm\" text-anchor=\"end\"><text x=\"35\" y=\"104\">20</text><text x=\"35\" y=\"64\">40</text><text x=\"35\" y=\"24\">60</text></g>\n   <g stroke=\"var(--line)\" stroke-dasharray=\"2 3\"><line x1=\"40\" y1=\"100\" x2=\"250\" y2=\"100\"/><line x1=\"40\" y1=\"60\" x2=\"250\" y2=\"60\"/><line x1=\"40\" y1=\"20\" x2=\"250\" y2=\"20\"/></g></svg>",
    "hint": "Đọc tốc độ từng xe từ đồ thị: xe I đi 60 km trong 1,5 h; xe II đi từ 60 km về 0 trong 3 h. Viết vị trí mỗi xe theo t rồi cho bằng nhau.",
    "sol": "v<sub>I</sub> = 60 / 1,5 = 40 km/h, xuất phát từ A: s<sub>I</sub> = 40t.<br>v<sub>II</sub> = 60 / 3 = 20 km/h, xuất phát từ B (cách A 60 km), đi về A: s<sub>II</sub> = 60 − 20t.<br>Gặp nhau: 40t = 60 − 20t ⇒ t = <b>1 h</b>, tại vị trí cách A 40 km. Trên đồ thị, đó chính là giao điểm của hai đường.",
    "ans": 1,
    "unit": "h",
    "tol": 0.01
   },
   {
    "d": "Khởi hành không cùng lúc",
    "lv": 3,
    "t": "Xuất phát lệch giờ",
    "q": "Lúc 7 giờ, một xe tải rời bến A với 40 km/h. Lúc 8 giờ, một ô tô con cũng rời A đuổi theo cùng hướng với 60 km/h. Ô tô đuổi kịp xe tải lúc mấy giờ? (Nhập số giờ, ví dụ 9 cho 9 giờ.)",
    "hint": "Lúc 8 giờ xe tải đã đi trước bao nhiêu km? Từ thời điểm đó, đây là bài toán đuổi nhau bình thường.",
    "sol": "Lúc 8 giờ xe tải đã đi 40 × 1 = 40 km.<br>Từ 8 giờ, khoảng cách giảm 60 − 40 = 20 km mỗi giờ ⇒ cần 40/20 = 2 h.<br>Gặp lúc <b>10 giờ</b>, cách A 60 × 2 = 120 km.<br>Cách khác: chọn gốc thời gian lúc 7 giờ: 40t = 60(t − 1) ⇒ t = 3 ⇒ 7 + 3 = 10 giờ.",
    "ans": 10,
    "unit": "giờ",
    "tol": 0.01
   },
   {
    "d": "Khoảng cách giữa hai vật",
    "lv": 3,
    "t": "Hai lần cách nhau 50 km",
    "q": "Hai xe xuất phát cùng lúc từ A và B cách nhau 150 km, đi ngược chiều với 60 km/h và 40 km/h. Có hai thời điểm hai xe cách nhau 50 km. Thời điểm <b>thứ hai</b> là sau bao nhiêu giờ?",
    "hint": "Lần đầu: hai xe chưa gặp, còn cách 50 km. Lần sau: hai xe đã gặp, vượt qua nhau rồi cách xa thêm 50 km.",
    "sol": "Mỗi giờ hai xe tiến lại gần (hoặc rời xa) nhau 100 km.<br>Lần 1 (chưa gặp): 150 − 100t = 50 ⇒ t = 1 h.<br>Lần 2 (đã vượt qua nhau): 100t − 150 = 50 ⇒ t = <b>2 h</b>.<br>Bài học: “cách nhau một khoảng” thường có <i>hai</i> đáp án, đừng bỏ sót!",
    "ans": 2,
    "unit": "h",
    "tol": 0.01
   },
   {
    "d": "Chuyển động trên vật chuyển động",
    "lv": 3,
    "t": "Thang cuốn",
    "q": "Ở trung tâm thương mại, nếu em đứng yên trên thang cuốn thì lên tầng mất 60 giây. Nếu thang không chạy, em đi bộ lên mất 90 giây. Nếu em vừa đi bộ vừa để thang chạy thì mất bao nhiêu giây?",
    "hint": "Gọi chiều dài thang là L. Tốc độ thang là L/60, tốc độ đi bộ là L/90. Khi cùng chiều, các tốc độ cộng lại.",
    "sol": "v<sub>thang</sub> = L/60, v<sub>người</sub> = L/90.<br>v = L/60 + L/90 = 5L/180 = L/36.<br>t = L : (L/36) = <b>36 s</b>. Đây cũng là dạng bài “hai vòi nước cùng chảy vào bể” trong toán.",
    "ans": 36,
    "unit": "s",
    "tol": 0.1
   },
   {
    "d": "Âm thanh và tiếng vang",
    "lv": 2,
    "t": "Đo độ sâu đáy biển",
    "q": "Một con tàu phát sóng siêu âm thẳng xuống đáy biển, sau 2 giây thu được sóng phản xạ. Tốc độ siêu âm trong nước biển là 1 500 m/s. Biển sâu bao nhiêu mét?",
    "hint": "Trong 2 giây sóng đi cả lượt xuống lẫn lượt về.",
    "sol": "Quãng đường sóng đi: 1 500 × 2 = 3 000 m, gồm cả đi và về.<br>Độ sâu: 3 000 / 2 = <b>1 500 m</b>.",
    "ans": 1500,
    "unit": "m",
    "tol": 1
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 },
 {
  "id": "c2",
  "position": 2,
  "title": "Khối lượng riêng và áp suất",
  "icon": "🧊",
  "lab": "pressure",
  "theory": "<div class=\"sec\"><h3>Khối lượng riêng</h3>\n  <div class=\"fbox\"><span class=\"f\">D = m / V</span><span class=\"f\">d = 10·D</span></div>\n  <ul><li><i>D</i>: khối lượng riêng (kg/m³); <i>d</i>: trọng lượng riêng (N/m³).</li>\n  <li>Nước: D = 1000 kg/m³ = 1 g/cm³. Sắt ≈ 7800 kg/m³, nhôm ≈ 2700 kg/m³.</li></ul>\n  <div class=\"note\">Đổi đơn vị cẩn thận: 1 g/cm³ = 1000 kg/m³; 1 lít = 1 dm³ = 0,001 m³; 1 cm³ = 0,000001 m³.</div>\n </div>\n <div class=\"sec\"><h3>Áp suất trên bề mặt</h3>\n  <div class=\"fbox\"><span class=\"f\">p = F / S</span></div>\n  <ul><li><i>F</i>: áp lực, lực ép vuông góc với mặt bị ép (N); <i>S</i>: diện tích bị ép (m²); <i>p</i>: áp suất (Pa = N/m²).</li>\n  <li>Muốn tăng áp suất: tăng áp lực hoặc giảm diện tích (dao sắc, đinh nhọn). Muốn giảm: ngược lại (xe tăng có bánh xích).</li></ul>\n  <div class=\"note\">1 cm² = 0,0001 m². Quên đổi đơn vị diện tích là lỗi phổ biến nhất!</div>\n </div>\n <div class=\"sec\"><h3>Áp suất chất lỏng</h3>\n  <div class=\"fbox\"><span class=\"f\">p = d · h</span></div>\n  <ul><li><i>h</i>: độ sâu tính từ <b>mặt thoáng</b> chất lỏng xuống điểm cần tính (m).</li>\n  <li>Chất lỏng gây áp suất theo mọi hướng. Trong cùng một chất lỏng, các điểm ở cùng độ sâu có áp suất như nhau.</li>\n  <li><b>Bình thông nhau</b> chứa cùng một chất lỏng đứng yên: mực chất lỏng ở các nhánh ngang nhau.</li></ul>\n </div>\n <div class=\"sec\"><h3>Máy nén thủy lực</h3>\n  <div class=\"fbox\"><span class=\"f\">F / f = S / s</span></div>\n  <p>Áp suất được chất lỏng truyền nguyên vẹn. Pít tông lớn diện tích gấp bao nhiêu lần thì lực nâng được lớn gấp bấy nhiêu lần. Nhưng thể tích chất lỏng dịch chuyển như nhau, nên pít tông lớn đi được quãng đường ngắn hơn bấy nhiêu lần.</p>\n </div>\n <div class=\"sec\"><h3>Áp suất khí quyển</h3>\n  <p>Lớp không khí bao quanh Trái Đất gây áp suất lên mọi vật. Thí nghiệm Torricelli: áp suất khí quyển bằng áp suất của cột thủy ngân cao khoảng 76 cm.</p>\n  <div class=\"fbox\"><span class=\"f\">p₀ ≈ 136 000 × 0,76 ≈ 103 360 Pa</span></div>\n </div>\n <div class=\"sec real\"><h3>Áp suất chất rắn trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🪖</span>Bánh xích xe tăng, máy xúc</b>Xe rất nặng nhưng bánh xích trải rộng diện tích tiếp xúc, nên áp suất lên đất nhỏ và xe không bị lún.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎿</span>Ván trượt tuyết, giày đi trên cát</b>Cùng một người, đứng trên ván rộng thì áp suất nhỏ, đi trên tuyết hay cát mềm mà không bị lún sâu.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏠</span>Móng nhà</b>Nhà cao tầng có móng rất rộng để trải trọng lượng ra diện tích lớn, giảm áp suất lên nền đất, tránh lún nứt.</div>\n   <div class=\"app\"><b><span class=\"ico\">💉</span>Kim tiêm, đinh, dao</b>Mũi nhọn có diện tích cực nhỏ, chỉ cần lực nhỏ cũng tạo ra áp suất rất lớn để xuyên qua vật.</div>\n  </div>\n </div>\n <div class=\"sec real\"><h3>Áp suất chất lỏng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏞️</span>Đập thủy điện</b>Thân đập ở dưới đáy dày hơn ở trên đỉnh vì càng xuống sâu, áp suất nước càng lớn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🤿</span>Thợ lặn, tàu ngầm</b>Xuống sâu 10 m, áp suất nước tăng thêm khoảng 100 000 Pa, gần bằng một lần áp suất khí quyển. Tàu ngầm phải có vỏ thép rất dày; thợ lặn lặn sâu phải mặc đồ lặn chuyên dụng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🫖</span>Ấm trà, bình tưới</b>Vòi và thân ấm là bình thông nhau. Vòi phải cao ngang miệng ấm, nếu thấp hơn thì không đổ nước đầy ấm được.</div>\n   <div class=\"app\"><b><span class=\"ico\">🗼</span>Tháp nước</b>Nước đặt trên tháp cao rồi chảy theo ống xuống các nhà. Nhà nào thấp hơn mực nước trong tháp thì nước đều lên tới, đó là nguyên lý bình thông nhau.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚢</span>Âu tàu</b>Khi đi qua đập có hai mực nước chênh lệch, tàu vào một khoang (âu). Mở cửa cho nước trong âu ngang bằng phía bên kia rồi tàu đi tiếp, giống bình thông nhau.</div>\n   <div class=\"app\"><b><span class=\"ico\">🛞</span>Kích thủy lực, phanh dầu</b>Người thợ chỉ cần bơm nhẹ tay cũng nâng được cả chiếc ô tô. Phanh dầu ô tô, xe máy truyền lực đạp phanh tới má phanh qua dầu.</div>\n  </div>\n </div>\n <div class=\"sec real\"><h3>Áp suất khí quyển trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🥤</span>Uống nước bằng ống hút</b>Khi em hút, không khí trong ống loãng đi, áp suất trong ống giảm. Áp suất khí quyển trên mặt nước trong cốc lớn hơn nên đẩy nước lên miệng em.</div>\n   <div class=\"app\"><b><span class=\"ico\">🫖</span>Lỗ nhỏ trên nắp ấm</b>Nắp ấm kín thì nước chảy ra yếu và ngắt quãng. Lỗ nhỏ giúp không khí vào, áp suất bên trong bằng bên ngoài, nước chảy đều.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏔️</span>Lên núi cao</b>Càng lên cao không khí càng loãng, áp suất khí quyển càng giảm. Gói bánh kẹo kín bị phồng lên; nước sôi dưới 100°C nên nấu cơm trên núi cao lâu chín hơn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧲</span>Móc treo dính tường</b>Ấn giác hút vào tường để đẩy không khí ra ngoài. Áp suất khí quyển bên ngoài ép chặt giác hút vào tường.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Gót giày cao gót có thể làm hỏng sàn gỗ, trong khi con voi nặng hơn nhiều lần lại không. Vì sao?</summary>Áp suất phụ thuộc cả lực lẫn diện tích. Một bạn 50 kg dồn trọng lượng lên gót nhọn 1 cm² tạo áp suất khoảng 5 000 000 Pa. Con voi 4 tấn đứng trên 4 bàn chân to, mỗi bàn chân khoảng 0,1 m², chỉ tạo áp suất khoảng 100 000 Pa. Gót giày “mạnh” hơn chân voi gấp khoảng 50 lần! (Xem bài tập nâng cao.)</details>\n  <details class=\"wq\"><summary>Vì sao máy bơm hút nước từ giếng lên không thể hút sâu hơn khoảng 10 m?</summary>Máy bơm hút chỉ làm giảm áp suất trong ống, còn việc đẩy nước lên là do áp suất khí quyển. Áp suất khí quyển chỉ đỡ được cột nước cao khoảng 10,3 m. Giếng sâu hơn phải dùng máy bơm đặt chìm dưới nước để đẩy nước lên.</details>\n  <details class=\"wq\"><summary>Khi lặn xuống đáy hồ bơi sâu, tai em bị đau. Vì sao?</summary>Áp suất nước tăng theo độ sâu và ép lên màng nhĩ, trong khi bên trong tai vẫn ở áp suất cũ. Chênh lệch áp suất làm màng nhĩ bị ép vào trong, gây đau. Nuốt nước bọt hoặc bịt mũi thổi nhẹ giúp cân bằng áp suất.</details>\n  <details class=\"wq\"><summary>Vì sao khi tàu thủy bị thủng một lỗ nhỏ dưới đáy, rất khó bịt lại bằng tay?</summary>Lỗ thủng nằm sâu dưới mặt nước nên áp suất nước ở đó lớn. Ví dụ ở độ sâu 5 m, áp suất là 50 000 Pa; với lỗ 10 cm² thì lực đẩy nước vào là 50 N, tương đương giữ một vật 5 kg liên tục. Lỗ càng sâu, càng to thì càng khó bịt.</details>\n </div>",
  "formulas": [
   [
    "Khối lượng riêng",
    "D = m / V"
   ],
   [
    "Trọng lượng riêng",
    "d = 10·D"
   ],
   [
    "Áp suất",
    "p = F / S"
   ],
   [
    "Áp suất chất lỏng",
    "p = d·h"
   ],
   [
    "Máy thủy lực",
    "F / f = S / s"
   ],
   [
    "Áp suất khí quyển",
    "p₀ ≈ 76 cmHg ≈ 103 360 Pa"
   ],
   [
    "Cột nước của khí quyển",
    "h = p₀ / d_nước ≈ 10,3 m"
   ],
   [
    "Áp suất khối đặt đứng",
    "p = d·h (khối hộp đặc, đồng chất)"
   ]
  ],
  "quiz": [
   {
    "q": "Một vật nặng 600 N đặt trên mặt sàn, diện tích tiếp xúc 0,03 m². Áp suất lên sàn là:",
    "o": [
     "20 000 Pa",
     "18 Pa",
     "2 000 Pa",
     "200 Pa"
    ],
    "why": "p = 600 / 0,03 = 20 000 Pa."
   },
   {
    "q": "Tại cùng một độ sâu trong cùng một chất lỏng, áp suất:",
    "o": [
     "như nhau theo mọi hướng",
     "chỉ hướng xuống đáy",
     "lớn nhất theo phương ngang",
     "bằng 0 theo phương ngang"
    ],
    "why": "Chất lỏng gây áp suất theo mọi hướng, cùng độ sâu thì cùng áp suất."
   },
   {
    "q": "Áp suất của nước ở độ sâu 2,5 m (d = 10 000 N/m³) là:",
    "o": [
     "25 000 Pa",
     "4 000 Pa",
     "2 500 Pa",
     "250 000 Pa"
    ],
    "why": "p = d·h = 10 000 × 2,5 = 25 000 Pa."
   },
   {
    "q": "Dao sắc cắt dễ hơn dao cùn vì:",
    "o": [
     "diện tích bị ép nhỏ nên áp suất lớn",
     "áp lực của dao sắc lớn hơn",
     "dao sắc nặng hơn",
     "diện tích bị ép lớn nên áp suất lớn"
    ],
    "why": "Cùng một lực ấn, lưỡi sắc có diện tích nhỏ nên p = F/S lớn."
   },
   {
    "q": "Một khối gỗ có khối lượng 0,5 kg và thể tích 625 cm³. Khối lượng riêng của gỗ là:",
    "o": [
     "800 kg/m³",
     "1 250 kg/m³",
     "0,8 kg/m³",
     "312,5 kg/m³"
    ],
    "why": "D = 500 g / 625 cm³ = 0,8 g/cm³ = 800 kg/m³."
   },
   {
    "q": "Vì sao xe tăng nặng hàng chục tấn chạy trên đất mềm không bị lún, còn ô tô nhẹ hơn nhiều lại dễ bị lún?",
    "o": [
     "Bánh xích có diện tích tiếp xúc lớn nên áp suất nhỏ",
     "Xe tăng nhẹ hơn ô tô",
     "Xích thép không chịu áp suất",
     "Xe tăng chạy chậm hơn"
    ],
    "why": "Áp suất p = F/S. Bánh xích làm S rất lớn nên p nhỏ."
   },
   {
    "q": "Vòi của ấm trà phải cao ngang miệng ấm vì:",
    "o": [
     "vòi và thân ấm là bình thông nhau, mực nước luôn ngang nhau",
     "để ấm đẹp hơn",
     "để nước nóng lâu hơn",
     "để áp suất khí quyển lớn hơn"
    ],
    "why": "Nếu vòi thấp hơn miệng, nước chỉ đổ được đến ngang vòi."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Máy nén thủy lực",
    "q": "Pít tông nhỏ của máy thủy lực có diện tích 2 cm², pít tông lớn 200 cm². Tác dụng lực 100 N lên pít tông nhỏ thì pít tông lớn nâng được vật nặng bao nhiêu N? Khi pít tông nhỏ đi xuống 20 cm thì pít tông lớn đi lên bao nhiêu?",
    "hint": "Dùng F/f = S/s. Với câu thứ hai: thể tích chất lỏng bị đẩy đi ở nhánh nhỏ bằng thể tích dâng lên ở nhánh lớn.",
    "sol": "F = f·S/s = 100 × 200/2 = <b>10 000 N</b>.<br>Thể tích: 2 × 20 = 200 × h ⇒ h = <b>0,2 cm</b>. Lợi 100 lần về lực thì thiệt 100 lần về đường đi.",
    "ans": 10000,
    "unit": "N",
    "tol": 1,
    "d": "Máy thủy lực"
   },
   {
    "lv": 3,
    "t": "Bình thông nhau có dầu",
    "q": "Bình thông nhau chứa nước. Đổ dầu (d = 8 000 N/m³) vào nhánh trái đến khi cột dầu cao 20 cm. Mặt thoáng ở hai nhánh chênh nhau bao nhiêu cm?",
    "hint": "Chọn hai điểm cùng độ cao: một điểm ở mặt phân cách dầu–nước (nhánh trái), một điểm cùng độ cao trong nước ở nhánh phải. Áp suất hai điểm bằng nhau.",
    "sol": "d<sub>dầu</sub>·h<sub>dầu</sub> = d<sub>nước</sub>·h<sub>nước</sub> ⇒ 8 000 × 20 = 10 000 × h ⇒ h = 16 cm.<br>Cột nước bên phải cao hơn mặt phân cách 16 cm, cột dầu cao 20 cm. Mặt thoáng chênh nhau 20 − 16 = <b>4 cm</b> (bên dầu cao hơn).",
    "ans": 4,
    "unit": "cm",
    "tol": 0.01,
    "d": "Bình thông nhau"
   },
   {
    "lv": 2,
    "t": "Thợ lặn",
    "q": "Một thợ lặn ở độ sâu 30 m dưới mặt nước biển (d = 10 300 N/m³). Cửa kính quan sát trên mũ lặn có diện tích 200 cm². Nước biển ép lên cửa kính một lực bao nhiêu N? (Bỏ qua áp suất khí quyển.)",
    "hint": "Tính p = d·h trước, rồi F = p·S. Nhớ đổi 200 cm² sang m².",
    "sol": "p = 10 300 × 30 = 309 000 Pa.<br>S = 200 cm² = 0,02 m².<br>F = p·S = 309 000 × 0,02 = <b>6 180 N</b> (gần bằng trọng lượng một vật 618 kg!).",
    "ans": 6180,
    "unit": "N",
    "tol": 1,
    "d": "Áp suất chất lỏng"
   },
   {
    "lv": 3,
    "t": "Hợp kim vàng bạc",
    "q": "Một chiếc vòng bằng hợp kim vàng và bạc có khối lượng 298 g, thể tích 20 cm³. Biết khối lượng riêng của vàng là 19,3 g/cm³, của bạc là 10,5 g/cm³ và thể tích hợp kim bằng tổng thể tích các kim loại thành phần. Tính khối lượng vàng trong vòng (g).",
    "hint": "Gọi khối lượng vàng là x thì khối lượng bạc là 298 − x. Viết tổng thể tích: x/19,3 + (298 − x)/10,5 = 20.",
    "sol": "x/19,3 + (298 − x)/10,5 = 20.<br>Thử x = 193: 193/19,3 = 10 cm³; 105/10,5 = 10 cm³; tổng 20 cm³ ✓.<br>Vậy có <b>193 g vàng</b> và 105 g bạc. (Giải tổng quát: nhân hai vế với 19,3 × 10,5 rồi rút x.)",
    "ans": 193,
    "unit": "g",
    "tol": 0.5,
    "d": "Khối lượng riêng hỗn hợp"
   },
   {
    "d": "So sánh áp suất",
    "lv": 2,
    "t": "Gót giày và chân voi",
    "q": "Một bạn nữ nặng 50 kg dồn toàn bộ trọng lượng lên một gót giày có diện tích 1 cm². Một con voi nặng 4 tấn đứng trên 4 chân, mỗi bàn chân có diện tích 0,1 m². Áp suất do gót giày gây ra lớn gấp bao nhiêu lần áp suất do chân voi gây ra?",
    "hint": "Tính riêng từng áp suất. Nhớ đổi 1 cm² ra m² và 4 tấn ra kg.",
    "sol": "Gót giày: p₁ = 500 / 0,0001 = 5 000 000 Pa.<br>Voi: p₂ = 40 000 / (4 × 0,1) = 100 000 Pa.<br>p₁ / p₂ = <b>50 lần</b>. Vì vậy nhiều sàn gỗ cấm đi giày gót nhọn.",
    "ans": 50,
    "unit": "lần",
    "tol": 0.01
   },
   {
    "d": "Áp suất chất rắn",
    "lv": 3,
    "t": "Viên gạch đặt nhiều cách",
    "q": "Một viên gạch đặc hình hộp có kích thước 20 cm × 10 cm × 5 cm, khối lượng riêng 2 000 kg/m³. Đặt viên gạch lên sàn theo các cách khác nhau. Áp suất lớn nhất mà viên gạch có thể gây ra lên sàn là bao nhiêu Pa?",
    "hint": "Trọng lượng không đổi, áp suất lớn nhất khi diện tích tiếp xúc nhỏ nhất. Thử tìm mẹo: với khối hộp đặc đặt đứng, p = F/S = d·V/S = d·h.",
    "sol": "V = 0,2 × 0,1 × 0,05 = 0,001 m³ ⇒ P = 10 × 2 000 × 0,001 = 20 N.<br>Mặt nhỏ nhất: 10 × 5 = 50 cm² = 0,005 m² ⇒ p = 20 / 0,005 = <b>4 000 Pa</b>.<br>Mẹo: khối hộp đặc đồng chất gây áp suất p = d·h với h là chiều cao khi đặt. Đặt dựng đứng h = 0,2 m: p = 20 000 × 0,2 = 4 000 Pa. Giống hệt công thức áp suất chất lỏng!",
    "ans": 4000,
    "unit": "Pa",
    "tol": 1
   },
   {
    "d": "Áp suất khí quyển",
    "lv": 2,
    "t": "Torricelli dùng nước",
    "q": "Nếu làm thí nghiệm Torricelli bằng nước thay cho thủy ngân thì cột nước trong ống cao khoảng bao nhiêu mét? Biết áp suất khí quyển là 103 360 Pa, d nước = 10 000 N/m³.",
    "hint": "Áp suất khí quyển bằng áp suất của cột nước: p₀ = d·h.",
    "sol": "h = 103 360 / 10 000 ≈ <b>10,34 m</b>, cao bằng tòa nhà 3 tầng! Đó là lý do Torricelli dùng thủy ngân (nặng gấp 13,6 lần nước) để ống chỉ cần dài khoảng 1 m. Đây cũng là giới hạn độ sâu của máy bơm hút.",
    "ans": 10.34,
    "unit": "m",
    "tol": 0.03
   },
   {
    "d": "Áp suất khí quyển",
    "lv": 2,
    "t": "Đo độ cao ngọn núi",
    "q": "Ở chân núi, áp kế chỉ 760 mmHg. Ở đỉnh núi, áp kế chỉ 720 mmHg. Biết ở gần mặt đất, cứ lên cao khoảng 12 m thì áp suất khí quyển giảm 1 mmHg. Ngọn núi cao khoảng bao nhiêu mét?",
    "hint": "Áp suất giảm bao nhiêu mmHg?",
    "sol": "Áp suất giảm 760 − 720 = 40 mmHg.<br>Độ cao: 40 × 12 = <b>480 m</b>. Máy bay và đồng hồ leo núi đo độ cao theo đúng nguyên lý này (gọi là cao kế).",
    "ans": 480,
    "unit": "m",
    "tol": 1
   },
   {
    "d": "Áp suất chất lỏng",
    "lv": 3,
    "t": "Bịt lỗ thủng thân tàu",
    "q": "Thân tàu bị thủng một lỗ diện tích 50 cm² ở độ sâu 2,8 m dưới mặt nước biển (d = 10 300 N/m³). Cần một lực tối thiểu bao nhiêu N để giữ miếng vá bịt kín lỗ từ bên trong?",
    "hint": "Lực cần giữ bằng lực do áp suất nước tác dụng lên lỗ: F = p·S.",
    "sol": "p = 10 300 × 2,8 = 28 840 Pa.<br>S = 50 cm² = 0,005 m².<br>F = 28 840 × 0,005 = <b>144,2 N</b>, tương đương giữ một vật hơn 14 kg.",
    "ans": 144.2,
    "unit": "N",
    "tol": 0.2
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 },
 {
  "id": "c3",
  "position": 3,
  "title": "Lực đẩy Archimedes và sự nổi",
  "icon": "🚢",
  "lab": "buoy",
  "theory": "<div class=\"sec\"><h3>Lực đẩy Archimedes</h3>\n  <p>Vật nhúng trong chất lỏng (hoặc chất khí) bị đẩy từ dưới lên một lực bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ.</p>\n  <div class=\"fbox\"><span class=\"f\">F<sub>A</sub> = d · V</span></div>\n  <ul><li><i>d</i>: trọng lượng riêng của <b>chất lỏng</b>; <i>V</i>: thể tích <b>phần chìm</b> của vật.</li>\n  <li>Đo bằng lực kế: F<sub>A</sub> = P (ngoài không khí) − P′ (khi nhúng trong chất lỏng).</li></ul>\n </div>\n <div class=\"sec\"><h3>Điều kiện vật nổi, chìm</h3>\n  <div class=\"tbl\"><table><tr><th>So sánh</th><th>Kết quả</th></tr>\n  <tr><td>P &gt; F<sub>A</sub> (D<sub>vật</sub> &gt; D<sub>lỏng</sub>)</td><td>Vật chìm xuống</td></tr>\n  <tr><td>P = F<sub>A</sub> (D<sub>vật</sub> = D<sub>lỏng</sub>)</td><td>Vật lơ lửng</td></tr>\n  <tr><td>P &lt; F<sub>A</sub> (D<sub>vật</sub> &lt; D<sub>lỏng</sub>)</td><td>Vật nổi lên</td></tr></table></div>\n  <p>Khi vật đã nổi yên trên mặt chất lỏng: <span class=\"f\">P = F<sub>A</sub> = d<sub>lỏng</sub>·V<sub>chìm</sub></span></p>\n </div>\n <div class=\"sec\"><h3>Phần chìm chiếm bao nhiêu? <span class=\"tag\">Nâng cao</span></h3>\n  <div class=\"fbox\"><span class=\"f\">V<sub>chìm</sub> / V = D<sub>vật</sub> / D<sub>lỏng</sub></span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Gỗ có D = 600 kg/m³ thả vào nước: phần chìm chiếm 600/1000 = 60% thể tích.</div>\n  <div class=\"note\">Tàu thủy bằng thép vẫn nổi vì thân tàu rỗng: khối lượng riêng <i>trung bình</i> của cả con tàu (thép + không khí bên trong) nhỏ hơn của nước.</div>\n </div>\n <div class=\"sec real\"><h3>Câu chuyện “Eureka!”</h3>\n  <p>Nhà vua nghi người thợ kim hoàn đã pha bạc vào chiếc vương miện vàng. Archimedes được giao tìm ra sự thật mà không được làm hỏng vương miện. Khi bước vào bồn tắm, ông thấy nước dâng lên và nhận ra: thể tích nước tràn ra bằng thể tích phần cơ thể chìm vào. Đo được thể tích vương miện, chia khối lượng cho thể tích là biết khối lượng riêng, và so với vàng nguyên chất. Ông mừng quá, chạy ra phố hét lên “Eureka!” (Tìm ra rồi!).</p>\n  <p class=\"muted\">Đây là cách đo thể tích của vật có hình dạng bất kỳ: nhúng vào bình chia độ và đọc mực nước dâng lên. Thử sức ở bài tập nâng cao!</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🚢</span>Tàu thủy bằng thép</b>Thép nặng hơn nước gần 8 lần, nhưng thân tàu rỗng chiếm thể tích rất lớn. Khối lượng riêng trung bình của cả con tàu nhỏ hơn nước nên tàu nổi. Thân tàu có vạch “mớn nước” cho biết tàu được chở tối đa đến đâu.</div>\n   <div class=\"app\"><b><span class=\"ico\">🛳️</span>Tàu ngầm lặn và nổi</b>Tàu ngầm có các két dằn. Bơm nước biển vào két, tàu nặng lên và lặn xuống. Dùng khí nén đẩy nước ra, tàu nhẹ đi và nổi lên. Lực đẩy gần như không đổi, tàu thay đổi trọng lượng của chính mình.</div>\n   <div class=\"app\"><b><span class=\"ico\">🐟</span>Bong bóng cá</b>Nhiều loài cá có bong bóng chứa khí. Khi bong bóng phồng lên, thể tích cá tăng, lực đẩy Archimedes tăng nên cá nổi lên; bong bóng xẹp thì cá lặn xuống.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎈</span>Khinh khí cầu</b>Không khí cũng tạo ra lực đẩy Archimedes. Khí nóng hoặc khí heli nhẹ hơn không khí xung quanh, nên khi lực đẩy lớn hơn tổng trọng lượng, khí cầu bay lên.</div>\n   <div class=\"app\"><b><span class=\"ico\">🦺</span>Áo phao</b>Áo phao làm bằng vật liệu rất nhẹ chiếm nhiều thể tích, giúp tăng lực đẩy lên người mặc mà gần như không làm tăng trọng lượng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧪</span>Tỉ trọng kế</b>Một ống thủy tinh có vạch chia, đáy chứa chì. Thả vào chất lỏng, chất lỏng càng nặng thì ống chìm càng ít. Dùng để kiểm tra nồng độ dung dịch, ví dụ dung dịch trong ắc quy.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Ở Biển Chết, người ta có thể nằm ngửa đọc báo trên mặt nước mà không cần bơi. Vì sao?</summary>Nước Biển Chết rất mặn, khối lượng riêng khoảng 1 240 kg/m³, lớn hơn nhiều so với nước thường và lớn hơn khối lượng riêng trung bình của cơ thể người (khoảng 1 000 – 1 060 kg/m³). Vì vậy người nổi lên rất dễ, chỉ cần một phần cơ thể chìm là đủ lực đẩy.</details>\n  <details class=\"wq\"><summary>Một con tàu đi từ biển vào sông thì chìm sâu thêm hay nổi cao lên?</summary>Tàu luôn nổi, nên lực đẩy luôn bằng trọng lượng tàu, không đổi. Nước sông (ngọt) có khối lượng riêng nhỏ hơn nước biển, nên để tạo ra cùng một lực đẩy, phần chìm phải lớn hơn. Tàu chìm sâu thêm khi vào sông.</details>\n  <details class=\"wq\"><summary>Vì sao kéo gàu nước dưới giếng lên thấy nhẹ, nhưng khi gàu vừa ra khỏi mặt nước thì nặng hẳn?</summary>Khi gàu còn trong nước, nước trong gàu và cả gàu được lực đẩy Archimedes đỡ bớt. Ra khỏi mặt nước, lực đẩy mất đi, tay phải chịu toàn bộ trọng lượng.</details>\n  <details class=\"wq\"><summary>Đặt một quả trứng vào cốc nước, trứng chìm. Cho thêm muối và khuấy đều, trứng nổi lên. Vì sao?</summary>Muối tan làm khối lượng riêng của nước tăng lên. Khi khối lượng riêng của nước muối lớn hơn của trứng, lực đẩy lớn hơn trọng lượng và trứng nổi. Em có thể làm thí nghiệm này ở nhà!</details>\n </div>",
  "formulas": [
   [
    "Lực đẩy Archimedes",
    "F_A = d·V_chìm"
   ],
   [
    "Đo bằng lực kế",
    "F_A = P − P′"
   ],
   [
    "Vật nổi trên mặt",
    "P = d_lỏng·V_chìm"
   ],
   [
    "Tỉ lệ phần chìm",
    "V_chìm / V = D_vật / D_lỏng"
   ],
   [
    "Khối lượng riêng vật từ lực kế",
    "D_vật / D_lỏng = P / (P − P′)"
   ],
   [
    "Lực đẩy trong không khí",
    "F_A = d_kk·V (d_kk ≈ 12,9 N/m³)"
   ]
  ],
  "quiz": [
   {
    "q": "Một vật có thể tích 2 dm³ chìm hoàn toàn trong nước (d = 10 000 N/m³). Lực đẩy Archimedes là:",
    "o": [
     "20 N",
     "2 N",
     "200 N",
     "2 000 N"
    ],
    "why": "2 dm³ = 0,002 m³; F_A = 10 000 × 0,002 = 20 N."
   },
   {
    "q": "Treo vật vào lực kế, ngoài không khí chỉ 10 N, nhúng chìm trong nước chỉ 6 N. Lực đẩy Archimedes là:",
    "o": [
     "4 N",
     "16 N",
     "6 N",
     "10 N"
    ],
    "why": "F_A = 10 − 6 = 4 N."
   },
   {
    "q": "Khối gỗ có D = 600 kg/m³ nổi trên nước. Phần chìm chiếm bao nhiêu phần trăm thể tích?",
    "o": [
     "60%",
     "40%",
     "100%",
     "6%"
    ],
    "why": "V_chìm / V = 600 / 1000 = 60%."
   },
   {
    "q": "Một quả bóng nổi trên nước và nổi trên dầu. So sánh lực đẩy Archimedes trong hai trường hợp:",
    "o": [
     "Bằng nhau",
     "Trong nước lớn hơn",
     "Trong dầu lớn hơn",
     "Không so sánh được"
    ],
    "why": "Khi nổi, F_A luôn bằng trọng lượng quả bóng. Trong dầu phần chìm nhiều hơn để bù lại d nhỏ hơn."
   },
   {
    "q": "Thả hòn bi thép (D ≈ 7 800 kg/m³) vào thủy ngân (D = 13 600 kg/m³). Hòn bi sẽ:",
    "o": [
     "nổi",
     "chìm xuống đáy",
     "lơ lửng",
     "tan ra"
    ],
    "why": "D thép nhỏ hơn D thủy ngân nên bi nổi."
   },
   {
    "q": "Tàu ngầm muốn lặn xuống thì phải:",
    "o": [
     "bơm nước vào két dằn để tăng trọng lượng",
     "bơm nước ra khỏi két dằn",
     "tăng tốc độ chạy",
     "giảm thể tích vỏ tàu"
    ],
    "why": "Lực đẩy gần như không đổi; tàu tăng trọng lượng để P > F_A."
   },
   {
    "q": "Một con tàu đi từ biển vào sông thì:",
    "o": [
     "chìm sâu thêm một chút",
     "nổi cao hơn",
     "lực đẩy Archimedes tăng",
     "lực đẩy Archimedes giảm"
    ],
    "why": "Lực đẩy vẫn bằng trọng lượng tàu, nhưng nước sông nhẹ hơn nên phần chìm phải lớn hơn."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Tìm khối lượng riêng nhờ lực kế",
    "q": "Treo vật vào lực kế, ngoài không khí lực kế chỉ 10 N, nhúng chìm hoàn toàn trong nước lực kế chỉ 6 N. Tính khối lượng riêng của vật (kg/m³).",
    "hint": "Từ F_A tính ra thể tích V = F_A / d_nước. Từ P = 10 N tính khối lượng.",
    "sol": "F<sub>A</sub> = 10 − 6 = 4 N ⇒ V = 4 / 10 000 = 0,0004 m³ = 400 cm³.<br>m = 10 / 10 = 1 kg.<br>D = 1 / 0,0004 = <b>2 500 kg/m³</b>.<br>Mẹo nhanh: D<sub>vật</sub>/D<sub>nước</sub> = P/F<sub>A</sub> = 10/4 = 2,5.",
    "ans": 2500,
    "unit": "kg/m³",
    "tol": 1,
    "d": "Lực kế và lực đẩy"
   },
   {
    "lv": 3,
    "t": "Nhấn chìm khối gỗ",
    "q": "Khối gỗ lập phương cạnh 10 cm, D = 800 kg/m³, nổi trên nước. Cần đặt lên trên khối gỗ một quả cân có khối lượng tối thiểu bao nhiêu kg để mặt trên khối gỗ vừa ngang mặt nước?",
    "hint": "Khi gỗ vừa chìm hết: P<sub>gỗ</sub> + P<sub>cân</sub> = F<sub>A</sub> với V chìm = toàn bộ thể tích gỗ (quả cân nằm trên, không chìm).",
    "sol": "V = 0,001 m³. P<sub>gỗ</sub> = 10 × 800 × 0,001 = 8 N. Lúc đầu phần chìm cao 8 cm.<br>Khi chìm hết: F<sub>A</sub> = 10 000 × 0,001 = 10 N.<br>P<sub>cân</sub> = 10 − 8 = 2 N ⇒ m = <b>0,2 kg</b>.",
    "ans": 0.2,
    "unit": "kg",
    "tol": 0.005,
    "d": "Vật nổi có tải"
   },
   {
    "lv": 2,
    "t": "Phần nổi của tảng băng",
    "q": "Tảng băng có D = 900 kg/m³ nổi trên nước biển D = 1 030 kg/m³. Phần nổi trên mặt nước chiếm khoảng bao nhiêu phần trăm thể tích tảng băng?",
    "hint": "Tính phần chìm trước bằng tỉ số khối lượng riêng.",
    "sol": "Phần chìm: 900/1030 ≈ 87,4%. Phần nổi ≈ <b>12,6%</b>. Đây là lý do có câu “đó mới chỉ là phần nổi của tảng băng”.",
    "ans": 12.6,
    "unit": "%",
    "tol": 0.3,
    "d": "Tỉ lệ phần chìm"
   },
   {
    "lv": 3,
    "t": "Quả cầu nhôm rỗng",
    "q": "Một quả cầu bằng nhôm (d = 27 000 N/m³) bên trong có phần rỗng. Thể tích bên ngoài của quả cầu là 200 cm³. Thả vào nước thấy quả cầu lơ lửng. Tính thể tích phần rỗng (cm³), bỏ qua khối lượng không khí bên trong.",
    "hint": "Lơ lửng ⇒ P = F<sub>A</sub>, tính theo thể tích ngoài. Từ P tìm thể tích phần nhôm.",
    "sol": "F<sub>A</sub> = 10 000 × 0,0002 = 2 N = P.<br>V<sub>nhôm</sub> = 2 / 27 000 ≈ 0,0000741 m³ ≈ 74 cm³.<br>V<sub>rỗng</sub> ≈ 200 − 74 = <b>126 cm³</b>.",
    "ans": 126,
    "unit": "cm³",
    "tol": 1.5,
    "d": "Vật rỗng"
   },
   {
    "d": "Vật nổi trong hai chất lỏng",
    "lv": 3,
    "t": "Từ biển vào sông",
    "q": "Một con tàu cùng hàng hóa có khối lượng 2 000 tấn đi từ biển (D = 1 030 kg/m³) vào sông (D = 1 000 kg/m³). Thể tích phần chìm của tàu tăng thêm bao nhiêu m³?",
    "hint": "Khi nổi: D<sub>lỏng</sub>·V<sub>chìm</sub> = m. Tính V<sub>chìm</sub> trong từng loại nước.",
    "sol": "m = 2 000 000 kg.<br>Ở biển: V₁ = 2 000 000 / 1 030 ≈ 1 941,7 m³.<br>Ở sông: V₂ = 2 000 000 / 1 000 = 2 000 m³.<br>Tăng thêm ≈ <b>58,3 m³</b>. Vì vậy vạch mớn nước cho nước ngọt nằm cao hơn vạch cho nước biển.",
    "ans": 58.3,
    "unit": "m³",
    "tol": 0.5
   },
   {
    "d": "Lực đẩy trong chất khí",
    "lv": 3,
    "t": "Khinh khí cầu heli",
    "q": "Một khí cầu chứa 500 m³ khí heli (D = 0,18 kg/m³). Vỏ khí cầu và giỏ nặng tổng cộng 200 kg. Khối lượng riêng của không khí là 1,29 kg/m³. Khí cầu mang được thêm tối đa bao nhiêu kg (người và hàng) mà vẫn bay lên được?",
    "hint": "Lực đẩy do không khí: F<sub>A</sub> = 10·D<sub>kk</sub>·V. Lực đẩy phải gánh: trọng lượng heli + vỏ, giỏ + tải.",
    "sol": "F<sub>A</sub> = 10 × 1,29 × 500 = 6 450 N.<br>P<sub>heli</sub> = 10 × 0,18 × 500 = 900 N; P<sub>vỏ</sub> = 2 000 N.<br>P<sub>tải</sub> tối đa = 6 450 − 900 − 2 000 = 3 550 N ⇒ <b>355 kg</b>.<br>Chú ý: ta bỏ qua thể tích của vỏ và giỏ.",
    "ans": 355,
    "unit": "kg",
    "tol": 0.5
   },
   {
    "d": "Vật nổi trong hai chất lỏng",
    "lv": 3,
    "t": "Khối gỗ giữa dầu và nước",
    "q": "Đổ dầu (D = 800 kg/m³) lên trên mặt nước trong một bình. Thả vào bình một khối gỗ lập phương cạnh 10 cm, D = 880 kg/m³. Khi cân bằng, khối gỗ nằm ở mặt phân cách, mặt trên ngang mặt thoáng của dầu. Tính chiều cao phần gỗ chìm trong nước (cm).",
    "hint": "Khối gỗ chịu hai lực đẩy: của nước (phần chìm trong nước, cao x) và của dầu (phần còn lại, cao 10 − x).",
    "sol": "Gọi S là diện tích đáy. Trọng lượng = tổng hai lực đẩy:<br>10·880·S·10 = 10·1000·S·x + 10·800·S·(10 − x)<br>8 800 = 1 000x + 8 000 − 800x ⇒ 200x = 800 ⇒ x = <b>4 cm</b>.",
    "ans": 4,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "d": "Lực kế và lực đẩy",
    "lv": 3,
    "t": "Vương miện của nhà vua",
    "q": "Treo vương miện vào lực kế, ngoài không khí lực kế chỉ 10 N, nhúng chìm trong nước chỉ 9,4 N. Tính khối lượng riêng trung bình của vương miện (g/cm³). Vàng nguyên chất có D = 19,3 g/cm³. Vương miện có phải vàng nguyên chất không?",
    "hint": "Từ hiệu số chỉ lực kế tìm thể tích; từ 10 N tìm khối lượng.",
    "sol": "F<sub>A</sub> = 10 − 9,4 = 0,6 N ⇒ V = 0,6 / 10 000 = 0,00006 m³ = 60 cm³.<br>m = 1 kg = 1 000 g ⇒ D = 1 000 / 60 ≈ <b>16,7 g/cm³</b> &lt; 19,3. Vương miện đã bị pha kim loại khác!<br>Nếu pha bạc (10,5 g/cm³), giải như bài hợp kim ở chương 2 ta được khoảng 811 g vàng, tức khoảng 81% vàng.",
    "ans": 16.7,
    "unit": "g/cm³",
    "tol": 0.1
   },
   {
    "d": "Vật nổi có tải",
    "lv": 2,
    "t": "Bè gỗ chở người",
    "q": "Một chiếc bè làm từ gỗ có tổng thể tích 0,5 m³, D = 600 kg/m³, thả trên mặt nước. Bè chở được tối đa bao nhiêu người, mỗi người 50 kg, mà bè chưa chìm hẳn?",
    "hint": "Khi bè vừa chìm hết, lực đẩy lớn nhất là bao nhiêu? Phần dư so với trọng lượng bè chính là tải tối đa.",
    "sol": "F<sub>A max</sub> = 10 000 × 0,5 = 5 000 N.<br>P<sub>bè</sub> = 10 × 600 × 0,5 = 3 000 N.<br>Tải tối đa = 2 000 N = 200 kg ⇒ <b>4 người</b>. Thực tế phải chở ít hơn để bè còn nổi cao, an toàn.",
    "ans": 4,
    "unit": "người",
    "tol": 0.01
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 },
 {
  "id": "c4",
  "position": 4,
  "title": "Moment lực, đòn bẩy, công và công suất",
  "icon": "⚖️",
  "lab": "lever",
  "theory": "<div class=\"sec\"><h3>Moment lực</h3>\n  <div class=\"fbox\"><span class=\"f\">M = F · d</span></div>\n  <ul><li><i>d</i> là khoảng cách từ trục quay đến <b>giá của lực</b> (cánh tay đòn), đơn vị N·m.</li>\n  <li>Moment càng lớn, tác dụng làm quay càng mạnh. Mở cửa ở mép xa bản lề dễ hơn sát bản lề.</li></ul>\n </div>\n <div class=\"sec\"><h3>Đòn bẩy</h3>\n  <div class=\"fbox\"><span class=\"f\">F₁ · d₁ = F₂ · d₂</span></div>\n  <p>Đòn bẩy cân bằng khi moment làm quay theo chiều kim đồng hồ bằng moment làm quay ngược chiều. Cánh tay đòn của lực dài hơn bao nhiêu lần thì lực cần dùng nhỏ hơn bấy nhiêu lần.</p>\n  <div class=\"note\">Thanh <b>đồng chất</b> có trọng lực đặt ở trung điểm. Đừng quên moment của chính trọng lượng thanh!</div>\n </div>\n <div class=\"sec\"><h3>Công và công suất <span class=\"tag\">Mở rộng</span></h3>\n  <div class=\"fbox\"><span class=\"f\">A = F · s</span><span class=\"f\">𝒫 = A / t</span></div>\n  <ul><li>Công <i>A</i> (J) chỉ có khi lực làm vật dịch chuyển theo phương của lực.</li>\n  <li>Công suất 𝒫 (W) cho biết công thực hiện trong 1 giây. 1 kW = 1 000 W.</li></ul>\n </div>\n <div class=\"sec\"><h3>Máy cơ đơn giản <span class=\"tag\">Mở rộng</span></h3>\n  <ul><li><b>Định luật về công:</b> không máy cơ đơn giản nào cho lợi về công. Lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi.</li>\n  <li>Ròng rọc cố định: chỉ đổi hướng lực. Ròng rọc động: lợi 2 lần về lực, thiệt 2 lần về đường đi.</li>\n  <li>Mặt phẳng nghiêng (không ma sát): <span class=\"f\">F · l = P · h</span></li>\n  <li>Hiệu suất: <span class=\"f\">H = A<sub>có ích</sub> / A<sub>toàn phần</sub> × 100%</span></li></ul>\n </div>\n <div class=\"sec\"><h3>Ba loại đòn bẩy</h3>\n  <div class=\"tbl\"><table><tr><th>Vị trí ở giữa</th><th>Ví dụ</th><th>Đặc điểm</th></tr>\n  <tr><td>Điểm tựa</td><td>Bập bênh, cái kéo, xà beng, kìm</td><td>Lợi hay thiệt về lực tùy khoảng cách</td></tr>\n  <tr><td>Vật cần nâng</td><td>Xe cút kít, cái mở nắp chai, cái bấm giấy</td><td>Luôn lợi về lực</td></tr>\n  <tr><td>Lực tác dụng</td><td>Cần câu, cái gắp đá, cánh tay người</td><td>Thiệt về lực nhưng lợi về đường đi, động tác nhanh</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Palăng và công suất theo tốc độ <span class=\"tag\">Nâng cao</span></h3>\n  <ul><li><b>Palăng</b> gồm n ròng rọc động (và các ròng rọc cố định): lợi <b>2n</b> lần về lực, thiệt 2n lần về đường đi. Cần cẩu ở công trường dùng palăng nhiều ròng rọc.</li>\n  <li>Khi vật chuyển động đều với tốc độ v dưới tác dụng lực kéo F: <span class=\"f\">𝒫 = F · v</span> (vì 𝒫 = A/t = F·s/t).</li>\n  <li>Đơn vị cũ: 1 mã lực (HP) ≈ 746 W. Một người làm việc lâu dài được khoảng 75 – 100 W.</li></ul>\n </div>\n <div class=\"sec\"><h3>Cân bằng và trọng tâm</h3>\n  <p>Một vật đứng vững khi đường thẳng đứng đi qua trọng tâm của nó còn rơi vào bên trong mặt chân đế. Trọng tâm càng thấp, mặt chân đế càng rộng thì vật càng vững. Nếu đường thẳng đứng đó lọt ra ngoài mặt chân đế, moment của trọng lực sẽ làm vật đổ.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🔧</span>Cờ lê dài, tay nắm cửa</b>Cờ lê cán dài giúp vặn bu lông chặt dễ dàng vì cánh tay đòn lớn. Tay nắm cửa luôn đặt ở mép xa bản lề.</div>\n   <div class=\"app\"><b><span class=\"ico\">💪</span>Cánh tay em là đòn bẩy</b>Khuỷu tay là điểm tựa, cơ bắp tay bám rất gần khuỷu, còn vật cầm ở bàn tay xa hơn nhiều. Cơ phải kéo một lực lớn gấp nhiều lần vật, đổi lại bàn tay di chuyển xa và nhanh.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏗️</span>Cần cẩu tháp</b>Phía sau cần cẩu có những khối bê tông nặng làm đối trọng để moment hai bên cân bằng, giúp cẩu không bị lật khi nâng vật nặng.</div>\n   <div class=\"app\"><b><span class=\"ico\">⛰️</span>Đường đèo quanh co</b>Đường lên núi uốn lượn để giảm độ dốc. Đường dài hơn (thiệt về đường đi) nhưng xe cần lực kéo nhỏ hơn (lợi về lực), đúng định luật về công.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔩</span>Đinh vít</b>Ren của vít là một mặt phẳng nghiêng quấn quanh thân trụ. Xoay vít nhiều vòng (đường đi dài) để đẩy vít vào gỗ một đoạn ngắn với lực rất lớn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚩</span>Cột cờ</b>Ròng rọc cố định trên đỉnh cột giúp kéo cờ lên bằng cách kéo dây xuống, thuận tiện hơn dù không lợi về lực.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Tháp nghiêng Pisa nghiêng như vậy mà vẫn không đổ. Vì sao?</summary>Đường thẳng đứng đi qua trọng tâm của tháp vẫn còn rơi vào bên trong mặt chân đế (nền móng). Moment của trọng lực vì thế chưa làm tháp lật. Các kỹ sư đã gia cố móng để tháp không nghiêng thêm.</details>\n  <details class=\"wq\"><summary>Vì sao ô tô đua được thiết kế rất thấp và rộng?</summary>Trọng tâm thấp và khoảng cách hai bánh rộng giúp xe vững hơn khi ôm cua tốc độ cao, khó bị lật hơn.</details>\n  <details class=\"wq\"><summary>Dùng mặt phẳng nghiêng có được lợi về công không?</summary>Không. Không ma sát thì công bằng nhau; có ma sát thì còn tốn công hơn nâng thẳng. Ta chỉ được lợi về lực, bù lại phải đi đường dài hơn. Ta dùng nó vì lực của người có giới hạn, không phải để tiết kiệm công.</details>\n </div>",
  "formulas": [
   [
    "Moment lực",
    "M = F·d"
   ],
   [
    "Đòn bẩy cân bằng",
    "F₁·d₁ = F₂·d₂"
   ],
   [
    "Công",
    "A = F·s"
   ],
   [
    "Công suất",
    "𝒫 = A / t"
   ],
   [
    "Mặt phẳng nghiêng",
    "F·l = P·h"
   ],
   [
    "Hiệu suất",
    "H = A_ci / A_tp"
   ],
   [
    "Palăng n ròng rọc động",
    "F = P / 2n"
   ],
   [
    "Công suất theo tốc độ",
    "𝒫 = F·v"
   ],
   [
    "Mã lực",
    "1 HP ≈ 746 W"
   ]
  ],
  "quiz": [
   {
    "q": "Kéo một vật bằng lực 50 N làm vật dịch chuyển 4 m theo phương của lực. Công của lực là:",
    "o": [
     "200 J",
     "12,5 J",
     "54 J",
     "46 J"
    ],
    "why": "A = F·s = 50 × 4 = 200 J."
   },
   {
    "q": "Đòn bẩy: vật nặng 200 N đặt cách điểm tựa 0,5 m. Lực tác dụng ở đầu kia cách điểm tựa 2 m. Lực cần dùng là:",
    "o": [
     "50 N",
     "800 N",
     "100 N",
     "400 N"
    ],
    "why": "F × 2 = 200 × 0,5 ⇒ F = 50 N."
   },
   {
    "q": "Máy có công suất 1 kW hoạt động trong 1 phút thực hiện công:",
    "o": [
     "60 000 J",
     "1 000 J",
     "60 J",
     "3 600 000 J"
    ],
    "why": "A = 𝒫·t = 1 000 × 60 = 60 000 J."
   },
   {
    "q": "Dùng ròng rọc động để kéo vật lên, ta được:",
    "o": [
     "lợi 2 lần về lực, thiệt 2 lần về đường đi",
     "lợi 2 lần về công",
     "lợi cả về lực và đường đi",
     "chỉ đổi hướng của lực"
    ],
    "why": "Định luật về công: lợi về lực thì thiệt về đường đi."
   },
   {
    "q": "Muốn mở cửa dễ nhất, ta đẩy:",
    "o": [
     "ở mép xa bản lề, vuông góc với cánh cửa",
     "sát bản lề",
     "ở giữa cánh cửa, song song với cánh cửa",
     "chỗ nào cũng như nhau"
    ],
    "why": "Cánh tay đòn lớn nhất khi lực đặt xa trục quay và vuông góc với cánh cửa."
   },
   {
    "q": "Xe cút kít là đòn bẩy có:",
    "o": [
     "vật cần nâng ở giữa điểm tựa và lực",
     "điểm tựa ở giữa",
     "lực tác dụng ở giữa",
     "không phải đòn bẩy"
    ],
    "why": "Bánh xe là điểm tựa, thùng hàng ở giữa, tay người nâng ở cuối càng xe."
   },
   {
    "q": "Đường lên núi thường uốn lượn quanh co để:",
    "o": [
     "giảm độ dốc, xe cần lực kéo nhỏ hơn",
     "xe đi được đường ngắn hơn",
     "tiết kiệm công",
     "tăng ma sát"
    ],
    "why": "Đó là mặt phẳng nghiêng: dài hơn nhưng ít dốc, lợi về lực."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Tìm điểm tựa",
    "q": "Thanh AB dài 1,2 m, khối lượng không đáng kể. Treo vật 30 N ở đầu A và vật 60 N ở đầu B. Phải đặt điểm tựa cách A bao nhiêu mét để thanh nằm cân bằng?",
    "hint": "Gọi khoảng cách từ A đến điểm tựa là x thì từ B là 1,2 − x.",
    "sol": "30·x = 60·(1,2 − x) ⇒ 90x = 72 ⇒ x = <b>0,8 m</b>. Điểm tựa gần vật nặng hơn, đúng như trực giác.",
    "ans": 0.8,
    "unit": "m",
    "tol": 0.005,
    "d": "Đòn bẩy"
   },
   {
    "lv": 3,
    "t": "Thanh đồng chất",
    "q": "Thanh đồng chất AB dài 1 m, nặng 20 N, đặt trên điểm tựa O cách A 0,25 m. Phải treo vào đầu A một vật nặng bao nhiêu N để thanh cân bằng nằm ngang?",
    "hint": "Trọng lượng thanh đặt ở trung điểm, cách A 0,5 m, tức nằm phía B và cách O 0,25 m.",
    "sol": "Moment của trọng lượng thanh: 20 × 0,25 = 5 N·m.<br>Moment của vật ở A: P × 0,25.<br>P × 0,25 = 5 ⇒ P = <b>20 N</b>.",
    "ans": 20,
    "unit": "N",
    "tol": 0.01,
    "d": "Thanh đồng chất, điều kiện lật"
   },
   {
    "lv": 3,
    "t": "Mặt phẳng nghiêng có ma sát",
    "q": "Dùng mặt phẳng nghiêng dài 5 m, cao 1 m để đưa vật nặng 500 N lên. Thực tế phải kéo với lực 125 N. Tính hiệu suất của mặt phẳng nghiêng (%) và lực ma sát.",
    "hint": "Công có ích = P·h (nâng thẳng lên). Công toàn phần = F·l. Phần công hao phí là công thắng ma sát.",
    "sol": "A<sub>ci</sub> = 500 × 1 = 500 J; A<sub>tp</sub> = 125 × 5 = 625 J.<br>H = 500/625 = <b>80%</b>.<br>Công hao phí 125 J = F<sub>ms</sub> × 5 ⇒ F<sub>ms</sub> = 25 N. (Nếu không ma sát chỉ cần 100 N.)",
    "ans": 80,
    "unit": "%",
    "tol": 0.1,
    "d": "Mặt phẳng nghiêng, hiệu suất"
   },
   {
    "lv": 3,
    "t": "Máy bơm nước",
    "q": "Máy bơm đưa 300 lít nước lên cao 10 m mỗi phút. Hiệu suất máy là 80%. Tính công suất toàn phần của máy (W). (1 lít nước nặng 1 kg.)",
    "hint": "Công có ích trong 1 phút = P·h. Chia cho 60 s được công suất có ích, rồi chia cho hiệu suất.",
    "sol": "P = 300 × 10 = 3 000 N; A<sub>ci</sub> = 3 000 × 10 = 30 000 J mỗi 60 s.<br>𝒫<sub>ci</sub> = 30 000/60 = 500 W.<br>𝒫<sub>tp</sub> = 500 / 0,8 = <b>625 W</b>.",
    "ans": 625,
    "unit": "W",
    "tol": 0.5,
    "d": "Công suất"
   },
   {
    "d": "Ròng rọc, palăng",
    "lv": 2,
    "t": "Palăng ở công trường",
    "q": "Một palăng gồm 2 ròng rọc động và 2 ròng rọc cố định dùng để kéo một bao xi măng nặng 1 200 N lên cao 3 m. Bỏ qua ma sát và khối lượng ròng rọc. Lực kéo là bao nhiêu N? Phải kéo đầu dây đi một đoạn bao nhiêu?",
    "hint": "Mỗi ròng rọc động cho lợi 2 lần về lực.",
    "sol": "2 ròng rọc động ⇒ lợi 4 lần về lực: F = 1 200 / 4 = <b>300 N</b>.<br>Thiệt 4 lần về đường đi: phải kéo dây 3 × 4 = 12 m.<br>Kiểm tra định luật về công: 300 × 12 = 1 200 × 3 = 3 600 J ✓",
    "ans": 300,
    "unit": "N",
    "tol": 0.01
   },
   {
    "d": "Đòn bẩy trong cơ thể",
    "lv": 2,
    "t": "Cánh tay nâng tạ",
    "q": "Em cầm quả tạ 30 N ở bàn tay, cẳng tay nằm ngang. Khoảng cách từ khuỷu tay (điểm tựa) đến quả tạ là 35 cm, cơ bắp tay bám vào cẳng tay ở chỗ cách khuỷu 4 cm. Cơ bắp tay phải kéo một lực bao nhiêu N? (Bỏ qua trọng lượng cẳng tay.)",
    "hint": "F<sub>cơ</sub> × d<sub>cơ</sub> = P<sub>tạ</sub> × d<sub>tạ</sub>.",
    "sol": "F × 4 = 30 × 35 ⇒ F = 1 050 / 4 = <b>262,5 N</b>, gấp gần 9 lần trọng lượng quả tạ! Bù lại, cơ chỉ co ngắn một chút mà bàn tay đã di chuyển một đoạn dài.",
    "ans": 262.5,
    "unit": "N",
    "tol": 0.1
   },
   {
    "d": "Thanh đồng chất, điều kiện lật",
    "lv": 3,
    "t": "Thanh nhô ra mép bàn",
    "q": "Một thanh gỗ đồng chất dài 1 m, nặng 40 N, đặt nằm ngang trên mặt bàn, một đầu nhô ra khỏi mép bàn 0,3 m. Treo vào đầu nhô ra một vật. Vật nặng tối đa bao nhiêu N thì thanh chưa bị lật?",
    "hint": "Khi sắp lật, thanh chỉ còn tựa vào mép bàn: mép bàn là điểm tựa. Trọng tâm thanh ở trung điểm, cách mép bàn bao nhiêu?",
    "sol": "Trung điểm cách đầu nhô ra 0,5 m ⇒ cách mép bàn 0,5 − 0,3 = 0,2 m (nằm phía trong bàn).<br>Sắp lật: P × 0,3 = 40 × 0,2 ⇒ P ≈ <b>26,7 N</b>.",
    "ans": 26.7,
    "unit": "N",
    "tol": 0.1
   },
   {
    "d": "Công suất",
    "lv": 2,
    "t": "Leo cầu thang",
    "q": "Một bạn học sinh nặng 45 kg chạy từ tầng 1 lên tầng 3 hết 14 giây. Mỗi tầng cao 3,5 m. Tính công suất của bạn (W).",
    "hint": "Từ tầng 1 lên tầng 3 là lên bao nhiêu tầng? Công = P·h.",
    "sol": "Từ tầng 1 lên tầng 3 là lên 2 tầng: h = 7 m (không phải 3 tầng!).<br>A = 450 × 7 = 3 150 J.<br>𝒫 = 3 150 / 14 = <b>225 W</b>, gấp khoảng 3 lần công suất làm việc lâu dài của một người.",
    "ans": 225,
    "unit": "W",
    "tol": 0.5
   },
   {
    "d": "Công suất",
    "lv": 3,
    "t": "Công suất xe máy",
    "q": "Một xe máy chạy đều trên đường thẳng với tốc độ 36 km/h. Lực kéo của động cơ là 200 N. Tính công suất của động cơ (W). Nếu giữ nguyên công suất này khi lên dốc, lực kéo cần 400 N thì xe chạy với tốc độ bao nhiêu km/h?",
    "hint": "Dùng 𝒫 = F·v với v tính bằng m/s.",
    "sol": "v = 36 km/h = 10 m/s ⇒ 𝒫 = 200 × 10 = <b>2 000 W</b>.<br>Lên dốc: v = 𝒫/F = 2 000/400 = 5 m/s = 18 km/h. Vì thế lên dốc xe phải về số thấp và chạy chậm hơn.",
    "ans": 2000,
    "unit": "W",
    "tol": 1
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 },
 {
  "id": "c5",
  "position": 5,
  "title": "Điện học",
  "icon": "💡",
  "lab": "circuit",
  "theory": "<div class=\"sec\"><h3>Sự nhiễm điện</h3>\n  <ul><li>Cọ xát có thể làm vật nhiễm điện. Vật nhiễm điện hút được vật nhẹ.</li>\n  <li>Có hai loại điện tích: dương (+) và âm (−). <span class=\"mark\">Cùng loại thì đẩy, khác loại thì hút.</span></li>\n  <li>Vật nhận thêm electron thì nhiễm điện âm; mất bớt electron thì nhiễm điện dương.</li></ul>\n </div>\n <div class=\"sec\"><h3>Dòng điện và mạch điện</h3>\n  <ul><li>Dòng điện là dòng các hạt mang điện dịch chuyển có hướng. Trong kim loại, đó là dòng electron tự do.</li>\n  <li><b>Chiều quy ước:</b> từ cực dương, qua mạch ngoài, tới cực âm của nguồn (ngược chiều chuyển động của electron).</li>\n  <li>Tác dụng của dòng điện: nhiệt, phát sáng, từ, hóa học, sinh lý.</li></ul>\n </div>\n <div class=\"sec\"><h3>Cường độ dòng điện và hiệu điện thế</h3>\n  <ul><li>Cường độ dòng điện <i>I</i> (A, mA), đo bằng <b>ampe kế mắc nối tiếp</b>.</li>\n  <li>Hiệu điện thế <i>U</i> (V), đo bằng <b>vôn kế mắc song song</b> với đoạn mạch cần đo.</li>\n  <li>Chốt (+) của dụng cụ đo nối về phía cực dương của nguồn.</li></ul>\n </div>\n <div class=\"sec\"><h3>Đoạn mạch nối tiếp và song song</h3>\n  <div class=\"tbl\"><table><tr><th></th><th>Nối tiếp</th><th>Song song</th></tr>\n  <tr><td>Cường độ</td><td>I = I₁ = I₂</td><td>I = I₁ + I₂</td></tr>\n  <tr><td>Hiệu điện thế</td><td>U = U₁ + U₂</td><td>U = U₁ = U₂</td></tr>\n  <tr><td>Một đèn hỏng</td><td>Cả mạch tắt</td><td>Đèn kia vẫn sáng</td></tr></table></div>\n  <div class=\"note\">Đèn trong nhà mắc song song: mỗi đèn có công tắc riêng và cùng hoạt động ở 220 V.</div>\n </div>\n <div class=\"sec\"><h3>Nhìn trước lớp 9: định luật Ohm <span class=\"tag\">Mở rộng</span></h3>\n  <div class=\"fbox\"><span class=\"f\">I = U / R</span></div>\n  <p>Điện trở <i>R</i> (Ω) cho biết vật dẫn cản trở dòng điện nhiều hay ít. Nối tiếp: R = R₁ + R₂. Song song: 1/R = 1/R₁ + 1/R₂.</p>\n </div>\n <div class=\"sec real\"><h3>Nhiễm điện quanh em</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">⚡</span>Sét</b>Các đám mây giông cọ xát với không khí và tích điện rất lớn. Khi hiệu điện thế đủ lớn, điện phóng qua không khí thành tia sét, nung nóng không khí đột ngột tạo ra tiếng sấm.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏢</span>Cột thu lôi</b>Thanh kim loại nhọn trên nóc nhà nối với đất bằng dây dẫn. Sét đánh vào cột thu lôi và dòng điện được dẫn xuống đất, không đi qua tòa nhà.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚛</span>Xe chở xăng</b>Xăng sóng sánh cọ xát vào bồn làm bồn nhiễm điện. Xe có dây xích kéo lê dưới đất để điện tích thoát xuống đất, tránh tia lửa điện gây cháy nổ.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎨</span>Sơn tĩnh điện, lọc bụi</b>Hạt sơn được làm nhiễm điện và bị hút vào vật cần sơn, lớp sơn đều và ít hao. Máy lọc không khí tĩnh điện cũng hút bụi theo cách này.</div>\n  </div>\n </div>\n <div class=\"sec real\"><h3>Tác dụng của dòng điện và ứng dụng</h3>\n  <div class=\"tbl\"><table><tr><th>Tác dụng</th><th>Ứng dụng</th></tr>\n  <tr><td>Nhiệt</td><td>Ấm điện, bàn là, nồi cơm điện, cầu chì</td></tr>\n  <tr><td>Phát sáng</td><td>Đèn LED, đèn huỳnh quang, đèn báo</td></tr>\n  <tr><td>Từ</td><td>Nam châm điện, chuông điện, loa, quạt, động cơ điện</td></tr>\n  <tr><td>Hóa học</td><td>Mạ điện (mạ vàng, mạ kẽm), sạc ắc quy</td></tr>\n  <tr><td>Sinh lý</td><td>Máy kích tim trong y tế; nhưng cũng là nguyên nhân gây điện giật</td></tr></table></div>\n  <p class=\"muted\">Một số con số thực tế: pin tiểu 1,5 V; cổng sạc USB 5 V; ổ điện trong nhà 220 V. Đèn LED nhỏ dùng khoảng vài chục mA, ấm siêu tốc dùng khoảng 7 – 8 A.</p>\n </div>\n <div class=\"sec real\"><h3>An toàn điện</h3>\n  <ul>\n   <li>Dòng điện chỉ khoảng vài chục mA chạy qua người đã có thể gây co giật, ngừng tim. Hiệu điện thế dưới 40 V thường được coi là an toàn với người trong điều kiện khô ráo.</li>\n   <li><b>Cầu chì, aptomat</b> tự ngắt mạch khi dòng điện quá lớn (chập mạch, quá tải), chống cháy dây điện.</li>\n   <li><b>Dây nối đất</b> ở vỏ kim loại máy giặt, tủ lạnh: nếu dây điện bên trong chạm vỏ, dòng điện thoát xuống đất thay vì qua người.</li>\n   <li>Không chạm vào thiết bị điện khi tay ướt, không cắm sạc khi đang tắm, tránh xa dây điện đứt rơi xuống đất.</li>\n   <li>Khi có người bị điện giật: <b>ngắt cầu dao trước</b>, hoặc dùng vật cách điện khô (gậy gỗ, nhựa) tách người khỏi dây. Tuyệt đối không dùng tay kéo trực tiếp.</li>\n  </ul>\n </div>\n <div class=\"sec\"><h3>Mạch điện trong nhà</h3>\n  <p>Các đèn, quạt, ổ cắm trong nhà đều mắc <b>song song</b> vào hai dây: dây pha (dây nóng) và dây trung tính (dây nguội). Mỗi thiết bị đều nhận 220 V và bật tắt độc lập. Công tắc mắc <b>nối tiếp</b> với thiết bị nó điều khiển, và nên đặt trên dây pha để khi tắt, bóng đèn không còn mang điện.</p>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Mùa hanh khô, chải tóc bằng lược nhựa thì tóc dựng lên, đôi khi nghe lách tách. Vì sao?</summary>Lược và tóc cọ xát nhau nên nhiễm điện trái dấu. Các sợi tóc nhiễm điện cùng loại đẩy nhau nên dựng lên, và bị lược hút. Tiếng lách tách là những tia lửa điện nhỏ. Mùa ẩm, hơi nước giúp điện tích thoát đi nên ít xảy ra hơn.</details>\n  <details class=\"wq\"><summary>Vì sao dây dẫn điện có lõi bằng đồng nhưng vỏ bọc bằng nhựa?</summary>Đồng là chất dẫn điện tốt, để dòng điện đi qua dễ dàng. Nhựa là chất cách điện, ngăn dòng điện thoát ra ngoài và bảo vệ người chạm vào dây.</details>\n  <details class=\"wq\"><summary>Trong nhà, khi một bóng đèn bị cháy thì các đèn khác vẫn sáng. Điều này cho biết gì?</summary>Các đèn được mắc song song. Nếu mắc nối tiếp, một bóng cháy sẽ làm hở cả mạch và tất cả cùng tắt, giống những dây đèn trang trí kiểu cũ.</details>\n </div>",
  "formulas": [
   [
    "Nối tiếp",
    "I = I₁ = I₂;  U = U₁ + U₂"
   ],
   [
    "Song song",
    "U = U₁ = U₂;  I = I₁ + I₂"
   ],
   [
    "Định luật Ohm (lớp 9)",
    "I = U / R"
   ],
   [
    "Điện trở nối tiếp",
    "R = R₁ + R₂"
   ],
   [
    "Điện trở song song",
    "1/R = 1/R₁ + 1/R₂"
   ],
   [
    "Hiệu điện thế an toàn",
    "U < 40 V (điều kiện khô ráo)"
   ]
  ],
  "quiz": [
   {
    "q": "Cọ xát thước nhựa vào mảnh vải khô, thước hút được giấy vụn. Đó là vì:",
    "o": [
     "thước đã bị nhiễm điện",
     "thước có từ tính",
     "thước nóng lên",
     "giấy vụn bị nhiễm từ"
    ],
    "why": "Cọ xát làm thước nhiễm điện, vật nhiễm điện hút được vật nhẹ."
   },
   {
    "q": "Chiều quy ước của dòng điện là:",
    "o": [
     "từ cực dương qua mạch ngoài đến cực âm",
     "từ cực âm qua mạch ngoài đến cực dương",
     "cùng chiều chuyển động của electron",
     "thay đổi liên tục"
    ],
    "why": "Chiều quy ước ngược chiều chuyển động của electron."
   },
   {
    "q": "Hai đèn mắc nối tiếp, U₁ = 3 V, U₂ = 4 V. Hiệu điện thế giữa hai đầu đoạn mạch là:",
    "o": [
     "7 V",
     "1 V",
     "3,5 V",
     "12 V"
    ],
    "why": "Nối tiếp: U = U₁ + U₂ = 7 V."
   },
   {
    "q": "Hai đèn mắc song song, ampe kế mạch chính chỉ 0,8 A, dòng qua đèn 1 là 0,3 A. Dòng qua đèn 2 là:",
    "o": [
     "0,5 A",
     "1,1 A",
     "0,8 A",
     "0,3 A"
    ],
    "why": "Song song: I = I₁ + I₂ ⇒ I₂ = 0,5 A."
   },
   {
    "q": "Vôn kế được mắc như thế nào với đoạn mạch cần đo hiệu điện thế?",
    "o": [
     "song song",
     "nối tiếp",
     "tùy ý",
     "chỉ nối vào cực âm"
    ],
    "why": "Vôn kế mắc song song, ampe kế mắc nối tiếp."
   },
   {
    "q": "Một vật nhận thêm electron thì:",
    "o": [
     "nhiễm điện âm",
     "nhiễm điện dương",
     "trung hòa về điện",
     "nhiễm từ"
    ],
    "why": "Electron mang điện âm, nhận thêm thì vật thừa điện tích âm."
   },
   {
    "q": "Xe chở xăng có một sợi dây xích kéo lê dưới mặt đường để:",
    "o": [
     "cho điện tích thoát xuống đất, tránh tia lửa điện",
     "giữ thăng bằng cho xe",
     "báo hiệu cho xe phía sau",
     "làm giảm tốc độ xe"
    ],
    "why": "Bồn xe nhiễm điện do cọ xát với xăng; dây xích dẫn điện tích xuống đất."
   },
   {
    "q": "Khi thấy người bị điện giật, việc đầu tiên nên làm là:",
    "o": [
     "ngắt nguồn điện (cầu dao, aptomat)",
     "dùng tay kéo người ra",
     "dội nước vào người bị nạn",
     "gọi người khác đến xem"
    ],
    "why": "Ngắt điện trước để không ai bị giật thêm; chỉ dùng vật cách điện khô nếu không ngắt được."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Ba quả cầu nhiễm điện",
    "q": "Ba quả cầu A, B, C đều nhiễm điện. A hút B, B đẩy C, và C nhiễm điện dương. Hỏi A và B nhiễm điện loại gì?",
    "hint": "Bắt đầu từ cặp có thông tin chắc chắn nhất: B và C.",
    "sol": "B đẩy C, C dương ⇒ <b>B dương</b>.<br>A hút B (dương), A đã nhiễm điện ⇒ <b>A âm</b>.<br>Lưu ý: nếu đề không nói A nhiễm điện thì A cũng có thể trung hòa, vì vật nhiễm điện hút được cả vật trung hòa.",
    "ans": null,
    "d": "Nhiễm điện"
   },
   {
    "lv": 3,
    "t": "Mạch hỗn hợp",
    "q": "Đèn Đ1 mắc nối tiếp với cụm (Đ2 song song Đ3). Ampe kế mạch chính chỉ 0,6 A, ampe kế nối tiếp với Đ2 chỉ 0,25 A. Hiệu điện thế hai đầu cả mạch là 9 V, hai đầu Đ2 là 3,5 V. Tính cường độ dòng điện qua Đ3 (A), và hiệu điện thế hai đầu Đ1, Đ3.",
    "hint": "Vẽ sơ đồ trước! Dòng mạch chính đi qua Đ1 rồi chia ra hai nhánh Đ2, Đ3.",
    "sol": "I₁ = 0,6 A (Đ1 nằm trên mạch chính).<br>I₃ = 0,6 − 0,25 = <b>0,35 A</b>.<br>U₃ = U₂ = 3,5 V (song song).<br>U₁ = 9 − 3,5 = 5,5 V (nối tiếp với cụm song song).",
    "ans": 0.35,
    "unit": "A",
    "tol": 0.005,
    "d": "Mạch hỗn hợp"
   },
   {
    "lv": 3,
    "t": "Định luật Ohm",
    "q": "Hai điện trở R₁ = 6 Ω và R₂ = 12 Ω, nguồn 12 V. Mắc song song hai điện trở vào nguồn thì dòng điện mạch chính bằng bao nhiêu ampe? (So sánh với khi mắc nối tiếp.)",
    "hint": "Song song: mỗi điện trở đều chịu 12 V. Tính I₁, I₂ rồi cộng lại.",
    "sol": "Song song: I₁ = 12/6 = 2 A, I₂ = 12/12 = 1 A ⇒ I = <b>3 A</b>. (Cách khác: R = 6·12/(6+12) = 4 Ω, I = 12/4 = 3 A.)<br>Nối tiếp: R = 18 Ω ⇒ I = 12/18 ≈ 0,67 A. Mắc song song cho dòng lớn hơn nhiều.<br>Thử kiểm chứng trong thí nghiệm ảo của chương này!",
    "ans": 3,
    "unit": "A",
    "tol": 0.01,
    "d": "Ứng dụng định luật Ohm"
   },
   {
    "lv": 2,
    "t": "Chim đậu dây điện",
    "q": "Vì sao chim đậu trên một dây điện cao thế không bị điện giật, còn người chạm vào dây điện lúc đang đứng dưới đất thì nguy hiểm?",
    "hint": "Dòng điện chỉ chạy qua cơ thể khi giữa hai điểm tiếp xúc có hiệu điện thế.",
    "sol": "Hai chân chim đặt trên cùng một dây, rất gần nhau, nên hiệu điện thế giữa hai chân gần như bằng 0 và hầu như không có dòng điện qua cơ thể chim.<br>Người chạm dây khi đứng dưới đất: giữa dây và mặt đất có hiệu điện thế rất lớn, dòng điện chạy qua người xuống đất. Cũng vì vậy, chim lớn chạm cùng lúc hai dây khác nhau vẫn có thể bị giật.",
    "ans": null,
    "d": "Hiện tượng thực tế"
   },
   {
    "d": "Mạch song song nhiều nhánh",
    "lv": 3,
    "t": "Ba đèn và ba ampe kế",
    "q": "Ba đèn Đ1, Đ2, Đ3 mắc song song. Ampe kế A₁ đo tổng dòng qua Đ1 và Đ2, chỉ 0,5 A. Ampe kế A₂ đo tổng dòng qua Đ2 và Đ3, chỉ 0,7 A. Ampe kế mạch chính chỉ 0,9 A. Tính dòng điện qua Đ2 (A).",
    "hint": "Viết ba phương trình: I₁ + I₂ = 0,5; I₂ + I₃ = 0,7; I₁ + I₂ + I₃ = 0,9.",
    "sol": "Từ (3) và (1): I₃ = 0,9 − 0,5 = 0,4 A.<br>Từ (3) và (2): I₁ = 0,9 − 0,7 = 0,2 A.<br>I₂ = 0,5 − 0,2 = <b>0,3 A</b>. Kiểm tra: 0,2 + 0,3 + 0,4 = 0,9 ✓",
    "ans": 0.3,
    "unit": "A",
    "tol": 0.005
   },
   {
    "d": "Tìm chỗ hỏng trong mạch",
    "lv": 3,
    "t": "Vôn kế khi đèn bị đứt",
    "q": "Hai đèn Đ1, Đ2 mắc nối tiếp vào nguồn 6 V. Một vôn kế mắc song song với Đ1. Dây tóc của Đ1 bị đứt. Hỏi Đ2 có sáng không, và vôn kế chỉ bao nhiêu vôn?",
    "hint": "Vôn kế có điện trở rất lớn nên dòng qua nó cực nhỏ, không đủ làm đèn sáng. Hiệu điện thế trên Đ2 gần bằng 0 thì hiệu điện thế nguồn dồn vào đâu?",
    "sol": "Đ1 đứt ⇒ mạch hở, Đ2 <b>không sáng</b>.<br>Vôn kế lúc này nối với hai cực nguồn qua Đ2. Dòng qua vôn kế rất nhỏ nên hiệu điện thế trên Đ2 gần bằng 0, vôn kế chỉ gần bằng hiệu điện thế nguồn: <b>6 V</b>.<br>Thợ điện dùng đúng mẹo này để tìm chỗ hỏng: đoạn nào vôn kế chỉ bằng hiệu điện thế nguồn thì đoạn đó bị đứt.",
    "ans": 6,
    "unit": "V",
    "tol": 0.05
   },
   {
    "d": "Ứng dụng định luật Ohm",
    "lv": 2,
    "t": "Ấm điện và cầu chì",
    "q": "Ấm điện có điện trở 44 Ω dùng ở hiệu điện thế 220 V. Tính cường độ dòng điện qua ấm (A). Có nên dùng cầu chì loại 3 A cho ấm này không?",
    "hint": "I = U/R.",
    "sol": "I = 220 / 44 = <b>5 A</b>.<br>Cầu chì 3 A sẽ bị đứt ngay khi bật ấm. Cần chọn cầu chì (hoặc aptomat) lớn hơn dòng làm việc một chút, ví dụ 6 A. Chọn quá lớn thì cầu chì không bảo vệ được khi có sự cố.",
    "ans": 5,
    "unit": "A",
    "tol": 0.01
   },
   {
    "d": "Hiện tượng thực tế",
    "lv": 2,
    "t": "Hai bóng 220 V nối tiếp",
    "q": "Hai bóng đèn giống nhau, mỗi bóng ghi 220 V. Bạn An mắc hai bóng nối tiếp vào ổ điện 220 V. Các đèn sáng thế nào? Nên mắc thế nào cho đúng?",
    "hint": "Nối tiếp thì U = U₁ + U₂. Hai bóng giống nhau thì chia hiệu điện thế ra sao?",
    "sol": "Hai bóng giống nhau mắc nối tiếp: mỗi bóng chỉ nhận khoảng 110 V, nhỏ hơn nhiều so với 220 V ghi trên bóng, nên cả hai <b>sáng yếu</b>. Thêm nữa, một bóng hỏng thì bóng kia cũng tắt.<br>Cách đúng: mắc <b>song song</b> để mỗi bóng nhận đủ 220 V.",
    "ans": null
   },
   {
    "d": "Thiết kế mạch",
    "lv": 3,
    "t": "Đèn cầu thang",
    "q": "Ở cầu thang, người ta muốn bật đèn ở chân cầu thang rồi lên tầng trên tắt được đèn đó, và ngược lại. Công tắc thường (2 cực) không làm được. Hãy tìm hiểu và giải thích cách làm.",
    "hint": "Cần loại công tắc có 3 chốt: một chốt chung, có thể nối sang chốt thứ nhất hoặc chốt thứ hai (công tắc đảo chiều, còn gọi là công tắc 2 chiều).",
    "sol": "Dùng hai công tắc đảo chiều K₁ (dưới) và K₂ (trên). Nối hai chốt phụ của K₁ với hai chốt phụ của K₂ bằng hai dây riêng. Chốt chung của K₁ nối với dây pha, chốt chung của K₂ nối tới đèn, đèn nối về dây trung tính.<br>Đèn sáng khi hai công tắc cùng gạt về cùng một dây nối; gạt bất kỳ công tắc nào thì mạch bị đổi trạng thái (đang sáng thành tắt và ngược lại). Em hãy vẽ sơ đồ để kiểm tra cả 4 trường hợp!",
    "ans": null
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 },
 {
  "id": "c6",
  "position": 6,
  "title": "Nhiệt học",
  "icon": "🌡️",
  "lab": "heat",
  "theory": "<div class=\"sec\"><h3>Nhiệt năng</h3>\n  <p>Các phân tử cấu tạo nên vật luôn chuyển động hỗn loạn. Nhiệt năng của vật là tổng động năng của các phân tử. Nhiệt độ càng cao, phân tử chuyển động càng nhanh, nhiệt năng càng lớn.</p>\n  <p>Có hai cách làm thay đổi nhiệt năng: <b>thực hiện công</b> (cọ xát) và <b>truyền nhiệt</b>.</p>\n </div>\n <div class=\"sec\"><h3>Ba cách truyền nhiệt</h3>\n  <div class=\"tbl\"><table><tr><th>Cách</th><th>Xảy ra chủ yếu ở</th><th>Ví dụ</th></tr>\n  <tr><td>Dẫn nhiệt</td><td>Chất rắn</td><td>Thìa kim loại nóng dần khi nhúng vào cốc trà</td></tr>\n  <tr><td>Đối lưu</td><td>Chất lỏng, chất khí</td><td>Nước trong nồi được đun từ đáy</td></tr>\n  <tr><td>Bức xạ nhiệt</td><td>Mọi nơi, cả chân không</td><td>Ánh nắng Mặt Trời tới Trái Đất</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Sự nở vì nhiệt</h3>\n  <p>Hầu hết các chất nở ra khi nóng lên, co lại khi lạnh đi. Chất khí nở nhiều nhất, rồi đến chất lỏng, chất rắn nở ít nhất.</p>\n  <p class=\"muted\">Ứng dụng: khe hở giữa các thanh ray, băng kép trong bàn là, nhiệt kế.</p>\n </div>\n <div class=\"sec\"><h3>Nhiệt lượng <span class=\"tag\">Nâng cao</span></h3>\n  <div class=\"fbox\"><span class=\"f\">Q = m · c · Δt</span></div>\n  <ul><li><i>c</i>: nhiệt dung riêng (J/kg·K), là nhiệt lượng để 1 kg chất tăng thêm 1°C.</li>\n  <li>Δt: độ tăng (giảm) nhiệt độ. Δt tính theo °C hay K đều như nhau.</li></ul>\n  <div class=\"tbl\"><table><tr><th>Chất</th><th>Nước</th><th>Nhôm</th><th>Sắt</th><th>Đồng</th><th>Chì</th></tr>\n  <tr><td>c (J/kg·K)</td><td>4 200</td><td>880</td><td>460</td><td>380</td><td>130</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Phương trình cân bằng nhiệt <span class=\"tag\">Nâng cao</span></h3>\n  <p>Nhiệt truyền từ vật nóng hơn sang vật lạnh hơn cho đến khi nhiệt độ hai vật bằng nhau. Nếu bỏ qua hao phí:</p>\n  <div class=\"fbox\"><span class=\"f\">Q<sub>tỏa</sub> = Q<sub>thu</sub></span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Trộn 1 kg nước 20°C với 1 kg nước 80°C: 1·4200·(t − 20) = 1·4200·(80 − t) ⇒ t = 50°C.</div>\n  <div class=\"note\">Vật tỏa nhiệt: Δt = t<sub>đầu</sub> − t. Vật thu nhiệt: Δt = t − t<sub>đầu</sub>. Luôn để Δt dương.</div>\n </div>\n <div class=\"sec real\"><h3>Ba cách truyền nhiệt trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🍳</span>Dẫn nhiệt: nồi và cán nồi</b>Thân nồi bằng kim loại dẫn nhiệt tốt để nấu nhanh. Cán nồi bằng nhựa hoặc gỗ dẫn nhiệt kém để cầm không bị bỏng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧥</span>Dẫn nhiệt: áo len, chăn bông</b>Không khí dẫn nhiệt rất kém. Áo len, chăn bông giữ nhiều không khí trong các sợi, ngăn nhiệt từ cơ thể thoát ra. Chim xù lông mùa đông cũng vì thế.</div>\n   <div class=\"app\"><b><span class=\"ico\">❄️</span>Đối lưu: điều hòa và lò sưởi</b>Không khí lạnh nặng hơn chìm xuống, nên điều hòa đặt trên cao. Không khí nóng nhẹ hơn bốc lên, nên lò sưởi đặt dưới thấp. Ngăn đá tủ lạnh kiểu cũ ở phía trên cũng vì lý do này.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌊</span>Đối lưu: gió biển</b>Ban ngày đất nóng nhanh hơn biển, không khí trên đất bốc lên, gió mát từ biển thổi vào. Ban đêm đất nguội nhanh hơn, gió thổi ngược từ đất ra biển.</div>\n   <div class=\"app\"><b><span class=\"ico\">☀️</span>Bức xạ: màu áo</b>Vật màu sẫm hấp thụ bức xạ nhiệt tốt, vật màu sáng phản xạ tốt. Mùa hè nên mặc áo sáng màu; ống của máy nước nóng năng lượng mặt trời lại sơn đen.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍶</span>Phích nước giữ nóng</b>Ruột phích có hai lớp thủy tinh, ở giữa là chân không: ngăn dẫn nhiệt và đối lưu. Mặt thủy tinh tráng bạc: phản xạ bức xạ nhiệt. Nút phích ngăn đối lưu ở miệng bình.</div>\n  </div>\n </div>\n <div class=\"sec real\"><h3>Sự nở vì nhiệt trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🛤️</span>Khe hở đường ray, khe co giãn cầu</b>Thanh ray và mặt cầu dài ra khi trời nóng. Để chừa khe hở, ray không bị cong vênh, mặt cầu không bị nứt.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔌</span>Dây điện võng mùa hè</b>Dây điện nở dài ra khi nóng nên mùa hè võng xuống nhiều hơn. Thợ phải mắc dây hơi chùng, nếu căng quá mùa đông dây co lại có thể bị đứt.</div>\n   <div class=\"app\"><b><span class=\"ico\">🫙</span>Mở nắp lọ kim loại bị chặt</b>Hơ nóng hoặc ngâm nắp vào nước nóng. Kim loại nở nhiều hơn thủy tinh nên nắp nới ra, dễ mở.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌡️</span>Băng kép trong bàn là</b>Hai lá kim loại khác nhau ghép chặt, nở khác nhau nên băng kép cong lại khi nóng, tự ngắt mạch điện, giữ nhiệt độ bàn là ổn định.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Năng suất tỏa nhiệt của nhiên liệu <span class=\"tag\">Nâng cao</span></h3>\n  <div class=\"fbox\"><span class=\"f\">Q = q · m</span><span class=\"f\">H = Q<sub>có ích</sub> / Q<sub>tỏa ra</sub></span></div>\n  <p><i>q</i> (J/kg) là nhiệt lượng tỏa ra khi đốt cháy hoàn toàn 1 kg nhiên liệu.</p>\n  <div class=\"tbl\"><table><tr><th>Nhiên liệu</th><th>Củi khô</th><th>Than đá</th><th>Dầu hỏa</th><th>Xăng</th></tr>\n  <tr><td>q (J/kg)</td><td>10·10⁶</td><td>27·10⁶</td><td>44·10⁶</td><td>46·10⁶</td></tr></table></div>\n  <p class=\"muted\">Bếp đun thực tế không truyền hết nhiệt cho nồi nước: một phần làm nóng không khí, một phần làm nóng nồi. Hiệu suất bếp củi chỉ khoảng 10 – 20%, bếp gas tốt hơn nhiều.</p>\n </div>\n <div class=\"sec\"><h3>Nhiệt dung riêng lớn của nước</h3>\n  <p>Nước có nhiệt dung riêng rất lớn (4 200 J/kg·K), gấp khoảng 11 lần đồng. Nghĩa là nước nóng lên chậm và nguội đi chậm, “trữ” được nhiều nhiệt.</p>\n  <ul><li>Động cơ ô tô, xe máy dùng nước để làm mát.</li><li>Túi chườm nóng dùng nước nóng, giữ ấm lâu.</li><li>Vùng ven biển ít nóng gay gắt vào ban ngày và ít lạnh vào ban đêm hơn sa mạc.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Rót nước sôi vào cốc thủy tinh dày thì dễ vỡ hơn cốc mỏng. Vì sao?</summary>Thủy tinh dẫn nhiệt kém. Với cốc dày, mặt trong nóng lên và nở ra ngay, còn mặt ngoài vẫn lạnh chưa kịp nở. Hai lớp nở không đều sinh ra lực rất lớn làm cốc nứt vỡ. Cốc mỏng nóng đều nhanh hơn nên ít vỡ.</details>\n  <details class=\"wq\"><summary>Mùa đông ở xứ lạnh, mặt hồ đóng băng nhưng cá vẫn sống ở dưới. Vì sao?</summary>Nước có tính chất đặc biệt: nặng nhất ở 4°C. Khi trời lạnh, nước 4°C chìm xuống đáy, còn nước lạnh hơn và băng (nhẹ hơn nước) nổi lên trên. Lớp băng trên mặt lại dẫn nhiệt kém, giống một tấm chăn giữ cho nước dưới đáy không đóng băng.</details>\n  <details class=\"wq\"><summary>Sờ vào thanh sắt và miếng gỗ để cùng trong phòng, thanh sắt có vẻ lạnh hơn. Có đúng là sắt lạnh hơn không?</summary>Không, cả hai cùng nhiệt độ phòng. Sắt dẫn nhiệt tốt nên lấy nhiệt từ tay em đi rất nhanh, tay em cảm thấy lạnh. Gỗ dẫn nhiệt kém, nhiệt ở tay ít bị lấy đi nên ta thấy ấm hơn. Cảm giác của tay đo tốc độ mất nhiệt, không phải nhiệt độ.</details>\n </div>",
  "formulas": [
   [
    "Nhiệt lượng",
    "Q = m·c·Δt"
   ],
   [
    "Cân bằng nhiệt",
    "Q_tỏa = Q_thu"
   ],
   [
    "Nhiệt dung riêng của nước",
    "c = 4 200 J/kg·K"
   ],
   [
    "Nhiệt tỏa ra của nhiên liệu",
    "Q = q·m"
   ],
   [
    "Hiệu suất bếp",
    "H = Q_ci / Q_tỏa"
   ]
  ],
  "quiz": [
   {
    "q": "Nhiệt lượng cần để đun 2 kg nước từ 20°C lên 100°C là (c = 4 200 J/kg·K):",
    "o": [
     "672 000 J",
     "840 000 J",
     "168 000 J",
     "336 000 J"
    ],
    "why": "Q = 2 × 4 200 × 80 = 672 000 J."
   },
   {
    "q": "Nhiệt từ Mặt Trời truyền tới Trái Đất qua khoảng chân không bằng cách:",
    "o": [
     "bức xạ nhiệt",
     "dẫn nhiệt",
     "đối lưu",
     "cả dẫn nhiệt và đối lưu"
    ],
    "why": "Chỉ bức xạ nhiệt truyền được trong chân không."
   },
   {
    "q": "Khi đun nước, nhiệt truyền khắp nồi nước chủ yếu bằng:",
    "o": [
     "đối lưu",
     "dẫn nhiệt",
     "bức xạ nhiệt",
     "thực hiện công"
    ],
    "why": "Nước nóng ở đáy nhẹ hơn nổi lên, nước lạnh chìm xuống tạo dòng đối lưu."
   },
   {
    "q": "Trộn 1 kg nước 20°C với 1 kg nước 80°C. Nhiệt độ khi cân bằng là:",
    "o": [
     "50°C",
     "60°C",
     "100°C",
     "40°C"
    ],
    "why": "Cùng khối lượng, cùng chất nên nhiệt độ cân bằng là trung bình cộng."
   },
   {
    "q": "Giữa các thanh ray đường sắt có khe hở để:",
    "o": [
     "ray không bị cong khi nở vì nhiệt",
     "tiết kiệm thép",
     "tàu chạy êm hơn",
     "nước mưa thoát xuống"
    ],
    "why": "Ngày nóng ray nở dài ra, nếu không có khe hở ray sẽ bị đẩy cong."
   },
   {
    "q": "Cùng nhận một nhiệt lượng, 1 kg nước và 1 kg đồng, vật nào nóng lên nhiều hơn?",
    "o": [
     "Đồng",
     "Nước",
     "Như nhau",
     "Không xác định được"
    ],
    "why": "c của đồng (380) nhỏ hơn nhiều so với nước (4 200) nên Δt = Q/(m·c) lớn hơn."
   },
   {
    "q": "Điều hòa nhiệt độ thường được lắp ở trên cao vì:",
    "o": [
     "không khí lạnh nặng hơn sẽ chìm xuống, tạo đối lưu",
     "để không ai chạm vào",
     "nhiệt truyền xuống bằng dẫn nhiệt",
     "để bức xạ nhiệt tốt hơn"
    ],
    "why": "Không khí lạnh chìm xuống, không khí nóng bốc lên thay chỗ, tạo dòng đối lưu làm mát cả phòng."
   },
   {
    "q": "Ruột phích có hai lớp thủy tinh, giữa là chân không, nhằm chủ yếu ngăn:",
    "o": [
     "dẫn nhiệt và đối lưu",
     "bức xạ nhiệt",
     "sự nở vì nhiệt",
     "sự bay hơi"
    ],
    "why": "Chân không không có phân tử nên không dẫn nhiệt và không có đối lưu; lớp tráng bạc mới là thứ chống bức xạ."
   }
  ],
  "ex": [
   {
    "lv": 2,
    "t": "Đun ấm nước",
    "q": "Một ấm nhôm khối lượng 0,5 kg chứa 2 lít nước ở 25°C. Tính nhiệt lượng cần để đun sôi ấm nước (J). (c nhôm = 880, c nước = 4 200 J/kg·K.)",
    "hint": "Cả ấm và nước đều nóng lên từ 25°C đến 100°C. Q = Q<sub>ấm</sub> + Q<sub>nước</sub>.",
    "sol": "Δt = 75°C.<br>Q<sub>ấm</sub> = 0,5 × 880 × 75 = 33 000 J.<br>Q<sub>nước</sub> = 2 × 4 200 × 75 = 630 000 J.<br>Q = <b>663 000 J</b>. (Chú ý: nước “ăn” phần lớn nhiệt lượng vì c rất lớn.)",
    "ans": 663000,
    "unit": "J",
    "tol": 10,
    "d": "Nhiệt lượng nhiều vật"
   },
   {
    "lv": 3,
    "t": "Thả quả cầu đồng",
    "q": "Thả quả cầu đồng 0,5 kg đã nung tới 100°C vào 2 kg nước ở 20°C. Tính nhiệt độ khi cân bằng (°C), bỏ qua hao phí. (c đồng = 380, c nước = 4 200.)",
    "hint": "Đồng tỏa nhiệt: Δt = 100 − t. Nước thu nhiệt: Δt = t − 20.",
    "sol": "0,5 × 380 × (100 − t) = 2 × 4 200 × (t − 20)<br>190(100 − t) = 8 400(t − 20)<br>19 000 + 168 000 = 8 590t ⇒ t ≈ <b>21,8°C</b>.<br>Nước chỉ ấm lên chưa tới 2°C, vì đồng có nhiệt dung riêng nhỏ. Kiểm chứng trong thí nghiệm ảo!",
    "ans": 21.8,
    "unit": "°C",
    "tol": 0.15,
    "d": "Cân bằng nhiệt hai vật"
   },
   {
    "lv": 3,
    "t": "Pha nước tắm",
    "q": "Cần 100 lít nước ở 35°C. Có sẵn nước lạnh ở 15°C và nước sôi ở 100°C. Cần bao nhiêu lít nước sôi?",
    "hint": "Gọi lượng nước lạnh là m₁, nước sôi là m₂. Có hai phương trình: m₁ + m₂ = 100 và phương trình cân bằng nhiệt.",
    "sol": "m₂·(100 − 35) = m₁·(35 − 15) ⇒ 65m₂ = 20m₁.<br>Thay m₁ = 100 − m₂: 65m₂ = 2 000 − 20m₂ ⇒ m₂ = 2 000/85 ≈ <b>23,5 lít</b> nước sôi, và khoảng 76,5 lít nước lạnh.",
    "ans": 23.5,
    "unit": "lít",
    "tol": 0.2,
    "d": "Pha trộn"
   },
   {
    "lv": 3,
    "t": "Đây là kim loại gì?",
    "q": "Thả miếng kim loại 0,4 kg ở 100°C vào 0,5 kg nước ở 20°C. Khi cân bằng, nhiệt độ là 25°C. Tính nhiệt dung riêng của kim loại (J/kg·K), bỏ qua hao phí.",
    "hint": "Q<sub>thu</sub> của nước tính được ngay. Đặt bằng Q<sub>tỏa</sub> = 0,4 · c · 75.",
    "sol": "Q<sub>thu</sub> = 0,5 × 4 200 × 5 = 10 500 J.<br>Q<sub>tỏa</sub> = 0,4 × c × 75 = 30c.<br>c = 10 500/30 = <b>350 J/kg·K</b>, gần với đồng (380). Kết quả nhỏ hơn thực tế có thể do một phần nhiệt bị thất thoát ra môi trường.",
    "ans": 350,
    "unit": "J/kg·K",
    "tol": 1,
    "d": "Tìm nhiệt dung riêng"
   },
   {
    "d": "Nhiên liệu và hiệu suất",
    "lv": 3,
    "t": "Bếp dầu",
    "q": "Dùng bếp dầu hỏa có hiệu suất 40% để đun sôi 2 kg nước từ 20°C. Cần đốt bao nhiêu gam dầu hỏa? (q = 44·10⁶ J/kg, bỏ qua nhiệt lượng làm nóng ấm.)",
    "hint": "Tính nhiệt lượng nước cần thu, sau đó chia cho hiệu suất để biết dầu phải tỏa ra bao nhiêu.",
    "sol": "Q<sub>ci</sub> = 2 × 4 200 × 80 = 672 000 J.<br>Q<sub>tỏa</sub> = 672 000 / 0,4 = 1 680 000 J.<br>m = 1 680 000 / 44 000 000 ≈ 0,0382 kg ≈ <b>38,2 g</b>.",
    "ans": 38.2,
    "unit": "g",
    "tol": 0.3
   },
   {
    "d": "Cân bằng nhiệt có hao phí",
    "lv": 3,
    "t": "Sắt nóng thả vào nước, có thất thoát",
    "q": "Thả miếng sắt 1 kg ở 120°C vào 2 kg nước ở 20°C. Có 10% nhiệt lượng do sắt tỏa ra bị mất ra môi trường. Tính nhiệt độ khi cân bằng (°C). (c sắt = 460, c nước = 4 200.)",
    "hint": "Nước chỉ nhận được 90% nhiệt lượng sắt tỏa ra: 0,9·Q<sub>tỏa</sub> = Q<sub>thu</sub>.",
    "sol": "0,9 × 1 × 460 × (120 − t) = 2 × 4 200 × (t − 20)<br>414(120 − t) = 8 400(t − 20)<br>49 680 + 168 000 = 8 814t ⇒ t ≈ <b>24,7°C</b>.<br>(Không có hao phí thì t ≈ 25,2°C.)",
    "ans": 24.7,
    "unit": "°C",
    "tol": 0.1
   },
   {
    "d": "Rót qua rót lại",
    "lv": 3,
    "t": "Hai bình nước",
    "q": "Bình 1 chứa 2 kg nước ở 20°C, bình 2 chứa 4 kg nước ở 60°C. Rót 1 kg nước từ bình 2 sang bình 1, chờ cân bằng. Sau đó rót 1 kg nước từ bình 1 trở lại bình 2, chờ cân bằng. Nhiệt độ cuối cùng của bình 2 là bao nhiêu °C? (Bỏ qua hao phí.)",
    "hint": "Làm từng lần rót. Với cùng một chất là nước: t = (m₁t₁ + m₂t₂)/(m₁ + m₂).",
    "sol": "Lần 1: bình 1 có 2 kg ở 20°C + 1 kg ở 60°C ⇒ t₁ = (40 + 60)/3 ≈ 33,33°C.<br>Lần 2: bình 2 còn 3 kg ở 60°C, nhận 1 kg ở 33,33°C ⇒ t₂ = (180 + 33,33)/4 ≈ <b>53,3°C</b>.",
    "ans": 53.3,
    "unit": "°C",
    "tol": 0.1
   },
   {
    "d": "Hiện tượng thực tế",
    "lv": 2,
    "t": "Gió biển ban ngày",
    "q": "Vào những ngày hè ở bãi biển, ban ngày gió thường thổi từ biển vào đất liền, còn ban đêm lại thổi từ đất liền ra biển. Hãy giải thích bằng kiến thức về nhiệt dung riêng và đối lưu.",
    "hint": "Cùng nhận nhiệt từ Mặt Trời, đất hay nước nóng lên nhanh hơn? Không khí nóng thì bốc lên hay chìm xuống?",
    "sol": "Đất có nhiệt dung riêng nhỏ hơn nhiều so với nước, nên ban ngày đất nóng lên nhanh hơn biển. Không khí trên đất nóng, nhẹ đi và bốc lên; không khí mát hơn trên biển tràn vào thay chỗ, đó là gió biển.<br>Ban đêm đất nguội nhanh hơn nước, không khí trên biển ấm hơn nên bốc lên, gió thổi từ đất ra biển. Ngư dân xưa lợi dụng gió đất ban đêm để ra khơi và gió biển ban ngày để về bờ.",
    "ans": null
   },
   {
    "d": "Cân bằng nhiệt nhiều vật",
    "lv": 3,
    "t": "Ba chất trộn lẫn",
    "q": "Cho vào một nhiệt lượng kế bằng nhôm 0,2 kg (đang ở 20°C) gồm 0,5 kg nước ở 20°C. Thả vào đó một miếng đồng 0,4 kg ở 150°C. Tính nhiệt độ khi cân bằng (°C). (c nhôm = 880, c nước = 4 200, c đồng = 380.)",
    "hint": "Đồng tỏa nhiệt; cả nhôm và nước cùng thu nhiệt từ 20°C lên t.",
    "sol": "Q<sub>tỏa</sub> = 0,4 × 380 × (150 − t) = 152(150 − t).<br>Q<sub>thu</sub> = (0,2 × 880 + 0,5 × 4 200)(t − 20) = 2 276(t − 20).<br>22 800 − 152t = 2 276t − 45 520 ⇒ 2 428t = 68 320 ⇒ t ≈ <b>28,1°C</b>.",
    "ans": 28.1,
    "unit": "°C",
    "tol": 0.1
   }
  ],
  "published": true,
  "subject": "vat-ly-8"
 }
];
