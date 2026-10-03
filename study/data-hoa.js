/* Dữ liệu mẫu Hoá học 8 (KHTN 8, Kết nối tri thức). Tạo bởi build_hoa.py */
window.DEFAULT_DATA = window.DEFAULT_DATA || {};
window.DEFAULT_DATA['hoa-8'] = [
 {
  "id": "h1",
  "position": 1,
  "title": "Biến đổi chất và phản ứng hoá học",
  "icon": "🔥",
  "lab": "hoa_sort",
  "theory": "<div class=\"sec\"><h3>Biến đổi vật lí và biến đổi hoá học</h3>\n  <p>Mọi thứ quanh em luôn biến đổi. Có hai kiểu biến đổi:</p>\n  <div class=\"tbl\"><table><tr><th></th><th>Biến đổi vật lí</th><th>Biến đổi hoá học</th></tr>\n  <tr><td>Có chất mới?</td><td>Không, chất vẫn giữ nguyên</td><td><b>Có</b> chất mới tạo thành</td></tr>\n  <tr><td>Thay đổi gì?</td><td>Trạng thái, hình dạng, kích thước</td><td>Bản chất của chất</td></tr>\n  <tr><td>Ví dụ</td><td>Nước đá tan, đường hoà tan, xắt nhỏ rau, phơi nước biển lấy muối</td><td>Cơm thiu, sắt gỉ, trứng chín, gas cháy, sữa hoá chua</td></tr></table></div>\n  <p>Câu hỏi then chốt: <span class=\"mark\">sau biến đổi có tạo ra chất mới không?</span> Có thì đó là biến đổi hoá học.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Đun đường: lúc đầu đường chảy lỏng (biến đổi vật lí). Đun tiếp, đường chuyển màu nâu, có mùi thơm khét, đó là caramel, một chất mới (biến đổi hoá học).</div>\n </div>\n <div class=\"sec\"><h3>Phản ứng hoá học</h3>\n  <p><span class=\"mark\">Phản ứng hoá học</span> là quá trình biến đổi chất này thành chất khác. Chất ban đầu gọi là <b>chất phản ứng</b> (chất tham gia), chất mới gọi là <b>sản phẩm</b>.</p>\n  <div class=\"fbox\"><span class=\"f\">Chất phản ứng → Sản phẩm</span></div>\n  <p>Phương trình chữ: <i>Methane + oxygen → carbon dioxide + nước</i> (đọc là: methane tác dụng với oxygen tạo ra carbon dioxide và nước).</p>\n  <p><b>Bản chất:</b> trong phản ứng, <span class=\"mark\">liên kết giữa các nguyên tử thay đổi</span> làm phân tử này biến thành phân tử khác. Các nguyên tử thì giữ nguyên, chỉ \"đổi bạn nắm tay\".</p>\n </div>\n <div class=\"sec\"><h3>Khi nào phản ứng xảy ra? Nhận biết thế nào?</h3>\n  <ul><li><b>Điều kiện:</b> các chất phải tiếp xúc với nhau; nhiều phản ứng cần đun nóng (than phải mồi lửa mới cháy); có phản ứng cần chất xúc tác (men rượu, enzyme).</li>\n  <li><b>Dấu hiệu nhận biết</b> có chất mới: đổi màu, có mùi lạ, sủi bọt khí, xuất hiện chất kết tủa (chất rắn không tan), toả nhiệt hoặc phát sáng.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> không phải cứ sủi bọt là có phản ứng. Nước sôi cũng sủi bọt nhưng đó chỉ là hơi nước (biến đổi vật lí). Phải hỏi: bọt khí đó là chất gì, có phải chất mới không?</div>\n </div>\n <div class=\"sec\"><h3>Năng lượng của phản ứng</h3>\n  <ul><li><span class=\"mark\">Phản ứng toả nhiệt</span>: giải phóng năng lượng ra môi trường. Ví dụ: đốt cháy gas, than, xăng; vôi sống tác dụng với nước (tôi vôi) nóng sôi lên.</li>\n  <li><span class=\"mark\">Phản ứng thu nhiệt</span>: phải lấy năng lượng từ môi trường. Ví dụ: nung đá vôi thành vôi sống, quang hợp (cần ánh sáng Mặt Trời), nướng bánh với bột nở (baking soda bị phân huỷ khi nóng).</li></ul>\n  <div class=\"eg\"><b>Ví dụ.</b> Phản ứng thu nhiệt thường dừng lại khi ta ngừng cung cấp nhiệt: tắt lò thì đá vôi không phân huỷ nữa. Phản ứng toả nhiệt (như đốt than) thì khi đã bắt đầu, nhiệt toả ra tự duy trì phản ứng.</div>\n </div>\n <div class=\"sec\"><h3>Sự đốt cháy nhiên liệu</h3>\n  <p>Nhiên liệu (gas, xăng, than, củi) cháy là phản ứng với oxygen, toả nhiều nhiệt. Muốn có lửa cần đủ ba yếu tố của <b>tam giác cháy</b>:</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Tam giác cháy gồm chất cháy, oxygen và nhiệt độ\">\n   <polygon points=\"140,22 50,140 230,140\" fill=\"var(--hl)\" fill-opacity=\"0.35\" stroke=\"var(--accent)\" stroke-width=\"3\"/>\n   <text x=\"140\" y=\"100\" class=\"svgt\" text-anchor=\"middle\" font-weight=\"700\">CHÁY</text>\n   <text x=\"78\" y=\"78\" class=\"svgt\" text-anchor=\"end\">Oxygen</text>\n   <text x=\"202\" y=\"78\" class=\"svgt\">Nhiệt độ</text>\n   <text x=\"140\" y=\"157\" class=\"svgt\" text-anchor=\"middle\">Chất cháy (nhiên liệu)</text>\n   <text x=\"140\" y=\"14\" class=\"svgm\" text-anchor=\"middle\">Bỏ đi một cạnh thì lửa tắt</text>\n  </svg>\n  <ul><li>Đủ oxygen: nhiên liệu <b>cháy hoàn toàn</b>, tạo carbon dioxide và nước, toả nhiều nhiệt, ngọn lửa xanh.</li>\n  <li>Thiếu oxygen: <b>cháy không hoàn toàn</b>, sinh muội than (khói đen) và khí <span class=\"mark\">carbon monoxide (CO) không màu, không mùi, rất độc</span>.</li>\n  <li>Chữa cháy là phá tam giác cháy: cách li oxygen (trùm chăn ướt, đậy vung), hạ nhiệt độ (phun nước, với đám cháy thông thường), hoặc dời chất cháy đi.</li></ul>\n  <div class=\"note\"><b>An toàn:</b> không đốt than sưởi, không chạy máy phát điện trong phòng đóng kín. Chảo dầu bốc cháy thì tắt bếp, đậy vung lại, tuyệt đối không đổ nước vào.</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🍳</span>Nấu ăn là làm hoá học</b>Trứng chín, thịt nướng vàng thơm, đường thành caramel đều là biến đổi hoá học. Còn đá tan trong cốc nước chanh hay muối tan trong canh chỉ là biến đổi vật lí.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥫</span>Bảo quản thực phẩm</b>Thức ăn ôi thiu là do phản ứng hoá học (vi khuẩn phân huỷ, chất béo bị oxygen làm hỏng). Tủ lạnh, hút chân không, đóng hộp giúp làm chậm các phản ứng này.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔩</span>Chống gỉ sắt</b>Sắt gỉ khi gặp cả oxygen và hơi nước. Sơn cổng sắt, bôi dầu mỡ lên xích xe đạp là để ngăn sắt tiếp xúc với không khí ẩm.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔥</span>Túi sưởi tay tức thì</b>Bên trong có bột sắt, muối, than hoạt tính. Bóc túi, oxygen lọt vào, bột sắt bị oxi hoá (gỉ cực nhanh) và toả nhiệt làm ấm tay hàng giờ.</div>\n   <div class=\"app\"><b><span class=\"ico\">⚠️</span>Bếp than tổ ong</b>Than cháy trong phòng kín thiếu oxygen sinh ra khí CO. Đã có nhiều vụ ngộ độc vì sưởi than đóng kín cửa vào mùa đông miền Bắc. Luôn để phòng thông thoáng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍞</span>Bánh mì nở xốp</b>Men (nấm men) phân giải đường trong bột tạo khí carbon dioxide. Bọt khí bị giữ lại trong bột, nướng lên thành ruột bánh xốp.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Táo, chuối cắt ra để lâu bị thâm. Đó là biến đổi gì? Làm sao chậm lại?</summary>Đó là biến đổi hoá học: chất trong quả phản ứng với oxygen trong không khí (nhờ enzyme của quả) tạo chất màu nâu. Vắt vài giọt chanh lên mặt cắt hoặc ngâm nhanh vào nước muối loãng sẽ làm chậm phản ứng, quả giữ màu lâu hơn.</details>\n  <details class=\"wq\"><summary>Chai cồn để mở nắp vơi dần. Cồn bị \"cháy\" mất à?</summary>Không. Cồn chỉ bay hơi, chuyển từ lỏng sang hơi, vẫn là cồn. Đây là biến đổi vật lí. Còn khi châm lửa đốt cồn, cồn tác dụng với oxygen tạo ra carbon dioxide và nước, đó mới là biến đổi hoá học.</details>\n  <details class=\"wq\"><summary>Vì sao người bị ngộ độc khí CO thường không biết để chạy ra ngoài?</summary>Khí CO không màu, không mùi nên không nhận ra. CO gắn vào hồng cầu chặt hơn oxygen nhiều lần, làm máu không chở được oxygen. Nạn nhân buồn ngủ, chóng mặt rồi mất ý thức. Vì thế phải phòng ngừa: phòng có bếp than, máy phát điện luôn phải thông thoáng.</details>\n  <details class=\"wq\"><summary>Thử ở nhà: \"núi lửa\" baking soda</summary>Đặt cốc nhỏ trên khay, cho 1 thìa baking soda, rót từ từ vài thìa giấm ăn. Hỗn hợp sủi bọt mạnh: đó là khí carbon dioxide mới tạo thành, dấu hiệu của phản ứng hoá học. Thêm vài giọt nước rửa bát để bọt dâng như núi lửa. Không nếm hỗn hợp, làm xong đổ đi và rửa tay.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chơi trò phân loại các hiện tượng đời thường: biến đổi vật lí hay biến đổi hoá học?</p>",
  "formulas": [
   [
    "Biến đổi vật lí",
    "Chất giữ nguyên, chỉ đổi trạng thái, hình dạng"
   ],
   [
    "Biến đổi hoá học",
    "Có chất mới tạo thành"
   ],
   [
    "Phản ứng hoá học",
    "Chất phản ứng → Sản phẩm"
   ],
   [
    "Bản chất",
    "Liên kết đổi, nguyên tử giữ nguyên"
   ],
   [
    "Dấu hiệu",
    "Đổi màu, mùi, sủi khí, kết tủa, toả nhiệt hoặc phát sáng"
   ],
   [
    "Toả nhiệt / thu nhiệt",
    "Toả: đốt cháy, tôi vôi. Thu: nung đá vôi, quang hợp"
   ],
   [
    "Tam giác cháy",
    "Chất cháy + oxygen + nhiệt độ đủ cao"
   ],
   [
    "Cháy thiếu oxygen",
    "Sinh khí CO rất độc, không màu, không mùi"
   ]
  ],
  "quiz": [
   {
    "q": "Hiện tượng nào là biến đổi hoá học?",
    "o": [
     "Cơm để lâu bị thiu",
     "Nước đá tan thành nước",
     "Hoà tan đường vào nước",
     "Cồn để mở nắp bị bay hơi"
    ],
    "why": "Cơm thiu có chất mới (mùi chua, nhớt) tạo thành. Ba hiện tượng còn lại chất vẫn giữ nguyên."
   },
   {
    "q": "Hiện tượng nào là biến đổi vật lí?",
    "o": [
     "Phơi nước biển lấy muối",
     "Đinh sắt bị gỉ",
     "Gas cháy trong bếp",
     "Sữa để lâu bị chua"
    ],
    "why": "Nước bay hơi, muối có sẵn trong nước biển kết tinh lại. Không có chất mới tạo thành."
   },
   {
    "q": "Trong một phản ứng hoá học, điều gì thay đổi?",
    "o": [
     "Liên kết giữa các nguyên tử, làm phân tử này biến thành phân tử khác",
     "Số nguyên tử của mỗi nguyên tố",
     "Nguyên tử nguyên tố này biến thành nguyên tử nguyên tố khác",
     "Tổng khối lượng các chất"
    ],
    "why": "Nguyên tử được giữ nguyên (cả số lượng lẫn loại), chỉ cách chúng liên kết với nhau thay đổi."
   },
   {
    "q": "Hiện tượng sủi bọt nào <b>không</b> phải do phản ứng hoá học?",
    "o": [
     "Nước sôi sủi bọt khi đun",
     "Viên sủi vitamin C thả vào nước",
     "Nhỏ giấm lên vỏ trứng",
     "Trộn baking soda với nước cốt chanh"
    ],
    "why": "Bọt khi nước sôi là hơi nước, vẫn là nước. Ba trường hợp kia đều tạo khí carbon dioxide mới."
   },
   {
    "q": "Quá trình nào là phản ứng toả nhiệt?",
    "o": [
     "Đốt cháy khí gas để nấu ăn",
     "Nung đá vôi thành vôi sống",
     "Quang hợp ở lá cây",
     "Baking soda phân huỷ khi nướng bánh"
    ],
    "why": "Đốt cháy nhiên liệu luôn toả nhiệt. Ba quá trình kia phải nhận nhiệt hoặc ánh sáng mới xảy ra."
   },
   {
    "q": "Cho cục vôi sống vào nước, nước nóng lên và sôi sùng sục. Đây là:",
    "o": [
     "Phản ứng hoá học toả nhiệt",
     "Phản ứng hoá học thu nhiệt",
     "Biến đổi vật lí toả nhiệt",
     "Sự hoà tan thông thường của vôi"
    ],
    "why": "Vôi sống (calcium oxide) tác dụng với nước tạo vôi tôi (calcium hydroxide), có chất mới và toả rất nhiều nhiệt."
   },
   {
    "q": "Đốt than sưởi trong phòng đóng kín cửa nguy hiểm chủ yếu vì:",
    "o": [
     "Thiếu oxygen, than cháy không hoàn toàn sinh ra khí CO rất độc",
     "Khí carbon dioxide làm nổ phòng",
     "Than toả ra oxygen gây ngộ độc",
     "Khói chỉ làm cay mắt, không nguy hiểm"
    ],
    "why": "Khí CO không màu, không mùi, ngăn máu vận chuyển oxygen, có thể gây tử vong khi đang ngủ."
   },
   {
    "q": "Chảo dầu trên bếp bất ngờ bốc cháy. Cách xử lí đúng là:",
    "o": [
     "Tắt bếp, đậy kín vung (hoặc trùm khăn ướt vắt kiệt) để cách li oxygen",
     "Đổ ngay một cốc nước vào chảo",
     "Thổi thật mạnh cho tắt",
     "Bê chảo đang cháy chạy ra ngoài"
    ],
    "why": "Nước gặp dầu nóng hoá hơi đột ngột, làm dầu cháy bắn tung toé. Đậy vung là bỏ cạnh oxygen của tam giác cháy."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Phân loại hiện tượng",
    "d": "Phân loại biến đổi",
    "q": "Cho các hiện tượng: (a) nến nóng chảy; (b) bấc nến cháy; (c) xắt nhỏ rau; (d) muối dưa cải bị chua; (e) phơi nước biển lấy muối; (f) tôi vôi sống với nước; (g) gương nhà tắm bị mờ hơi nước; (h) đinh sắt bị gỉ. Có bao nhiêu hiện tượng là biến đổi hoá học?",
    "hint": "Với từng hiện tượng, hỏi: có chất mới tạo thành không?",
    "sol": "Biến đổi hoá học: (b) nến cháy tạo carbon dioxide và nước; (d) đường trong rau thành acid lactic làm chua; (f) tạo vôi tôi; (h) tạo gỉ sắt.<br>Biến đổi vật lí: (a), (c), (e), (g) chỉ đổi trạng thái hoặc hình dạng.<br>Có <b>4</b> biến đổi hoá học.",
    "ans": 4,
    "unit": "hiện tượng",
    "tol": 0
   },
   {
    "lv": 1,
    "t": "Phương trình chữ khi đốt nến",
    "d": "Phương trình chữ",
    "q": "Nến làm bằng paraffin. Khi đốt, paraffin tác dụng với oxygen trong không khí tạo ra khí carbon dioxide và hơi nước. Viết phương trình chữ, chỉ rõ chất phản ứng và sản phẩm. Úp một cốc thuỷ tinh khô lên ngọn nến, em sẽ thấy gì trên thành cốc?",
    "hint": "Chất phản ứng đứng bên trái mũi tên, sản phẩm bên phải.",
    "sol": "Paraffin + oxygen → carbon dioxide + nước.<br>Chất phản ứng: paraffin, oxygen. Sản phẩm: carbon dioxide, nước.<br>Thành cốc bị mờ do hơi nước ngưng tụ (dấu hiệu có nước tạo thành). Một lúc sau nến tắt vì oxygen trong cốc đã hết: thiếu một cạnh của tam giác cháy.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Thổi vào nước vôi trong",
    "d": "Phương trình chữ",
    "q": "Dùng ống hút thổi nhẹ hơi thở vào cốc nước vôi trong (dung dịch calcium hydroxide). Một lúc sau nước vôi bị vẩn đục trắng. Hãy giải thích hiện tượng và viết phương trình chữ. Hiện tượng này là biến đổi gì?",
    "hint": "Hơi thở có chứa khí gì nhiều hơn không khí hít vào? Chất rắn trắng không tan là chất mới.",
    "sol": "Hơi thở chứa nhiều khí carbon dioxide. Carbon dioxide tác dụng với calcium hydroxide tạo ra calcium carbonate (chất rắn trắng không tan, tức là kết tủa) và nước:<br>Carbon dioxide + calcium hydroxide → calcium carbonate + nước.<br>Có chất mới (kết tủa trắng) nên đây là <b>biến đổi hoá học</b>. Đây cũng là cách nhận biết khí carbon dioxide trong phòng thí nghiệm.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Làm caramel cho bánh flan",
    "d": "Phân loại biến đổi",
    "q": "Khi làm bánh flan, mẹ cho đường vào nồi đun nhỏ lửa. Đường chảy thành chất lỏng trong suốt, sau đó chuyển dần sang màu vàng nâu, có mùi thơm. Nếu đun quá lâu, đường thành màu đen và có vị đắng. Hãy chỉ ra giai đoạn nào là biến đổi vật lí, giai đoạn nào là biến đổi hoá học và giải thích.",
    "hint": "Đường nóng chảy rồi để nguội có thành đường lại không? Màu, mùi, vị mới cho em biết điều gì?",
    "sol": "Giai đoạn 1: đường rắn chảy thành lỏng trong suốt là <b>biến đổi vật lí</b> (để nguội lại vẫn là đường).<br>Giai đoạn 2: chuyển vàng nâu, có mùi thơm là <b>biến đổi hoá học</b>, đường bị phân huỷ tạo ra caramel (chất mới có màu, mùi khác).<br>Giai đoạn 3: hoá đen, đắng là biến đổi hoá học tiếp tục, đường bị phân huỷ sâu hơn thành than (carbon). Vì vậy phải canh lửa nhỏ và nhấc nồi đúng lúc.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Đun nồi canh bằng bếp gas",
    "d": "Năng lượng và đốt cháy",
    "q": "Đốt cháy hoàn toàn 1 g khí gas (butane) toả ra khoảng 50 kJ. Để đun sôi một nồi canh cần cung cấp cho nồi 840 kJ. Bếp gas có hiệu suất 60% (chỉ 60% nhiệt toả ra truyền vào nồi). Cần đốt bao nhiêu gam gas?",
    "hint": "Tính nhiệt lượng gas phải toả ra trước: Q<sub>toả</sub> = Q<sub>cần</sub> / H.",
    "sol": "Nhiệt lượng gas phải toả ra: 840 / 0,6 = 1 400 kJ.<br>Khối lượng gas: 1 400 / 50 = <b>28 g</b>.<br>Phần nhiệt còn lại làm nóng không khí xung quanh. Dùng nồi có đáy vừa với ngọn lửa và đậy vung khi nấu giúp tiết kiệm gas.",
    "ans": 28,
    "unit": "g",
    "tol": 0.5
   },
   {
    "lv": 2,
    "t": "Cháy hoàn toàn và không hoàn toàn",
    "d": "Năng lượng và đốt cháy",
    "q": "Mỗi gam carbon cháy hoàn toàn thành carbon dioxide toả ra 32,8 kJ, nhưng nếu chỉ cháy thành carbon monoxide (CO) thì chỉ toả 9,2 kJ. Một bếp than đốt 1 kg than (coi là carbon), trong đó do thiếu không khí có 30% lượng than cháy thành CO. So với khi cháy hoàn toàn, nhiệt lượng toả ra bị hụt mất bao nhiêu kJ?",
    "hint": "Tính nhiệt khi cháy hoàn toàn cả 1 000 g, rồi tính nhiệt thực tế: 700 g cháy hoàn toàn, 300 g cháy thành CO.",
    "sol": "Cháy hoàn toàn: 1 000 × 32,8 = 32 800 kJ.<br>Thực tế: 700 × 32,8 + 300 × 9,2 = 22 960 + 2 760 = 25 720 kJ.<br>Hụt mất: 32 800 − 25 720 = <b>7 080 kJ</b>.<br>Thiếu không khí vừa phí nhiên liệu, vừa sinh khí CO độc. Vì vậy bếp phải thông thoáng.",
    "ans": 7080,
    "unit": "kJ",
    "tol": 1
   },
   {
    "lv": 3,
    "t": "Đếm phân tử theo mô hình",
    "d": "Bản chất phản ứng",
    "q": "Hydrogen cháy trong oxygen theo mô hình: cứ 2 phân tử hydrogen (H<sub>2</sub>) kết hợp với 1 phân tử oxygen (O<sub>2</sub>) tạo ra 2 phân tử nước (H<sub>2</sub>O). Trong bình có 6 phân tử H<sub>2</sub> và 4 phân tử O<sub>2</sub>. Sau phản ứng có tối đa bao nhiêu phân tử nước? Chất nào còn dư, dư mấy phân tử? Kiểm tra số nguyên tử mỗi loại trước và sau.",
    "hint": "6 phân tử H<sub>2</sub> cần bao nhiêu phân tử O<sub>2</sub>? So với 4 phân tử có sẵn.",
    "sol": "6 phân tử H<sub>2</sub> cần 6/2 = 3 phân tử O<sub>2</sub>, mà có 4 phân tử nên O<sub>2</sub> dư 1 phân tử, H<sub>2</sub> hết.<br>Số phân tử nước tạo ra: <b>6</b>.<br>Kiểm tra: trước có 12 nguyên tử H và 8 nguyên tử O. Sau: 6 H<sub>2</sub>O có 12 H, 6 O; cộng 1 O<sub>2</sub> dư có 2 O, tổng 8 O. Nguyên tử được bảo toàn ✓.",
    "ans": 6,
    "unit": "phân tử",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Phân tích chiếc bánh bông lan",
    "d": "Phân loại biến đổi",
    "q": "Quy trình làm bánh bông lan: (1) cân bột mì, đường; (2) đánh trứng với đường cho bông lên; (3) trộn bột nở (baking soda) vào bột; (4) cho vào lò nướng: bánh phồng lên, vỏ vàng nâu thơm, nước trong bột bay hơi; (5) để nguội, cắt miếng. Chỉ ra các biến đổi hoá học trong quy trình, giải thích vì sao bánh nở và vì sao phải nướng mới nở (gợi ý: phản ứng toả hay thu nhiệt?).",
    "hint": "Tìm những bước tạo ra chất mới: khí, màu, mùi mới, protein trứng đông lại không trở về như cũ.",
    "sol": "Biến đổi vật lí: cân, trộn, đánh trứng (chỉ cuốn không khí vào), nước bay hơi, cắt bánh.<br>Biến đổi hoá học (ở bước 4): baking soda bị phân huỷ khi nóng tạo khí carbon dioxide; protein trứng bị biến tính, đông cứng lại giữ khung bánh; đường và protein ở vỏ bánh phản ứng tạo màu vàng nâu, mùi thơm.<br>Bánh nở vì khí carbon dioxide (cùng không khí, hơi nước) giãn nở trong bột, bị khung trứng đông giữ lại tạo lỗ xốp.<br>Phân huỷ baking soda là phản ứng <b>thu nhiệt</b>, phải được cung cấp nhiệt liên tục nên cần lò nướng; tắt lò sớm thì bánh xẹp, ruột ướt.",
    "ans": null,
    "unit": "",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h2",
  "position": 2,
  "title": "Định luật bảo toàn khối lượng và phương trình hoá học",
  "icon": "⚖️",
  "lab": "hoa_balance",
  "theory": "<div class=\"sec\"><h3>Định luật bảo toàn khối lượng</h3>\n  <p>Năm 1756, Lomonosov (Nga) và năm 1774, Lavoisier (Pháp) cân rất cẩn thận các chất trước và sau phản ứng trong bình kín, và cùng đi đến một kết luận:</p>\n  <p><span class=\"mark\">Trong một phản ứng hoá học, tổng khối lượng của các sản phẩm bằng tổng khối lượng của các chất phản ứng.</span></p>\n  <div class=\"fbox\"><span class=\"f\">A + B → C + D</span><span class=\"f\">m<sub>A</sub> + m<sub>B</sub> = m<sub>C</sub> + m<sub>D</sub></span></div>\n  <p><b>Vì sao?</b> Trong phản ứng chỉ có liên kết giữa các nguyên tử thay đổi. Số nguyên tử của mỗi nguyên tố giữ nguyên, khối lượng mỗi nguyên tử cũng không đổi, nên tổng khối lượng được bảo toàn.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Nung 10 g calcium carbonate thu được 5,6 g calcium oxide và khí carbon dioxide. Theo định luật: m<sub>CO<sub>2</sub></sub> = 10 − 5,6 = 4,4 g.</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> đốt tờ giấy trên cân hở, tro nhẹ hơn giấy; để đinh sắt gỉ, đinh lại nặng hơn. Định luật không sai! Khi đốt giấy, khí carbon dioxide và hơi nước bay đi. Khi sắt gỉ, sắt đã lấy thêm oxygen và hơi nước từ không khí. Phải tính đủ <b>mọi chất</b>, kể cả chất khí.</div>\n </div>\n <div class=\"sec\"><h3>Phương trình hoá học</h3>\n  <p><span class=\"mark\">Phương trình hoá học (PTHH)</span> biểu diễn phản ứng bằng công thức hoá học, có hệ số đứng trước để số nguyên tử mỗi nguyên tố ở hai vế bằng nhau.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Mô hình 2 phân tử hydrogen và 1 phân tử oxygen tạo 2 phân tử nước\">\n   <circle cx=\"24\" cy=\"58\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><circle cx=\"40\" cy=\"58\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/>\n   <circle cx=\"24\" cy=\"100\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><circle cx=\"40\" cy=\"100\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/>\n   <text x=\"66\" y=\"84\" class=\"svgt\" text-anchor=\"middle\">+</text>\n   <circle cx=\"92\" cy=\"79\" r=\"11\" fill=\"var(--accent)\" stroke=\"var(--ink)\"/><circle cx=\"114\" cy=\"79\" r=\"11\" fill=\"var(--accent)\" stroke=\"var(--ink)\"/>\n   <line x1=\"138\" y1=\"79\" x2=\"168\" y2=\"79\" stroke=\"var(--ink)\" stroke-width=\"2\"/><polygon points=\"168,74 176,79 168,84\" fill=\"var(--ink)\"/>\n   <circle cx=\"222\" cy=\"52\" r=\"11\" fill=\"var(--accent)\" stroke=\"var(--ink)\"/><circle cx=\"208\" cy=\"65\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><circle cx=\"236\" cy=\"65\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/>\n   <circle cx=\"222\" cy=\"98\" r=\"11\" fill=\"var(--accent)\" stroke=\"var(--ink)\"/><circle cx=\"208\" cy=\"111\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/><circle cx=\"236\" cy=\"111\" r=\"8\" fill=\"var(--paper)\" stroke=\"var(--ink)\"/>\n   <text x=\"32\" y=\"134\" class=\"svgt\" text-anchor=\"middle\">2H₂</text><text x=\"103\" y=\"134\" class=\"svgt\" text-anchor=\"middle\">O₂</text><text x=\"222\" y=\"138\" class=\"svgt\" text-anchor=\"middle\">2H₂O</text>\n   <text x=\"140\" y=\"160\" class=\"svgm\" text-anchor=\"middle\">Trước: 4 nguyên tử H, 2 nguyên tử O. Sau: 4 H, 2 O</text>\n   <text x=\"160\" y=\"22\" class=\"svgm\" text-anchor=\"middle\">tròn trắng: H, tròn màu: O</text>\n  </svg>\n </div>\n <div class=\"sec\"><h3>Lập phương trình hoá học qua 3 bước</h3>\n  <ul><li><b>Bước 1.</b> Viết sơ đồ phản ứng bằng công thức hoá học: Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub></li>\n  <li><b>Bước 2.</b> Cân bằng số nguyên tử mỗi nguyên tố bằng cách <span class=\"mark\">thêm hệ số</span> trước công thức. Vế phải có 3 O (lẻ), vế trái có 2 O: đặt 2 trước Al<sub>2</sub>O<sub>3</sub> (6 O), đặt 3 trước O<sub>2</sub> (6 O). Khi đó vế phải có 4 Al, đặt 4 trước Al.</li>\n  <li><b>Bước 3.</b> Viết PTHH: <b>4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub></b></li></ul>\n  <p><b>Mẹo cân bằng:</b></p>\n  <ul><li>Bắt đầu từ nguyên tố xuất hiện ít lần nhất hoặc có chỉ số lớn, lẻ. Gặp số lẻ ở một vế thì nhân 2 cho chẵn.</li>\n  <li>Nhóm nguyên tử giữ nguyên khi phản ứng (SO<sub>4</sub>, NO<sub>3</sub>, OH, CO<sub>3</sub>…) thì cân bằng cả cụm như một khối.</li>\n  <li>Cân bằng H và O sau cùng.</li></ul>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> <u>không được sửa chỉ số</u> trong công thức. Sửa H<sub>2</sub>O thành H<sub>2</sub>O<sub>2</sub> là biến nước thành chất khác (hydrogen peroxide, nước oxy già)! Hệ số 1 thì không viết. Các đơn chất khí H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, Cl<sub>2</sub> có 2 nguyên tử trong phân tử.</div>\n  <p>Điều kiện phản ứng ghi cạnh mũi tên, ví dụ: CaCO<sub>3</sub> →<sup>t°</sup> CaO + CO<sub>2</sub> (t° là đun nóng).</p>\n </div>\n <div class=\"sec\"><h3>Ý nghĩa của phương trình hoá học</h3>\n  <p>PTHH cho biết <span class=\"mark\">tỉ lệ số nguyên tử, số phân tử</span> giữa các chất, bằng tỉ lệ các hệ số.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O: cứ 2 phân tử hydrogen phản ứng với 1 phân tử oxygen tạo ra 2 phân tử nước. Tỉ lệ 2 : 1 : 2. Có 100 phân tử H<sub>2</sub> thì cần 50 phân tử O<sub>2</sub> và tạo ra 100 phân tử nước.</div>\n  <p class=\"muted\">Ở chương sau, em sẽ dùng tỉ lệ này với đơn vị mol để tính khối lượng, thể tích các chất.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🕯️</span>Nến cháy có \"biến mất\"?</b>Nến ngắn dần nhưng khối lượng không mất đi: paraffin cùng oxygen đã thành carbon dioxide và hơi nước bay vào không khí. Tổng khối lượng sản phẩm còn lớn hơn khối lượng nến đã cháy, vì có thêm oxygen.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌳</span>Cây lấy khối lượng từ đâu?</b>Một cây to nặng hàng tấn, nhưng đất trong chậu hầu như không vơi đi. Phần lớn khối lượng cây đến từ carbon dioxide trong không khí và nước, nhờ quang hợp.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍰</span>Công thức làm bánh</b>Công thức nấu ăn giống một PTHH: \"2 trứng + 1 cốc bột → 1 chiếc bánh\". Muốn làm 3 chiếc thì nhân tất cả lên 3. Nhà máy hoá chất cũng tính nguyên liệu theo tỉ lệ trong PTHH như vậy.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚗</span>Túi khí ô tô</b>Khi va chạm, chất sodium azide phân huỷ cực nhanh: 2NaN<sub>3</sub> → 2Na + 3N<sub>2</sub>. Kĩ sư tính theo PTHH để lượng khí nitrogen sinh ra vừa đủ làm phồng túi trong khoảng 0,03 giây.</div>\n   <div class=\"app\"><b><span class=\"ico\">🗑️</span>Đốt rác không làm rác biến mất</b>Rác bị đốt chỉ biến thành tro, khói và khí. Khối lượng vẫn còn đó, đi vào không khí gây ô nhiễm. Vì vậy phân loại, tái chế và giảm rác tốt hơn là đốt bừa bãi.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao đinh sắt để ngoài mưa nắng một thời gian lại nặng hơn lúc mới?</summary>Sắt đã kết hợp với oxygen và hơi nước trong không khí tạo thành gỉ sắt. Khối lượng gỉ = khối lượng sắt đã phản ứng + khối lượng oxygen và nước đã kết hợp vào, nên nặng hơn. Định luật vẫn đúng.</details>\n  <details class=\"wq\"><summary>Viên sủi vitamin C thả vào cốc nước, cân cả cốc thấy nhẹ dần. Vì sao?</summary>Phản ứng trong viên sủi tạo khí carbon dioxide thoát ra khỏi cốc. Cân chỉ cân cốc nước, không cân được khí đã bay đi. Nếu làm trong bình kín, số chỉ của cân sẽ gần như không đổi.</details>\n  <details class=\"wq\"><summary>Cân bằng H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O, sao không viết luôn H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O<sub>2</sub> cho nhanh?</summary>Vì H<sub>2</sub>O<sub>2</sub> là hydrogen peroxide (nước oxy già), không phải nước! Chỉ số cho biết thành phần của chất, đổi chỉ số là đổi chất. Ta chỉ được thêm hệ số: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O.</details>\n  <details class=\"wq\"><summary>Thử ở nhà: cân phản ứng trong chai kín</summary>Cho 3 thìa giấm vào chai nhựa nhỏ. Cho 1 thìa baking soda vào quả bóng bay, lồng miệng bóng vào cổ chai (chưa dốc baking soda xuống). Đặt cả chai lên cân nhà bếp, ghi số. Dốc bóng cho baking soda rơi vào giấm: bọt sủi, bóng phồng. Số chỉ của cân gần như không đổi (giảm rất ít vì quả bóng phồng to bị không khí đẩy lên). Tháo bóng ra cho khí thoát, cân lại sẽ thấy nhẹ đi.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để luyện cân bằng phương trình: tăng giảm hệ số và đếm nguyên tử hai vế.</p>",
  "formulas": [
   [
    "Định luật bảo toàn khối lượng",
    "Tổng m chất phản ứng = tổng m sản phẩm"
   ],
   [
    "Phản ứng A + B → C + D",
    "mA + mB = mC + mD"
   ],
   [
    "Lập PTHH",
    "Sơ đồ → cân bằng hệ số → viết PTHH"
   ],
   [
    "Quy tắc cân bằng",
    "Chỉ thêm hệ số, không sửa chỉ số"
   ],
   [
    "Ý nghĩa PTHH",
    "Tỉ lệ số phân tử = tỉ lệ hệ số"
   ],
   [
    "Ví dụ",
    "2H₂ + O₂ → 2H₂O (tỉ lệ 2 : 1 : 2)"
   ],
   [
    "Nung đá vôi",
    "CaCO₃ →t° CaO + CO₂"
   ]
  ],
  "quiz": [
   {
    "q": "Nung 10 g calcium carbonate thu được 5,6 g calcium oxide và khí carbon dioxide. Khối lượng carbon dioxide là:",
    "o": [
     "4,4 g",
     "15,6 g",
     "5,6 g",
     "10 g"
    ],
    "why": "Theo ĐLBTKL: m<sub>CO<sub>2</sub></sub> = 10 − 5,6 = 4,4 g."
   },
   {
    "q": "Đốt tờ giấy trên đĩa cân hở, tro còn lại nhẹ hơn tờ giấy. Lí do là:",
    "o": [
     "Khí carbon dioxide và hơi nước sinh ra đã bay vào không khí",
     "Khối lượng bị mất đi trong phản ứng",
     "Một phần nguyên tử bị lửa phá huỷ",
     "Định luật bảo toàn khối lượng không đúng với sự cháy"
    ],
    "why": "Các sản phẩm khí thoát ra ngoài nên cân không ghi nhận. Tính cả khí thì khối lượng vẫn bảo toàn."
   },
   {
    "q": "PTHH nào viết đúng?",
    "o": [
     "4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>",
     "2Al + 3O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub>",
     "Al + O<sub>2</sub> → AlO<sub>2</sub>",
     "2Al + O<sub>3</sub> → Al<sub>2</sub>O<sub>3</sub>"
    ],
    "why": "Hai vế đều có 4 Al và 6 O. Phương án có O<sub>3</sub>, AlO<sub>2</sub> là sửa chỉ số (sai công thức)."
   },
   {
    "q": "Cân bằng PTHH: Fe<sub>2</sub>O<sub>3</sub> + H<sub>2</sub> → Fe + H<sub>2</sub>O. Tổng các hệ số (tối giản) là:",
    "o": [
     "9",
     "8",
     "7",
     "6"
    ],
    "why": "Fe<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub> → 2Fe + 3H<sub>2</sub>O. Tổng 1 + 3 + 2 + 3 = 9 (nhớ tính cả hệ số 1)."
   },
   {
    "q": "Trong PTHH 2KClO<sub>3</sub> →<sup>t°</sup> 2KCl + 3O<sub>2</sub>, tỉ lệ số phân tử KClO<sub>3</sub> : O<sub>2</sub> là:",
    "o": [
     "2 : 3",
     "1 : 3",
     "3 : 2",
     "1 : 1"
    ],
    "why": "Tỉ lệ số phân tử bằng tỉ lệ hệ số: 2 : 3."
   },
   {
    "q": "Khi cân bằng PTHH, em <b>không</b> được làm điều nào?",
    "o": [
     "Thay đổi chỉ số trong công thức hoá học",
     "Thêm hệ số trước công thức",
     "Coi nhóm SO<sub>4</sub> như một khối khi cân bằng",
     "Nhân đôi để làm chẵn số nguyên tử lẻ"
    ],
    "why": "Sửa chỉ số là biến chất này thành chất khác."
   },
   {
    "q": "Đinh sắt để lâu ngoài không khí ẩm bị gỉ và nặng hơn ban đầu vì:",
    "o": [
     "Sắt đã kết hợp thêm oxygen và hơi nước từ không khí",
     "Gỉ sắt hút nước mưa nên nặng",
     "ĐLBTKL không đúng với kim loại",
     "Sắt nở ra khi bị gỉ"
    ],
    "why": "Khối lượng gỉ = khối lượng sắt + khối lượng oxygen, nước đã phản ứng."
   },
   {
    "q": "Cho 2,4 g magnesium tác dụng vừa đủ với 7,3 g hydrochloric acid tạo magnesium chloride và 0,2 g khí hydrogen. Khối lượng magnesium chloride là:",
    "o": [
     "9,5 g",
     "9,9 g",
     "9,7 g",
     "4,7 g"
    ],
    "why": "m = 2,4 + 7,3 − 0,2 = 9,5 g."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Đốt dây magnesium",
    "d": "Áp dụng ĐLBTKL",
    "q": "Đốt cháy hoàn toàn 3 g magnesium trong không khí thu được 5 g magnesium oxide. Tính khối lượng oxygen đã tham gia phản ứng.",
    "hint": "Magnesium + oxygen → magnesium oxide. Áp dụng ĐLBTKL.",
    "sol": "m<sub>Mg</sub> + m<sub>O<sub>2</sub></sub> = m<sub>MgO</sub> ⇒ m<sub>O<sub>2</sub></sub> = 5 − 3 = <b>2 g</b>.<br>Lưu ý: chất rắn nặng hơn kim loại ban đầu vì đã nhận thêm oxygen.",
    "ans": 2,
    "unit": "g",
    "tol": 0.01
   },
   {
    "lv": 1,
    "t": "Lập bốn PTHH cơ bản",
    "d": "Lập PTHH",
    "q": "Lập PTHH cho các sơ đồ sau:<br>a) P + O<sub>2</sub> → P<sub>2</sub>O<sub>5</sub><br>b) Na + H<sub>2</sub>O → NaOH + H<sub>2</sub><br>c) Fe + Cl<sub>2</sub> → FeCl<sub>3</sub><br>d) CH<sub>4</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O (đốt khí methane trong biogas)",
    "hint": "a) Làm chẵn số O bên phải trước. c) Cl: 2 và 3, bội chung nhỏ nhất là 6. d) Cân bằng C, rồi H, cuối cùng O.",
    "sol": "a) <b>4P + 5O<sub>2</sub> → 2P<sub>2</sub>O<sub>5</sub></b><br>b) <b>2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub></b><br>c) <b>2Fe + 3Cl<sub>2</sub> → 2FeCl<sub>3</sub></b><br>d) <b>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</b><br>Kiểm tra lại bằng cách đếm từng nguyên tố ở hai vế.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Lò nung vôi",
    "d": "Áp dụng ĐLBTKL",
    "q": "Nung 500 kg đá vôi (calcium carbonate có lẫn tạp chất không bị phân huỷ). Sau khi phản ứng xảy ra hoàn toàn, còn lại 302 kg chất rắn gồm vôi sống và tạp chất. Tính khối lượng khí carbon dioxide đã thoát ra.",
    "hint": "Tạp chất có mặt cả trước và sau, khối lượng chất rắn giảm đúng bằng khối lượng khí bay đi.",
    "sol": "CaCO<sub>3</sub> →<sup>t°</sup> CaO + CO<sub>2</sub>. Tạp chất không đổi, nên:<br>m<sub>CO<sub>2</sub></sub> = 500 − 302 = <b>198 kg</b>.<br>Ở chương 3, từ 198 kg CO<sub>2</sub> em sẽ tính được đá vôi này chứa 450 kg CaCO<sub>3</sub>, tức 90%.",
    "ans": 198,
    "unit": "kg",
    "tol": 0.5
   },
   {
    "lv": 2,
    "t": "Bóng bay trên bàn cân",
    "d": "Áp dụng ĐLBTKL",
    "q": "Một chai chứa giấm, miệng chai lồng quả bóng có sẵn baking soda. Cả hệ đặt trên cân. Dốc baking soda xuống giấm, phản ứng tạo khí carbon dioxide làm bóng phồng. Sau đó tháo bóng cho khí thoát ra hết rồi cân lại chai và quả bóng xẹp thì thấy nhẹ hơn lúc đầu 1,1 g. Tính khối lượng carbon dioxide đã sinh ra. Vì sao khi bóng còn phồng, số chỉ của cân gần như không đổi?",
    "hint": "Khối lượng giảm sau khi xả khí chính là khối lượng khí đã thoát ra.",
    "sol": "Theo ĐLBTKL, tổng khối lượng trước = sau (tính cả khí). Phần mất đi khi xả là khí CO<sub>2</sub>: m = <b>1,1 g</b>.<br>Khi bóng còn phồng, khí vẫn nằm trong hệ kín nên khối lượng hệ không đổi. (Thực tế số chỉ giảm rất ít vì bóng to ra bị không khí đẩy lên, giống lực đẩy Archimedes ở môn Vật lí.)",
    "ans": 1.1,
    "unit": "g",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Cân bằng với nhóm nguyên tử",
    "d": "Lập PTHH",
    "q": "Lập PTHH và cho biết tỉ lệ số phân tử của các chất trong mỗi phản ứng:<br>a) Al + H<sub>2</sub>SO<sub>4</sub> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + H<sub>2</sub><br>b) Fe(OH)<sub>3</sub> →<sup>t°</sup> Fe<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O<br>c) BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + NaCl<br>d) Ca(OH)<sub>2</sub> + HCl → CaCl<sub>2</sub> + H<sub>2</sub>O",
    "hint": "Coi SO<sub>4</sub> và OH là một khối. Câu a: vế phải có 3 nhóm SO<sub>4</sub>.",
    "sol": "a) <b>2Al + 3H<sub>2</sub>SO<sub>4</sub> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3H<sub>2</sub></b>, tỉ lệ 2 : 3 : 1 : 3<br>b) <b>2Fe(OH)<sub>3</sub> → Fe<sub>2</sub>O<sub>3</sub> + 3H<sub>2</sub>O</b>, tỉ lệ 2 : 1 : 3<br>c) <b>BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub> + 2NaCl</b>, tỉ lệ 1 : 1 : 1 : 2<br>d) <b>Ca(OH)<sub>2</sub> + 2HCl → CaCl<sub>2</sub> + 2H<sub>2</sub>O</b>, tỉ lệ 1 : 2 : 1 : 2",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Đốt gas propane",
    "d": "Ý nghĩa PTHH",
    "q": "Bình gas dùng nấu ăn có thành phần chính là propane (C<sub>3</sub>H<sub>8</sub>) và butane. Khi cháy hoàn toàn, propane tác dụng với oxygen tạo carbon dioxide và nước. Lập PTHH, rồi cho biết cần bao nhiêu phân tử oxygen để đốt cháy hết 20 phân tử propane.",
    "hint": "Cân bằng C trước (3 CO<sub>2</sub>), rồi H (4 H<sub>2</sub>O), cuối cùng đếm O ở vế phải.",
    "sol": "C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O (vế phải có 6 + 4 = 10 O nên cần 5 O<sub>2</sub>).<br>Tỉ lệ C<sub>3</sub>H<sub>8</sub> : O<sub>2</sub> = 1 : 5 ⇒ 20 phân tử propane cần <b>100</b> phân tử oxygen.<br>Cần rất nhiều oxygen, vì vậy bếp gas phải đặt nơi thoáng khí.",
    "ans": 100,
    "unit": "phân tử",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Kẽm trong dung dịch acid",
    "d": "Áp dụng ĐLBTKL",
    "q": "Cho 13 g zinc vào cốc chứa 200 g dung dịch hydrochloric acid (lấy dư). Zinc tan hết, tạo zinc chloride tan trong dung dịch và khí hydrogen bay ra. Cân dung dịch sau phản ứng được 212,6 g. Tính khối lượng khí hydrogen đã thoát ra.",
    "hint": "Tổng khối lượng trước phản ứng (kẽm + dung dịch acid) bằng khối lượng dung dịch sau cộng khí hydrogen.",
    "sol": "Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>↑<br>m<sub>Zn</sub> + m<sub>dd acid</sub> = m<sub>dd sau</sub> + m<sub>H<sub>2</sub></sub><br>⇒ m<sub>H<sub>2</sub></sub> = 13 + 200 − 212,6 = <b>0,4 g</b>.<br>(Kiểm tra bằng cách tính theo mol ở chương 3: 13 g Zn là 0,2 mol, tạo 0,2 mol H<sub>2</sub> = 0,4 g ✓.)",
    "ans": 0.4,
    "unit": "g",
    "tol": 0.01
   },
   {
    "lv": 3,
    "t": "Ba phương trình khó",
    "d": "Lập PTHH",
    "q": "Lập PTHH:<br>a) Fe<sub>x</sub>O<sub>y</sub> + CO →<sup>t°</sup> Fe + CO<sub>2</sub> (luyện gang trong lò cao, x, y là chỉ số đã biết)<br>b) C<sub>2</sub>H<sub>6</sub>O + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O (đốt cồn ethanol trong đèn cồn)<br>c) Fe<sub>3</sub>O<sub>4</sub> + HCl → FeCl<sub>2</sub> + FeCl<sub>3</sub> + H<sub>2</sub>O",
    "hint": "a) Mỗi phân tử CO chỉ nhận thêm 1 O, mà oxide có y nguyên tử O. b) Nhớ ethanol cũng có 1 O. c) Cân bằng Fe trước (1 FeCl<sub>2</sub> + 2 FeCl<sub>3</sub>), sau đó Cl, rồi H, O.",
    "sol": "a) <b>Fe<sub>x</sub>O<sub>y</sub> + yCO → xFe + yCO<sub>2</sub></b> (ví dụ Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>)<br>b) C: 2 CO<sub>2</sub>; H: 3 H<sub>2</sub>O; O vế phải 4 + 3 = 7, vế trái đã có 1 O trong ethanol nên cần 6 O = 3 O<sub>2</sub>: <b>C<sub>2</sub>H<sub>6</sub>O + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O</b><br>c) 3 Fe: 1 FeCl<sub>2</sub> + 2 FeCl<sub>3</sub>, tổng Cl = 2 + 6 = 8 ⇒ 8HCl ⇒ 4H<sub>2</sub>O, O: 4 = 4 ✓: <b>Fe<sub>3</sub>O<sub>4</sub> + 8HCl → FeCl<sub>2</sub> + 2FeCl<sub>3</sub> + 4H<sub>2</sub>O</b>",
    "ans": null,
    "unit": "",
    "tol": 0
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h3",
  "position": 3,
  "title": "Mol, tỉ khối chất khí và tính theo phương trình hoá học",
  "icon": "🎈",
  "lab": "hoa_mole",
  "theory": "<div class=\"sec\"><h3>Mol: \"tá\" của các nhà hoá học</h3>\n  <p>Nguyên tử, phân tử nhỏ đến mức không thể đếm từng hạt. Giống như người ta đếm trứng theo chục, bút chì theo tá, nhà hoá học đếm hạt theo <b>mol</b>.</p>\n  <p><span class=\"mark\">1 mol là lượng chất chứa 6,022·10<sup>23</sup> hạt</span> (nguyên tử hoặc phân tử). Số 6,022·10<sup>23</sup> gọi là số Avogadro, kí hiệu N<sub>A</sub>.</p>\n  <div class=\"fbox\"><span class=\"f\">N = n · 6,022·10<sup>23</sup></span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> 1 mol nước có 6,022·10<sup>23</sup> phân tử H<sub>2</sub>O, chỉ khoảng 18 g, chưa đầy một ngụm! Nếu đếm mỗi giây một phân tử, cả loài người cùng đếm cũng mất hàng triệu năm.</div>\n </div>\n <div class=\"sec\"><h3>Khối lượng mol</h3>\n  <p><span class=\"mark\">Khối lượng mol (M)</span> là khối lượng của 1 mol chất, đơn vị g/mol, có trị số bằng khối lượng nguyên tử hoặc phân tử của chất đó.</p>\n  <div class=\"fbox\"><span class=\"f\">n = m / M</span><span class=\"f\">m = n · M</span></div>\n  <div class=\"tbl\"><table><tr><th>Chất</th><th>Công thức</th><th>M (g/mol)</th></tr>\n  <tr><td>Nước</td><td>H<sub>2</sub>O</td><td>18</td></tr>\n  <tr><td>Carbon dioxide</td><td>CO<sub>2</sub></td><td>44</td></tr>\n  <tr><td>Muối ăn (sodium chloride)</td><td>NaCl</td><td>58,5</td></tr>\n  <tr><td>Đá vôi (calcium carbonate)</td><td>CaCO<sub>3</sub></td><td>100</td></tr>\n  <tr><td>Đường kính (sucrose)</td><td>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub></td><td>342</td></tr></table></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Một thìa muối 5,85 g có n = 5,85 / 58,5 = 0,1 mol NaCl.</div>\n </div>\n <div class=\"sec\"><h3>Thể tích mol chất khí</h3>\n  <p>Ở cùng nhiệt độ và áp suất, <span class=\"mark\">1 mol của mọi chất khí đều chiếm cùng một thể tích</span>, dù khí nặng hay nhẹ. Ở <b>điều kiện chuẩn (25 °C, 1 bar)</b>, thể tích đó là 24,79 L.</p>\n  <div class=\"fbox\"><span class=\"f\">V = 24,79 · n</span><span class=\"f\">n = V / 24,79</span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> công thức này <u>chỉ dùng cho chất khí</u>, không dùng cho nước lỏng hay chất rắn. Số 22,4 L/mol em có thể thấy trong sách cũ là ứng với 0 °C, 1 atm; chương trình mới dùng 24,79 L/mol.</div>\n </div>\n <div class=\"sec\"><h3>Tỉ khối của chất khí</h3>\n  <p>Muốn biết khí A nặng hay nhẹ hơn khí B bao nhiêu lần, ta so sánh khối lượng mol:</p>\n  <div class=\"fbox\"><span class=\"f\">d<sub>A/B</sub> = M<sub>A</sub> / M<sub>B</sub></span><span class=\"f\">d<sub>A/kk</sub> = M<sub>A</sub> / 29</span></div>\n  <p>Không khí (khoảng 80% nitrogen, 20% oxygen) có khối lượng mol trung bình khoảng 29 g/mol. d<sub>A/kk</sub> &gt; 1: khí A nặng hơn không khí, chìm xuống; d<sub>A/kk</sub> &lt; 1: khí A nhẹ hơn, bay lên.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Bóng heli bay lên, bóng carbon dioxide chìm xuống sàn\">\n   <line x1=\"10\" y1=\"158\" x2=\"270\" y2=\"158\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n   <ellipse cx=\"70\" cy=\"46\" rx=\"22\" ry=\"27\" fill=\"var(--hl)\" stroke=\"var(--ink)\"/>\n   <path d=\"M70 73 q-6 14 0 26 q6 12 0 26\" fill=\"none\" stroke=\"var(--muted)\"/>\n   <text x=\"70\" y=\"50\" class=\"svgt\" text-anchor=\"middle\">He</text>\n   <line x1=\"112\" y1=\"70\" x2=\"112\" y2=\"30\" stroke=\"var(--ok)\" stroke-width=\"2\"/><polygon points=\"107,32 112,22 117,32\" fill=\"var(--ok)\"/>\n   <text x=\"70\" y=\"140\" class=\"svgm\" text-anchor=\"middle\">M = 4, d = 0,14</text>\n   <ellipse cx=\"205\" cy=\"128\" rx=\"22\" ry=\"27\" fill=\"var(--accent)\" fill-opacity=\"0.5\" stroke=\"var(--ink)\"/>\n   <text x=\"205\" y=\"132\" class=\"svgt\" text-anchor=\"middle\">CO₂</text>\n   <line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"100\" stroke=\"var(--bad)\" stroke-width=\"2\"/><polygon points=\"155,98 160,108 165,98\" fill=\"var(--bad)\"/>\n   <text x=\"205\" y=\"70\" class=\"svgm\" text-anchor=\"middle\">M = 44, d = 1,52</text>\n   <text x=\"140\" y=\"16\" class=\"svgm\" text-anchor=\"middle\">không khí: M ≈ 29</text>\n  </svg>\n  <div class=\"tbl\"><table><tr><th>Khí</th><th>H<sub>2</sub></th><th>He</th><th>CH<sub>4</sub></th><th>CO</th><th>O<sub>2</sub></th><th>CO<sub>2</sub></th><th>C<sub>4</sub>H<sub>10</sub></th></tr>\n  <tr><td>M</td><td>2</td><td>4</td><td>16</td><td>28</td><td>32</td><td>44</td><td>58</td></tr>\n  <tr><td>d<sub>/kk</sub></td><td>0,07</td><td>0,14</td><td>0,55</td><td>0,97</td><td>1,10</td><td>1,52</td><td>2,00</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Tính theo phương trình hoá học</h3>\n  <p>Hệ số trong PTHH cho biết tỉ lệ số phân tử, cũng chính là <span class=\"mark\">tỉ lệ số mol</span>. Các bước:</p>\n  <ul><li><b>Bước 1.</b> Đổi dữ kiện ra số mol (n = m/M hoặc n = V/24,79).</li>\n  <li><b>Bước 2.</b> Viết PTHH đã cân bằng.</li>\n  <li><b>Bước 3.</b> Dựa vào tỉ lệ hệ số, tìm số mol chất cần tính.</li>\n  <li><b>Bước 4.</b> Đổi số mol ra khối lượng hoặc thể tích theo yêu cầu.</li></ul>\n  <div class=\"eg\"><b>Ví dụ.</b> Nung 10 g CaCO<sub>3</sub> thu được bao nhiêu lít CO<sub>2</sub> (đkc)?<br>n<sub>CaCO<sub>3</sub></sub> = 10/100 = 0,1 mol. CaCO<sub>3</sub> →<sup>t°</sup> CaO + CO<sub>2</sub>, tỉ lệ 1 : 1 ⇒ n<sub>CO<sub>2</sub></sub> = 0,1 mol ⇒ V = 0,1 × 24,79 = 2,479 L.</div>\n </div>\n <div class=\"sec\"><h3>Chất dư và hiệu suất <span class=\"tag\">Nâng cao</span></h3>\n  <p><b>Chất dư:</b> khi biết lượng của cả hai chất phản ứng, lập tỉ số n/hệ số cho mỗi chất. Chất có tỉ số nhỏ hơn hết trước, ta <span class=\"mark\">tính sản phẩm theo chất hết</span>.</p>\n  <p><b>Hiệu suất:</b> thực tế phản ứng thường không đạt 100% (hao hụt, phản ứng chưa xong).</p>\n  <div class=\"fbox\"><span class=\"f\">H = lượng thực tế / lượng lí thuyết × 100%</span></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> lượng sản phẩm thực tế = lí thuyết × H. Còn lượng chất phản ứng cần dùng thực tế = lí thuyết : H (phải dùng nhiều hơn để bù hao hụt).</div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🎈</span>Bóng bay heli</b>Heli (M = 4) nhẹ hơn không khí khoảng 7 lần nên bóng bay lên. Không dùng hydrogen để bơm bóng dù còn nhẹ hơn, vì hydrogen rất dễ cháy nổ.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔥</span>Rò rỉ gas trong bếp</b>Gas (propane, butane) nặng hơn không khí khoảng 1,5 đến 2 lần nên đọng sát sàn nhà. Khi ngửi thấy mùi gas: khoá van, mở cửa cho thông gió, <b>không bật tắt công tắc điện</b>, không bật lửa.</div>\n   <div class=\"app\"><b><span class=\"ico\">🕳️</span>Giếng sâu, hầm ủ</b>Khí carbon dioxide nặng hơn không khí nên tích tụ ở đáy giếng cạn, hầm biogas, hầm ủ rau. Đã có người tử vong khi xuống nạo vét giếng. Phải thông khí trước khi xuống.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧯</span>Bình chữa cháy CO₂</b>Khí carbon dioxide phun ra nặng hơn không khí, phủ lên đám cháy như tấm chăn, đẩy oxygen ra xa nên lửa tắt. Dùng tốt cho đám cháy thiết bị điện.</div>\n   <div class=\"app\"><b><span class=\"ico\">⚠️</span>Khí CO lan khắp phòng</b>Carbon monoxide có M = 28, gần bằng không khí (d ≈ 0,97), nên không nổi hẳn lên cũng không chìm hẳn xuống mà hoà khắp phòng. Vì vậy ngộ độc CO rất nguy hiểm.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏭</span>Sản xuất theo PTHH</b>Nhà máy vôi, nhà máy phân bón tính lượng nguyên liệu, sản phẩm theo PTHH và hiệu suất. Một sai số nhỏ trên giấy có thể là hàng tấn nguyên liệu lãng phí.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Bóng bay heli mua ở hội chợ, sáng hôm sau đã xẹp và rơi xuống. Vì sao?</summary>Nguyên tử heli rất nhỏ, len qua được các lỗ li ti trên vỏ cao su. Khí heli thoát dần, bóng xẹp, lực đẩy của không khí không còn đủ nâng bóng nữa. Bóng màng nhôm (bóng kim tuyến) giữ heli lâu hơn nhiều.</details>\n  <details class=\"wq\"><summary>Bóng em tự thổi bằng miệng thì không bay lên. Vì sao?</summary>Hơi thở gồm chủ yếu nitrogen, oxygen, thêm một ít carbon dioxide và hơi nước, khối lượng mol trung bình xấp xỉ không khí. Cộng thêm vỏ cao su, cả quả bóng nặng hơn lượng không khí nó chiếm chỗ nên rơi xuống.</details>\n  <details class=\"wq\"><summary>Một thìa đường và một thìa muối cùng 10 g. Thìa nào chứa nhiều phân tử hơn?</summary>Thìa muối. Cùng khối lượng, chất có M nhỏ hơn thì nhiều mol hơn: muối 10/58,5 ≈ 0,17 mol, đường 10/342 ≈ 0,03 mol. Số \"hạt\" muối nhiều gấp gần 6 lần (một \"hạt\" NaCl ở đây là một cặp Na và Cl).</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chọn chất, kéo khối lượng và xem ngay số mol, số phân tử, thể tích; thử bơm bóng bằng các khí khác nhau xem bóng bay lên hay chìm xuống.</p>",
  "formulas": [
   [
    "Số hạt",
    "N = n · 6,022·10²³"
   ],
   [
    "Số mol theo khối lượng",
    "n = m / M (m = n·M)"
   ],
   [
    "Thể tích khí ở đkc (25 °C, 1 bar)",
    "V = 24,79 · n (lít)"
   ],
   [
    "Tỉ khối khí A so với B",
    "d(A/B) = M(A) / M(B)"
   ],
   [
    "Tỉ khối so với không khí",
    "d(A/kk) = M(A) / 29"
   ],
   [
    "Tính theo PTHH",
    "Tỉ lệ hệ số = tỉ lệ số mol"
   ],
   [
    "Chất dư",
    "So sánh n/hệ số, tính theo chất hết"
   ],
   [
    "Hiệu suất",
    "H = thực tế / lí thuyết × 100%"
   ]
  ],
  "quiz": [
   {
    "q": "Số mol có trong 9 g nước (H<sub>2</sub>O) là:",
    "o": [
     "0,5 mol",
     "2 mol",
     "162 mol",
     "0,05 mol"
    ],
    "why": "M<sub>H<sub>2</sub>O</sub> = 18 g/mol; n = 9/18 = 0,5 mol."
   },
   {
    "q": "Thể tích của 0,2 mol khí CO<sub>2</sub> ở điều kiện chuẩn (25 °C, 1 bar) là:",
    "o": [
     "4,958 L",
     "4,48 L",
     "8,8 L",
     "0,2 L"
    ],
    "why": "V = 0,2 × 24,79 = 4,958 L. Đáp án 4,48 L là dùng nhầm 22,4 L/mol của điều kiện cũ."
   },
   {
    "q": "Khí nào nhẹ hơn không khí?",
    "o": [
     "Methane (CH<sub>4</sub>)",
     "Carbon dioxide (CO<sub>2</sub>)",
     "Oxygen (O<sub>2</sub>)",
     "Butane (C<sub>4</sub>H<sub>10</sub>)"
    ],
    "why": "d<sub>CH<sub>4</sub>/kk</sub> = 16/29 ≈ 0,55 &lt; 1. Các khí còn lại có M lớn hơn 29."
   },
   {
    "q": "Tỉ khối của khí sulfur dioxide (SO<sub>2</sub>) so với khí oxygen là:",
    "o": [
     "2",
     "0,5",
     "2,2",
     "32"
    ],
    "why": "M<sub>SO<sub>2</sub></sub> = 64, M<sub>O<sub>2</sub></sub> = 32 ⇒ d = 64/32 = 2."
   },
   {
    "q": "Khối lượng mol của calcium carbonate (CaCO<sub>3</sub>) là:",
    "o": [
     "100 g/mol",
     "68 g/mol",
     "56 g/mol",
     "84 g/mol"
    ],
    "why": "40 + 12 + 3 × 16 = 100 g/mol. 68 là quên nhân 3 cho oxygen."
   },
   {
    "q": "1 mol khí N<sub>2</sub> và 1 mol khí O<sub>2</sub> ở cùng nhiệt độ và áp suất thì:",
    "o": [
     "Có cùng thể tích và cùng số phân tử",
     "Có cùng khối lượng",
     "O<sub>2</sub> chiếm thể tích lớn hơn vì nặng hơn",
     "Có cùng khối lượng và cùng thể tích"
    ],
    "why": "Cùng số mol thì cùng số phân tử; mọi chất khí cùng số mol, cùng điều kiện thì cùng thể tích. Khối lượng khác nhau (28 g và 32 g)."
   },
   {
    "q": "Số phân tử đường có trong 0,5 mol đường là:",
    "o": [
     "3,011·10<sup>23</sup>",
     "6,022·10<sup>23</sup>",
     "12,044·10<sup>23</sup>",
     "0,5·10<sup>23</sup>"
    ],
    "why": "N = 0,5 × 6,022·10<sup>23</sup> = 3,011·10<sup>23</sup> phân tử."
   },
   {
    "q": "Theo PTHH 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O, đốt cháy 1 mol H<sub>2</sub> cần bao nhiêu mol O<sub>2</sub>?",
    "o": [
     "0,5 mol",
     "1 mol",
     "2 mol",
     "0,25 mol"
    ],
    "why": "Tỉ lệ H<sub>2</sub> : O<sub>2</sub> = 2 : 1 ⇒ n<sub>O<sub>2</sub></sub> = 1/2 = 0,5 mol."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Đếm phân tử trong thìa đường",
    "d": "Chuyển đổi n, m, V",
    "q": "Một thìa đường kính (sucrose, C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) nặng 6,84 g. Tính số mol đường và số phân tử đường trong thìa.",
    "hint": "Tính M của sucrose trước: 12 × 12 + 22 × 1 + 11 × 16.",
    "sol": "M = 144 + 22 + 176 = 342 g/mol.<br>n = 6,84 / 342 = <b>0,02 mol</b>.<br>Số phân tử: N = 0,02 × 6,022·10<sup>23</sup> ≈ 1,2·10<sup>22</sup> phân tử, tức khoảng 12 nghìn tỉ tỉ phân tử trong một thìa!",
    "ans": 0.02,
    "unit": "mol",
    "tol": 0.0005
   },
   {
    "lv": 1,
    "t": "Khí gas nặng hay nhẹ?",
    "d": "Tỉ khối chất khí",
    "q": "Khí A là thành phần chính của một loại gas đun nấu, có tỉ khối so với hydrogen bằng 22. Tính khối lượng mol của A. Khí A nặng hay nhẹ hơn không khí bao nhiêu lần? Biết A chứa carbon và hydrogen, với 3 nguyên tử carbon trong phân tử, hãy tìm công thức của A.",
    "hint": "M<sub>A</sub> = 22 × M<sub>H<sub>2</sub></sub>. Sau đó so với 29.",
    "sol": "M<sub>A</sub> = 22 × 2 = <b>44 g/mol</b>.<br>d<sub>A/kk</sub> = 44/29 ≈ 1,52: A nặng hơn không khí khoảng 1,5 lần, nên gas rò rỉ đọng ở sát sàn.<br>Phân tử có 3 C (36) ⇒ phần H = 44 − 36 = 8 ⇒ A là <b>C<sub>3</sub>H<sub>8</sub></b> (propane).",
    "ans": 44,
    "unit": "g/mol",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Bình chữa cháy CO₂",
    "d": "Chuyển đổi n, m, V",
    "q": "Một bình chữa cháy chứa 4,4 kg carbon dioxide nén. Khi xả hết, khí CO<sub>2</sub> chiếm bao nhiêu lít ở điều kiện chuẩn? Thể tích đó bằng khoảng bao nhiêu chiếc thùng nước 20 lít?",
    "hint": "Đổi 4,4 kg = 4 400 g rồi tính số mol.",
    "sol": "n = 4 400 / 44 = 100 mol.<br>V = 100 × 24,79 = <b>2 479 L</b> (gần 2,5 m³), bằng khoảng 124 thùng 20 lít.<br>Một bình nhỏ phun ra lượng khí lớn như vậy nên phủ kín được đám cháy. Không dùng trong phòng kín có người vì có thể gây ngạt.",
    "ans": 2479,
    "unit": "L",
    "tol": 1
   },
   {
    "lv": 2,
    "t": "Nung đá vôi làm vôi sống",
    "d": "Tính theo PTHH",
    "q": "Nung 25 kg đá vôi chứa 80% calcium carbonate (còn lại là tạp chất không bị phân huỷ). Giả sử phản ứng xảy ra hoàn toàn, tính khối lượng vôi sống (calcium oxide) thu được.",
    "hint": "Tính khối lượng CaCO<sub>3</sub> nguyên chất. Với kg, có thể tính số kmol giống như mol.",
    "sol": "m<sub>CaCO<sub>3</sub></sub> = 25 × 80% = 20 kg ⇒ n = 20/100 = 0,2 kmol.<br>CaCO<sub>3</sub> →<sup>t°</sup> CaO + CO<sub>2</sub> ⇒ n<sub>CaO</sub> = 0,2 kmol.<br>m<sub>CaO</sub> = 0,2 × 56 = <b>11,2 kg</b>.",
    "ans": 11.2,
    "unit": "kg",
    "tol": 0.05
   },
   {
    "lv": 2,
    "t": "Kẽm và acid",
    "d": "Tính theo PTHH",
    "q": "Cho 6,5 g zinc tác dụng hết với dung dịch hydrochloric acid: Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. Tính thể tích khí hydrogen thu được ở điều kiện chuẩn và khối lượng HCl đã phản ứng.",
    "hint": "n<sub>Zn</sub> = 6,5/65. Tỉ lệ Zn : HCl : H<sub>2</sub> = 1 : 2 : 1.",
    "sol": "n<sub>Zn</sub> = 0,1 mol ⇒ n<sub>H<sub>2</sub></sub> = 0,1 mol ⇒ V = 0,1 × 24,79 = <b>2,479 L</b>.<br>n<sub>HCl</sub> = 0,2 mol ⇒ m<sub>HCl</sub> = 0,2 × 36,5 = 7,3 g.",
    "ans": 2.479,
    "unit": "L",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Đốt magnesium trong bình oxygen",
    "d": "Chất dư và hiệu suất",
    "q": "Đốt 4,8 g magnesium trong bình chứa 3,7185 L khí oxygen (đkc): 2Mg + O<sub>2</sub> →<sup>t°</sup> 2MgO. Chất nào còn dư và dư bao nhiêu lít (hoặc gam)? Tính khối lượng magnesium oxide tạo thành.",
    "hint": "Lập tỉ số n/hệ số của Mg và O<sub>2</sub>, chất có tỉ số nhỏ hơn hết trước.",
    "sol": "n<sub>Mg</sub> = 4,8/24 = 0,2 mol; n<sub>O<sub>2</sub></sub> = 3,7185/24,79 = 0,15 mol.<br>Tỉ số: Mg 0,2/2 = 0,1 &lt; O<sub>2</sub> 0,15/1 ⇒ Mg hết, O<sub>2</sub> dư.<br>O<sub>2</sub> phản ứng 0,1 mol ⇒ dư 0,05 mol = 1,2395 L.<br>n<sub>MgO</sub> = 0,2 mol ⇒ m = 0,2 × 40 = <b>8 g</b>.",
    "ans": 8,
    "unit": "g",
    "tol": 0.05
   },
   {
    "lv": 3,
    "t": "Lò vôi có hao hụt",
    "d": "Chất dư và hiệu suất",
    "q": "Một lò vôi nung 1 tấn đá vôi chứa 90% CaCO<sub>3</sub>. Hiệu suất của quá trình nung là 85%. Tính khối lượng vôi sống (CaO) thu được (kg). Nếu muốn thu được đúng 504 kg CaO thì phải nung bao nhiêu kg đá vôi loại này?",
    "hint": "Tính lượng CaO lí thuyết rồi nhân với H. Câu sau: lượng nguyên liệu thực tế = lí thuyết : H.",
    "sol": "m<sub>CaCO<sub>3</sub></sub> = 900 kg ⇒ 9 kmol ⇒ CaO lí thuyết 9 × 56 = 504 kg.<br>Thực tế: 504 × 85% = <b>428,4 kg</b>.<br>Muốn thu 504 kg CaO: cần lượng đá vôi = 1 000 / 0,85 ≈ 1 176,5 kg.",
    "ans": 428.4,
    "unit": "kg",
    "tol": 0.5
   },
   {
    "lv": 3,
    "t": "Thành phần biogas",
    "d": "Tỉ khối chất khí",
    "q": "Hầm biogas chăn nuôi tạo ra hỗn hợp khí, coi như chỉ gồm methane (CH<sub>4</sub>) và carbon dioxide. Hỗn hợp có tỉ khối so với hydrogen là 13,6. Tính phần trăm thể tích của methane. Biogas nặng hay nhẹ hơn không khí?",
    "hint": "Gọi x là phần thể tích (cũng là phần số mol) của CH<sub>4</sub>. Khối lượng mol trung bình: M = 16x + 44(1 − x).",
    "sol": "M<sub>tb</sub> = 13,6 × 2 = 27,2 g/mol.<br>16x + 44(1 − x) = 27,2 ⇒ 44 − 28x = 27,2 ⇒ x = 0,6.<br>Methane chiếm <b>60%</b> thể tích, CO<sub>2</sub> chiếm 40%.<br>d<sub>biogas/kk</sub> = 27,2/29 ≈ 0,94 &lt; 1: hơi nhẹ hơn không khí. Biogas thực tế chứa khoảng 50 – 70% methane, là nguồn nhiên liệu nấu ăn sạch ở nông thôn.",
    "ans": 60,
    "unit": "%",
    "tol": 0.1
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h4",
  "position": 4,
  "title": "Dung dịch và nồng độ",
  "icon": "🧂",
  "lab": "hoa_solution",
  "theory": "<div class=\"sec\"><h3>Dung môi, chất tan, dung dịch</h3>\n  <p>Hoà một thìa muối vào cốc nước, muối \"biến mất\" nhưng nước có vị mặn. Ta có:</p>\n  <ul><li><b>Dung môi</b>: chất có khả năng hoà tan chất khác (ở đây là nước).</li>\n  <li><b>Chất tan</b>: chất bị hoà tan (muối). Chất tan có thể là rắn, lỏng hoặc khí.</li>\n  <li><span class=\"mark\">Dung dịch</span>: hỗn hợp <b>đồng nhất</b> của dung môi và chất tan (nước muối).</li></ul>\n  <p>Nước là dung môi phổ biến nhất, nhưng không phải duy nhất: xăng hoà tan dầu mỡ, cồn hoà tan iodine (cồn iod sát khuẩn), acetone hoà tan sơn móng tay.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Dầu ăn cho vào nước không tan, khuấy lên vẫn tách lớp: đó không phải dung dịch. Sữa, nước phù sa cũng không phải dung dịch thật vì để lâu có thể tách lớp hoặc lắng.</div>\n </div>\n <div class=\"sec\"><h3>Dung dịch bão hoà và độ tan</h3>\n  <p>Cho tiếp muối vào cốc nước, đến lúc muối không tan thêm được nữa: dung dịch đã <span class=\"mark\">bão hoà</span>. Dung dịch còn hoà tan thêm được chất tan gọi là dung dịch chưa bão hoà.</p>\n  <p><b>Độ tan (S)</b> của một chất là số gam chất đó tan tối đa trong <b>100 g nước</b> để tạo dung dịch bão hoà, ở một nhiệt độ xác định.</p>\n  <div class=\"fbox\"><span class=\"f\">S = m<sub>chất tan</sub> / m<sub>nước</sub> × 100</span></div>\n  <ul><li>Chất rắn: độ tan thường <b>tăng khi nhiệt độ tăng</b> (đường tan trong nước nóng nhiều hơn nước đá). Ở 25 °C, S của muối ăn khoảng 36 g; của đường khoảng 200 g.</li>\n  <li>Chất khí: độ tan <b>giảm khi nhiệt độ tăng</b>, <b>tăng khi áp suất tăng</b>.</li>\n  <li>Khuấy, đun nóng, nghiền nhỏ chất rắn làm chất tan <i>nhanh hơn</i> (nhưng khuấy và nghiền không làm tan <i>nhiều hơn</i>).</li></ul>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đường cong độ tan của potassium nitrate và sodium chloride theo nhiệt độ\">\n   <line x1=\"40\" y1=\"140\" x2=\"266\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"12\" stroke=\"var(--ink)\"/>\n   <text x=\"268\" y=\"158\" class=\"svgm\" text-anchor=\"end\">t (°C)</text><text x=\"44\" y=\"12\" class=\"svgm\">S (g/100 g nước)</text>\n   <text x=\"40\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">0</text><text x=\"95\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">20</text><text x=\"150\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">40</text><text x=\"205\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">60</text><text x=\"260\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">80</text>\n   <text x=\"36\" y=\"108\" class=\"svgm\" text-anchor=\"end\">50</text><text x=\"36\" y=\"73\" class=\"svgm\" text-anchor=\"end\">100</text><text x=\"36\" y=\"38\" class=\"svgm\" text-anchor=\"end\">150</text>\n   <line x1=\"40\" y1=\"105\" x2=\"266\" y2=\"105\" stroke=\"var(--line)\"/><line x1=\"40\" y1=\"70\" x2=\"266\" y2=\"70\" stroke=\"var(--line)\"/><line x1=\"40\" y1=\"35\" x2=\"266\" y2=\"35\" stroke=\"var(--line)\"/>\n   <polyline points=\"40,130.7 95,117.9 150,95.3 205,63.0 260,21.7\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n   <polyline points=\"40,115.0 95,114.8 150,114.4 205,113.9 260,113.1\" fill=\"none\" stroke=\"#D29A00\" stroke-width=\"2.5\"/>\n   <text x=\"196\" y=\"40\" class=\"svgt\" fill=\"var(--accent)\">KNO₃</text><text x=\"200\" y=\"128\" class=\"svgt\">NaCl</text>\n  </svg>\n  <p class=\"muted\">Độ tan của potassium nitrate tăng rất mạnh theo nhiệt độ, còn của muối ăn gần như không đổi. Vì vậy làm lạnh dung dịch nóng bão hoà KNO<sub>3</sub> sẽ thu được nhiều tinh thể.</p>\n </div>\n <div class=\"sec\"><h3>Nồng độ phần trăm</h3>\n  <div class=\"fbox\"><span class=\"f\">C% = m<sub>ct</sub> / m<sub>dd</sub> × 100%</span><span class=\"f\">m<sub>dd</sub> = m<sub>ct</sub> + m<sub>dm</sub></span></div>\n  <p>C% cho biết số gam chất tan có trong 100 g dung dịch.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Nước muối sinh lí 0,9%: trong 100 g có 0,9 g NaCl. Chai 500 g chứa 500 × 0,9% = 4,5 g muối và 495,5 g nước.</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> chia cho khối lượng <u>dung dịch</u> chứ không phải khối lượng nước. Hoà 10 g muối vào 90 g nước: C% = 10/100 = 10%, không phải 10/90.</div>\n </div>\n <div class=\"sec\"><h3>Nồng độ mol</h3>\n  <div class=\"fbox\"><span class=\"f\">C<sub>M</sub> = n / V</span></div>\n  <p>n là số mol chất tan, V là thể tích dung dịch tính bằng <b>lít</b>. Đơn vị mol/L, viết tắt M. Ví dụ dung dịch 2 M nghĩa là 1 lít dung dịch có 2 mol chất tan.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Hoà tan 5,85 g NaCl (0,1 mol) thành 500 mL dung dịch: C<sub>M</sub> = 0,1 / 0,5 = 0,2 M.</div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> nhớ đổi mL sang L (chia 1 000). V là thể tích cả dung dịch, không phải thể tích nước đem pha.</div>\n </div>\n <div class=\"sec\"><h3>Pha loãng và pha trộn <span class=\"tag\">Nâng cao</span></h3>\n  <p>Khi thêm nước, lượng <span class=\"mark\">chất tan không đổi</span>, chỉ có dung dịch nhiều lên:</p>\n  <div class=\"fbox\"><span class=\"f\">m<sub>1</sub>·C%<sub>1</sub> = m<sub>2</sub>·C%<sub>2</sub></span><span class=\"f\">V<sub>1</sub>·C<sub>M1</sub> = V<sub>2</sub>·C<sub>M2</sub></span></div>\n  <p>Trộn hai dung dịch cùng chất tan: C% sau = (tổng chất tan) / (tổng khối lượng dung dịch).</p>\n  <p>Liên hệ giữa hai loại nồng độ (D là khối lượng riêng dung dịch, g/mL):</p>\n  <div class=\"fbox\"><span class=\"f\">C<sub>M</sub> = 10 · D · C% / M</span></div>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">💧</span>Nước muối sinh lí 0,9%</b>Có nồng độ muối gần bằng dịch trong cơ thể nên nhỏ mắt, rửa mũi không bị xót. Nước muối pha quá mặn sẽ hút nước của niêm mạc, gây rát.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧴</span>Dung dịch sát khuẩn tay</b>Cồn khoảng 60 – 80% (theo thể tích) diệt khuẩn tốt nhất. Cồn quá đặc bay hơi quá nhanh, chưa kịp tác dụng; quá loãng thì không đủ mạnh.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥤</span>Nước ngọt có ga</b>Khí carbon dioxide được nén vào chai ở áp suất cao nên tan nhiều. Mở nắp, áp suất giảm, khí thoát ra sủi bọt. Để nóng, ga càng nhanh hết vì khí tan kém ở nhiệt độ cao.</div>\n   <div class=\"app\"><b><span class=\"ico\">🩺</span>Oresol bù nước</b>Khi bị tiêu chảy, nôn, uống oresol để bù nước và muối. Phải pha đúng lượng nước ghi trên gói: pha đặc quá có thể làm mất nước nặng hơn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥒</span>Muối dưa, làm mứt</b>Dung dịch muối hoặc đường rất đặc hút nước ra khỏi rau quả và vi khuẩn, giúp bảo quản thực phẩm được lâu.</div>\n   <div class=\"app\"><b><span class=\"ico\">🐟</span>Cá nổi đầu ngày nóng</b>Nước ao nóng lên thì oxygen tan ít đi. Cá thiếu oxygen phải ngoi lên mặt nước. Người nuôi cá thường bật máy sục khí vào trưa hè.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Pha nước chanh đường, vì sao nên khuấy tan đường trước rồi mới cho đá?</summary>Đường tan nhanh và tan được nhiều hơn khi nước chưa lạnh. Cho đá vào trước, nước lạnh làm đường tan rất chậm, đọng lại ở đáy cốc.</details>\n  <details class=\"wq\"><summary>Đun nước, trước khi sôi đã thấy bọt nhỏ li ti bám thành nồi. Đó là gì?</summary>Đó là không khí hoà tan trong nước. Khi nước nóng lên, độ tan của chất khí giảm nên khí thoát ra thành bọt nhỏ. Bọt lớn lúc sôi mới là hơi nước.</details>\n  <details class=\"wq\"><summary>Vì sao rửa vết dầu mỡ trên áo bằng nước không sạch, phải dùng xà phòng?</summary>Dầu mỡ không tan trong nước. Xà phòng có phân tử một đầu ưa nước, một đầu ưa dầu, kéo dầu mỡ thành các giọt nhỏ phân tán vào nước rồi trôi đi.</details>\n  <details class=\"wq\"><summary>Thử ở nhà: nuôi tinh thể đường</summary>Nhờ người lớn đun nóng nửa cốc nước, hoà đường đến khi không tan được nữa (dung dịch bão hoà nóng). Rót sang lọ thuỷ tinh, thả một sợi chỉ sạch buộc vào que đũa. Để yên nơi mát vài ngày: nước nguội đi và bay hơi dần, đường kết tinh bám vào sợi chỉ. Cẩn thận nước nóng.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để cho đường, muối vào nước và xem C%, C<sub>M</sub> thay đổi, khi nào dung dịch bão hoà.</p>",
  "formulas": [
   [
    "Khối lượng dung dịch",
    "m_dd = m_ct + m_dm"
   ],
   [
    "Nồng độ phần trăm",
    "C% = m_ct / m_dd × 100%"
   ],
   [
    "Nồng độ mol",
    "C_M = n / V (V tính bằng lít)"
   ],
   [
    "Độ tan",
    "S = m_ct / m_nước × 100 (dung dịch bão hoà)"
   ],
   [
    "Pha loãng (theo C%)",
    "m₁·C₁ = m₂·C₂"
   ],
   [
    "Pha loãng (theo C_M)",
    "V₁·C_M1 = V₂·C_M2"
   ],
   [
    "Đổi C% sang C_M",
    "C_M = 10·D·C% / M (D: g/mL)"
   ],
   [
    "Độ tan chất khí",
    "Giảm khi nóng, tăng khi áp suất cao"
   ]
  ],
  "quiz": [
   {
    "q": "Hoà tan 10 g muối ăn vào 40 g nước. Nồng độ phần trăm của dung dịch là:",
    "o": [
     "20%",
     "25%",
     "10%",
     "40%"
    ],
    "why": "m<sub>dd</sub> = 10 + 40 = 50 g; C% = 10/50 × 100% = 20%. Đáp án 25% là chia nhầm cho khối lượng nước."
   },
   {
    "q": "Hoà tan 0,5 mol NaOH thành 250 mL dung dịch. Nồng độ mol là:",
    "o": [
     "2 M",
     "0,125 M",
     "0,002 M",
     "125 M"
    ],
    "why": "V = 0,25 L; C<sub>M</sub> = 0,5 / 0,25 = 2 M."
   },
   {
    "q": "Một chai nước muối sinh lí 0,9% nặng 500 g chứa bao nhiêu gam NaCl?",
    "o": [
     "4,5 g",
     "45 g",
     "0,45 g",
     "9 g"
    ],
    "why": "m = 500 × 0,9 / 100 = 4,5 g."
   },
   {
    "q": "Cách nào <b>không</b> làm đường tan nhanh hơn?",
    "o": [
     "Cho thêm thật nhiều đường vào cốc",
     "Khuấy đều",
     "Dùng nước ấm",
     "Dùng đường xay mịn"
    ],
    "why": "Khuấy, đun nóng, nghiền nhỏ đều làm tan nhanh hơn. Cho thêm đường chỉ làm dung dịch nhanh bão hoà."
   },
   {
    "q": "Độ tan của chất khí trong nước:",
    "o": [
     "Giảm khi tăng nhiệt độ, tăng khi tăng áp suất",
     "Tăng khi tăng nhiệt độ",
     "Không phụ thuộc áp suất",
     "Giảm khi tăng áp suất"
    ],
    "why": "Vì vậy nước ngọt có ga được nén ở áp suất cao, và để lạnh thì giữ ga lâu hơn."
   },
   {
    "q": "Ở 25 °C, độ tan của NaCl là 36 g. Cho 40 g NaCl vào 100 g nước ở 25 °C, khuấy kĩ. Kết quả:",
    "o": [
     "Thu được dung dịch bão hoà, còn 4 g muối không tan",
     "Muối tan hết, dung dịch chưa bão hoà",
     "Dung dịch có C% = 40%",
     "Muối tan hết, C% ≈ 28,6%"
    ],
    "why": "100 g nước chỉ hoà tan tối đa 36 g NaCl, còn dư 40 − 36 = 4 g lắng ở đáy."
   },
   {
    "q": "Trong cồn iod dùng để sát khuẩn, dung môi là:",
    "o": [
     "Cồn (ethanol)",
     "Iodine",
     "Nước muối",
     "Không khí"
    ],
    "why": "Iodine là chất tan, tan tốt trong cồn nhưng tan rất ít trong nước."
   },
   {
    "q": "Thêm nước vào 100 mL dung dịch đường 2 M để được 400 mL dung dịch. Nồng độ mới là:",
    "o": [
     "0,5 M",
     "8 M",
     "1 M",
     "0,2 M"
    ],
    "why": "Số mol không đổi: 0,1 × 2 = 0,2 mol; C<sub>M</sub> = 0,2 / 0,4 = 0,5 M."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Pha nước muối sinh lí",
    "d": "Nồng độ phần trăm",
    "q": "Cần pha 1 000 g nước muối sinh lí 0,9% để súc miệng. Cần bao nhiêu gam muối ăn và bao nhiêu gam nước?",
    "hint": "m<sub>ct</sub> = m<sub>dd</sub> × C% / 100.",
    "sol": "m<sub>NaCl</sub> = 1 000 × 0,9 / 100 = <b>9 g</b> (khoảng 2 thìa cà phê gạt).<br>m<sub>nước</sub> = 1 000 − 9 = 991 g.<br>Lưu ý: nước muối tự pha chỉ để súc miệng; nước muối dùng nhỏ mắt, rửa vết thương phải mua loại vô trùng.",
    "ans": 9,
    "unit": "g",
    "tol": 0.05
   },
   {
    "lv": 1,
    "t": "Dung dịch muối trong phòng thí nghiệm",
    "d": "Nồng độ mol",
    "q": "Hoà tan 11,7 g NaCl vào nước được 500 mL dung dịch. Tính nồng độ mol của dung dịch.",
    "hint": "Tính số mol NaCl (M = 58,5), đổi 500 mL ra lít.",
    "sol": "n = 11,7 / 58,5 = 0,2 mol; V = 0,5 L.<br>C<sub>M</sub> = 0,2 / 0,5 = <b>0,4 M</b>.",
    "ans": 0.4,
    "unit": "M",
    "tol": 0.005
   },
   {
    "lv": 2,
    "t": "Đo độ tan của muối",
    "d": "Độ tan",
    "q": "Ở 20 °C, hoà tan tối đa 7,2 g NaCl vào 20 g nước thì được dung dịch bão hoà. Tính độ tan của NaCl ở 20 °C và nồng độ phần trăm của dung dịch bão hoà đó.",
    "hint": "S tính cho 100 g nước. C% thì chia cho khối lượng dung dịch 7,2 + 20.",
    "sol": "S = 7,2 / 20 × 100 = <b>36 g</b>.<br>C% = 7,2 / 27,2 × 100% ≈ 26,5%.<br>Nhận xét: dung dịch muối ăn đặc nhất ở 20 °C cũng chỉ khoảng 26,5%, không thể pha nước muối 40% ở nhiệt độ phòng.",
    "ans": 36,
    "unit": "g",
    "tol": 0.1
   },
   {
    "lv": 2,
    "t": "Pha loãng giấm",
    "d": "Pha loãng và pha trộn",
    "q": "Có 200 g giấm đậm đặc chứa 10% acetic acid. Cần thêm bao nhiêu gam nước để được giấm ăn 4%?",
    "hint": "Khối lượng acetic acid không đổi khi pha loãng.",
    "sol": "m<sub>acid</sub> = 200 × 10% = 20 g.<br>m<sub>dd sau</sub> = 20 / 4% = 500 g.<br>Nước cần thêm: 500 − 200 = <b>300 g</b>.",
    "ans": 300,
    "unit": "g",
    "tol": 0.5
   },
   {
    "lv": 2,
    "t": "Trộn hai cốc nước đường",
    "d": "Pha loãng và pha trộn",
    "q": "Trộn 200 g nước đường 10% với 300 g nước đường 20%. Tính nồng độ phần trăm của nước đường sau khi trộn.",
    "hint": "Cộng khối lượng đường, cộng khối lượng dung dịch.",
    "sol": "m<sub>đường</sub> = 200 × 10% + 300 × 20% = 20 + 60 = 80 g.<br>m<sub>dd</sub> = 500 g ⇒ C% = 80/500 × 100% = <b>16%</b>.<br>Kết quả nằm giữa 10% và 20%, gần 20% hơn vì cốc 20% nhiều hơn.",
    "ans": 16,
    "unit": "%",
    "tol": 0.05
   },
   {
    "lv": 2,
    "t": "Pha cồn sát khuẩn",
    "d": "Pha loãng và pha trộn",
    "q": "Cồn 90° nghĩa là cứ 100 mL dung dịch có 90 mL ethanol. Em có 500 mL cồn 90°, cần thêm bao nhiêu mL nước cất để được cồn 70° dùng sát khuẩn? (Bỏ qua sự co thể tích khi trộn cồn với nước.)",
    "hint": "Thể tích ethanol nguyên chất không đổi: V<sub>1</sub> × 90 = V<sub>2</sub> × 70.",
    "sol": "V<sub>ethanol</sub> = 500 × 90% = 450 mL.<br>V<sub>dd sau</sub> = 450 / 70% ≈ 642,9 mL.<br>Nước cần thêm ≈ 642,9 − 500 = <b>142,9 mL</b>.<br>Thực tế cồn và nước trộn vào nhau thể tích hơi co lại, nên người ta đo bằng cồn kế để chỉnh lại. Cồn rất dễ cháy: pha xa bếp lửa.",
    "ans": 142.9,
    "unit": "mL",
    "tol": 0.5
   },
   {
    "lv": 3,
    "t": "Kết tinh potassium nitrate",
    "d": "Độ tan",
    "q": "Độ tan của KNO<sub>3</sub> ở 80 °C là 169 g, ở 20 °C là 31,6 g. Làm lạnh 538 g dung dịch KNO<sub>3</sub> bão hoà từ 80 °C xuống 20 °C. Tính khối lượng tinh thể KNO<sub>3</sub> tách ra (coi nước không bay hơi).",
    "hint": "Ở 80 °C, cứ 100 g nước + 169 g KNO<sub>3</sub> = 269 g dung dịch bão hoà. Tìm khối lượng nước và KNO<sub>3</sub> trong 538 g.",
    "sol": "538 = 2 × 269 ⇒ dung dịch có 200 g nước và 338 g KNO<sub>3</sub>.<br>Ở 20 °C, 200 g nước hoà tan tối đa 2 × 31,6 = 63,2 g.<br>KNO<sub>3</sub> kết tinh: 338 − 63,2 = <b>274,8 g</b>.<br>Đây là cách người ta tinh chế muối: hoà tan nóng rồi làm lạnh để kết tinh.",
    "ans": 274.8,
    "unit": "g",
    "tol": 0.5
   },
   {
    "lv": 3,
    "t": "Từ C% sang C_M",
    "d": "Nồng độ mol",
    "q": "Dung dịch NaOH 20% có khối lượng riêng D = 1,2 g/mL. Tính nồng độ mol của dung dịch. (Gợi ý: xét 1 lít dung dịch.)",
    "hint": "1 L = 1 000 mL có khối lượng 1 000 × 1,2 g. Tính khối lượng NaOH, rồi số mol.",
    "sol": "m<sub>dd</sub> = 1 000 × 1,2 = 1 200 g ⇒ m<sub>NaOH</sub> = 1 200 × 20% = 240 g.<br>n = 240 / 40 = 6 mol trong 1 L ⇒ C<sub>M</sub> = <b>6 M</b>.<br>Kiểm tra bằng công thức: C<sub>M</sub> = 10 × 1,2 × 20 / 40 = 6 M ✓.<br>NaOH đặc như vậy ăn da rất mạnh, chỉ dùng trong phòng thí nghiệm có găng tay, kính bảo hộ.",
    "ans": 6,
    "unit": "M",
    "tol": 0.05
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h5",
  "position": 5,
  "title": "Tốc độ phản ứng và chất xúc tác",
  "icon": "⏱️",
  "lab": "hoa_rate",
  "theory": "<div class=\"sec\"><h3>Tốc độ phản ứng</h3>\n  <p>Có phản ứng xảy ra trong nháy mắt (gas bắt lửa, pháo hoa nổ), có phản ứng kéo dài hàng tháng, hàng năm (sắt gỉ, nhũ đá trong hang hình thành). <span class=\"mark\">Tốc độ phản ứng</span> là đại lượng đặc trưng cho sự nhanh hay chậm của phản ứng.</p>\n  <p>Ta đo tốc độ bằng lượng chất phản ứng mất đi, hoặc lượng sản phẩm tạo ra, trong một khoảng thời gian.</p>\n  <div class=\"fbox\"><span class=\"f\">tốc độ trung bình = lượng chất thay đổi / thời gian</span></div>\n  <div class=\"eg\"><b>Ví dụ.</b> Thả đá vôi vào acid, 30 giây đầu thu được 60 mL khí CO<sub>2</sub>: tốc độ trung bình là 60/30 = 2 mL/s.</div>\n </div>\n <div class=\"sec\"><h3>Các yếu tố ảnh hưởng đến tốc độ phản ứng</h3>\n  <p>Các hạt chất phản ứng phải <b>va chạm</b> với nhau mới phản ứng được. Yếu tố nào làm va chạm xảy ra nhiều hơn, mạnh hơn thì làm phản ứng nhanh hơn.</p>\n  <div class=\"tbl\"><table><tr><th>Yếu tố</th><th>Tác động</th><th>Ví dụ</th></tr>\n  <tr><td>Nồng độ</td><td>Nồng độ tăng → tốc độ tăng</td><td>Than cháy mạnh trong oxygen nguyên chất hơn trong không khí</td></tr>\n  <tr><td>Nhiệt độ</td><td>Nhiệt độ tăng → tốc độ tăng</td><td>Thức ăn để ngoài hỏng nhanh hơn trong tủ lạnh</td></tr>\n  <tr><td>Diện tích bề mặt tiếp xúc</td><td>Chất rắn càng nhỏ, vụn → tốc độ tăng</td><td>Viên sủi nghiền nhỏ tan nhanh hơn viên nguyên</td></tr>\n  <tr><td>Chất xúc tác</td><td>Có xúc tác → tốc độ tăng</td><td>Men làm cơm nếp thành rượu nếp</td></tr>\n  <tr><td>Áp suất (chất khí)</td><td>Áp suất tăng → tốc độ tăng</td><td>Sản xuất ammonia trong nhà máy phân bón được nén ở áp suất cao</td></tr></table></div>\n  <div class=\"note\"><b>Bẫy hay gặp:</b> nghiền nhỏ chất rắn làm phản ứng <u>nhanh hơn</u> nhưng không làm sinh ra <u>nhiều sản phẩm hơn</u>. Lượng sản phẩm cuối cùng chỉ phụ thuộc lượng chất phản ứng.</div>\n </div>\n <div class=\"sec\"><h3>Đồ thị thể tích khí theo thời gian</h3>\n  <p>Cho cùng khối lượng đá vôi dạng viên và dạng bột vào hai cốc acid giống nhau (acid lấy dư), đo thể tích khí CO<sub>2</sub> thoát ra:</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Đồ thị thể tích khí theo thời gian khi dùng đá vôi dạng bột và dạng viên\">\n   <line x1=\"40\" y1=\"140\" x2=\"266\" y2=\"140\" stroke=\"var(--ink)\"/><line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"12\" stroke=\"var(--ink)\"/>\n   <text x=\"266\" y=\"155\" class=\"svgm\" text-anchor=\"end\">thời gian</text><text x=\"44\" y=\"12\" class=\"svgm\">V khí (mL)</text>\n   <line x1=\"40\" y1=\"34\" x2=\"266\" y2=\"34\" stroke=\"var(--line)\" stroke-dasharray=\"4 3\"/>\n   <path d=\"M40,140 Q70,38 130,34 L262,34\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n   <path d=\"M40,140 Q110,40 225,34 L262,34\" fill=\"none\" stroke=\"#D29A00\" stroke-width=\"2.5\"/>\n   <text x=\"52\" y=\"62\" class=\"svgt\" fill=\"var(--accent)\" text-anchor=\"end\">bột</text>\n   <text x=\"135\" y=\"86\" class=\"svgt\">viên</text>\n   <text x=\"200\" y=\"27\" class=\"svgm\" text-anchor=\"middle\">phản ứng kết thúc</text>\n  </svg>\n  <ul><li>Đường càng <b>dốc</b> thì phản ứng càng nhanh. Lúc đầu nồng độ acid lớn nên dốc nhất, sau đó thoải dần vì acid và đá vôi bị tiêu hao.</li>\n  <li>Đoạn nằm ngang: phản ứng đã dừng vì một chất (ở đây là đá vôi) đã hết.</li>\n  <li>Hai đường cùng đạt một mức cuối vì cùng lượng đá vôi; đá vôi bột chỉ về đích sớm hơn.</li></ul>\n </div>\n <div class=\"sec\"><h3>Chất xúc tác</h3>\n  <p><span class=\"mark\">Chất xúc tác là chất làm tăng tốc độ phản ứng nhưng không bị tiêu hao</span>: sau phản ứng, khối lượng và bản chất của nó không đổi.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Nước oxy già (hydrogen peroxide) để yên phân huỷ rất chậm. Thêm một chút manganese dioxide (MnO<sub>2</sub>), dung dịch sủi bọt oxygen mạnh:<br>2H<sub>2</sub>O<sub>2</sub> →<sup>MnO<sub>2</sub></sup> 2H<sub>2</sub>O + O<sub>2</sub>↑<br>Lọc lại, MnO<sub>2</sub> vẫn còn nguyên khối lượng ban đầu.</div>\n  <ul><li><b>Enzyme</b> là chất xúc tác sinh học trong cơ thể: amylase trong nước bọt biến tinh bột thành đường, pepsin ở dạ dày phân giải protein.</li>\n  <li>Ngược lại, <b>chất ức chế</b> làm chậm phản ứng, ví dụ chất bảo quản trong thực phẩm, chất chống gỉ.</li></ul>\n </div>\n <div class=\"sec\"><h3>Quy tắc 10 độ <span class=\"tag\">Nâng cao</span></h3>\n  <p>Với nhiều phản ứng, cứ <b>tăng nhiệt độ thêm 10 °C thì tốc độ tăng khoảng 2 đến 4 lần</b> (quy tắc Van't Hoff, gần đúng). Nếu hệ số là 2: tăng 30 °C thì tốc độ tăng 2 × 2 × 2 = 8 lần, thời gian phản ứng giảm 8 lần.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🧊</span>Tủ lạnh, tủ đông</b>Nhiệt độ thấp làm chậm các phản ứng làm hỏng thực phẩm và sự phát triển của vi khuẩn. Thịt cá để ngăn đá giữ được hàng tháng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🍲</span>Nồi áp suất</b>Nồi kín làm áp suất tăng, nước sôi ở khoảng 115 – 120 °C thay vì 100 °C. Nhiệt độ cao hơn làm thức ăn chín nhanh hơn nhiều, hầm xương chỉ mất một nửa thời gian.</div>\n   <div class=\"app\"><b><span class=\"ico\">🪵</span>Nhóm bếp củi</b>Chẻ nhỏ củi (tăng diện tích tiếp xúc), xếp thưa và quạt (tăng lượng oxygen) giúp lửa bén nhanh và cháy mạnh.</div>\n   <div class=\"app\"><b><span class=\"ico\">🦷</span>Nhai kĩ no lâu</b>Nhai kĩ làm thức ăn nhỏ ra, tăng diện tích cho enzyme trong nước bọt và dạ dày hoạt động, giúp tiêu hoá tốt hơn. Nhai cơm lâu thấy ngọt là nhờ amylase.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚗</span>Bộ xúc tác khí thải</b>Ống xả ô tô có lớp kim loại quý làm xúc tác, biến khí CO độc và các khí ô nhiễm thành carbon dioxide, nitrogen, hơi nước ít độc hơn.</div>\n   <div class=\"app\"><b><span class=\"ico\">💥</span>Nổ bụi</b>Bột mì, bụi than, bụi gỗ lơ lửng trong không khí có diện tích tiếp xúc với oxygen cực lớn. Gặp tia lửa, chúng cháy gần như tức thì gây nổ. Xưởng xay bột, hầm mỏ phải chống bụi và cấm lửa.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Quạt vào than hồng, than đỏ rực lên. Vì sao?</summary>Quạt đưa thêm không khí mới tới bề mặt than, làm tăng lượng (nồng độ) oxygen tiếp xúc với than. Phản ứng cháy nhanh hơn, toả nhiều nhiệt hơn, than đỏ rực lên.</details>\n  <details class=\"wq\"><summary>Vì sao ướp đá cho cá khi vận chuyển từ biển về chợ?</summary>Nhiệt độ thấp làm chậm các phản ứng phân huỷ thịt cá và sự sinh sôi của vi khuẩn, giữ cá tươi lâu hơn.</details>\n  <details class=\"wq\"><summary>Bôi nước oxy già lên vết xước, vết thương sủi bọt trắng. Vì sao?</summary>Trong máu và mô có enzyme catalase, một chất xúc tác sinh học làm hydrogen peroxide phân huỷ rất nhanh, giải phóng khí oxygen tạo bọt. Bôi lên da lành gần như không sủi vì không có nhiều enzyme này.</details>\n  <details class=\"wq\"><summary>Thử ở nhà: cuộc đua viên sủi</summary>Chuẩn bị hai cốc nước, một cốc nước lạnh, một cốc nước ấm (không dùng nước sôi). Bẻ đôi một viên sủi vitamin C, thả cùng lúc mỗi cốc một nửa, bấm giờ đến khi tan hết. Lần sau dùng hai cốc cùng nhiệt độ: một nửa để nguyên, một nửa nghiền nhỏ trong túi giấy. Em sẽ thấy nhiệt độ và diện tích bề mặt ảnh hưởng thế nào. Nước sau thí nghiệm có thể uống được nếu là viên sủi dùng cho người, nhưng mỗi ngày chỉ dùng đúng liều ghi trên hộp.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chỉnh nhiệt độ, nồng độ, dạng viên hay bột, thêm xúc tác và xem bọt khí cùng đồ thị thể tích khí theo thời gian.</p>",
  "formulas": [
   [
    "Tốc độ trung bình",
    "lượng chất thay đổi / thời gian (vd mL khí/s)"
   ],
   [
    "Nồng độ",
    "Nồng độ tăng → tốc độ tăng"
   ],
   [
    "Nhiệt độ",
    "Nhiệt độ tăng → tốc độ tăng"
   ],
   [
    "Diện tích bề mặt",
    "Chia nhỏ chất rắn → tốc độ tăng"
   ],
   [
    "Áp suất (chất khí)",
    "Áp suất tăng → tốc độ tăng"
   ],
   [
    "Chất xúc tác",
    "Tăng tốc độ, không bị tiêu hao"
   ],
   [
    "Ví dụ xúc tác",
    "2H₂O₂ →(MnO₂) 2H₂O + O₂"
   ],
   [
    "Quy tắc 10 độ (gần đúng)",
    "Tăng 10 °C, tốc độ tăng 2 – 4 lần"
   ]
  ],
  "quiz": [
   {
    "q": "Viên sủi vitamin C sẽ tan hết nhanh nhất khi:",
    "o": [
     "Nghiền nhỏ, thả vào nước ấm",
     "Để nguyên viên, thả vào nước lạnh",
     "Nghiền nhỏ, thả vào nước đá",
     "Để nguyên viên, thả vào nước ấm"
    ],
    "why": "Kết hợp cả hai yếu tố: tăng diện tích bề mặt và tăng nhiệt độ."
   },
   {
    "q": "Chất xúc tác là chất:",
    "o": [
     "Làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng",
     "Bị tiêu hao hết trong phản ứng",
     "Luôn làm phản ứng chậm lại",
     "Là sản phẩm chính của phản ứng"
    ],
    "why": "Sau phản ứng, khối lượng và bản chất của chất xúc tác không đổi."
   },
   {
    "q": "Bảo quản thực phẩm trong tủ lạnh là vận dụng yếu tố nào?",
    "o": [
     "Nhiệt độ",
     "Chất xúc tác",
     "Diện tích bề mặt",
     "Áp suất"
    ],
    "why": "Nhiệt độ thấp làm giảm tốc độ các phản ứng làm hỏng thực phẩm."
   },
   {
    "q": "Quạt vào bếp than làm than cháy mạnh hơn vì:",
    "o": [
     "Tăng lượng oxygen tiếp xúc với than",
     "Giảm nhiệt độ của than",
     "Gió là chất xúc tác",
     "Tăng diện tích bề mặt của than"
    ],
    "why": "Quạt đưa không khí mới đến, tăng nồng độ oxygen quanh than."
   },
   {
    "q": "Cho cùng khối lượng đá vôi vào hai cốc acid giống nhau (acid dư): một cốc dạng bột, một cốc dạng viên. Kết luận đúng:",
    "o": [
     "Cốc bột phản ứng nhanh hơn, tổng thể tích khí cuối cùng bằng nhau",
     "Cốc bột nhanh hơn và tạo nhiều khí hơn",
     "Cốc viên nhanh hơn",
     "Hai cốc nhanh như nhau"
    ],
    "why": "Bột có diện tích tiếp xúc lớn nên nhanh hơn. Lượng khí cuối chỉ phụ thuộc lượng đá vôi, bằng nhau."
   },
   {
    "q": "Nhai cơm lâu thấy ngọt. Enzyme amylase trong nước bọt đóng vai trò:",
    "o": [
     "Chất xúc tác",
     "Chất phản ứng bị tiêu hao",
     "Chất ức chế",
     "Dung môi"
    ],
    "why": "Enzyme là chất xúc tác sinh học, giúp tinh bột chuyển thành đường nhanh hơn."
   },
   {
    "q": "Nổ bụi ở xưởng xay bột mì xảy ra vì:",
    "o": [
     "Bụi bột rất mịn có diện tích tiếp xúc với oxygen rất lớn",
     "Bột mì là thuốc nổ",
     "Áp suất trong xưởng thấp",
     "Bột mì chứa chất xúc tác"
    ],
    "why": "Hạt bụi nhỏ li ti, tổng diện tích bề mặt cực lớn, nên cháy gần như tức thì khi gặp tia lửa."
   },
   {
    "q": "Trên đồ thị thể tích khí theo thời gian, đoạn cuối nằm ngang có nghĩa là:",
    "o": [
     "Phản ứng đã kết thúc vì một chất phản ứng đã hết",
     "Phản ứng đang xảy ra nhanh nhất",
     "Chất xúc tác bị mất tác dụng",
     "Khí bắt đầu thoát ra"
    ],
    "why": "Thể tích khí không tăng nữa nghĩa là không còn phản ứng."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Bí quyết trong bếp",
    "d": "Giải thích yếu tố ảnh hưởng",
    "q": "Giải thích (chỉ rõ yếu tố ảnh hưởng đến tốc độ phản ứng) vì sao: a) thái mỏng thịt thì xào nhanh chín; b) hầm xương bằng nồi áp suất nhanh hơn nồi thường; c) cá biển được ướp đá khi chở về chợ; d) muốn làm sữa chua phải cho thêm một ít sữa chua cũ vào sữa.",
    "hint": "Mỗi ý ứng với một yếu tố: diện tích bề mặt, nhiệt độ, chất xúc tác (men).",
    "sol": "a) <b>Diện tích bề mặt</b>: thịt thái mỏng tiếp xúc với nhiệt và gia vị nhiều hơn.<br>b) <b>Nhiệt độ</b>: trong nồi áp suất nước sôi ở trên 100 °C, phản ứng làm mềm thịt xương nhanh hơn.<br>c) <b>Nhiệt độ</b> thấp làm chậm phản ứng phân huỷ, vi khuẩn chậm phát triển.<br>d) Sữa chua cũ chứa vi khuẩn lactic, chúng tạo ra <b>enzyme (chất xúc tác)</b> biến đường trong sữa thành acid lactic, làm sữa đông và chua nhanh.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 1,
    "t": "Tốc độ trung bình",
    "d": "Đồ thị và tốc độ trung bình",
    "q": "Thả mẩu đá vôi vào dung dịch hydrochloric acid, sau 40 giây thu được 60 mL khí carbon dioxide. Tính tốc độ trung bình của phản ứng theo thể tích khí (mL/s).",
    "hint": "Tốc độ trung bình = lượng khí tạo ra / thời gian.",
    "sol": "v<sub>tb</sub> = 60 / 40 = <b>1,5 mL/s</b>.",
    "ans": 1.5,
    "unit": "mL/s",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Đọc bảng số liệu",
    "d": "Đồ thị và tốc độ trung bình",
    "q": "Đo thể tích khí CO<sub>2</sub> khi cho đá vôi vào acid:<div class=\"tbl\"><table><tr><th>t (s)</th><td>0</td><td>20</td><td>40</td><td>60</td><td>80</td><td>100</td></tr><tr><th>V (mL)</th><td>0</td><td>36</td><td>58</td><td>70</td><td>74</td><td>74</td></tr></table></div>Tốc độ trung bình trong 20 giây đầu gấp mấy lần tốc độ trung bình trong khoảng từ giây 40 đến giây 60? Vì sao tốc độ giảm dần? Phản ứng kết thúc khoảng lúc nào?",
    "hint": "Tính lượng khí sinh ra trong mỗi khoảng 20 giây.",
    "sol": "0 – 20 s: 36/20 = 1,8 mL/s. 40 – 60 s: (70 − 58)/20 = 0,6 mL/s.<br>Tỉ số: 1,8 / 0,6 = <b>3 lần</b>.<br>Tốc độ giảm vì các chất phản ứng bị tiêu hao dần, nồng độ acid giảm.<br>Từ giây 80 thể tích không đổi: phản ứng kết thúc trong khoảng 60 – 80 s.",
    "ans": 3,
    "unit": "lần",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Nước oxy già và xúc tác",
    "d": "Chất xúc tác",
    "q": "Cho 0,5 g manganese dioxide (MnO<sub>2</sub>) vào 34 g nước oxy già chứa 3% hydrogen peroxide, khí oxygen sủi lên mạnh. Khi hết sủi, lọc và sấy khô thu lại đúng 0,5 g chất rắn đen. Cho biết vai trò của MnO<sub>2</sub>, viết PTHH và tính thể tích oxygen (mL, đkc) tối đa thu được.",
    "hint": "Khối lượng MnO<sub>2</sub> không đổi nói lên điều gì? m<sub>H<sub>2</sub>O<sub>2</sub></sub> = 34 × 3%, M = 34.",
    "sol": "MnO<sub>2</sub> không bị tiêu hao nên là <b>chất xúc tác</b>.<br>2H<sub>2</sub>O<sub>2</sub> →<sup>MnO<sub>2</sub></sup> 2H<sub>2</sub>O + O<sub>2</sub><br>m<sub>H<sub>2</sub>O<sub>2</sub></sub> = 34 × 3% = 1,02 g ⇒ n = 1,02/34 = 0,03 mol ⇒ n<sub>O<sub>2</sub></sub> = 0,015 mol.<br>V = 0,015 × 24,79 = 0,37185 L ≈ <b>371,85 mL</b> (khoảng hai cốc nhỏ khí oxygen).",
    "ans": 371.85,
    "unit": "mL",
    "tol": 1
   },
   {
    "lv": 2,
    "t": "Nhóm bếp và nổ bụi",
    "d": "Giải thích yếu tố ảnh hưởng",
    "q": "a) Vì sao muốn nhóm bếp củi nhanh, người ta chẻ nhỏ củi, xếp thưa và quạt? b) Một khối bột mì trong bao cháy âm ỉ rất chậm, nhưng bột mì tung mù mịt trong không khí gặp tia lửa lại có thể gây nổ. Giải thích.",
    "hint": "Nghĩ về diện tích bề mặt tiếp xúc và lượng oxygen.",
    "sol": "a) Chẻ nhỏ: tăng <b>diện tích bề mặt</b> tiếp xúc với oxygen. Xếp thưa và quạt: tăng <b>lượng oxygen</b> (nồng độ) đến bề mặt củi. Cả hai đều làm phản ứng cháy nhanh hơn.<br>b) Trong bao, bột nằm chặt, chỉ lớp ngoài tiếp xúc với không khí nên cháy chậm. Khi tung lên, mỗi hạt bột li ti đều được bao quanh bởi oxygen, tổng diện tích bề mặt cực lớn. Phản ứng cháy lan cực nhanh, toả nhiệt và khí đột ngột, gây <b>nổ bụi</b>. Vì vậy các xưởng bột, mỏ than phải hút bụi và cấm lửa.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Xếp thứ tự tốc độ",
    "d": "Giải thích yếu tố ảnh hưởng",
    "q": "Cho cùng một khối lượng zinc vào cùng một thể tích dung dịch hydrochloric acid trong 4 thí nghiệm:<br>(1) zinc hạt, acid 1 M, 25 °C;<br>(2) zinc hạt, acid 2 M, 25 °C;<br>(3) zinc bột, acid 2 M, 25 °C;<br>(4) zinc bột, acid 2 M, 50 °C.<br>Sắp xếp các thí nghiệm theo tốc độ thoát khí tăng dần và giải thích.",
    "hint": "So sánh từng cặp chỉ khác nhau một yếu tố.",
    "sol": "(1) và (2) chỉ khác nồng độ: (2) nhanh hơn (1).<br>(2) và (3) chỉ khác dạng zinc: bột có diện tích lớn hơn, (3) nhanh hơn (2).<br>(3) và (4) chỉ khác nhiệt độ: (4) nhanh hơn (3).<br>Thứ tự tăng dần: <b>(1) &lt; (2) &lt; (3) &lt; (4)</b>.<br>Mẹo: muốn so sánh công bằng, chỉ thay đổi <i>một</i> yếu tố mỗi lần, giữ nguyên các yếu tố khác.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 3,
    "t": "Canh để ngoài hay trong tủ lạnh",
    "d": "Đồ thị và tốc độ trung bình",
    "q": "Giả sử tốc độ các phản ứng làm hỏng món canh tuân theo quy tắc gần đúng: cứ tăng 10 °C thì tốc độ tăng gấp 2 lần. Để ở 35 °C (trưa hè), món canh bắt đầu hỏng sau 4 giờ. Nếu để trong ngăn mát tủ lạnh ở 5 °C thì sau bao nhiêu giờ mới bắt đầu hỏng?",
    "hint": "Từ 35 °C xuống 5 °C là giảm mấy lần 10 °C? Mỗi lần tốc độ giảm một nửa, thời gian tăng gấp đôi.",
    "sol": "Giảm 30 °C = 3 lần 10 °C ⇒ tốc độ giảm 2<sup>3</sup> = 8 lần ⇒ thời gian tăng 8 lần.<br>t = 4 × 8 = <b>32 giờ</b>.<br>Đây chỉ là mô hình gần đúng, thực tế còn tuỳ món ăn. Nhưng nó giải thích vì sao thức ăn thừa nên cho vào tủ lạnh sớm, đừng để ngoài cả buổi trưa hè.",
    "ans": 32,
    "unit": "giờ",
    "tol": 0.1
   },
   {
    "lv": 3,
    "t": "Ba thí nghiệm đá vôi",
    "d": "Đồ thị và tốc độ trung bình",
    "q": "Ba cốc, mỗi cốc chứa 50 mL dung dịch HCl 1 M ở cùng nhiệt độ. Cốc 1: thả 1 g CaCO<sub>3</sub> dạng viên. Cốc 2: 1 g CaCO<sub>3</sub> dạng bột. Cốc 3: 2 g CaCO<sub>3</sub> dạng bột. Tính thể tích khí CO<sub>2</sub> (mL, đkc) thu được khi phản ứng ở cốc 3 kết thúc. Vẽ phác ba đường thể tích khí theo thời gian trên cùng một hệ trục và so sánh.",
    "hint": "CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>. Kiểm tra acid có đủ cho 2 g CaCO<sub>3</sub> không.",
    "sol": "n<sub>HCl</sub> = 0,05 × 1 = 0,05 mol.<br>Cốc 3: n<sub>CaCO<sub>3</sub></sub> = 2/100 = 0,02 mol, cần 0,04 mol HCl &lt; 0,05 ⇒ acid dư, CaCO<sub>3</sub> hết.<br>n<sub>CO<sub>2</sub></sub> = 0,02 mol ⇒ V = 0,02 × 24,79 = 0,4958 L = <b>495,8 mL</b>.<br>Cốc 1 và cốc 2 đều tạo 0,01 mol, tức 247,9 mL.<br>Đồ thị: đường cốc 2 dốc hơn cốc 1 lúc đầu nhưng cùng nằm ngang ở 247,9 mL. Đường cốc 3 dốc nhất (nhiều bề mặt nhất) và nằm ngang ở mức cao gấp đôi, 495,8 mL.",
    "ans": 495.8,
    "unit": "mL",
    "tol": 0.5
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h6",
  "position": 6,
  "title": "Acid, base và thang pH",
  "icon": "🍋",
  "lab": "hoa_ph",
  "theory": "<div class=\"sec\"><h3>Acid</h3>\n  <p><span class=\"mark\">Acid là hợp chất mà phân tử gồm một hay nhiều nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước, acid tạo ra ion H<sup>+</sup>.</span></p>\n  <div class=\"tbl\"><table><tr><th>Acid</th><th>Công thức</th><th>Gặp ở đâu</th></tr>\n  <tr><td>Hydrochloric acid</td><td>HCl</td><td>Dịch vị dạ dày, chất tẩy rửa bồn cầu</td></tr>\n  <tr><td>Sulfuric acid</td><td>H<sub>2</sub>SO<sub>4</sub></td><td>Ắc quy, sản xuất phân bón</td></tr>\n  <tr><td>Acetic acid</td><td>CH<sub>3</sub>COOH</td><td>Giấm ăn (khoảng 4 – 5%)</td></tr>\n  <tr><td>Citric acid</td><td>C<sub>6</sub>H<sub>8</sub>O<sub>7</sub></td><td>Chanh, cam, viên sủi</td></tr></table></div>\n  <p><b>Tính chất hoá học của acid:</b></p>\n  <ul><li>Làm <b>quỳ tím hoá đỏ</b>.</li>\n  <li>Tác dụng với nhiều kim loại (Mg, Al, Zn, Fe…) tạo muối và khí hydrogen: Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>↑; Zn + H<sub>2</sub>SO<sub>4</sub> → ZnSO<sub>4</sub> + H<sub>2</sub>↑. (Đồng, bạc, vàng không phản ứng với HCl, H<sub>2</sub>SO<sub>4</sub> loãng.)</li>\n  <li>Tác dụng với base tạo muối và nước (phản ứng trung hoà).</li>\n  <li>Tác dụng với oxide base và với một số muối (đá vôi + acid sủi bọt CO<sub>2</sub>), xem thêm ở chương 7.</li></ul>\n </div>\n <div class=\"sec\"><h3>Base và kiềm</h3>\n  <p><span class=\"mark\">Base là hợp chất mà phân tử gồm nguyên tử kim loại liên kết với nhóm hydroxide (OH). Khi tan trong nước, base tạo ra ion OH<sup>−</sup>.</span></p>\n  <ul><li><b>Kiềm</b> là base tan được trong nước: NaOH (sodium hydroxide, xút), KOH, Ca(OH)<sub>2</sub> (nước vôi trong, ít tan), Ba(OH)<sub>2</sub>.</li>\n  <li>Base không tan: Cu(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>, Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub>…</li></ul>\n  <p><b>Tính chất hoá học của base (kiềm):</b></p>\n  <ul><li>Làm <b>quỳ tím hoá xanh</b>, làm <b>phenolphthalein</b> (không màu) chuyển <b>hồng</b>.</li>\n  <li>Tác dụng với acid tạo muối và nước.</li>\n  <li>Kiềm tác dụng với oxide acid (ví dụ CO<sub>2</sub> làm nước vôi trong vẩn đục).</li></ul>\n  <div class=\"note\"><b>An toàn:</b> kiềm đặc (xút, nước thông cống) ăn da và làm hỏng mắt còn nhanh hơn acid. Khi bị dính acid hay kiềm, rửa ngay dưới vòi nước chảy nhiều phút và báo người lớn.</div>\n </div>\n <div class=\"sec\"><h3>Phản ứng trung hoà</h3>\n  <div class=\"fbox\"><span class=\"f\">Acid + Base → Muối + Nước</span></div>\n  <p>Ví dụ: NaOH + HCl → NaCl + H<sub>2</sub>O; Mg(OH)<sub>2</sub> + 2HCl → MgCl<sub>2</sub> + 2H<sub>2</sub>O.</p>\n  <p>Khi acid và base phản ứng vừa đủ, dung dịch thu được trung tính (với các ví dụ trên). Nếu dư acid, dung dịch vẫn làm quỳ hoá đỏ; dư base thì quỳ hoá xanh.</p>\n  <div class=\"eg\"><b>Ví dụ.</b> Thuốc chữa đau dạ dày (thừa acid) chứa magnesium hydroxide hoặc aluminium hydroxide, là các base yếu, trung hoà bớt HCl dư trong dạ dày. Chỉ dùng thuốc theo chỉ dẫn của bác sĩ.</div>\n </div>\n <div class=\"sec\"><h3>Thang pH và chất chỉ thị</h3>\n  <p><span class=\"mark\">pH cho biết dung dịch có tính acid, base hay trung tính</span>, thường có giá trị từ 0 đến 14:</p>\n  <div class=\"fbox\"><span class=\"f\">pH &lt; 7: acid</span><span class=\"f\">pH = 7: trung tính</span><span class=\"f\">pH &gt; 7: base</span></div>\n  <p>pH càng nhỏ thì tính acid càng mạnh; pH càng lớn thì tính base càng mạnh.</p>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Thang pH từ 0 đến 14 với vị trí một số chất quen thuộc\">\n   <line x1=\"60\" y1=\"43\" x2=\"60\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"60\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">chanh</text><line x1=\"76\" y1=\"61\" x2=\"76\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"76\" y=\"58\" class=\"svgm\" text-anchor=\"middle\">giấm</text><line x1=\"140\" y1=\"61\" x2=\"140\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"140\" y=\"58\" class=\"svgm\" text-anchor=\"middle\">nước</text><line x1=\"161\" y1=\"25\" x2=\"161\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"161\" y=\"22\" class=\"svgm\" text-anchor=\"middle\">baking soda</text><line x1=\"188\" y1=\"61\" x2=\"188\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"188\" y=\"58\" class=\"svgm\" text-anchor=\"middle\">xà phòng</text><line x1=\"220\" y1=\"43\" x2=\"220\" y2=\"70\" stroke=\"var(--muted)\"/><text x=\"220\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">nước vôi</text>\n   <rect x=\"20\" y=\"70\" width=\"16\" height=\"22\" fill=\"#e8202a\"/><rect x=\"36\" y=\"70\" width=\"16\" height=\"22\" fill=\"#ee3d2c\"/><rect x=\"52\" y=\"70\" width=\"16\" height=\"22\" fill=\"#f36f2b\"/><rect x=\"68\" y=\"70\" width=\"16\" height=\"22\" fill=\"#f7a42a\"/><rect x=\"84\" y=\"70\" width=\"16\" height=\"22\" fill=\"#fbd12e\"/><rect x=\"100\" y=\"70\" width=\"16\" height=\"22\" fill=\"#e5e02f\"/><rect x=\"116\" y=\"70\" width=\"16\" height=\"22\" fill=\"#b6d63a\"/><rect x=\"132\" y=\"70\" width=\"16\" height=\"22\" fill=\"#6fbe44\"/><rect x=\"148\" y=\"70\" width=\"16\" height=\"22\" fill=\"#3aa64a\"/><rect x=\"164\" y=\"70\" width=\"16\" height=\"22\" fill=\"#2a9a72\"/><rect x=\"180\" y=\"70\" width=\"16\" height=\"22\" fill=\"#2384a8\"/><rect x=\"196\" y=\"70\" width=\"16\" height=\"22\" fill=\"#2c66b0\"/><rect x=\"212\" y=\"70\" width=\"16\" height=\"22\" fill=\"#3b4ba3\"/><rect x=\"228\" y=\"70\" width=\"16\" height=\"22\" fill=\"#4b3b94\"/><rect x=\"244\" y=\"70\" width=\"16\" height=\"22\" fill=\"#5a2d82\"/><rect x=\"20\" y=\"70\" width=\"240\" height=\"22\" fill=\"none\" stroke=\"var(--ink)\"/>\n   <text x=\"28\" y=\"106\" class=\"svgt\" text-anchor=\"middle\">0</text><text x=\"140\" y=\"106\" class=\"svgt\" text-anchor=\"middle\">7</text><text x=\"252\" y=\"106\" class=\"svgt\" text-anchor=\"middle\">14</text>\n   <text x=\"20\" y=\"126\" class=\"svgm\">← acid mạnh dần</text><text x=\"140\" y=\"126\" class=\"svgm\" text-anchor=\"middle\">trung tính</text><text x=\"260\" y=\"126\" class=\"svgm\" text-anchor=\"end\">base mạnh dần →</text>\n   <text x=\"140\" y=\"152\" class=\"svgm\" text-anchor=\"middle\">Màu theo giấy chỉ thị vạn năng</text>\n  </svg>\n  <div class=\"tbl\"><table><tr><th>Chất chỉ thị</th><th>Acid</th><th>Trung tính</th><th>Base</th></tr>\n  <tr><td>Quỳ tím</td><td>Đỏ</td><td>Tím</td><td>Xanh</td></tr>\n  <tr><td>Phenolphthalein</td><td>Không màu</td><td>Không màu</td><td>Hồng</td></tr>\n  <tr><td>Nước bắp cải tím</td><td>Đỏ, hồng</td><td>Tím</td><td>Xanh lam, xanh lục</td></tr></table></div>\n  <p class=\"muted\">Một số giá trị pH gần đúng: dịch vị dạ dày 1,5 – 3,5; nước chanh khoảng 2; nước ngọt có ga khoảng 2,5 – 3; cà phê khoảng 5; nước mưa sạch khoảng 5,6; máu 7,35 – 7,45; nước biển khoảng 8; xà phòng 9 – 10; nước vôi trong khoảng 12.</p>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🐟</span>Khử mùi tanh cá</b>Mùi tanh của cá do các chất có tính base gây ra. Vắt chanh hoặc rửa bằng giấm loãng sẽ trung hoà chúng, mùi tanh giảm hẳn.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌾</span>Bón vôi cho đất chua</b>Đất chua (pH thấp) làm cây còi cọc. Nông dân rải vôi để trung hoà bớt acid trong đất, đưa pH về mức cây ưa thích.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌧️</span>Mưa acid</b>Khí thải từ nhà máy, xe cộ (sulfur dioxide, nitrogen oxide) tan vào nước mưa làm pH xuống dưới 5,6. Mưa acid làm chết cây, ăn mòn tượng đá vôi, cầu sắt.</div>\n   <div class=\"app\"><b><span class=\"ico\">🦷</span>Sâu răng</b>Vi khuẩn trong miệng biến đường thành acid. Khi pH trong miệng xuống dưới khoảng 5,5, men răng bắt đầu bị hoà tan. Đánh răng, súc miệng sau khi ăn đồ ngọt giúp bảo vệ răng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧴</span>Mỹ phẩm hợp pH da</b>Da khoẻ có pH hơi acid, khoảng 4,5 – 5,5. Sữa rửa mặt dịu nhẹ thường có pH gần như vậy; xà phòng cục có pH 9 – 10 nên rửa mặt nhiều dễ bị khô da.</div>\n   <div class=\"app\"><b><span class=\"ico\">⚠️</span>Không trộn chất tẩy rửa</b>Nước tẩy javel trộn với chất tẩy bồn cầu chứa acid sẽ sinh khí chlorine rất độc. Mỗi lần chỉ dùng một loại, đọc kĩ nhãn, mở cửa thông thoáng.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Ấm đun nước lâu ngày có lớp cặn trắng. Vì sao ngâm giấm thì sạch?</summary>Cặn trắng chủ yếu là calcium carbonate từ nước cứng. Acetic acid trong giấm tác dụng với calcium carbonate tạo muối tan, nước và khí carbon dioxide (thấy sủi bọt nhẹ), nên cặn tan dần.</details>\n  <details class=\"wq\"><summary>Uống nhiều nước ngọt có ga có hại cho răng không?</summary>Có. Nước ngọt có ga có pH khoảng 2,5 – 3, lại nhiều đường cho vi khuẩn tạo thêm acid. Men răng bị hoà tan dần. Nên hạn chế, uống bằng ống hút và súc miệng bằng nước lọc sau khi uống.</details>\n  <details class=\"wq\"><summary>Bị kiến cắn thấy buốt rát. Vì sao?</summary>Nọc kiến có formic acid gây rát. Hãy rửa ngay chỗ bị cắn bằng nước sạch và xà phòng (xà phòng có tính base nhẹ). Nếu sưng to, khó thở thì phải đi khám ngay.</details>\n  <details class=\"wq\"><summary>Thử ở nhà: chất chỉ thị bắp cải tím</summary>Nhờ người lớn thái nhỏ vài lá bắp cải tím, ngâm nước nóng 15 phút rồi lọc lấy nước màu tím. Rót ra nhiều cốc nhỏ, lần lượt thêm: nước chanh, giấm, nước lọc, dung dịch baking soda, nước xà phòng. Màu chuyển từ đỏ hồng (acid) qua tím (trung tính) đến xanh (base). Chỉ dùng chất ăn được và xà phòng; <b>không</b> thử với nước tẩy javel, nước thông cống.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để đặt các chất trong nhà lên thang pH, xem màu quỳ tím, phenolphthalein, và nhỏ dần base vào acid để xem pH thay đổi.</p>",
  "formulas": [
   [
    "Acid",
    "Làm quỳ tím hoá đỏ"
   ],
   [
    "Base (kiềm)",
    "Quỳ tím hoá xanh, phenolphthalein hoá hồng"
   ],
   [
    "Acid + kim loại",
    "Muối + H₂ (vd Fe + 2HCl → FeCl₂ + H₂)"
   ],
   [
    "Phản ứng trung hoà",
    "Acid + base → muối + nước"
   ],
   [
    "Thang pH",
    "pH < 7 acid; = 7 trung tính; > 7 base"
   ],
   [
    "pH càng nhỏ",
    "Tính acid càng mạnh"
   ],
   [
    "An toàn",
    "Không trộn nước tẩy javel với chất tẩy chứa acid"
   ]
  ],
  "quiz": [
   {
    "q": "Dung dịch nào làm quỳ tím hoá xanh?",
    "o": [
     "Nước vôi trong",
     "Giấm ăn",
     "Nước chanh",
     "Nước cất"
    ],
    "why": "Nước vôi trong là dung dịch calcium hydroxide, một kiềm."
   },
   {
    "q": "Một dung dịch có pH = 3. Dung dịch đó:",
    "o": [
     "Có tính acid",
     "Có tính base",
     "Trung tính",
     "Là kiềm mạnh"
    ],
    "why": "pH &lt; 7 là môi trường acid."
   },
   {
    "q": "Cho kẽm vào dung dịch hydrochloric acid, sản phẩm là:",
    "o": [
     "ZnCl<sub>2</sub> và H<sub>2</sub>",
     "ZnCl<sub>2</sub> và H<sub>2</sub>O",
     "ZnH<sub>2</sub> và Cl<sub>2</sub>",
     "ZnO và H<sub>2</sub>"
    ],
    "why": "Acid + kim loại → muối + hydrogen: Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>."
   },
   {
    "q": "Nhỏ phenolphthalein vào dung dịch NaOH, dung dịch có màu:",
    "o": [
     "Hồng",
     "Không màu",
     "Xanh",
     "Vàng"
    ],
    "why": "Phenolphthalein chuyển hồng trong môi trường base."
   },
   {
    "q": "Để cải tạo đất chua, người ta thường bón:",
    "o": [
     "Vôi",
     "Phân urea",
     "Giấm",
     "Muối ăn"
    ],
    "why": "Vôi có tính base, trung hoà bớt acid trong đất."
   },
   {
    "q": "Base nào dưới đây là kiềm?",
    "o": [
     "NaOH",
     "Cu(OH)<sub>2</sub>",
     "Fe(OH)<sub>3</sub>",
     "Mg(OH)<sub>2</sub>"
    ],
    "why": "Kiềm là base tan trong nước. Cu(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>, Mg(OH)<sub>2</sub> không tan."
   },
   {
    "q": "Không được trộn nước tẩy javel với chất tẩy bồn cầu chứa acid vì:",
    "o": [
     "Sinh ra khí chlorine rất độc",
     "Hai chất làm mất tác dụng của nhau, không gây hại",
     "Hỗn hợp đông cứng lại",
     "Chỉ tạo ra nước và muối"
    ],
    "why": "Phản ứng giải phóng khí chlorine, gây bỏng đường hô hấp."
   },
   {
    "q": "Trong các chất: nước chanh (pH ≈ 2), nước ngọt có ga (pH ≈ 3), cà phê (pH ≈ 5), nước biển (pH ≈ 8). Chất có tính acid mạnh nhất là:",
    "o": [
     "Nước chanh",
     "Nước ngọt có ga",
     "Cà phê",
     "Nước biển"
    ],
    "why": "pH càng nhỏ, tính acid càng mạnh. Nước biển có pH &gt; 7 nên có tính base nhẹ."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Ba lọ mất nhãn",
    "d": "Thang pH và chỉ thị",
    "q": "Có ba lọ không nhãn đựng ba dung dịch trong suốt: hydrochloric acid, sodium hydroxide, sodium chloride. Chỉ dùng giấy quỳ tím, hãy nhận biết từng lọ. Trình bày cách làm.",
    "hint": "Mỗi dung dịch làm quỳ tím đổi sang màu khác nhau.",
    "sol": "Dùng ống hút sạch lấy mỗi lọ một giọt nhỏ lên mẩu quỳ tím:<br>• Quỳ hoá <b>đỏ</b>: hydrochloric acid.<br>• Quỳ hoá <b>xanh</b>: sodium hydroxide.<br>• Quỳ <b>không đổi màu</b>: sodium chloride (trung tính).<br>Tuyệt đối không ngửi trực tiếp, không nếm để nhận biết hoá chất.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 1,
    "t": "Đinh sắt trong acid",
    "d": "Tính chất acid, base",
    "q": "Cho 5,6 g iron tác dụng hết với dung dịch hydrochloric acid dư. Viết PTHH và tính thể tích khí hydrogen thu được ở đkc.",
    "hint": "Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>.",
    "sol": "Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>↑<br>n<sub>Fe</sub> = 5,6/56 = 0,1 mol ⇒ n<sub>H<sub>2</sub></sub> = 0,1 mol.<br>V = 0,1 × 24,79 = <b>2,479 L</b>.",
    "ans": 2.479,
    "unit": "L",
    "tol": 0.01
   },
   {
    "lv": 2,
    "t": "Trung hoà vừa đủ",
    "d": "Phản ứng trung hoà",
    "q": "Cần bao nhiêu mL dung dịch HCl 1 M để trung hoà vừa đủ 200 mL dung dịch NaOH 0,5 M? Sau phản ứng nhỏ phenolphthalein vào thì dung dịch có màu gì?",
    "hint": "NaOH + HCl → NaCl + H<sub>2</sub>O, tỉ lệ 1 : 1.",
    "sol": "n<sub>NaOH</sub> = 0,2 × 0,5 = 0,1 mol ⇒ n<sub>HCl</sub> = 0,1 mol.<br>V = 0,1 / 1 = 0,1 L = <b>100 mL</b>.<br>Dung dịch sau chỉ có NaCl, trung tính: phenolphthalein <b>không màu</b>.",
    "ans": 100,
    "unit": "mL",
    "tol": 0.5
   },
   {
    "lv": 2,
    "t": "Viên thuốc dạ dày",
    "d": "Phản ứng trung hoà",
    "q": "Một viên thuốc kháng acid chứa 0,29 g magnesium hydroxide. Viên thuốc trung hoà được tối đa bao nhiêu mL dịch vị có nồng độ HCl 0,05 M?",
    "hint": "Mg(OH)<sub>2</sub> + 2HCl → MgCl<sub>2</sub> + 2H<sub>2</sub>O. M<sub>Mg(OH)<sub>2</sub></sub> = 58.",
    "sol": "n<sub>Mg(OH)<sub>2</sub></sub> = 0,29 / 58 = 0,005 mol ⇒ n<sub>HCl</sub> = 0,01 mol.<br>V = 0,01 / 0,05 = 0,2 L = <b>200 mL</b>.<br>Thuốc chỉ làm giảm triệu chứng; dùng nhiều sẽ làm dạ dày thiếu acid để tiêu hoá. Phải dùng theo chỉ dẫn của bác sĩ.",
    "ans": 200,
    "unit": "mL",
    "tol": 1
   },
   {
    "lv": 2,
    "t": "Bảng màu bắp cải tím",
    "d": "Thang pH và chỉ thị",
    "q": "An dùng nước bắp cải tím thử năm chất: nước chanh (pH ≈ 2), giấm (pH ≈ 3), nước lọc (pH ≈ 7), dung dịch baking soda (pH ≈ 8,3), nước xà phòng (pH ≈ 10). Sắp xếp các chất theo tính acid giảm dần, dự đoán màu của nước bắp cải trong mỗi cốc. Nếu nhỏ từ từ giấm vào cốc baking soda cho đến dư thì màu thay đổi thế nào?",
    "hint": "Bắp cải tím: đỏ hồng trong acid, tím khi trung tính, xanh trong base (base càng mạnh càng ngả xanh lục).",
    "sol": "Tính acid giảm dần: chanh &gt; giấm &gt; nước lọc &gt; baking soda &gt; xà phòng.<br>Màu dự đoán: chanh đỏ hồng; giấm hồng; nước lọc tím; baking soda xanh lam; xà phòng xanh lục.<br>Nhỏ giấm vào baking soda: sủi bọt CO<sub>2</sub>, pH giảm dần, màu chuyển từ xanh sang tím, khi dư giấm thì chuyển hồng.",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 2,
    "t": "Tẩy cặn ấm bằng giấm",
    "d": "Tính chất acid, base",
    "q": "Ấm đun nước có 5 g cặn, coi như toàn bộ là calcium carbonate. Phản ứng: CaCO<sub>3</sub> + 2CH<sub>3</sub>COOH → (CH<sub>3</sub>COO)<sub>2</sub>Ca + H<sub>2</sub>O + CO<sub>2</sub>. Tính khối lượng giấm ăn chứa 5% acetic acid tối thiểu cần dùng để hoà tan hết cặn.",
    "hint": "M<sub>CH<sub>3</sub>COOH</sub> = 60. Tính khối lượng acid nguyên chất trước, rồi chia cho 5%.",
    "sol": "n<sub>CaCO<sub>3</sub></sub> = 5/100 = 0,05 mol ⇒ n<sub>acid</sub> = 0,1 mol ⇒ m<sub>acid</sub> = 0,1 × 60 = 6 g.<br>m<sub>giấm</sub> = 6 / 5% = <b>120 g</b>.<br>Thực tế nên dùng dư giấm và ngâm vài giờ, rồi tráng ấm thật sạch trước khi đun nước uống.",
    "ans": 120,
    "unit": "g",
    "tol": 0.5
   },
   {
    "lv": 3,
    "t": "Trộn acid với base không vừa đủ",
    "d": "Phản ứng trung hoà",
    "q": "Trộn 100 mL dung dịch HCl 1 M với 100 mL dung dịch NaOH 0,8 M. Dung dịch sau phản ứng làm quỳ tím đổi màu gì? Tính khối lượng muối NaCl tạo thành.",
    "hint": "So sánh số mol hai chất. Chất thiếu phản ứng hết, tính muối theo chất đó.",
    "sol": "n<sub>HCl</sub> = 0,1 mol; n<sub>NaOH</sub> = 0,08 mol. Tỉ lệ 1 : 1 ⇒ NaOH hết, HCl dư 0,02 mol.<br>Dung dịch còn acid dư: quỳ tím hoá <b>đỏ</b>.<br>n<sub>NaCl</sub> = 0,08 mol ⇒ m = 0,08 × 58,5 = <b>4,68 g</b>.",
    "ans": 4.68,
    "unit": "g",
    "tol": 0.02
   },
   {
    "lv": 3,
    "t": "Hỗn hợp nhôm và sắt",
    "d": "Tính chất acid, base",
    "q": "Cho 8,3 g hỗn hợp aluminium và iron tác dụng hết với dung dịch HCl dư, thu được 6,1975 L khí hydrogen (đkc). Tính khối lượng aluminium trong hỗn hợp.",
    "hint": "2Al + 6HCl → 2AlCl<sub>3</sub> + 3H<sub>2</sub>; Fe + 2HCl → FeCl<sub>2</sub> + H<sub>2</sub>. Gọi số mol Al là a, Fe là b, lập hệ hai phương trình.",
    "sol": "n<sub>H<sub>2</sub></sub> = 6,1975 / 24,79 = 0,25 mol.<br>27a + 56b = 8,3 (khối lượng); 1,5a + b = 0,25 (số mol H<sub>2</sub>).<br>Từ phương trình sau: b = 0,25 − 1,5a. Thế vào: 27a + 14 − 84a = 8,3 ⇒ 57a = 5,7 ⇒ a = 0,1; b = 0,1.<br>m<sub>Al</sub> = 0,1 × 27 = <b>2,7 g</b>; m<sub>Fe</sub> = 5,6 g.",
    "ans": 2.7,
    "unit": "g",
    "tol": 0.02
   }
  ],
  "published": true,
  "subject": "hoa-8"
 },
 {
  "id": "h7",
  "position": 7,
  "title": "Oxide, muối và phân bón hoá học",
  "icon": "🌱",
  "lab": "hoa_fert",
  "theory": "<div class=\"sec\"><h3>Oxide và cách gọi tên</h3>\n  <p><span class=\"mark\">Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen.</span> Ví dụ: CaO, CO<sub>2</sub>, Fe<sub>2</sub>O<sub>3</sub>, SO<sub>2</sub>.</p>\n  <ul><li>Oxide của kim loại: <b>tên kim loại (hoá trị, nếu kim loại có nhiều hoá trị) + oxide</b>. CaO: calcium oxide; Fe<sub>2</sub>O<sub>3</sub>: iron(III) oxide; FeO: iron(II) oxide; CuO: copper(II) oxide.</li>\n  <li>Oxide của phi kim: dùng tiền tố chỉ số nguyên tử (mono = 1, di = 2, tri = 3, tetra = 4, penta = 5). CO: carbon monoxide; CO<sub>2</sub>: carbon dioxide; SO<sub>3</sub>: sulfur trioxide; P<sub>2</sub>O<sub>5</sub>: diphosphorus pentoxide.</li></ul>\n </div>\n <div class=\"sec\"><h3>Phân loại oxide</h3>\n  <div class=\"tbl\"><table><tr><th>Loại</th><th>Ví dụ</th><th>Tính chất</th></tr>\n  <tr><td>Oxide base</td><td>CaO, Na<sub>2</sub>O, CuO, Fe<sub>2</sub>O<sub>3</sub></td><td>Tác dụng với acid → muối + nước</td></tr>\n  <tr><td>Oxide acid</td><td>CO<sub>2</sub>, SO<sub>2</sub>, SO<sub>3</sub>, P<sub>2</sub>O<sub>5</sub></td><td>Tác dụng với base → muối + nước</td></tr>\n  <tr><td>Oxide lưỡng tính</td><td>Al<sub>2</sub>O<sub>3</sub>, ZnO</td><td>Tác dụng với cả acid và base</td></tr>\n  <tr><td>Oxide trung tính</td><td>CO, NO</td><td>Không tác dụng với acid, base</td></tr></table></div>\n  <p>Ví dụ: CuO + H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + H<sub>2</sub>O; CO<sub>2</sub> + Ca(OH)<sub>2</sub> → CaCO<sub>3</sub>↓ + H<sub>2</sub>O.</p>\n  <p>Một số oxide tác dụng với nước: vôi sống CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub> (tôi vôi); SO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>3</sub> (một nguyên nhân gây mưa acid).</p>\n  <div class=\"note\"><b>Mẹo nhớ:</b> oxide của kim loại thường là oxide base; oxide của phi kim thường là oxide acid. Ngoại lệ cần nhớ: Al<sub>2</sub>O<sub>3</sub>, ZnO lưỡng tính; CO, NO trung tính.</div>\n </div>\n <div class=\"sec\"><h3>Muối</h3>\n  <p><span class=\"mark\">Muối là hợp chất được tạo thành khi thay thế nguyên tử hydrogen trong acid bằng ion kim loại (hoặc ion ammonium NH<sub>4</sub><sup>+</sup>).</span></p>\n  <p><b>Tên gọi:</b> tên kim loại (hoá trị, nếu có nhiều hoá trị) + tên gốc acid.</p>\n  <div class=\"tbl\"><table><tr><th>Gốc acid</th><th>Tên</th><th>Ví dụ muối</th></tr>\n  <tr><td>Cl</td><td>chloride</td><td>NaCl: sodium chloride (muối ăn)</td></tr>\n  <tr><td>SO<sub>4</sub></td><td>sulfate</td><td>CuSO<sub>4</sub>: copper(II) sulfate</td></tr>\n  <tr><td>NO<sub>3</sub></td><td>nitrate</td><td>KNO<sub>3</sub>: potassium nitrate</td></tr>\n  <tr><td>CO<sub>3</sub></td><td>carbonate</td><td>CaCO<sub>3</sub>: calcium carbonate (đá vôi)</td></tr>\n  <tr><td>HCO<sub>3</sub></td><td>hydrogencarbonate</td><td>NaHCO<sub>3</sub>: sodium hydrogencarbonate (baking soda)</td></tr>\n  <tr><td>PO<sub>4</sub></td><td>phosphate</td><td>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>: calcium phosphate</td></tr></table></div>\n  <p><b>Tính tan:</b> muối của Na, K, ammonium và muối nitrate đều tan. Hầu hết muối chloride tan (trừ AgCl), hầu hết muối sulfate tan (trừ BaSO<sub>4</sub>, CaSO<sub>4</sub> ít tan). Hầu hết muối carbonate, phosphate không tan (trừ của Na, K, ammonium).</p>\n </div>\n <div class=\"sec\"><h3>Tính chất hoá học và điều chế muối</h3>\n  <ul><li><b>Muối + kim loại</b> → muối mới + kim loại mới: Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu (đinh sắt được phủ lớp đồng đỏ).</li>\n  <li><b>Muối + acid</b> → muối mới + acid mới: CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>↑.</li>\n  <li><b>Muối + base</b> → muối mới + base mới: CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ (xanh) + Na<sub>2</sub>SO<sub>4</sub>.</li>\n  <li><b>Muối + muối</b> → hai muối mới: BaCl<sub>2</sub> + Na<sub>2</sub>SO<sub>4</sub> → BaSO<sub>4</sub>↓ (trắng) + 2NaCl.</li></ul>\n  <div class=\"note\"><b>Điều kiện:</b> phản ứng giữa các dung dịch muối với acid, base, muối chỉ xảy ra khi sản phẩm có <b>chất kết tủa</b> hoặc <b>chất khí</b> (hoặc nước). Trộn dung dịch NaCl với KNO<sub>3</sub>: không có kết tủa, không có khí, nên không phản ứng.</div>\n  <p><b>Điều chế muối:</b> acid + base; acid + oxide base; acid + kim loại; acid + muối; oxide acid + base; muối + muối; kim loại + phi kim (2Na + Cl<sub>2</sub> → 2NaCl).</p>\n </div>\n <div class=\"sec\"><h3>Phân bón hoá học</h3>\n  <p>Cây cần nhiều nhất ba nguyên tố dinh dưỡng: <b>N, P, K</b>.</p>\n  <div class=\"tbl\"><table><tr><th>Loại phân</th><th>Ví dụ</th><th>Vai trò với cây</th></tr>\n  <tr><td>Phân đạm (N)</td><td>Urea (NH<sub>2</sub>)<sub>2</sub>CO, ammonium nitrate NH<sub>4</sub>NO<sub>3</sub>, ammonium sulfate (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></td><td>Thân lá xanh tốt, lớn nhanh. Rau ăn lá cần nhiều.</td></tr>\n  <tr><td>Phân lân (P)</td><td>Superphosphate (chứa Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>), phân lân nung chảy</td><td>Phát triển rễ, ra hoa, kết quả.</td></tr>\n  <tr><td>Phân kali (K)</td><td>KCl, K<sub>2</sub>SO<sub>4</sub></td><td>Củ, quả to và ngọt; cây cứng, chống chịu sâu bệnh, rét.</td></tr>\n  <tr><td>Phân hỗn hợp</td><td>NPK 16-16-8, 20-20-15…</td><td>Cung cấp đồng thời N, P, K.</td></tr></table></div>\n  <p>Độ dinh dưỡng: phân đạm tính theo <b>% N</b>; phân lân theo <b>% P<sub>2</sub>O<sub>5</sub></b>; phân kali theo <b>% K<sub>2</sub>O</b>. Bao NPK 16-16-8 chứa 16% N, 16% P<sub>2</sub>O<sub>5</sub>, 8% K<sub>2</sub>O theo khối lượng.</p>\n  <div class=\"fbox\"><span class=\"f\">%N = m<sub>N</sub> trong 1 mol chất / M × 100%</span></div>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Biểu đồ phần trăm khối lượng nitrogen trong các loại phân đạm\">\n   <text x=\"140\" y=\"16\" class=\"svgm\" text-anchor=\"middle\">% khối lượng N (tính cho chất nguyên chất)</text>\n   <line x1=\"118\" y1=\"22\" x2=\"118\" y2=\"146\" stroke=\"var(--ink)\"/>\n   <text x=\"112\" y=\"41\" class=\"svgt\" text-anchor=\"end\">Urea</text><rect x=\"118\" y=\"28\" width=\"116.7\" height=\"18\" rx=\"3\" fill=\"var(--ok)\" fill-opacity=\"0.75\"/><text x=\"238.7\" y=\"41\" class=\"svgt\">46,7%</text><text x=\"112\" y=\"71\" class=\"svgt\" text-anchor=\"end\">Ammonium nitrate</text><rect x=\"118\" y=\"58\" width=\"87.5\" height=\"18\" rx=\"3\" fill=\"var(--ok)\" fill-opacity=\"0.75\"/><text x=\"209.5\" y=\"71\" class=\"svgt\">35,0%</text><text x=\"112\" y=\"101\" class=\"svgt\" text-anchor=\"end\">Ammonium chloride</text><rect x=\"118\" y=\"88\" width=\"65.4\" height=\"18\" rx=\"3\" fill=\"var(--ok)\" fill-opacity=\"0.75\"/><text x=\"187.4\" y=\"101\" class=\"svgt\">26,2%</text><text x=\"112\" y=\"131\" class=\"svgt\" text-anchor=\"end\">Ammonium sulfate</text><rect x=\"118\" y=\"118\" width=\"53.0\" height=\"18\" rx=\"3\" fill=\"var(--ok)\" fill-opacity=\"0.75\"/><text x=\"175.0\" y=\"131\" class=\"svgt\">21,2%</text>\n   <text x=\"140\" y=\"162\" class=\"svgm\" text-anchor=\"middle\">(NH₂)₂CO · NH₄NO₃ · NH₄Cl · (NH₄)₂SO₄</text>\n  </svg>\n  <div class=\"eg\"><b>Ví dụ.</b> Urea (NH<sub>2</sub>)<sub>2</sub>CO có M = 60, trong 1 phân tử có 2 nguyên tử N: %N = 28/60 × 100% ≈ 46,7%. Đây là phân đạm có hàm lượng N cao nhất trong các loại thường dùng.</div>\n </div>\n <div class=\"sec\"><h3>Dùng phân bón an toàn</h3>\n  <ul><li>Nguyên tắc \"4 đúng\": <b>đúng loại, đúng lúc, đúng liều lượng, đúng cách</b>.</li>\n  <li>Bón thừa đạm: rau tích nhiều nitrate có hại cho sức khoẻ; phân trôi xuống ao hồ làm tảo phát triển quá mức, nước thiếu oxygen, cá chết.</li>\n  <li>Không trộn phân đạm ammonium với vôi: phản ứng giải phóng khí ammonia, mất đạm.</li>\n  <li>Thu hoạch rau sau khi bón đủ thời gian cách li ghi trên bao bì. Khi bón phải đeo găng tay, khẩu trang, rửa tay sạch sau khi bón. Rửa rau kĩ dưới vòi nước trước khi nấu.</li></ul>\n </div>\n <div class=\"sec real\"><h3>Ứng dụng trong đời sống</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏠</span>Vôi quét tường</b>Nước vôi (calcium hydroxide) quét lên tường hấp thụ khí carbon dioxide trong không khí tạo lớp calcium carbonate trắng, cứng. Đó là phản ứng của base với oxide acid.</div>\n   <div class=\"app\"><b><span class=\"ico\">🩻</span>Uống \"sữa\" barium để chụp X-quang</b>Barium sulfate không tan trong nước và cả trong dịch vị, nên không độc, lại cản tia X giúp bác sĩ nhìn rõ dạ dày, ruột. Trong khi đó barium chloride tan được nên rất độc. Tính tan quyết định sự an toàn!</div>\n   <div class=\"app\"><b><span class=\"ico\">🧂</span>Muối iod</b>Muối ăn được bổ sung một lượng nhỏ muối potassium iodide hoặc potassium iodate để phòng bệnh bướu cổ do thiếu iodine.</div>\n   <div class=\"app\"><b><span class=\"ico\">🦴</span>Bó bột, viết phấn</b>Thạch cao (calcium sulfate ngậm nước) trộn với nước rồi đông cứng lại, dùng để bó bột khi gãy xương và làm phấn viết bảng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥬</span>Vườn rau nhà em</b>Rau ăn lá (cải, muống) cần nhiều đạm; cà chua, ớt cần lân và kali để ra hoa, đậu quả; khoai, cà rốt cần kali để củ to. Chọn đúng phân, đúng lúc giúp cây tốt mà không phí.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌊</span>Hồ nước nở hoa tảo</b>Phân bón thừa trôi xuống hồ làm tảo phát triển dày đặc (phú dưỡng). Tảo chết phân huỷ tiêu tốn oxygen, cá chết hàng loạt, nước bốc mùi.</div>\n  </div>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vôi sống để lâu ngoài không khí bị \"chết\", không dùng được nữa. Vì sao?</summary>Calcium oxide là oxide base, hút hơi nước tạo calcium hydroxide, rồi tác dụng với carbon dioxide trong không khí tạo calcium carbonate. Cục vôi biến thành đá vôi, không còn tác dụng tôi vôi, khử chua. Vì vậy vôi sống phải để trong thùng kín.</details>\n  <details class=\"wq\"><summary>Thả đinh sắt sạch vào dung dịch copper(II) sulfate màu xanh, một lúc sau đinh phủ lớp đỏ. Vì sao?</summary>Sắt hoạt động mạnh hơn đồng nên đẩy đồng ra khỏi muối: Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu. Lớp đỏ là đồng kim loại bám trên đinh, màu xanh của dung dịch nhạt dần. Không nên đựng dung dịch copper(II) sulfate (thuốc trừ nấm) trong xô sắt vì lí do này.</details>\n  <details class=\"wq\"><summary>Vì sao lá cây vàng úa, còi cọc thường là do thiếu đạm?</summary>Nitrogen là thành phần của protein và chất diệp lục, giúp lá xanh. Thiếu đạm, cây không tạo đủ diệp lục nên lá vàng, cây chậm lớn. Nhưng bón quá nhiều đạm thì cây lốp, yếu, dễ sâu bệnh, rau lại tích nitrate.</details>\n </div>\n <p class=\"muted\">Sang tab Thí nghiệm ảo để chọn loại phân bón, khối lượng và so sánh lượng N, P, K mà mỗi loại cung cấp.</p>",
  "formulas": [
   [
    "Oxide base + acid",
    "Muối + nước (vd CuO + H₂SO₄ → CuSO₄ + H₂O)"
   ],
   [
    "Oxide acid + base",
    "Muối + nước (vd CO₂ + Ca(OH)₂ → CaCO₃ + H₂O)"
   ],
   [
    "Oxide lưỡng tính / trung tính",
    "Al₂O₃, ZnO / CO, NO"
   ],
   [
    "Điều kiện phản ứng trao đổi",
    "Sản phẩm có kết tủa, khí hoặc nước"
   ],
   [
    "Độ dinh dưỡng",
    "Đạm: %N; lân: %P₂O₅; kali: %K₂O"
   ],
   [
    "%N trong phân",
    "%N = mN trong 1 mol / M × 100%"
   ],
   [
    "Urea (NH₂)₂CO",
    "≈ 46,7% N"
   ],
   [
    "NPK 16-16-8",
    "16% N, 16% P₂O₅, 8% K₂O"
   ]
  ],
  "quiz": [
   {
    "q": "Chất nào là oxide acid?",
    "o": [
     "CO<sub>2</sub>",
     "CaO",
     "Fe<sub>2</sub>O<sub>3</sub>",
     "Na<sub>2</sub>O"
    ],
    "why": "CO<sub>2</sub> là oxide của phi kim, tác dụng với base tạo muối và nước."
   },
   {
    "q": "Tên gọi đúng của Fe<sub>2</sub>O<sub>3</sub> là:",
    "o": [
     "Iron(III) oxide",
     "Iron(II) oxide",
     "Iron(III) oxygen",
     "Triiron dioxide"
    ],
    "why": "Fe có hoá trị III trong Fe<sub>2</sub>O<sub>3</sub>, nên đọc là iron(III) oxide."
   },
   {
    "q": "Muối nào <b>không</b> tan trong nước?",
    "o": [
     "BaSO<sub>4</sub>",
     "NaCl",
     "KNO<sub>3</sub>",
     "CuSO<sub>4</sub>"
    ],
    "why": "BaSO<sub>4</sub> là kết tủa trắng. Muối của Na, K và muối nitrate đều tan."
   },
   {
    "q": "Phân đạm nào có phần trăm khối lượng nitrogen cao nhất?",
    "o": [
     "Urea (NH<sub>2</sub>)<sub>2</sub>CO",
     "Ammonium nitrate NH<sub>4</sub>NO<sub>3</sub>",
     "Ammonium sulfate (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>",
     "Ammonium chloride NH<sub>4</sub>Cl"
    ],
    "why": "Urea ≈ 46,7%; ammonium nitrate 35%; ammonium chloride ≈ 26,2%; ammonium sulfate ≈ 21,2%."
   },
   {
    "q": "Trên bao phân bón ghi NPK 20-20-15. Con số đó cho biết:",
    "o": [
     "Phân chứa 20% N, 20% P<sub>2</sub>O<sub>5</sub> và 15% K<sub>2</sub>O theo khối lượng",
     "Mỗi bao có 20 kg N, 20 kg P, 15 kg K",
     "Phân chứa 20% N, 20% P và 15% K",
     "Tỉ lệ số mol N : P : K là 20 : 20 : 15"
    ],
    "why": "Quy ước: đạm tính theo %N, lân theo %P<sub>2</sub>O<sub>5</sub>, kali theo %K<sub>2</sub>O."
   },
   {
    "q": "Trộn hai dung dịch nào sau đây thì <b>không</b> xảy ra phản ứng?",
    "o": [
     "NaCl và KNO<sub>3</sub>",
     "BaCl<sub>2</sub> và Na<sub>2</sub>SO<sub>4</sub>",
     "CuSO<sub>4</sub> và NaOH",
     "Na<sub>2</sub>CO<sub>3</sub> và HCl"
    ],
    "why": "Nếu trao đổi thì tạo NaNO<sub>3</sub> và KCl, đều tan, không có kết tủa hay khí nên không phản ứng. Các cặp kia tạo BaSO<sub>4</sub>↓, Cu(OH)<sub>2</sub>↓, khí CO<sub>2</sub>."
   },
   {
    "q": "Al<sub>2</sub>O<sub>3</sub> thuộc loại oxide nào?",
    "o": [
     "Oxide lưỡng tính",
     "Oxide base",
     "Oxide acid",
     "Oxide trung tính"
    ],
    "why": "Al<sub>2</sub>O<sub>3</sub> tác dụng được với cả acid và base."
   },
   {
    "q": "Thả đinh sắt sạch vào dung dịch copper(II) sulfate. Hiện tượng là:",
    "o": [
     "Có lớp kim loại màu đỏ bám trên đinh, màu xanh của dung dịch nhạt dần",
     "Không có hiện tượng gì",
     "Sủi bọt khí hydrogen mạnh",
     "Đinh tan hết, xuất hiện kết tủa trắng"
    ],
    "why": "Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu. Đồng màu đỏ bám vào đinh."
   }
  ],
  "ex": [
   {
    "lv": 1,
    "t": "Phân loại và gọi tên oxide",
    "d": "Oxide",
    "q": "Phân loại và gọi tên các oxide sau: CaO, SO<sub>2</sub>, Al<sub>2</sub>O<sub>3</sub>, CO, P<sub>2</sub>O<sub>5</sub>, CuO, Fe<sub>2</sub>O<sub>3</sub>, ZnO.",
    "hint": "Oxide kim loại thường là oxide base; oxide phi kim thường là oxide acid. Nhớ hai oxide lưỡng tính và một oxide trung tính trong danh sách.",
    "sol": "Oxide base: CaO (calcium oxide), CuO (copper(II) oxide), Fe<sub>2</sub>O<sub>3</sub> (iron(III) oxide).<br>Oxide acid: SO<sub>2</sub> (sulfur dioxide), P<sub>2</sub>O<sub>5</sub> (diphosphorus pentoxide).<br>Oxide lưỡng tính: Al<sub>2</sub>O<sub>3</sub> (aluminium oxide), ZnO (zinc oxide).<br>Oxide trung tính: CO (carbon monoxide).",
    "ans": null,
    "unit": "",
    "tol": 0
   },
   {
    "lv": 1,
    "t": "Đạm trong ammonium nitrate",
    "d": "Phân bón và % dinh dưỡng",
    "q": "Tính phần trăm khối lượng nitrogen trong phân ammonium nitrate NH<sub>4</sub>NO<sub>3</sub> nguyên chất.",
    "hint": "Một phân tử có mấy nguyên tử N? Tính M trước.",
    "sol": "M = 14 + 4 + 14 + 48 = 80 g/mol. Có 2 nguyên tử N: m<sub>N</sub> = 28 g.<br>%N = 28/80 × 100% = <b>35%</b>.",
    "ans": 35,
    "unit": "%",
    "tol": 0.1
   },
   {
    "lv": 2,
    "t": "Bón urea cho ruộng rau",
    "d": "Phân bón và % dinh dưỡng",
    "q": "Một ruộng rau cải cần được cung cấp 14 kg nitrogen. Cần bón bao nhiêu kg urea (NH<sub>2</sub>)<sub>2</sub>CO, coi là nguyên chất?",
    "hint": "Cứ 60 kg urea có 28 kg N.",
    "sol": "M<sub>urea</sub> = 60, trong đó có 28 phần N.<br>m<sub>urea</sub> = 14 × 60 / 28 = <b>30 kg</b>.<br>Nên chia làm nhiều lần bón, không bón dồn một lúc để tránh rau tích nitrate và phân bị rửa trôi.",
    "ans": 30,
    "unit": "kg",
    "tol": 0.1
   },
   {
    "lv": 2,
    "t": "Bao NPK 16-16-8",
    "d": "Phân bón và % dinh dưỡng",
    "q": "Một bao phân NPK 16-16-8 nặng 50 kg. Tính khối lượng N, P<sub>2</sub>O<sub>5</sub>, K<sub>2</sub>O trong bao. Từ đó tính khối lượng nguyên tố kali (K) mà bao phân cung cấp.",
    "hint": "Khối lượng K<sub>2</sub>O = 50 × 8%. Trong 94 g K<sub>2</sub>O có 78 g K.",
    "sol": "N: 50 × 16% = 8 kg; P<sub>2</sub>O<sub>5</sub>: 8 kg; K<sub>2</sub>O: 50 × 8% = 4 kg.<br>M<sub>K<sub>2</sub>O</sub> = 94, chứa 78 phần K.<br>m<sub>K</sub> = 4 × 78/94 ≈ <b>3,32 kg</b>.",
    "ans": 3.32,
    "unit": "kg",
    "tol": 0.02
   },
   {
    "lv": 2,
    "t": "Kết tủa xanh",
    "d": "Muối và phản ứng trao đổi",
    "q": "Trộn dung dịch chứa 16 g copper(II) sulfate với dung dịch chứa 10 g sodium hydroxide. Viết PTHH, nêu hiện tượng và tính khối lượng kết tủa thu được.",
    "hint": "CuSO<sub>4</sub> + 2NaOH → Cu(OH)<sub>2</sub>↓ + Na<sub>2</sub>SO<sub>4</sub>. Kiểm tra chất nào hết.",
    "sol": "n<sub>CuSO<sub>4</sub></sub> = 16/160 = 0,1 mol; n<sub>NaOH</sub> = 10/40 = 0,25 mol.<br>0,1 mol CuSO<sub>4</sub> cần 0,2 mol NaOH &lt; 0,25 ⇒ CuSO<sub>4</sub> hết, NaOH dư.<br>Hiện tượng: xuất hiện kết tủa màu xanh lam.<br>n<sub>Cu(OH)<sub>2</sub></sub> = 0,1 mol ⇒ m = 0,1 × 98 = <b>9,8 g</b>.",
    "ans": 9.8,
    "unit": "g",
    "tol": 0.05
   },
   {
    "lv": 2,
    "t": "Tôi vôi để khử chua",
    "d": "Oxide",
    "q": "Để khử chua cho ruộng, người ta tôi 5,6 kg vôi sống (CaO) bằng nước dư. Viết PTHH và tính khối lượng vôi tôi Ca(OH)<sub>2</sub> thu được. Vì sao khi tôi vôi phải đứng xa, đeo kính?",
    "hint": "CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>. Tính theo kmol.",
    "sol": "CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub><br>n<sub>CaO</sub> = 5,6/56 = 0,1 kmol ⇒ n<sub>Ca(OH)<sub>2</sub></sub> = 0,1 kmol.<br>m = 0,1 × 74 = <b>7,4 kg</b>.<br>Phản ứng toả rất nhiều nhiệt, nước sôi bắn lên mang theo vôi (một base mạnh) có thể gây bỏng da, hỏng mắt.",
    "ans": 7.4,
    "unit": "kg",
    "tol": 0.05
   },
   {
    "lv": 3,
    "t": "Mua phân nào lợi hơn?",
    "d": "Phân bón và % dinh dưỡng",
    "q": "Cần bón 23 kg nitrogen. Cửa hàng có hai loại: urea ghi 46% N, giá 11 500 đồng/kg; ammonium sulfate ghi 21% N, giá 4 830 đồng/kg. Tính số tiền phải trả nếu chỉ dùng mỗi loại. Loại nào rẻ hơn và rẻ hơn bao nhiêu đồng? Ngoài giá, cần cân nhắc gì?",
    "hint": "Khối lượng phân = 23 / (%N). Rồi nhân với giá.",
    "sol": "Urea: 23 / 0,46 = 50 kg ⇒ 50 × 11 500 = 575 000 đồng.<br>Ammonium sulfate: 23 / 0,21 ≈ 109,5 kg ⇒ 109,5… × 4 830 = 529 000 đồng.<br>Ammonium sulfate rẻ hơn <b>46 000 đồng</b>.<br>Cân nhắc thêm: phải chở và rải lượng phân gấp hơn 2 lần; ammonium sulfate làm đất chua thêm (không hợp với đất đã chua), nhưng lại cung cấp thêm lưu huỳnh cho cây.",
    "ans": 46000,
    "unit": "đồng",
    "tol": 100
   },
   {
    "lv": 3,
    "t": "Độ tinh khiết của phân kali",
    "d": "Phân bón và % dinh dưỡng",
    "q": "Một loại phân kali chứa KCl và tạp chất không chứa kali. Trên bao ghi độ dinh dưỡng 60% K<sub>2</sub>O. Tính phần trăm khối lượng KCl trong loại phân này.",
    "hint": "Tính xem KCl nguyên chất ứng với bao nhiêu % K<sub>2</sub>O: 2KCl có cùng lượng K với 1 K<sub>2</sub>O.",
    "sol": "2 mol KCl (149 g) chứa 2 mol K, tương ứng 1 mol K<sub>2</sub>O (94 g).<br>KCl nguyên chất có độ dinh dưỡng 94/149 × 100% ≈ 63,09% K<sub>2</sub>O.<br>%KCl trong phân = 60 / 63,09 × 100% ≈ <b>95,1%</b>.",
    "ans": 95.1,
    "unit": "%",
    "tol": 0.2
   }
  ],
  "published": true,
  "subject": "hoa-8"
 }
];
