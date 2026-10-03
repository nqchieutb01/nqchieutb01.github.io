/* Dữ liệu mẫu Toán 8 (Kết nối tri thức) */
window.DEFAULT_DATA = window.DEFAULT_DATA || {};
window.DEFAULT_DATA['toan-8'] = [
 {
  "id": "t1",
  "position": 1,
  "title": "Đa thức",
  "icon": "🧮",
  "lab": "toan_tiles",
  "theory": "<div class=\"sec\"><h3>Đơn thức</h3>\n  <p><span class=\"mark\">Đơn thức</span> là biểu thức chỉ gồm một số, một biến, hoặc một tích giữa các số và các biến. Ví dụ: 5; x; −3x<sup>2</sup>y; ½xy<sup>3</sup>. Còn x + y hay 2/x thì <b>không</b> phải đơn thức.</p>\n  <ul><li><b>Đơn thức thu gọn</b> có dạng: hệ số × phần biến, mỗi biến chỉ viết một lần. Ví dụ −6x<sup>3</sup>y<sup>4</sup>: hệ số −6, phần biến x<sup>3</sup>y<sup>4</sup>.</li>\n  <li><b>Bậc</b> của đơn thức (hệ số khác 0) là <span class=\"mark\">tổng số mũ của tất cả các biến</span>. −6x<sup>3</sup>y<sup>4</sup> có bậc 3 + 4 = 7. Số khác 0 có bậc 0.</li>\n  <li><b>Đơn thức đồng dạng</b>: hệ số khác 0 và có cùng phần biến, như 3x<sup>2</sup>y và −x<sup>2</sup>y. Cộng (trừ) đơn thức đồng dạng: cộng (trừ) hệ số, giữ nguyên phần biến.</li></ul>\n  <div class=\"eg\"><b>Ví dụ.</b> 3x<sup>2</sup>y · (−2xy<sup>3</sup>) = (3 · (−2)) · (x<sup>2</sup> · x) · (y · y<sup>3</sup>) = −6x<sup>3</sup>y<sup>4</sup>.</div>\n </div>\n <div class=\"sec\"><h3>Đa thức và bậc của đa thức</h3>\n  <p><span class=\"mark\">Đa thức</span> là một tổng của những đơn thức. Mỗi đơn thức trong tổng là một <b>hạng tử</b>. Ví dụ x<sup>2</sup>y − 3xy + 5 có ba hạng tử.</p>\n  <ul><li><b>Thu gọn</b> đa thức: cộng các hạng tử đồng dạng với nhau.</li>\n  <li><b>Bậc của đa thức</b> là bậc của hạng tử có bậc cao nhất <u>trong dạng thu gọn</u>.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> phải thu gọn rồi mới tìm bậc. x<sup>5</sup> + 2x<sup>2</sup>y<sup>2</sup> − x<sup>5</sup> + 3x thu gọn thành 2x<sup>2</sup>y<sup>2</sup> + 3x, nên có bậc 4 chứ không phải bậc 5.</div>\n </div>\n <div class=\"sec\"><h3>Cộng, trừ đa thức</h3>\n  <p>Viết các đa thức trong ngoặc, bỏ ngoặc rồi nhóm các hạng tử đồng dạng.</p>\n  <div class=\"fbox\"><span class=\"f\">+(A − B) = A − B</span><span class=\"f\">−(A − B) = −A + B</span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> trước ngoặc là dấu trừ thì <u>mọi</u> hạng tử trong ngoặc đều đổi dấu, không chỉ hạng tử đầu. (2x − 3) − (x − 5) = 2x − 3 − x + 5 = x + 2.</div>\n </div>\n <div class=\"sec\"><h3>Nhân đa thức</h3>\n  <div class=\"fbox\"><span class=\"f\">A(B + C) = AB + AC</span><span class=\"f\">(A + B)(C + D) = AC + AD + BC + BD</span></div>\n  <p>Muốn nhân hai đa thức, em nhân <b>mỗi</b> hạng tử của đa thức này với <b>từng</b> hạng tử của đa thức kia rồi cộng lại. Có thể hình dung bằng <span class=\"mark\">mô hình diện tích</span>: một hình chữ nhật có hai cạnh a + b và c + d được chia thành 4 ô.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Mô hình diện tích của tích (a + b)(c + d)\">\n<rect x=\"40\" y=\"24\" width=\"120\" height=\"80\" fill=\"var(--hl)\" opacity=\".45\"/>\n<rect x=\"160\" y=\"24\" width=\"80\" height=\"80\" fill=\"var(--accent)\" opacity=\".18\"/>\n<rect x=\"40\" y=\"104\" width=\"120\" height=\"50\" fill=\"var(--accent)\" opacity=\".18\"/>\n<rect x=\"160\" y=\"104\" width=\"80\" height=\"50\" fill=\"var(--liquid)\" opacity=\".35\"/>\n<rect x=\"40\" y=\"24\" width=\"200\" height=\"130\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"160\" y1=\"24\" x2=\"160\" y2=\"154\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"104\" x2=\"240\" y2=\"104\" stroke=\"var(--ink)\"/>\n<text x=\"100\" y=\"18\" class=\"svgt\" text-anchor=\"middle\">a</text><text x=\"200\" y=\"18\" class=\"svgt\" text-anchor=\"middle\">b</text>\n<text x=\"30\" y=\"68\" class=\"svgt\" text-anchor=\"middle\">c</text><text x=\"30\" y=\"133\" class=\"svgt\" text-anchor=\"middle\">d</text>\n<text x=\"100\" y=\"68\" class=\"svgt\" text-anchor=\"middle\">ac</text><text x=\"200\" y=\"68\" class=\"svgt\" text-anchor=\"middle\">bc</text>\n<text x=\"100\" y=\"133\" class=\"svgt\" text-anchor=\"middle\">ad</text><text x=\"200\" y=\"133\" class=\"svgt\" text-anchor=\"middle\">bd</text>\n<text x=\"140\" y=\"168\" class=\"svgm\" text-anchor=\"middle\">(a + b)(c + d) = ac + bc + ad + bd</text></svg>\n  <div class=\"eg\"><b>Ví dụ.</b> (x + 2)(x − 3) = x · x − 3x + 2x − 6 = x<sup>2</sup> − x − 6.</div>\n </div>\n <div class=\"sec\"><h3>Chia đa thức cho đơn thức</h3>\n  <div class=\"fbox\"><span class=\"f\">x<sup>m</sup> : x<sup>n</sup> = x<sup>m − n</sup> (m ≥ n)</span><span class=\"f\">(A + B) : C = A : C + B : C</span></div>\n  <ul><li>Đơn thức A <b>chia hết</b> cho đơn thức B (B ≠ 0) khi mỗi biến của B đều có trong A với số mũ không lớn hơn số mũ trong A.</li>\n  <li>Chia đơn thức: chia hệ số cho hệ số, chia lũy thừa từng biến. 12x<sup>4</sup>y<sup>3</sup> : (−4x<sup>2</sup>y) = −3x<sup>2</sup>y<sup>2</sup>.</li>\n  <li>Chia đa thức cho đơn thức: chia <span class=\"mark\">từng hạng tử</span> rồi cộng các kết quả (khi mọi hạng tử đều chia hết).</li></ul>\n </div>\n <div class=\"sec\"><h3>Giá trị của đa thức <span class=\"tag\">Mẹo</span></h3>\n  <p>Muốn tính giá trị, em thay số vào biến. Nhưng <span class=\"mark\">nên thu gọn trước rồi mới thay số</span>: đỡ tính toán và ít nhầm dấu hơn nhiều.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Tính A = (2x − 1)(x + 3) − 2x(x + 2) tại x = 2026. Thu gọn: A = 2x<sup>2</sup> + 5x − 3 − 2x<sup>2</sup> − 4x = x − 3. Vậy A = 2023, không cần bình phương số 2026!</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏫</span>Mở rộng sân, phòng</b>Phòng học dài x m, rộng y m. Nới thêm 2 m chiều dài và 1 m chiều rộng thì diện tích mới là (x + 2)(y + 1) = xy + x + 2y + 2. Phần tăng thêm x + 2y + 2 chính là ba ô mới trong mô hình diện tích.</div>\n   <div class=\"app\"><b><span class=\"ico\">📦</span>Gấp hộp giấy</b>Từ tấm bìa vuông cạnh 30 cm, cắt bốn góc hình vuông cạnh x rồi gấp lên thì được cái hộp có thể tích V = x(30 − 2x)<sup>2</sup>. Đa thức này giúp em thử xem cắt bao nhiêu thì hộp đựng được nhiều nhất.</div>\n   <div class=\"app\"><b><span class=\"ico\">🛒</span>Hoá đơn mua sắm</b>Mua a quyển vở giá 12 nghìn và b cây bút giá 5 nghìn: tổng tiền là 12a + 5b (nghìn đồng). Mỗi món hàng là một hạng tử, rất giống cách cửa hàng tính tiền.</div>\n   <div class=\"app\"><b><span class=\"ico\">📊</span>Công thức trong bảng tính</b>Khi em gõ =B2*C2+D2 trong Excel, máy tính đang tính giá trị của một đa thức với các biến là ô B2, C2, D2. Đổi số trong ô là kết quả tự cập nhật.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧵</span>Cắt vải may khăn</b>Khăn trải bàn hình chữ nhật cạnh (x + 20) cm và (x + 10) cm cần diện tích vải (x + 20)(x + 10) = x<sup>2</sup> + 30x + 200 (cm<sup>2</sup>). Biết x là cạnh mặt bàn, em tính ngay được phải mua bao nhiêu vải.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao (a + b)(c + d) có tới 4 hạng tử chứ không phải 2?</summary>Nhìn mô hình diện tích: hình chữ nhật lớn bị hai đường kẻ chia thành 4 ô ac, bc, ad, bd. Thiếu một ô là thiếu một phần diện tích. Vì vậy ac + bd là sai, phải đủ cả 4 tích.</details>\n  <details class=\"wq\"><summary>Vì sao bậc của 5 là 0 còn đa thức 0 thì “không có bậc”?</summary>5 = 5x<sup>0</sup>, số mũ của biến bằng 0 nên bậc 0. Còn số 0 có thể viết 0x, 0x<sup>2</sup>, 0x<sup>100</sup>… đều đúng, nên không chọn được một bậc cố định.</details>\n  <details class=\"wq\"><summary>Vì sao nên thu gọn trước khi thay số?</summary>Nhiều hạng tử triệt tiêu nhau, biểu thức còn lại rất gọn. Thay số trước thì phải tính những số lớn rồi mới thấy chúng bù trừ hết, vừa lâu vừa dễ sai.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để kéo các cạnh a, b, c, d và xem 4 ô diện tích thay đổi thế nào.</p>\n<div class=\"sec intl\"><h3>Đa thức theo cách nhìn của AoPS <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Trang Art of Problem Solving (AoPS) định nghĩa: <span class=\"mark\">đa thức là tổng của các hạng tử, mỗi hạng tử là một hệ số nhân với các biến có số mũ là số tự nhiên</span>. Bậc của đa thức là số mũ cao nhất xuất hiện.</p><ul><li>4x<sup>2</sup> + 6x − 9 là đa thức bậc 2.</li><li>x<sup>3</sup> + 3x<sup>2</sup>y + 3xy<sup>2</sup> + y<sup>3</sup> là đa thức hai biến, mỗi hạng tử đều có bậc 3.</li><li>Số 35 cũng là một đa thức (đa thức hằng, bậc 0).</li></ul><p>Những biểu thức <b>không</b> phải đa thức: 1/x (biến ở mẫu, giống số mũ âm), √x (số mũ 1/2).</p><p>Một ý rất hay dùng trong các cuộc thi: <span class=\"mark\">mỗi số tự nhiên viết trong hệ thập phân chính là giá trị của một đa thức tại 10</span>. Số có hai chữ số <span style=\"text-decoration:overline\">ab</span> bằng 10a + b; số <span style=\"text-decoration:overline\">abc</span> bằng 100a + 10b + c.</p><div class=\"fbox\"><span class=\"f\"><span style=\"text-decoration:overline\">ab</span> + <span style=\"text-decoration:overline\">ba</span> = (10a + b) + (10b + a) = 11(a + b)</span></div><div class=\"eg\"><b>Ví dụ.</b> 47 + 74 = 11 · (4 + 7) = 121. Em thử với mọi số có hai chữ số: tổng của số đó với số viết ngược luôn chia hết cho 11.</div><div class=\"note\"><b>Mẹo:</b> khi gặp bài \"đảo chữ số\", hãy đặt chữ số là biến rồi viết số thành đa thức. Bài toán số học sẽ thành bài thu gọn đa thức.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> polynomial (đa thức), term (hạng tử), coefficient (hệ số), degree (bậc), constant (hằng số), digit (chữ số)</div><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/Polynomial\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, Polynomial</a> (phỏng dịch)</p></div>",
  "formulas": [
   [
    "Bậc của đơn thức",
    "tổng số mũ của các biến"
   ],
   [
    "Bậc của đa thức",
    "bậc cao nhất của hạng tử (sau khi thu gọn)"
   ],
   [
    "Nhân đơn thức với đa thức",
    "A(B + C) = AB + AC"
   ],
   [
    "Nhân hai đa thức",
    "(A + B)(C + D) = AC + AD + BC + BD"
   ],
   [
    "Luỹ thừa",
    "xᵐ · xⁿ = xᵐ⁺ⁿ;  xᵐ : xⁿ = xᵐ⁻ⁿ (m ≥ n)"
   ],
   [
    "Chia đa thức cho đơn thức",
    "(A + B) : C = A : C + B : C"
   ],
   [
    "Bỏ ngoặc có dấu trừ",
    "−(A − B + C) = −A + B − C"
   ]
  ],
  "quiz": [
   {
    "q": "Bậc của đơn thức −5x<sup>3</sup>y<sup>2</sup>z là:",
    "o": [
     "6",
     "5",
     "3",
     "−5"
    ],
    "why": "Bậc là tổng số mũ các biến: 3 + 2 + 1 = 6 (z có số mũ 1). Hệ số −5 không ảnh hưởng đến bậc."
   },
   {
    "q": "Đơn thức nào đồng dạng với 3x<sup>2</sup>y?",
    "o": [
     "−x<sup>2</sup>y",
     "3xy<sup>2</sup>",
     "3x<sup>2</sup>y<sup>2</sup>",
     "3x<sup>2</sup> + y"
    ],
    "why": "Đồng dạng là cùng phần biến x<sup>2</sup>y; hệ số có thể khác nhau."
   },
   {
    "q": "Bậc của đa thức x<sup>5</sup> + 2x<sup>2</sup>y<sup>2</sup> − x<sup>5</sup> + 3x − 1 là:",
    "o": [
     "4",
     "5",
     "10",
     "2"
    ],
    "why": "Thu gọn: x<sup>5</sup> − x<sup>5</sup> = 0, còn 2x<sup>2</sup>y<sup>2</sup> + 3x − 1. Hạng tử bậc cao nhất 2x<sup>2</sup>y<sup>2</sup> có bậc 4."
   },
   {
    "q": "Kết quả của (2x − 3) − (x − 5) là:",
    "o": [
     "x + 2",
     "x − 8",
     "x + 8",
     "3x − 8"
    ],
    "why": "Bỏ ngoặc có dấu trừ phải đổi dấu cả −5 thành +5: 2x − 3 − x + 5 = x + 2."
   },
   {
    "q": "(x + 2)(x − 3) bằng:",
    "o": [
     "x<sup>2</sup> − x − 6",
     "x<sup>2</sup> − 6",
     "x<sup>2</sup> + x − 6",
     "x<sup>2</sup> − 5x − 6"
    ],
    "why": "x · x − 3x + 2x − 6 = x<sup>2</sup> − x − 6. Đừng quên hai tích chéo −3x và 2x."
   },
   {
    "q": "12x<sup>4</sup>y<sup>3</sup> : (−4x<sup>2</sup>y) bằng:",
    "o": [
     "−3x<sup>2</sup>y<sup>2</sup>",
     "3x<sup>2</sup>y<sup>2</sup>",
     "−3x<sup>2</sup>y<sup>3</sup>",
     "−8x<sup>2</sup>y<sup>2</sup>"
    ],
    "why": "12 : (−4) = −3; x<sup>4</sup> : x<sup>2</sup> = x<sup>2</sup>; y<sup>3</sup> : y = y<sup>2</sup>."
   },
   {
    "q": "Mảnh vườn hình chữ nhật dài (x + 3) m, rộng (x + 2) m. Diện tích mảnh vườn là:",
    "o": [
     "x<sup>2</sup> + 5x + 6 (m<sup>2</sup>)",
     "x<sup>2</sup> + 6 (m<sup>2</sup>)",
     "2x + 5 (m<sup>2</sup>)",
     "x<sup>2</sup> + 6x + 5 (m<sup>2</sup>)"
    ],
    "why": "(x + 3)(x + 2) = x<sup>2</sup> + 2x + 3x + 6 = x<sup>2</sup> + 5x + 6. Đáp án 2x + 5 là nửa chu vi, không phải diện tích."
   },
   {
    "q": "Giá trị của x<sup>2</sup>y − 2xy tại x = −1, y = 2 là:",
    "o": [
     "6",
     "−2",
     "2",
     "−6"
    ],
    "why": "x<sup>2</sup>y = 1 · 2 = 2; −2xy = −2 · (−1) · 2 = 4. Tổng 2 + 4 = 6."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Thu gọn, tính giá trị",
    "t": "Thu gọn trước, thay số sau",
    "q": "Thu gọn đa thức A = 3x<sup>2</sup>y − 2xy<sup>2</sup> + x<sup>2</sup>y + 5xy<sup>2</sup> − 4x<sup>2</sup>y rồi tính giá trị của A tại x = 2, y = −1.",
    "hint": "Gom các hạng tử chứa x<sup>2</sup>y với nhau, các hạng tử chứa xy<sup>2</sup> với nhau.",
    "sol": "Nhóm hạng tử đồng dạng:<br>(3x<sup>2</sup>y + x<sup>2</sup>y − 4x<sup>2</sup>y) + (−2xy<sup>2</sup> + 5xy<sup>2</sup>) = 0 + 3xy<sup>2</sup>.<br>Vậy A = 3xy<sup>2</sup>.<br>Tại x = 2, y = −1: A = 3 · 2 · (−1)<sup>2</sup> = <b>6</b>.",
    "ans": 6,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 1,
    "d": "Nhân, chia đa thức",
    "t": "Số năm nay",
    "q": "Rút gọn B = (2x − 1)(x + 3) − 2x(x + 2) rồi tính giá trị của B tại x = 2026.",
    "hint": "Nhân phá ngoặc từng tích, cẩn thận dấu trừ trước 2x(x + 2).",
    "sol": "(2x − 1)(x + 3) = 2x<sup>2</sup> + 6x − x − 3 = 2x<sup>2</sup> + 5x − 3.<br>2x(x + 2) = 2x<sup>2</sup> + 4x.<br>B = 2x<sup>2</sup> + 5x − 3 − 2x<sup>2</sup> − 4x = x − 3.<br>Tại x = 2026: B = <b>2023</b>.",
    "ans": 2023,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Bài toán thực tế",
    "t": "Gấp hộp không nắp",
    "q": "Từ một tấm bìa hình vuông cạnh 30 cm, bạn Mai cắt ở bốn góc bốn hình vuông bằng nhau cạnh x cm rồi gấp lên thành một cái hộp không nắp.<br>a) Viết đa thức V(x) biểu thị thể tích hộp (dạng thu gọn).<br>b) Tính thể tích hộp khi x = 5 (cm<sup>3</sup>).",
    "hint": "Đáy hộp là hình vuông cạnh 30 − 2x, chiều cao hộp là x.",
    "sol": "a) Đáy hộp là hình vuông cạnh (30 − 2x) cm, chiều cao x cm.<br>V(x) = x(30 − 2x)(30 − 2x) = x(900 − 120x + 4x<sup>2</sup>) = 4x<sup>3</sup> − 120x<sup>2</sup> + 900x.<br>b) V(5) = 4 · 125 − 120 · 25 + 900 · 5 = 500 − 3 000 + 4 500 = <b>2 000 cm<sup>3</sup></b>.<br>Kiểm tra: đáy 20 × 20, cao 5: 20 · 20 · 5 = 2 000 ✓.",
    "ans": 2000,
    "unit": "cm³",
    "tol": 0.5
   },
   {
    "lv": 2,
    "d": "Bài toán thực tế",
    "t": "Nới rộng phòng học",
    "q": "Phòng học hình chữ nhật dài x m, rộng y m. Nhà trường nới chiều dài thêm 2 m và chiều rộng thêm 1 m.<br>a) Viết đa thức biểu thị phần diện tích tăng thêm.<br>b) Tính phần diện tích tăng thêm khi x = 8, y = 6 (m<sup>2</sup>).",
    "hint": "Diện tích mới trừ diện tích cũ. Vẽ mô hình diện tích sẽ thấy 3 ô mới.",
    "sol": "a) Diện tích mới: (x + 2)(y + 1) = xy + x + 2y + 2.<br>Phần tăng thêm: (xy + x + 2y + 2) − xy = x + 2y + 2.<br>b) Với x = 8, y = 6: 8 + 12 + 2 = <b>22 m<sup>2</sup></b>.<br>Trên mô hình diện tích: ô x · 1, ô 2 · y và ô nhỏ 2 · 1.",
    "ans": 22,
    "unit": "m²",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Nhân, chia đa thức",
    "t": "Chia đa thức cho đơn thức",
    "q": "Thực hiện phép chia (12x<sup>4</sup>y<sup>3</sup> − 8x<sup>3</sup>y<sup>2</sup> + 4x<sup>2</sup>y<sup>2</sup>) : 4x<sup>2</sup>y<sup>2</sup>, sau đó tính giá trị của thương tại x = −1, y = 2.",
    "hint": "Chia lần lượt từng hạng tử cho 4x<sup>2</sup>y<sup>2</sup>.",
    "sol": "12x<sup>4</sup>y<sup>3</sup> : 4x<sup>2</sup>y<sup>2</sup> = 3x<sup>2</sup>y<br>−8x<sup>3</sup>y<sup>2</sup> : 4x<sup>2</sup>y<sup>2</sup> = −2x<br>4x<sup>2</sup>y<sup>2</sup> : 4x<sup>2</sup>y<sup>2</sup> = 1<br>Thương: 3x<sup>2</sup>y − 2x + 1.<br>Tại x = −1, y = 2: 3 · 1 · 2 − 2 · (−1) + 1 = 6 + 2 + 1 = <b>9</b>.",
    "ans": 9,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Thu gọn, tính giá trị",
    "t": "Không phụ thuộc vào x",
    "q": "Chứng minh giá trị của biểu thức C = (x − 5)(2x + 3) − 2x(x − 3) + x + 7 không phụ thuộc vào x. Giá trị đó bằng bao nhiêu?",
    "hint": "Rút gọn C. Nếu mọi hạng tử chứa x đều triệt tiêu thì C là một hằng số.",
    "sol": "(x − 5)(2x + 3) = 2x<sup>2</sup> + 3x − 10x − 15 = 2x<sup>2</sup> − 7x − 15.<br>−2x(x − 3) = −2x<sup>2</sup> + 6x.<br>C = 2x<sup>2</sup> − 7x − 15 − 2x<sup>2</sup> + 6x + x + 7 = (−7 + 6 + 1)x − 8 = <b>−8</b>.<br>C luôn bằng −8 với mọi x, nên không phụ thuộc vào x.",
    "ans": -8,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 3,
    "d": "Nâng cao",
    "t": "Mẹo thay 100 = x + 1",
    "q": "Tính giá trị của A = x<sup>5</sup> − 100x<sup>4</sup> + 100x<sup>3</sup> − 100x<sup>2</sup> + 100x − 9 tại x = 99. (Đề thi học sinh giỏi.)",
    "hint": "Với x = 99 thì 100 = x + 1. Thay mọi số 100 bằng x + 1 rồi thu gọn.",
    "sol": "Vì x = 99 nên 100 = x + 1. Ta có:<br>A = x<sup>5</sup> − (x + 1)x<sup>4</sup> + (x + 1)x<sup>3</sup> − (x + 1)x<sup>2</sup> + (x + 1)x − 9<br>= x<sup>5</sup> − x<sup>5</sup> − x<sup>4</sup> + x<sup>4</sup> + x<sup>3</sup> − x<sup>3</sup> − x<sup>2</sup> + x<sup>2</sup> + x − 9<br>= x − 9 = 99 − 9 = <b>90</b>.",
    "ans": 90,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 3,
    "d": "Nâng cao",
    "t": "Luôn chia hết cho 10",
    "q": "Chứng minh rằng với mọi số nguyên n, biểu thức P = (n<sup>2</sup> + 3n − 1)(n + 2) − n<sup>3</sup> + 2 luôn chia hết cho 10.",
    "hint": "Rút gọn P, đặt nhân tử chung. Tích hai số nguyên liên tiếp luôn chia hết cho 2.",
    "sol": "(n<sup>2</sup> + 3n − 1)(n + 2) = n<sup>3</sup> + 2n<sup>2</sup> + 3n<sup>2</sup> + 6n − n − 2 = n<sup>3</sup> + 5n<sup>2</sup> + 5n − 2.<br>P = n<sup>3</sup> + 5n<sup>2</sup> + 5n − 2 − n<sup>3</sup> + 2 = 5n<sup>2</sup> + 5n = 5n(n + 1).<br>n và n + 1 là hai số nguyên liên tiếp nên có một số chẵn, suy ra n(n + 1) chia hết cho 2.<br>Do đó P = 5 · n(n + 1) chia hết cho 5 · 2 = <b>10</b>.<br>Thử: n = 3 ⇒ P = 5 · 3 · 4 = 60 ✓.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Cộng với số đảo ngược (2016 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Có bao nhiêu số có hai chữ số mà khi cộng số đó với số nhận được bằng cách viết ngược thứ tự các chữ số thì được tổng bằng 132?<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2016_AMC_8_Problems/Problem_11\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2016 AMC 8 Problem 11</a> (phỏng dịch)</p>",
    "hint": "Viết số là 10a + b (a từ 1 đến 9, b từ 0 đến 9). Số viết ngược là 10b + a. Thu gọn tổng.",
    "sol": "Tổng: (10a + b) + (10b + a) = 11a + 11b = 11(a + b).<br>11(a + b) = 132 ⇒ a + b = 12.<br>Với a, b là chữ số (1 ≤ a ≤ 9, 0 ≤ b ≤ 9), các cặp (a; b) là (3; 9), (4; 8), (5; 7), (6; 6), (7; 5), (8; 4), (9; 3).<br>(a = 1 hay 2 thì b = 11, 10, không phải chữ số.)<br>Vậy có <b>7 số</b>: 39, 48, 57, 66, 75, 84, 93.",
    "ans": 7,
    "unit": "số",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Dãy tích các đơn thức (2023 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Một dãy số nguyên dương có tính chất: kể từ số hạng thứ ba, mỗi số hạng bằng tích của hai số hạng đứng ngay trước nó. Số hạng thứ sáu là 4000. Tìm số hạng đầu tiên.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2023_AMC_8_Problems/Problem_22\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2023 AMC 8 Problem 22</a> (phỏng dịch)</p>",
    "hint": "Gọi hai số hạng đầu là A và B. Viết các số hạng tiếp theo thành đơn thức của A và B, nhớ quy tắc nhân đơn thức: cộng số mũ của cùng một biến.",
    "sol": "Gọi số hạng 1, 2 là A, B. Ta có:<br>số hạng 3: AB; số hạng 4: B · AB = AB<sup>2</sup>; số hạng 5: AB · AB<sup>2</sup> = A<sup>2</sup>B<sup>3</sup>;<br>số hạng 6: AB<sup>2</sup> · A<sup>2</sup>B<sup>3</sup> = A<sup>3</sup>B<sup>5</sup>.<br>Phân tích 4000 = 2<sup>5</sup> · 5<sup>3</sup>. Vì B<sup>5</sup> là ước của 2<sup>5</sup> · 5<sup>3</sup> nên B = 1 hoặc B = 2.<br>B = 1 ⇒ A<sup>3</sup> = 4000, không có A nguyên (15<sup>3</sup> = 3375, 16<sup>3</sup> = 4096). B = 2 ⇒ A<sup>3</sup> = 4000 : 32 = 125 ⇒ A = 5.<br>Dãy: 5, 2, 10, 20, 200, 4000. Số hạng đầu là <b>5</b>.",
    "ans": 5,
    "unit": "",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t2",
  "position": 2,
  "title": "Hằng đẳng thức đáng nhớ và phân tích đa thức thành nhân tử",
  "icon": "✨",
  "lab": "toan_square",
  "theory": "<div class=\"sec\"><h3>Bình phương của một tổng, một hiệu</h3>\n  <div class=\"fbox\"><span class=\"f\">(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup></span><span class=\"f\">(A − B)<sup>2</sup> = A<sup>2</sup> − 2AB + B<sup>2</sup></span></div>\n  <p>Hình vuông cạnh a + b được chia thành một hình vuông a<sup>2</sup>, một hình vuông b<sup>2</sup> và <span class=\"mark\">hai</span> hình chữ nhật ab. Đó là lý do có số 2 trong 2ab.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Hình vuông (a + b) bình phương chia thành a bình phương, hai hình chữ nhật ab, b bình phương; và hình a bình phương trừ b bình phương\">\n<rect x=\"20\" y=\"22\" width=\"80\" height=\"80\" fill=\"var(--hl)\" opacity=\".45\"/>\n<rect x=\"100\" y=\"22\" width=\"45\" height=\"80\" fill=\"var(--accent)\" opacity=\".2\"/>\n<rect x=\"20\" y=\"102\" width=\"80\" height=\"45\" fill=\"var(--accent)\" opacity=\".2\"/>\n<rect x=\"100\" y=\"102\" width=\"45\" height=\"45\" fill=\"var(--liquid)\" opacity=\".4\"/>\n<rect x=\"20\" y=\"22\" width=\"125\" height=\"125\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"100\" y1=\"22\" x2=\"100\" y2=\"147\" stroke=\"var(--ink)\"/><line x1=\"20\" y1=\"102\" x2=\"145\" y2=\"102\" stroke=\"var(--ink)\"/>\n<text x=\"60\" y=\"16\" class=\"svgt\" text-anchor=\"middle\">a</text><text x=\"122\" y=\"16\" class=\"svgt\" text-anchor=\"middle\">b</text>\n<text x=\"12\" y=\"66\" class=\"svgt\" text-anchor=\"middle\">a</text><text x=\"12\" y=\"128\" class=\"svgt\" text-anchor=\"middle\">b</text>\n<text x=\"60\" y=\"66\" class=\"svgt\" text-anchor=\"middle\">a²</text><text x=\"122\" y=\"66\" class=\"svgt\" text-anchor=\"middle\">ab</text>\n<text x=\"60\" y=\"128\" class=\"svgt\" text-anchor=\"middle\">ab</text><text x=\"122\" y=\"128\" class=\"svgt\" text-anchor=\"middle\">b²</text>\n<text x=\"82\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">(a + b)² = a² + 2ab + b²</text>\n<path d=\"M165 22 H265 V82 H225 V122 H165 Z\" fill=\"var(--accent)\" fill-opacity=\".25\" stroke=\"var(--ink)\"/>\n<rect x=\"225\" y=\"82\" width=\"40\" height=\"40\" fill=\"none\" stroke=\"var(--muted)\" stroke-dasharray=\"3 3\"/>\n<text x=\"215\" y=\"16\" class=\"svgt\" text-anchor=\"middle\">a</text><text x=\"272\" y=\"106\" class=\"svgt\">b</text>\n<text x=\"245\" y=\"106\" class=\"svgm\" text-anchor=\"middle\">b²</text>\n<text x=\"215\" y=\"140\" class=\"svgm\" text-anchor=\"middle\">phần tô: a² − b²</text>\n<text x=\"215\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">= (a − b)(a + b)</text></svg>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> (a + b)<sup>2</sup> ≠ a<sup>2</sup> + b<sup>2</sup>. Thử a = b = 1: (1 + 1)<sup>2</sup> = 4 còn 1<sup>2</sup> + 1<sup>2</sup> = 2. Thiếu mất hai ô ab!</div>\n </div>\n <div class=\"sec\"><h3>Hiệu hai bình phương</h3>\n  <div class=\"fbox\"><span class=\"f\">A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B)</span></div>\n  <p>Cắt bỏ góc b<sup>2</sup> khỏi hình vuông a<sup>2</sup>, phần còn lại ghép lại được hình chữ nhật cạnh (a − b) và (a + b).</p>\n  <div class=\"eg\"><b>Ví dụ (tính nhẩm).</b> 51 · 49 = (50 + 1)(50 − 1) = 2 500 − 1 = 2 499.<br>99<sup>2</sup> = (100 − 1)<sup>2</sup> = 10 000 − 200 + 1 = 9 801.<br>Số tận cùng bằng 5: 65<sup>2</sup> = 6 · 7 trăm + 25 = 4 225 (vì (10a + 5)<sup>2</sup> = 100a(a + 1) + 25).</div>\n </div>\n <div class=\"sec\"><h3>Lập phương của một tổng, một hiệu</h3>\n  <div class=\"fbox\"><span class=\"f\">(A + B)<sup>3</sup> = A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup></span><span class=\"f\">(A − B)<sup>3</sup> = A<sup>3</sup> − 3A<sup>2</sup>B + 3AB<sup>2</sup> − B<sup>3</sup></span></div>\n  <p class=\"muted\">Mẹo nhớ: hệ số 1, 3, 3, 1; số mũ của A giảm dần 3, 2, 1, 0, số mũ của B tăng dần 0, 1, 2, 3. Với hiệu thì dấu đan xen +, −, +, −.</p>\n </div>\n <div class=\"sec\"><h3>Tổng và hiệu hai lập phương</h3>\n  <div class=\"fbox\"><span class=\"f\">A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>)</span><span class=\"f\">A<sup>3</sup> − B<sup>3</sup> = (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>)</span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> trong ngoặc thứ hai là <b>−AB</b> hoặc <b>+AB</b> (không có số 2), nên A<sup>2</sup> − AB + B<sup>2</sup> không phải là (A − B)<sup>2</sup>.</div>\n  <div class=\"tbl\"><table><tr><th>7 hằng đẳng thức</th><th>Ví dụ với x và 2</th></tr>\n  <tr><td>(A + B)<sup>2</sup></td><td>(x + 2)<sup>2</sup> = x<sup>2</sup> + 4x + 4</td></tr>\n  <tr><td>(A − B)<sup>2</sup></td><td>(x − 2)<sup>2</sup> = x<sup>2</sup> − 4x + 4</td></tr>\n  <tr><td>A<sup>2</sup> − B<sup>2</sup></td><td>x<sup>2</sup> − 4 = (x − 2)(x + 2)</td></tr>\n  <tr><td>(A + B)<sup>3</sup></td><td>(x + 2)<sup>3</sup> = x<sup>3</sup> + 6x<sup>2</sup> + 12x + 8</td></tr>\n  <tr><td>(A − B)<sup>3</sup></td><td>(x − 2)<sup>3</sup> = x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8</td></tr>\n  <tr><td>A<sup>3</sup> + B<sup>3</sup></td><td>x<sup>3</sup> + 8 = (x + 2)(x<sup>2</sup> − 2x + 4)</td></tr>\n  <tr><td>A<sup>3</sup> − B<sup>3</sup></td><td>x<sup>3</sup> − 8 = (x − 2)(x<sup>2</sup> + 2x + 4)</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Phân tích đa thức thành nhân tử</h3>\n  <p>Là viết đa thức thành <span class=\"mark\">một tích</span> của những đa thức. Các cách thường dùng (nên thử theo thứ tự):</p>\n  <ul><li><b>Đặt nhân tử chung:</b> 3x<sup>2</sup> − 6x = 3x(x − 2).</li>\n  <li><b>Dùng hằng đẳng thức:</b> x<sup>2</sup> − 10x + 25 = (x − 5)<sup>2</sup>; 4x<sup>2</sup> − 9 = (2x − 3)(2x + 3).</li>\n  <li><b>Nhóm hạng tử:</b> x<sup>2</sup> − xy + 2x − 2y = x(x − y) + 2(x − y) = (x − y)(x + 2).</li>\n  <li><b>Tách hạng tử</b> <span class=\"tag\">Nâng cao</span>: x<sup>2</sup> − 5x + 6 = x<sup>2</sup> − 2x − 3x + 6 = (x − 2)(x − 3).</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> phân tích phải <u>triệt để</u>. x<sup>3</sup> − x = x(x<sup>2</sup> − 1) chưa xong, phải viết tiếp x(x − 1)(x + 1).</div>\n </div>\n <div class=\"sec\"><h3>Tìm giá trị nhỏ nhất, lớn nhất <span class=\"tag\">Nâng cao</span></h3>\n  <p>Ý chính: <span class=\"mark\">bình phương luôn không âm</span>, (…)<sup>2</sup> ≥ 0. Ta “gom” biểu thức thành bình phương cộng một hằng số.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> A = x<sup>2</sup> − 6x + 10 = (x<sup>2</sup> − 6x + 9) + 1 = (x − 3)<sup>2</sup> + 1 ≥ 1. A nhỏ nhất bằng 1 khi x = 3.<br>B = −x<sup>2</sup> + 4x = −(x − 2)<sup>2</sup> + 4 ≤ 4. B lớn nhất bằng 4 khi x = 2.</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🧾</span>Tính nhẩm ở chợ</b>Mua 49 hộp sữa giá 51 nghìn: 49 · 51 = 50<sup>2</sup> − 1 = 2 499 nghìn đồng. Hiệu hai bình phương giúp em nhẩm nhanh hơn bấm máy.</div>\n   <div class=\"app\"><b><span class=\"ico\">🖼️</span>Làm khung ảnh</b>Bức tranh vuông cạnh a, viền rộng x. Diện tích viền là (a + 2x)<sup>2</sup> − a<sup>2</sup> = 4ax + 4x<sup>2</sup>. Biết bao nhiêu gỗ ốp viền là tính ngược ra x được.</div>\n   <div class=\"app\"><b><span class=\"ico\">✂️</span>Cắt ghép giấy</b>Lấy tờ giấy vuông, cắt bỏ một hình vuông nhỏ ở góc rồi cắt dọc phần còn lại, ghép thành hình chữ nhật. Em vừa “chứng minh” a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b) bằng kéo!</div>\n   <div class=\"app\"><b><span class=\"ico\">🌱</span>Rào vườn được rộng nhất</b>Có 40 m lưới rào một mảnh vườn hình chữ nhật cạnh x và 20 − x. Diện tích x(20 − x) = 100 − (x − 10)<sup>2</sup> ≤ 100, lớn nhất khi x = 10: rào thành hình vuông là lời nhất.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍰</span>Bánh tầng</b>Bánh hình lập phương cạnh 10 cm cắt đều mỗi chiều thành phần 7 cm và 3 cm được 8 khối: 1 khối 7³, 3 khối 7²·3, 3 khối 7·3², 1 khối 3³. Đó chính là (7 + 3)³.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao 25<sup>2</sup> = 625, 35<sup>2</sup> = 1 225 nhẩm được ngay?</summary>(10a + 5)<sup>2</sup> = 100a<sup>2</sup> + 100a + 25 = 100 · a(a + 1) + 25. Với 35: a = 3, 3 · 4 = 12, viết thêm 25 được 1 225.</details>\n  <details class=\"wq\"><summary>Vì sao trong các hình chữ nhật cùng chu vi, hình vuông có diện tích lớn nhất?</summary>Hai cạnh là m + t và m − t (m là nửa tổng hai cạnh). Diện tích (m + t)(m − t) = m<sup>2</sup> − t<sup>2</sup>, lớn nhất khi t = 0, tức hai cạnh bằng nhau.</details>\n  <details class=\"wq\"><summary>Phân tích thành nhân tử để làm gì?</summary>Tích bằng 0 khi một thừa số bằng 0, nên giải phương trình rất nhanh. Phân tích còn giúp rút gọn phân thức (chương sau) và chứng minh chia hết.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để kéo a, b và xem các mảnh a², 2ab, b² ghép thành (a + b)².</p>\n<div class=\"sec intl\"><h3>Hiệu hai bình phương (Difference of squares) <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>AoPS gọi đây là một trong những phép phân tích nhân tử quan trọng nhất:</p><div class=\"fbox\"><span class=\"f\">a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b)</span></div><p>Công thức đúng vì phép nhân có <b>tính phân phối</b> và <b>tính giao hoán</b>: (a + b)(a − b) = a<sup>2</sup> − ab + ba − b<sup>2</sup>, mà ab = ba nên hai hạng tử giữa triệt tiêu. Vì vậy nó dùng được cho số nguyên, số thực và cả đa thức.</p><p><span class=\"mark\">Mẹo tính nhẩm kiểu Anh, Mỹ</span>: nhân hai số \"cách đều\" một số tròn.</p><div class=\"eg\"><b>Ví dụ.</b> 49 · 51 = (50 − 1)(50 + 1) = 2500 − 1 = 2499.<br>1002<sup>2</sup> − 998<sup>2</sup> = (1002 + 998)(1002 − 998) = 2000 · 4 = 8000.</div><p>Dùng hai lần còn tách được bậc 4: x<sup>4</sup> − y<sup>4</sup> = (x<sup>2</sup> − y<sup>2</sup>)(x<sup>2</sup> + y<sup>2</sup>) = (x − y)(x + y)(x<sup>2</sup> + y<sup>2</sup>).</p><div class=\"note\"><b>Lưu ý:</b> AoPS nhắc rằng với những phép nhân không giao hoán (như ma trận, em sẽ học ở đại học) thì công thức này không còn đúng. Còn a<sup>2</sup> + b<sup>2</sup> thì không tách được thành tích như vậy.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> difference of squares (hiệu hai bình phương), factor (phân tích nhân tử), identity (hằng đẳng thức), distributive property (tính phân phối), commutative (giao hoán)</div><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/Difference_of_squares\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, Difference of squares</a> (phỏng dịch, có bổ sung ví dụ)</p></div>",
  "formulas": [
   [
    "Bình phương một tổng",
    "(A + B)² = A² + 2AB + B²"
   ],
   [
    "Bình phương một hiệu",
    "(A − B)² = A² − 2AB + B²"
   ],
   [
    "Hiệu hai bình phương",
    "A² − B² = (A − B)(A + B)"
   ],
   [
    "Lập phương một tổng",
    "(A + B)³ = A³ + 3A²B + 3AB² + B³"
   ],
   [
    "Lập phương một hiệu",
    "(A − B)³ = A³ − 3A²B + 3AB² − B³"
   ],
   [
    "Tổng hai lập phương",
    "A³ + B³ = (A + B)(A² − AB + B²)"
   ],
   [
    "Hiệu hai lập phương",
    "A³ − B³ = (A − B)(A² + AB + B²)"
   ],
   [
    "Tìm GTNN",
    "(x − a)² + m ≥ m, dấu bằng khi x = a"
   ]
  ],
  "quiz": [
   {
    "q": "(x + 3)<sup>2</sup> bằng:",
    "o": [
     "x<sup>2</sup> + 6x + 9",
     "x<sup>2</sup> + 9",
     "x<sup>2</sup> + 3x + 9",
     "x<sup>2</sup> + 6x + 6"
    ],
    "why": "(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup> với A = x, B = 3: x<sup>2</sup> + 6x + 9."
   },
   {
    "q": "Tính nhẩm 99<sup>2</sup>:",
    "o": [
     "9 801",
     "9 901",
     "9 701",
     "9 811"
    ],
    "why": "(100 − 1)<sup>2</sup> = 10 000 − 200 + 1 = 9 801."
   },
   {
    "q": "x<sup>2</sup> − 16 phân tích thành:",
    "o": [
     "(x − 4)(x + 4)",
     "(x − 4)<sup>2</sup>",
     "(x − 8)(x + 8)",
     "(x − 16)(x + 1)"
    ],
    "why": "Hiệu hai bình phương: x<sup>2</sup> − 4<sup>2</sup> = (x − 4)(x + 4)."
   },
   {
    "q": "(a − b)<sup>3</sup> bằng:",
    "o": [
     "a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup>",
     "a<sup>3</sup> − b<sup>3</sup>",
     "a<sup>3</sup> − 3a<sup>2</sup>b − 3ab<sup>2</sup> − b<sup>3</sup>",
     "a<sup>3</sup> + 3a<sup>2</sup>b − 3ab<sup>2</sup> − b<sup>3</sup>"
    ],
    "why": "Dấu đan xen +, −, +, − và hệ số 1, 3, 3, 1."
   },
   {
    "q": "x<sup>3</sup> + 8 bằng:",
    "o": [
     "(x + 2)(x<sup>2</sup> − 2x + 4)",
     "(x + 2)(x<sup>2</sup> + 2x + 4)",
     "(x + 2)<sup>3</sup>",
     "(x + 2)(x<sup>2</sup> − 4x + 4)"
    ],
    "why": "A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>) với A = x, B = 2."
   },
   {
    "q": "Giá trị nhỏ nhất của x<sup>2</sup> − 4x + 7 là:",
    "o": [
     "3",
     "7",
     "2",
     "−4"
    ],
    "why": "x<sup>2</sup> − 4x + 7 = (x − 2)<sup>2</sup> + 3 ≥ 3, dấu bằng khi x = 2. Chú ý: 2 là giá trị của x, còn GTNN của biểu thức là 3."
   },
   {
    "q": "Phân tích 3x<sup>2</sup> − 6x thành nhân tử được:",
    "o": [
     "3x(x − 2)",
     "3x(x − 6)",
     "3x<sup>2</sup>(1 − 2x)",
     "3(x<sup>2</sup> − 2)"
    ],
    "why": "Nhân tử chung là 3x: 3x · x − 3x · 2 = 3x(x − 2)."
   },
   {
    "q": "Tính nhẩm 51 · 49:",
    "o": [
     "2 499",
     "2 501",
     "2 449",
     "2 399"
    ],
    "why": "(50 + 1)(50 − 1) = 50<sup>2</sup> − 1 = 2 499."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Tính nhanh",
    "t": "Nhẩm bằng hằng đẳng thức",
    "q": "Tính nhanh: 103<sup>2</sup> − 97<sup>2</sup>.",
    "hint": "Đừng bình phương từng số. Dùng A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B).",
    "sol": "103<sup>2</sup> − 97<sup>2</sup> = (103 − 97)(103 + 97) = 6 · 200 = <b>1 200</b>.",
    "ans": 1200,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 1,
    "d": "Phân tích nhân tử",
    "t": "Ba hằng đẳng thức quen thuộc",
    "q": "Phân tích thành nhân tử:<br>a) x<sup>2</sup> − 10x + 25<br>b) 4x<sup>2</sup> − 9y<sup>2</sup><br>c) x<sup>3</sup> − 27",
    "hint": "a) có dạng A<sup>2</sup> − 2AB + B<sup>2</sup>. b) (2x)<sup>2</sup> − (3y)<sup>2</sup>. c) 27 = 3<sup>3</sup>.",
    "sol": "a) x<sup>2</sup> − 2 · x · 5 + 5<sup>2</sup> = <b>(x − 5)<sup>2</sup></b>.<br>b) (2x)<sup>2</sup> − (3y)<sup>2</sup> = <b>(2x − 3y)(2x + 3y)</b>.<br>c) x<sup>3</sup> − 3<sup>3</sup> = <b>(x − 3)(x<sup>2</sup> + 3x + 9)</b>.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "d": "Tìm x",
    "t": "Tìm x nhờ hằng đẳng thức",
    "q": "Tìm x, biết: (x + 2)<sup>2</sup> − (x − 2)(x + 2) = 16.",
    "hint": "Khai triển hai vế bằng hằng đẳng thức, các số hạng x<sup>2</sup> sẽ triệt tiêu.",
    "sol": "(x + 2)<sup>2</sup> = x<sup>2</sup> + 4x + 4; (x − 2)(x + 2) = x<sup>2</sup> − 4.<br>Ta có: x<sup>2</sup> + 4x + 4 − x<sup>2</sup> + 4 = 16<br>4x + 8 = 16<br>4x = 8 ⇒ <b>x = 2</b>.",
    "ans": 2,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Phân tích nhân tử",
    "t": "Phối hợp nhiều phương pháp",
    "q": "Phân tích thành nhân tử:<br>a) x<sup>2</sup> − 2xy + y<sup>2</sup> − 9<br>b) x<sup>3</sup> + 2x<sup>2</sup> + x<br>c) x<sup>2</sup> − 5x + 6",
    "hint": "a) Nhóm ba hạng tử đầu. b) Đặt x ra ngoài trước. c) Tách −5x = −2x − 3x.",
    "sol": "a) (x<sup>2</sup> − 2xy + y<sup>2</sup>) − 9 = (x − y)<sup>2</sup> − 3<sup>2</sup> = <b>(x − y − 3)(x − y + 3)</b>.<br>b) x(x<sup>2</sup> + 2x + 1) = <b>x(x + 1)<sup>2</sup></b>.<br>c) x<sup>2</sup> − 2x − 3x + 6 = x(x − 2) − 3(x − 2) = <b>(x − 2)(x − 3)</b>.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "d": "Tìm x",
    "t": "Viền khung tranh",
    "q": "Bức tranh thêu hình vuông cạnh 40 cm. Bạn Linh làm một khung gỗ viền xung quanh, rộng đều x cm, khung cũng là hình vuông. Diện tích phần viền là 704 cm<sup>2</sup>. Tìm x (cm).",
    "hint": "Diện tích viền = (40 + 2x)<sup>2</sup> − 40<sup>2</sup>. Đưa về dạng (x + …)<sup>2</sup> = số.",
    "sol": "Cạnh khung ngoài: 40 + 2x. Diện tích viền:<br>(40 + 2x)<sup>2</sup> − 1 600 = 4x<sup>2</sup> + 160x = 704<br>⇒ x<sup>2</sup> + 40x = 176<br>⇒ x<sup>2</sup> + 40x + 400 = 576 ⇒ (x + 20)<sup>2</sup> = 24<sup>2</sup>.<br>Vì x > 0 nên x + 20 = 24 ⇒ <b>x = 4 cm</b>.<br>Kiểm tra: 48<sup>2</sup> − 40<sup>2</sup> = 2 304 − 1 600 = 704 ✓.",
    "ans": 4,
    "unit": "cm",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Tính nhanh",
    "t": "Biết tổng và tích",
    "q": "Cho x + y = 5 và xy = 6. Không tìm x, y, hãy tính x<sup>3</sup> + y<sup>3</sup>.",
    "hint": "x<sup>3</sup> + y<sup>3</sup> = (x + y)<sup>3</sup> − 3xy(x + y).",
    "sol": "Từ (x + y)<sup>3</sup> = x<sup>3</sup> + y<sup>3</sup> + 3xy(x + y) suy ra:<br>x<sup>3</sup> + y<sup>3</sup> = (x + y)<sup>3</sup> − 3xy(x + y) = 125 − 3 · 6 · 5 = 125 − 90 = <b>35</b>.<br>Kiểm tra: x = 2, y = 3 thỏa mãn, 8 + 27 = 35 ✓. (Tương tự x<sup>2</sup> + y<sup>2</sup> = 25 − 12 = 13.)",
    "ans": 35,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 3,
    "d": "GTNN, GTLN",
    "t": "Giá trị nhỏ nhất hai biến",
    "q": "Tìm giá trị nhỏ nhất của A = x<sup>2</sup> − 2xy + 2y<sup>2</sup> + 2x − 10y + 2043.",
    "hint": "Gom các hạng tử chứa x thành (x − y + 1)<sup>2</sup>, phần còn lại chỉ chứa y.",
    "sol": "(x − y + 1)<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup> + 1 − 2xy + 2x − 2y.<br>A − (x − y + 1)<sup>2</sup> = y<sup>2</sup> − 8y + 2042 = (y − 4)<sup>2</sup> + 2026.<br>Vậy A = (x − y + 1)<sup>2</sup> + (y − 4)<sup>2</sup> + 2026 ≥ 2026.<br>Dấu bằng khi y = 4 và x − y + 1 = 0, tức x = 3.<br>GTNN của A là <b>2026</b>, đạt được khi x = 3, y = 4.",
    "ans": 2026,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 3,
    "d": "Phân tích nhân tử",
    "t": "Khi a + b + c = 0",
    "q": "a) Chứng minh: nếu a + b + c = 0 thì a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = 3abc.<br>b) Áp dụng: phân tích thành nhân tử (x − y)<sup>3</sup> + (y − z)<sup>3</sup> + (z − x)<sup>3</sup>.",
    "hint": "a) Từ a + b = −c, lập phương hai vế. b) Đặt a = x − y, b = y − z, c = z − x rồi xem a + b + c bằng bao nhiêu.",
    "sol": "a) a + b = −c ⇒ (a + b)<sup>3</sup> = −c<sup>3</sup><br>⇒ a<sup>3</sup> + b<sup>3</sup> + 3ab(a + b) = −c<sup>3</sup><br>⇒ a<sup>3</sup> + b<sup>3</sup> + 3ab · (−c) = −c<sup>3</sup> ⇒ a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = 3abc.<br>b) Đặt a = x − y, b = y − z, c = z − x thì a + b + c = 0.<br>Theo câu a: (x − y)<sup>3</sup> + (y − z)<sup>3</sup> + (z − x)<sup>3</sup> = <b>3(x − y)(y − z)(z − x)</b>.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Tăng rồi giảm cùng một phần trăm (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Một cửa hàng tăng giá một chiếc áo thêm p% rồi sau đó lại giảm giá mới đi đúng p%. Giá cuối cùng bằng 84% giá ban đầu. Tìm p.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_22\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 22</a> (phỏng dịch)</p>",
    "hint": "Gọi tỉ lệ thay đổi là r = p/100. Tăng r rồi giảm r nghĩa là nhân giá với (1 + r) rồi với (1 − r). Dùng hiệu hai bình phương.",
    "sol": "Giá cuối = giá đầu · (1 + r)(1 − r) = giá đầu · (1 − r<sup>2</sup>).<br>1 − r<sup>2</sup> = 0,84 ⇒ r<sup>2</sup> = 0,16 ⇒ r = 0,4.<br>Thử lại: áo 100 nghìn đồng tăng 40% thành 140 nghìn, giảm 40% của 140 là 56 nghìn, còn 84 nghìn. Đúng.<br>Vậy <b>p = 40</b>.",
    "ans": 40,
    "unit": "%",
    "tol": 0.01
   },
   {
    "lv": 3,
    "t": "Lũy thừa lớn nhất của 2 (2016 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tìm lũy thừa lớn nhất của 2 (dạng 2<sup>k</sup>) là ước của 13<sup>4</sup> − 11<sup>4</sup>. Đáp số ghi giá trị 2<sup>k</sup>.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2016_AMC_8_Problems/Problem_15\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2016 AMC 8 Problem 15</a> (phỏng dịch)</p>",
    "hint": "Đừng tính 13<sup>4</sup> ngay. Hãy viết 13<sup>4</sup> − 11<sup>4</sup> = (13<sup>2</sup>)<sup>2</sup> − (11<sup>2</sup>)<sup>2</sup> rồi dùng hiệu hai bình phương.",
    "sol": "13<sup>4</sup> − 11<sup>4</sup> = (13<sup>2</sup> − 11<sup>2</sup>)(13<sup>2</sup> + 11<sup>2</sup>) = (169 − 121)(169 + 121) = 48 · 290.<br>48 = 2<sup>4</sup> · 3; 290 = 2 · 145 (145 lẻ).<br>Vậy 13<sup>4</sup> − 11<sup>4</sup> = 2<sup>5</sup> · 3 · 145 = 13 920.<br>Lũy thừa lớn nhất của 2 là 2<sup>5</sup> = <b>32</b>.",
    "ans": 32,
    "unit": "",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t3",
  "position": 3,
  "title": "Phân thức đại số",
  "icon": "➗",
  "lab": "toan_tank",
  "theory": "<div class=\"sec\"><h3>Phân thức và điều kiện xác định</h3>\n  <p><span class=\"mark\">Phân thức đại số</span> là biểu thức dạng A/B, trong đó A, B là các đa thức và B khác đa thức 0. A là tử, B là mẫu. Mỗi đa thức cũng là phân thức có mẫu bằng 1.</p>\n  <ul><li><b>Điều kiện xác định</b>: mẫu khác 0. (x + 1)/(x − 3) xác định khi x ≠ 3.</li>\n  <li><b>Hai phân thức bằng nhau</b>: A/B = C/D nếu A · D = B · C.</li>\n  <li>Giá trị của phân thức chỉ tính được tại những giá trị của biến thỏa mãn điều kiện xác định.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> điều kiện xác định chỉ xét <u>mẫu</u>, không xét tử. Tử bằng 0 thì phân thức bằng 0, vẫn hoàn toàn hợp lệ.</div>\n </div>\n <div class=\"sec\"><h3>Tính chất cơ bản và rút gọn phân thức</h3>\n  <div class=\"fbox\"><span class=\"f\">A/B = (A · M)/(B · M) = (A : N)/(B : N)</span></div>\n  <p>(M là đa thức khác 0, N là nhân tử chung khác 0.) Muốn <b>rút gọn</b>: <span class=\"mark\">phân tích tử và mẫu thành nhân tử</span>, rồi chia cả tử và mẫu cho nhân tử chung.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> (x<sup>2</sup> − 9)/(x<sup>2</sup> + 3x) = (x − 3)(x + 3)/(x(x + 3)) = (x − 3)/x (với x ≠ 0, x ≠ −3).</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> chỉ được chia cho <u>nhân tử</u>, không được “gạch” hạng tử. (x + 2)/(x + 5) không rút gọn thành 2/5. Thử x = 1: 3/6 = 1/2 chứ đâu phải 2/5.</div>\n </div>\n <div class=\"sec\"><h3>Quy đồng mẫu, cộng và trừ phân thức</h3>\n  <ul><li><b>Mẫu thức chung (MTC)</b>: phân tích các mẫu thành nhân tử, lấy mỗi nhân tử với số mũ lớn nhất. MTC của 1/(x<sup>2</sup> − 1) và 1/(x + 1) là (x − 1)(x + 1).</li>\n  <li>Cùng mẫu: cộng (trừ) các tử, giữ nguyên mẫu. Khác mẫu: quy đồng trước.</li>\n  <li><b>Phân thức đối</b> của A/B là −A/B = (−A)/B = A/(−B). Trừ là cộng với phân thức đối: A/B − C/D = A/B + (−C/D).</li></ul>\n  <div class=\"eg\"><b>Ví dụ.</b> 1/x + 1/(x + 1) = (x + 1)/(x(x + 1)) + x/(x(x + 1)) = (2x + 1)/(x(x + 1)).</div>\n </div>\n <div class=\"sec\"><h3>Nhân và chia phân thức</h3>\n  <div class=\"fbox\"><span class=\"f\">(A/B) · (C/D) = (A · C)/(B · D)</span><span class=\"f\">(A/B) : (C/D) = (A/B) · (D/C), với C/D ≠ 0</span></div>\n  <p class=\"muted\">Mẹo: phân tích thành nhân tử trước khi nhân, rút gọn chéo được ngay, đỡ phải nhân ra đa thức to.</p>\n </div>\n <div class=\"sec\"><h3>Bài toán năng suất: hai vòi nước</h3>\n  <p>Nếu một vòi chảy đầy bể trong a giờ thì <span class=\"mark\">mỗi giờ chảy được 1/a bể</span>. Hai vòi cùng chảy thì năng suất cộng lại.</p>\n  <div class=\"fbox\"><span class=\"f\">1/a + 1/b = 1/t</span><span class=\"f\">t = ab/(a + b)</span></div>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Hai vòi nước cùng chảy vào một bể\">\n<rect x=\"30\" y=\"26\" width=\"70\" height=\"9\" rx=\"2\" fill=\"var(--muted)\"/><rect x=\"180\" y=\"26\" width=\"70\" height=\"9\" rx=\"2\" fill=\"var(--muted)\"/>\n<line x1=\"96\" y1=\"35\" x2=\"96\" y2=\"104\" stroke=\"var(--liquid)\" stroke-width=\"4\"/><line x1=\"184\" y1=\"35\" x2=\"184\" y2=\"104\" stroke=\"var(--liquid)\" stroke-width=\"4\"/>\n<rect x=\"51\" y=\"104\" width=\"178\" height=\"45\" fill=\"var(--liquid)\" opacity=\".45\"/>\n<rect x=\"50\" y=\"50\" width=\"180\" height=\"100\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<text x=\"30\" y=\"18\" class=\"svgt\">vòi A: 3 giờ đầy bể</text><text x=\"250\" y=\"18\" class=\"svgt\" text-anchor=\"end\">vòi B: 6 giờ</text>\n<text x=\"140\" y=\"76\" class=\"svgt\" text-anchor=\"middle\">mỗi giờ: 1/3 + 1/6 = 1/2 bể</text>\n<text x=\"140\" y=\"130\" class=\"svgm\" text-anchor=\"middle\">nước</text>\n<text x=\"140\" y=\"166\" class=\"svgm\" text-anchor=\"middle\">⇒ cùng chảy thì sau 2 giờ đầy bể</text></svg>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> không cộng thời gian (3 + 6 = 9 giờ) hay lấy trung bình (4,5 giờ). Phải cộng <u>năng suất</u> 1/3 + 1/6. Vòi xả nước thì trừ đi năng suất của nó.</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🧹</span>Hai bạn cùng trực nhật</b>An dọn lớp một mình hết 30 phút, Bình hết 20 phút. Hai bạn cùng làm thì mỗi phút xong 1/30 + 1/20 = 1/12 việc, tức chỉ mất 12 phút.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚌</span>Chia tiền thuê xe</b>Lớp thuê xe hết 3 600 000 đồng, có x bạn đi thì mỗi bạn góp 3 600 000/x đồng. Thêm bạn đi cùng thì mẫu lớn hơn, mỗi người góp ít đi.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚲</span>Đi về hai tốc độ</b>Đi với tốc độ a, về với tốc độ b trên cùng đoạn đường s thì tốc độ trung bình là 2s/(s/a + s/b) = 2ab/(a + b), một phân thức gọn đẹp.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍋</span>Pha nước chanh</b>Hòa m gam đường vào n gam nước, tỉ lệ đường trong cốc là m/(m + n). Thêm nước thì mẫu tăng, nước chanh nhạt hơn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍪</span>Chia khẩu phần</b>Mẻ bánh dùng 500 g bột cho x người. Mỗi người ứng với 500/x gam bột, nhân với số khách mới là ra lượng bột cần chuẩn bị.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao không được chia cho 0?</summary>12 : 3 = 4 vì 4 · 3 = 12. Nếu 5 : 0 = k thì k · 0 = 5, không có số k nào như vậy. Vì thế mẫu của phân thức phải khác 0.</details>\n  <details class=\"wq\"><summary>Vì sao hai vòi cùng chảy lại nhanh hơn vòi nhanh nhất?</summary>Vòi chậm vẫn đóng góp thêm một phần nước mỗi giờ. Thời gian chung t = ab/(a + b) luôn nhỏ hơn cả a và b.</details>\n  <details class=\"wq\"><summary>Rút gọn xong rồi có cần giữ điều kiện của phân thức ban đầu không?</summary>Có. (x<sup>2</sup> − 4)/(x − 2) = x + 2 chỉ đúng khi x ≠ 2. Tại x = 2 phân thức ban đầu không xác định, dù x + 2 thì vẫn tính được.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chỉnh thời gian của hai vòi và xem bể đầy sau bao lâu.</p>\n<div class=\"sec intl\"><h3>Kỹ thuật \"ống nhòm\" (Telescoping) <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Ống nhòm kiểu cổ có nhiều đoạn lồng vào nhau, khi gập lại chỉ còn đoạn đầu và đoạn cuối. AoPS dùng hình ảnh này cho một kỹ thuật cộng phân thức: <span class=\"mark\">viết mỗi số hạng thành hiệu của hai số, các số ở giữa sẽ triệt tiêu, chỉ còn số đầu và số cuối</span>.</p><div class=\"fbox\"><span class=\"f\">1/(k(k + 1)) = 1/k − 1/(k + 1)</span></div><p>Em kiểm tra bằng quy đồng: 1/k − 1/(k + 1) = ((k + 1) − k)/(k(k + 1)) = 1/(k(k + 1)).</p><div class=\"eg\"><b>Ví dụ.</b> 1/(1·2) + 1/(2·3) + … + 1/(9·10)<br>= (1 − 1/2) + (1/2 − 1/3) + … + (1/9 − 1/10) = 1 − 1/10 = 9/10.<br>Tổng quát: 1/(1·2) + … + 1/(n(n + 1)) = n/(n + 1).</div><p>Với <b>tích</b> cũng có kiểu \"ống nhòm\": tử của phân số này rút gọn với mẫu của phân số khác.</p><div class=\"eg\"><b>Ví dụ.</b> (2/1)(3/2)(4/3)…(10/9) = 10/1 = 10.</div><div class=\"note\"><b>Mẹo:</b> trước khi tính, hãy viết ra 3 số hạng đầu và 2 số hạng cuối để thấy cái gì triệt tiêu, cái gì còn lại.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> telescoping (triệt tiêu kiểu ống nhòm), fraction (phân số, phân thức), cancel (triệt tiêu, rút gọn), partial sum (tổng riêng), common denominator (mẫu chung)</div><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/Telescoping_series\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, Telescoping series</a> (phỏng dịch, có bổ sung ví dụ)</p></div>",
  "formulas": [
   [
    "Điều kiện xác định",
    "mẫu khác 0"
   ],
   [
    "Hai phân thức bằng nhau",
    "A/B = C/D ⇔ A·D = B·C"
   ],
   [
    "Tính chất cơ bản",
    "A/B = (A·M)/(B·M), M ≠ 0"
   ],
   [
    "Rút gọn",
    "phân tích tử, mẫu thành nhân tử rồi chia cho nhân tử chung"
   ],
   [
    "Cộng khác mẫu",
    "quy đồng: A/B + C/D = (AD + BC)/(BD)"
   ],
   [
    "Nhân, chia",
    "A/B · C/D = AC/BD;  A/B : C/D = A/B · D/C"
   ],
   [
    "Hai vòi cùng chảy",
    "1/a + 1/b = 1/t  ⇒  t = ab/(a + b)"
   ]
  ],
  "quiz": [
   {
    "q": "Phân thức (x + 1)/(x − 3) xác định khi:",
    "o": [
     "x ≠ 3",
     "x ≠ −1",
     "x ≠ 3 và x ≠ −1",
     "x ≠ 0"
    ],
    "why": "Chỉ cần mẫu khác 0: x − 3 ≠ 0 ⇔ x ≠ 3. Tử bằng 0 không ảnh hưởng."
   },
   {
    "q": "Rút gọn (x<sup>2</sup> − 4)/(x + 2) được:",
    "o": [
     "x − 2",
     "x + 2",
     "x<sup>2</sup> − 2",
     "−2"
    ],
    "why": "(x − 2)(x + 2)/(x + 2) = x − 2 (với x ≠ −2)."
   },
   {
    "q": "Rút gọn (x + 2)/(x + 5) được:",
    "o": [
     "Không rút gọn được nữa",
     "2/5",
     "1/x + 2/5",
     "(x + 2)/5x"
    ],
    "why": "Tử và mẫu không có nhân tử chung. Không được “gạch” chữ x vì x là hạng tử, không phải nhân tử."
   },
   {
    "q": "1/x + 1/(x + 1) bằng:",
    "o": [
     "(2x + 1)/(x(x + 1))",
     "2/(2x + 1)",
     "1/(x(x + 1))",
     "2/(x(x + 1))"
    ],
    "why": "MTC = x(x + 1). Tử: (x + 1) + x = 2x + 1. Không được cộng tử với tử, mẫu với mẫu."
   },
   {
    "q": "Mẫu thức chung đơn giản nhất của 1/(x<sup>2</sup> − 1) và 1/(x + 1) là:",
    "o": [
     "x<sup>2</sup> − 1",
     "(x<sup>2</sup> − 1)(x + 1)",
     "x + 1",
     "(x − 1)<sup>2</sup>(x + 1)"
    ],
    "why": "x<sup>2</sup> − 1 = (x − 1)(x + 1) đã chứa sẵn nhân tử x + 1."
   },
   {
    "q": "Với x ≠ 0, x ≠ 1: (x/(x − 1)) : (x<sup>2</sup>/(x − 1)) bằng:",
    "o": [
     "1/x",
     "x",
     "x<sup>2</sup>/(x − 1)<sup>2</sup>",
     "1/(x − 1)"
    ],
    "why": "Nhân với nghịch đảo: x/(x − 1) · (x − 1)/x<sup>2</sup> = 1/x."
   },
   {
    "q": "Vòi A chảy đầy bể trong 3 giờ, vòi B trong 6 giờ. Mở cả hai vòi cùng lúc thì bể đầy sau:",
    "o": [
     "2 giờ",
     "4,5 giờ",
     "9 giờ",
     "3 giờ"
    ],
    "why": "Mỗi giờ: 1/3 + 1/6 = 1/2 bể, nên 2 giờ đầy bể. 4,5 giờ là lấy trung bình, sai."
   },
   {
    "q": "Phân thức đối của (x − 1)/(x + 2) là:",
    "o": [
     "(1 − x)/(x + 2)",
     "(x + 2)/(x − 1)",
     "(x + 1)/(x + 2)",
     "(1 − x)/(−x − 2)"
    ],
    "why": "Đối nghĩa là đổi dấu: −(x − 1)/(x + 2) = (1 − x)/(x + 2). Phương án (1 − x)/(−x − 2) đổi dấu cả tử và mẫu nên lại bằng chính phân thức ban đầu."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Rút gọn, tính giá trị",
    "t": "Rút gọn rồi thay số",
    "q": "Cho A = (x<sup>2</sup> − 9)/(x<sup>2</sup> + 3x).<br>a) Tìm điều kiện xác định của A.<br>b) Rút gọn A rồi tính giá trị của A tại x = 6.",
    "hint": "Mẫu x<sup>2</sup> + 3x = x(x + 3). Tử là hiệu hai bình phương.",
    "sol": "a) x(x + 3) ≠ 0 ⇔ x ≠ 0 và x ≠ −3.<br>b) A = (x − 3)(x + 3)/(x(x + 3)) = (x − 3)/x.<br>Tại x = 6 (thỏa mãn điều kiện): A = 3/6 = <b>0,5</b>.",
    "ans": 0.5,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 1,
    "d": "Cộng trừ nhân chia",
    "t": "Trừ hai phân thức",
    "q": "Thực hiện phép tính B = 2/(x − 2) − 8/(x<sup>2</sup> − 4) (x ≠ ±2), rồi tính giá trị của B tại x = 3.",
    "hint": "MTC là (x − 2)(x + 2). Sau khi trừ, tử có nhân tử chung với mẫu.",
    "sol": "B = 2(x + 2)/((x − 2)(x + 2)) − 8/((x − 2)(x + 2)) = (2x + 4 − 8)/((x − 2)(x + 2))<br>= 2(x − 2)/((x − 2)(x + 2)) = 2/(x + 2).<br>Tại x = 3: B = 2/5 = <b>0,4</b>.",
    "ans": 0.4,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Bài toán năng suất",
    "t": "Bể nước của trường",
    "q": "Bể nước của trường có hai vòi chảy vào và một vòi xả ở đáy. Vòi A chảy một mình thì 4 giờ đầy bể, vòi B thì 6 giờ. Vòi xả C tháo hết một bể đầy trong 12 giờ. Khi bể cạn, bác bảo vệ mở cả ba vòi cùng lúc. Sau bao nhiêu giờ thì bể đầy?",
    "hint": "Mỗi giờ: vòi A được 1/4 bể, vòi B được 1/6 bể, vòi C làm mất 1/12 bể.",
    "sol": "Mỗi giờ lượng nước trong bể tăng: 1/4 + 1/6 − 1/12 = 3/12 + 2/12 − 1/12 = 4/12 = 1/3 (bể).<br>Thời gian để đầy bể: 1 : (1/3) = <b>3 giờ</b>.",
    "ans": 3,
    "unit": "giờ",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Bài toán năng suất",
    "t": "Hai đội làm đường",
    "q": "Hai đội công nhân cùng làm một đoạn đường thì 12 ngày xong. Hai đội làm chung được 8 ngày thì đội I được điều đi làm việc khác, đội II làm tiếp một mình 10 ngày nữa thì xong. Hỏi nếu làm một mình thì đội II phải làm trong bao nhiêu ngày?",
    "hint": "8 ngày làm chung được 8/12 công việc. Phần còn lại đội II làm trong 10 ngày.",
    "sol": "Mỗi ngày hai đội làm được 1/12 công việc.<br>8 ngày làm chung: 8/12 = 2/3 công việc. Còn lại 1 − 2/3 = 1/3.<br>Đội II làm 1/3 công việc trong 10 ngày ⇒ mỗi ngày làm 1/30 công việc.<br>Đội II làm một mình hết <b>30 ngày</b>.<br>(Thêm: đội I mỗi ngày làm 1/12 − 1/30 = 1/20, nên một mình hết 20 ngày.)",
    "ans": 30,
    "unit": "ngày",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Cộng trừ nhân chia",
    "t": "Rút gọn biểu thức nhiều phép tính",
    "q": "Cho P = (x/(x − 2) + 2/(x + 2) − 8/(x<sup>2</sup> − 4)) : ((x + 6)/x) với x ≠ 0, x ≠ ±2, x ≠ −6.<br>a) Rút gọn P.<br>b) Tìm x để P = 2/3.",
    "hint": "MTC trong ngoặc là (x − 2)(x + 2). Tử thu được phân tích thành (x + 6)(x − 2).",
    "sol": "a) Tử trong ngoặc: x(x + 2) + 2(x − 2) − 8 = x<sup>2</sup> + 4x − 12 = (x + 6)(x − 2).<br>Ngoặc = (x + 6)(x − 2)/((x − 2)(x + 2)) = (x + 6)/(x + 2).<br>P = (x + 6)/(x + 2) · x/(x + 6) = x/(x + 2).<br>b) x/(x + 2) = 2/3 ⇒ 3x = 2x + 4 ⇒ <b>x = 4</b> (thỏa mãn điều kiện).<br>Lưu ý: nếu đề hỏi P = 1/2 thì giải ra x = 2, bị loại vì vi phạm điều kiện, khi đó không có x nào.",
    "ans": 4,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Rút gọn, tính giá trị",
    "t": "Đi học và về nhà",
    "q": "Quãng đường từ nhà đến trường dài s km. Buổi sáng An đạp xe đến trường với tốc độ a km/h, buổi trưa về nhà với tốc độ b km/h.<br>a) Chứng minh tốc độ trung bình cả đi lẫn về là 2ab/(a + b).<br>b) Tính tốc độ trung bình khi a = 12, b = 18 (km/h).",
    "hint": "Tốc độ trung bình = tổng quãng đường : tổng thời gian.",
    "sol": "a) Thời gian đi: s/a; thời gian về: s/b. Tổng thời gian: s/a + s/b = s(a + b)/(ab).<br>v<sub>tb</sub> = 2s : (s(a + b)/(ab)) = 2ab/(a + b).<br>b) v<sub>tb</sub> = 2 · 12 · 18/(12 + 18) = 432/30 = <b>14,4 km/h</b> (không phải 15 km/h).",
    "ans": 14.4,
    "unit": "km/h",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Bài toán năng suất",
    "t": "Chia tiền thuê xe",
    "q": "Lớp 8A thuê một xe du lịch đi tham quan với giá 3 600 000 đồng, chi phí chia đều cho các bạn đi. Đến ngày đi có thêm 6 bạn lớp khác đi cùng nên mỗi bạn chỉ phải góp ít hơn dự kiến 20 000 đồng. Hỏi lúc đầu dự kiến có bao nhiêu bạn đi?",
    "hint": "Gọi số bạn dự kiến là x. Lập phương trình 3 600 000/x − 3 600 000/(x + 6) = 20 000, chia hai vế cho 20 000, rồi phân tích thành nhân tử.",
    "sol": "Gọi số bạn dự kiến là x (x nguyên dương).<br>3 600 000/x − 3 600 000/(x + 6) = 20 000. Chia hai vế cho 20 000:<br>180/x − 180/(x + 6) = 1 ⇒ 180(x + 6) − 180x = x(x + 6) ⇒ x<sup>2</sup> + 6x − 1 080 = 0.<br>Tách: x<sup>2</sup> − 30x + 36x − 1 080 = 0 ⇒ (x − 30)(x + 36) = 0.<br>Vì x > 0 nên <b>x = 30 bạn</b>.<br>Kiểm tra: 3 600 000/30 = 120 000; 3 600 000/36 = 100 000; chênh 20 000 ✓.",
    "ans": 30,
    "unit": "bạn",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Rút gọn, tính giá trị",
    "t": "Biết tổng các nghịch đảo bằng 0",
    "q": "Cho a, b, c khác 0 thỏa mãn 1/a + 1/b + 1/c = 0. Tính giá trị của M = bc/a<sup>2</sup> + ca/b<sup>2</sup> + ab/c<sup>2</sup>.",
    "hint": "Đặt x = 1/a, y = 1/b, z = 1/c thì x + y + z = 0, nên x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz. Viết M = abc(1/a<sup>3</sup> + 1/b<sup>3</sup> + 1/c<sup>3</sup>).",
    "sol": "Ta có bc/a<sup>2</sup> = abc/a<sup>3</sup>, tương tự cho hai số hạng kia, nên M = abc(1/a<sup>3</sup> + 1/b<sup>3</sup> + 1/c<sup>3</sup>).<br>Vì 1/a + 1/b + 1/c = 0 nên (hằng đẳng thức khi tổng ba số bằng 0):<br>1/a<sup>3</sup> + 1/b<sup>3</sup> + 1/c<sup>3</sup> = 3 · (1/a)(1/b)(1/c) = 3/(abc).<br>M = abc · 3/(abc) = <b>3</b>.<br>Thử: a = 1, b = 1, c = −1/2 thỏa mãn; M = −1/2 + (−1/2) + 1/(1/4) = 3 ✓.",
    "ans": 3,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "t": "Tích ống nhòm (2022 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tính giá trị của tích (1/3) · (2/4) · (3/5) · … · (18/20) · (19/21) · (20/22). Đáp số là phân số tối giản 1/m, em nhập m.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2022_AMC_8_Problems/Problem_8\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2022 AMC 8 Problem 8</a> (phỏng dịch)</p>",
    "hint": "Viết tử là 1 · 2 · 3 · … · 20, mẫu là 3 · 4 · 5 · … · 22. Các thừa số nào xuất hiện ở cả tử và mẫu?",
    "sol": "Tử: 1 · 2 · 3 · … · 20. Mẫu: 3 · 4 · … · 20 · 21 · 22.<br>Rút gọn các thừa số từ 3 đến 20: còn (1 · 2)/(21 · 22) = 2/462 = 1/231.<br>Vậy tích bằng 1/231, <b>m = 231</b>.",
    "ans": 231,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Tốc độ trung bình (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Qiang lái xe 15 dặm với tốc độ trung bình 30 dặm/giờ. Anh phải lái thêm bao nhiêu dặm với tốc độ 55 dặm/giờ để tốc độ trung bình của cả chuyến đi là 50 dặm/giờ? (1 dặm ≈ 1,6 km.)<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_16\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 16</a> (phỏng dịch)</p>",
    "hint": "Tốc độ trung bình = tổng quãng đường : tổng thời gian (không phải trung bình cộng các tốc độ). Gọi x là số dặm thêm, thời gian đoạn sau là x/55 giờ. Lập phương trình chứa phân thức.",
    "sol": "Đoạn 1: thời gian 15 : 30 = 0,5 giờ.<br>Đoạn 2: x dặm, thời gian x/55 giờ.<br>Điều kiện: (15 + x)/(0,5 + x/55) = 50.<br>⇒ 15 + x = 25 + 50x/55 = 25 + 10x/11.<br>⇒ x − 10x/11 = 10 ⇒ x/11 = 10 ⇒ x = 110.<br>Thử lại: tổng 125 dặm, tổng thời gian 0,5 + 2 = 2,5 giờ, 125 : 2,5 = 50. Đúng.<br>Cần lái thêm <b>110 dặm</b>.",
    "ans": 110,
    "unit": "dặm",
    "tol": 0.01
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t4",
  "position": 4,
  "title": "Phương trình bậc nhất một ẩn",
  "icon": "⚖️",
  "lab": "toan_scale",
  "theory": "<div class=\"sec\"><h3>Phương trình bậc nhất một ẩn</h3>\n  <p>Phương trình ẩn x có dạng A(x) = B(x). Số x<sub>0</sub> là <b>nghiệm</b> nếu thay vào hai vế cho hai giá trị bằng nhau. <b>Giải phương trình</b> là tìm tất cả các nghiệm.</p>\n  <div class=\"fbox\"><span class=\"f\">ax + b = 0 (a ≠ 0)  ⇒  x = −b/a</span></div>\n  <p>Phương trình dạng ax + b = 0 với a ≠ 0 gọi là <span class=\"mark\">phương trình bậc nhất một ẩn</span>, nó luôn có đúng một nghiệm.</p>\n </div>\n <div class=\"sec\"><h3>Hai quy tắc biến đổi: cái cân thăng bằng</h3>\n  <p>Hãy tưởng tượng phương trình là một <span class=\"mark\">cái cân đang thăng bằng</span>. Làm cùng một việc ở cả hai đĩa thì cân vẫn thăng bằng.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Cân thăng bằng: bên trái hộp x và 3 quả cân, bên phải 7 quả cân\">\n<line x1=\"40\" y1=\"70\" x2=\"240\" y2=\"70\" stroke=\"var(--ink)\" stroke-width=\"3\"/>\n<polygon points=\"140,70 128,95 152,95\" fill=\"var(--muted)\"/><line x1=\"140\" y1=\"95\" x2=\"140\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n<line x1=\"110\" y1=\"150\" x2=\"170\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"3\"/>\n<line x1=\"70\" y1=\"70\" x2=\"44\" y2=\"110\" stroke=\"var(--muted)\"/><line x1=\"70\" y1=\"70\" x2=\"96\" y2=\"110\" stroke=\"var(--muted)\"/>\n<line x1=\"210\" y1=\"70\" x2=\"184\" y2=\"110\" stroke=\"var(--muted)\"/><line x1=\"210\" y1=\"70\" x2=\"236\" y2=\"110\" stroke=\"var(--muted)\"/>\n<line x1=\"38\" y1=\"111\" x2=\"102\" y2=\"111\" stroke=\"var(--ink)\" stroke-width=\"3\"/><line x1=\"178\" y1=\"111\" x2=\"242\" y2=\"111\" stroke=\"var(--ink)\" stroke-width=\"3\"/>\n<rect x=\"44\" y=\"92\" width=\"18\" height=\"18\" fill=\"var(--accent)\" opacity=\".85\"/><text x=\"53\" y=\"105\" class=\"svgt\" text-anchor=\"middle\" style=\"fill:#fff\">x</text>\n<rect x=\"66\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"76\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"86\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"184\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"194\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"204\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"214\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"224\" y=\"101\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"199\" y=\"91\" width=\"9\" height=\"9\" fill=\"#D29A00\"/><rect x=\"209\" y=\"91\" width=\"9\" height=\"9\" fill=\"#D29A00\"/>\n<text x=\"70\" y=\"130\" class=\"svgt\" text-anchor=\"middle\">x + 3</text><text x=\"210\" y=\"130\" class=\"svgt\" text-anchor=\"middle\">7</text>\n<text x=\"140\" y=\"24\" class=\"svgm\" text-anchor=\"middle\">mỗi ô vàng nặng 1 đơn vị</text>\n<text x=\"140\" y=\"166\" class=\"svgm\" text-anchor=\"middle\">bớt 3 ô ở mỗi bên, cân vẫn thăng bằng ⇒ x = 4</text></svg>\n  <ul><li><b>Quy tắc chuyển vế:</b> chuyển một hạng tử từ vế này sang vế kia thì <u>đổi dấu</u> hạng tử đó. x + 3 = 7 ⇒ x = 7 − 3 = 4.</li>\n  <li><b>Quy tắc nhân (chia):</b> nhân hoặc chia cả hai vế với cùng một số <u>khác 0</u>. 3x = 12 ⇒ x = 12 : 3 = 4.</li></ul>\n </div>\n <div class=\"sec\"><h3>Phương trình đưa được về dạng ax + b = 0</h3>\n  <p>Các bước: <b>1)</b> quy đồng mẫu (nếu có) rồi khử mẫu; <b>2)</b> bỏ ngoặc; <b>3)</b> chuyển hạng tử chứa ẩn sang một vế, hằng số sang vế kia; <b>4)</b> thu gọn và giải.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> (2x − 1)/3 = (x + 2)/2. Nhân hai vế với 6: 2(2x − 1) = 3(x + 2) ⇒ 4x − 2 = 3x + 6 ⇒ x = 8.</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> sau khi thu gọn có thể gặp 0x = 0 (mọi x đều là nghiệm, <b>vô số nghiệm</b>) hoặc 0x = 5 (<b>vô nghiệm</b>). Ví dụ 2(x − 1) = 2x − 2 đúng với mọi x.</div>\n </div>\n <div class=\"sec\"><h3>Giải bài toán bằng cách lập phương trình</h3>\n  <p><b>Bước 1.</b> Chọn ẩn, ghi rõ đơn vị và <span class=\"mark\">điều kiện của ẩn</span>. Biểu diễn các đại lượng chưa biết theo ẩn.<br><b>Bước 2.</b> Lập phương trình từ mối quan hệ trong đề.<br><b>Bước 3.</b> Giải phương trình, <span class=\"mark\">đối chiếu điều kiện</span> rồi trả lời.</p>\n  <div class=\"tbl\"><table><tr><th>Dạng bài</th><th>Công thức hay dùng</th></tr>\n  <tr><td>Chuyển động</td><td>s = v · t; xuôi dòng v + v<sub>nước</sub>, ngược dòng v − v<sub>nước</sub></td></tr>\n  <tr><td>Năng suất</td><td>khối lượng công việc = năng suất × thời gian</td></tr>\n  <tr><td>Phần trăm, giảm giá</td><td>giảm p% thì còn (100 − p)%: giá sau = giá gốc × (1 − p/100)</td></tr>\n  <tr><td>Tuổi</td><td>sau n năm mọi người đều thêm n tuổi; hiệu số tuổi không đổi</td></tr></table></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Áo giảm 20% còn 240 000 đồng. Gọi giá gốc là x: 0,8x = 240 000 ⇒ x = 300 000 đồng. (Lấy 240 000 cộng thêm 20% ra 288 000 là <u>sai</u>, vì 20% tính trên giá gốc.)</div>\n </div>\n <div class=\"sec\"><h3>Giảm giá liên tiếp <span class=\"tag\">Mẹo</span></h3>\n  <p>Giảm 20% rồi giảm thêm 10% thì giá còn 0,8 · 0,9 = 0,72, tức <span class=\"mark\">giảm tổng cộng 28%, không phải 30%</span>. Lần giảm thứ hai tính trên giá đã giảm, nhỏ hơn giá gốc.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏷️</span>Tìm giá gốc khi sale</b>Nồi chiên “chỉ còn 405 000 đồng sau khi giảm 25% và thêm 10% thẻ thành viên”. Giải 0,675x = 405 000 là biết giá niêm yết 600 000 đồng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🐷</span>Bỏ ống heo</b>An có 150 nghìn, mỗi tuần để dành 30 nghìn. Muốn mua tai nghe 510 nghìn thì giải 150 + 30x = 510, được x = 12 tuần.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌡️</span>Đổi độ F sang độ C</b>Dự báo thời tiết nước ngoài ghi 95 °F. Từ F = 1,8C + 32, giải ra C = 35 °C: một ngày nóng như mùa hè Hà Nội.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍕</span>Chia tiền đi ăn</b>Nhóm bạn gọi pizza, góp mỗi người 45 nghìn thì thiếu 25 nghìn, góp 50 nghìn thì thừa 15 nghìn. Gọi số bạn là x: 45x + 25 = 50x − 15, nên x = 8 bạn.</div>\n   <div class=\"app\"><b><span class=\"ico\">⏰</span>Hẹn giờ gặp nhau</b>Hai bạn đạp xe ngược chiều từ hai đầu một con đường. Lập phương trình “tổng quãng đường hai bạn đi bằng độ dài con đường” là biết mấy giờ gặp nhau.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Giảm 50% rồi giảm tiếp 50% thì có được lấy miễn phí không?</summary>Không. Giá còn 0,5 · 0,5 = 0,25, tức vẫn phải trả 25% giá gốc. Mỗi lần giảm chỉ tính trên giá đang có.</details>\n  <details class=\"wq\"><summary>Vì sao không được chia hai vế cho một biểu thức chứa ẩn?</summary>Biểu thức đó có thể bằng 0. Từ x(x − 1) = 2x mà chia hai vế cho x sẽ mất nghiệm x = 0. Muốn an toàn thì chuyển vế rồi đặt nhân tử chung.</details>\n  <details class=\"wq\"><summary>Vì sao giải xong phải đối chiếu điều kiện?</summary>Phương trình chỉ là mô hình. Nghiệm x = 7,5 bạn hay vận tốc âm thì phương trình vẫn “đúng” nhưng thực tế vô lý, phải loại.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để tự bớt, thêm, chia đều quả cân hai bên và tìm ra x.</p>\n<div class=\"sec intl\"><h3>Câu đố trên bia mộ Diophantus <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Diophantus ở Alexandria (khoảng thế kỉ III) được gọi là \"cha đẻ của Đại số\". Tương truyền trên bia mộ ông có một câu đố, em thử giải bằng phương trình nhé:</p><div class=\"eg\"><i>\"Thượng đế cho ông tuổi thơ bằng 1/6 cuộc đời; thêm 1/12 nữa thì râu mọc; thêm 1/7 nữa thì ông cưới vợ; 5 năm sau ông có một cậu con trai. Người con chỉ sống được bằng nửa tuổi đời của cha. Sau khi con mất, ông sống thêm 4 năm nữa trong nỗi buồn, an ủi mình bằng toán học.\"</i></div><p><b>Lập phương trình.</b> Gọi x (năm) là tuổi thọ của Diophantus, x &gt; 0. Cộng các quãng đời lại bằng cả cuộc đời:</p><div class=\"fbox\"><span class=\"f\">x/6 + x/12 + x/7 + 5 + x/2 + 4 = x</span></div><p><b>Giải.</b> Mẫu chung là 84. Nhân hai vế với 84:<br>14x + 7x + 12x + 420 + 42x + 336 = 84x<br>⇔ 75x + 756 = 84x ⇔ 9x = 756 ⇔ <span class=\"mark\">x = 84</span>.</p><p>Vậy Diophantus sống 84 năm: tuổi thơ 14 năm, 7 năm sau mọc râu, 12 năm sau nữa cưới vợ (năm 33 tuổi), có con năm 38 tuổi, con mất khi ông 80 tuổi (con sống 42 năm).</p><div class=\"note\"><b>Bài học:</b> ba bước giải bài toán bằng cách lập phương trình (chọn ẩn và điều kiện, lập phương trình, giải và kiểm tra) đã được dùng từ gần 2000 năm trước.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> equation (phương trình), unknown (ẩn số), solve (giải), riddle (câu đố), epitaph (văn bia), algebra (đại số)</div><p class=\"src\">Nguồn: <a href=\"https://en.wikipedia.org/wiki/Diophantus\" target=\"_blank\" rel=\"noopener\">Wikipedia, Diophantus</a> (phỏng dịch)</p></div>",
  "formulas": [
   [
    "Phương trình bậc nhất",
    "ax + b = 0 (a ≠ 0) ⇒ x = −b/a"
   ],
   [
    "Chuyển vế",
    "chuyển hạng tử sang vế kia thì đổi dấu"
   ],
   [
    "Quy tắc nhân",
    "nhân/chia hai vế với cùng một số khác 0"
   ],
   [
    "Vô số nghiệm / vô nghiệm",
    "0x = 0: vô số nghiệm;  0x = c (c ≠ 0): vô nghiệm"
   ],
   [
    "Chuyển động",
    "s = v·t;  xuôi: v + v_nước;  ngược: v − v_nước"
   ],
   [
    "Giảm giá p%",
    "giá sau = giá gốc × (1 − p/100)"
   ],
   [
    "Ba bước giải bài toán",
    "chọn ẩn + điều kiện → lập phương trình → giải, đối chiếu, trả lời"
   ]
  ],
  "quiz": [
   {
    "q": "Phương trình nào là phương trình bậc nhất một ẩn?",
    "o": [
     "2x − 5 = 0",
     "x<sup>2</sup> − 1 = 0",
     "0x + 3 = 0",
     "1/x + 2 = 0"
    ],
    "why": "Dạng ax + b = 0 với a ≠ 0. 0x + 3 = 0 có a = 0 nên không phải."
   },
   {
    "q": "Nghiệm của phương trình 3x − 12 = 0 là:",
    "o": [
     "x = 4",
     "x = −4",
     "x = 9",
     "x = 36"
    ],
    "why": "3x = 12 ⇒ x = 4."
   },
   {
    "q": "Từ 2x + 5 = 9, chuyển vế đúng là:",
    "o": [
     "2x = 9 − 5",
     "2x = 9 + 5",
     "2x = 5 − 9",
     "x = 9 − 5 − 2"
    ],
    "why": "Chuyển +5 sang vế phải thành −5."
   },
   {
    "q": "Phương trình 2(x − 1) = 2x − 2 có:",
    "o": [
     "Vô số nghiệm",
     "Vô nghiệm",
     "Một nghiệm x = 1",
     "Một nghiệm x = 0"
    ],
    "why": "Bỏ ngoặc: 2x − 2 = 2x − 2 ⇔ 0x = 0, đúng với mọi x."
   },
   {
    "q": "Chiếc áo giảm giá 20% còn 240 000 đồng. Giá gốc của áo là:",
    "o": [
     "300 000 đồng",
     "288 000 đồng",
     "260 000 đồng",
     "192 000 đồng"
    ],
    "why": "0,8x = 240 000 ⇒ x = 300 000. 288 000 là lấy 240 000 cộng 20% của 240 000, sai vì 20% tính trên giá gốc."
   },
   {
    "q": "Một món hàng giảm 20% rồi giảm tiếp 10%. So với giá gốc, món hàng đã giảm tổng cộng:",
    "o": [
     "28%",
     "30%",
     "32%",
     "2%"
    ],
    "why": "Giá còn 0,8 · 0,9 = 0,72 giá gốc, nghĩa là giảm 28%."
   },
   {
    "q": "Năm nay mẹ 36 tuổi, An 12 tuổi. Gọi x là số năm nữa để tuổi mẹ gấp đôi tuổi An. Phương trình đúng là:",
    "o": [
     "36 + x = 2(12 + x)",
     "36 = 2(12 + x)",
     "36 + x = 2 · 12 + x",
     "36 − x = 2(12 − x)"
    ],
    "why": "Sau x năm cả hai cùng thêm x tuổi. Giải ra x = 12."
   },
   {
    "q": "Xe đi từ A đến B với 40 km/h rồi quay về với 60 km/h, tổng thời gian đi và về là 5 giờ. Gọi AB = x km, phương trình là:",
    "o": [
     "x/40 + x/60 = 5",
     "40x + 60x = 5",
     "x/40 − x/60 = 5",
     "x/(40 + 60) = 5"
    ],
    "why": "Thời gian = quãng đường : vận tốc. Tổng hai thời gian bằng 5. Giải ra x = 120 km."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Giải phương trình",
    "t": "Phương trình có mẫu",
    "q": "Giải phương trình: (2x − 1)/3 − (x + 2)/4 = 1.",
    "hint": "Mẫu chung là 12. Nhân cả hai vế với 12.",
    "sol": "Nhân hai vế với 12: 4(2x − 1) − 3(x + 2) = 12<br>8x − 4 − 3x − 6 = 12<br>5x − 10 = 12<br>5x = 22 ⇒ <b>x = 4,4</b>.",
    "ans": 4.4,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 1,
    "d": "Mua sắm, phần trăm",
    "t": "Mua đồ dùng học tập",
    "q": "An mang 500 000 đồng đi nhà sách. An mua một chiếc ba lô giá 260 000 đồng và một số quyển vở giá 12 000 đồng/quyển, còn thừa 24 000 đồng. Hỏi An đã mua bao nhiêu quyển vở?",
    "hint": "Gọi số vở là x. Tiền ba lô + tiền vở + tiền thừa = 500 000.",
    "sol": "Gọi số vở là x (quyển, x nguyên dương).<br>260 000 + 12 000x + 24 000 = 500 000<br>12 000x = 216 000 ⇒ <b>x = 18 quyển</b>.",
    "ans": 18,
    "unit": "quyển",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Mua sắm, phần trăm",
    "t": "Hai lần giảm giá",
    "q": "Siêu thị điện máy khuyến mãi giảm 25% giá niêm yết cho mọi nồi chiên không dầu. Khách có thẻ thành viên được giảm thêm 10% trên giá đã giảm. Mẹ An có thẻ thành viên và trả 405 000 đồng. Giá niêm yết của chiếc nồi chiên là bao nhiêu đồng?",
    "hint": "Giảm 25% thì còn 0,75; giảm thêm 10% thì còn 0,9 của giá đó.",
    "sol": "Gọi giá niêm yết là x (đồng, x > 0).<br>Giá sau hai lần giảm: x · 0,75 · 0,9 = 0,675x.<br>0,675x = 405 000 ⇒ <b>x = 600 000 đồng</b>.<br>Nhận xét: hai lần giảm tương đương giảm 32,5%, không phải 35%.",
    "ans": 600000,
    "unit": "đồng",
    "tol": 1
   },
   {
    "lv": 2,
    "d": "Chuyển động",
    "t": "Ca nô trên sông",
    "q": "Một ca nô xuôi dòng từ bến A đến bến B mất 4 giờ và ngược dòng từ B về A mất 5 giờ. Biết vận tốc dòng nước là 2 km/h. Tính khoảng cách AB (km).",
    "hint": "Gọi AB = x. Vận tốc xuôi dòng x/4, ngược dòng x/5. Hiệu hai vận tốc này bằng 2 lần vận tốc dòng nước.",
    "sol": "Gọi AB = x (km, x > 0).<br>Vận tốc xuôi dòng: x/4; vận tốc ngược dòng: x/5.<br>Vận tốc riêng của ca nô: x/4 − 2 = x/5 + 2<br>⇒ x/4 − x/5 = 4 ⇒ x/20 = 4 ⇒ <b>x = 80 km</b>.<br>Kiểm tra: xuôi 20 km/h, ngược 16 km/h, chênh nhau 4 = 2 · 2 ✓.",
    "ans": 80,
    "unit": "km",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Năng suất, tuổi",
    "t": "Xưởng may áo đồng phục",
    "q": "Một xưởng may dự định mỗi ngày may 40 chiếc áo đồng phục. Nhờ cải tiến, thực tế mỗi ngày may được 50 chiếc nên không những hoàn thành sớm hơn 3 ngày mà còn may thêm được 20 chiếc. Hỏi theo kế hoạch xưởng phải may bao nhiêu chiếc áo?",
    "hint": "Gọi số áo theo kế hoạch là x. Thời gian dự định x/40, thực tế (x + 20)/50.",
    "sol": "Gọi số áo theo kế hoạch là x (chiếc, x nguyên dương).<br>Thời gian dự định: x/40 (ngày). Thực tế may x + 20 chiếc trong (x + 20)/50 ngày.<br>x/40 − (x + 20)/50 = 3. Nhân hai vế với 200:<br>5x − 4(x + 20) = 600 ⇒ x − 80 = 600 ⇒ <b>x = 680 chiếc</b>.<br>Kiểm tra: 680 : 40 = 17 ngày; 700 : 50 = 14 ngày; sớm 3 ngày ✓.",
    "ans": 680,
    "unit": "chiếc",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Năng suất, tuổi",
    "t": "Tuổi bố và tuổi An",
    "q": "Hiện nay tuổi bố gấp 3 lần tuổi An. Sau 14 năm nữa, tuổi bố chỉ còn gấp 2 lần tuổi An. Hỏi năm nay An bao nhiêu tuổi?",
    "hint": "Gọi tuổi An là x, tuổi bố là 3x. Sau 14 năm cả hai cùng thêm 14 tuổi.",
    "sol": "Gọi tuổi An hiện nay là x (tuổi, x nguyên dương), tuổi bố là 3x.<br>Sau 14 năm: 3x + 14 = 2(x + 14)<br>3x + 14 = 2x + 28 ⇒ <b>x = 14 tuổi</b>. Bố 42 tuổi.<br>Kiểm tra: sau 14 năm An 28, bố 56 = 2 · 28 ✓.",
    "ans": 14,
    "unit": "tuổi",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Chuyển động",
    "t": "Tăng tốc giữa đường",
    "q": "Một người dự định đạp xe từ A đến B với vận tốc 15 km/h. Sau khi đi được 1/3 quãng đường, người đó tăng vận tốc lên 20 km/h nên đến B sớm hơn dự định 20 phút. Tính quãng đường AB (km).",
    "hint": "Đổi 20 phút = 1/3 giờ. Thời gian dự định trừ thời gian thực tế bằng 1/3.",
    "sol": "Gọi AB = x (km, x > 0). Thời gian dự định: x/15.<br>Thực tế: x/3 km đầu đi với 15 km/h mất x/45 giờ; 2x/3 km sau đi với 20 km/h mất x/30 giờ.<br>x/15 − (x/45 + x/30) = 1/3. Nhân hai vế với 90:<br>6x − 2x − 3x = 30 ⇒ <b>x = 30 km</b>.<br>Kiểm tra: dự định 2 giờ; thực tế 10/15 + 20/20 = 2/3 + 1 = 5/3 giờ, sớm 1/3 giờ = 20 phút ✓.",
    "ans": 30,
    "unit": "km",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Giải phương trình",
    "t": "Cộng thêm 1 vào mỗi phân số",
    "q": "Giải phương trình (đề thi học sinh giỏi):<br>(x + 1)/2025 + (x + 2)/2024 = (x + 3)/2023 + (x + 4)/2022.",
    "hint": "Cộng 1 vào mỗi phân số. Tử số nào cũng trở thành x + 2026.",
    "sol": "Cộng 1 vào mỗi phân số ở hai vế:<br>(x + 1)/2025 + 1 = (x + 2026)/2025, tương tự các phân số kia đều có tử x + 2026.<br>(x + 2026)/2025 + (x + 2026)/2024 = (x + 2026)/2023 + (x + 2026)/2022<br>⇒ (x + 2026)(1/2025 + 1/2024 − 1/2023 − 1/2022) = 0.<br>Vì 1/2025 < 1/2023 và 1/2024 < 1/2022 nên ngoặc thứ hai âm, khác 0.<br>Do đó x + 2026 = 0 ⇒ <b>x = −2026</b>.",
    "ans": -2026,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "t": "Rương vàng (2017 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Em có một số đồng tiền vàng và một số rương rỗng. Nếu bỏ 9 đồng vào mỗi rương thì còn thừa 2 rương rỗng. Nếu bỏ 6 đồng vào mỗi rương thì thừa 3 đồng tiền. Hỏi có bao nhiêu đồng tiền vàng?<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2017_AMC_8_Problems/Problem_17\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2017 AMC 8 Problem 17</a> (phỏng dịch)</p>",
    "hint": "Gọi c là số rương. Cách 1: chỉ c − 2 rương có tiền, mỗi rương 9 đồng. Cách 2: c rương, mỗi rương 6 đồng, dư 3. Số tiền như nhau.",
    "sol": "Gọi c là số rương (c nguyên dương, c &gt; 2).<br>Cách 1: số tiền = 9(c − 2). Cách 2: số tiền = 6c + 3.<br>9(c − 2) = 6c + 3 ⇔ 9c − 18 = 6c + 3 ⇔ 3c = 21 ⇔ c = 7 (thoả mãn).<br>Số tiền: 6 · 7 + 3 = 45 (thử lại 9 · 5 = 45).<br>Có <b>45 đồng tiền vàng</b>.",
    "ans": 45,
    "unit": "đồng",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Điểm số đội bóng rổ (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Sau trận bóng rổ, người ta thấy Alexa ghi được 1/4 tổng điểm của đội, Brittany ghi 2/7 tổng điểm, Chelsea ghi 15 điểm. 7 thành viên còn lại, không ai ghi quá 2 điểm. Hỏi 7 thành viên còn lại ghi tổng cộng bao nhiêu điểm?<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_23\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 23</a> (phỏng dịch)</p>",
    "hint": "Gọi T là tổng điểm. Vì 1/4 T và 2/7 T là số nguyên nên T chia hết cho 28. Điểm của 7 bạn còn lại nằm trong khoảng từ 0 đến 14.",
    "sol": "Gọi T là tổng điểm, y là điểm của 7 bạn còn lại (0 ≤ y ≤ 7 · 2 = 14).<br>T/4 + 2T/7 + 15 + y = T ⇔ y = T − 15T/28 − 15 = 13T/28 − 15.<br>T chia hết cho 28. Thử: T = 28 ⇒ y = 13 − 15 = −2 (loại); T = 56 ⇒ y = 26 − 15 = 11 (nhận); T = 84 ⇒ y = 39 − 15 = 24 &gt; 14 (loại).<br>Vậy T = 56: Alexa 14, Brittany 16, Chelsea 15, còn lại <b>11 điểm</b>.",
    "ans": 11,
    "unit": "điểm",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t5",
  "position": 5,
  "title": "Hàm số bậc nhất và đồ thị",
  "icon": "📈",
  "lab": "toan_graph",
  "theory": "<div class=\"sec\"><h3>Hàm số</h3>\n  <p>Nếu đại lượng y phụ thuộc vào đại lượng x sao cho <span class=\"mark\">mỗi giá trị của x cho đúng một giá trị của y</span> thì y là <b>hàm số</b> của x, x là biến số. Viết y = f(x).</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Taxi tính 10 000 đồng mở cửa và 15 000 đồng mỗi km. Số tiền y (đồng) là hàm số của số km x: y = 15 000x + 10 000. Đi 8 km: f(8) = 130 000 đồng.</div>\n  <div class=\"tbl\"><table><tr><th>x (km)</th><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>y (nghìn đồng)</th><td>40</td><td>70</td><td>100</td><td>130</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Mặt phẳng toạ độ và đồ thị</h3>\n  <ul><li>Hai trục số vuông góc tại O: trục hoành Ox (nằm ngang), trục tung Oy (thẳng đứng). Chúng chia mặt phẳng thành 4 góc phần tư I, II, III, IV (ngược chiều kim đồng hồ, bắt đầu từ góc trên bên phải).</li>\n  <li>Điểm M(x<sub>0</sub>; y<sub>0</sub>): x<sub>0</sub> là <b>hoành độ</b>, y<sub>0</sub> là <b>tung độ</b>. Điểm trên Ox có tung độ 0, điểm trên Oy có hoành độ 0.</li>\n  <li><b>Đồ thị</b> của hàm số y = f(x) là tập hợp các điểm (x; f(x)).</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> viết hoành độ trước, tung độ sau. M(−2; 3) nằm ở góc phần tư II (x âm, y dương), không phải (3; −2).</div>\n </div>\n <div class=\"sec\"><h3>Hàm số bậc nhất y = ax + b</h3>\n  <div class=\"fbox\"><span class=\"f\">y = ax + b (a ≠ 0)</span></div>\n  <p>Đồ thị là một <span class=\"mark\">đường thẳng</span> cắt trục tung tại (0; b) và cắt trục hoành tại (−b/a; 0). Muốn vẽ, chỉ cần xác định hai điểm rồi kẻ đường thẳng đi qua.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đồ thị hai đường thẳng song song y = 2x + 1 và y = 2x − 2\">\n<g stroke=\"var(--line)\" stroke-dasharray=\"2 3\">\n<line x1=\"20\" y1=\"60\" x2=\"260\" y2=\"60\"/><line x1=\"20\" y1=\"20\" x2=\"260\" y2=\"20\"/><line x1=\"20\" y1=\"140\" x2=\"260\" y2=\"140\"/>\n<line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"160\"/><line x1=\"180\" y1=\"10\" x2=\"180\" y2=\"160\"/><line x1=\"220\" y1=\"10\" x2=\"220\" y2=\"160\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"160\"/></g>\n<line x1=\"14\" y1=\"100\" x2=\"266\" y2=\"100\" stroke=\"var(--ink)\"/><line x1=\"140\" y1=\"164\" x2=\"140\" y2=\"6\" stroke=\"var(--ink)\"/>\n<polygon points=\"266,100 259,96 259,104\" fill=\"var(--ink)\"/><polygon points=\"140,6 136,13 144,13\" fill=\"var(--ink)\"/>\n<text x=\"262\" y=\"114\" class=\"svgt\">x</text><text x=\"146\" y=\"14\" class=\"svgt\">y</text><text x=\"144\" y=\"112\" class=\"svgm\">O</text>\n<g class=\"svgm\" text-anchor=\"middle\"><text x=\"180\" y=\"112\">2</text><text x=\"220\" y=\"112\">4</text><text x=\"100\" y=\"112\">−2</text><text x=\"60\" y=\"112\">−4</text></g>\n<g class=\"svgm\" text-anchor=\"end\"><text x=\"136\" y=\"64\">2</text><text x=\"136\" y=\"24\">4</text><text x=\"136\" y=\"144\">−2</text></g>\n<line x1=\"100\" y1=\"160\" x2=\"174\" y2=\"12\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n<line x1=\"130\" y1=\"160\" x2=\"204\" y2=\"12\" stroke=\"#D29A00\" stroke-width=\"2.5\"/>\n<circle cx=\"140\" cy=\"80\" r=\"3.5\" fill=\"var(--accent)\"/><circle cx=\"130\" cy=\"100\" r=\"3.5\" fill=\"var(--accent)\"/>\n<text x=\"134\" y=\"80\" class=\"svgt\" text-anchor=\"end\">(0; 1)</text><text x=\"126\" y=\"94\" class=\"svgt\" text-anchor=\"end\">(−0,5; 0)</text>\n<text x=\"24\" y=\"40\" class=\"svgt\" style=\"fill:var(--accent)\">y = 2x + 1</text><text x=\"198\" y=\"44\" class=\"svgt\">y = 2x − 2</text></svg>\n  <ul><li><b>a là hệ số góc</b>. a &gt; 0: đường thẳng “đi lên” từ trái sang phải, tạo với Ox góc nhọn. a &lt; 0: “đi xuống”, góc tù. |a| càng lớn, đường càng dốc.</li>\n  <li><b>b là tung độ gốc</b>: chỗ đường thẳng cắt trục tung.</li></ul>\n </div>\n <div class=\"sec\"><h3>Hai đường thẳng song song, cắt nhau</h3>\n  <p>Cho d: y = ax + b và d′: y = a′x + b′ (a, a′ ≠ 0).</p>\n  <div class=\"tbl\"><table><tr><th>Vị trí</th><th>Điều kiện</th></tr>\n  <tr><td>d ∥ d′ (song song)</td><td>a = a′ và b ≠ b′</td></tr>\n  <tr><td>d trùng d′</td><td>a = a′ và b = b′</td></tr>\n  <tr><td>d cắt d′</td><td>a ≠ a′</td></tr></table></div>\n  <p>Toạ độ giao điểm: giải phương trình hoành độ <span class=\"mark\">ax + b = a′x + b′</span> để tìm x, rồi thay vào một hàm để tìm y.</p>\n </div>\n <div class=\"sec\"><h3>So sánh hai hãng taxi <span class=\"tag\">Ứng dụng</span></h3>\n  <p>Hãng A: 20 000 đồng mở cửa, 12 000 đồng/km. Hãng B: 8 000 đồng mở cửa, 14 000 đồng/km.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Hai đồ thị cắt nhau khi 20 000 + 12 000x = 8 000 + 14 000x ⇒ x = 6 km. Đi dưới 6 km chọn hãng B rẻ hơn, trên 6 km chọn hãng A. Đường nào thấp hơn ở bên phải giao điểm thì rẻ hơn khi đi xa.</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🚕</span>Cước taxi, xe công nghệ</b>Phí mở cửa là b, giá mỗi km là a. Số tiền y = ax + b. Hãng có a nhỏ thì lời khi đi xa, hãng có b nhỏ thì lời khi đi gần.</div>\n   <div class=\"app\"><b><span class=\"ico\">💧</span>Hoá đơn tiền nước</b>Nhiều nơi tính phí cố định mỗi tháng cộng giá theo m<sup>3</sup>. Biết hai tháng dùng bao nhiêu và trả bao nhiêu là tìm ra a, b, rồi dự đoán hoá đơn tháng sau.</div>\n   <div class=\"app\"><b><span class=\"ico\">📱</span>Chọn gói cước điện thoại</b>Gói 1: 50 000 đồng/tháng + 500 đồng/phút gọi; gói 2: 1 500 đồng/phút. Hai đường cắt nhau ở 50 phút. Em gọi nhiều hơn 50 phút mỗi tháng thì gói 1 lợi hơn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌡️</span>Độ C và độ F</b>F = 1,8C + 32 là một hàm bậc nhất. Hai thang đo bằng nhau duy nhất ở −40 độ: giải C = 1,8C + 32.</div>\n   <div class=\"app\"><b><span class=\"ico\">⚡</span>Tiền điện bậc thang</b>Giá điện sinh hoạt ở Việt Nam tăng theo từng bậc số kWh. Mỗi bậc là một đoạn thẳng, càng lên bậc cao đoạn thẳng càng dốc, nên đồ thị là đường gấp khúc chứ không phải một đường thẳng.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao gọi a là “hệ số góc”?</summary>a quyết định góc nghiêng của đường thẳng so với trục Ox. Khi x tăng 1 đơn vị thì y tăng a đơn vị: a càng lớn thì đường càng dốc, như độ dốc của con dốc lên cầu.</details>\n  <details class=\"wq\"><summary>Vì sao hai đường thẳng có cùng hệ số góc thì không bao giờ cắt nhau (trừ khi trùng)?</summary>Chúng nghiêng y như nhau, chỉ lệch nhau theo chiều dọc một khoảng b − b′. Giống hai thanh ray đường tàu, chạy mãi vẫn cách đều.</details>\n  <details class=\"wq\"><summary>Hoá đơn tiền điện có phải hàm bậc nhất của số kWh không?</summary>Không hẳn. Trong từng bậc thì đúng là bậc nhất, nhưng sang bậc mới giá mỗi kWh tăng nên hệ số góc thay đổi. Đó là hàm “từng khúc”.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để kéo a, b xem đường thẳng xoay, dịch chuyển và so sánh hai hãng taxi.</p>\n<div class=\"sec intl\"><h3>Độ C và độ F: một hàm số bậc nhất <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Ở Mỹ, nhiệt độ thường ghi bằng <b>độ Fahrenheit (°F)</b>, thang do nhà vật lý Daniel Gabriel Fahrenheit đặt ra ở thế kỉ XVIII. Theo Britannica, nước đá tan ở <b>32 °F</b> và nước sôi ở <b>212 °F</b>, giữa hai mốc chia thành 180 phần bằng nhau. Trên thang Celsius, hai mốc đó là 0 °C và 100 °C.</p><div class=\"fbox\"><span class=\"f\">F = (9/5) · C + 32 = 1,8C + 32</span></div><p>Đây là <span class=\"mark\">hàm số bậc nhất y = ax + b với a = 1,8 và b = 32</span>:</p><ul><li><b>Hệ số góc</b> a = 180/100 = 1,8: tăng 1 °C thì tăng 1,8 °F.</li><li><b>Tung độ gốc</b> b = 32: khi C = 0 thì F = 32.</li></ul><svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đồ thị đổi độ C sang độ F\"><line x1=\"22\" y1=\"136.2\" x2=\"272\" y2=\"136.2\" stroke=\"var(--muted)\"/><line x1=\"95.7\" y1=\"166\" x2=\"95.7\" y2=\"4\" stroke=\"var(--muted)\"/><line x1=\"30.0\" y1=\"160.0\" x2=\"260.0\" y2=\"10.0\" stroke=\"var(--accent)\" stroke-width=\"2\"/><circle cx=\"30.0\" cy=\"160.0\" r=\"3\" fill=\"var(--ink)\"/><text x=\"36.0\" y=\"162.0\" class=\"svgm\" text-anchor=\"start\">(−40; −40)</text><circle cx=\"95.7\" cy=\"117.1\" r=\"3\" fill=\"var(--ink)\"/><text x=\"101.7\" y=\"127.1\" class=\"svgm\" text-anchor=\"start\">(0; 32) nước đá tan</text><circle cx=\"156.5\" cy=\"77.5\" r=\"3\" fill=\"var(--ink)\"/><text x=\"163.5\" y=\"85.5\" class=\"svgm\" text-anchor=\"start\">(37; 98,6) thân nhiệt</text><circle cx=\"260.0\" cy=\"10.0\" r=\"3\" fill=\"var(--ink)\"/><text x=\"254.0\" y=\"14.0\" class=\"svgm\" text-anchor=\"end\">(100; 212) nước sôi</text><text x=\"270\" y=\"132.2\" class=\"svgt\" text-anchor=\"end\">°C</text><text x=\"99.7\" y=\"12\" class=\"svgt\">°F</text><text x=\"150\" y=\"168\" class=\"svgm\" text-anchor=\"middle\">F = 1,8C + 32</text></svg><div class=\"eg\"><b>Ví dụ.</b> Hà Nội 35 °C thì F = 1,8 · 35 + 32 = 95 °F. Ngược lại, bản tin Mỹ báo 68 °F thì C = (68 − 32) : 1,8 = 20 °C.</div><div class=\"note\"><b>Điều thú vị:</b> có một nhiệt độ mà hai thang chỉ cùng một số. Giải C = 1,8C + 32 được C = −40. Vậy −40 °C = −40 °F, đó là giao điểm của đồ thị với đường thẳng y = x.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> linear function (hàm số bậc nhất), slope (hệ số góc), y-intercept (tung độ gốc), graph (đồ thị), freezing point (điểm đông đặc), boiling point (điểm sôi)</div><p class=\"src\">Nguồn: <a href=\"https://www.britannica.com/science/Fahrenheit-temperature-scale\" target=\"_blank\" rel=\"noopener\">Britannica, Fahrenheit temperature scale</a> (phỏng dịch, có bổ sung ví dụ)</p></div>",
  "formulas": [
   [
    "Hàm số bậc nhất",
    "y = ax + b (a ≠ 0)"
   ],
   [
    "Giao với trục tung",
    "(0; b)"
   ],
   [
    "Giao với trục hoành",
    "(−b/a; 0)"
   ],
   [
    "Hệ số góc",
    "a > 0: góc nhọn (đi lên);  a < 0: góc tù (đi xuống)"
   ],
   [
    "Song song",
    "a = a′ và b ≠ b′"
   ],
   [
    "Cắt nhau",
    "a ≠ a′; hoành độ giao điểm: ax + b = a′x + b′"
   ],
   [
    "Điểm thuộc đồ thị",
    "M(x₀; y₀) thuộc đồ thị ⇔ y₀ = f(x₀)"
   ]
  ],
  "quiz": [
   {
    "q": "Hàm số nào là hàm số bậc nhất?",
    "o": [
     "y = 3 − 2x",
     "y = 2x<sup>2</sup>",
     "y = 1/x + 1",
     "y = 0x + 5"
    ],
    "why": "y = 3 − 2x = −2x + 3 có dạng ax + b với a = −2 ≠ 0."
   },
   {
    "q": "Cho f(x) = 2x − 3. Giá trị f(−1) là:",
    "o": [
     "−5",
     "−1",
     "5",
     "1"
    ],
    "why": "f(−1) = 2 · (−1) − 3 = −5."
   },
   {
    "q": "Điểm M(−2; 3) nằm ở góc phần tư thứ:",
    "o": [
     "II",
     "I",
     "III",
     "IV"
    ],
    "why": "Hoành độ âm, tung độ dương: góc phần tư II (trên, bên trái)."
   },
   {
    "q": "Đồ thị hàm số y = 2x − 4 cắt trục hoành tại điểm:",
    "o": [
     "(2; 0)",
     "(0; −4)",
     "(−2; 0)",
     "(4; 0)"
    ],
    "why": "Trên trục hoành y = 0: 2x − 4 = 0 ⇒ x = 2. (0; −4) là giao điểm với trục tung."
   },
   {
    "q": "Đường thẳng nào song song với đường thẳng y = 3x + 1?",
    "o": [
     "y = 3x − 2",
     "y = −3x + 1",
     "y = x/3 + 1",
     "y = 3x + 1"
    ],
    "why": "Cần cùng hệ số góc a = 3 và b khác 1. y = 3x + 1 là trùng chứ không song song."
   },
   {
    "q": "Hệ số góc của đường thẳng y = 5 − 2x là:",
    "o": [
     "−2",
     "5",
     "2",
     "−5"
    ],
    "why": "Viết lại y = −2x + 5, hệ số góc là hệ số của x: −2."
   },
   {
    "q": "Đường thẳng y = (m − 2)x + 1 tạo với trục Ox một góc nhọn khi:",
    "o": [
     "m > 2",
     "m < 2",
     "m ≠ 2",
     "m > 0"
    ],
    "why": "Góc nhọn khi hệ số góc dương: m − 2 > 0 ⇔ m > 2."
   },
   {
    "q": "Taxi tính 10 000 đồng mở cửa và 15 000 đồng mỗi km. Đi 8 km phải trả:",
    "o": [
     "130 000 đồng",
     "120 000 đồng",
     "200 000 đồng",
     "145 000 đồng"
    ],
    "why": "y = 15 000 · 8 + 10 000 = 130 000 đồng."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Giá trị hàm số, đồ thị",
    "t": "Tính giá trị và tìm x",
    "q": "Cho hàm số y = f(x) = −2x + 5.<br>a) Tính f(0), f(2).<br>b) Tìm x để f(x) = 11.",
    "hint": "b) Giải phương trình −2x + 5 = 11.",
    "sol": "a) f(0) = 5; f(2) = −4 + 5 = 1.<br>b) −2x + 5 = 11 ⇒ −2x = 6 ⇒ <b>x = −3</b>.",
    "ans": -3,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 1,
    "d": "Giá trị hàm số, đồ thị",
    "t": "Đồ thị đi qua một điểm",
    "q": "Xác định hệ số a của hàm số y = ax + 3, biết đồ thị của nó đi qua điểm A(2; −1).",
    "hint": "Điểm thuộc đồ thị thì toạ độ thỏa mãn công thức: thay x = 2, y = −1.",
    "sol": "Thay x = 2, y = −1: −1 = a · 2 + 3 ⇒ 2a = −4 ⇒ <b>a = −2</b>.<br>Hàm số là y = −2x + 3.",
    "ans": -2,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Hai đường thẳng",
    "t": "Tìm m để song song",
    "q": "Tìm m để đường thẳng y = (2m − 1)x + 3 song song với đường thẳng y = 5x − 1.",
    "hint": "Song song: hệ số góc bằng nhau và tung độ gốc khác nhau.",
    "sol": "Điều kiện: 2m − 1 = 5 và 3 ≠ −1.<br>2m − 1 = 5 ⇒ <b>m = 3</b>. Điều kiện 3 ≠ −1 luôn đúng.<br>Khi đó đường thẳng là y = 5x + 3.",
    "ans": 3,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Hai đường thẳng",
    "t": "Diện tích tam giác tạo bởi hai đường thẳng",
    "q": "Hai đường thẳng d<sub>1</sub>: y = 2x − 1 và d<sub>2</sub>: y = −x + 5 cắt nhau tại I và cắt trục hoành lần lượt tại A, B.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Hai đường thẳng y = 2x − 1 và y = −x + 5 cùng trục hoành tạo thành một tam giác\">\n<polygon points=\"60,140 150,140 90,80\" fill=\"var(--hl)\" opacity=\".5\"/>\n<line x1=\"10\" y1=\"140\" x2=\"252\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"50\" y1=\"166\" x2=\"50\" y2=\"6\" stroke=\"var(--ink)\"/>\n<polygon points=\"252,140 245,136 245,144\" fill=\"var(--ink)\"/><polygon points=\"50,6 46,13 54,13\" fill=\"var(--ink)\"/>\n<text x=\"246\" y=\"156\" class=\"svgt\">x</text><text x=\"56\" y=\"14\" class=\"svgt\">y</text><text x=\"44\" y=\"152\" class=\"svgm\" text-anchor=\"end\">O</text>\n<line x1=\"50\" y1=\"160\" x2=\"118\" y2=\"24\" stroke=\"var(--accent)\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"30\" x2=\"170\" y2=\"160\" stroke=\"#D29A00\" stroke-width=\"2\"/>\n<circle cx=\"90\" cy=\"80\" r=\"3\" fill=\"var(--ink)\"/><text x=\"98\" y=\"78\" class=\"svgt\">I</text>\n<text x=\"60\" y=\"154\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"150\" y=\"154\" class=\"svgt\" text-anchor=\"middle\">B</text>\n<text x=\"122\" y=\"30\" class=\"svgt\">y = 2x − 1</text><text x=\"160\" y=\"128\" class=\"svgt\">y = −x + 5</text></svg>a) Tìm toạ độ I, A, B.<br>b) Tính diện tích tam giác IAB (đơn vị đo trên các trục là cm).",
    "hint": "Giao điểm: giải 2x − 1 = −x + 5. Cạnh đáy AB nằm trên Ox, chiều cao là tung độ của I.",
    "sol": "a) 2x − 1 = −x + 5 ⇒ 3x = 6 ⇒ x = 2, y = 3. Vậy I(2; 3).<br>A: 2x − 1 = 0 ⇒ A(0,5; 0). B: −x + 5 = 0 ⇒ B(5; 0).<br>b) AB = 5 − 0,5 = 4,5 cm; chiều cao bằng tung độ của I: 3 cm.<br>S = ½ · 4,5 · 3 = <b>6,75 cm<sup>2</sup></b>.",
    "ans": 6.75,
    "unit": "cm²",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Ứng dụng thực tế",
    "t": "Chọn hãng taxi",
    "q": "Hãng taxi A tính 20 000 đồng mở cửa và 12 000 đồng mỗi km. Hãng B tính 8 000 đồng mở cửa và 14 000 đồng mỗi km.<br>a) Viết hàm số biểu thị số tiền y<sub>A</sub>, y<sub>B</sub> theo số km x.<br>b) Đi bao nhiêu km thì hai hãng thu tiền bằng nhau?<br>c) Nhà bà ngoại cách nhà An 15 km, nên đi hãng nào?",
    "hint": "Cho y<sub>A</sub> = y<sub>B</sub> rồi giải phương trình.",
    "sol": "a) y<sub>A</sub> = 12 000x + 20 000; y<sub>B</sub> = 14 000x + 8 000.<br>b) 12 000x + 20 000 = 14 000x + 8 000 ⇒ 2 000x = 12 000 ⇒ <b>x = 6 km</b>.<br>c) Với x = 15: y<sub>A</sub> = 200 000 đồng, y<sub>B</sub> = 218 000 đồng. Nên đi hãng A (đi xa hơn 6 km thì hãng A rẻ hơn).",
    "ans": 6,
    "unit": "km",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Ứng dụng thực tế",
    "t": "Dự đoán hoá đơn tiền nước",
    "q": "Tiền nước mỗi tháng của nhà Lan gồm một khoản phí cố định cộng với tiền tính theo số m<sup>3</sup> nước dùng, nên số tiền y (đồng) là hàm bậc nhất y = ax + b của số m<sup>3</sup> x. Tháng 3 nhà Lan dùng 12 m<sup>3</sup> và trả 145 000 đồng; tháng 4 dùng 16 m<sup>3</sup> và trả 185 000 đồng. Nếu tháng 5 dùng 20 m<sup>3</sup> thì phải trả bao nhiêu đồng?",
    "hint": "Từ hai tháng, viết hai đẳng thức 12a + b = 145 000 và 16a + b = 185 000. Trừ vế theo vế để tìm a.",
    "sol": "12a + b = 145 000 và 16a + b = 185 000.<br>Trừ vế theo vế: 4a = 40 000 ⇒ a = 10 000 (đồng/m<sup>3</sup>).<br>b = 145 000 − 120 000 = 25 000 (phí cố định).<br>y = 10 000x + 25 000. Tháng 5: y = 200 000 + 25 000 = <b>225 000 đồng</b>.",
    "ans": 225000,
    "unit": "đồng",
    "tol": 1
   },
   {
    "lv": 3,
    "d": "Hai đường thẳng",
    "t": "Ba đường thẳng đồng quy",
    "q": "Tìm m để ba đường thẳng y = 2x − 3, y = −x + 3 và y = (m − 1)x + 2m − 7 cùng đi qua một điểm.",
    "hint": "Tìm giao điểm của hai đường thẳng đầu, rồi bắt đường thứ ba đi qua điểm đó.",
    "sol": "Giao điểm hai đường đầu: 2x − 3 = −x + 3 ⇒ x = 2, y = 1. Điểm chung là (2; 1).<br>Đường thứ ba đi qua (2; 1): 1 = 2(m − 1) + 2m − 7 = 4m − 9 ⇒ <b>m = 2,5</b>.<br>Khi đó đường thứ ba là y = 1,5x − 2, khác hai đường kia nên thỏa mãn.",
    "ans": 2.5,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 3,
    "d": "Hai đường thẳng",
    "t": "Điểm cố định",
    "q": "Chứng minh rằng với mọi giá trị của m, đường thẳng y = (m − 2)x + 2m + 1 luôn đi qua một điểm cố định. Tìm toạ độ điểm đó.",
    "hint": "Viết lại thành m(x + 2) + (−2x + 1 − y) = 0. Đẳng thức đúng với mọi m khi cả hệ số của m và phần còn lại đều bằng 0.",
    "sol": "Giả sử điểm (x<sub>0</sub>; y<sub>0</sub>) thuộc đường thẳng với mọi m:<br>y<sub>0</sub> = (m − 2)x<sub>0</sub> + 2m + 1 ⇔ m(x<sub>0</sub> + 2) − 2x<sub>0</sub> + 1 − y<sub>0</sub> = 0 với mọi m.<br>⇒ x<sub>0</sub> + 2 = 0 và −2x<sub>0</sub> + 1 − y<sub>0</sub> = 0 ⇒ x<sub>0</sub> = −2, y<sub>0</sub> = 5.<br>Vậy mọi đường thẳng của họ này đều đi qua điểm cố định <b>(−2; 5)</b>.<br>Thử: m = 0 ⇒ y = −2x + 1, tại x = −2 có y = 5 ✓; m = 3 ⇒ y = x + 7, tại x = −2 có y = 5 ✓.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Tam giác tạo bởi ba đường thẳng (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tính diện tích tam giác tạo bởi ba đường thẳng y = 5, y = 1 + x và y = 1 − x.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_21\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 21</a> (phỏng dịch)</p>",
    "hint": "Tìm giao điểm từng cặp đường thẳng bằng cách cho hai vế bằng nhau. Cạnh nằm trên y = 5 nằm ngang nên dễ tính đáy và chiều cao.",
    "sol": "y = 5 và y = 1 + x: 1 + x = 5 ⇒ x = 4, giao điểm (4; 5).<br>y = 5 và y = 1 − x: x = −4, giao điểm (−4; 5).<br>y = 1 + x và y = 1 − x: x = 0, giao điểm (0; 1).<br>Đáy nằm trên y = 5 dài 4 − (−4) = 8; chiều cao từ (0; 1) lên y = 5 là 4.<br>Diện tích = 8 · 4 : 2 = <b>16</b> (đơn vị diện tích).",
    "ans": 16,
    "unit": "đvdt",
    "tol": 0.01
   },
   {
    "lv": 3,
    "t": "Chiếc đồng hồ chạy nhanh (2018 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Đồng hồ trên ô tô của Sri chạy nhanh đều đặn. Lúc bắt đầu đi chợ, đồng hồ ô tô và đồng hồ đeo tay (chạy đúng) đều chỉ 12:00 trưa. Khi đi chợ xong, đồng hồ đeo tay chỉ 12:30 còn đồng hồ ô tô chỉ 12:35. Chiều hôm đó Sri làm mất đồng hồ đeo tay. Anh nhìn đồng hồ ô tô thấy chỉ 7:00 tối. Giờ thật lúc đó là mấy giờ? (Nhập số giờ theo cách viết 24 giờ.)<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2018_AMC_8_Problems/Problem_12\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2018 AMC 8 Problem 12</a> (phỏng dịch)</p>",
    "hint": "Gọi t là số phút thật đã trôi qua kể từ trưa, s là số phút đồng hồ ô tô đã chạy. Vì đồng hồ nhanh đều nên s là hàm bậc nhất của t: s = a · t. Tìm a từ dữ kiện 30 phút thật ứng với 35 phút ô tô.",
    "sol": "Từ trưa: 30 phút thật thì đồng hồ ô tô chạy 35 phút ⇒ s = (35/30)t = (7/6)t (hàm số bậc nhất, đồ thị qua gốc toạ độ).<br>Đồng hồ ô tô chỉ 7:00 tối, tức s = 7 giờ = 420 phút.<br>420 = (7/6)t ⇒ t = 420 · 6/7 = 360 phút = 6 giờ.<br>Giờ thật là 12:00 + 6 giờ = 6:00 chiều, tức <b>18 giờ</b>.",
    "ans": 18,
    "unit": "giờ",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t6",
  "position": 6,
  "title": "Tứ giác",
  "icon": "🔷",
  "lab": "toan_quad",
  "theory": "<div class=\"sec\"><h3>Tứ giác</h3>\n  <p>Tứ giác ABCD gồm bốn đoạn thẳng AB, BC, CD, DA, trong đó không có hai đoạn nào cùng nằm trên một đường thẳng. <b>Tứ giác lồi</b> là tứ giác luôn nằm về một phía của đường thẳng chứa bất kì cạnh nào. (Ở lớp 8, “tứ giác” được hiểu là tứ giác lồi.)</p>\n  <div class=\"fbox\"><span class=\"f\">∠A + ∠B + ∠C + ∠D = 360°</span></div>\n  <p class=\"muted\">Lí do: kẻ đường chéo AC chia tứ giác thành hai tam giác, mỗi tam giác có tổng ba góc 180°.</p>\n </div>\n <div class=\"sec\"><h3>Hình thang, hình thang cân</h3>\n  <ul><li><b>Hình thang</b> là tứ giác có hai cạnh đối song song (hai đáy). Hai góc kề một cạnh bên bù nhau (tổng 180°).</li>\n  <li><b>Hình thang cân</b> là hình thang có <span class=\"mark\">hai góc kề một đáy bằng nhau</span>.</li>\n  <li>Tính chất: hai cạnh bên bằng nhau; <b>hai đường chéo bằng nhau</b>.</li>\n  <li>Dấu hiệu: hình thang có hai đường chéo bằng nhau là hình thang cân.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> hình thang có hai cạnh bên bằng nhau <u>chưa chắc</u> là hình thang cân, nó có thể là hình bình hành.</div>\n </div>\n <div class=\"sec\"><h3>Hình bình hành</h3>\n  <p>Là tứ giác có các cạnh đối <b>song song</b>. Trong hình bình hành:</p>\n  <ul><li>các cạnh đối bằng nhau; các góc đối bằng nhau;</li>\n  <li><span class=\"mark\">hai đường chéo cắt nhau tại trung điểm của mỗi đường</span>.</li></ul>\n  <p><b>Dấu hiệu nhận biết</b> (tứ giác là hình bình hành nếu): các cạnh đối song song; các cạnh đối bằng nhau; hai cạnh đối song song và bằng nhau; các góc đối bằng nhau; hai đường chéo cắt nhau tại trung điểm mỗi đường.</p>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> “hai cạnh đối song song, hai cạnh đối kia bằng nhau” <u>không</u> đủ: hình thang cân cũng như vậy. Phải là <i>cùng một cặp</i> cạnh vừa song song vừa bằng nhau.</div>\n </div>\n <div class=\"sec\"><h3>Hình chữ nhật, hình thoi, hình vuông</h3>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Sơ đồ quan hệ giữa các loại tứ giác\">\n<g stroke=\"var(--muted)\" stroke-width=\"1.3\">\n<line x1=\"140\" y1=\"26\" x2=\"140\" y2=\"38\"/><line x1=\"140\" y1=\"58\" x2=\"62\" y2=\"74\"/><line x1=\"140\" y1=\"58\" x2=\"210\" y2=\"74\"/>\n<line x1=\"210\" y1=\"94\" x2=\"120\" y2=\"110\"/><line x1=\"210\" y1=\"94\" x2=\"232\" y2=\"110\"/><line x1=\"62\" y1=\"94\" x2=\"120\" y2=\"110\"/>\n<line x1=\"120\" y1=\"130\" x2=\"176\" y2=\"144\"/><line x1=\"232\" y1=\"130\" x2=\"176\" y2=\"144\"/></g>\n<rect x=\"105\" y=\"6\" width=\"70\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"140\" y=\"20\" class=\"svgt\" text-anchor=\"middle\">Tứ giác</text><rect x=\"98\" y=\"38\" width=\"84\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"140\" y=\"52\" class=\"svgt\" text-anchor=\"middle\">Hình thang</text><rect x=\"10\" y=\"74\" width=\"104\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"62\" y=\"88\" class=\"svgt\" text-anchor=\"middle\">Hình thang cân</text><rect x=\"160\" y=\"74\" width=\"100\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"210\" y=\"88\" class=\"svgt\" text-anchor=\"middle\">Hình bình hành</text><rect x=\"72\" y=\"110\" width=\"96\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"120\" y=\"124\" class=\"svgt\" text-anchor=\"middle\">Hình chữ nhật</text><rect x=\"196\" y=\"110\" width=\"72\" height=\"20\" rx=\"5\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><text x=\"232\" y=\"124\" class=\"svgt\" text-anchor=\"middle\">Hình thoi</text><rect x=\"134\" y=\"144\" width=\"84\" height=\"20\" rx=\"5\" fill=\"var(--hl)\" stroke=\"var(--ink)\"/><text x=\"176\" y=\"158\" class=\"svgt\" text-anchor=\"middle\">Hình vuông</text>\n<text x=\"8\" y=\"20\" class=\"svgm\">↓ thêm điều kiện</text></svg>\n  <div class=\"tbl\"><table><tr><th>Hình</th><th>Định nghĩa</th><th>Đường chéo</th><th>Dấu hiệu từ hình bình hành</th></tr>\n  <tr><td>Hình chữ nhật</td><td>4 góc vuông</td><td>bằng nhau, cắt nhau tại trung điểm</td><td>có 1 góc vuông, hoặc 2 đường chéo bằng nhau</td></tr>\n  <tr><td>Hình thoi</td><td>4 cạnh bằng nhau</td><td>vuông góc, là phân giác các góc</td><td>có 2 cạnh kề bằng nhau, hoặc 2 đường chéo vuông góc, hoặc 1 đường chéo là phân giác</td></tr>\n  <tr><td>Hình vuông</td><td>4 góc vuông và 4 cạnh bằng nhau</td><td>bằng nhau, vuông góc, cắt nhau tại trung điểm</td><td>vừa là hình chữ nhật vừa là hình thoi</td></tr></table></div>\n  <p>Hình vuông là hình chữ nhật có hai cạnh kề bằng nhau, cũng là hình thoi có một góc vuông. Nó có <span class=\"mark\">đầy đủ tính chất</span> của mọi hình phía trên trong sơ đồ.</p>\n </div>\n <div class=\"sec\"><h3>Đường trung tuyến của tam giác vuông</h3>\n  <div class=\"fbox\"><span class=\"f\">△ABC vuông tại A, M là trung điểm BC ⇒ AM = BC/2</span></div>\n  <p>Lí do: lấy D đối xứng với A qua M thì ABDC là hình bình hành có góc vuông, tức là hình chữ nhật. Hai đường chéo AD = BC, mà AM = AD/2.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🚪</span>Kiểm tra khung cửa vuông</b>Thợ mộc đóng khung có các cạnh đối bằng nhau (hình bình hành) rồi đo hai đường chéo. Hai đường chéo bằng nhau thì khung là hình chữ nhật, cửa sẽ đóng khít.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏮</span>Cổng xếp, giá phơi đồ xếp</b>Các thanh sắt tạo thành dãy hình thoi. Kéo ra thì góc thay đổi nhưng cạnh không đổi, nên cổng dài ra hay thu ngắn lại rất linh hoạt.</div>\n   <div class=\"app\"><b><span class=\"ico\">💡</span>Đèn bàn tay gập</b>Hai thanh song song và bằng nhau tạo thành hình bình hành. Dù gập lên xuống thế nào, đầu đèn vẫn giữ nguyên hướng chiếu.</div>\n   <div class=\"app\"><b><span class=\"ico\">🪁</span>Diều và gạch lát</b>Gạch lát hình thoi, hình lục giác ghép kín mặt sân không để hở nhờ tổng các góc tại mỗi đỉnh bằng 360°.</div>\n   <div class=\"app\"><b><span class=\"ico\">✂️</span>Cắt vải, gấp giấy</b>Gấp đôi tờ giấy hai lần theo hai nếp vuông góc rồi cắt chéo một nhát, mở ra là được hình thoi: hai nếp gấp chính là hai đường chéo vuông góc.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao chỉ đo bốn cạnh thì chưa biết khung có vuông không?</summary>Bốn cạnh của hình chữ nhật đem xô lệch đi vẫn giữ nguyên độ dài, nhưng thành hình bình hành. Phải đo thêm đường chéo (hoặc góc) mới chắc chắn.</details>\n  <details class=\"wq\"><summary>Vì sao bàn ghế hay giằng thêm thanh chéo?</summary>Khung bốn cạnh dễ bị xô thành hình bình hành. Thêm thanh chéo chia khung thành hai tam giác, mà tam giác thì không thể biến dạng khi giữ nguyên ba cạnh.</details>\n  <details class=\"wq\"><summary>Hình vuông có phải là hình thoi không?</summary>Có. Hình vuông có bốn cạnh bằng nhau nên là hình thoi đặc biệt (có góc vuông). Tương tự, hình vuông cũng là hình chữ nhật, hình bình hành và hình thang cân.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để kéo góc và cạnh, biến hình bình hành thành hình chữ nhật, hình thoi, hình vuông.</p>\n<div class=\"sec intl\"><h3>Định lí Varignon: nối trung điểm bốn cạnh <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>AoPS gọi đây là \"một định lí thật tuyệt về tứ giác\", mang tên nhà toán học Pháp Pierre Varignon (1654 đến 1722):</p><div class=\"fbox\"><span class=\"f\">Nối trung điểm bốn cạnh của một tứ giác bất kì ⇒ được một tứ giác có diện tích bằng một nửa tứ giác ban đầu.</span></div><svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Tứ giác Varignon nối trung điểm các cạnh\"><polygon points=\"30.0,120.0 110.0,20.0 250.0,70.0 190.0,155.0\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"70.0,70.0 180.0,45.0 220.0,112.5 110.0,137.5\" fill=\"var(--hl)\" fill-opacity=\".45\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"120\" x2=\"250\" y2=\"70\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/><circle cx=\"30.0\" cy=\"120.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"20.0\" y=\"124.0\" class=\"svgt\">A</text><circle cx=\"110.0\" cy=\"20.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"106.0\" y=\"14.0\" class=\"svgt\">B</text><circle cx=\"250.0\" cy=\"70.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"256.0\" y=\"74.0\" class=\"svgt\">C</text><circle cx=\"190.0\" cy=\"155.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"194.0\" y=\"167.0\" class=\"svgt\">D</text><circle cx=\"70.0\" cy=\"70.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"56.0\" y=\"70.0\" class=\"svgt\">M</text><circle cx=\"180.0\" cy=\"45.0\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"184.0\" y=\"39.0\" class=\"svgt\">N</text><circle cx=\"220.0\" cy=\"112.5\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"226.0\" y=\"120.5\" class=\"svgt\">P</text><circle cx=\"110.0\" cy=\"137.5\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"100.0\" y=\"151.5\" class=\"svgt\">Q</text><text x=\"275\" y=\"14\" class=\"svgm\" text-anchor=\"end\">MNPQ: hình bình hành</text></svg><p>Hơn thế nữa, <span class=\"mark\">tứ giác MNPQ luôn là hình bình hành</span>, dù ABCD có méo đến đâu. Lí do: MN và QP đều song song với đường chéo AC và dài bằng nửa AC (em sẽ chứng minh được khi học <b>đường trung bình của tam giác</b> ở chương sau). Một tứ giác có hai cạnh đối song song và bằng nhau là hình bình hành.</p><ul><li>Nếu hai đường chéo AC ⊥ BD thì MNPQ là <b>hình chữ nhật</b>.</li><li>Nếu AC = BD thì MNPQ là <b>hình thoi</b>.</li><li>Nếu ABCD là hình vuông thì MNPQ là <b>hình vuông</b>.</li></ul><div class=\"eg\"><b>Thử ở nhà.</b> Vẽ một tứ giác thật méo trên giấy kẻ ô, đánh dấu trung điểm bốn cạnh rồi nối lại. Em đếm ô để thấy diện tích tứ giác giữa đúng bằng một nửa.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> quadrilateral (tứ giác), midpoint (trung điểm), parallelogram (hình bình hành), diagonal (đường chéo), rhombus (hình thoi), area (diện tích)</div><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/Varignon%27s_theorem\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, Varignon's theorem</a> (phỏng dịch, có bổ sung)</p></div>",
  "formulas": [
   [
    "Tổng các góc tứ giác",
    "∠A + ∠B + ∠C + ∠D = 360°"
   ],
   [
    "Hình thang cân",
    "2 góc kề đáy bằng nhau; 2 đường chéo bằng nhau"
   ],
   [
    "Hình bình hành",
    "cạnh đối, góc đối bằng nhau; đường chéo cắt nhau tại trung điểm mỗi đường"
   ],
   [
    "Hình chữ nhật",
    "HBH + 1 góc vuông, hoặc HBH + 2 đường chéo bằng nhau"
   ],
   [
    "Hình thoi",
    "HBH + 2 cạnh kề bằng nhau, hoặc 2 đường chéo vuông góc"
   ],
   [
    "Hình vuông",
    "vừa là hình chữ nhật vừa là hình thoi"
   ],
   [
    "Trung tuyến tam giác vuông",
    "AM = BC/2 (M là trung điểm cạnh huyền BC)"
   ]
  ],
  "quiz": [
   {
    "q": "Tổng các góc của một tứ giác bằng:",
    "o": [
     "360°",
     "180°",
     "540°",
     "720°"
    ],
    "why": "Đường chéo chia tứ giác thành hai tam giác: 2 · 180° = 360°."
   },
   {
    "q": "Tứ giác ABCD có ∠A = 70°, ∠B = 110°, ∠C = 80°. Số đo ∠D là:",
    "o": [
     "100°",
     "80°",
     "90°",
     "120°"
    ],
    "why": "∠D = 360° − (70° + 110° + 80°) = 100°."
   },
   {
    "q": "Hình bình hành có hai đường chéo bằng nhau là:",
    "o": [
     "Hình chữ nhật",
     "Hình thoi",
     "Hình thang cân",
     "Hình vuông"
    ],
    "why": "Đó là dấu hiệu nhận biết hình chữ nhật. Chưa đủ để là hình vuông vì các cạnh kề có thể khác nhau."
   },
   {
    "q": "Tính chất nào hình thoi luôn có nhưng hình chữ nhật thì không?",
    "o": [
     "Hai đường chéo vuông góc với nhau",
     "Hai đường chéo cắt nhau tại trung điểm mỗi đường",
     "Các cạnh đối song song",
     "Các góc đối bằng nhau"
    ],
    "why": "Ba tính chất còn lại là của mọi hình bình hành, nên cả hai hình đều có."
   },
   {
    "q": "Một hình thang có hai cạnh bên bằng nhau thì:",
    "o": [
     "Chưa chắc là hình thang cân",
     "Luôn là hình thang cân",
     "Luôn là hình bình hành",
     "Luôn là hình chữ nhật"
    ],
    "why": "Hình bình hành cũng là hình thang có hai cạnh bên bằng nhau. Dấu hiệu đúng là hai đường chéo bằng nhau hoặc hai góc kề một đáy bằng nhau."
   },
   {
    "q": "Tam giác ABC vuông tại A có BC = 10 cm, M là trung điểm BC. Độ dài AM là:",
    "o": [
     "5 cm",
     "10 cm",
     "6 cm",
     "8 cm"
    ],
    "why": "Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: 10 : 2 = 5 cm."
   },
   {
    "q": "Hình thoi có cạnh 4 cm và một góc 60°. Đường chéo ngắn của nó dài:",
    "o": [
     "4 cm",
     "2 cm",
     "8 cm",
     "6 cm"
    ],
    "why": "Đường chéo ngắn chia hình thoi thành hai tam giác cân có góc 60°, tức tam giác đều cạnh 4 cm."
   },
   {
    "q": "Điều kiện nào KHÔNG đủ để kết luận tứ giác là hình bình hành?",
    "o": [
     "Có hai cạnh đối song song, hai cạnh đối kia bằng nhau",
     "Có các cạnh đối bằng nhau",
     "Có hai đường chéo cắt nhau tại trung điểm mỗi đường",
     "Có các góc đối bằng nhau"
    ],
    "why": "Hình thang cân có hai đáy song song và hai cạnh bên bằng nhau nhưng không phải hình bình hành."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Tính góc",
    "t": "Bốn góc tỉ lệ 1 : 2 : 3 : 4",
    "q": "Tứ giác ABCD có các góc tỉ lệ ∠A : ∠B : ∠C : ∠D = 1 : 2 : 3 : 4. Tính số đo góc D (độ).",
    "hint": "Tổng 4 góc là 360°, chia thành 1 + 2 + 3 + 4 = 10 phần bằng nhau.",
    "sol": "Mỗi phần: 360° : 10 = 36°.<br>∠A = 36°, ∠B = 72°, ∠C = 108°, <b>∠D = 144°</b>.",
    "ans": 144,
    "unit": "°",
    "tol": 0.01
   },
   {
    "lv": 1,
    "d": "Tính góc",
    "t": "Góc của hình thang cân",
    "q": "Cho hình thang cân ABCD (AB ∥ CD) có ∠D = 65°. Tính ∠B (độ).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Hình thang cân ABCD\">\n<polygon points=\"80,40 180,40 230,140 30,140\" fill=\"var(--hl)\" fill-opacity=\".3\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<text x=\"76\" y=\"34\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"184\" y=\"34\" class=\"svgt\">B</text>\n<text x=\"236\" y=\"154\" class=\"svgt\">C</text><text x=\"24\" y=\"154\" class=\"svgt\" text-anchor=\"end\">D</text>\n<path d=\"M 52 140 A 22 22 0 0 0 40 120\" fill=\"none\" stroke=\"var(--accent)\"/><text x=\"58\" y=\"132\" class=\"svgt\">65°</text></svg>",
    "hint": "Hình thang cân có hai góc kề đáy bằng nhau. Hai góc kề một cạnh bên thì bù nhau.",
    "sol": "Hai góc kề đáy CD bằng nhau: ∠C = ∠D = 65°.<br>Vì AB ∥ CD nên ∠B + ∠C = 180° (hai góc kề cạnh bên BC).<br><b>∠B = 180° − 65° = 115°</b>. (Tương tự ∠A = 115°.)",
    "ans": 115,
    "unit": "°",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Chứng minh nhận dạng",
    "t": "Điểm đối xứng qua trung điểm",
    "q": "Cho tam giác ABC, M là trung điểm của BC. Trên tia AM lấy điểm D sao cho M là trung điểm của AD.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC, M là trung điểm BC, D đối xứng với A qua M\">\n<polygon points=\"100,15 30,85 160,155 230,85\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"30\" y1=\"85\" x2=\"230\" y2=\"85\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/><line x1=\"100\" y1=\"15\" x2=\"160\" y2=\"155\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/>\n<circle cx=\"130\" cy=\"85\" r=\"3\" fill=\"var(--accent)\"/>\n<text x=\"100\" y=\"12\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"24\" y=\"89\" class=\"svgt\" text-anchor=\"end\">B</text>\n<text x=\"236\" y=\"89\" class=\"svgt\">C</text><text x=\"160\" y=\"168\" class=\"svgt\" text-anchor=\"middle\">D</text><text x=\"138\" y=\"80\" class=\"svgt\">M</text></svg>a) Chứng minh ABDC là hình bình hành.<br>b) Tam giác ABC cần thêm điều kiện gì để ABDC là hình chữ nhật? hình thoi?",
    "hint": "a) Xét hai đường chéo AD và BC của tứ giác ABDC. b) Dùng dấu hiệu từ hình bình hành.",
    "sol": "a) Tứ giác ABDC có hai đường chéo AD và BC cắt nhau tại M, M là trung điểm của mỗi đường ⇒ ABDC là <b>hình bình hành</b>.<br>b) Hình bình hành ABDC là hình chữ nhật khi có một góc vuông, tức <b>∠BAC = 90°</b> (tam giác ABC vuông tại A).<br>ABDC là hình thoi khi hai cạnh kề bằng nhau AB = AC, tức <b>tam giác ABC cân tại A</b>.<br>Hệ quả: nếu tam giác vuông tại A thì AD = BC nên AM = BC/2.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "d": "Tính góc",
    "t": "Hai góc kề của hình bình hành",
    "q": "Hình bình hành ABCD có ∠A − ∠B = 40°. Tính số đo ∠C (độ).",
    "hint": "Trong hình bình hành, hai góc kề một cạnh bù nhau; hai góc đối bằng nhau.",
    "sol": "AD ∥ BC nên ∠A + ∠B = 180°. Kết hợp ∠A − ∠B = 40°:<br>∠A = (180° + 40°) : 2 = 110°; ∠B = 70°.<br>Hai góc đối bằng nhau: <b>∠C = ∠A = 110°</b>.",
    "ans": 110,
    "unit": "°",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Bài toán thực tế",
    "t": "Cổng xếp hình thoi",
    "q": "Cánh cổng xếp của trường gồm các thanh sắt tạo thành một hàng 10 hình thoi giống nhau, nối tiếp nhau theo đường chéo nằm ngang, mỗi hình thoi có cạnh 20 cm. Khi kéo mở, góc ở đỉnh trên và đỉnh dưới của mỗi hình thoi là 60°. Hỏi khi đó cổng rộng bao nhiêu cm? (Bỏ qua bề dày thanh sắt.)<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Một phần cổng xếp gồm các hình thoi nối tiếp\"><polygon points=\"20,85 40,50.4 60,85 40,119.6\" fill=\"var(--hl)\" fill-opacity=\".25\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"60,85 80,50.4 100,85 80,119.6\" fill=\"var(--hl)\" fill-opacity=\".25\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"100,85 120,50.4 140,85 120,119.6\" fill=\"var(--hl)\" fill-opacity=\".25\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"140,85 160,50.4 180,85 160,119.6\" fill=\"var(--hl)\" fill-opacity=\".25\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"180,85 200,50.4 220,85 200,119.6\" fill=\"var(--hl)\" fill-opacity=\".25\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<path d=\"M 34 60.8 A 12 12 0 0 0 46 60.8\" fill=\"none\" stroke=\"var(--accent)\"/><text x=\"40\" y=\"78\" class=\"svgm\" text-anchor=\"middle\">60°</text>\n<text x=\"40\" y=\"134\" class=\"svgm\" text-anchor=\"middle\">cạnh 20 cm</text>\n<line x1=\"20\" y1=\"150\" x2=\"220\" y2=\"150\" stroke=\"var(--muted)\"/><line x1=\"20\" y1=\"144\" x2=\"20\" y2=\"156\" stroke=\"var(--muted)\"/><line x1=\"220\" y1=\"144\" x2=\"220\" y2=\"156\" stroke=\"var(--muted)\"/>\n<text x=\"120\" y=\"167\" class=\"svgm\" text-anchor=\"middle\">chiều rộng cổng (hình vẽ một phần)</text></svg>",
    "hint": "Đường chéo nằm ngang chia hình thoi thành hai tam giác cân có góc ở đỉnh 60°.",
    "sol": "Xét một hình thoi: đường chéo nằm ngang tạo với hai cạnh tại đỉnh trên thành một tam giác cân có góc ở đỉnh 60°, nên đó là tam giác đều.<br>⇒ Đường chéo nằm ngang dài bằng cạnh: 20 cm.<br>Chiều rộng cổng: 10 · 20 = <b>200 cm</b> (2 m).<br>Kéo rộng góc lên 90° thì mỗi hình thoi thành hình vuông, đường chéo dài hơn và cổng mở rộng hơn.",
    "ans": 200,
    "unit": "cm",
    "tol": 0.5
   },
   {
    "lv": 2,
    "d": "Chứng minh nhận dạng",
    "t": "Hình chữ nhật trong tam giác vuông",
    "q": "Cho tam giác ABC vuông tại A, đường trung tuyến AM. Kẻ MD ⊥ AB (D ∈ AB), ME ⊥ AC (E ∈ AC).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC vuông tại A, trung tuyến AM, MD vuông góc AB, ME vuông góc AC\">\n<polygon points=\"40,140 40,30 220,140\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<rect x=\"40\" y=\"85\" width=\"90\" height=\"55\" fill=\"var(--hl)\" fill-opacity=\".35\" stroke=\"var(--accent)\"/>\n<line x1=\"40\" y1=\"140\" x2=\"130\" y2=\"85\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/>\n<path d=\"M40 130 H50 V140\" fill=\"none\" stroke=\"var(--ink)\"/><path d=\"M40 95 H50 V85\" fill=\"none\" stroke=\"var(--ink)\"/><path d=\"M120 140 V130 H130\" fill=\"none\" stroke=\"var(--ink)\"/>\n<text x=\"34\" y=\"152\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"34\" y=\"30\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"226\" y=\"152\" class=\"svgt\">C</text>\n<text x=\"136\" y=\"82\" class=\"svgt\">M</text><text x=\"34\" y=\"89\" class=\"svgt\" text-anchor=\"end\">D</text><text x=\"130\" y=\"155\" class=\"svgt\" text-anchor=\"middle\">E</text></svg>a) Chứng minh ADME là hình chữ nhật.<br>b) Tam giác ABC cần thêm điều kiện gì để ADME là hình vuông?",
    "hint": "a) Đếm số góc vuông của tứ giác ADME. b) Hình chữ nhật có đường chéo AM là phân giác góc A thì là hình vuông.",
    "sol": "a) Tứ giác ADME có ∠A = 90°, ∠ADM = 90°, ∠AEM = 90° ⇒ ADME là <b>hình chữ nhật</b> (tứ giác có ba góc vuông).<br>b) Hình chữ nhật ADME là hình vuông khi đường chéo AM là tia phân giác của ∠DAE = ∠BAC.<br>Trong tam giác ABC, trung tuyến AM đồng thời là phân giác khi tam giác <b>cân tại A</b>. Vậy cần tam giác ABC <b>vuông cân tại A</b>.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 3,
    "d": "Chứng minh nhận dạng",
    "t": "Góc 45° trong hình vuông",
    "q": "Cho hình vuông ABCD cạnh 6 cm. Trên cạnh BC lấy điểm E, trên cạnh CD lấy điểm F sao cho ∠EAF = 45°.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Hình vuông ABCD, E trên BC, F trên CD, góc EAF bằng 45 độ\">\n<rect x=\"30\" y=\"20\" width=\"120\" height=\"120\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<polygon points=\"30,20 150,60 90,140\" fill=\"var(--hl)\" fill-opacity=\".35\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/>\n<path d=\"M 48.97 26.32 A 20 20 0 0 1 38.94 37.89\" fill=\"none\" stroke=\"var(--accent)\"/><text x=\"52\" y=\"44\" class=\"svgm\">45°</text>\n<text x=\"24\" y=\"18\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"156\" y=\"18\" class=\"svgt\">B</text>\n<text x=\"156\" y=\"152\" class=\"svgt\">C</text><text x=\"24\" y=\"152\" class=\"svgt\" text-anchor=\"end\">D</text>\n<text x=\"156\" y=\"64\" class=\"svgt\">E</text><text x=\"90\" y=\"154\" class=\"svgt\" text-anchor=\"middle\">F</text></svg>a) Chứng minh BE + DF = EF.<br>b) Tính chu vi tam giác CEF (cm).",
    "hint": "Trên tia đối của tia BC lấy điểm G sao cho BG = DF. Chứng minh △ABG = △ADF rồi △GAE = △FAE.",
    "sol": "a) Trên tia đối của tia BC lấy G sao cho BG = DF.<br>△ABG và △ADF có AB = AD, ∠ABG = ∠ADF = 90°, BG = DF ⇒ △ABG = △ADF (c.g.c) ⇒ AG = AF và ∠BAG = ∠DAF.<br>∠GAE = ∠BAG + ∠BAE = ∠DAF + ∠BAE = 90° − 45° = 45° = ∠EAF.<br>△GAE và △FAE có AG = AF, ∠GAE = ∠FAE, AE chung ⇒ △GAE = △FAE (c.g.c) ⇒ EF = GE = BG + BE = DF + BE.<br>b) Chu vi △CEF = CE + CF + EF = CE + CF + BE + DF = (CE + BE) + (CF + DF) = BC + CD = 6 + 6 = <b>12 cm</b>.<br>Thú vị: chu vi không phụ thuộc vị trí của E, F, luôn bằng nửa chu vi hình vuông.",
    "ans": 12,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Tính góc",
    "t": "Hai tia phân giác",
    "q": "Tứ giác ABCD có ∠C = 100°, ∠D = 60°. Các tia phân giác của góc A và góc B cắt nhau tại E.<br>a) Tính ∠AEB (độ).<br>b) Chứng minh tổng quát: ∠AEB = (∠C + ∠D)/2.",
    "hint": "Trong tam giác ABE: ∠AEB = 180° − (∠A + ∠B)/2. Còn ∠A + ∠B = 360° − (∠C + ∠D).",
    "sol": "b) Trong △ABE: ∠AEB = 180° − ∠EAB − ∠EBA = 180° − (∠A + ∠B)/2.<br>Mà ∠A + ∠B = 360° − (∠C + ∠D) nên ∠AEB = 180° − 180° + (∠C + ∠D)/2 = (∠C + ∠D)/2.<br>a) ∠AEB = (100° + 60°)/2 = <b>80°</b>.",
    "ans": 80,
    "unit": "°",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Diện tích hình thoi (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tứ giác ABCD là hình thoi có chu vi 52 m. Đường chéo AC dài 24 m. Tính diện tích hình thoi ABCD (m<sup>2</sup>).<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_4\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 4</a> (phỏng dịch)</p>",
    "hint": "Hai đường chéo hình thoi vuông góc với nhau tại trung điểm mỗi đường. Tính cạnh, rồi dùng định lí Pythagoras trong một tam giác vuông nhỏ.",
    "sol": "Cạnh hình thoi: 52 : 4 = 13 m. Gọi O là giao điểm hai đường chéo: OA = 12 m, AC ⊥ BD.<br>Tam giác AOB vuông tại O: OB<sup>2</sup> = 13<sup>2</sup> − 12<sup>2</sup> = 169 − 144 = 25 ⇒ OB = 5 m ⇒ BD = 10 m.<br>Diện tích = AC · BD : 2 = 24 · 10 : 2 = <b>120 m<sup>2</sup></b>.",
    "ans": 120,
    "unit": "m²",
    "tol": 0.01
   },
   {
    "lv": 3,
    "t": "Hình vuông và đường chéo (2018 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Cho hình vuông ABCD, E là trung điểm cạnh CD, đoạn BE cắt đường chéo AC tại F. Tứ giác AFED có diện tích 45. Tính diện tích hình vuông ABCD.<svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Hình vuông ABCD, E trung điểm CD, F là giao điểm của BE và AC\"><polygon points=\"40,20 120,100 100,140 40,140\" fill=\"var(--hl)\" fill-opacity=\".5\"/><rect x=\"40\" y=\"20\" width=\"120\" height=\"120\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"160\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"160\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"var(--ink)\"/><text x=\"28\" y=\"20\" class=\"svgt\">A</text><text x=\"165\" y=\"20\" class=\"svgt\">B</text><text x=\"165\" y=\"150\" class=\"svgt\">C</text><text x=\"28\" y=\"150\" class=\"svgt\">D</text><text x=\"97\" y=\"153\" class=\"svgt\">E</text><text x=\"126\" y=\"102\" class=\"svgt\">F</text><text x=\"75\" y=\"105\" class=\"svgt\" text-anchor=\"middle\">45</text></svg><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2018_AMC_8_Problems/Problem_22\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2018 AMC 8 Problem 22</a> (phỏng dịch)</p>",
    "hint": "Đặt cạnh hình vuông là a. Hai tam giác FAB và FCE có AB ∥ CE nên FC/FA = CE/AB = 1/2. Từ đó tính diện tích tam giác FEC theo a<sup>2</sup>.",
    "sol": "Đặt cạnh hình vuông là a, diện tích S = a<sup>2</sup>. Tam giác ACD có diện tích S/2.<br>Vì AB ∥ CE và CE = AB/2 nên F chia AC theo tỉ số FC : FA = 1 : 2, tức FC = AC/3. Khoảng cách từ F đến CD bằng 1/3 khoảng cách từ A đến CD, tức a/3.<br>Diện tích △FEC = (1/2) · CE · a/3 = (1/2) · (a/2) · (a/3) = a<sup>2</sup>/12.<br>Diện tích AFED = △ACD − △FEC = a<sup>2</sup>/2 − a<sup>2</sup>/12 = 5a<sup>2</sup>/12.<br>5a<sup>2</sup>/12 = 45 ⇒ a<sup>2</sup> = 108. Diện tích hình vuông là <b>108</b>.",
    "ans": 108,
    "unit": "đvdt",
    "tol": 0.01
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t7",
  "position": 7,
  "title": "Định lí Thalès và tam giác đồng dạng",
  "icon": "📐",
  "lab": "toan_shadow",
  "theory": "<div class=\"sec\"><h3>Định lí Thalès</h3>\n  <p>Một đường thẳng <span class=\"mark\">song song với một cạnh</span> của tam giác và cắt hai cạnh còn lại thì định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Tam giác ABC với DE song song BC\">\n<polygon points=\"140,15 30,155 250,155\" fill=\"var(--hl)\" fill-opacity=\".2\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<polygon points=\"140,15 96,71 184,71\" fill=\"var(--accent)\" opacity=\".15\"/>\n<line x1=\"96\" y1=\"71\" x2=\"184\" y2=\"71\" stroke=\"var(--accent)\" stroke-width=\"2\"/>\n<text x=\"140\" y=\"12\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"24\" y=\"160\" class=\"svgt\" text-anchor=\"end\">B</text>\n<text x=\"256\" y=\"160\" class=\"svgt\">C</text><text x=\"90\" y=\"72\" class=\"svgt\" text-anchor=\"end\">D</text><text x=\"190\" y=\"72\" class=\"svgt\">E</text>\n<text x=\"140\" y=\"104\" class=\"svgm\" text-anchor=\"middle\">DE ∥ BC</text>\n<text x=\"140\" y=\"168\" class=\"svgm\" text-anchor=\"middle\">AD/AB = AE/AC = DE/BC</text></svg>\n  <div class=\"fbox\"><span class=\"f\">DE ∥ BC ⇒ AD/AB = AE/AC;  AD/DB = AE/EC</span></div>\n  <ul><li><b>Định lí đảo:</b> nếu AD/DB = AE/EC thì DE ∥ BC.</li>\n  <li><b>Hệ quả:</b> DE ∥ BC thì tam giác ADE có ba cạnh tỉ lệ với ba cạnh tam giác ABC: AD/AB = AE/AC = <span class=\"mark\">DE/BC</span>.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> tỉ số DE/BC chỉ bằng AD/<b>AB</b> (cả cạnh), không bằng AD/DB (một đoạn).</div>\n </div>\n <div class=\"sec\"><h3>Đường trung bình của tam giác</h3>\n  <p>Đoạn nối <b>trung điểm hai cạnh</b> của tam giác gọi là đường trung bình. Nó <span class=\"mark\">song song với cạnh thứ ba và bằng nửa cạnh ấy</span>.</p>\n  <div class=\"fbox\"><span class=\"f\">M, N là trung điểm AB, AC ⇒ MN ∥ BC, MN = BC/2</span></div>\n  <p class=\"muted\">Ngược lại: đường thẳng đi qua trung điểm một cạnh và song song với cạnh thứ hai thì đi qua trung điểm cạnh thứ ba.</p>\n </div>\n <div class=\"sec\"><h3>Tính chất đường phân giác của tam giác</h3>\n  <div class=\"fbox\"><span class=\"f\">AD là phân giác của ∠BAC ⇒ DB/DC = AB/AC</span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> AB = 6, AC = 9, BC = 10. DB/DC = 6/9 = 2/3, nên BC được chia thành 5 phần: DB = 4, DC = 6.</div>\n </div>\n <div class=\"sec\"><h3>Tam giác đồng dạng</h3>\n  <p>△A′B′C′ ∽ △ABC nếu các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ: A′B′/AB = B′C′/BC = C′A′/CA = k (tỉ số đồng dạng).</p>\n  <div class=\"tbl\"><table><tr><th>Trường hợp</th><th>Điều kiện</th></tr>\n  <tr><td>cạnh – cạnh – cạnh (c.c.c)</td><td>ba cặp cạnh tương ứng tỉ lệ</td></tr>\n  <tr><td>cạnh – góc – cạnh (c.g.c)</td><td>hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau</td></tr>\n  <tr><td>góc – góc (g.g)</td><td>hai cặp góc bằng nhau</td></tr>\n  <tr><td>tam giác vuông</td><td>một cặp góc nhọn bằng nhau; hoặc cạnh huyền và một cạnh góc vuông tỉ lệ</td></tr></table></div>\n  <div class=\"fbox\"><span class=\"f\">tỉ số chu vi = k</span><span class=\"f\">tỉ số diện tích = k<sup>2</sup></span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> viết đúng thứ tự đỉnh tương ứng. △ABC ∽ △DEF nghĩa là A ↔ D, B ↔ E, C ↔ F; viết lộn thứ tự là lập sai tỉ số.</div>\n </div>\n <div class=\"sec\"><h3>Đo đạc bằng tam giác đồng dạng</h3>\n  <p>Tia nắng mặt trời coi như song song, nên cây (hay cột cờ) với bóng của nó và cái cọc với bóng của cọc tạo thành <span class=\"mark\">hai tam giác vuông đồng dạng</span>.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đo chiều cao cột cờ bằng bóng nắng\">\n<circle cx=\"28\" cy=\"18\" r=\"10\" fill=\"var(--hl)\" stroke=\"#D29A00\"/>\n<line x1=\"10\" y1=\"150\" x2=\"270\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"150\" x2=\"70\" y2=\"40\" stroke=\"var(--ink)\" stroke-width=\"3\"/><polygon points=\"70,40 92,46 70,52\" fill=\"var(--bad)\"/>\n<line x1=\"70\" y1=\"40\" x2=\"180\" y2=\"150\" stroke=\"#D29A00\" stroke-dasharray=\"4 3\"/>\n<line x1=\"70\" y1=\"150\" x2=\"180\" y2=\"150\" stroke=\"var(--muted)\" stroke-width=\"4\" opacity=\".6\"/>\n<line x1=\"210\" y1=\"150\" x2=\"210\" y2=\"120\" stroke=\"var(--accent)\" stroke-width=\"3\"/>\n<line x1=\"210\" y1=\"120\" x2=\"240\" y2=\"150\" stroke=\"#D29A00\" stroke-dasharray=\"4 3\"/>\n<line x1=\"210\" y1=\"150\" x2=\"240\" y2=\"150\" stroke=\"var(--muted)\" stroke-width=\"4\" opacity=\".6\"/>\n<text x=\"62\" y=\"100\" class=\"svgt\" text-anchor=\"end\">h</text><text x=\"125\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">bóng s</text>\n<text x=\"204\" y=\"140\" class=\"svgt\" text-anchor=\"end\">h′</text><text x=\"226\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">s′</text>\n<text x=\"150\" y=\"62\" class=\"svgt\">h/s = h′/s′</text><text x=\"150\" y=\"78\" class=\"svgm\">(tia nắng song song)</text></svg>\n  <div class=\"eg\"><b>Ví dụ.</b> Cọc cao 1,5 m có bóng 2 m; cùng lúc bóng cây dài 12 m. Chiều cao cây: h = 12 · 1,5/2 = 9 m.</div>\n  <p>Tương tự, muốn đo khoảng cách qua sông mà không bơi sang, em dựng hai tam giác đồng dạng trên bờ bên này rồi đo các cạnh trên đất liền.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏛️</span>Thalès đo kim tự tháp</b>Tương truyền Thalès đo chiều cao kim tự tháp bằng cách đợi lúc bóng cây gậy dài đúng bằng cây gậy. Khi đó bóng kim tự tháp (tính từ tâm đáy) cũng bằng chiều cao của nó.</div>\n   <div class=\"app\"><b><span class=\"ico\">🗺️</span>Bản đồ tỉ lệ xích</b>Bản đồ tỉ lệ 1 : 50 000 là một hình đồng dạng thu nhỏ: 4 cm trên bản đồ ứng với 200 000 cm = 2 km ngoài thực tế.</div>\n   <div class=\"app\"><b><span class=\"ico\">🖨️</span>Phóng to bản photo</b>Phóng ảnh 200% thì mỗi cạnh gấp 2 nhưng diện tích gấp 4. Vì vậy in khổ A3 (gấp đôi diện tích A4) chỉ cần phóng khoảng 141%.</div>\n   <div class=\"app\"><b><span class=\"ico\">📷</span>Máy ảnh và hộp tối</b>Ảnh trên cảm biến và vật thật là hai tam giác đồng dạng qua lỗ ống kính. Biết khoảng cách tới vật là tính được chiều cao vật trên ảnh.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍰</span>Cắt bánh chia đều</b>Muốn chia cạnh bánh thành 3 phần bằng nhau mà không có thước, kẻ một đường xiên chia 3 đoạn bằng nhau rồi kẻ các đường song song: định lí Thalès chia giúp em.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao phóng ảnh to gấp đôi lại tốn mực gấp bốn?</summary>Ảnh mới đồng dạng với ảnh cũ tỉ số k = 2. Diện tích tỉ lệ với k<sup>2</sup> = 4, mà lượng mực tỉ lệ với diện tích cần in.</details>\n  <details class=\"wq\"><summary>Vì sao buổi trưa bóng ngắn, buổi chiều bóng dài?</summary>Buổi trưa nắng chiếu gần thẳng đứng nên bóng ngắn; chiều nắng xiên nhiều nên bóng dài. Nhưng ở cùng một lúc, mọi vật đứng thẳng đều có tỉ số chiều cao/bóng như nhau, nên phải đo cọc và cây <u>cùng lúc</u>.</details>\n  <details class=\"wq\"><summary>Hai tam giác có ba góc bằng nhau thì có bằng nhau không?</summary>Chưa chắc. Chúng đồng dạng (cùng hình dạng) nhưng có thể khác kích thước, như hai chiếc thước ê-ke to nhỏ khác nhau.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chỉnh độ cao mặt trời, chiều cao cọc và đo chiều cao cây bằng bóng nắng.</p>\n<div class=\"sec intl\"><h3>Thales đo kim tự tháp bằng cái bóng <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Thales ở Miletus (khoảng 624 đến 546 trước Công nguyên) được xem là nhà toán học Hi Lạp đầu tiên. Tương truyền khi đến Ai Cập, ông đo được chiều cao kim tự tháp mà không cần trèo lên: <span class=\"mark\">ông chờ đến lúc bóng của chính mình dài đúng bằng chiều cao của mình, rồi đo bóng của kim tự tháp</span>.</p><svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Thales đo chiều cao kim tự tháp bằng bóng nắng\"><line x1=\"5\" y1=\"150\" x2=\"275\" y2=\"150\" stroke=\"var(--muted)\"/><polygon points=\"120,150 220,150 170,60\" fill=\"var(--hl)\" fill-opacity=\".5\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"150\" x2=\"40\" y2=\"110\" stroke=\"var(--ink)\" stroke-width=\"3\"/><line x1=\"40\" y1=\"150\" x2=\"80\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"4\" opacity=\".45\"/><line x1=\"220\" y1=\"150\" x2=\"260\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"4\" opacity=\".45\"/><g stroke=\"var(--accent)\" stroke-dasharray=\"4 3\"><line x1=\"20\" y1=\"90\" x2=\"80\" y2=\"150\"/><line x1=\"130\" y1=\"20\" x2=\"260\" y2=\"150\"/></g><line x1=\"170\" y1=\"60\" x2=\"170\" y2=\"150\" stroke=\"var(--bad)\" stroke-dasharray=\"3 3\"/><text x=\"34\" y=\"132\" class=\"svgt\" text-anchor=\"end\">h</text><text x=\"60\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">bóng = h</text><text x=\"176\" y=\"110\" class=\"svgt\">H</text><text x=\"215\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">H = bóng tính từ tâm đáy</text><text x=\"140\" y=\"16\" class=\"svgm\">tia nắng song song</text></svg><p><b>Vì sao đúng?</b> Tia nắng mặt trời coi như song song. Người và bóng tạo thành tam giác vuông; kim tự tháp và bóng của nó tạo thành tam giác vuông khác có các cạnh tương ứng song song. Hai tam giác này <b>đồng dạng</b>, nên:</p><div class=\"fbox\"><span class=\"f\">H : bóng kim tự tháp = h : bóng người = 1</span></div><p>Lưu ý bóng của kim tự tháp phải tính từ <b>tâm đáy</b> (chân đường cao), tức là phần bóng nhô ra ngoài cộng thêm nửa cạnh đáy.</p><div class=\"eg\"><b>Ví dụ.</b> Kim tự tháp có cạnh đáy 230 m, phần bóng nhô ra ngoài đáy dài 32 m. Khi bóng người bằng chiều cao người thì H = 32 + 230 : 2 = 147 m (gần với chiều cao ban đầu của kim tự tháp Kheops, khoảng 146 m).</div><div class=\"note\"><b>Mở rộng:</b> không cần chờ bóng bằng người. Lúc nào cũng được: H = h · (bóng kim tự tháp)/(bóng người). Wikipedia cho biết câu chuyện này cho thấy Thales đã biết đến <b>định lí về các đoạn thẳng tỉ lệ</b> (intercept theorem), mà người Việt gọi là định lí Thalès.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> intercept theorem (định lí Thalès), similar triangles (tam giác đồng dạng), shadow (bóng), ratio (tỉ số), pyramid (kim tự tháp, hình chóp), parallel (song song)</div><p class=\"src\">Nguồn: <a href=\"https://en.wikipedia.org/wiki/Thales_of_Miletus\" target=\"_blank\" rel=\"noopener\">Wikipedia, Thales of Miletus</a> (phỏng dịch, có bổ sung ví dụ)</p></div>",
  "formulas": [
   [
    "Định lí Thalès",
    "DE ∥ BC ⇒ AD/AB = AE/AC"
   ],
   [
    "Hệ quả Thalès",
    "DE ∥ BC ⇒ AD/AB = AE/AC = DE/BC"
   ],
   [
    "Đường trung bình",
    "MN ∥ BC, MN = BC/2"
   ],
   [
    "Đường phân giác",
    "DB/DC = AB/AC"
   ],
   [
    "Các trường hợp đồng dạng",
    "c.c.c;  c.g.c;  g.g"
   ],
   [
    "Tỉ số chu vi, diện tích",
    "chu vi: k;  diện tích: k²"
   ],
   [
    "Đo bằng bóng nắng",
    "h/s = h′/s′ (đo cùng một lúc)"
   ]
  ],
  "quiz": [
   {
    "q": "Tam giác ABC có DE ∥ BC (D ∈ AB, E ∈ AC), AD = 2 cm, DB = 3 cm, AE = 4 cm. Độ dài EC là:",
    "o": [
     "6 cm",
     "2 cm",
     "1,5 cm",
     "10 cm"
    ],
    "why": "AD/DB = AE/EC ⇒ 2/3 = 4/EC ⇒ EC = 6 cm."
   },
   {
    "q": "Tam giác ABC có M, N lần lượt là trung điểm AB, AC và BC = 12 cm. Độ dài MN là:",
    "o": [
     "6 cm",
     "12 cm",
     "24 cm",
     "4 cm"
    ],
    "why": "MN là đường trung bình nên MN = BC/2 = 6 cm."
   },
   {
    "q": "Tam giác ABC có AB = 6, AC = 9, BC = 10, AD là phân giác (D ∈ BC). Độ dài BD là:",
    "o": [
     "4",
     "6",
     "5",
     "3"
    ],
    "why": "DB/DC = AB/AC = 2/3, BC = 10 chia 5 phần: DB = 4, DC = 6."
   },
   {
    "q": "△ABC ∽ △DEF theo tỉ số 2/3. Chu vi △DEF là 60 cm thì chu vi △ABC là:",
    "o": [
     "40 cm",
     "90 cm",
     "30 cm",
     "120 cm"
    ],
    "why": "Tỉ số chu vi bằng tỉ số đồng dạng: 60 · 2/3 = 40 cm."
   },
   {
    "q": "Hai tam giác đồng dạng theo tỉ số k = 3. Tỉ số diện tích của chúng là:",
    "o": [
     "9",
     "3",
     "6",
     "27"
    ],
    "why": "Tỉ số diện tích bằng bình phương tỉ số đồng dạng: 3<sup>2</sup> = 9."
   },
   {
    "q": "Hai tam giác có hai cặp góc tương ứng bằng nhau thì:",
    "o": [
     "Đồng dạng với nhau",
     "Bằng nhau",
     "Chưa đủ để kết luận gì",
     "Chỉ đồng dạng nếu là tam giác vuông"
    ],
    "why": "Trường hợp góc – góc: góc thứ ba cũng bằng nhau, hai tam giác đồng dạng (nhưng chưa chắc bằng nhau)."
   },
   {
    "q": "Cùng một lúc, cọc cao 1,5 m có bóng dài 2 m, còn bóng của cây dài 12 m. Cây cao:",
    "o": [
     "9 m",
     "16 m",
     "8 m",
     "10,5 m"
    ],
    "why": "h/12 = 1,5/2 ⇒ h = 9 m. Đáp án 16 m là lập tỉ số ngược."
   },
   {
    "q": "Trên bản đồ tỉ lệ 1 : 50 000, đoạn đường dài 4 cm. Đoạn đường thật dài:",
    "o": [
     "2 km",
     "20 km",
     "200 m",
     "0,2 km"
    ],
    "why": "4 · 50 000 = 200 000 cm = 2 000 m = 2 km."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Định lí Thalès",
    "t": "Tính đoạn thẳng nhờ Thalès",
    "q": "Cho tam giác ABC, đường thẳng song song với BC cắt AB tại M và AC tại N. Biết AM = 3 cm, MB = 2 cm, AC = 7,5 cm. Tính AN (cm).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC với MN song song BC\">\n<polygon points=\"120,15 30,150 230,150\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"66\" y1=\"96\" x2=\"186\" y2=\"96\" stroke=\"var(--accent)\" stroke-width=\"2\"/>\n<text x=\"120\" y=\"12\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"24\" y=\"160\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"236\" y=\"160\" class=\"svgt\">C</text>\n<text x=\"60\" y=\"98\" class=\"svgt\" text-anchor=\"end\">M</text><text x=\"192\" y=\"98\" class=\"svgt\">N</text>\n<text x=\"86\" y=\"56\" class=\"svgm\" text-anchor=\"end\">3 cm</text><text x=\"40\" y=\"128\" class=\"svgm\" text-anchor=\"end\">2 cm</text></svg>",
    "hint": "AM/AB = AN/AC. Nhớ AB = AM + MB.",
    "sol": "AB = AM + MB = 5 cm. Vì MN ∥ BC, theo định lí Thalès: AM/AB = AN/AC<br>⇒ AN = AC · AM/AB = 7,5 · 3/5 = <b>4,5 cm</b>.",
    "ans": 4.5,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 1,
    "d": "Đo đạc thực tế",
    "t": "Đo cột cờ của trường",
    "q": "Giờ ra chơi, An (cao 1,5 m) đứng cạnh cột cờ và nhờ bạn đo: bóng của An dài 1,2 m, cùng lúc đó bóng cột cờ dài 8,4 m. Tính chiều cao cột cờ (m).",
    "hint": "Hai tam giác vuông (người, bóng người) và (cột cờ, bóng cột cờ) đồng dạng.",
    "sol": "Tia nắng song song nên hai tam giác vuông đồng dạng:<br>h/8,4 = 1,5/1,2 ⇒ h = 8,4 · 1,5 : 1,2 = <b>10,5 m</b>.",
    "ans": 10.5,
    "unit": "m",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Phân giác, đường trung bình",
    "t": "Phân giác rồi kẻ song song",
    "q": "Tam giác ABC có AB = 12 cm, AC = 18 cm, BC = 20 cm. AD là tia phân giác của góc A (D ∈ BC). Qua D kẻ đường thẳng song song với AB, cắt AC tại E.<br>a) Tính BD, DC.<br>b) Tính DE (cm).",
    "hint": "a) DB/DC = AB/AC = 2/3. b) Trong tam giác CAB có DE ∥ AB: DE/AB = CD/CB.",
    "sol": "a) DB/DC = 12/18 = 2/3, BD + DC = 20 ⇒ BD = 20 · 2/5 = 8 cm, DC = 12 cm.<br>b) DE ∥ AB, áp dụng hệ quả định lí Thalès trong △CAB:<br>DE/AB = CD/CB ⇒ DE = 12 · 12/20 = <b>7,2 cm</b>.",
    "ans": 7.2,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Đo đạc thực tế",
    "t": "Đo bề rộng con sông",
    "q": "Để đo khoảng cách AB từ bờ sông bên này (điểm B) đến một cái cây A ở bờ bên kia, nhóm bạn lớp 8 làm như hình: kéo dài AB thêm đoạn BD = 5 m; dựng BC ⊥ AD, DE ⊥ AD sao cho A, C, E thẳng hàng; đo được BC = 15 m, DE = 20 m. Tính AB (m).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Đo khoảng cách qua sông bằng tam giác đồng dạng\">\n<rect x=\"0\" y=\"25\" width=\"260\" height=\"70\" fill=\"var(--liquid)\" opacity=\".3\"/>\n<text x=\"250\" y=\"64\" class=\"svgm\" text-anchor=\"end\">sông</text>\n<line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"135\" stroke=\"var(--ink)\"/>\n<line x1=\"40\" y1=\"105\" x2=\"160\" y2=\"105\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"135\" x2=\"200\" y2=\"135\" stroke=\"var(--ink)\"/>\n<line x1=\"40\" y1=\"15\" x2=\"200\" y2=\"135\" stroke=\"var(--accent)\" stroke-dasharray=\"4 3\"/>\n<path d=\"M40 97 H48 V105\" fill=\"none\" stroke=\"var(--ink)\"/><path d=\"M40 127 H48 V135\" fill=\"none\" stroke=\"var(--ink)\"/>\n<circle cx=\"40\" cy=\"15\" r=\"3\" fill=\"var(--ok)\"/>\n<text x=\"46\" y=\"14\" class=\"svgt\">A (cây bên kia sông)</text><text x=\"34\" y=\"109\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"34\" y=\"139\" class=\"svgt\" text-anchor=\"end\">D</text>\n<text x=\"164\" y=\"104\" class=\"svgt\">C</text><text x=\"204\" y=\"139\" class=\"svgt\">E</text>\n<text x=\"100\" y=\"118\" class=\"svgm\" text-anchor=\"middle\">15 m</text><text x=\"120\" y=\"150\" class=\"svgm\" text-anchor=\"middle\">20 m</text><text x=\"34\" y=\"124\" class=\"svgm\" text-anchor=\"end\">5 m</text></svg>",
    "hint": "BC ∥ DE (cùng vuông góc với AD). △ABC ∽ △ADE nên AB/AD = BC/DE, với AD = AB + 5.",
    "sol": "BC ⊥ AD và DE ⊥ AD nên BC ∥ DE. Theo hệ quả định lí Thalès (△ABC ∽ △ADE):<br>AB/AD = BC/DE = 15/20 = 3/4.<br>Gọi AB = x thì AD = x + 5: x/(x + 5) = 3/4 ⇒ 4x = 3x + 15 ⇒ <b>x = 15 m</b>.",
    "ans": 15,
    "unit": "m",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Tam giác đồng dạng",
    "t": "Hệ thức trong tam giác vuông",
    "q": "Cho tam giác ABC vuông tại A, đường cao AH (H ∈ BC).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC vuông tại A, đường cao AH\">\n<polygon points=\"25,145 241,145 121,37.7\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"121\" y1=\"37.7\" x2=\"121\" y2=\"145\" stroke=\"var(--accent)\" stroke-dasharray=\"4 3\"/>\n<path d=\"M121 137 H129 V145\" fill=\"none\" stroke=\"var(--ink)\"/>\n<path d=\"M114.3 45.2 L121.8 51.9 L128.5 44.4\" fill=\"none\" stroke=\"var(--ink)\"/>\n<text x=\"121\" y=\"32\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"19\" y=\"150\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"247\" y=\"150\" class=\"svgt\">C</text>\n<text x=\"121\" y=\"160\" class=\"svgt\" text-anchor=\"middle\">H</text></svg>a) Chứng minh △HBA ∽ △ABC.<br>b) Suy ra AB<sup>2</sup> = BH · BC.<br>c) Biết BH = 4 cm, BC = 9 cm. Tính AB (cm).",
    "hint": "a) Hai tam giác vuông có chung góc B. b) Viết tỉ số cạnh tương ứng theo đúng thứ tự đỉnh.",
    "sol": "a) △HBA và △ABC có ∠BHA = ∠BAC = 90°, ∠B chung ⇒ △HBA ∽ △ABC (g.g).<br>b) Từ đó HB/AB = BA/BC ⇒ AB<sup>2</sup> = BH · BC.<br>c) AB<sup>2</sup> = 4 · 9 = 36 ⇒ <b>AB = 6 cm</b>.",
    "ans": 6,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Phân giác, đường trung bình",
    "t": "Nối trung điểm bốn cạnh",
    "q": "Cho tứ giác ABCD có AC = 10 cm, BD = 14 cm. Gọi M, N, P, Q lần lượt là trung điểm của AB, BC, CD, DA.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tứ giác ABCD với trung điểm bốn cạnh\">\n<polygon points=\"50,30 200,20 240,140 30,130\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"50\" y1=\"30\" x2=\"240\" y2=\"140\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/><line x1=\"200\" y1=\"20\" x2=\"30\" y2=\"130\" stroke=\"var(--muted)\" stroke-dasharray=\"4 3\"/>\n<polygon points=\"125,25 220,80 135,135 40,80\" fill=\"var(--hl)\" fill-opacity=\".3\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/>\n<text x=\"44\" y=\"26\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"206\" y=\"18\" class=\"svgt\">B</text><text x=\"246\" y=\"152\" class=\"svgt\">C</text><text x=\"24\" y=\"142\" class=\"svgt\" text-anchor=\"end\">D</text>\n<text x=\"125\" y=\"18\" class=\"svgt\" text-anchor=\"middle\">M</text><text x=\"226\" y=\"82\" class=\"svgt\">N</text><text x=\"135\" y=\"150\" class=\"svgt\" text-anchor=\"middle\">P</text><text x=\"34\" y=\"82\" class=\"svgt\" text-anchor=\"end\">Q</text></svg>a) Chứng minh MNPQ là hình bình hành.<br>b) Tính chu vi MNPQ (cm).",
    "hint": "MN và QP là đường trung bình của hai tam giác chung cạnh AC.",
    "sol": "a) Trong △ABC: MN là đường trung bình ⇒ MN ∥ AC, MN = AC/2.<br>Trong △ADC: QP là đường trung bình ⇒ QP ∥ AC, QP = AC/2.<br>Vậy MN ∥ QP và MN = QP ⇒ MNPQ là hình bình hành.<br>b) Tương tự MQ = NP = BD/2 = 7 cm; MN = QP = 5 cm.<br>Chu vi = 2(5 + 7) = <b>24 cm</b> (bằng AC + BD).",
    "ans": 24,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Tam giác đồng dạng",
    "t": "Ba tam giác nhỏ",
    "q": "Qua điểm O nằm trong tam giác ABC, kẻ ba đường thẳng lần lượt song song với ba cạnh. Ba đường thẳng này tạo ra ba tam giác nhỏ có chung đỉnh O với diện tích 4 cm<sup>2</sup>, 9 cm<sup>2</sup> và 16 cm<sup>2</sup> (phần tô màu). Tính diện tích tam giác ABC (cm<sup>2</sup>). (Đề thi học sinh giỏi.)<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC với ba đường thẳng qua O song song ba cạnh tạo ra ba tam giác nhỏ\">\n<polygon points=\"130,12 20,158 250,158\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<polygon points=\"146.7,125.6 122.2,158 173.3,158\" fill=\"var(--liquid)\" opacity=\".45\"/>\n<polygon points=\"146.7,125.6 223.3,125.6 183.3,76.9\" fill=\"var(--hl)\" opacity=\".55\"/>\n<polygon points=\"146.7,125.6 44.4,125.6 93.3,60.7\" fill=\"var(--accent)\" opacity=\".2\"/>\n<g stroke=\"var(--muted)\"><line x1=\"44.4\" y1=\"125.6\" x2=\"223.3\" y2=\"125.6\"/><line x1=\"93.3\" y1=\"60.7\" x2=\"173.3\" y2=\"158\"/><line x1=\"183.3\" y1=\"76.9\" x2=\"122.2\" y2=\"158\"/></g>\n<circle cx=\"146.7\" cy=\"125.6\" r=\"2.5\" fill=\"var(--ink)\"/>\n<text x=\"130\" y=\"10\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"14\" y=\"164\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"251\" y=\"169\" class=\"svgt\">C</text>\n<text x=\"150\" y=\"121\" class=\"svgt\">O</text>\n<text x=\"147\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">4</text><text x=\"184\" y=\"114\" class=\"svgm\" text-anchor=\"middle\">9</text><text x=\"95\" y=\"112\" class=\"svgm\" text-anchor=\"middle\">16</text></svg>",
    "hint": "Mỗi tam giác nhỏ đồng dạng với △ABC. Nếu tỉ số đồng dạng là k thì diện tích bằng k<sup>2</sup> · S. Cạnh của ba tam giác nhỏ nằm trên BC cộng với các đoạn khác lại ghép đúng thành BC.",
    "sol": "Gọi S là diện tích △ABC. Ba tam giác nhỏ đều đồng dạng với △ABC, tỉ số đồng dạng lần lượt là √(4/S), √(9/S), √(16/S).<br>Xét cạnh BC: nó được chia thành ba đoạn. Đoạn giữa là cạnh của tam giác nhỏ (diện tích 4). Hai đoạn bên cạnh là cạnh đáy của hai hình bình hành, bằng cạnh tương ứng (song song với BC) của hai tam giác nhỏ còn lại.<br>Do đó tổng ba tỉ số đồng dạng bằng 1:<br>2/√S + 3/√S + 4/√S = 1 ⇒ √S = 9 ⇒ <b>S = 81 cm<sup>2</sup></b>.",
    "ans": 81,
    "unit": "cm²",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Tam giác đồng dạng",
    "t": "Đẳng thức AE² = EF · EG",
    "q": "Cho hình bình hành ABCD. Một đường thẳng đi qua A cắt đường chéo BD tại E, cắt cạnh BC tại F và cắt đường thẳng DC tại G.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Hình bình hành ABCD, đường thẳng qua A cắt BD tại E, BC tại F, đường thẳng DC tại G\">\n<polygon points=\"30,40 150,40 200,130 80,130\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"200\" y1=\"130\" x2=\"245\" y2=\"130\" stroke=\"var(--ink)\" stroke-dasharray=\"4 3\"/>\n<line x1=\"150\" y1=\"40\" x2=\"80\" y2=\"130\" stroke=\"var(--muted)\"/>\n<line x1=\"30\" y1=\"40\" x2=\"240\" y2=\"130\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/>\n<text x=\"24\" y=\"38\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"154\" y=\"36\" class=\"svgt\">B</text><text x=\"200\" y=\"146\" class=\"svgt\" text-anchor=\"middle\">C</text><text x=\"76\" y=\"146\" class=\"svgt\" text-anchor=\"middle\">D</text>\n<text x=\"118\" y=\"70\" class=\"svgt\" text-anchor=\"end\">E</text><text x=\"194\" y=\"104\" class=\"svgt\">F</text><text x=\"240\" y=\"146\" class=\"svgt\" text-anchor=\"middle\">G</text></svg>Chứng minh AE<sup>2</sup> = EF · EG.",
    "hint": "Tìm hai cặp tam giác đồng dạng có chung tỉ số EB/ED: một cặp nhờ AB ∥ DG, một cặp nhờ AD ∥ BF.",
    "sol": "Vì AB ∥ DG: △EAB ∽ △EGD (g.g) ⇒ EA/EG = EB/ED. (1)<br>Vì BF ∥ AD: △EFB ∽ △EAD (g.g) ⇒ EF/EA = EB/ED. (2)<br>Từ (1) và (2): EA/EG = EF/EA ⇒ <b>AE<sup>2</sup> = EF · EG</b>.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Hình bình hành trong tam giác (2018 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Trong tam giác ABC, điểm E nằm trên cạnh AB với AE = 1, EB = 2. Điểm D trên cạnh AC sao cho DE ∥ BC. Điểm F trên cạnh BC sao cho EF ∥ AC. Tính tỉ số diện tích tứ giác CDEF và diện tích tam giác ABC (nhập dạng số thập phân, làm tròn đến 0,001).<svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Tam giác ABC với DE song song BC và EF song song AC\"><polygon points=\"110.0,20.0 56.7,106.7 103.3,150.0 156.7,63.3\" fill=\"var(--hl)\" fill-opacity=\".5\"/><polygon points=\"30.0,150.0 250.0,150.0 110.0,20.0\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><line x1=\"56.7\" y1=\"106.7\" x2=\"103.3\" y2=\"150.0\" stroke=\"var(--ink)\"/><line x1=\"103.3\" y1=\"150.0\" x2=\"156.7\" y2=\"63.3\" stroke=\"var(--ink)\"/><text x=\"18.0\" y=\"154.0\" class=\"svgt\">A</text><text x=\"255.0\" y=\"154.0\" class=\"svgt\">B</text><text x=\"106.0\" y=\"15.0\" class=\"svgt\">C</text><text x=\"43.7\" y=\"106.7\" class=\"svgt\">D</text><text x=\"99.3\" y=\"164.0\" class=\"svgt\">E</text><text x=\"162.7\" y=\"63.3\" class=\"svgt\">F</text><text x=\"66.7\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">1</text><text x=\"176.7\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">2</text></svg><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2018_AMC_8_Problems/Problem_20\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2018 AMC 8 Problem 20</a> (phỏng dịch)</p>",
    "hint": "△ADE và △EBF đều đồng dạng với △ABC. Tỉ số diện tích hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng.",
    "sol": "AB = 1 + 2 = 3.<br>DE ∥ BC ⇒ △ADE ∽ △ABC với tỉ số AE/AB = 1/3 ⇒ S<sub>ADE</sub> = (1/3)<sup>2</sup> S = S/9.<br>EF ∥ AC ⇒ △EBF ∽ △ABC với tỉ số EB/AB = 2/3 ⇒ S<sub>EBF</sub> = (2/3)<sup>2</sup> S = 4S/9.<br>S<sub>CDEF</sub> = S − S/9 − 4S/9 = 4S/9.<br>Tỉ số cần tìm là <b>4/9 ≈ 0,444</b>.",
    "ans": 0.4444,
    "unit": "",
    "tol": 0.005
   },
   {
    "lv": 3,
    "t": "Tỉ số diện tích (2019 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tam giác ABC có diện tích 360. Điểm D trên cạnh AC sao cho AD : DC = 1 : 2. E là trung điểm của BD. Đường thẳng AE cắt BC tại F. Tính diện tích tam giác EBF.<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2019_AMC_8_Problems/Problem_24\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2019 AMC 8 Problem 24</a> (phỏng dịch)</p>",
    "hint": "Tính S<sub>ABD</sub> rồi S<sub>ABE</sub>. Sau đó so sánh khoảng cách từ E và từ A đến BC (dùng Thalès với các đường vuông góc xuống BC), để có S<sub>EBF</sub> : S<sub>ABF</sub>.",
    "sol": "AD = AC/3 ⇒ S<sub>ABD</sub> = 360/3 = 120. E là trung điểm BD ⇒ S<sub>ABE</sub> = 120/2 = 60.<br>Gọi h là khoảng cách từ A đến BC. Vì DC = 2AC/3 nên khoảng cách từ D đến BC là 2h/3 (Thalès). E là trung điểm BD, B nằm trên BC nên khoảng cách từ E đến BC là h/3.<br>Hai tam giác EBF và ABF chung đáy BF ⇒ S<sub>EBF</sub> : S<sub>ABF</sub> = (h/3) : h = 1 : 3.<br>Mà S<sub>ABF</sub> = S<sub>ABE</sub> + S<sub>EBF</sub> = 60 + S<sub>EBF</sub>. Đặt x = S<sub>EBF</sub>: 3x = 60 + x ⇒ x = 30.<br>Diện tích tam giác EBF là <b>30</b>.",
    "ans": 30,
    "unit": "đvdt",
    "tol": 0.01
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t8",
  "position": 8,
  "title": "Định lí Pythagoras và hình chóp đều",
  "icon": "🔺",
  "lab": "toan_pyth",
  "theory": "<div class=\"sec\"><h3>Định lí Pythagoras</h3>\n  <p>Trong một tam giác vuông, <span class=\"mark\">bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông</span>.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Tam giác vuông và hình chóp tứ giác đều\">\n<polygon points=\"30,140 30,40 150,140\" fill=\"var(--hl)\" fill-opacity=\".3\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<path d=\"M30 130 H40 V140\" fill=\"none\" stroke=\"var(--ink)\"/>\n<text x=\"24\" y=\"152\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"24\" y=\"40\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"156\" y=\"152\" class=\"svgt\">C</text>\n<text x=\"22\" y=\"94\" class=\"svgt\" text-anchor=\"end\">c</text><text x=\"90\" y=\"156\" class=\"svgt\" text-anchor=\"middle\">b</text><text x=\"96\" y=\"84\" class=\"svgt\">a</text>\n<text x=\"90\" y=\"20\" class=\"svgm\" text-anchor=\"middle\">a² = b² + c²</text>\n<polygon points=\"175,140 245,140 220,30\" fill=\"var(--accent)\" opacity=\".12\"/>\n<g stroke=\"var(--ink)\" stroke-width=\"1.3\" fill=\"none\"><line x1=\"175\" y1=\"140\" x2=\"245\" y2=\"140\"/><line x1=\"245\" y1=\"140\" x2=\"265\" y2=\"120\"/>\n<line x1=\"220\" y1=\"30\" x2=\"175\" y2=\"140\"/><line x1=\"220\" y1=\"30\" x2=\"245\" y2=\"140\"/><line x1=\"220\" y1=\"30\" x2=\"265\" y2=\"120\"/></g>\n<g stroke=\"var(--muted)\" stroke-dasharray=\"3 3\" fill=\"none\"><line x1=\"175\" y1=\"140\" x2=\"195\" y2=\"120\"/><line x1=\"195\" y1=\"120\" x2=\"265\" y2=\"120\"/><line x1=\"220\" y1=\"30\" x2=\"195\" y2=\"120\"/></g>\n<line x1=\"220\" y1=\"30\" x2=\"220\" y2=\"130\" stroke=\"var(--bad)\" stroke-dasharray=\"4 3\"/><line x1=\"220\" y1=\"30\" x2=\"210\" y2=\"140\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/>\n<circle cx=\"220\" cy=\"130\" r=\"2\" fill=\"var(--ink)\"/>\n<text x=\"220\" y=\"24\" class=\"svgt\" text-anchor=\"middle\">S</text><text x=\"226\" y=\"86\" class=\"svgt\">h</text><text x=\"208\" y=\"100\" class=\"svgt\" text-anchor=\"end\">d</text>\n<text x=\"226\" y=\"136\" class=\"svgm\">O</text><text x=\"278\" y=\"166\" class=\"svgm\" text-anchor=\"end\">h: chiều cao, d: trung đoạn</text></svg>\n  <div class=\"fbox\"><span class=\"f\">△ABC vuông tại A ⇒ BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup></span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> AB = 6 cm, AC = 8 cm ⇒ BC<sup>2</sup> = 36 + 64 = 100 ⇒ BC = 10 cm. Ngược lại, BC = 13, AB = 5 ⇒ AC<sup>2</sup> = 169 − 25 = 144 ⇒ AC = 12.</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> cạnh huyền là cạnh <u>đối diện góc vuông</u> và dài nhất. Khi tính cạnh góc vuông thì phải <b>trừ</b>: AC<sup>2</sup> = BC<sup>2</sup> − AB<sup>2</sup>.</div>\n </div>\n <div class=\"sec\"><h3>Định lí Pythagoras đảo</h3>\n  <p>Nếu một tam giác có bình phương một cạnh bằng tổng bình phương hai cạnh kia thì tam giác đó là <b>tam giác vuông</b>.</p>\n  <p>Các bộ ba quen thuộc: <span class=\"mark\">3, 4, 5</span>; 5, 12, 13; 6, 8, 10; 8, 15, 17; 7, 24, 25. Thợ xây dùng sợi dây chia 3 m, 4 m, 5 m để căng ra một góc vuông chuẩn.</p>\n </div>\n <div class=\"sec\"><h3>Ứng dụng: thang, màn hình, đường chéo</h3>\n  <ul><li><b>Thang dựa tường:</b> thang, tường, mặt đất tạo thành tam giác vuông; thang là cạnh huyền.</li>\n  <li><b>Màn hình “55 inch”:</b> là độ dài <span class=\"mark\">đường chéo</span>, 1 inch = 2,54 cm. Màn 16 : 9 có chiều ngang 16k, chiều cao 9k, đường chéo k√337 ≈ 18,36k.</li>\n  <li><b>Khoảng cách hai điểm</b> trên mặt phẳng toạ độ: AB<sup>2</sup> = (x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>.</li></ul>\n </div>\n <div class=\"sec\"><h3>Hình chóp tam giác đều, hình chóp tứ giác đều</h3>\n  <ul><li><b>Hình chóp tam giác đều:</b> đáy là tam giác đều, các cạnh bên bằng nhau; ba mặt bên là những tam giác cân bằng nhau.</li>\n  <li><b>Hình chóp tứ giác đều:</b> đáy là <span class=\"mark\">hình vuông</span>, các cạnh bên bằng nhau; bốn mặt bên là những tam giác cân bằng nhau.</li>\n  <li>Đường cao SO đi qua tâm O của đáy. <b>Trung đoạn</b> d là đường cao của mặt bên kẻ từ đỉnh S.</li></ul>\n  <div class=\"fbox\"><span class=\"f\">S<sub>xq</sub> = p · d</span><span class=\"f\">V = ⅓ · S<sub>đáy</sub> · h</span></div>\n  <p>(p là nửa chu vi đáy.) Với hình chóp tứ giác đều cạnh đáy a: tam giác vuông SO-trung đoạn cho <span class=\"mark\">d<sup>2</sup> = h<sup>2</sup> + (a/2)<sup>2</sup></span>.</p>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> trung đoạn d (trên mặt bên) khác chiều cao h (thẳng đứng). Diện tích xung quanh dùng d, thể tích dùng h. Và đừng quên hệ số ⅓.</div>\n </div>\n <div class=\"sec\"><h3>Kim tự tháp Kheops <span class=\"tag\">Liên hệ</span></h3>\n  <div class=\"eg\"><b>Ví dụ.</b> Kim tự tháp Kheops (Ai Cập) gần đúng là hình chóp tứ giác đều cạnh đáy 230 m, cao 146 m. Trung đoạn d = √(146<sup>2</sup> + 115<sup>2</sup>) ≈ 185,9 m. Thể tích V = ⅓ · 230<sup>2</sup> · 146 ≈ 2,57 triệu m<sup>3</sup>, đủ đổ đầy hơn 1 000 bể bơi Olympic.</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">📺</span>Mua tivi theo inch</b>Tivi 55 inch có đường chéo 139,7 cm nhưng chiều ngang chỉ khoảng 122 cm. Đo kệ tivi theo chiều ngang mới đúng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🪜</span>Đặt thang an toàn</b>Thang dài 5 m, chân cách tường 1,25 m (một phần tư chiều dài) thì đầu thang cao khoảng 4,84 m và góc nghiêng an toàn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏗️</span>Dựng góc vuông bằng dây 3-4-5</b>Không có ê-ke lớn, người thợ căng dây thành tam giác 3 m, 4 m, 5 m là có ngay góc vuông để xây móng nhà.</div>\n   <div class=\"app\"><b><span class=\"ico\">⛺</span>Lều cắm trại</b>Lều hình chóp tứ giác đều cạnh đáy 3 m, cao 2 m có trung đoạn 2,5 m. Cần 15 m<sup>2</sup> vải phủ bốn mặt bên.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎁</span>Hộp quà hình chóp</b>Gấp hộp quà hình chóp từ giấy bìa: hình khai triển gồm một hình vuông và bốn tam giác cân. Diện tích giấy bằng S<sub>xq</sub> + S<sub>đáy</sub>.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao đi chéo qua sân lại gần hơn đi theo hai cạnh?</summary>Sân 30 m × 40 m: đi theo hai cạnh mất 70 m, đi chéo chỉ √(900 + 1 600) = 50 m. Cạnh huyền luôn ngắn hơn tổng hai cạnh góc vuông.</details>\n  <details class=\"wq\"><summary>Vì sao thể tích hình chóp chỉ bằng ⅓ hình lăng trụ cùng đáy, cùng chiều cao?</summary>Có thể ghép ba hình chóp có thể tích bằng nhau thành một hình lăng trụ. <b>Thử ở nhà:</b> gấp một hình chóp và một hình hộp bằng giấy có cùng đáy, cùng chiều cao, đổ gạo từ hình chóp sang, đúng ba lần là đầy hình hộp.</details>\n  <details class=\"wq\"><summary>Vì sao tivi cùng 55 inch mà màn 21 : 9 lại thấp hơn màn 16 : 9?</summary>Cùng đường chéo nhưng tỉ lệ khác nhau: màn càng “dẹt” thì chiều ngang càng chiếm phần lớn đường chéo, chiều cao càng nhỏ.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để kéo chiều dài thang, kích thước hình chóp và xem độ dài, diện tích, thể tích thay đổi.</p>\n<div class=\"sec intl\"><h3>Chứng minh Pythagoras bằng cách ghép hình <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Trang AoPS cho biết định lí Pythagoras có <b>hàng trăm cách chứng minh</b>. Cách đẹp nhất cho học sinh là <span class=\"mark\">ghép bốn tam giác vuông bằng nhau vào một hình vuông cạnh a + b</span>.</p><svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Chứng minh Pythagoras bằng cách ghép bốn tam giác vuông trong hình vuông cạnh a cộng b\"><rect x=\"20\" y=\"15\" width=\"140\" height=\"140\" fill=\"var(--hl)\" fill-opacity=\".45\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><polygon points=\"80,15 160,75 100,155 20,95\" fill=\"var(--paper)\" stroke=\"var(--accent)\" stroke-width=\"2\"/><text x=\"90\" y=\"90\" class=\"svgt\" text-anchor=\"middle\">c²</text><text x=\"50\" y=\"12\" class=\"svgm\" text-anchor=\"middle\">a</text><text x=\"120\" y=\"12\" class=\"svgm\" text-anchor=\"middle\">b</text><text x=\"166\" y=\"48\" class=\"svgm\">a</text><text x=\"166\" y=\"118\" class=\"svgm\">b</text><text x=\"130\" y=\"167\" class=\"svgm\" text-anchor=\"middle\">a</text><text x=\"60\" y=\"167\" class=\"svgm\" text-anchor=\"middle\">b</text><text x=\"10\" y=\"128\" class=\"svgm\" text-anchor=\"middle\">a</text><text x=\"10\" y=\"58\" class=\"svgm\" text-anchor=\"middle\">b</text><text x=\"136\" y=\"38\" class=\"svgm\" text-anchor=\"middle\">c</text><text x=\"185\" y=\"70\" class=\"svgt\">(a + b)² =</text><text x=\"185\" y=\"88\" class=\"svgt\">4 · ab/2 + c²</text><text x=\"185\" y=\"112\" class=\"svgm\">⇒ a² + b² = c²</text></svg><p>Bốn tam giác vuông có hai cạnh góc vuông a, b và cạnh huyền c. Đặt chúng ở bốn góc hình vuông lớn cạnh (a + b); phần còn lại ở giữa là một hình vuông cạnh c (mỗi góc của nó bằng 180° − 90° = 90°).</p><p>Tính diện tích hình vuông lớn theo hai cách:</p><div class=\"fbox\"><span class=\"f\">(a + b)<sup>2</sup> = 4 · (ab/2) + c<sup>2</sup></span><span class=\"f\">a<sup>2</sup> + 2ab + b<sup>2</sup> = 2ab + c<sup>2</sup> ⇒ a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></span></div><div class=\"eg\"><b>Thử ở nhà.</b> Cắt 4 tam giác vuông bằng bìa với a = 3 cm, b = 4 cm. Xếp vào khung vuông 7 cm: lỗ ở giữa là hình vuông cạnh đúng 5 cm, diện tích 49 − 4 · 6 = 25 cm<sup>2</sup>.</div><div class=\"note\"><b>Nhận xét:</b> chứng minh này dùng đúng hằng đẳng thức (a + b)<sup>2</sup> ở chương 2. Đại số và hình học gặp nhau.</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> Pythagorean theorem (định lí Pythagoras), right triangle (tam giác vuông), hypotenuse (cạnh huyền), leg (cạnh góc vuông), proof (chứng minh), rearrangement (sắp xếp lại)</div><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/Pythagorean_Theorem\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, Pythagorean Theorem (Proof 4)</a> (phỏng dịch, có bổ sung)</p></div>",
  "formulas": [
   [
    "Định lí Pythagoras",
    "△ABC vuông tại A: BC² = AB² + AC²"
   ],
   [
    "Pythagoras đảo",
    "BC² = AB² + AC² ⇒ △ABC vuông tại A"
   ],
   [
    "Bộ ba quen thuộc",
    "3-4-5;  5-12-13;  6-8-10;  8-15-17"
   ],
   [
    "Diện tích xung quanh chóp đều",
    "S_xq = p · d (p: nửa chu vi đáy, d: trung đoạn)"
   ],
   [
    "Thể tích hình chóp",
    "V = ⅓ · S_đáy · h"
   ],
   [
    "Chóp tứ giác đều",
    "d² = h² + (a/2)²"
   ],
   [
    "Màn hình",
    "1 inch = 2,54 cm; kích thước = đường chéo"
   ]
  ],
  "quiz": [
   {
    "q": "Tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Cạnh BC dài:",
    "o": [
     "10 cm",
     "14 cm",
     "7 cm",
     "100 cm"
    ],
    "why": "BC<sup>2</sup> = 36 + 64 = 100 ⇒ BC = 10 cm. 100 là BC<sup>2</sup> chứ chưa khai căn."
   },
   {
    "q": "Bộ ba độ dài nào là ba cạnh của một tam giác vuông?",
    "o": [
     "5, 12, 13",
     "4, 5, 6",
     "2, 3, 4",
     "6, 7, 9"
    ],
    "why": "25 + 144 = 169 = 13<sup>2</sup>. Các bộ khác không thỏa mãn định lí đảo."
   },
   {
    "q": "Chiếc thang dài 5 m dựa vào tường, chân thang cách tường 3 m. Đầu thang cách mặt đất:",
    "o": [
     "4 m",
     "2 m",
     "8 m",
     "5,8 m"
    ],
    "why": "h<sup>2</sup> = 25 − 9 = 16 ⇒ h = 4 m. Thang là cạnh huyền nên phải trừ."
   },
   {
    "q": "Đáy của hình chóp tứ giác đều là:",
    "o": [
     "Hình vuông",
     "Hình chữ nhật",
     "Hình thoi",
     "Tam giác đều"
    ],
    "why": "Hình chóp tứ giác đều có đáy là hình vuông, các cạnh bên bằng nhau."
   },
   {
    "q": "Các mặt bên của hình chóp tam giác đều là:",
    "o": [
     "Những tam giác cân bằng nhau",
     "Luôn là tam giác đều",
     "Tam giác vuông",
     "Hình vuông"
    ],
    "why": "Mặt bên là tam giác cân tại đỉnh chóp. Chỉ khi cạnh bên bằng cạnh đáy thì mới là tam giác đều."
   },
   {
    "q": "Hình chóp tứ giác đều có cạnh đáy 6 cm, trung đoạn 5 cm. Diện tích xung quanh là:",
    "o": [
     "60 cm<sup>2</sup>",
     "120 cm<sup>2</sup>",
     "30 cm<sup>2</sup>",
     "96 cm<sup>2</sup>"
    ],
    "why": "S<sub>xq</sub> = p · d = 12 · 5 = 60 cm<sup>2</sup> (p = 24 : 2 = 12). 96 là diện tích toàn phần."
   },
   {
    "q": "Hình chóp tứ giác đều có cạnh đáy 6 cm, chiều cao 4 cm. Thể tích là:",
    "o": [
     "48 cm<sup>3</sup>",
     "144 cm<sup>3</sup>",
     "72 cm<sup>3</sup>",
     "24 cm<sup>3</sup>"
    ],
    "why": "V = ⅓ · 36 · 4 = 48 cm<sup>3</sup>. Quên ⅓ sẽ ra 144."
   },
   {
    "q": "Tivi “50 inch” nghĩa là:",
    "o": [
     "Đường chéo màn hình dài 50 inch",
     "Chiều ngang màn hình dài 50 inch",
     "Chu vi màn hình là 50 inch",
     "Chiều cao màn hình là 50 inch"
    ],
    "why": "Kích thước màn hình luôn đo theo đường chéo."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Định lí Pythagoras",
    "t": "Tìm cạnh góc vuông",
    "q": "Cho tam giác ABC vuông tại A có BC = 13 cm, AB = 5 cm. Tính AC (cm).<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC vuông tại A\">\n<polygon points=\"40,140 40,65 220,140\" fill=\"var(--hl)\" fill-opacity=\".3\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<path d=\"M40 130 H50 V140\" fill=\"none\" stroke=\"var(--ink)\"/>\n<text x=\"34\" y=\"152\" class=\"svgt\" text-anchor=\"end\">A</text><text x=\"34\" y=\"64\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"226\" y=\"152\" class=\"svgt\">C</text>\n<text x=\"34\" y=\"106\" class=\"svgm\" text-anchor=\"end\">5 cm</text><text x=\"136\" y=\"96\" class=\"svgm\">13 cm</text><text x=\"130\" y=\"156\" class=\"svgm\" text-anchor=\"middle\">?</text></svg>",
    "hint": "BC là cạnh huyền. AC<sup>2</sup> = BC<sup>2</sup> − AB<sup>2</sup>.",
    "sol": "Theo định lí Pythagoras: AC<sup>2</sup> = BC<sup>2</sup> − AB<sup>2</sup> = 169 − 25 = 144 ⇒ <b>AC = 12 cm</b>.",
    "ans": 12,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 1,
    "d": "Hình chóp đều",
    "t": "Giấy gói hộp quà",
    "q": "Một hộp quà có dạng hình chóp tứ giác đều, cạnh đáy 10 cm, trung đoạn 13 cm. Bạn Hà muốn dán giấy màu phủ kín bốn mặt bên. Cần bao nhiêu cm<sup>2</sup> giấy (không tính mép dán)?",
    "hint": "Diện tích bốn mặt bên chính là S<sub>xq</sub> = p · d.",
    "sol": "Nửa chu vi đáy: p = 4 · 10 : 2 = 20 cm.<br>S<sub>xq</sub> = p · d = 20 · 13 = <b>260 cm<sup>2</sup></b>.<br>(Cách khác: 4 tam giác, mỗi tam giác ½ · 10 · 13 = 65 cm<sup>2</sup>.)",
    "ans": 260,
    "unit": "cm²",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Ứng dụng thực tế",
    "t": "Thang bị trượt chân",
    "q": "Chiếc thang dài 6,5 m dựa vào tường thẳng đứng, chân thang cách chân tường 2,5 m. Chân thang bị trượt ra xa tường thêm 1,4 m. Hỏi đầu thang đã tụt xuống bao nhiêu mét?<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Thang dựa tường, hai vị trí\">\n<rect x=\"200\" y=\"20\" width=\"12\" height=\"130\" fill=\"var(--line)\"/><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"20\" y1=\"150\" x2=\"250\" y2=\"150\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"150\" y1=\"150\" x2=\"200\" y2=\"30\" stroke=\"var(--accent)\" stroke-width=\"3\"/>\n<line x1=\"122\" y1=\"150\" x2=\"200\" y2=\"46\" stroke=\"var(--accent)\" stroke-width=\"2\" stroke-dasharray=\"5 4\" opacity=\".7\"/>\n<text x=\"150\" y=\"100\" class=\"svgm\" text-anchor=\"end\">6,5 m</text><text x=\"175\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">2,5 m</text><text x=\"136\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">1,4 m</text>\n<text x=\"218\" y=\"34\" class=\"svgm\">lúc đầu</text><text x=\"218\" y=\"50\" class=\"svgm\">lúc sau</text></svg>",
    "hint": "Tính độ cao đầu thang lúc đầu và lúc sau bằng Pythagoras, rồi trừ.",
    "sol": "Lúc đầu: h<sub>1</sub><sup>2</sup> = 6,5<sup>2</sup> − 2,5<sup>2</sup> = 42,25 − 6,25 = 36 ⇒ h<sub>1</sub> = 6 m.<br>Lúc sau, chân thang cách tường 2,5 + 1,4 = 3,9 m:<br>h<sub>2</sub><sup>2</sup> = 42,25 − 15,21 = 27,04 ⇒ h<sub>2</sub> = 5,2 m.<br>Đầu thang tụt xuống: 6 − 5,2 = <b>0,8 m</b>. (Chân trượt 1,4 m mà đầu chỉ tụt 0,8 m!)",
    "ans": 0.8,
    "unit": "m",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Ứng dụng thực tế",
    "t": "Chiều ngang tivi 55 inch",
    "q": "Nhà An định mua tivi 55 inch, màn hình tỉ lệ 16 : 9 (ngang : cao). Biết 1 inch = 2,54 cm. Hỏi chiều ngang màn hình khoảng bao nhiêu cm? (Làm tròn đến 0,1 cm.)<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Màn hình tivi tỉ lệ 16 : 9 và đường chéo\">\n<rect x=\"42\" y=\"30\" width=\"176\" height=\"99\" rx=\"4\" fill=\"var(--paper)\" stroke=\"var(--ink)\" stroke-width=\"3\"/>\n<line x1=\"42\" y1=\"129\" x2=\"218\" y2=\"30\" stroke=\"var(--accent)\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n<text x=\"120\" y=\"66\" class=\"svgt\" text-anchor=\"end\">55 inch</text><text x=\"130\" y=\"146\" class=\"svgm\" text-anchor=\"middle\">16 phần</text><text x=\"36\" y=\"84\" class=\"svgm\" text-anchor=\"end\">9 phần</text>\n<line x1=\"110\" y1=\"129\" x2=\"150\" y2=\"129\" stroke=\"var(--ink)\" stroke-width=\"3\"/><line x1=\"130\" y1=\"129\" x2=\"130\" y2=\"136\" stroke=\"var(--ink)\" stroke-width=\"3\"/></svg>",
    "hint": "Gọi chiều ngang 16k, chiều cao 9k thì đường chéo là k√(16<sup>2</sup> + 9<sup>2</sup>) = k√337.",
    "sol": "Đường chéo: 55 · 2,54 = 139,7 cm.<br>Gọi chiều ngang 16k, chiều cao 9k: (16k)<sup>2</sup> + (9k)<sup>2</sup> = 139,7<sup>2</sup> ⇒ 337k<sup>2</sup> = 139,7<sup>2</sup> ⇒ k = 139,7/√337 ≈ 7,610.<br>Chiều ngang: 16k ≈ <b>121,8 cm</b>; chiều cao 9k ≈ 68,5 cm.<br>Vậy kệ tivi cần rộng hơn 1,22 m (chưa kể viền).",
    "ans": 121.8,
    "unit": "cm",
    "tol": 0.3
   },
   {
    "lv": 2,
    "d": "Ứng dụng thực tế",
    "t": "Đường chim bay trên bản đồ",
    "q": "Trên bản đồ khu phố kẻ ô vuông, mỗi ô cạnh 100 m. Đặt hệ trục toạ độ thì nhà An ở điểm A(1; 2), trường học ở điểm B(7; 10). Các con phố chạy theo các đường kẻ ô. Nếu có lối đi thẳng từ A đến B thì ngắn hơn đường đi theo phố ngắn nhất bao nhiêu mét?",
    "hint": "Đi theo phố: tổng độ chênh hoành độ và tung độ. Đi thẳng: dùng Pythagoras.",
    "sol": "Chênh lệch: 7 − 1 = 6 ô theo chiều ngang, 10 − 2 = 8 ô theo chiều dọc.<br>Đi theo phố: (6 + 8) · 100 = 1 400 m.<br>Đi thẳng: AB = √(6<sup>2</sup> + 8<sup>2</sup>) = 10 ô = 1 000 m.<br>Ngắn hơn: 1 400 − 1 000 = <b>400 m</b>.",
    "ans": 400,
    "unit": "m",
    "tol": 0.5
   },
   {
    "lv": 2,
    "d": "Hình chóp đều",
    "t": "Lều cắm trại",
    "q": "Lều cắm trại có dạng hình chóp tứ giác đều, cạnh đáy 3 m, chiều cao 2 m.<br>a) Tính trung đoạn của lều.<br>b) Tính diện tích vải phủ bốn mặt bên (m<sup>2</sup>).<br>c) Tính thể tích không khí trong lều.",
    "hint": "Tam giác vuông tạo bởi chiều cao h, nửa cạnh đáy và trung đoạn: d<sup>2</sup> = h<sup>2</sup> + (a/2)<sup>2</sup>.",
    "sol": "a) d<sup>2</sup> = 2<sup>2</sup> + 1,5<sup>2</sup> = 4 + 2,25 = 6,25 ⇒ d = 2,5 m.<br>b) p = 4 · 3 : 2 = 6 m; S<sub>xq</sub> = 6 · 2,5 = <b>15 m<sup>2</sup></b>.<br>c) V = ⅓ · 3<sup>2</sup> · 2 = 6 m<sup>3</sup>.",
    "ans": 15,
    "unit": "m²",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Định lí Pythagoras",
    "t": "Đường cao trong tam giác vuông",
    "q": "Cho tam giác ABC vuông tại A, AB = 15 cm, AC = 20 cm, đường cao AH.<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Tam giác ABC vuông tại A, đường cao AH\">\n<polygon points=\"20,140 240,140 99.2,34.4\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/>\n<line x1=\"99.2\" y1=\"34.4\" x2=\"99.2\" y2=\"140\" stroke=\"var(--accent)\" stroke-dasharray=\"4 3\"/>\n<path d=\"M99.2 132 H107.2 V140\" fill=\"none\" stroke=\"var(--ink)\"/>\n<text x=\"99\" y=\"28\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"14\" y=\"146\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"246\" y=\"146\" class=\"svgt\">C</text><text x=\"99\" y=\"156\" class=\"svgt\" text-anchor=\"middle\">H</text>\n<text x=\"52\" y=\"82\" class=\"svgm\" text-anchor=\"end\">15 cm</text><text x=\"176\" y=\"82\" class=\"svgm\">20 cm</text></svg>a) Chứng minh AH · BC = AB · AC và 1/AH<sup>2</sup> = 1/AB<sup>2</sup> + 1/AC<sup>2</sup>.<br>b) Tính AH (cm).",
    "hint": "Tính diện tích tam giác theo hai cách. Sau đó bình phương và dùng BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>.",
    "sol": "a) Diện tích △ABC: ½ AB · AC = ½ AH · BC ⇒ AH · BC = AB · AC.<br>Bình phương: AH<sup>2</sup> · BC<sup>2</sup> = AB<sup>2</sup> · AC<sup>2</sup> ⇒ 1/AH<sup>2</sup> = BC<sup>2</sup>/(AB<sup>2</sup> · AC<sup>2</sup>) = (AB<sup>2</sup> + AC<sup>2</sup>)/(AB<sup>2</sup> · AC<sup>2</sup>) = 1/AC<sup>2</sup> + 1/AB<sup>2</sup>.<br>b) BC = √(225 + 400) = 25 cm. AH = AB · AC/BC = 15 · 20/25 = <b>12 cm</b>.",
    "ans": 12,
    "unit": "cm",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Hình chóp đều",
    "t": "Hình chóp có mọi cạnh bằng nhau",
    "q": "Hình chóp tứ giác đều S.ABCD có tất cả các cạnh (cả cạnh đáy và cạnh bên) đều bằng 10 cm. Tính thể tích của hình chóp (cm<sup>3</sup>, làm tròn đến 0,1).",
    "hint": "O là tâm đáy (giao hai đường chéo). Tính OA từ đường chéo hình vuông, rồi SO<sup>2</sup> = SA<sup>2</sup> − OA<sup>2</sup>.",
    "sol": "Đường chéo đáy: AC<sup>2</sup> = 10<sup>2</sup> + 10<sup>2</sup> = 200 ⇒ OA<sup>2</sup> = (AC/2)<sup>2</sup> = 200/4 = 50.<br>Tam giác SOA vuông tại O: SO<sup>2</sup> = SA<sup>2</sup> − OA<sup>2</sup> = 100 − 50 = 50 ⇒ SO = √50 ≈ 7,071 cm.<br>V = ⅓ · 10<sup>2</sup> · √50 = 100√50/3 ≈ <b>235,7 cm<sup>3</sup></b>.<br>Nhận xét thú vị: SO = OA, tam giác SAC vuông cân tại S.",
    "ans": 235.7,
    "unit": "cm³",
    "tol": 0.1
   },
   {
    "lv": 2,
    "t": "Hình chữ nhật trong nửa đường tròn (2020 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Hình chữ nhật ABCD nội tiếp nửa đường tròn đường kính FE: cạnh DA nằm trên đường kính, hai đỉnh B, C nằm trên nửa đường tròn. Biết DA = 16, FD = AE = 9. Tính diện tích hình chữ nhật ABCD.<svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Hình chữ nhật nội tiếp nửa đường tròn\"><path d=\"M21 150 A119 119 0 0 1 259 150 Z\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><rect x=\"84\" y=\"45\" width=\"112\" height=\"105\" fill=\"var(--hl)\" fill-opacity=\".5\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><line x1=\"140\" y1=\"150\" x2=\"196\" y2=\"45\" stroke=\"var(--accent)\" stroke-dasharray=\"4 3\"/><circle cx=\"140\" cy=\"150\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"21\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">F</text><text x=\"259\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">E</text><text x=\"84\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">D</text><text x=\"196\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">A</text><text x=\"202\" y=\"42\" class=\"svgt\" text-anchor=\"start\">B</text><text x=\"78\" y=\"42\" class=\"svgt\" text-anchor=\"end\">C</text><text x=\"140\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">O</text><text x=\"52\" y=\"146\" class=\"svgm\" text-anchor=\"middle\">9</text><text x=\"228\" y=\"146\" class=\"svgm\" text-anchor=\"middle\">9</text><text x=\"112\" y=\"146\" class=\"svgm\" text-anchor=\"middle\">8</text><text x=\"168\" y=\"146\" class=\"svgm\" text-anchor=\"middle\">8</text></svg><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2020_AMC_8_Problems/Problem_18\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2020 AMC 8 Problem 18</a> (phỏng dịch)</p>",
    "hint": "Tìm đường kính, bán kính. Tâm O là trung điểm của DA. Nối O với B: OB là bán kính, tam giác OAB vuông tại A.",
    "sol": "FE = 9 + 16 + 9 = 34 ⇒ bán kính R = 17. Do đối xứng, tâm O là trung điểm DA ⇒ OA = 8.<br>Tam giác OAB vuông tại A, OB = R = 17: AB<sup>2</sup> = 17<sup>2</sup> − 8<sup>2</sup> = 289 − 64 = 225 ⇒ AB = 15.<br>Diện tích ABCD = DA · AB = 16 · 15 = <b>240</b>.",
    "ans": 240,
    "unit": "đvdt",
    "tol": 0.01
   },
   {
    "lv": 3,
    "t": "Nửa đường tròn nội tiếp tam giác vuông (2017 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Tam giác ABC vuông tại C có AC = 12, BC = 5. Một nửa đường tròn có đường kính nằm trên cạnh AC (một đầu là C), tiếp xúc với cạnh huyền AB (như hình). Tính bán kính r của nửa đường tròn.<svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Nửa đường tròn nội tiếp tam giác vuông\"><polygon points=\"30,150 246,150 30,60\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"1.5\"/><path d=\"M30 140 H40 V150\" fill=\"none\" stroke=\"var(--ink)\"/><path d=\"M30 150 A60 60 0 0 1 150 150\" fill=\"var(--hl)\" fill-opacity=\".5\" stroke=\"var(--accent)\" stroke-width=\"1.5\"/><line x1=\"90\" y1=\"150\" x2=\"113.1\" y2=\"94.6\" stroke=\"var(--muted)\" stroke-dasharray=\"3 3\"/><circle cx=\"90\" cy=\"150\" r=\"2.5\" fill=\"var(--ink)\"/><text x=\"24\" y=\"164\" class=\"svgt\" text-anchor=\"end\">C</text><text x=\"252\" y=\"164\" class=\"svgt\" text-anchor=\"start\">A</text><text x=\"24\" y=\"58\" class=\"svgt\" text-anchor=\"end\">B</text><text x=\"90\" y=\"164\" class=\"svgt\" text-anchor=\"middle\">O</text><text x=\"117\" y=\"90\" class=\"svgt\" text-anchor=\"start\">T</text><text x=\"20\" y=\"108\" class=\"svgm\" text-anchor=\"end\">5</text><text x=\"200\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">12</text><text x=\"150\" y=\"98\" class=\"svgm\">13</text></svg><p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2017_AMC_8_Problems/Problem_22\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2017 AMC 8 Problem 22</a> (phỏng dịch)</p>",
    "hint": "Gọi O là tâm, T là tiếp điểm trên AB. Nửa đường tròn tiếp xúc BC tại C và tiếp xúc AB tại T nên BT = BC = 5. Tam giác AOT vuông tại T.",
    "sol": "AB<sup>2</sup> = 12<sup>2</sup> + 5<sup>2</sup> = 169 ⇒ AB = 13.<br>OC ⊥ BC nên BC tiếp xúc nửa đường tròn tại C. Hai tiếp tuyến kẻ từ B bằng nhau: BT = BC = 5 ⇒ AT = 13 − 5 = 8.<br>OT ⊥ AB, OT = r, AO = 12 − r. Pythagoras trong △AOT: (12 − r)<sup>2</sup> = r<sup>2</sup> + 8<sup>2</sup><br>⇔ 144 − 24r + r<sup>2</sup> = r<sup>2</sup> + 64 ⇔ 24r = 80 ⇔ r = 10/3.<br>Bán kính <b>r = 10/3 ≈ 3,33</b>.",
    "ans": 3.3333,
    "unit": "",
    "tol": 0.01
   }
  ],
  "published": true,
  "subject": "toan-8"
 },
 {
  "id": "t9",
  "position": 9,
  "title": "Thống kê và xác suất",
  "icon": "🎲",
  "lab": "toan_dice",
  "theory": "<div class=\"sec\"><h3>Thu thập và phân loại dữ liệu</h3>\n  <ul><li>Cách thu thập: <b>quan sát</b>, <b>làm thí nghiệm</b>, <b>lập phiếu hỏi</b> (khảo sát, phỏng vấn), <b>lấy từ nguồn có sẵn</b> (sách báo, trang web).</li>\n  <li>Phân loại: dữ liệu <span class=\"mark\">là số</span> (chiều cao, điểm thi, số anh chị em…) và dữ liệu <span class=\"mark\">không phải là số</span> (màu yêu thích, môn thể thao, nơi sinh…). Dữ liệu là số chia tiếp thành rời rạc (đếm được: số bạn) và liên tục (đo được: cân nặng).</li>\n  <li>Cần kiểm tra <b>tính hợp lí</b>: chiều cao 315 cm của học sinh lớp 8, hay tỉ lệ phần trăm có tổng 110% là dữ liệu vô lí.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> mẫu khảo sát phải <u>đại diện</u>. Hỏi 10 bạn trong đội bóng đá “em thích môn gì” rồi kết luận cả trường thích bóng đá nhất là không đáng tin.</div>\n </div>\n <div class=\"sec\"><h3>Biểu diễn dữ liệu bằng bảng, biểu đồ</h3>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Biểu đồ cột môn thể thao yêu thích của 30 bạn lớp 8A\">\n<line x1=\"40\" y1=\"140\" x2=\"270\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"30\" stroke=\"var(--ink)\"/>\n<g stroke=\"var(--line)\" stroke-dasharray=\"2 3\"><line x1=\"40\" y1=\"108\" x2=\"270\" y2=\"108\"/><line x1=\"40\" y1=\"76\" x2=\"270\" y2=\"76\"/><line x1=\"40\" y1=\"44\" x2=\"270\" y2=\"44\"/></g>\n<g class=\"svgm\" text-anchor=\"end\"><text x=\"34\" y=\"144\">0</text><text x=\"34\" y=\"112\">4</text><text x=\"34\" y=\"80\">8</text><text x=\"34\" y=\"48\">12</text></g>\n<rect x=\"55\" y=\"44\" width=\"34\" height=\"96\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"72\" y=\"40\" class=\"svgt\" text-anchor=\"middle\">12</text><text x=\"72\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Cầu lông</text><rect x=\"110\" y=\"76\" width=\"34\" height=\"64\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"127\" y=\"72\" class=\"svgt\" text-anchor=\"middle\">8</text><text x=\"127\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Bóng đá</text><rect x=\"165\" y=\"92\" width=\"34\" height=\"48\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"182\" y=\"88\" class=\"svgt\" text-anchor=\"middle\">6</text><text x=\"182\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Bơi</text><rect x=\"220\" y=\"108\" width=\"34\" height=\"32\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"237\" y=\"104\" class=\"svgt\" text-anchor=\"middle\">4</text><text x=\"237\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Bóng rổ</text>\n<text x=\"155\" y=\"16\" class=\"svgt\" text-anchor=\"middle\">Môn thể thao yêu thích (số bạn)</text></svg>\n  <div class=\"tbl\"><table><tr><th>Biểu đồ</th><th>Dùng khi</th></tr>\n  <tr><td>Biểu đồ tranh, biểu đồ cột</td><td>so sánh số lượng giữa các nhóm</td></tr>\n  <tr><td>Biểu đồ cột kép</td><td>so sánh hai bộ dữ liệu cùng loại (nam và nữ, năm nay và năm trước)</td></tr>\n  <tr><td>Biểu đồ đoạn thẳng</td><td>theo dõi <span class=\"mark\">sự thay đổi theo thời gian</span> (nhiệt độ, chi tiêu từng tháng)</td></tr>\n  <tr><td>Biểu đồ hình quạt tròn</td><td>biểu diễn <span class=\"mark\">các phần của một tổng thể</span> (tỉ lệ %)</td></tr></table></div>\n  <p>Đổi số lượng sang tỉ lệ phần trăm: lấy số lượng nhóm chia tổng rồi nhân 100%. Cầu lông: 12/30 · 100% = 40%. Trong biểu đồ quạt tròn, nhóm này chiếm 40% · 360° = 144°.</p>\n </div>\n <div class=\"sec\"><h3>Phân tích số liệu</h3>\n  <p>Từ biểu đồ em có thể tìm nhóm lớn nhất, nhỏ nhất, xu hướng tăng hay giảm, mức tăng (giảm) bao nhiêu phần trăm.</p>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> biểu đồ cột có trục đứng <u>không bắt đầu từ 0</u> làm chênh lệch nhỏ trông rất lớn. Luôn đọc con số trên trục trước khi kết luận.</div>\n </div>\n <div class=\"sec\"><h3>Kết quả thuận lợi và xác suất của biến cố</h3>\n  <p>Khi các kết quả có thể của phép thử là <b>đồng khả năng</b> (như xúc xắc cân đối, đồng xu cân đối, bốc thăm ngẫu nhiên):</p>\n  <div class=\"fbox\"><span class=\"f\">P(A) = số kết quả thuận lợi cho A / tổng số kết quả có thể</span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Gieo một xúc xắc. Biến cố A “số chấm chẵn” có 3 kết quả thuận lợi {2; 4; 6} trong 6 kết quả. P(A) = 3/6 = 1/2.</div>\n  <p>Xác suất luôn nằm trong khoảng từ 0 (biến cố không thể) đến 1 (biến cố chắc chắn).</p>\n </div>\n <div class=\"sec\"><h3>Xác suất thực nghiệm</h3>\n  <div class=\"fbox\"><span class=\"f\">P<sub>thực nghiệm</sub>(A) = số lần A xảy ra / tổng số lần thử</span></div>\n  <p>Khi số lần thử <span class=\"mark\">càng lớn</span>, xác suất thực nghiệm càng gần xác suất lí thuyết. Vì vậy người ta dùng xác suất thực nghiệm để <b>ước lượng</b>: kiểm tra 500 sản phẩm có 12 lỗi thì ước lượng tỉ lệ lỗi khoảng 2,4%.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🌧️</span>“Khả năng mưa 70%”</b>Dự báo thời tiết nói vậy nghĩa là trong nhiều ngày có điều kiện thời tiết giống hôm nay, khoảng 70% số ngày có mưa. Nên mang áo mưa!</div>\n   <div class=\"app\"><b><span class=\"ico\">🏭</span>Kiểm tra chất lượng</b>Nhà máy không thể thử hết mọi bóng đèn. Họ lấy mẫu vài trăm chiếc, tính tỉ lệ lỗi rồi ước lượng cho cả lô hàng hàng chục nghìn chiếc.</div>\n   <div class=\"app\"><b><span class=\"ico\">🐟</span>Đếm cá trong hồ</b>Bắt 100 con cá, đánh dấu rồi thả lại. Lần sau bắt 120 con thấy 8 con có dấu. Tỉ lệ 8/120 giúp ước lượng cả hồ có khoảng 1 500 con.</div>\n   <div class=\"app\"><b><span class=\"ico\">📋</span>Khảo sát chọn đồng phục</b>Lớp trưởng phát phiếu hỏi, vẽ biểu đồ cột cho từng mẫu áo. Cả lớp nhìn biểu đồ là thấy ngay mẫu nào được chọn nhiều nhất.</div>\n   <div class=\"app\"><b><span class=\"ico\">💸</span>Biểu đồ chi tiêu</b>Ghi lại tiền tiêu vặt mỗi tuần và vẽ biểu đồ quạt tròn: em sẽ thấy trà sữa chiếm bao nhiêu phần trăm và quyết định có cần tiết kiệm không.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Tung đồng xu 10 lần được 7 lần sấp. Đồng xu có bị “gian” không?</summary>Chưa chắc. Với ít lần thử, kết quả dao động mạnh. Tung 1 000 lần mà vẫn khoảng 700 lần sấp thì mới đáng nghi.</details>\n  <details class=\"wq\"><summary>Đã ra 5 lần ngửa liên tiếp, lần sau chắc chắn ra sấp?</summary>Không. Đồng xu không có “trí nhớ”, lần tung sau vẫn có xác suất sấp 1/2. Tin rằng “sắp tới lượt” là một ngộ nhận rất phổ biến.</details>\n  <details class=\"wq\"><summary>Gieo hai xúc xắc, vì sao tổng 7 hay ra nhất?</summary>Có 6 cách được tổng 7: (1;6), (2;5), (3;4), (4;3), (5;2), (6;1). Tổng 2 hoặc 12 chỉ có 1 cách. Trong 36 kết quả, tổng 7 có xác suất 1/6, lớn nhất.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để tung xúc xắc, đồng xu hàng trăm lần và xem xác suất thực nghiệm tiến dần về lí thuyết.</p>\n<div class=\"sec intl\"><h3>Nghịch lí Monty Hall: có nên đổi cửa? <span class=\"tag intl\">Nguồn từ nước ngoài</span></h3><p>Trong một trò chơi truyền hình Mỹ, có 3 cánh cửa: sau 1 cửa là <b>chiếc ô tô</b>, sau 2 cửa còn lại là <b>con dê</b>. Em chọn một cửa. Người dẫn chương trình (biết rõ sau mỗi cửa có gì) mở một trong hai cửa còn lại, luôn là cửa có dê. Rồi anh hỏi: \"Em có muốn đổi sang cửa chưa mở kia không?\"</p><p>Năm 1990, nhà báo Marilyn vos Savant trả lời trên tạp chí <i>Parade</i>: <span class=\"mark\">nên đổi, vì đổi thì xác suất thắng là 2/3, giữ nguyên chỉ là 1/3</span>. Bà nhận khoảng 10 000 lá thư phản đối, gần 1 000 lá từ các tiến sĩ! Ngay cả nhà toán học nổi tiếng Paul Erdős cũng chỉ tin khi xem mô phỏng máy tính.</p><div class=\"tbl\"><table><tr><th>Cửa em chọn lúc đầu</th><th>Xác suất</th><th>Giữ nguyên</th><th>Đổi cửa</th></tr><tr><td>Ô tô</td><td>1/3</td><td>Thắng</td><td>Thua</td></tr><tr><td>Dê thứ nhất</td><td>1/3</td><td>Thua</td><td>Thắng</td></tr><tr><td>Dê thứ hai</td><td>1/3</td><td>Thua</td><td>Thắng</td></tr></table></div><p><b>Giải thích.</b> Lúc đầu em chọn trúng dê với xác suất 2/3. Khi đó người dẫn buộc phải mở con dê còn lại, nên cửa kia chắc chắn là ô tô. Vì vậy chiến thuật \"luôn đổi\" thắng đúng khi lựa chọn đầu là dê: xác suất 2/3.</p><div class=\"eg\"><b>Thử ở nhà.</b> Dùng 3 cái cốc úp và 1 viên kẹo. Một bạn làm người dẫn. Chơi 30 lần \"luôn đổi\" và 30 lần \"giữ nguyên\", ghi lại số lần thắng. Xác suất thực nghiệm sẽ gần 2/3 và 1/3.</div><div class=\"note\"><b>Bẫy hay gặp:</b> nghĩ rằng còn 2 cửa nên mỗi cửa 1/2. Sai, vì người dẫn <u>biết</u> và <u>cố ý</u> mở cửa có dê, hai cửa còn lại không còn \"như nhau\".</div><div class=\"vocab\"><b>Từ vựng tiếng Anh:</b> probability (xác suất), outcome (kết quả), switch (đổi), stay (giữ nguyên), paradox (nghịch lí), simulation (mô phỏng)</div><p class=\"src\">Nguồn: <a href=\"https://en.wikipedia.org/wiki/Monty_Hall_problem\" target=\"_blank\" rel=\"noopener\">Wikipedia, Monty Hall problem</a> (phỏng dịch)</p></div>",
  "formulas": [
   [
    "Phân loại dữ liệu",
    "là số (rời rạc, liên tục) / không phải là số"
   ],
   [
    "Tỉ lệ phần trăm",
    "số lượng nhóm / tổng × 100%"
   ],
   [
    "Góc quạt tròn",
    "tỉ lệ % × 360°"
   ],
   [
    "Chọn biểu đồ",
    "thay đổi theo thời gian: đoạn thẳng; các phần của tổng thể: quạt tròn"
   ],
   [
    "Xác suất (đồng khả năng)",
    "P(A) = số kết quả thuận lợi / tổng số kết quả"
   ],
   [
    "Xác suất thực nghiệm",
    "số lần A xảy ra / tổng số lần thử"
   ],
   [
    "Ước lượng",
    "số lần dự kiến ≈ xác suất × số lần thử"
   ]
  ],
  "quiz": [
   {
    "q": "Dữ liệu nào sau đây KHÔNG phải là số?",
    "o": [
     "Màu sắc yêu thích của các bạn trong lớp",
     "Chiều cao của các bạn trong lớp",
     "Số anh chị em của mỗi bạn",
     "Điểm kiểm tra Toán"
    ],
    "why": "Màu sắc là dữ liệu dạng chữ (phân loại), các dữ liệu còn lại là số."
   },
   {
    "q": "Để biểu diễn nhiệt độ cao nhất mỗi ngày trong một tuần, biểu đồ phù hợp nhất là:",
    "o": [
     "Biểu đồ đoạn thẳng",
     "Biểu đồ hình quạt tròn",
     "Biểu đồ tranh",
     "Biểu đồ cột kép"
    ],
    "why": "Biểu đồ đoạn thẳng cho thấy rõ sự thay đổi theo thời gian."
   },
   {
    "q": "Để biểu diễn tỉ lệ phần trăm các khoản chi tiêu trong tổng tiền tiêu vặt, nên dùng:",
    "o": [
     "Biểu đồ hình quạt tròn",
     "Biểu đồ đoạn thẳng",
     "Biểu đồ cột kép",
     "Biểu đồ tranh"
    ],
    "why": "Quạt tròn thể hiện các phần của một tổng thể (tổng 100%)."
   },
   {
    "q": "Gieo một xúc xắc cân đối. Xác suất xuất hiện mặt có số chấm chẵn là:",
    "o": [
     "1/2",
     "1/3",
     "1/6",
     "2/3"
    ],
    "why": "Có 3 kết quả thuận lợi (2, 4, 6) trong 6 kết quả: 3/6 = 1/2."
   },
   {
    "q": "Hộp có 3 bi đỏ, 5 bi xanh, 2 bi vàng. Lấy ngẫu nhiên 1 viên. Xác suất lấy được bi xanh là:",
    "o": [
     "1/2",
     "5/8",
     "1/5",
     "1/3"
    ],
    "why": "Tổng 10 viên, 5 viên xanh: 5/10 = 1/2. Đáp án 5/8 quên mất bi vàng."
   },
   {
    "q": "Tung một đồng xu 50 lần, có 21 lần mặt sấp. Xác suất thực nghiệm của biến cố “mặt sấp” là:",
    "o": [
     "0,42",
     "0,5",
     "0,21",
     "0,58"
    ],
    "why": "21/50 = 0,42. Số 0,5 là xác suất lí thuyết, còn 0,58 là của mặt ngửa."
   },
   {
    "q": "Chọn ngẫu nhiên một số tự nhiên từ 1 đến 20. Xác suất chọn được số nguyên tố là:",
    "o": [
     "0,4",
     "0,45",
     "0,5",
     "0,35"
    ],
    "why": "Có 8 số nguyên tố: 2, 3, 5, 7, 11, 13, 17, 19. 8/20 = 0,4. Số 1 không phải số nguyên tố."
   },
   {
    "q": "Một xạ thủ bắn 200 phát, trúng 170 phát. Nếu bắn 1 000 phát, dự đoán số phát trúng khoảng:",
    "o": [
     "850",
     "170",
     "830",
     "900"
    ],
    "why": "Xác suất thực nghiệm 170/200 = 0,85; 0,85 · 1 000 = 850."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "d": "Biểu đồ, số liệu",
    "t": "Đọc biểu đồ cột",
    "q": "Biểu đồ dưới đây cho biết phương tiện đến trường của 40 bạn lớp 8B. Số bạn đi xe đạp chiếm bao nhiêu phần trăm cả lớp?<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Biểu đồ cột phương tiện đến trường của 40 bạn lớp 8B\">\n<line x1=\"30\" y1=\"140\" x2=\"255\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"30\" y1=\"140\" x2=\"30\" y2=\"30\" stroke=\"var(--ink)\"/>\n<rect x=\"40\" y=\"42\" width=\"40\" height=\"98\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"60\" y=\"38\" class=\"svgt\" text-anchor=\"middle\">14</text><text x=\"60\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Xe đạp</text><rect x=\"95\" y=\"70\" width=\"40\" height=\"70\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"115\" y=\"66\" class=\"svgt\" text-anchor=\"middle\">10</text><text x=\"115\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Bố mẹ đưa</text><rect x=\"150\" y=\"98\" width=\"40\" height=\"42\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"170\" y=\"94\" class=\"svgt\" text-anchor=\"middle\">6</text><text x=\"170\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Đi bộ</text><rect x=\"205\" y=\"70\" width=\"40\" height=\"70\" fill=\"var(--accent)\" opacity=\".75\"/><text x=\"225\" y=\"66\" class=\"svgt\" text-anchor=\"middle\">10</text><text x=\"225\" y=\"154\" class=\"svgm\" text-anchor=\"middle\">Xe buýt</text>\n<text x=\"140\" y=\"16\" class=\"svgt\" text-anchor=\"middle\">Phương tiện đến trường (số bạn)</text></svg>",
    "hint": "Lấy số bạn đi xe đạp chia cho 40 rồi nhân 100%.",
    "sol": "Đọc biểu đồ: 14 bạn đi xe đạp (kiểm tra tổng: 14 + 10 + 6 + 10 = 40 ✓).<br>Tỉ lệ: 14/40 · 100% = <b>35%</b>.<br>Nếu vẽ biểu đồ quạt tròn, phần này ứng với góc 35% · 360° = 126°.",
    "ans": 35,
    "unit": "%",
    "tol": 0.01
   },
   {
    "lv": 1,
    "d": "Xác suất lí thuyết",
    "t": "Bốc thăm lớp trưởng",
    "q": "Lớp 8C có 40 học sinh, trong đó có 22 bạn nữ. Cô giáo viết tên mỗi bạn vào một lá phiếu rồi bốc ngẫu nhiên một phiếu để chọn người dẫn chương trình. Tính xác suất bạn được chọn là nữ (viết dạng số thập phân).",
    "hint": "Mỗi lá phiếu có cùng khả năng được bốc.",
    "sol": "Có 40 kết quả đồng khả năng, 22 kết quả thuận lợi.<br>P = 22/40 = <b>0,55</b>.",
    "ans": 0.55,
    "unit": "",
    "tol": 0.001
   },
   {
    "lv": 2,
    "d": "Xác suất lí thuyết",
    "t": "Chia hết cho 3 hoặc 5",
    "q": "Một hộp có 30 tấm thẻ đánh số từ 1 đến 30. Rút ngẫu nhiên một thẻ. Tính xác suất số trên thẻ chia hết cho 3 hoặc chia hết cho 5. (Viết dạng số thập phân, làm tròn đến 0,01.)",
    "hint": "Đếm bội của 3, bội của 5, rồi trừ đi những số bị đếm hai lần (bội của 15).",
    "sol": "Bội của 3 từ 1 đến 30: 10 số. Bội của 5: 6 số. Bội của cả 3 và 5 (tức bội của 15): 15, 30, gồm 2 số, bị đếm hai lần.<br>Số kết quả thuận lợi: 10 + 6 − 2 = 14.<br>P = 14/30 = 7/15 ≈ <b>0,47</b>.",
    "ans": 0.4667,
    "unit": "",
    "tol": 0.006
   },
   {
    "lv": 2,
    "d": "Xác suất thực nghiệm",
    "t": "Bóng đèn bị lỗi",
    "q": "Một nhà máy kiểm tra ngẫu nhiên 500 bóng đèn LED thì thấy có 12 bóng bị lỗi.<br>a) Tính xác suất thực nghiệm của biến cố “bóng đèn bị lỗi”.<br>b) Ước lượng số bóng lỗi trong một lô 10 000 bóng.",
    "hint": "Xác suất thực nghiệm = số lần xảy ra / số lần thử. Dùng nó để ước lượng cho lô lớn.",
    "sol": "a) P = 12/500 = 0,024 (tức 2,4%).<br>b) Số bóng lỗi ước lượng: 0,024 · 10 000 = <b>240 bóng</b>.",
    "ans": 240,
    "unit": "bóng",
    "tol": 0.5
   },
   {
    "lv": 2,
    "d": "Biểu đồ, số liệu",
    "t": "Hoá đơn tiền điện mùa hè",
    "q": "Biểu đồ đoạn thẳng cho biết số điện (kWh) nhà Lan dùng trong 6 tháng đầu năm. Từ tháng 3 đến tháng 5, số điện tiêu thụ tăng bao nhiêu phần trăm?<br><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Biểu đồ đoạn thẳng số điện tiêu thụ 6 tháng\">\n<line x1=\"36\" y1=\"150\" x2=\"255\" y2=\"150\" stroke=\"var(--ink)\"/><line x1=\"36\" y1=\"150\" x2=\"36\" y2=\"12\" stroke=\"var(--ink)\"/>\n<g stroke=\"var(--line)\" stroke-dasharray=\"2 3\"><line x1=\"36\" y1=\"110\" x2=\"255\" y2=\"110\"/><line x1=\"36\" y1=\"70\" x2=\"255\" y2=\"70\"/><line x1=\"36\" y1=\"30\" x2=\"255\" y2=\"30\"/></g>\n<g class=\"svgm\" text-anchor=\"end\"><text x=\"32\" y=\"114\">100</text><text x=\"32\" y=\"74\">200</text><text x=\"32\" y=\"34\">300</text></g>\n<polyline points=\"50,78 88,86 126,70 164,46 202,22 240,30\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2\"/>\n<circle cx=\"50\" cy=\"78\" r=\"3\" fill=\"var(--accent)\"/><text x=\"50\" y=\"72\" class=\"svgm\" text-anchor=\"middle\">180</text><text x=\"50\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T1</text><circle cx=\"88\" cy=\"86\" r=\"3\" fill=\"var(--accent)\"/><text x=\"88\" y=\"80\" class=\"svgm\" text-anchor=\"middle\">160</text><text x=\"88\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T2</text><circle cx=\"126\" cy=\"70\" r=\"3\" fill=\"var(--accent)\"/><text x=\"126\" y=\"64\" class=\"svgm\" text-anchor=\"middle\">200</text><text x=\"126\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T3</text><circle cx=\"164\" cy=\"46\" r=\"3\" fill=\"var(--accent)\"/><text x=\"164\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">260</text><text x=\"164\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T4</text><circle cx=\"202\" cy=\"22\" r=\"3\" fill=\"var(--accent)\"/><text x=\"202\" y=\"16\" class=\"svgm\" text-anchor=\"middle\">320</text><text x=\"202\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T5</text><circle cx=\"240\" cy=\"30\" r=\"3\" fill=\"var(--accent)\"/><text x=\"240\" y=\"24\" class=\"svgm\" text-anchor=\"middle\">300</text><text x=\"240\" y=\"164\" class=\"svgm\" text-anchor=\"middle\">T6</text>\n<text x=\"42\" y=\"12\" class=\"svgm\">kWh</text></svg>",
    "hint": "Phần trăm tăng = (giá trị sau − giá trị trước)/giá trị trước · 100%.",
    "sol": "Tháng 3: 200 kWh; tháng 5: 320 kWh.<br>Mức tăng: 320 − 200 = 120 kWh.<br>Phần trăm tăng: 120/200 · 100% = <b>60%</b>.<br>Nguyên nhân thường gặp: mùa hè bật điều hoà, quạt nhiều hơn.",
    "ans": 60,
    "unit": "%",
    "tol": 0.01
   },
   {
    "lv": 2,
    "d": "Xác suất lí thuyết",
    "t": "Túi kẹo trái cây",
    "q": "Một túi kẹo có 4 viên vị cam, 6 viên vị dâu và một số viên vị chanh. Lấy ngẫu nhiên một viên, xác suất lấy được kẹo vị dâu là 0,4. Hỏi túi có bao nhiêu viên vị chanh?",
    "hint": "Gọi số viên vị chanh là x. Tổng số viên là 10 + x.",
    "sol": "Gọi số kẹo chanh là x (viên, x nguyên, x ≥ 0). Tổng: 10 + x viên.<br>6/(10 + x) = 0,4 ⇒ 10 + x = 15 ⇒ <b>x = 5 viên</b>.",
    "ans": 5,
    "unit": "viên",
    "tol": 0.01
   },
   {
    "lv": 3,
    "d": "Xác suất lí thuyết",
    "t": "Hai con xúc xắc",
    "q": "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất để tổng số chấm trên hai mặt là một số nguyên tố. (Viết dạng số thập phân, làm tròn đến 0,01.)",
    "hint": "Có 6 · 6 = 36 kết quả đồng khả năng. Tổng có thể là số nguyên tố: 2, 3, 5, 7, 11. Đếm số cặp cho mỗi tổng.",
    "sol": "Mỗi kết quả là một cặp (a; b), có 36 cặp đồng khả năng.<br>Tổng 2: (1;1), 1 cách. Tổng 3: (1;2), (2;1), 2 cách.<br>Tổng 5: (1;4), (2;3), (3;2), (4;1), 4 cách.<br>Tổng 7: 6 cách. Tổng 11: (5;6), (6;5), 2 cách.<br>Kết quả thuận lợi: 1 + 2 + 4 + 6 + 2 = 15.<br>P = 15/36 = 5/12 ≈ <b>0,42</b>.",
    "ans": 0.4167,
    "unit": "",
    "tol": 0.006
   },
   {
    "lv": 3,
    "d": "Xác suất thực nghiệm",
    "t": "Ước lượng số cá trong hồ",
    "q": "Để ước lượng số cá trong hồ của khu sinh thái, người ta bắt 100 con cá, đánh dấu rồi thả lại xuống hồ. Vài ngày sau, họ bắt ngẫu nhiên 120 con thì thấy có 8 con được đánh dấu. Ước lượng số cá trong hồ.",
    "hint": "Tỉ lệ cá có dấu trong lần bắt thứ hai xấp xỉ tỉ lệ cá có dấu trong cả hồ.",
    "sol": "Gọi số cá trong hồ là N. Tỉ lệ cá có dấu trong hồ: 100/N.<br>Xác suất thực nghiệm bắt được cá có dấu: 8/120 = 1/15.<br>Coi hai tỉ lệ xấp xỉ bằng nhau: 100/N ≈ 1/15 ⇒ N ≈ <b>1 500 con</b>.<br>Phương pháp này gọi là “bắt – thả – bắt lại”, được các nhà sinh học dùng thật để đếm động vật hoang dã.",
    "ans": 1500,
    "unit": "con",
    "tol": 1
   },
   {
    "lv": 2,
    "t": "Đánh dấu, thả, bắt lại (2023 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Một cái hồ có 250 con cá hồi (trout) cùng nhiều loại cá khác. Một nhà sinh vật học bắt rồi thả lại một mẫu 180 con cá, thấy trong đó có 30 con cá hồi. Giả sử tỉ lệ cá hồi trong mẫu bằng tỉ lệ cá hồi trong cả hồ. Hỏi hồ có bao nhiêu con cá?<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2023_AMC_8_Problems/Problem_5\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2023 AMC 8 Problem 5</a> (phỏng dịch)</p>",
    "hint": "Tính tỉ lệ cá hồi trong mẫu (xác suất thực nghiệm để một con cá bắt được là cá hồi), rồi áp dụng cho cả hồ.",
    "sol": "Tỉ lệ cá hồi trong mẫu: 30/180 = 1/6.<br>Trong cả hồ: 250/N = 1/6 ⇒ N = 250 · 6 = 1500.<br>Hồ có khoảng <b>1500 con cá</b>.<br>(Đây là ý tưởng thật mà các nhà sinh học dùng để ước lượng số cá, số chim, số rùa ngoài tự nhiên.)",
    "ans": 1500,
    "unit": "con",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Rút thẻ trong mũ ảo thuật (2016 AMC 8)",
    "d": "Nguồn từ nước ngoài",
    "q": "Một chiếc mũ có 3 thẻ đỏ và 2 thẻ xanh. Rút ngẫu nhiên lần lượt từng thẻ, không hoàn lại, cho đến khi đã rút hết 3 thẻ đỏ hoặc hết 2 thẻ xanh thì dừng. Tính xác suất rút được hết 3 thẻ đỏ (nhập dạng số thập phân).<p class=\"src\">Nguồn: <a href=\"https://artofproblemsolving.com/wiki/index.php/2016_AMC_8_Problems/Problem_21\" target=\"_blank\" rel=\"noopener\">AoPS Wiki, 2016 AMC 8 Problem 21</a> (phỏng dịch)</p>",
    "hint": "Tưởng tượng em cứ rút hết cả 5 thẻ, xếp thành một hàng. Rút hết 3 đỏ trước khi hết 2 xanh nghĩa là thẻ cuối cùng trong hàng có màu gì?",
    "sol": "Xếp cả 5 thẻ theo thứ tự rút. Số cách chọn vị trí cho 2 thẻ xanh trong 5 vị trí: 10 cách, đồng khả năng.<br>Ba thẻ đỏ ra hết trước khi đủ 2 xanh ⇔ thẻ cuối cùng (vị trí 5) là xanh.<br>Số cách có một thẻ xanh ở vị trí 5: thẻ xanh còn lại ở 1 trong 4 vị trí đầu, có 4 cách.<br>Xác suất = 4/10 = <b>2/5 = 0,4</b>.<br>(Cách nhanh: thẻ cuối là xanh với xác suất 2/5.)",
    "ans": 0.4,
    "unit": "",
    "tol": 0.005
   }
  ],
  "published": true,
  "subject": "toan-8"
 }
];
