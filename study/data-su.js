/* Dữ liệu mẫu Lịch sử 8 (Lịch sử và Địa lí 8, Kết nối tri thức). Tạo bởi build_su.py */
window.DEFAULT_DATA = window.DEFAULT_DATA || {};
window.DEFAULT_DATA['su-8'] = [
 {
  "id": "l1",
  "position": 1,
  "title": "Châu Âu và Bắc Mỹ thế kỉ XVI – XVIII",
  "icon": "🗽",
  "lab": "su_revo",
  "theory": "<div class=\"sec\"><h3>Bối cảnh và dòng thời gian</h3>\n  <p>Từ thế kỉ XVI, ở Tây Âu xuất hiện những công trường thủ công lớn, những thương nhân giàu có, những chủ đồn điền làm ăn theo lối mới. Họ là <b>giai cấp tư sản</b> và <b>quý tộc mới</b>. Họ có tiền nhưng lại không có quyền: mọi quyền hành vẫn nằm trong tay nhà vua và quý tộc phong kiến cũ.</p>\n  <p>Hãy hình dung một cái cây đã lớn mà vẫn bị trồng trong chậu nhỏ: hoặc rễ phá vỡ chậu, hoặc cây chết. <span class=\"mark\">Cách mạng tư sản</span> chính là lúc \"rễ phá vỡ chậu\": lật đổ chế độ phong kiến (hoặc ách thực dân) để mở đường cho chủ nghĩa tư bản phát triển.</p>\n  <p>Chương này có bốn câu chuyện lớn: <b>Cách mạng tư sản Anh</b>, <b>Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ</b>, <b>Cách mạng tư sản Pháp</b> và <b>Cách mạng công nghiệp</b> ở Anh.</p>\n  <svg viewBox=\"0 0 280 302\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian các cuộc cách mạng thế kỉ XVII, XVIII\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"18.0\" x2=\"52\" y2=\"18.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"21.5\" class=\"svgm\" text-anchor=\"end\">1640</text>\n  <line x1=\"47\" y1=\"67.5\" x2=\"52\" y2=\"67.5\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"71.0\" class=\"svgm\" text-anchor=\"end\">1680</text>\n  <line x1=\"47\" y1=\"117.0\" x2=\"52\" y2=\"117.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"120.5\" class=\"svgm\" text-anchor=\"end\">1720</text>\n  <line x1=\"47\" y1=\"166.5\" x2=\"52\" y2=\"166.5\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"170.0\" class=\"svgm\" text-anchor=\"end\">1760</text>\n  <line x1=\"47\" y1=\"216.0\" x2=\"52\" y2=\"216.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"219.5\" class=\"svgm\" text-anchor=\"end\">1800</text>\n  <circle cx=\"52\" cy=\"20.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,20.5 64,20.5 68,20.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"24.5\" class=\"svgt\"><tspan font-weight=\"700\">1642</tspan> Nội chiến ở Anh bùng nổ</text>\n  <circle cx=\"52\" cy=\"29.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,29.1 64,41.5 68,41.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"45.5\" class=\"svgt\"><tspan font-weight=\"700\">1649</tspan> Xử tử vua Sác-lơ I</text>\n  <circle cx=\"52\" cy=\"77.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,77.4 64,77.4 68,77.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"81.4\" class=\"svgt\"><tspan font-weight=\"700\">1688</tspan> Chính biến ở Anh</text>\n  <circle cx=\"52\" cy=\"171.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,171.5 64,171.5 68,171.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"175.5\" class=\"svgt\"><tspan font-weight=\"700\">1764</tspan> Máy kéo sợi Gien-ni</text>\n  <circle cx=\"52\" cy=\"186.3\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,186.3 64,192.5 68,192.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"196.5\" class=\"svgt\"><tspan font-weight=\"700\">1776</tspan> Tuyên ngôn Độc lập Mỹ</text>\n  <circle cx=\"52\" cy=\"195.0\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,195.0 64,213.5 68,213.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"217.5\" class=\"svgt\"><tspan font-weight=\"700\">1783</tspan> Anh công nhận nước Mỹ</text>\n  <circle cx=\"52\" cy=\"196.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,196.2 64,234.5 68,234.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"238.5\" class=\"svgt\"><tspan font-weight=\"700\">1784</tspan> Máy hơi nước Giêm Oát</text>\n  <circle cx=\"52\" cy=\"202.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,202.4 64,255.5 68,255.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"259.5\" class=\"svgt\"><tspan font-weight=\"700\">1789</tspan> Phá ngục Ba-xti</text>\n  <circle cx=\"52\" cy=\"208.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,208.6 64,276.5 68,276.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"280.5\" class=\"svgt\"><tspan font-weight=\"700\">1794</tspan> CM Pháp kết thúc</text>\n  <text x=\"4\" y=\"298\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Ba cuộc cách mạng đi theo thứ tự <b>Anh, Mỹ, Pháp</b> như bảng chữ cái \"A, M, P\": Anh <b>1642</b>, Mỹ <b>1776</b>, Pháp <b>1789</b>. Nhớ thêm: Mỹ 1776 và Pháp 1789 cách nhau đúng 13 năm, bằng số thuộc địa ở Bắc Mỹ.</div>\n  <div class=\"tbl\"><table><tr><th>Năm</th><th>Sự kiện</th></tr>\n  <tr><td>1642</td><td>Nội chiến giữa nhà vua và Quốc hội ở Anh bùng nổ, mở đầu cách mạng</td></tr>\n  <tr><td>1649</td><td>Vua Sác-lơ I bị xử tử, nước Anh thành nước cộng hoà</td></tr>\n  <tr><td>1688</td><td>Chính biến ở Anh, sau đó xác lập chế độ quân chủ lập hiến</td></tr>\n  <tr><td>16/12/1773</td><td>Sự kiện chè Bô-xtơn ở Bắc Mỹ</td></tr>\n  <tr><td>4/7/1776</td><td>Tuyên ngôn Độc lập, Hợp chúng quốc Mỹ ra đời</td></tr>\n  <tr><td>1783</td><td>Hoà ước Véc-xai: Anh công nhận nền độc lập của Mỹ</td></tr>\n  <tr><td>14/7/1789</td><td>Nhân dân Pa-ri phá ngục Ba-xti, Cách mạng Pháp bùng nổ</td></tr>\n  <tr><td>21/9/1792</td><td>Nền Cộng hoà thứ nhất ở Pháp được thành lập</td></tr>\n  <tr><td>27/7/1794</td><td>Phái Gia-cô-banh bị lật đổ, cách mạng Pháp đi xuống</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Cách mạng tư sản Anh: khi Quốc hội đối đầu nhà vua</h3>\n  <ul><li><b>Nguyên nhân:</b> kinh tế tư bản ở Anh phát triển mạnh (nghề len dạ, ngoại thương). Quý tộc mới rào đất cướp ruộng của nông dân để nuôi cừu (\"cừu ăn thịt người\"). Vua Sác-lơ I lại chuyên quyền, đặt thuế tuỳ tiện, xung đột gay gắt với Quốc hội.</li>\n  <li><b>Diễn biến:</b> năm <b>1642</b> nội chiến bùng nổ. Quân Quốc hội do <b>Ô-li-vơ Crôm-oen</b> chỉ huy thắng quân nhà vua. Năm <b>1649</b> vua Sác-lơ I bị xử tử, Anh thành nước cộng hoà. Sau đó Crôm-oen nắm quyền độc tài; năm 1660 vương triều cũ được khôi phục. Năm <b>1688</b>, Quốc hội làm <b>chính biến</b>, mời vua mới lên ngôi và xác lập chế độ <span class=\"mark\">quân chủ lập hiến</span>: vua \"trị vì nhưng không cai trị\", quyền lực thực sự thuộc về Quốc hội.</li>\n  <li><b>Tính chất:</b> cuộc cách mạng do <span class=\"mark\">liên minh tư sản và quý tộc mới</span> lãnh đạo, nên chưa triệt để: nông dân vẫn không có ruộng.</li></ul>\n </div>\n <div class=\"sec\"><h3>Chiến tranh giành độc lập của 13 thuộc địa ở Bắc Mỹ</h3>\n  <ul><li><b>Nguyên nhân:</b> đến thế kỉ XVIII, người Anh đã lập 13 thuộc địa dọc bờ Đại Tây Dương. Kinh tế thuộc địa lớn mạnh, nhưng chính quốc Anh cấm mở xưởng, đánh thuế nặng (thuế tem, thuế chè). Khẩu hiệu nổi tiếng: \"Không có đại diện thì không đóng thuế!\".</li>\n  <li><b>Duyên cớ:</b> ngày 16/12/1773, người dân cảng Bô-xtơn trèo lên tàu Anh, đổ hàng trăm thùng chè xuống biển (<b>sự kiện chè Bô-xtơn</b>).</li>\n  <li><b>Diễn biến:</b> tháng 4/1775 chiến tranh bùng nổ ở Lếch-xinh-tơn. <b>Gioóc-giơ Oa-sinh-tơn</b> chỉ huy quân thuộc địa. Ngày <b>4/7/1776</b>, Hội nghị lục địa thông qua <b>Tuyên ngôn Độc lập</b> do <b>Tô-mát Giép-phéc-xơn</b> soạn thảo. Trận thắng Xa-ra-tô-ga (1777) là bước ngoặt; trận Y-oóc-tao (1781) quyết định thắng lợi.</li>\n  <li><b>Kết quả:</b> năm <b>1783</b> Anh kí Hoà ước Véc-xai, công nhận nền độc lập của <span class=\"mark\">Hợp chúng quốc Mỹ</span>. Năm 1787, Mỹ có Hiến pháp; năm 1789 Oa-sinh-tơn thành tổng thống đầu tiên.</li>\n  <li><b>Ý nghĩa:</b> vừa là cuộc chiến giải phóng dân tộc, vừa là một cuộc cách mạng tư sản. Tuy vậy, chế độ nô lệ da đen vẫn còn, người da đỏ vẫn bị dồn đuổi.</li></ul>\n </div>\n <div class=\"sec\"><h3>Cách mạng tư sản Pháp cuối thế kỉ XVIII</h3>\n  <p><b>Nguyên nhân:</b> xã hội Pháp chia thành <b>ba đẳng cấp</b>: tăng lữ, quý tộc (có mọi đặc quyền, không đóng thuế) và <b>đẳng cấp thứ ba</b> (tư sản, nông dân, bình dân thành thị: phải gánh mọi thứ thuế). Vua Lu-i XVI chuyên chế, ngân khố trống rỗng. Các nhà tư tưởng <b>Mông-te-xki-ơ, Vôn-te, Rút-xô</b> phê phán chế độ cũ, như những ngọn đèn \"khai sáng\" dọn đường cho cách mạng.</p>\n  <ul><li><b>14/7/1789:</b> nhân dân Pa-ri tấn công <span class=\"mark\">pháo đài, nhà ngục Ba-xti</span>, biểu tượng của chế độ chuyên chế. Cách mạng bùng nổ. Tháng 8/1789 thông qua <b>Tuyên ngôn Nhân quyền và Dân quyền</b>.</li>\n  <li><b>1789–1792:</b> tư sản lớn cầm quyền, lập chế độ quân chủ lập hiến (Hiến pháp 1791).</li>\n  <li><b>10/8/1792:</b> nhân dân Pa-ri lật đổ vương triều; <b>21/9/1792</b> nền <b>Cộng hoà thứ nhất</b> ra đời. Tháng 1/1793, vua Lu-i XVI bị xử tử.</li>\n  <li><b>6/1793–7/1794:</b> chuyên chính dân chủ <b>Gia-cô-banh</b> (đứng đầu là <b>Rô-be-xpi-e</b>) đánh lui thù trong giặc ngoài, giải quyết ruộng đất cho nông dân. Đây là <span class=\"mark\">đỉnh cao của cách mạng</span>.</li>\n  <li><b>27/7/1794:</b> tư sản phản cách mạng đảo chính, cách mạng Pháp kết thúc.</li></ul>\n  <p><b>Ý nghĩa:</b> lật đổ chế độ phong kiến, mở đường cho chủ nghĩa tư bản ở Pháp; tư tưởng \"Tự do, Bình đẳng, Bác ái\" lan khắp thế giới. Vì thế nó được gọi là <span class=\"mark\">cuộc cách mạng tư sản triệt để nhất</span>.</p>\n  <div class=\"note\"><b>Dễ nhầm:</b> 1776 là Tuyên ngôn <b>Độc lập</b> của Mỹ; 1789 là Tuyên ngôn <b>Nhân quyền và Dân quyền</b> của Pháp. Cả hai đều được Chủ tịch Hồ Chí Minh trích dẫn ở đầu bản Tuyên ngôn Độc lập ngày 2/9/1945. Và 14/7 là ngày phá ngục Ba-xti, nay là Quốc khánh Pháp.</div>\n </div>\n <div class=\"sec\"><h3>Cách mạng công nghiệp: khi máy móc thay đôi tay</h3>\n  <p>Cách mạng công nghiệp bắt đầu ở <b>Anh</b> từ <b>những năm 60 của thế kỉ XVIII</b>, rồi lan sang Pháp, Đức, Mỹ. Khởi đầu từ <span class=\"mark\">ngành dệt</span>:</p>\n  <ul><li>1764: <b>Giêm Ha-gri-vơ</b> chế tạo máy kéo sợi Gien-ni (đặt theo tên con gái ông), tăng năng suất gấp 8 lần.</li>\n  <li>1769: Ác-crai-tơ làm máy kéo sợi chạy bằng sức nước.</li>\n  <li>1784: <b>Giêm Oát</b> hoàn thiện <span class=\"mark\">máy hơi nước</span>, nhà máy không còn phải đặt cạnh dòng sông.</li>\n  <li>1785: Ét-mơn Các-rai chế tạo máy dệt chạy bằng sức nước.</li>\n  <li>1814: <b>Xti-phen-xơn</b> chế tạo đầu máy xe lửa chạy bằng hơi nước.</li></ul>\n  <p><b>Hệ quả:</b> năng suất lao động tăng vọt, nhiều thành phố công nghiệp mọc lên (Man-se-xtơ, Liu-vơ-pun). Xã hội hình thành hai giai cấp chính: <span class=\"mark\">tư sản công nghiệp và vô sản (công nhân)</span>. Mặt trái: công nhân, kể cả phụ nữ và trẻ em, làm việc 14 đến 16 giờ mỗi ngày, lương thấp, thành phố đầy khói bụi.</p>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Ô-li-vơ Crôm-oen</b> (1599–1658): chỉ huy \"đội quân sườn sắt\" của Quốc hội Anh đánh bại quân nhà vua. Về sau ông lại nắm quyền độc tài, cho thấy cách mạng chưa đến nơi đến chốn.</li>\n  <li><b>Gioóc-giơ Oa-sinh-tơn</b> (1732–1799): tổng chỉ huy quân đội thuộc địa, tổng thống đầu tiên của Mỹ. Thủ đô nước Mỹ mang tên ông.</li>\n  <li><b>Giêm Oát</b> (1736–1819): kĩ sư người Xcốt-len hoàn thiện máy hơi nước. Đơn vị công suất \"oát\" (W) mà em học trong Vật lí được đặt theo tên ông.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao Cách mạng Pháp được coi là triệt để hơn Cách mạng Anh?</summary>Cách mạng Anh dừng lại ở quân chủ lập hiến, giữ lại vua và quý tộc, nông dân không được chia ruộng. Cách mạng Pháp xoá bỏ chế độ quân chủ, thủ tiêu đặc quyền phong kiến và (thời Gia-cô-banh) chia ruộng đất cho nông dân.</details>\n  <details class=\"wq\"><summary>Vì sao Cách mạng công nghiệp bắt đầu ở Anh chứ không ở nước khác?</summary>Anh đã làm cách mạng tư sản sớm, có nhiều vốn từ buôn bán và thuộc địa, nhiều nhân công (nông dân mất ruộng ra thành thị), lại có sẵn than đá và sắt. Đủ cả vốn, người, nguyên liệu và một chính quyền ủng hộ kinh doanh.</details>\n  <details class=\"wq\"><summary>Chè chỉ là đồ uống, sao lại gây ra cả một cuộc chiến tranh?</summary>Thùng chè chỉ là \"giọt nước tràn li\". Cái người Bắc Mỹ phản đối là việc Anh đánh thuế mà họ không có đại diện trong Quốc hội Anh, tức là không được quyết định số phận của mình.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🇫🇷</span>Ngày 14/7</b>Ngày phá ngục Ba-xti là Quốc khánh Pháp. Ở Pa-ri hôm đó có diễu binh trên đại lộ Săng-dê-li-dê và pháo hoa bên tháp Ép-phen.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎆</span>Ngày 4/7 ở Mỹ</b>Ngày Độc lập là ngày lễ lớn nhất của nước Mỹ với pháo hoa và tiệc nướng ngoài trời.</div>\n   <div class=\"app\"><b><span class=\"ico\">📜</span>Tuyên ngôn Độc lập 2/9/1945</b>Bác Hồ mở đầu bằng câu trích Tuyên ngôn Độc lập Mỹ 1776 và Tuyên ngôn Nhân quyền và Dân quyền Pháp 1789, khẳng định quyền độc lập của dân tộc Việt Nam là lẽ phải không ai chối cãi được.</div>\n   <div class=\"app\"><b><span class=\"ico\">💡</span>Đơn vị oát</b>Bóng đèn 9 W, nồi cơm 700 W: chữ W là tên Giêm Oát, người làm máy hơi nước thay đổi cả thế giới.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚆</span>Đường sắt Bắc Nam</b>Đoàn tàu thống nhất của nước ta là \"cháu chắt\" của đầu máy hơi nước Xti-phen-xơn đầu thế kỉ XIX.</div>\n   <div class=\"app\"><b><span class=\"ico\">👕</span>Ngành dệt may</b>Cách mạng công nghiệp bắt đầu từ ngành dệt. Ngày nay dệt may là một trong những ngành xuất khẩu chủ lực của Việt Nam.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để xếp các sự kiện vào đúng cuộc cách mạng và sắp xếp các phát minh thời cách mạng công nghiệp theo thứ tự nhé.</p>",
  "formulas": [
   [
    "1642",
    "Nội chiến ở Anh bùng nổ, mở đầu Cách mạng tư sản Anh"
   ],
   [
    "1649",
    "Vua Sác-lơ I bị xử tử, Anh thành nước cộng hoà"
   ],
   [
    "1688",
    "Chính biến ở Anh, xác lập chế độ quân chủ lập hiến"
   ],
   [
    "Từ những năm 60 thế kỉ XVIII",
    "Cách mạng công nghiệp bắt đầu ở Anh (máy Gien-ni 1764, máy hơi nước Giêm Oát 1784)"
   ],
   [
    "16/12/1773",
    "Sự kiện chè Bô-xtơn"
   ],
   [
    "4/7/1776",
    "Tuyên ngôn Độc lập, Hợp chúng quốc Mỹ ra đời"
   ],
   [
    "1783",
    "Hoà ước Véc-xai, Anh công nhận độc lập của Mỹ"
   ],
   [
    "14/7/1789",
    "Phá ngục Ba-xti, Cách mạng tư sản Pháp bùng nổ"
   ],
   [
    "21/9/1792",
    "Nền Cộng hoà thứ nhất ở Pháp thành lập"
   ],
   [
    "27/7/1794",
    "Chính quyền Gia-cô-banh bị lật đổ, Cách mạng Pháp kết thúc"
   ]
  ],
  "quiz": [
   {
    "q": "Cách mạng tư sản Pháp bùng nổ bằng sự kiện nào?",
    "o": [
     "Nhân dân Pa-ri tấn công ngục Ba-xti ngày 14/7/1789",
     "Vua Lu-i XVI bị xử tử năm 1793",
     "Hội nghị ba đẳng cấp khai mạc năm 1776",
     "Sự kiện chè Bô-xtơn năm 1773"
    ],
    "why": "Ngày 14/7/1789 dân Pa-ri chiếm ngục Ba-xti, biểu tượng của chế độ chuyên chế. Đến nay 14/7 vẫn là Quốc khánh Pháp."
   },
   {
    "q": "Bản Tuyên ngôn Độc lập của Mỹ được thông qua vào ngày nào?",
    "o": [
     "4/7/1776",
     "14/7/1789",
     "16/12/1773",
     "2/9/1783"
    ],
    "why": "Tuyên ngôn do Tô-mát Giép-phéc-xơn soạn thảo, được thông qua ngày 4/7/1776, ngày khai sinh Hợp chúng quốc Mỹ."
   },
   {
    "q": "Kết quả của Cách mạng tư sản Anh là xác lập chế độ chính trị nào?",
    "o": [
     "Quân chủ lập hiến",
     "Quân chủ chuyên chế",
     "Cộng hoà tổng thống",
     "Chuyên chính Gia-cô-banh"
    ],
    "why": "Sau chính biến 1688, nước Anh theo chế độ quân chủ lập hiến: vua vẫn còn nhưng quyền lực thực tế thuộc về Quốc hội. Nước Anh đến nay vẫn giữ chế độ này."
   },
   {
    "q": "Lực lượng lãnh đạo Cách mạng tư sản Anh là",
    "o": [
     "liên minh tư sản và quý tộc mới",
     "giai cấp công nhân",
     "nông dân và bình dân thành thị",
     "tăng lữ và quý tộc cũ"
    ],
    "why": "Do có quý tộc mới tham gia lãnh đạo nên cách mạng Anh mang tính bảo thủ, chưa triệt để, nông dân không được chia ruộng."
   },
   {
    "q": "Duyên cớ trực tiếp dẫn tới Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ là",
    "o": [
     "sự kiện chè Bô-xtơn (12/1773)",
     "vua Anh bị xử tử",
     "Mỹ thông qua Hiến pháp",
     "Pháp tuyên chiến với Anh"
    ],
    "why": "Người dân Bô-xtơn đổ chè của tàu Anh xuống biển để phản đối thuế. Anh đáp trả bằng đóng cửa cảng, mâu thuẫn bùng thành chiến tranh năm 1775."
   },
   {
    "q": "Vì sao Cách mạng tư sản Pháp được coi là cuộc cách mạng tư sản triệt để nhất?",
    "o": [
     "Vì đã lật đổ chế độ quân chủ, xoá bỏ đặc quyền phong kiến và giải quyết ruộng đất cho nông dân",
     "Vì diễn ra sớm nhất thế giới",
     "Vì do giai cấp công nhân lãnh đạo",
     "Vì giữ lại nhà vua để tránh đổ máu"
    ],
    "why": "Đỉnh cao là thời Gia-cô-banh (1793–1794): chia ruộng đất cho nông dân, đánh lui thù trong giặc ngoài. Cách mạng Anh và Mỹ không làm được điều này."
   },
   {
    "q": "Cách mạng công nghiệp bắt đầu từ nước nào và từ ngành nào?",
    "o": [
     "Anh, ngành dệt",
     "Pháp, ngành luyện kim",
     "Mỹ, ngành đường sắt",
     "Đức, ngành hoá chất"
    ],
    "why": "Máy kéo sợi Gien-ni (1764) của Giêm Ha-gri-vơ ở Anh mở đầu cho cả loạt máy móc trong ngành dệt."
   },
   {
    "q": "Đơn vị công suất oát (W) ghi trên bóng đèn, nồi cơm điện được đặt theo tên nhà phát minh nào?",
    "o": [
     "Giêm Oát, người hoàn thiện máy hơi nước",
     "Giêm Ha-gri-vơ, người làm máy kéo sợi Gien-ni",
     "Xti-phen-xơn, người làm đầu máy xe lửa",
     "Ét-mơn Các-rai, người làm máy dệt"
    ],
    "why": "Giêm Oát hoàn thiện máy hơi nước năm 1784. Năm 1882, giới khoa học lấy tên ông đặt cho đơn vị công suất."
   },
   {
    "q": "Hệ quả xã hội quan trọng nhất của Cách mạng công nghiệp là",
    "o": [
     "hình thành hai giai cấp cơ bản: tư sản công nghiệp và vô sản",
     "xoá bỏ hoàn toàn nạn bóc lột",
     "giai cấp nông dân trở thành lực lượng đông nhất ở thành thị",
     "chế độ phong kiến ở Anh được khôi phục"
    ],
    "why": "Máy móc tập trung công nhân vào nhà máy. Mâu thuẫn tư sản và vô sản chính là nguồn gốc của phong trào công nhân ở chương 4."
   },
   {
    "q": "Đọc bảng mốc thời gian:<br>Anh 1642 → Mỹ 1776 → Pháp 1789.<br>Khoảng cách giữa cuộc cách mạng sớm nhất và muộn nhất là bao nhiêu năm?",
    "o": [
     "147 năm",
     "134 năm",
     "13 năm",
     "113 năm"
    ],
    "why": "1789 − 1642 = 147 năm. Còn Mỹ 1776 đến Pháp 1789 chỉ cách 13 năm."
   },
   {
    "q": "Chủ tịch Hồ Chí Minh đã trích dẫn những văn kiện nào ở phần mở đầu bản Tuyên ngôn Độc lập 2/9/1945?",
    "o": [
     "Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1789)",
     "Tuyên ngôn của Đảng Cộng sản (1848) và Hiến pháp Mỹ (1787)",
     "Tuyên ngôn Nhân quyền Anh (1689) và Hoà ước Véc-xai (1783)",
     "Luận cương tháng Tư (1917) và Tuyên ngôn Độc lập của Mỹ (1776)"
    ],
    "why": "Câu nổi tiếng: \"Tất cả mọi người đều sinh ra có quyền bình đẳng…\" lấy từ Tuyên ngôn Độc lập Mỹ, rồi Bác nhắc tiếp Tuyên ngôn Nhân quyền và Dân quyền của Pháp."
   },
   {
    "q": "Ở nước Pháp trước năm 1789, đẳng cấp nào phải đóng gần như mọi thứ thuế?",
    "o": [
     "Đẳng cấp thứ ba (tư sản, nông dân, bình dân thành thị)",
     "Tăng lữ",
     "Quý tộc",
     "Hoàng gia"
    ],
    "why": "Tăng lữ và quý tộc chỉ khoảng vài phần trăm dân số nhưng có đặc quyền, không đóng thuế. Gánh nặng đổ lên đẳng cấp thứ ba, nên họ đứng lên làm cách mạng."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l2",
  "position": 2,
  "title": "Đông Nam Á nửa sau thế kỉ XVI – thế kỉ XIX",
  "icon": "🌴",
  "lab": "su_sea",
  "theory": "<div class=\"sec\"><h3>Vì sao phương Tây nhòm ngó Đông Nam Á?</h3>\n  <p>Đông Nam Á nằm trên con đường biển nối Ấn Độ Dương với Thái Bình Dương, lại giàu <b>hương liệu</b> (hồ tiêu, đinh hương, nhục đậu khấu), lúa gạo, thiếc, gỗ quý. Với thương nhân châu Âu thời đó, một túi đinh hương có thể đắt như vàng.</p>\n  <p>Từ thế kỉ XVI, các nước phương Tây lần lượt kéo đến: thoạt đầu là buôn bán và truyền đạo, sau đó là <span class=\"mark\">xâm chiếm và biến các nước Đông Nam Á thành thuộc địa</span>. Đến cuối thế kỉ XIX, gần như cả khu vực đã rơi vào tay thực dân, chỉ trừ <b>Xiêm</b> (Thái Lan ngày nay).</p>\n </div>\n <div class=\"sec\"><h3>Ai chiếm nước nào?</h3>\n  <div class=\"tbl\"><table><tr><th>Thực dân</th><th>Thuộc địa chính</th><th>Ghi nhớ</th></tr>\n  <tr><td>Bồ Đào Nha</td><td>Ma-lắc-ca (1511), Đông Ti-mo</td><td>Đến sớm nhất, sau bị Hà Lan đánh bật</td></tr>\n  <tr><td>Tây Ban Nha</td><td>Phi-líp-pin (từ nửa sau thế kỉ XVI)</td><td>Năm 1898 thua Mỹ, mất Phi-líp-pin</td></tr>\n  <tr><td>Hà Lan</td><td>In-đô-nê-xi-a</td><td>Công ty Đông Ấn Hà Lan lập năm 1602</td></tr>\n  <tr><td>Anh</td><td>Miến Điện, Mã Lai, Xin-ga-po</td><td>Ba cuộc chiến tranh chiếm Miến Điện (1824–1885)</td></tr>\n  <tr><td>Pháp</td><td>Việt Nam, Lào, Cam-pu-chia</td><td>Lập Liên bang Đông Dương năm 1887</td></tr>\n  <tr><td>Mỹ</td><td>Phi-líp-pin</td><td>Giành từ tay Tây Ban Nha năm 1898</td></tr></table></div>\n  <div class=\"note\"><b>Dễ nhầm:</b> Phi-líp-pin có \"hai đời chủ\": Tây Ban Nha (hơn ba thế kỉ) rồi đến Mỹ (từ 1898). In-đô-nê-xi-a là thuộc địa của <b>Hà Lan</b>, không phải Anh.</div>\n  <svg viewBox=\"0 0 280 366\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian Đông Nam Á thế kỉ XVI đến XIX\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"238\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"18.0\" x2=\"52\" y2=\"18.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"21.5\" class=\"svgm\" text-anchor=\"end\">1500</text>\n  <line x1=\"47\" y1=\"73.0\" x2=\"52\" y2=\"73.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"76.5\" class=\"svgm\" text-anchor=\"end\">1600</text>\n  <line x1=\"47\" y1=\"128.0\" x2=\"52\" y2=\"128.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"131.5\" class=\"svgm\" text-anchor=\"end\">1700</text>\n  <line x1=\"47\" y1=\"183.0\" x2=\"52\" y2=\"183.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"186.5\" class=\"svgm\" text-anchor=\"end\">1800</text>\n  <line x1=\"47\" y1=\"238.0\" x2=\"52\" y2=\"238.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"241.5\" class=\"svgm\" text-anchor=\"end\">1900</text>\n  <circle cx=\"52\" cy=\"24.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,24.1 64,24.1 68,24.1\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"28.1\" class=\"svgt\"><tspan font-weight=\"700\">1511</tspan> Bồ Đào Nha chiếm Ma-lắc-ca</text>\n  <circle cx=\"52\" cy=\"74.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,74.1 64,74.1 68,74.1\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"78.1\" class=\"svgt\"><tspan font-weight=\"700\">1602</tspan> Công ty Đông Ấn Hà Lan</text>\n  <circle cx=\"52\" cy=\"193.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,193.4 64,193.4 68,193.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"197.4\" class=\"svgt\"><tspan font-weight=\"700\">1819</tspan> Anh lập cảng Xin-ga-po</text>\n  <circle cx=\"52\" cy=\"196.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,196.8 64,214.4 68,214.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"218.4\" class=\"svgt\"><tspan font-weight=\"700\">1825</tspan> Khởi nghĩa Đi-pô-nê-gô-rô</text>\n  <circle cx=\"52\" cy=\"215.3\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,215.3 64,235.4 68,235.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"239.4\" class=\"svgt\"><tspan font-weight=\"700\">1858</tspan> Pháp đánh Việt Nam</text>\n  <circle cx=\"52\" cy=\"220.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,220.8 64,256.4 68,256.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"260.4\" class=\"svgt\"><tspan font-weight=\"700\">1868</tspan> Rama V lên ngôi ở Xiêm</text>\n  <circle cx=\"52\" cy=\"230.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,230.2 64,277.4 68,277.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"281.4\" class=\"svgt\"><tspan font-weight=\"700\">1885</tspan> Anh chiếm xong Miến Điện</text>\n  <circle cx=\"52\" cy=\"231.3\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,231.3 64,298.4 68,298.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"302.4\" class=\"svgt\"><tspan font-weight=\"700\">1887</tspan> Liên bang Đông Dương</text>\n  <circle cx=\"52\" cy=\"236.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,236.1 64,319.4 68,319.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"323.4\" class=\"svgt\"><tspan font-weight=\"700\">1896</tspan> Khởi nghĩa ở Phi-líp-pin</text>\n  <circle cx=\"52\" cy=\"237.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,237.4 64,340.4 68,340.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"344.4\" class=\"svgt\"><tspan font-weight=\"700\">1898</tspan> Mỹ chiếm Phi-líp-pin</text>\n  <text x=\"4\" y=\"362\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Ghép cặp \"chủ nào, tớ nấy\": <b>Hà</b> Lan với <b>In</b>-đô (nhớ \"Hà In\"), <b>Anh</b> với <b>Miến</b> và <b>Mã</b> Lai, <b>Pháp</b> với ba nước <b>Đông Dương</b>, <b>Tây Ban Nha</b> rồi <b>Mỹ</b> với <b>Phi</b>-líp-pin. Còn <b>Xiêm</b> thì \"không ai chiếm\".</div>\n </div>\n <div class=\"sec\"><h3>Chính sách cai trị của thực dân</h3>\n  <ul><li><b>Chính trị:</b> trực tiếp cai trị hoặc dùng bộ máy vua quan bản xứ làm tay sai; thi hành chính sách <span class=\"mark\">\"chia để trị\"</span>, gây chia rẽ giữa các dân tộc, tôn giáo.</li>\n  <li><b>Kinh tế:</b> cướp ruộng đất lập đồn điền, khai thác mỏ, độc quyền buôn bán, thu thuế nặng. Ở Gia-va (In-đô-nê-xi-a), Hà Lan bắt nông dân dành đất trồng cà phê, mía, chàm theo chế độ <b>\"canh tác cưỡng bức\"</b> để nộp cho nhà nước thực dân.</li>\n  <li><b>Văn hoá, xã hội:</b> chính sách <span class=\"mark\">ngu dân</span>, hạn chế mở trường, khuyến khích tệ nạn, truyền bá tôn giáo để dễ cai trị.</li></ul>\n  <p>Hệ quả: kinh tế các nước phát triển què quặt, phụ thuộc chính quốc; đời sống nhân dân cực khổ. Nhưng cũng có một số cơ sở mới như đường sắt, bến cảng, đô thị hiện đại xuất hiện.</p>\n </div>\n <div class=\"sec\"><h3>Phong trào đấu tranh chống thực dân</h3>\n  <p>Không nơi nào chịu khuất phục. Một vài ngọn lửa tiêu biểu:</p>\n  <ul><li><b>In-đô-nê-xi-a:</b> khởi nghĩa của hoàng tử <b>Đi-pô-nê-gô-rô</b> ở Gia-va (1825–1830) chống Hà Lan.</li>\n  <li><b>Phi-líp-pin:</b> <b>Hô-xê Ri-dan</b> thức tỉnh dân tộc bằng ngòi bút; tổ chức Ca-ti-pu-nan của Bô-ni-pha-xi-ô phát động khởi nghĩa năm 1896 chống Tây Ban Nha.</li>\n  <li><b>Cam-pu-chia:</b> khởi nghĩa của A-cha Xoa (1863–1866) và nhà sư Pu-côm-bô (1866–1867) chống Pháp. Pu-côm-bô từng liên kết với nghĩa quân Trương Quyền ở Nam Kỳ.</li>\n  <li><b>Miến Điện:</b> nhân dân chiến đấu kiên cường qua ba cuộc chiến tranh chống Anh.</li>\n  <li><b>Việt Nam, Lào:</b> cuộc kháng chiến chống Pháp từ năm 1858 (học kĩ ở chương 7).</li></ul>\n  <p>Các phong trào diễn ra sôi nổi nhưng phần lớn <span class=\"mark\">thất bại</span> vì thiếu đường lối đúng, thiếu tổ chức vững và chênh lệch lực lượng quá lớn.</p>\n </div>\n <div class=\"sec\"><h3>Xiêm: giữ độc lập bằng cải cách và ngoại giao</h3>\n  <p>Giữa lúc các láng giềng lần lượt mất nước, vương quốc Xiêm giữ được độc lập nhờ hai vị vua sáng suốt: <b>Rama IV (Mông-kút)</b> và đặc biệt là <b>Rama V (Chu-la-long-con, trị vì 1868–1910)</b>.</p>\n  <ul><li><b>Cải cách trong nước:</b> theo mô hình phương Tây: xoá bỏ chế độ nô lệ vì nợ, giảm thuế, mở trường học, xây đường sắt, cải tổ bộ máy chính quyền và quân đội.</li>\n  <li><b>Ngoại giao mềm dẻo:</b> lợi dụng vị trí <span class=\"mark\">\"vùng đệm\" giữa thuộc địa Anh (Miến Điện) và thuộc địa Pháp (Đông Dương)</span>, \"ngả theo chiều gió\", chấp nhận cắt một số vùng đất phụ thuộc để giữ phần cốt lõi.</li></ul>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Hô-xê Ri-dan</b> (1861–1896): bác sĩ, nhà văn, nhà thơ Phi-líp-pin. Ông viết tiểu thuyết vạch trần sự tàn bạo của thực dân và bị Tây Ban Nha xử bắn năm 1896. Ông được coi là anh hùng dân tộc Phi-líp-pin.</li>\n  <li><b>Rama V (Chu-la-long-con)</b> (1853–1910): vị vua cải cách của Xiêm, người được nhân dân Thái Lan tôn kính, ngày mất của ông (23/10) nay là ngày lễ ở Thái Lan.</li>\n  <li><b>Đi-pô-nê-gô-rô</b> (1785–1855): hoàng tử Gia-va lãnh đạo cuộc khởi nghĩa lớn chống Hà Lan; bị lừa bắt trong buổi đàm phán năm 1830.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao Xiêm là nước duy nhất ở Đông Nam Á giữ được độc lập?</summary>Vì vua Xiêm vừa cải cách để đất nước mạnh lên, vừa khéo léo ngoại giao. Anh và Pháp cũng muốn giữ Xiêm làm vùng đệm để hai bên khỏi đụng độ trực tiếp. Tuy nhiên Xiêm vẫn phải nhượng một số quyền lợi và đất đai.</details>\n  <details class=\"wq\"><summary>Vì sao các phong trào đấu tranh thời kì này thường thất bại?</summary>Vũ khí thô sơ đối đầu với súng đạn hiện đại; người lãnh đạo chủ yếu là quý tộc, nhà sư, nông dân với tư tưởng cũ; các phong trào lẻ tẻ, chưa liên kết rộng.</details>\n  <details class=\"wq\"><summary>Hương liệu thì có gì quý đến thế?</summary>Ở châu Âu ngày xưa không có tủ lạnh, hương liệu giúp bảo quản và át mùi thịt, lại dùng làm thuốc. Vì xa xôi, khó vận chuyển nên giá cực cao. Quần đảo Ma-lu-cu (In-đô-nê-xi-a) được gọi là \"quần đảo Hương liệu\".</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🤝</span>ASEAN</b>Từ những nước từng chung số phận thuộc địa, ngày nay 10 nước Đông Nam Á cùng nhau xây dựng Cộng đồng ASEAN. Việt Nam gia nhập năm 1995.</div>\n   <div class=\"app\"><b><span class=\"ico\">⛪</span>Phi-líp-pin theo Công giáo</b>Hơn ba thế kỉ dưới ách Tây Ban Nha khiến Phi-líp-pin trở thành nước có đông người Công giáo nhất châu Á; nhiều người mang họ Tây Ban Nha.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏙️</span>Xin-ga-po</b>Từ một thương cảng do Anh lập năm 1819, Xin-ga-po nay là một trong những cảng biển và trung tâm tài chính lớn nhất thế giới.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌶️</span>Hồ tiêu Việt Nam</b>Hương liệu từng khiến phương Tây vượt đại dương. Ngày nay Việt Nam là nước xuất khẩu hồ tiêu hàng đầu thế giới.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚂</span>Đường sắt cũ</b>Nhiều tuyến đường sắt ở Đông Nam Á được xây thời thuộc địa để chở tài nguyên ra cảng, nay vẫn còn sử dụng.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để ghép mỗi nước Đông Nam Á với thực dân từng cai trị nhé.</p>",
  "formulas": [
   [
    "1511",
    "Bồ Đào Nha chiếm Ma-lắc-ca, mở đầu sự có mặt của thực dân phương Tây"
   ],
   [
    "Nửa sau thế kỉ XVI",
    "Tây Ban Nha xâm chiếm Phi-líp-pin"
   ],
   [
    "1602",
    "Hà Lan lập Công ty Đông Ấn, đẩy mạnh xâm chiếm In-đô-nê-xi-a"
   ],
   [
    "1825–1830",
    "Khởi nghĩa Đi-pô-nê-gô-rô ở Gia-va chống Hà Lan"
   ],
   [
    "1824–1885",
    "Anh tiến hành ba cuộc chiến tranh, chiếm Miến Điện"
   ],
   [
    "1863–1867",
    "Khởi nghĩa A-cha Xoa, Pu-côm-bô ở Cam-pu-chia chống Pháp"
   ],
   [
    "1868–1910",
    "Vua Rama V (Chu-la-long-con) cải cách, Xiêm giữ được độc lập"
   ],
   [
    "1887",
    "Pháp lập Liên bang Đông Dương"
   ],
   [
    "1896",
    "Khởi nghĩa của Ca-ti-pu-nan ở Phi-líp-pin; Hô-xê Ri-dan bị xử bắn"
   ],
   [
    "1898",
    "Mỹ chiếm Phi-líp-pin từ tay Tây Ban Nha"
   ]
  ],
  "quiz": [
   {
    "q": "Nước nào ở Đông Nam Á giữ được độc lập trong thời kì thực dân phương Tây xâm lược?",
    "o": [
     "Xiêm",
     "Miến Điện",
     "Phi-líp-pin",
     "Cam-pu-chia"
    ],
    "why": "Xiêm (Thái Lan) giữ được độc lập nhờ cải cách và ngoại giao mềm dẻo của các vua Rama IV, Rama V."
   },
   {
    "q": "In-đô-nê-xi-a là thuộc địa của nước nào?",
    "o": [
     "Hà Lan",
     "Anh",
     "Pháp",
     "Tây Ban Nha"
    ],
    "why": "Hà Lan cai trị In-đô-nê-xi-a qua Công ty Đông Ấn Hà Lan (thành lập 1602) rồi trực tiếp bằng nhà nước. Thủ đô Gia-các-ta thời đó tên là Ba-ta-vi-a."
   },
   {
    "q": "Phi-líp-pin lần lượt là thuộc địa của",
    "o": [
     "Tây Ban Nha, rồi Mỹ",
     "Bồ Đào Nha, rồi Hà Lan",
     "Anh, rồi Pháp",
     "Pháp, rồi Mỹ"
    ],
    "why": "Tây Ban Nha cai trị Phi-líp-pin từ nửa sau thế kỉ XVI. Năm 1898 Tây Ban Nha thua trận và Mỹ chiếm Phi-líp-pin."
   },
   {
    "q": "Ba nước Việt Nam, Lào, Cam-pu-chia bị thực dân nào xâm lược và gộp vào Liên bang Đông Dương (1887)?",
    "o": [
     "Pháp",
     "Anh",
     "Hà Lan",
     "Mỹ"
    ],
    "why": "Liên bang Đông Dương thuộc Pháp gồm Việt Nam (chia ba kỳ), Cam-pu-chia, sau thêm Lào (1899)."
   },
   {
    "q": "Chính sách \"chia để trị\" của thực dân nhằm mục đích gì?",
    "o": [
     "Gây chia rẽ giữa các dân tộc, tôn giáo để dễ bề cai trị",
     "Chia ruộng đất cho nông dân nghèo",
     "Chia đều quyền lực cho người bản xứ",
     "Chia nhỏ thuộc địa để trả lại độc lập dần"
    ],
    "why": "Khi người dân thuộc địa nghi kị nhau thì khó đoàn kết chống thực dân. Đây là thủ đoạn chính trị phổ biến của mọi thực dân."
   },
   {
    "q": "Chế độ \"canh tác cưỡng bức\" ở Gia-va là chính sách của ai?",
    "o": [
     "Thực dân Hà Lan",
     "Thực dân Anh",
     "Vua Xiêm",
     "Thực dân Pháp"
    ],
    "why": "Từ năm 1830, Hà Lan bắt nông dân Gia-va dành một phần đất trồng cây xuất khẩu (cà phê, mía, chàm) nộp cho chính quyền thực dân."
   },
   {
    "q": "Nguyên nhân nào giúp Xiêm giữ được độc lập?",
    "o": [
     "Cải cách theo hướng phương Tây và chính sách ngoại giao mềm dẻo, lợi dụng vị trí vùng đệm giữa Anh và Pháp",
     "Xiêm có quân đội mạnh nhất châu Á",
     "Xiêm không có tài nguyên nên phương Tây không quan tâm",
     "Xiêm được Nhật Bản bảo hộ"
    ],
    "why": "Rama V xoá chế độ nô lệ, mở trường, làm đường sắt; đồng thời khéo ngoại giao, chấp nhận nhượng một số vùng đất để giữ chủ quyền."
   },
   {
    "q": "Hô-xê Ri-dan là ai?",
    "o": [
     "Nhà yêu nước, nhà văn Phi-líp-pin, bị thực dân Tây Ban Nha xử bắn năm 1896",
     "Vua Xiêm thực hiện cải cách",
     "Hoàng tử Gia-va lãnh đạo khởi nghĩa chống Hà Lan",
     "Nhà sư Cam-pu-chia chống Pháp"
    ],
    "why": "Hô-xê Ri-dan là bác sĩ, nhà văn biết hơn 10 thứ tiếng. Cái chết của ông thổi bùng cuộc cách mạng Phi-líp-pin."
   },
   {
    "q": "Vì sao các phong trào đấu tranh ở Đông Nam Á thế kỉ XIX phần lớn thất bại?",
    "o": [
     "Thiếu đường lối đúng, tổ chức chưa chặt chẽ, lực lượng chênh lệch với thực dân",
     "Nhân dân không muốn chống thực dân",
     "Thực dân rút lui trước khi phong trào bùng nổ",
     "Các phong trào chỉ đấu tranh bằng ngoại giao"
    ],
    "why": "Tinh thần yêu nước rất cao nhưng chưa có giai cấp và hệ tư tưởng tiên tiến lãnh đạo; các cuộc khởi nghĩa thường lẻ tẻ."
   },
   {
    "q": "Đọc bảng: Anh chiếm Miến Điện qua ba cuộc chiến tranh từ 1824 đến 1885. Quá trình đó kéo dài khoảng bao lâu?",
    "o": [
     "Khoảng 61 năm",
     "Khoảng 16 năm",
     "Khoảng 85 năm",
     "Khoảng 6 năm"
    ],
    "why": "1885 − 1824 = 61 năm. Điều đó cho thấy nhân dân Miến Điện kháng cự rất bền bỉ."
   },
   {
    "q": "Vì sao thương nhân châu Âu thế kỉ XVI rất muốn đến Đông Nam Á?",
    "o": [
     "Vì khu vực giàu hương liệu, sản vật quý và nằm trên đường biển quan trọng",
     "Vì Đông Nam Á có nhiều mỏ than lớn nhất thế giới",
     "Vì Đông Nam Á là nơi duy nhất trồng lúa mì",
     "Vì vua các nước Đông Nam Á mời sang cai trị"
    ],
    "why": "Hồ tiêu, đinh hương, nhục đậu khấu khi đó đắt như vàng ở châu Âu. Quần đảo Ma-lu-cu được gọi là \"quần đảo Hương liệu\"."
   },
   {
    "q": "Ngày nay, các nước Đông Nam Á từng chung cảnh thuộc địa cùng tham gia tổ chức hợp tác khu vực nào?",
    "o": [
     "ASEAN (Hiệp hội các quốc gia Đông Nam Á)",
     "Liên minh châu Âu (EU)",
     "Liên hợp quốc châu Á",
     "Liên bang Đông Dương"
    ],
    "why": "ASEAN thành lập năm 1967; Việt Nam gia nhập ngày 28/7/1995. Liên bang Đông Dương là bộ máy cai trị của thực dân Pháp, không phải tổ chức hợp tác."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l3",
  "position": 3,
  "title": "Việt Nam từ đầu thế kỉ XVI đến thế kỉ XVIII",
  "icon": "🐘",
  "lab": "su_tayson",
  "theory": "<div class=\"sec\"><h3>Hai thế kỉ \"đất nước chia đôi\"</h3>\n  <p>Đầu thế kỉ XVI, nhà Lê sơ suy yếu, vua chúa ăn chơi, quan lại tranh giành quyền lực. Năm <b>1527</b>, <b>Mạc Đăng Dung</b> phế vua Lê, lập ra <b>nhà Mạc</b>.</p>\n  <ul><li><b>Nam – Bắc triều:</b> năm 1533, Nguyễn Kim (một cựu thần nhà Lê) đưa một người dòng dõi nhà Lê lên ngôi ở Thanh Hoá, gọi là <b>Nam triều</b>; nhà Mạc ở Thăng Long là <b>Bắc triều</b>. Hai bên đánh nhau hơn 50 năm. Năm <b>1592</b> Nam triều chiếm lại Thăng Long, chiến tranh cơ bản kết thúc; họ Mạc rút lên Cao Bằng.</li>\n  <li><b>Trịnh – Nguyễn:</b> sau khi Nguyễn Kim mất, con rể là <b>Trịnh Kiểm</b> nắm quyền. Năm <b>1558</b>, con trai Nguyễn Kim là <b>Nguyễn Hoàng</b> xin vào trấn thủ <b>Thuận Hoá</b>, dần xây dựng thế lực riêng ở phía Nam. Từ <b>1627 đến 1672</b>, họ Trịnh và họ Nguyễn đánh nhau 7 lần mà không phân thắng bại, lấy <span class=\"mark\">sông Gianh (Quảng Bình)</span> làm ranh giới: phía bắc là <b>Đàng Ngoài</b> (vua Lê, chúa Trịnh), phía nam là <b>Đàng Trong</b> (chúa Nguyễn).</li></ul>\n  <div class=\"note\"><b>Dễ nhầm:</b> \"Nam – Bắc triều\" là cuộc chiến <b>Lê – Mạc</b> (thế kỉ XVI). \"Đàng Trong – Đàng Ngoài\" là thời <b>Trịnh – Nguyễn</b> (thế kỉ XVII, XVIII). Ranh giới là sông <b>Gianh</b>, không phải sông Bến Hải (sông Bến Hải là giới tuyến tạm thời năm 1954).</div>\n </div>\n <div class=\"sec\"><h3>Khai phá vùng đất phía Nam</h3>\n  <p>Song song với chiến tranh là một hành trình rất đáng tự hào: các thế hệ người Việt, cùng người Chăm, người Khmer, người Hoa, khai hoang lập làng, biến vùng đất phía Nam thành những cánh đồng phì nhiêu.</p>\n  <ul><li>1611: chúa Nguyễn lập phủ Phú Yên.</li>\n  <li>Năm <b>1698</b>, <b>Nguyễn Hữu Cảnh</b> vào kinh lược, <span class=\"mark\">lập phủ Gia Định</span>, chính thức xác lập chủ quyền ở vùng Đồng Nai, Sài Gòn. Năm 1698 vì thế được coi là năm khai sinh Sài Gòn (TP Hồ Chí Minh).</li>\n  <li>Đầu thế kỉ XVIII, Mạc Cửu (người Hoa) khai phá vùng Hà Tiên rồi xin thần phục chúa Nguyễn.</li>\n  <li>Đến giữa thế kỉ XVIII (khoảng năm <b>1757</b>), cơ bản hoàn thành việc xác lập chủ quyền ở vùng đất Nam Bộ ngày nay.</li></ul>\n  <p>Chúa Nguyễn cũng lập <b>đội Hoàng Sa</b> (và đội Bắc Hải) hằng năm ra khai thác sản vật, đo đạc ở quần đảo Hoàng Sa, Trường Sa: một bằng chứng lịch sử về <span class=\"mark\">chủ quyền của Việt Nam đối với hai quần đảo này</span>.</p>\n </div>\n <div class=\"sec\"><h3>Kinh tế, văn hoá thế kỉ XVI–XVIII</h3>\n  <ul><li><b>Nông nghiệp:</b> Đàng Trong mở rộng diện tích lớn, lúa gạo dư thừa. Đàng Ngoài nhiều thời gian bị chiến tranh, mất mùa.</li>\n  <li><b>Thủ công nghiệp, thương nghiệp:</b> nhiều làng nghề nổi tiếng (gốm Bát Tràng, lụa Vạn Phúc); thương nhân Nhật, Hoa, Bồ Đào Nha, Hà Lan đến buôn bán. Đô thị phát triển: <b>Thăng Long (Kẻ Chợ)</b>, <b>Phố Hiến</b> (Hưng Yên), <b>Hội An</b> (Quảng Nam), Thanh Hà (Huế). Câu ca: <i>\"Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến\"</i>.</li>\n  <li><b>Tôn giáo:</b> Nho giáo vẫn chính thống, Phật giáo, Đạo giáo phục hồi; <b>Công giáo</b> theo các giáo sĩ phương Tây truyền vào.</li>\n  <li><b>Chữ Quốc ngữ:</b> các giáo sĩ phương Tây (như <b>A-lếch-xăng đơ Rốt</b>) dùng chữ cái La-tinh ghi âm tiếng Việt để truyền đạo. Năm <b>1651</b>, cuốn từ điển Việt – Bồ – La được in ở Rô-ma. <span class=\"mark\">Chữ Quốc ngữ</span> chính là chữ em đang đọc hôm nay.</li>\n  <li><b>Văn học, nghệ thuật:</b> văn học chữ Nôm, văn học dân gian phát triển; tranh dân gian Đông Hồ; tượng La Hán chùa Tây Phương; nhà bác học <b>Lê Quý Đôn</b>, danh y <b>Hải Thượng Lãn Ông Lê Hữu Trác</b>.</li></ul>\n </div>\n <div class=\"sec\"><h3>Khởi nghĩa nông dân Đàng Ngoài thế kỉ XVIII</h3>\n  <p>Giữa thế kỉ XVIII, chính quyền Lê – Trịnh mục nát, quan lại tham nhũng, ruộng đất bị chiếm đoạt, đói kém liên miên. Nông dân khắp nơi nổi dậy:</p>\n  <div class=\"tbl\"><table><tr><th>Cuộc khởi nghĩa</th><th>Thời gian</th><th>Địa bàn chính</th></tr>\n  <tr><td>Nguyễn Danh Phương</td><td>1740–1751</td><td>Tam Đảo (Vĩnh Phúc)</td></tr>\n  <tr><td>Nguyễn Hữu Cầu (Quận He)</td><td>1741–1751</td><td>Hải Dương, Đồ Sơn, Kinh Bắc</td></tr>\n  <tr><td>Hoàng Công Chất</td><td>1739–1769</td><td>Sơn Nam, sau lên Tây Bắc</td></tr>\n  <tr><td>Lê Duy Mật</td><td>1738–1770</td><td>Thanh Hoá, Nghệ An</td></tr></table></div>\n  <p>Các cuộc khởi nghĩa đều thất bại nhưng làm chính quyền Lê – Trịnh lung lay, dọn đường cho phong trào Tây Sơn.</p>\n </div>\n <div class=\"sec\"><h3>Phong trào Tây Sơn: từ đất võ đến kinh thành</h3>\n  <p>Năm <b>1771</b>, ba anh em <b>Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ</b> dựng cờ khởi nghĩa ở Tây Sơn thượng đạo (An Khê, Gia Lai ngày nay), với khẩu hiệu \"lấy của nhà giàu chia cho dân nghèo\".</p>\n  <ul><li><b>1777:</b> lật đổ chính quyền chúa Nguyễn ở Đàng Trong.</li>\n  <li><b>Tháng 1/1785, Rạch Gầm – Xoài Mút</b> (Tiền Giang): Nguyễn Huệ phục kích trên sông Tiền, <span class=\"mark\">đánh tan 5 vạn quân Xiêm</span> do Nguyễn Ánh cầu viện.</li>\n  <li><b>1786:</b> với khẩu hiệu \"phù Lê diệt Trịnh\", Nguyễn Huệ tiến ra Bắc, lật đổ chính quyền họ Trịnh, trả lại quyền cho vua Lê rồi rút về Nam.</li>\n  <li><b>Cuối 1788:</b> Lê Chiêu Thống cầu cứu nhà Thanh; <b>29 vạn quân Thanh</b> do Tôn Sĩ Nghị chỉ huy kéo sang chiếm Thăng Long. Ngày 22/12/1788, Nguyễn Huệ lên ngôi Hoàng đế ở Phú Xuân, lấy niên hiệu <b>Quang Trung</b>, rồi thần tốc tiến quân ra Bắc.</li>\n  <li><b>Tết Kỷ Dậu 1789:</b> đêm 30 Tết vượt sông Gián Khẩu; mùng 3 Tết hạ đồn Hà Hồi; rạng sáng <span class=\"mark\">mùng 5 Tết</span> quân chủ lực đánh tan đồn <b>Ngọc Hồi</b>, cánh quân khác diệt đồn <b>Đống Đa</b> (tướng giặc Sầm Nghi Đống thắt cổ tự tử). Trưa mùng 5, Quang Trung tiến vào Thăng Long, Tôn Sĩ Nghị tháo chạy.</li></ul>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Sơ đồ trận Ngọc Hồi Đống Đa: các mũi tiến công vào Thăng Long\">\n   <rect x=\"150\" y=\"10\" width=\"110\" height=\"40\" rx=\"8\" fill=\"var(--hl)\" fill-opacity=\"0.35\" stroke=\"var(--accent)\"/>\n   <text x=\"205\" y=\"34\" class=\"svgt\" text-anchor=\"middle\" font-weight=\"700\">Thăng Long</text>\n   <rect x=\"22\" y=\"70\" width=\"86\" height=\"28\" rx=\"6\" fill=\"var(--paper)\" stroke=\"var(--line)\"/>\n   <text x=\"65\" y=\"88\" class=\"svgt\" text-anchor=\"middle\">Đống Đa</text>\n   <rect x=\"172\" y=\"104\" width=\"86\" height=\"28\" rx=\"6\" fill=\"var(--paper)\" stroke=\"var(--line)\"/>\n   <text x=\"215\" y=\"122\" class=\"svgt\" text-anchor=\"middle\">Ngọc Hồi</text>\n   <rect x=\"160\" y=\"146\" width=\"110\" height=\"20\" rx=\"5\" fill=\"none\" stroke=\"var(--line)\" stroke-dasharray=\"3 2\"/>\n   <text x=\"215\" y=\"160\" class=\"svgm\" text-anchor=\"middle\">Hà Hồi (mùng 3 Tết)</text>\n   <line x1=\"215\" y1=\"146\" x2=\"215\" y2=\"134\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n   <line x1=\"215\" y1=\"104\" x2=\"215\" y2=\"54\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n   <polygon points=\"209,58 221,58 215,48\" fill=\"var(--accent)\"/>\n   <line x1=\"90\" y1=\"70\" x2=\"148\" y2=\"40\" stroke=\"var(--bad)\" stroke-width=\"2.5\"/>\n   <polygon points=\"143,34 151,45 156,36\" fill=\"var(--bad)\"/>\n   <text x=\"10\" y=\"58\" class=\"svgm\">Cánh quân Đô đốc Long</text>\n   <text x=\"10\" y=\"120\" class=\"svgm\">Mũi chủ lực: Quang Trung</text>\n   <text x=\"10\" y=\"134\" class=\"svgm\">đánh Ngọc Hồi rạng sáng</text>\n   <text x=\"10\" y=\"148\" class=\"svgm\">mùng 5 Tết Kỷ Dậu (1789)</text>\n   <text x=\"10\" y=\"165\" class=\"svgm\">Sơ đồ, không theo tỉ lệ</text>\n  </svg>\n  <p><b>Quang Trung xây dựng đất nước:</b> ban \"Chiếu khuyến nông\" để dân phiêu tán về quê làm ruộng; mở cửa ải, thông chợ búa; ban \"Chiếu lập học\", lập <b>Viện Sùng chính</b> dịch sách chữ Hán ra <span class=\"mark\">chữ Nôm</span> và đề cao chữ Nôm. Tiếc rằng năm 1792 ông đột ngột qua đời. Năm 1802, Nguyễn Ánh lật đổ triều Tây Sơn.</p>\n  <p><b>Ý nghĩa:</b> Tây Sơn lật đổ các chính quyền phong kiến mục nát Nguyễn, Trịnh, Lê, <span class=\"mark\">đặt nền tảng thống nhất đất nước</span>, đánh tan quân Xiêm và quân Thanh, bảo vệ độc lập dân tộc.</p>\n  <p><b>Dòng thời gian cả chương:</b></p>\n  <svg viewBox=\"0 0 280 263\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian lịch sử Việt Nam thế kỉ XVI đến XVIII\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"18.0\" x2=\"52\" y2=\"18.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"21.5\" class=\"svgm\" text-anchor=\"end\">1520</text>\n  <line x1=\"47\" y1=\"46.3\" x2=\"52\" y2=\"46.3\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"49.8\" class=\"svgm\" text-anchor=\"end\">1560</text>\n  <line x1=\"47\" y1=\"74.6\" x2=\"52\" y2=\"74.6\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"78.1\" class=\"svgm\" text-anchor=\"end\">1600</text>\n  <line x1=\"47\" y1=\"102.9\" x2=\"52\" y2=\"102.9\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"106.4\" class=\"svgm\" text-anchor=\"end\">1640</text>\n  <line x1=\"47\" y1=\"131.1\" x2=\"52\" y2=\"131.1\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"134.6\" class=\"svgm\" text-anchor=\"end\">1680</text>\n  <line x1=\"47\" y1=\"159.4\" x2=\"52\" y2=\"159.4\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"162.9\" class=\"svgm\" text-anchor=\"end\">1720</text>\n  <line x1=\"47\" y1=\"187.7\" x2=\"52\" y2=\"187.7\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"191.2\" class=\"svgm\" text-anchor=\"end\">1760</text>\n  <line x1=\"47\" y1=\"216.0\" x2=\"52\" y2=\"216.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"219.5\" class=\"svgm\" text-anchor=\"end\">1800</text>\n  <circle cx=\"52\" cy=\"22.9\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,22.9 64,22.9 68,22.9\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"26.9\" class=\"svgt\"><tspan font-weight=\"700\">1527</tspan> Mạc Đăng Dung lập nhà Mạc</text>\n  <circle cx=\"52\" cy=\"27.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,27.2 64,44.0 68,44.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"48.0\" class=\"svgt\"><tspan font-weight=\"700\">1533</tspan> Nam triều được dựng lên</text>\n  <circle cx=\"52\" cy=\"44.9\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,44.9 64,65.0 68,65.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"69.0\" class=\"svgt\"><tspan font-weight=\"700\">1558</tspan> Nguyễn Hoàng vào Thuận Hoá</text>\n  <circle cx=\"52\" cy=\"68.9\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,68.9 64,86.0 68,86.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"90.0\" class=\"svgt\"><tspan font-weight=\"700\">1592</tspan> Nam triều chiếm Thăng Long</text>\n  <circle cx=\"52\" cy=\"93.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,93.7 64,107.0 68,107.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"111.0\" class=\"svgt\"><tspan font-weight=\"700\">1627–1672</tspan> Trịnh, Nguyễn giao tranh</text>\n  <circle cx=\"52\" cy=\"143.9\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,143.9 64,143.9 68,143.9\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"147.9\" class=\"svgt\"><tspan font-weight=\"700\">1698</tspan> Lập phủ Gia Định</text>\n  <circle cx=\"52\" cy=\"195.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,195.5 64,195.5 68,195.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"199.5\" class=\"svgt\"><tspan font-weight=\"700\">1771</tspan> Khởi nghĩa Tây Sơn</text>\n  <circle cx=\"52\" cy=\"205.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,205.4 64,216.5 68,216.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"220.5\" class=\"svgt\"><tspan font-weight=\"700\">1785</tspan> Rạch Gầm – Xoài Mút</text>\n  <circle cx=\"52\" cy=\"208.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,208.2 64,237.5 68,237.5\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"241.5\" class=\"svgt\"><tspan font-weight=\"700\">1789</tspan> Ngọc Hồi – Đống Đa</text>\n  <text x=\"4\" y=\"259\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Hai chiến thắng của Nguyễn Huệ cách nhau đúng 4 năm: <b>1785</b> đánh Xiêm ở Nam (Rạch Gầm – Xoài Mút), <b>1789</b> đánh Thanh ở Bắc (Ngọc Hồi – Đống Đa). Mà 1789 cũng là năm Cách mạng Pháp bùng nổ: cùng một năm, ở hai đầu thế giới, đều có chuyện lớn.</div>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Quang Trung, Nguyễn Huệ</b> (1753–1792): thiên tài quân sự \"bách chiến bách thắng\". Từ Phú Xuân ra đến Thăng Long rồi đánh tan 29 vạn quân Thanh chỉ trong khoảng hơn một tháng.</li>\n  <li><b>Nguyễn Hữu Cảnh</b> (1650–1700): người lập phủ Gia Định năm 1698. Ở TP Hồ Chí Minh có đường Nguyễn Hữu Cảnh dọc sông Sài Gòn.</li>\n  <li><b>Bùi Thị Xuân</b>: nữ tướng Tây Sơn, giỏi võ nghệ, nổi tiếng với đội tượng binh (voi chiến). Bà chiến đấu đến cùng và hi sinh anh dũng.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao Quang Trung chọn đánh quân Thanh đúng dịp Tết?</summary>Quân Thanh chủ quan, lo ăn Tết, tính rằng sang xuân mới tiến đánh. Quang Trung cho quân ăn Tết sớm rồi hành quân thần tốc, đánh bất ngờ khi giặc lơi lỏng nhất. Ông hẹn \"ngày mùng 7 năm mới thì vào thành Thăng Long mở tiệc\", thực tế còn vào sớm hơn hai ngày.</details>\n  <details class=\"wq\"><summary>Vì sao Phố Hiến và Hội An lại sầm uất vào thế kỉ XVII?</summary>Cả hai nằm bên sông, gần biển, thuyền buôn nước ngoài ra vào thuận lợi, lại được chính quyền Trịnh và Nguyễn cho phép buôn bán. Sau này sông bị bồi lấp, thuyền lớn khó vào nên hai đô thị suy dần.</details>\n  <details class=\"wq\"><summary>Chữ Quốc ngữ do giáo sĩ phương Tây tạo ra, vì sao lại được dùng rộng rãi?</summary>Chữ Quốc ngữ ghi âm, học nhanh hơn rất nhiều so với chữ Hán, chữ Nôm. Đầu thế kỉ XX, các nhà yêu nước và trí thức đã vận động dùng chữ Quốc ngữ để mở mang dân trí.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🌸</span>Lễ hội Gò Đống Đa</b>Mùng 5 Tết hằng năm, người Hà Nội tổ chức lễ hội ở gò Đống Đa (quận Đống Đa) để tưởng nhớ chiến thắng Kỷ Dậu 1789.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏮</span>Phố cổ Hội An</b>Đô thị thương cảng thế kỉ XVII được UNESCO công nhận là Di sản văn hoá thế giới năm 1999, nổi tiếng với chùa Cầu và đêm phố đèn lồng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥁</span>Võ Tây Sơn, trống trận</b>Bình Định nay vẫn là \"đất võ\". Bảo tàng Quang Trung ở huyện Tây Sơn có biểu diễn trống trận Tây Sơn rất hào hùng.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏙️</span>Sài Gòn hơn 300 năm</b>Năm 1998, TP Hồ Chí Minh kỉ niệm 300 năm Sài Gòn, tính từ năm Nguyễn Hữu Cảnh lập phủ Gia Định (1698).</div>\n   <div class=\"app\"><b><span class=\"ico\">🖼️</span>Tranh Đông Hồ</b>Tranh \"Đám cưới chuột\", \"Lợn đàn\" ra đời ở làng Đông Hồ (Bắc Ninh), nay vẫn được làm, bán dịp Tết.</div>\n   <div class=\"app\"><b><span class=\"ico\">🔤</span>Chữ Quốc ngữ</b>Chữ em viết hằng ngày đã có lịch sử gần 400 năm, hình thành từ thế kỉ XVII.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để thử sắp xếp hành trình thần tốc của Quang Trung nhé.</p>",
  "formulas": [
   [
    "1527",
    "Mạc Đăng Dung lập nhà Mạc"
   ],
   [
    "1533–1592",
    "Chiến tranh Nam – Bắc triều (Lê – Mạc)"
   ],
   [
    "1558",
    "Nguyễn Hoàng vào trấn thủ Thuận Hoá"
   ],
   [
    "1627–1672",
    "Chiến tranh Trịnh – Nguyễn, sông Gianh làm ranh giới Đàng Trong, Đàng Ngoài"
   ],
   [
    "1651",
    "Từ điển Việt – Bồ – La của A-lếch-xăng đơ Rốt được in, đánh dấu bước phát triển của chữ Quốc ngữ"
   ],
   [
    "1698",
    "Nguyễn Hữu Cảnh lập phủ Gia Định"
   ],
   [
    "1771",
    "Khởi nghĩa Tây Sơn bùng nổ"
   ],
   [
    "1/1785",
    "Chiến thắng Rạch Gầm – Xoài Mút, đánh tan 5 vạn quân Xiêm"
   ],
   [
    "1786",
    "Nguyễn Huệ lật đổ chính quyền họ Trịnh"
   ],
   [
    "Mùng 5 Tết Kỷ Dậu (1789)",
    "Chiến thắng Ngọc Hồi – Đống Đa, đánh tan 29 vạn quân Thanh"
   ]
  ],
  "quiz": [
   {
    "q": "Ranh giới chia cắt Đàng Trong và Đàng Ngoài là con sông nào?",
    "o": [
     "Sông Gianh (Quảng Bình)",
     "Sông Bến Hải (Quảng Trị)",
     "Sông Hồng",
     "Sông Tiền"
    ],
    "why": "Sau 7 lần giao tranh (1627–1672), Trịnh và Nguyễn lấy sông Gianh làm ranh giới. Sông Bến Hải là giới tuyến quân sự tạm thời theo Hiệp định Giơ-ne-vơ 1954."
   },
   {
    "q": "Nhà Mạc được thành lập năm nào, do ai lập ra?",
    "o": [
     "1527, Mạc Đăng Dung",
     "1533, Nguyễn Kim",
     "1558, Nguyễn Hoàng",
     "1592, Trịnh Kiểm"
    ],
    "why": "Năm 1527 Mạc Đăng Dung phế vua Lê lập nhà Mạc. Năm 1533 Nguyễn Kim dựng Nam triều, mở đầu chiến tranh Nam – Bắc triều."
   },
   {
    "q": "Chiến thắng Rạch Gầm – Xoài Mút (1785) đánh tan quân xâm lược nào?",
    "o": [
     "5 vạn quân Xiêm",
     "29 vạn quân Thanh",
     "Quân Nguyên Mông",
     "Quân Minh"
    ],
    "why": "Nguyễn Ánh cầu viện Xiêm. Nguyễn Huệ phục kích trên đoạn sông Tiền từ Rạch Gầm đến Xoài Mút (Tiền Giang), gần như tiêu diệt toàn bộ đạo quân Xiêm."
   },
   {
    "q": "Trận Ngọc Hồi – Đống Đa diễn ra vào thời gian nào?",
    "o": [
     "Mùng 5 Tết Kỷ Dậu (đầu năm 1789)",
     "Mùng 5 Tết Ất Tỵ (1785)",
     "Rằm tháng Giêng năm 1771",
     "Mùng 1 Tết năm 1802"
    ],
    "why": "Rạng sáng mùng 5 Tết Kỷ Dậu (30/1/1789) quân Tây Sơn hạ đồn Ngọc Hồi, Đống Đa; trưa hôm đó Quang Trung vào Thăng Long."
   },
   {
    "q": "Năm 1698, ai được chúa Nguyễn cử vào kinh lược và lập phủ Gia Định?",
    "o": [
     "Nguyễn Hữu Cảnh",
     "Nguyễn Hoàng",
     "Mạc Cửu",
     "Nguyễn Huệ"
    ],
    "why": "Năm 1698 thường được coi là năm khai sinh Sài Gòn. TP Hồ Chí Minh kỉ niệm 300 năm vào năm 1998."
   },
   {
    "q": "Câu \"Thứ nhất Kinh Kỳ, thứ nhì Phố Hiến\" nói về điều gì?",
    "o": [
     "Sự sầm uất của hai đô thị Thăng Long và Phố Hiến ở Đàng Ngoài thế kỉ XVII",
     "Hai kinh đô của nhà Tây Sơn",
     "Hai trận đánh lớn của Quang Trung",
     "Hai trung tâm Phật giáo lớn nhất Đàng Trong"
    ],
    "why": "Kinh Kỳ là Thăng Long (Kẻ Chợ). Phố Hiến (Hưng Yên) là nơi thương nhân Nhật, Hoa, Hà Lan đến buôn bán."
   },
   {
    "q": "Chữ Quốc ngữ ban đầu được tạo ra nhằm mục đích gì?",
    "o": [
     "Giúp các giáo sĩ phương Tây truyền đạo Công giáo",
     "Thay thế chữ Hán trong thi cử của nhà Lê",
     "Ghi chép sổ sách cho thương nhân Nhật Bản",
     "Làm chữ viết chính thức của nhà Tây Sơn"
    ],
    "why": "Giáo sĩ dùng chữ cái La-tinh ghi âm tiếng Việt để học tiếng và giảng đạo. Nhà Tây Sơn lại đề cao chữ Nôm chứ không phải chữ Quốc ngữ."
   },
   {
    "q": "Thời Quang Trung, chữ viết nào được đề cao, dùng trong văn bản nhà nước và dịch sách?",
    "o": [
     "Chữ Nôm",
     "Chữ Quốc ngữ",
     "Chữ Hán",
     "Chữ Phạn"
    ],
    "why": "Viện Sùng chính do La Sơn Phu tử Nguyễn Thiếp đứng đầu dịch sách chữ Hán ra chữ Nôm, thể hiện tinh thần tự chủ văn hoá."
   },
   {
    "q": "Ý nghĩa lớn nhất của phong trào Tây Sơn đối với đất nước là gì?",
    "o": [
     "Lật đổ các chính quyền phong kiến Nguyễn, Trịnh, Lê, đặt nền tảng thống nhất đất nước và đánh tan quân xâm lược Xiêm, Thanh",
     "Mở cửa cho thực dân phương Tây vào buôn bán",
     "Chia đôi đất nước thành Đàng Trong, Đàng Ngoài",
     "Đưa Công giáo thành quốc đạo"
    ],
    "why": "Phong trào vừa có công thống nhất (xoá bỏ ranh giới sông Gianh), vừa có công bảo vệ độc lập dân tộc."
   },
   {
    "q": "Đọc bảng: các cuộc khởi nghĩa Lê Duy Mật (1738–1770) và Nguyễn Danh Phương (1740–1751). Cuộc khởi nghĩa nào kéo dài hơn và hơn bao nhiêu năm?",
    "o": [
     "Lê Duy Mật, dài hơn 21 năm",
     "Nguyễn Danh Phương, dài hơn 21 năm",
     "Lê Duy Mật, dài hơn 11 năm",
     "Bằng nhau"
    ],
    "why": "Lê Duy Mật: 1770 − 1738 = 32 năm; Nguyễn Danh Phương: 1751 − 1740 = 11 năm. Chênh nhau 32 − 11 = 21 năm."
   },
   {
    "q": "Đội Hoàng Sa thời chúa Nguyễn có ý nghĩa gì với Việt Nam ngày nay?",
    "o": [
     "Là bằng chứng lịch sử về việc Nhà nước Việt Nam thực thi chủ quyền đối với quần đảo Hoàng Sa, Trường Sa",
     "Là đội quân đánh quân Thanh năm 1789",
     "Là đội thương thuyền buôn bán với Nhật Bản",
     "Là đội khai hoang vùng Gia Định"
    ],
    "why": "Hằng năm đội Hoàng Sa ra đảo khai thác sản vật, đo đạc, cắm mốc. Hiện nay ở đảo Lý Sơn (Quảng Ngãi) vẫn có lễ Khao lề thế lính Hoàng Sa."
   },
   {
    "q": "Vì sao Quang Trung chọn thời điểm Tết để đánh quân Thanh?",
    "o": [
     "Lúc quân Thanh chủ quan, lo ăn Tết, có thể đánh bất ngờ",
     "Vì quân Tây Sơn chỉ quen đánh mùa xuân",
     "Vì nhà Thanh đã rút phần lớn quân về nước",
     "Vì thời tiết mùa xuân thuận lợi cho voi chiến"
    ],
    "why": "Quân Thanh định ra giêng mới tiến đánh. Quang Trung cho quân ăn Tết trước rồi hành quân thần tốc, đánh lúc giặc lơi lỏng nhất."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l4",
  "position": 4,
  "title": "Châu Âu và nước Mỹ cuối thế kỉ XVIII – đầu thế kỉ XX",
  "icon": "🏭",
  "lab": "su_timeline",
  "theory": "<div class=\"sec\"><h3>Các nước Âu – Mỹ: từ tư bản đến đế quốc</h3>\n  <p>Sau Cách mạng công nghiệp, chủ nghĩa tư bản thắng thế ở Âu – Mỹ. Nhiều cuộc cách mạng, cải cách tiếp tục diễn ra để <span class=\"mark\">xác lập chế độ tư bản</span>:</p>\n  <ul><li><b>Mỹ:</b> <b>Nội chiến (1861–1865)</b> giữa miền Bắc (công nghiệp) và miền Nam (đồn điền dùng nô lệ). Tổng thống <b>Lin-côn</b> ban bố sắc lệnh giải phóng nô lệ; miền Bắc thắng.</li>\n  <li><b>Đức, I-ta-li-a:</b> hoàn thành thống nhất đất nước (I-ta-li-a năm 1870, Đức năm <b>1871</b> dưới sự chỉ đạo của thủ tướng <b>Bi-xmác</b>).</li>\n  <li><b>Pháp:</b> ngày <b>18/3/1871</b>, nhân dân Pa-ri khởi nghĩa, lập <span class=\"mark\">Công xã Pa-ri</span>, nhà nước kiểu mới đầu tiên của giai cấp vô sản. Công xã tồn tại 72 ngày thì bị đàn áp.</li></ul>\n  <p>Cuối thế kỉ XIX, các công ty độc quyền ra đời, các nước tư bản đẩy mạnh xâm chiếm thuộc địa: chủ nghĩa tư bản chuyển sang <b>chủ nghĩa đế quốc</b>.</p>\n  <div class=\"tbl\"><table><tr><th>Nước</th><th>Đặc điểm nổi bật cuối thế kỉ XIX, đầu thế kỉ XX</th></tr>\n  <tr><td>Anh</td><td>Hệ thống thuộc địa lớn nhất, \"đế quốc mà Mặt Trời không bao giờ lặn\"</td></tr>\n  <tr><td>Pháp</td><td>Thuộc địa lớn thứ hai; nhiều vốn đem cho vay nước ngoài</td></tr>\n  <tr><td>Đức</td><td>Công nghiệp vươn lên rất nhanh nhưng ít thuộc địa, hiếu chiến, đòi chia lại thế giới</td></tr>\n  <tr><td>Mỹ</td><td>Công nghiệp đứng đầu thế giới, nhiều \"ông vua\" công nghiệp (dầu mỏ, thép, ô tô)</td></tr></table></div>\n </div>\n <div class=\"sec\"><h3>Phong trào công nhân và chủ nghĩa Mác</h3>\n  <ul><li><b>Buổi đầu:</b> công nhân làm việc cực nhọc, cho rằng máy móc gây khổ nên <b>đập phá máy móc</b>, đốt công xưởng; về sau lập công đoàn, bãi công đòi tăng lương, giảm giờ làm.</li>\n  <li><b>Nửa đầu thế kỉ XIX:</b> khởi nghĩa của thợ dệt Li-ông (Pháp, 1831 và 1834), thợ dệt Xi-lê-di (Đức, 1844), <b>phong trào Hiến chương</b> ở Anh (1838–1848). Các phong trào thất bại vì chưa có lí luận cách mạng soi đường.</li>\n  <li><b>Chủ nghĩa Mác ra đời:</b> <b>Các Mác</b> và <b>Phri-đrích Ăng-ghen</b> soạn <span class=\"mark\">Tuyên ngôn của Đảng Cộng sản (2/1848)</span>, kết thúc bằng lời kêu gọi \"Vô sản tất cả các nước, đoàn kết lại!\". Lí luận này chỉ ra sứ mệnh lịch sử của giai cấp công nhân.</li>\n  <li><b>Các tổ chức quốc tế:</b> <b>Quốc tế thứ nhất (1864)</b> do Mác lãnh đạo; <b>Quốc tế thứ hai (1889)</b> do Ăng-ghen góp phần thành lập.</li>\n  <li><b>1/5/1886:</b> hàng chục vạn công nhân Mỹ, sôi nổi nhất ở Chi-ca-gô, bãi công đòi <span class=\"mark\">ngày làm 8 giờ</span>. Quốc tế thứ hai lấy ngày 1/5 làm <b>ngày Quốc tế Lao động</b>.</li>\n  <li><b>Ở Nga:</b> năm 1903, tại Đại hội II của Đảng Công nhân dân chủ xã hội Nga, <b>Lê-nin</b> cùng những người cách mạng xây dựng phái <b>Bôn-sê-vích</b>, một đảng kiểu mới của giai cấp vô sản.</li></ul>\n </div>\n <div class=\"sec\"><h3>Chiến tranh thế giới thứ nhất (1914–1918)</h3>\n  <ul><li><b>Nguyên nhân sâu xa:</b> sự phát triển không đều của các nước đế quốc dẫn tới mâu thuẫn gay gắt về <span class=\"mark\">thuộc địa</span>. Hình thành hai khối đối địch: <b>phe Liên minh</b> (Đức, Áo – Hung) và <b>phe Hiệp ước</b> (Anh, Pháp, Nga).</li>\n  <li><b>Duyên cớ:</b> ngày <b>28/6/1914</b>, Thái tử Áo – Hung bị một người Xéc-bi ám sát ở Xa-ra-e-vô (Bô-xni-a). Ngày <b>28/7/1914</b>, Áo – Hung tuyên chiến với Xéc-bi; vài ngày sau Đức tuyên chiến với Nga, Pháp; Anh tuyên chiến với Đức. Chiến tranh lan rộng.</li>\n  <li><b>Diễn biến:</b> giai đoạn 1914–1916 phe Liên minh tấn công, phe Hiệp ước phòng ngự; trận <b>Véc-đoong</b> (1916) cực kì đẫm máu. Giai đoạn 1917–1918: năm 1917 Mỹ tham chiến bên phe Hiệp ước; phe Liên minh thua dần. Ngày <b>11/11/1918, Đức đầu hàng</b>, chiến tranh kết thúc.</li>\n  <li><b>Hậu quả:</b> khoảng <b>10 triệu người chết</b>, hơn 20 triệu người bị thương; châu Âu bị tàn phá nặng nề. Bản đồ thế giới bị chia lại có lợi cho các nước thắng trận.</li>\n  <li><b>Tính chất:</b> <span class=\"mark\">chiến tranh đế quốc phi nghĩa</span>, giành giật thuộc địa, gây đau khổ cho nhân dân mọi nước.</li></ul>\n  <div class=\"note\"><b>Dễ nhầm:</b> 28/6/1914 là ngày <b>ám sát</b> Thái tử (duyên cớ); 28/7/1914 mới là ngày <b>chiến tranh bùng nổ</b>. Hai ngày \"28\" cách nhau đúng một tháng. Và I-ta-li-a ban đầu ở phe Liên minh nhưng năm 1915 lại đứng về phe Hiệp ước.</div>\n </div>\n <div class=\"sec\"><h3>Cách mạng tháng Mười Nga năm 1917</h3>\n  <p><b>Bối cảnh:</b> đầu thế kỉ XX, nước Nga dưới ách Nga hoàng Ni-cô-lai II lạc hậu, lại sa lầy trong chiến tranh: quân đội thua trận, nhân dân đói khổ.</p>\n  <ul><li><b>Cách mạng tháng Hai (2/1917):</b> công nhân, binh lính Pê-tơ-rô-grát khởi nghĩa, <span class=\"mark\">lật đổ chế độ Nga hoàng</span>. Xuất hiện cục diện <b>hai chính quyền song song</b>: Chính phủ lâm thời của tư sản và các Xô viết đại biểu công nhân, binh lính.</li>\n  <li><b>Chuẩn bị:</b> tháng 4/1917 Lê-nin về nước, đề ra Luận cương tháng Tư, chủ trương chuyển sang cách mạng xã hội chủ nghĩa.</li>\n  <li><b>Cách mạng tháng Mười:</b> đêm 24/10/1917 (theo lịch Nga cũ, tức ngày <b>6/11</b> theo lịch hiện nay) quân khởi nghĩa chiếm các vị trí then chốt ở Pê-tơ-rô-grát; đêm 25/10 (7/11) chiếm <b>Cung điện Mùa Đông</b>, bắt giữ Chính phủ lâm thời. Chính quyền Xô viết ra đời, ban hành <b>Sắc lệnh hoà bình</b> và <b>Sắc lệnh ruộng đất</b>.</li>\n  <li><b>Ý nghĩa:</b> lần đầu tiên công nhân, nông dân lên nắm chính quyền, xây dựng nhà nước xã hội chủ nghĩa; cổ vũ phong trào giải phóng dân tộc ở các thuộc địa. Nguyễn Ái Quốc tìm thấy ở đây con đường cứu nước cho Việt Nam.</li></ul>\n  <div class=\"note\"><b>Dễ nhầm:</b> Gọi là \"tháng Mười\" vì nước Nga khi đó dùng lịch cũ (lịch Giu-li-an), chậm 13 ngày. Theo lịch ta dùng bây giờ, cách mạng thắng lợi ngày <b>7/11/1917</b>.</div>\n </div>\n <div class=\"sec\"><h3>Dòng thời gian</h3>\n  <svg viewBox=\"0 0 280 270\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian châu Âu và Mỹ 1840 đến 1918\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"18.0\" x2=\"52\" y2=\"18.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"21.5\" class=\"svgm\" text-anchor=\"end\">1840</text>\n  <line x1=\"47\" y1=\"67.5\" x2=\"52\" y2=\"67.5\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"71.0\" class=\"svgm\" text-anchor=\"end\">1860</text>\n  <line x1=\"47\" y1=\"117.0\" x2=\"52\" y2=\"117.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"120.5\" class=\"svgm\" text-anchor=\"end\">1880</text>\n  <line x1=\"47\" y1=\"166.5\" x2=\"52\" y2=\"166.5\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"170.0\" class=\"svgm\" text-anchor=\"end\">1900</text>\n  <line x1=\"47\" y1=\"216.0\" x2=\"52\" y2=\"216.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"219.5\" class=\"svgm\" text-anchor=\"end\">1920</text>\n  <circle cx=\"52\" cy=\"38.0\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,38.0 64,38.0 68,38.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"42.0\" class=\"svgt\"><tspan font-weight=\"700\">1848</tspan> Tuyên ngôn Đảng Cộng sản</text>\n  <circle cx=\"52\" cy=\"70.0\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,70.0 64,70.0 68,70.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"74.0\" class=\"svgt\"><tspan font-weight=\"700\">1861–1865</tspan> Nội chiến ở Mỹ</text>\n  <circle cx=\"52\" cy=\"79.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,79.2 64,91.0 68,91.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"95.0\" class=\"svgt\"><tspan font-weight=\"700\">1864</tspan> Quốc tế thứ nhất</text>\n  <circle cx=\"52\" cy=\"95.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,95.2 64,112.0 68,112.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"116.0\" class=\"svgt\"><tspan font-weight=\"700\">1871</tspan> Công xã Pa-ri</text>\n  <circle cx=\"52\" cy=\"132.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,132.7 64,133.0 68,133.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"137.0\" class=\"svgt\"><tspan font-weight=\"700\">1/5/1886</tspan> Bãi công ở Chi-ca-gô</text>\n  <circle cx=\"52\" cy=\"140.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,140.6 64,154.0 68,154.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"158.0\" class=\"svgt\"><tspan font-weight=\"700\">1889</tspan> Quốc tế thứ hai</text>\n  <circle cx=\"52\" cy=\"202.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,202.6 64,202.6 68,202.6\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"206.6\" class=\"svgt\"><tspan font-weight=\"700\">1914</tspan> Chiến tranh thế giới bùng nổ</text>\n  <circle cx=\"52\" cy=\"209.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,209.8 64,223.6 68,223.6\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"227.6\" class=\"svgt\"><tspan font-weight=\"700\">1917</tspan> Cách mạng Nga</text>\n  <circle cx=\"52\" cy=\"213.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,213.2 64,244.6 68,244.6\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"248.6\" class=\"svgt\"><tspan font-weight=\"700\">11/11/1918</tspan> Đức đầu hàng</text>\n  <text x=\"4\" y=\"266\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Chiến tranh thế giới thứ nhất: <b>14 bắt đầu, 18 kết thúc</b>, kéo dài hơn 4 năm. Ba ngày cần nhớ: 28/6 (ám sát), 28/7 (bùng nổ), 11/11 (kết thúc, \"11 giờ ngày 11 tháng 11\" súng ngừng nổ).</div>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Các Mác</b> (1818–1883) và <b>Ph. Ăng-ghen</b> (1820–1895): hai nhà tư tưởng người Đức, đôi bạn thân suốt đời. Ăng-ghen là con nhà chủ xưởng nhưng dành cả đời giúp đỡ Mác và hoàn thành bộ \"Tư bản\" sau khi Mác mất.</li>\n  <li><b>Lin-côn</b> (1809–1865): tổng thống thứ 16 của Mỹ, xuất thân nghèo, tự học. Ông lãnh đạo miền Bắc thắng Nội chiến, xoá bỏ chế độ nô lệ, bị ám sát ngay sau chiến thắng.</li>\n  <li><b>V. I. Lê-nin</b> (1870–1924): lãnh tụ của Đảng Bôn-sê-vích, người lãnh đạo Cách mạng tháng Mười và sáng lập nhà nước Xô viết.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao ngày 1/5 lại là ngày nghỉ lễ của người lao động khắp thế giới?</summary>Để ghi nhớ cuộc bãi công của công nhân Chi-ca-gô ngày 1/5/1886 đòi ngày làm 8 giờ. Nhờ những cuộc đấu tranh ấy, ngày nay luật lao động nhiều nước, trong đó có Việt Nam, quy định thời giờ làm việc bình thường không quá 8 giờ một ngày.</details>\n  <details class=\"wq\"><summary>Chỉ một vụ ám sát, sao có thể gây ra cả một cuộc chiến tranh thế giới?</summary>Vụ ám sát chỉ là cái cớ. Các nước đế quốc đã chạy đua vũ trang, chia thành hai khối từ trước và đều muốn chia lại thuộc địa. Thùng thuốc súng đã đầy, chỉ cần một tia lửa.</details>\n  <details class=\"wq\"><summary>Vì sao Đức lại hiếu chiến nhất?</summary>Đức thống nhất muộn (1871) nên khi công nghiệp vươn lên mạnh thì thế giới đã bị Anh, Pháp chia gần hết. Đức \"đến muộn\" nên muốn dùng vũ lực để chia lại.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🛠️</span>Ngày Quốc tế Lao động 1/5</b>Ở Việt Nam, 30/4 và 1/5 là kì nghỉ dài, kết hợp ngày Giải phóng miền Nam và ngày Quốc tế Lao động.</div>\n   <div class=\"app\"><b><span class=\"ico\">⏰</span>Ngày làm 8 giờ</b>Bố mẹ em đi làm 8 giờ một ngày là thành quả đấu tranh từ thế kỉ XIX của công nhân khắp thế giới.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌺</span>Hoa anh túc đỏ</b>Ở Anh và nhiều nước, người ta cài hoa anh túc đỏ dịp 11/11 để tưởng nhớ những người chết trong Chiến tranh thế giới thứ nhất.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚩</span>Ngày 7/11</b>Ngày kỉ niệm Cách mạng tháng Mười Nga; ở Việt Nam, báo chí vẫn nhắc đến dịp này hằng năm.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏛️</span>Tượng đài Lê-nin ở Hà Nội</b>Vườn hoa Lê-nin trên đường Điện Biên Phủ có tượng Lê-nin, khánh thành năm 1985.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để đặt các sự kiện lên dòng thời gian cho đúng thứ tự nhé.</p>",
  "formulas": [
   [
    "2/1848",
    "Tuyên ngôn của Đảng Cộng sản (Mác, Ăng-ghen) ra đời"
   ],
   [
    "1861–1865",
    "Nội chiến ở Mỹ, Lin-côn xoá bỏ chế độ nô lệ"
   ],
   [
    "28/9/1864",
    "Quốc tế thứ nhất thành lập ở Luân Đôn"
   ],
   [
    "18/3/1871",
    "Công xã Pa-ri thành lập (tồn tại 72 ngày)"
   ],
   [
    "1/5/1886",
    "Công nhân Chi-ca-gô bãi công đòi ngày làm 8 giờ"
   ],
   [
    "14/7/1889",
    "Quốc tế thứ hai thành lập ở Pa-ri"
   ],
   [
    "28/7/1914",
    "Chiến tranh thế giới thứ nhất bùng nổ"
   ],
   [
    "2/1917",
    "Cách mạng tháng Hai, lật đổ Nga hoàng"
   ],
   [
    "25/10/1917 (7/11/1917)",
    "Cách mạng tháng Mười Nga thắng lợi"
   ],
   [
    "11/11/1918",
    "Đức đầu hàng, Chiến tranh thế giới thứ nhất kết thúc"
   ]
  ],
  "quiz": [
   {
    "q": "Tuyên ngôn của Đảng Cộng sản do ai soạn thảo và ra đời năm nào?",
    "o": [
     "Các Mác và Ph. Ăng-ghen, năm 1848",
     "Lê-nin, năm 1903",
     "Các Mác, năm 1871",
     "Ph. Ăng-ghen, năm 1889"
    ],
    "why": "Tuyên ngôn công bố tháng 2/1848, là văn kiện đầu tiên của chủ nghĩa Mác, kết thúc bằng câu \"Vô sản tất cả các nước, đoàn kết lại!\"."
   },
   {
    "q": "Ngày Quốc tế Lao động 1/5 bắt nguồn từ sự kiện nào?",
    "o": [
     "Cuộc bãi công của công nhân Chi-ca-gô (Mỹ) ngày 1/5/1886 đòi ngày làm 8 giờ",
     "Công xã Pa-ri thành lập năm 1871",
     "Cách mạng tháng Hai Nga năm 1917",
     "Quốc tế thứ nhất thành lập năm 1864"
    ],
    "why": "Quốc tế thứ hai (1889) quyết định lấy ngày 1/5 làm ngày đoàn kết đấu tranh của công nhân toàn thế giới."
   },
   {
    "q": "Công xã Pa-ri (1871) có ý nghĩa gì?",
    "o": [
     "Là nhà nước kiểu mới đầu tiên của giai cấp vô sản",
     "Là cuộc cách mạng tư sản đầu tiên ở Pháp",
     "Là nhà nước thống nhất nước Đức",
     "Là cuộc chiến tranh giành thuộc địa của Pháp"
    ],
    "why": "Công xã chỉ tồn tại 72 ngày (18/3 đến 28/5/1871) nhưng để lại bài học quý về chính quyền của người lao động."
   },
   {
    "q": "Duyên cớ trực tiếp của Chiến tranh thế giới thứ nhất là",
    "o": [
     "Thái tử Áo – Hung bị ám sát ở Xa-ra-e-vô ngày 28/6/1914",
     "Đức tấn công Ba Lan năm 1914",
     "Mỹ tham chiến năm 1917",
     "Cách mạng tháng Mười Nga năm 1917"
    ],
    "why": "Đức tấn công Ba Lan (1939) là chuyện của Chiến tranh thế giới thứ hai. Nguyên nhân sâu xa của chiến tranh 1914 là mâu thuẫn về thuộc địa."
   },
   {
    "q": "Nguyên nhân sâu xa của Chiến tranh thế giới thứ nhất là gì?",
    "o": [
     "Mâu thuẫn giữa các nước đế quốc về vấn đề thuộc địa",
     "Mâu thuẫn tôn giáo giữa châu Âu và châu Á",
     "Phong trào công nhân phát triển mạnh",
     "Nước Nga muốn truyền bá chủ nghĩa xã hội"
    ],
    "why": "Các nước \"đến muộn\" như Đức có ít thuộc địa, muốn chia lại thế giới, đối đầu với Anh, Pháp."
   },
   {
    "q": "Hai khối đế quốc đối địch trong Chiến tranh thế giới thứ nhất là",
    "o": [
     "phe Liên minh (Đức, Áo – Hung) và phe Hiệp ước (Anh, Pháp, Nga)",
     "phe Đồng minh (Mỹ, Liên Xô) và phe Trục (Đức, Nhật)",
     "phe tư bản và phe xã hội chủ nghĩa",
     "phe Anh – Đức và phe Pháp – Nga"
    ],
    "why": "\"Đồng minh\" và \"phe Trục\" là các khối trong Chiến tranh thế giới thứ hai (1939–1945)."
   },
   {
    "q": "Chiến tranh thế giới thứ nhất kết thúc khi nào?",
    "o": [
     "11/11/1918, Đức đầu hàng",
     "28/7/1918, Áo – Hung đầu hàng",
     "7/11/1917, Nga rút khỏi chiến tranh",
     "4/7/1919, kí Hoà ước Véc-xai"
    ],
    "why": "Ngày 11/11/1918 Đức kí đầu hàng. Ở Anh, Pháp, ngày này là ngày tưởng niệm người đã khuất trong chiến tranh."
   },
   {
    "q": "Kết quả của Cách mạng tháng Hai năm 1917 ở Nga là",
    "o": [
     "Lật đổ chế độ Nga hoàng, hình thành hai chính quyền song song",
     "Thành lập ngay nhà nước Xô viết duy nhất",
     "Nước Nga rút khỏi Chiến tranh thế giới",
     "Lê-nin lên làm Nga hoàng"
    ],
    "why": "Sau tháng Hai có Chính phủ lâm thời của tư sản và các Xô viết công nhân, binh lính. Phải đến tháng Mười, chính quyền mới thuộc hẳn về Xô viết."
   },
   {
    "q": "Vì sao Cách mạng tháng Mười Nga thắng lợi ngày 7/11/1917 nhưng vẫn được gọi là \"tháng Mười\"?",
    "o": [
     "Vì nước Nga khi đó dùng lịch cũ, theo lịch này là ngày 25/10",
     "Vì cách mạng kéo dài suốt tháng Mười",
     "Vì Lê-nin về nước vào tháng Mười",
     "Vì Cách mạng tháng Hai kết thúc vào tháng Mười"
    ],
    "why": "Lịch Nga cũ (lịch Giu-li-an) chậm hơn lịch hiện nay 13 ngày: 25/10 lịch cũ là 7/11 lịch mới."
   },
   {
    "q": "Đọc số liệu: Chiến tranh thế giới thứ nhất khiến khoảng 10 triệu người chết và hơn 20 triệu người bị thương. Số người bị thương gấp khoảng mấy lần số người chết?",
    "o": [
     "Khoảng 2 lần",
     "Khoảng 10 lần",
     "Khoảng 20 lần",
     "Khoảng một nửa"
    ],
    "why": "20 triệu : 10 triệu = 2. Hơn 30 triệu người chết và bị thương: một cái giá khủng khiếp cho cuộc chiến giành thuộc địa."
   },
   {
    "q": "Ý nghĩa quốc tế quan trọng của Cách mạng tháng Mười Nga là gì?",
    "o": [
     "Cổ vũ phong trào cách mạng vô sản và phong trào giải phóng dân tộc ở các thuộc địa, trong đó có Việt Nam",
     "Giúp các nước đế quốc chia lại thuộc địa",
     "Chấm dứt hoàn toàn mọi cuộc chiến tranh trên thế giới",
     "Đưa nước Nga trở thành thuộc địa của Đức"
    ],
    "why": "Nguyễn Ái Quốc tìm thấy con đường cứu nước theo cách mạng vô sản sau khi đọc Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa (1920)."
   },
   {
    "q": "Nước nào trong các nước sau có hệ thống thuộc địa lớn nhất thế giới đầu thế kỉ XX?",
    "o": [
     "Anh",
     "Đức",
     "Mỹ",
     "I-ta-li-a"
    ],
    "why": "Anh được gọi là \"đế quốc mà Mặt Trời không bao giờ lặn\" vì thuộc địa trải khắp các múi giờ. Đức công nghiệp mạnh nhưng ít thuộc địa."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l5",
  "position": 5,
  "title": "Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật thế kỉ XVIII – XIX",
  "icon": "💡",
  "lab": "su_invent",
  "theory": "<div class=\"sec\"><h3>Một thế kỉ \"bùng nổ\" phát minh</h3>\n  <p>Hãy tưởng tượng một người sinh năm 1780: hồi nhỏ, muốn đi xa phải cưỡi ngựa, tối thắp đèn dầu. Đến khi về già, họ đã có thể đi tàu hoả, gửi điện báo sang thành phố khác. Thế kỉ XVIII–XIX chính là thời <span class=\"mark\">khoa học và kĩ thuật thay đổi cuộc sống nhanh chưa từng thấy</span>.</p>\n  <p>Vì sao? Chủ nghĩa tư bản cần máy móc mới để tăng năng suất, kiếm lợi nhuận; các nhà tư bản sẵn sàng bỏ tiền đầu tư cho phát minh. Khoa học và sản xuất thúc đẩy lẫn nhau.</p>\n  <svg viewBox=\"0 0 280 282\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian các phát minh thế kỉ XVIII, XIX\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"238\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"51.8\" x2=\"52\" y2=\"51.8\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"55.3\" class=\"svgm\" text-anchor=\"end\">1800</text>\n  <line x1=\"47\" y1=\"119.5\" x2=\"52\" y2=\"119.5\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"123.0\" class=\"svgm\" text-anchor=\"end\">1840</text>\n  <line x1=\"47\" y1=\"187.2\" x2=\"52\" y2=\"187.2\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"190.7\" class=\"svgm\" text-anchor=\"end\">1880</text>\n  <circle cx=\"52\" cy=\"24.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,24.8 64,24.8 68,24.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"28.8\" class=\"svgt\"><tspan font-weight=\"700\">1784</tspan> Máy hơi nước (Giêm Oát)</text>\n  <circle cx=\"52\" cy=\"63.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,63.7 64,63.7 68,63.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"67.7\" class=\"svgt\"><tspan font-weight=\"700\">1807</tspan> Tàu thuỷ hơi nước (Phun-tơn)</text>\n  <circle cx=\"52\" cy=\"75.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,75.5 64,84.7 68,84.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"88.7\" class=\"svgt\"><tspan font-weight=\"700\">1814</tspan> Đầu máy xe lửa (Xti-phen-xơn)</text>\n  <circle cx=\"52\" cy=\"104.3\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,104.3 64,105.7 68,105.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"109.7\" class=\"svgt\"><tspan font-weight=\"700\">1831</tspan> Cảm ứng điện từ (Fa-ra-đây)</text>\n  <circle cx=\"52\" cy=\"151.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,151.7 64,151.7 68,151.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"155.7\" class=\"svgt\"><tspan font-weight=\"700\">1859</tspan> Thuyết tiến hoá (Đác-uyn)</text>\n  <circle cx=\"52\" cy=\"168.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,168.6 64,172.7 68,172.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"176.7\" class=\"svgt\"><tspan font-weight=\"700\">1869</tspan> Bảng tuần hoàn (Men-đê-lê-ép)</text>\n  <circle cx=\"52\" cy=\"180.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,180.5 64,193.7 68,193.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"197.7\" class=\"svgt\"><tspan font-weight=\"700\">1876</tspan> Điện thoại (Gra-ham Beo)</text>\n  <circle cx=\"52\" cy=\"185.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,185.5 64,214.7 68,214.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"218.7\" class=\"svgt\"><tspan font-weight=\"700\">1879</tspan> Bóng đèn điện (Ê-đi-xơn)</text>\n  <circle cx=\"52\" cy=\"195.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,195.7 64,235.7 68,235.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"239.7\" class=\"svgt\"><tspan font-weight=\"700\">1885</tspan> Vắc-xin bệnh dại (Pa-xtơ)</text>\n  <circle cx=\"52\" cy=\"226.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,226.2 64,256.7 68,256.7\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"260.7\" class=\"svgt\"><tspan font-weight=\"700\">1903</tspan> Máy bay (anh em Rai-tơ)</text>\n  <text x=\"4\" y=\"278\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Nhớ theo môn học của em: <b>Lí</b> có Niu-tơn, Fa-ra-đây; <b>Hoá</b> có Lô-mô-nô-xốp, Men-đê-lê-ép; <b>Sinh</b> có Đác-uyn, Men-đen. Đừng nhầm hai \"Men\": Men-<b>đen</b> là <b>đậu</b> Hà Lan (di truyền), Men-<b>đê-lê-ép</b> là <b>bảng</b> tuần hoàn.</div>\n\n </div>\n <div class=\"sec\"><h3>Khoa học tự nhiên: hiểu thế giới đúng hơn</h3>\n  <div class=\"tbl\"><table><tr><th>Nhà khoa học</th><th>Phát hiện</th><th>Em gặp lại ở</th></tr>\n  <tr><td>Niu-tơn (Anh)</td><td>Thuyết vạn vật hấp dẫn (cuối thế kỉ XVII), nền tảng cho cơ học</td><td>Vật lí</td></tr>\n  <tr><td>Lô-mô-nô-xốp (Nga)</td><td>Định luật bảo toàn khối lượng (vật chất) và năng lượng</td><td>Hoá học 8</td></tr>\n  <tr><td>Fa-ra-đây (Anh)</td><td>Hiện tượng cảm ứng điện từ (1831), cơ sở của máy phát điện</td><td>Vật lí 9</td></tr>\n  <tr><td>Slai-đen, Svan (Đức)</td><td>Thuyết tế bào (1838–1839): mọi sinh vật cấu tạo từ tế bào</td><td>Sinh học</td></tr>\n  <tr><td>Đác-uyn (Anh)</td><td>Thuyết tiến hoá, sách \"Nguồn gốc các loài\" (1859)</td><td>Sinh học</td></tr>\n  <tr><td>Men-đen (Áo)</td><td>Các quy luật di truyền (1865) từ thí nghiệm với cây đậu Hà Lan</td><td>Sinh học 9</td></tr>\n  <tr><td>Men-đê-lê-ép (Nga)</td><td>Bảng tuần hoàn các nguyên tố hoá học (1869)</td><td>Hoá học</td></tr>\n  <tr><td>Pa-xtơ (Pháp)</td><td>Vắc-xin phòng bệnh dại (1885), phương pháp khử trùng sữa</td><td>Đời sống, y tế</td></tr></table></div>\n  <p>Những phát minh này <span class=\"mark\">giải thích thế giới một cách khoa học</span>, đánh đổ nhiều quan niệm duy tâm cũ, ví dụ cho rằng các loài sinh vật được tạo ra một lần rồi không bao giờ thay đổi.</p>\n </div>\n <div class=\"sec\"><h3>Khoa học xã hội: hiểu con người và xã hội</h3>\n  <ul><li><b>Thế kỉ XVIII, \"Thế kỉ Ánh sáng\":</b> Mông-te-xki-ơ, Vôn-te, Rút-xô đề cao lí trí, tự do, phê phán chế độ phong kiến.</li>\n  <li><b>Triết học cổ điển Đức:</b> Hê-ghen, Phoi-ơ-bắc.</li>\n  <li><b>Kinh tế chính trị học cổ điển Anh:</b> A-đam Xmít, Đa-vít Ri-các-đô nghiên cứu về giá trị, lao động, thị trường.</li>\n  <li><b>Chủ nghĩa xã hội không tưởng:</b> Xanh Xi-mông, Phu-ri-ê (Pháp), Ô-oen (Anh) mơ ước một xã hội không có bóc lột nhưng chưa tìm ra con đường thực hiện.</li>\n  <li>Kế thừa các thành tựu trên, <span class=\"mark\">chủ nghĩa xã hội khoa học</span> của Mác và Ăng-ghen ra đời giữa thế kỉ XIX.</li></ul>\n </div>\n <div class=\"sec\"><h3>Kĩ thuật: từ hơi nước đến điện</h3>\n  <svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Sơ đồ ba nguồn năng lượng của các cuộc cách mạng kĩ thuật: sức nước, hơi nước, điện\">\n   <rect x=\"8\" y=\"58\" width=\"76\" height=\"52\" rx=\"8\" fill=\"var(--liquid)\" fill-opacity=\"0.25\" stroke=\"var(--line)\"/>\n   <text x=\"46\" y=\"80\" class=\"svgt\" text-anchor=\"middle\" font-weight=\"700\">Sức nước</text>\n   <text x=\"46\" y=\"97\" class=\"svgm\" text-anchor=\"middle\">bánh xe nước</text>\n   <rect x=\"102\" y=\"58\" width=\"76\" height=\"52\" rx=\"8\" fill=\"var(--paper)\" stroke=\"var(--accent)\" stroke-width=\"2\"/>\n   <text x=\"140\" y=\"80\" class=\"svgt\" text-anchor=\"middle\" font-weight=\"700\">Hơi nước</text>\n   <text x=\"140\" y=\"97\" class=\"svgm\" text-anchor=\"middle\">than đá</text>\n   <rect x=\"196\" y=\"58\" width=\"76\" height=\"52\" rx=\"8\" fill=\"var(--hl)\" fill-opacity=\"0.4\" stroke=\"var(--line)\"/>\n   <text x=\"234\" y=\"80\" class=\"svgt\" text-anchor=\"middle\" font-weight=\"700\">Điện</text>\n   <text x=\"234\" y=\"97\" class=\"svgm\" text-anchor=\"middle\">máy phát điện</text>\n   <line x1=\"85\" y1=\"84\" x2=\"98\" y2=\"84\" stroke=\"var(--accent)\" stroke-width=\"2\"/><polygon points=\"96,80 102,84 96,88\" fill=\"var(--accent)\"/>\n   <line x1=\"179\" y1=\"84\" x2=\"192\" y2=\"84\" stroke=\"var(--accent)\" stroke-width=\"2\"/><polygon points=\"190,80 196,84 190,88\" fill=\"var(--accent)\"/>\n   <text x=\"46\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">thế kỉ XVIII</text>\n   <text x=\"140\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">từ 1784</text>\n   <text x=\"234\" y=\"40\" class=\"svgm\" text-anchor=\"middle\">cuối thế kỉ XIX</text>\n   <text x=\"46\" y=\"132\" class=\"svgm\" text-anchor=\"middle\">nhà máy</text><text x=\"46\" y=\"145\" class=\"svgm\" text-anchor=\"middle\">cạnh sông</text>\n   <text x=\"140\" y=\"132\" class=\"svgm\" text-anchor=\"middle\">tàu hoả,</text><text x=\"140\" y=\"145\" class=\"svgm\" text-anchor=\"middle\">tàu thuỷ</text>\n   <text x=\"234\" y=\"132\" class=\"svgm\" text-anchor=\"middle\">đèn điện,</text><text x=\"234\" y=\"145\" class=\"svgm\" text-anchor=\"middle\">điện thoại</text>\n   <text x=\"140\" y=\"18\" class=\"svgt\" text-anchor=\"middle\">Nguồn động lực thay đổi qua thời gian</text>\n  </svg>\n  <ul><li><b>Giao thông:</b> tàu thuỷ chạy bằng hơi nước của <b>Phun-tơn</b> (Mỹ, 1807); đầu máy xe lửa của <b>Xti-phen-xơn</b> (Anh, 1814); cuối thế kỉ XIX có ô tô chạy bằng xăng; năm 1903 <b>anh em Rai-tơ</b> (Mỹ) bay thử thành công máy bay.</li>\n  <li><b>Thông tin liên lạc:</b> máy điện báo của <b>Moóc-xơ</b> (Mỹ) với mã chấm gạch nổi tiếng; điện thoại của <b>Gra-ham Beo</b> (1876).</li>\n  <li><b>Điện:</b> <b>Ê-đi-xơn</b> (Mỹ) chế tạo bóng đèn điện dây tóc dùng bền (1879), xây nhà máy điện.</li>\n  <li><b>Luyện kim:</b> các lò luyện thép mới (lò Bét-xơ-me, lò Mác-tanh) cho thép tốt, rẻ; thế kỉ XIX được gọi là <span class=\"mark\">\"thế kỉ của sắt\"</span>.</li>\n  <li><b>Nông nghiệp:</b> phân hoá học, máy cày, máy gặt chạy bằng hơi nước giúp năng suất tăng mạnh.</li></ul>\n  <div class=\"note\"><b>Dễ nhầm:</b> Giêm Oát <b>hoàn thiện</b> (cải tiến) máy hơi nước chứ không phải người đầu tiên làm ra máy hơi nước. Ê-đi-xơn cũng không phải người đầu tiên làm bóng đèn, nhưng ông làm ra loại bóng đèn sáng bền, rẻ, dùng được trong mọi nhà.</div>\n </div>\n <div class=\"sec\"><h3>Văn học và nghệ thuật</h3>\n  <ul><li><b>Văn học:</b> phản ánh hiện thực xã hội, cảm thông với người nghèo: <b>Vích-to Huy-gô</b> (Pháp, \"Những người khốn khổ\"), <b>Ban-dắc</b> (Pháp), <b>Lép Tôn-xtôi</b> (Nga, \"Chiến tranh và hoà bình\"), <b>Pu-skin</b> (Nga), <b>Đích-ken</b> (Anh), <b>Mác Tuên</b> (Mỹ), <b>Gớt</b> (Đức). Truyện cổ tích của <b>An-đéc-xen</b> (Đan Mạch) như \"Nàng tiên cá\", \"Cô bé bán diêm\" cũng ra đời thời kì này.</li>\n  <li><b>Âm nhạc:</b> <b>Mô-da</b> (Áo), <b>Bét-tô-ven</b> (Đức), <b>Sô-panh</b> (Ba Lan), <b>Trai-cốp-xki</b> (Nga, vở ba lê \"Hồ thiên nga\").</li>\n  <li><b>Hội hoạ:</b> trường phái <b>Ấn tượng</b> ở Pháp với <b>Mô-nê</b> (tranh \"Ấn tượng, mặt trời mọc\"); <b>Van Gốc</b> (Hà Lan) với \"Hoa hướng dương\", \"Đêm đầy sao\".</li></ul>\n  <p>Văn học nghệ thuật thời kì này <span class=\"mark\">phê phán bất công xã hội, ca ngợi tự do, tình yêu thương con người</span>, góp phần thức tỉnh nhân dân.</p>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Lu-i Pa-xtơ</b> (1822–1895): nhà khoa học Pháp. Năm 1885 ông tiêm vắc-xin cứu sống cậu bé Giô-dép Mai-xtơ bị chó dại cắn. Viện Pa-xtơ ở Nha Trang, TP Hồ Chí Minh mang tên ông.</li>\n  <li><b>Ê-đi-xơn</b> (1847–1931): nhà phát minh Mỹ, chỉ đi học chính thức vài tháng, sau này đứng tên hơn 1 000 bằng sáng chế (đèn điện, máy hát…).</li>\n  <li><b>Bét-tô-ven</b> (1770–1827): nhà soạn nhạc Đức. Ông bị điếc nặng ở tuổi trung niên nhưng vẫn sáng tác bản Giao hưởng số 9 bất hủ, nay là nhạc nền của bài ca châu Âu.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao thế kỉ XIX được gọi là \"thế kỉ của sắt\"?</summary>Vì sắt thép được dùng khắp nơi: đường ray, đầu máy, tàu thuỷ, cầu, nhà ga, máy móc. Tháp Ép-phen bằng sắt (1889) chính là biểu tượng của thời đại đó.</details>\n  <details class=\"wq\"><summary>Vì sao học thuyết của Đác-uyn gây tranh cãi dữ dội?</summary>Đác-uyn cho rằng các loài sinh vật, kể cả con người, đều biến đổi qua thời gian dài dưới tác động của chọn lọc tự nhiên. Điều này trái với quan niệm phổ biến lúc bấy giờ rằng muôn loài được tạo ra một lần và giữ nguyên mãi mãi.</details>\n  <details class=\"wq\"><summary>Vì sao sữa hộp em uống ghi \"tiệt trùng\" hoặc \"thanh trùng\"?</summary>Thanh trùng là cách đun nóng vừa phải để diệt vi khuẩn gây hại mà không làm hỏng sữa. Phương pháp này bắt nguồn từ nghiên cứu của Pa-xtơ, tiếng Anh gọi là \"pasteurization\" theo tên ông.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">💉</span>Tiêm phòng dại</b>Bị chó, mèo cắn cần đi tiêm phòng dại ngay. Đó là \"hậu duệ\" của vắc-xin Pa-xtơ năm 1885.</div>\n   <div class=\"app\"><b><span class=\"ico\">🥛</span>Sữa thanh trùng</b>Hộp sữa trong tủ lạnh nhà em được xử lí theo phương pháp mang tên Pa-xtơ.</div>\n   <div class=\"app\"><b><span class=\"ico\">📱</span>Điện thoại thông minh</b>Từ chiếc điện thoại của Gra-ham Beo năm 1876, sau 150 năm, nay em có thể gọi video cho bạn ở bất cứ đâu.</div>\n   <div class=\"app\"><b><span class=\"ico\">🧪</span>Bảng tuần hoàn</b>Bảng em học trong môn Khoa học tự nhiên là của Men-đê-lê-ép; ông còn để trống ô cho những nguyên tố chưa được tìm ra.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎹</span>Dương cầm</b>Các bạn học piano thường tập \"Für Elise\" của Bét-tô-ven và các bản Nốc-tuyn của Sô-panh.</div>\n   <div class=\"app\"><b><span class=\"ico\">📚</span>Sách thiếu nhi</b>\"Nàng tiên cá\", \"Bầy chim thiên nga\" của An-đéc-xen vẫn có mặt trong tủ sách và phim hoạt hình hôm nay.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để ghép mỗi nhà khoa học, nhà phát minh với thành tựu của họ nhé.</p>",
  "formulas": [
   [
    "1784",
    "Giêm Oát hoàn thiện máy hơi nước"
   ],
   [
    "1807",
    "Phun-tơn chế tạo tàu thuỷ chạy bằng hơi nước"
   ],
   [
    "1814",
    "Xti-phen-xơn chế tạo đầu máy xe lửa"
   ],
   [
    "1831",
    "Fa-ra-đây phát hiện hiện tượng cảm ứng điện từ"
   ],
   [
    "1859",
    "Đác-uyn công bố \"Nguồn gốc các loài\", thuyết tiến hoá"
   ],
   [
    "1869",
    "Men-đê-lê-ép lập bảng tuần hoàn các nguyên tố hoá học"
   ],
   [
    "1876",
    "Gra-ham Beo phát minh điện thoại"
   ],
   [
    "1879",
    "Ê-đi-xơn chế tạo bóng đèn điện dây tóc"
   ],
   [
    "1885",
    "Pa-xtơ thành công với vắc-xin phòng bệnh dại"
   ],
   [
    "1903",
    "Anh em Rai-tơ bay thử thành công máy bay"
   ]
  ],
  "quiz": [
   {
    "q": "Ai là tác giả của thuyết tiến hoá, với cuốn sách \"Nguồn gốc các loài\" (1859)?",
    "o": [
     "Đác-uyn",
     "Men-đen",
     "Pa-xtơ",
     "Lô-mô-nô-xốp"
    ],
    "why": "Đác-uyn đi vòng quanh thế giới trên tàu Bi-gơn (1831–1836), quan sát sinh vật ở nhiều nơi rồi đề ra thuyết tiến hoá qua chọn lọc tự nhiên."
   },
   {
    "q": "Bảng tuần hoàn các nguyên tố hoá học được ai lập ra năm 1869?",
    "o": [
     "Men-đê-lê-ép",
     "Men-đen",
     "Lô-mô-nô-xốp",
     "Niu-tơn"
    ],
    "why": "Nhà hoá học Nga Men-đê-lê-ép còn để trống ô và dự đoán đúng tính chất của những nguyên tố chưa được phát hiện."
   },
   {
    "q": "Vắc-xin phòng bệnh dại (1885) là thành tựu của nhà khoa học nào?",
    "o": [
     "Lu-i Pa-xtơ (Pháp)",
     "Ê-đi-xơn (Mỹ)",
     "Đác-uyn (Anh)",
     "Fa-ra-đây (Anh)"
    ],
    "why": "Ở Việt Nam có Viện Pa-xtơ Nha Trang (do bác sĩ Y-éc-xanh, học trò của Pa-xtơ, lập năm 1895) và Viện Pasteur TP Hồ Chí Minh."
   },
   {
    "q": "Phát hiện nào là cơ sở để chế tạo máy phát điện?",
    "o": [
     "Hiện tượng cảm ứng điện từ của Fa-ra-đây",
     "Định luật vạn vật hấp dẫn của Niu-tơn",
     "Thuyết tế bào của Slai-đen và Svan",
     "Định luật bảo toàn khối lượng của Lô-mô-nô-xốp"
    ],
    "why": "Năm 1831 Fa-ra-đây phát hiện từ trường biến đổi sinh ra dòng điện. Máy phát điện ở nhà máy thuỷ điện Hoà Bình hay Sơn La đều dựa trên nguyên lí này."
   },
   {
    "q": "Ai là người chế tạo tàu thuỷ chạy bằng hơi nước đầu tiên được dùng thành công (1807)?",
    "o": [
     "Phun-tơn (Mỹ)",
     "Xti-phen-xơn (Anh)",
     "Giêm Oát (Anh)",
     "Moóc-xơ (Mỹ)"
    ],
    "why": "Xti-phen-xơn làm đầu máy xe lửa (1814); Moóc-xơ làm máy điện báo; Giêm Oát hoàn thiện máy hơi nước."
   },
   {
    "q": "Hãy ghép cho đúng: Men-đen nổi tiếng với",
    "o": [
     "các quy luật di truyền, từ thí nghiệm trên cây đậu Hà Lan",
     "bảng tuần hoàn các nguyên tố hoá học",
     "thuyết tiến hoá bằng chọn lọc tự nhiên",
     "vắc-xin phòng bệnh dại"
    ],
    "why": "Men-đen là một tu sĩ người Áo, công bố kết quả năm 1865. Đừng nhầm với Men-đê-lê-ép (bảng tuần hoàn)."
   },
   {
    "q": "Vì sao khoa học kĩ thuật thế kỉ XVIII–XIX phát triển rất mạnh?",
    "o": [
     "Vì chủ nghĩa tư bản cần máy móc, kĩ thuật mới để tăng năng suất và lợi nhuận",
     "Vì nhà thờ khuyến khích mọi phát minh mới",
     "Vì các nước không còn chiến tranh",
     "Vì vua chúa phong kiến cấm buôn bán"
    ],
    "why": "Sản xuất cần phát minh, phát minh lại thúc đẩy sản xuất. Các nhà tư bản sẵn lòng đầu tư cho nghiên cứu."
   },
   {
    "q": "Tác phẩm \"Những người khốn khổ\" là của nhà văn nào?",
    "o": [
     "Vích-to Huy-gô (Pháp)",
     "Lép Tôn-xtôi (Nga)",
     "Đích-ken (Anh)",
     "Mác Tuên (Mỹ)"
    ],
    "why": "Tiểu thuyết kể về Giăng Van-giăng và cô bé Cô-dét, lên án bất công xã hội. Lép Tôn-xtôi viết \"Chiến tranh và hoà bình\"."
   },
   {
    "q": "Trường phái hội hoạ Ấn tượng ra đời ở nước nào, gắn với hoạ sĩ nào?",
    "o": [
     "Pháp, Mô-nê",
     "Ý, Lê-ô-na-đô đa Vin-xi",
     "Nga, Trai-cốp-xki",
     "Đức, Bét-tô-ven"
    ],
    "why": "Tên trường phái lấy từ bức \"Ấn tượng, mặt trời mọc\" của Mô-nê. Đa Vin-xi thuộc thời Phục hưng; Trai-cốp-xki và Bét-tô-ven là nhạc sĩ."
   },
   {
    "q": "Đọc dòng thời gian: tàu thuỷ hơi nước (1807), điện thoại (1876), máy bay (1903). Từ tàu thuỷ hơi nước đến máy bay là bao nhiêu năm?",
    "o": [
     "96 năm",
     "69 năm",
     "27 năm",
     "106 năm"
    ],
    "why": "1903 − 1807 = 96 năm, chưa đến một thế kỉ con người đã đi từ tàu chạy hơi nước đến bay trên trời."
   },
   {
    "q": "Từ \"pasteurization\" (thanh trùng) in trên hộp sữa bắt nguồn từ tên nhà khoa học nào?",
    "o": [
     "Pa-xtơ",
     "Fa-ra-đây",
     "Ê-đi-xơn",
     "Đác-uyn"
    ],
    "why": "Pa-xtơ tìm ra cách đun nóng vừa phải để diệt vi khuẩn gây hỏng rượu vang, sữa. Phương pháp mang tên ông đến nay vẫn được dùng."
   },
   {
    "q": "Thuyết tế bào (1838–1839) khẳng định điều gì?",
    "o": [
     "Mọi sinh vật đều được cấu tạo từ tế bào",
     "Muôn loài được tạo ra một lần và không thay đổi",
     "Vật chất không tự sinh ra và không tự mất đi",
     "Mọi vật đều hút nhau bằng lực hấp dẫn"
    ],
    "why": "Thuyết tế bào của Slai-đen và Svan là nền tảng của sinh học hiện đại, em sẽ gặp lại trong môn Khoa học tự nhiên."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l6",
  "position": 6,
  "title": "Châu Á nửa sau thế kỉ XIX – đầu thế kỉ XX",
  "icon": "🏯",
  "lab": "su_meiji",
  "theory": "<div class=\"sec\"><h3>Châu Á trước \"cơn bão\" phương Tây</h3>\n  <p>Nửa sau thế kỉ XIX, các nước đế quốc Âu – Mỹ tràn sang châu Á tìm thị trường và nguyên liệu. Các triều đình phong kiến châu Á phải chọn: <span class=\"mark\">đổi mới để tự cường, hay giữ nếp cũ rồi mất nước</span>. Ba câu chuyện của chương này cho ba kết cục khác nhau: Nhật Bản cải cách thành công, Trung Quốc thành nửa thuộc địa, Ấn Độ và hầu hết Đông Nam Á thành thuộc địa.</p>\n </div>\n <div class=\"sec\"><h3>Trung Quốc: từ \"chiếc bánh ngọt\" đến Cách mạng Tân Hợi</h3>\n  <ul><li><b>Chiến tranh thuốc phiện (1840–1842):</b> Anh đem thuốc phiện bán vào Trung Quốc, triều Thanh cấm thì Anh gây chiến. Thanh thua, kí Hiệp ước Nam Kinh (1842), mở cửa các cảng và <b>nhường Hồng Công</b> cho Anh. Từ đó các nước đế quốc thi nhau xâu xé Trung Quốc \"như chia nhau một chiếc bánh ngọt\". Trung Quốc thành nước <span class=\"mark\">nửa thuộc địa, nửa phong kiến</span>.</li>\n  <li><b>Phong trào đấu tranh:</b> khởi nghĩa nông dân <b>Thái bình Thiên quốc</b> (1851–1864) do Hồng Tú Toàn lãnh đạo; cuộc <b>Duy tân Mậu Tuất (1898)</b> của Khang Hữu Vi, Lương Khải Siêu cùng vua Quang Tự, chỉ tồn tại khoảng 100 ngày thì bị Từ Hi Thái hậu dập tắt; phong trào <b>Nghĩa Hoà đoàn</b> (1899–1901) chống đế quốc.</li>\n  <li><b>Tôn Trung Sơn</b> thành lập <b>Trung Quốc Đồng minh hội</b> (8/1905), theo <span class=\"mark\">chủ nghĩa Tam dân</span>: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc.</li>\n  <li><b>Cách mạng Tân Hợi (1911):</b> ngày <b>10/10/1911</b> khởi nghĩa ở <b>Vũ Xương</b> thắng lợi, lan khắp các tỉnh miền Nam. Ngày 29/12/1911 Tôn Trung Sơn được bầu làm Đại Tổng thống lâm thời; ngày 1/1/1912 <b>Trung Hoa Dân quốc</b> thành lập. Tháng 2/1912 vua Thanh thoái vị, chấm dứt hơn 2 000 năm chế độ quân chủ chuyên chế. Nhưng Viên Thế Khải sau đó cướp quyền tổng thống.</li>\n  <li><b>Tính chất:</b> cách mạng dân chủ tư sản <span class=\"mark\">không triệt để</span>: không đụng đến đế quốc, không chia ruộng đất cho nông dân.</li></ul>\n </div>\n <div class=\"sec\"><h3>Nhật Bản: Minh Trị duy tân</h3>\n  <p>Giữa thế kỉ XIX, Nhật Bản cũng bị các nước phương Tây đe doạ: năm 1853–1854, hạm đội Mỹ của Pê-ri dùng \"tàu đen\" ép Nhật mở cửa. Chế độ Mạc phủ yếu kém, kí các hiệp ước bất bình đẳng.</p>\n  <p>Tháng <b>1/1868</b>, Thiên hoàng <b>Minh Trị</b> (Mút-xu-hi-tô) lên nắm quyền, tiến hành <span class=\"mark\">cải cách toàn diện</span>:</p>\n  <ul><li><b>Chính trị:</b> xoá bỏ chế độ Mạc phủ, ban hành Hiến pháp (1889), xác lập chế độ quân chủ lập hiến.</li>\n  <li><b>Kinh tế:</b> thống nhất tiền tệ, thị trường; cho phép mua bán ruộng đất; xây dựng đường sắt, nhà máy theo kĩ thuật phương Tây.</li>\n  <li><b>Quân sự:</b> tổ chức quân đội theo kiểu phương Tây, thực hiện <b>chế độ nghĩa vụ quân sự</b>, phát triển công nghiệp đóng tàu, sản xuất vũ khí.</li>\n  <li><b>Giáo dục:</b> thi hành chính sách giáo dục bắt buộc, chú trọng khoa học kĩ thuật, cử học sinh giỏi đi du học phương Tây.</li></ul>\n  <p><b>Kết quả:</b> Nhật Bản <span class=\"mark\">thoát khỏi nguy cơ bị biến thành thuộc địa</span>, trở thành nước tư bản công nghiệp. Cuối thế kỉ XIX, đầu thế kỉ XX, Nhật chuyển sang chủ nghĩa đế quốc, gây chiến tranh với Trung Quốc (1894–1895) và với Nga (1904–1905) để giành thuộc địa. Các công ty độc quyền như Mít-xưi, Mít-xu-bi-si ra đời.</p>\n </div>\n <div class=\"sec\"><h3>Ấn Độ và Đông Nam Á</h3>\n  <ul><li><b>Ấn Độ:</b> giữa thế kỉ XIX, Anh hoàn thành xâm lược và cai trị trực tiếp Ấn Độ, biến nơi đây thành \"viên ngọc quý nhất\" trên vương miện Anh. Cuộc <b>khởi nghĩa Xi-pay (1857–1859)</b> của binh lính người Ấn trong quân đội Anh lan rộng nhưng bị dập tắt. Năm <b>1885</b>, <b>Đảng Quốc đại</b> ra đời, chính đảng của giai cấp tư sản Ấn Độ. Năm 1905, Anh ban hành đạo luật chia cắt xứ Ben-gan, làm bùng lên phong trào đấu tranh mạnh mẽ (1905–1908), đỉnh cao là cuộc bãi công của công nhân Bom-bay năm 1908.</li>\n  <li><b>Đông Nam Á</b> (cuối XIX, đầu XX): trừ Xiêm, các nước đều là thuộc địa. Phong trào giải phóng dân tộc chuyển dần sang <span class=\"mark\">khuynh hướng dân chủ tư sản</span>: ở Phi-líp-pin, cách mạng 1896–1898 lập nước Cộng hoà rồi lại phải chống Mỹ xâm lược; ở In-đô-nê-xi-a, các tổ chức yêu nước và công đoàn ra đời; ở Lào, Cam-pu-chia, Việt Nam các cuộc khởi nghĩa chống Pháp tiếp tục.</li></ul>\n </div>\n <div class=\"sec\"><h3>Dòng thời gian</h3>\n  <svg viewBox=\"0 0 280 222\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian châu Á 1840 đến 1912\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"194\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"18.0\" x2=\"52\" y2=\"18.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"21.5\" class=\"svgm\" text-anchor=\"end\">1840</text>\n  <line x1=\"47\" y1=\"64.9\" x2=\"52\" y2=\"64.9\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"68.4\" class=\"svgm\" text-anchor=\"end\">1860</text>\n  <line x1=\"47\" y1=\"111.9\" x2=\"52\" y2=\"111.9\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"115.4\" class=\"svgm\" text-anchor=\"end\">1880</text>\n  <line x1=\"47\" y1=\"158.8\" x2=\"52\" y2=\"158.8\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"162.3\" class=\"svgm\" text-anchor=\"end\">1900</text>\n  <circle cx=\"52\" cy=\"18.0\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,18.0 64,18.0 68,18.0\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"22.0\" class=\"svgt\"><tspan font-weight=\"700\">1840–1842</tspan> Chiến tranh thuốc phiện</text>\n  <circle cx=\"52\" cy=\"43.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,43.8 64,43.8 68,43.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"47.8\" class=\"svgt\"><tspan font-weight=\"700\">1851–1864</tspan> Thái bình Thiên quốc</text>\n  <circle cx=\"52\" cy=\"58.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,58.7 64,64.8 68,64.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"68.8\" class=\"svgt\"><tspan font-weight=\"700\">1857</tspan> Khởi nghĩa Xi-pay (Ấn Độ)</text>\n  <circle cx=\"52\" cy=\"83.7\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,83.7 64,85.8 68,85.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"89.8\" class=\"svgt\"><tspan font-weight=\"700\">1868</tspan> Minh Trị duy tân</text>\n  <circle cx=\"52\" cy=\"123.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,123.6 64,123.6 68,123.6\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"127.6\" class=\"svgt\"><tspan font-weight=\"700\">1885</tspan> Đảng Quốc đại Ấn Độ</text>\n  <circle cx=\"52\" cy=\"154.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,154.1 64,154.1 68,154.1\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"158.1\" class=\"svgt\"><tspan font-weight=\"700\">1898</tspan> Duy tân Mậu Tuất</text>\n  <circle cx=\"52\" cy=\"171.9\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,171.9 64,175.1 68,175.1\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"179.1\" class=\"svgt\"><tspan font-weight=\"700\">1905</tspan> Trung Quốc Đồng minh hội</text>\n  <circle cx=\"52\" cy=\"186.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,186.4 64,196.1 68,196.1\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"200.1\" class=\"svgt\"><tspan font-weight=\"700\">10/10/1911</tspan> Khởi nghĩa Vũ Xương</text>\n  <text x=\"4\" y=\"218\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Nhật <b>1868</b> có hai số 8 ở cuối, \"8 là phát\": Nhật cải cách nên phát triển. Trung Quốc <b>1911</b> có hai số 1: \"lật nhà Thanh, Trung Hoa Dân quốc số 1\". Và Đồng minh hội <b>1905</b> cùng năm Nhật thắng Nga.</div>\n  <div class=\"note\"><b>Dễ nhầm:</b> Tân Hợi là năm <b>1911</b>, Mậu Tuất là năm <b>1898</b>. Cách nhớ: tên các cuộc cách mạng, cải cách Trung Quốc đặt theo năm âm lịch. Minh Trị duy tân năm <b>1868</b> là của <b>Nhật Bản</b>, không phải Trung Quốc.</div>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Tôn Trung Sơn</b> (1866–1925): học y khoa, từng làm bác sĩ, sau dành cả đời cho cách mạng. Ông là người khởi xướng chủ nghĩa Tam dân và được coi là \"người cha của Trung Hoa Dân quốc\".</li>\n  <li><b>Thiên hoàng Minh Trị</b> (1852–1912): lên ngôi khi mới 14 tuổi. Dưới thời ông, chỉ trong khoảng 30 năm, Nhật Bản từ một nước phong kiến lạc hậu thành cường quốc.</li>\n  <li><b>Ti-lắc</b> (1856–1920): lãnh tụ phái dân chủ cấp tiến trong Đảng Quốc đại Ấn Độ, chủ trương đấu tranh kiên quyết chống Anh. Năm 1908 ông bị Anh bắt, làm bùng nổ cuộc bãi công ở Bom-bay.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Cùng bị phương Tây đe doạ, vì sao Nhật Bản thoát được còn Trung Quốc thì không?</summary>Nhật Bản có vị Thiên hoàng quyết tâm cải cách và tầng lớp sĩ quan, thương nhân ủng hộ đổi mới, nên cải cách kịp thời và toàn diện. Triều Thanh bảo thủ, Từ Hi Thái hậu dập tắt cả cuộc Duy tân Mậu Tuất, nên Trung Quốc ngày càng lún sâu vào tình trạng nửa thuộc địa.</details>\n  <details class=\"wq\"><summary>Vì sao Cách mạng Tân Hợi được coi là không triệt để?</summary>Cách mạng lật đổ được nhà Thanh nhưng không nêu rõ chống đế quốc, không chia ruộng đất cho nông dân, rồi lại để Viên Thế Khải (đại diện thế lực cũ) nắm quyền.</details>\n  <details class=\"wq\"><summary>Vì sao gọi Ấn Độ là \"viên ngọc quý\" của nước Anh?</summary>Ấn Độ đông dân, giàu bông, chè, lúa gạo, là thị trường lớn tiêu thụ vải và hàng hoá công nghiệp của Anh. Anh thu về những khoản lợi khổng lồ từ đây.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🚄</span>Tàu cao tốc Nhật Bản</b>Tinh thần học hỏi kĩ thuật từ thời Minh Trị giúp Nhật Bản ngày nay có tàu Shinkansen nổi tiếng thế giới về độ đúng giờ.</div>\n   <div class=\"app\"><b><span class=\"ico\">🚗</span>Thương hiệu Nhật</b>Mít-xu-bi-si, công ty ra đời từ thời Minh Trị, vẫn sản xuất ô tô, máy điều hoà quen thuộc ở Việt Nam.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎓</span>Phong trào Đông du</b>Thấy Nhật mạnh lên nhờ Minh Trị duy tân, Phan Bội Châu đưa thanh niên Việt Nam sang Nhật học (1905–1908). Em sẽ học ở chương 7.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏙️</span>Hồng Công</b>Bị nhường cho Anh từ năm 1842, đến năm 1997 Hồng Công mới trở về với Trung Quốc.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏠</span>Tôn Trung Sơn ở Việt Nam</b>Tôn Trung Sơn từng nhiều lần qua Việt Nam hoạt động, gây quỹ cho cách mạng.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để so sánh Nhật Bản và Trung Quốc trước sóng gió phương Tây nhé.</p>",
  "formulas": [
   [
    "1840–1842",
    "Chiến tranh thuốc phiện, Trung Quốc bắt đầu bị xâu xé"
   ],
   [
    "1851–1864",
    "Phong trào nông dân Thái bình Thiên quốc"
   ],
   [
    "1857–1859",
    "Khởi nghĩa Xi-pay ở Ấn Độ"
   ],
   [
    "1/1868",
    "Thiên hoàng Minh Trị bắt đầu cải cách (Minh Trị duy tân)"
   ],
   [
    "1885",
    "Đảng Quốc đại Ấn Độ thành lập"
   ],
   [
    "1898",
    "Duy tân Mậu Tuất ở Trung Quốc (khoảng 100 ngày)"
   ],
   [
    "8/1905",
    "Tôn Trung Sơn thành lập Trung Quốc Đồng minh hội"
   ],
   [
    "1908",
    "Công nhân Bom-bay (Ấn Độ) bãi công"
   ],
   [
    "10/10/1911",
    "Khởi nghĩa Vũ Xương, Cách mạng Tân Hợi bùng nổ"
   ],
   [
    "1/1/1912",
    "Trung Hoa Dân quốc thành lập"
   ]
  ],
  "quiz": [
   {
    "q": "Cách mạng Tân Hợi ở Trung Quốc bùng nổ năm nào, mở đầu bằng sự kiện gì?",
    "o": [
     "1911, khởi nghĩa Vũ Xương",
     "1898, Duy tân Mậu Tuất",
     "1905, thành lập Đồng minh hội",
     "1840, Chiến tranh thuốc phiện"
    ],
    "why": "Ngày 10/10/1911 khởi nghĩa Vũ Xương thắng lợi. 1911 là năm Tân Hợi theo âm lịch nên có tên này."
   },
   {
    "q": "Cuộc Minh Trị duy tân ở Nhật Bản bắt đầu năm nào?",
    "o": [
     "1868",
     "1853",
     "1889",
     "1911"
    ],
    "why": "Năm 1853 là lúc Mỹ (Pê-ri) đưa tàu đến ép Nhật mở cửa; 1889 là năm ban hành Hiến pháp."
   },
   {
    "q": "Nội dung của chủ nghĩa Tam dân do Tôn Trung Sơn đề ra là",
    "o": [
     "Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc",
     "Tự do, Bình đẳng, Bác ái",
     "Độc lập, Tự do, Hạnh phúc",
     "Phú quốc, Cường binh, Khai trí"
    ],
    "why": "\"Tự do, Bình đẳng, Bác ái\" là khẩu hiệu Cách mạng Pháp; \"Độc lập, Tự do, Hạnh phúc\" là tiêu ngữ của Việt Nam."
   },
   {
    "q": "Kết quả quan trọng nhất của cuộc Minh Trị duy tân là",
    "o": [
     "Nhật Bản thoát khỏi nguy cơ trở thành thuộc địa, trở thành nước tư bản công nghiệp",
     "Nhật Bản trở thành thuộc địa của Mỹ",
     "Nhật Bản lập chế độ cộng hoà, xoá bỏ Thiên hoàng",
     "Nhật Bản đóng cửa hoàn toàn với phương Tây"
    ],
    "why": "Nhật vẫn giữ Thiên hoàng (quân chủ lập hiến theo Hiến pháp 1889) nhưng hiện đại hoá mọi mặt, rồi chuyển sang chủ nghĩa đế quốc."
   },
   {
    "q": "Sau Chiến tranh thuốc phiện (1840–1842), Trung Quốc phải nhường vùng đất nào cho Anh?",
    "o": [
     "Hồng Công",
     "Ma Cao",
     "Đài Loan",
     "Thượng Hải"
    ],
    "why": "Theo Hiệp ước Nam Kinh (1842). Hồng Công trở về Trung Quốc năm 1997. Ma Cao gắn với Bồ Đào Nha; Đài Loan bị Nhật chiếm sau chiến tranh 1894–1895."
   },
   {
    "q": "Vì sao Cách mạng Tân Hợi được coi là cuộc cách mạng tư sản không triệt để?",
    "o": [
     "Không nêu vấn đề chống đế quốc, không giải quyết ruộng đất cho nông dân, để Viên Thế Khải nắm quyền",
     "Vì không lật đổ được nhà Thanh",
     "Vì do giai cấp công nhân lãnh đạo",
     "Vì chỉ diễn ra ở thủ đô Bắc Kinh"
    ],
    "why": "Cách mạng đã lật đổ nhà Thanh, chấm dứt chế độ quân chủ hơn 2 000 năm, nhưng chưa giải quyết được hai vấn đề cốt lõi: đế quốc và ruộng đất."
   },
   {
    "q": "Đảng Quốc đại, chính đảng của giai cấp tư sản Ấn Độ, thành lập năm nào?",
    "o": [
     "1885",
     "1857",
     "1905",
     "1911"
    ],
    "why": "1857 là năm khởi nghĩa Xi-pay bùng nổ; 1905 là năm Anh chia cắt xứ Ben-gan."
   },
   {
    "q": "Cuộc khởi nghĩa Xi-pay (1857–1859) ở Ấn Độ do lực lượng nào tiến hành?",
    "o": [
     "Binh lính người Ấn trong quân đội Anh",
     "Công nhân Bom-bay",
     "Đảng Quốc đại",
     "Nông dân Trung Quốc"
    ],
    "why": "\"Xi-pay\" là tên gọi lính đánh thuê người Ấn trong quân đội Anh. Cuộc khởi nghĩa lan rộng ở miền Bắc và miền Trung Ấn Độ."
   },
   {
    "q": "Nội dung nào KHÔNG thuộc cuộc cải cách Minh Trị?",
    "o": [
     "Giữ nguyên chế độ Mạc phủ",
     "Thi hành chế độ nghĩa vụ quân sự",
     "Ban hành Hiến pháp năm 1889",
     "Thi hành chính sách giáo dục bắt buộc"
    ],
    "why": "Minh Trị xoá bỏ chế độ Mạc phủ (chính quyền của các Tướng quân Sô-gun) để quyền lực trở về Thiên hoàng."
   },
   {
    "q": "Đọc dòng thời gian: Duy tân Mậu Tuất (1898) và Cách mạng Tân Hợi (1911). Hai sự kiện cách nhau bao nhiêu năm?",
    "o": [
     "13 năm",
     "11 năm",
     "31 năm",
     "3 năm"
    ],
    "why": "1911 − 1898 = 13 năm. Cải cách từ trên xuống thất bại thì người Trung Quốc chuyển sang con đường cách mạng lật đổ nhà Thanh."
   },
   {
    "q": "Thành công của Minh Trị duy tân đã ảnh hưởng đến phong trào nào ở Việt Nam đầu thế kỉ XX?",
    "o": [
     "Phong trào Đông du do Phan Bội Châu khởi xướng",
     "Phong trào Cần vương",
     "Khởi nghĩa Yên Thế",
     "Phong trào Tây Sơn"
    ],
    "why": "Nhật là nước châu Á \"đồng văn, đồng chủng\" đã tự cường, nên Phan Bội Châu đưa thanh niên sang Nhật học (1905–1908) để chuẩn bị cứu nước."
   },
   {
    "q": "Trung Quốc từ giữa thế kỉ XIX trở thành nước có tình trạng như thế nào?",
    "o": [
     "Nửa thuộc địa, nửa phong kiến",
     "Thuộc địa hoàn toàn của Anh",
     "Nước tư bản công nghiệp phát triển",
     "Nước xã hội chủ nghĩa"
    ],
    "why": "Nhà Thanh vẫn tồn tại nhưng các nước đế quốc chia nhau các khu vực ảnh hưởng, nắm quyền khai mỏ, đường sắt, hải quan."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 },
 {
  "id": "l7",
  "position": 7,
  "title": "Việt Nam từ đầu thế kỉ XIX đến đầu thế kỉ XX",
  "icon": "🛡️",
  "lab": "su_vn1858",
  "theory": "<div class=\"sec\"><h3>Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX)</h3>\n  <ul><li><b>Thành lập:</b> năm <b>1802</b>, Nguyễn Ánh lật đổ Tây Sơn, lên ngôi lấy niên hiệu <b>Gia Long</b>, đóng đô ở <b>Phú Xuân (Huế)</b>. Năm 1804 đặt quốc hiệu <b>Việt Nam</b>; năm 1838 vua Minh Mạng đổi thành <b>Đại Nam</b>.</li>\n  <li><b>Chính trị:</b> chế độ quân chủ chuyên chế tập quyền cao độ. Năm 1831–1832, vua <b>Minh Mạng</b> cải cách hành chính, chia cả nước thành <span class=\"mark\">30 tỉnh và phủ Thừa Thiên</span>. Ban hành bộ <b>Hoàng Việt luật lệ</b> (luật Gia Long, 1815).</li>\n  <li><b>Kinh tế, đối ngoại:</b> khai hoang, lập ấp (Nguyễn Công Trứ khai hoang lập hai huyện Tiền Hải, Kim Sơn); nhưng hạn chế buôn bán với phương Tây, cấm đạo Công giáo, khiến đất nước ngày càng khép kín, trì trệ.</li>\n  <li><b>Xã hội:</b> đời sống nhân dân cực khổ, hàng trăm cuộc nổi dậy: Phan Bá Vành (1821–1827), Nông Văn Vân (1833–1835), Lê Văn Khôi (1833–1835), Cao Bá Quát (1854–1856).</li>\n  <li><b>Văn hoá:</b> Kinh thành Huế, lăng tẩm các vua; <b>Truyện Kiều</b> của Nguyễn Du; thơ Hồ Xuân Hương, Bà Huyện Thanh Quan; bộ \"Lịch triều hiến chương loại chí\" của Phan Huy Chú.</li></ul>\n  <p><b>Chủ quyền biển đảo:</b> các vua Nguyễn tiếp tục thực thi chủ quyền đối với <span class=\"mark\">quần đảo Hoàng Sa và Trường Sa</span>: năm 1816 vua Gia Long cho thuỷ quân và đội Hoàng Sa ra đo đạc thuỷ trình; năm 1835, 1836 vua Minh Mạng cho xây miếu, dựng bia, cắm mốc chủ quyền trên đảo.</p>\n </div>\n <div class=\"sec\"><h3>Kháng chiến chống thực dân Pháp (1858–1884)</h3>\n  <ul><li><b>Mở đầu:</b> ngày <b>1/9/1858</b>, liên quân Pháp – Tây Ban Nha nổ súng tấn công <b>Đà Nẵng</b> (bán đảo Sơn Trà). Quân dân ta do Nguyễn Tri Phương chỉ huy chặn đứng kế hoạch \"đánh nhanh thắng nhanh\" của giặc.</li>\n  <li><b>Nam Kỳ:</b> tháng 2/1859 Pháp đánh thành Gia Định; năm 1861 chiếm đại đồn Chí Hoà. Triều đình kí <b>Hiệp ước Nhâm Tuất (5/6/1862)</b>, nhường ba tỉnh miền Đông Nam Kỳ (Gia Định, Định Tường, Biên Hoà) và đảo Côn Lôn. Năm <b>1867</b> Pháp chiếm nốt ba tỉnh miền Tây (Vĩnh Long, An Giang, Hà Tiên). Nhân dân vẫn chiến đấu: <b>Nguyễn Trung Trực</b> đốt tàu Hy Vọng của Pháp trên sông Vàm Cỏ Đông (12/1861), <b>Trương Định</b> được dân suy tôn \"Bình Tây đại nguyên soái\".</li>\n  <li><b>Bắc Kỳ lần 1 (1873):</b> Gác-ni-ê đánh thành Hà Nội, Nguyễn Tri Phương bị thương, nhịn ăn đến chết. Ngày <b>21/12/1873</b>, quân ta phục kích ở <b>Cầu Giấy</b>, giết Gác-ni-ê. Nhưng triều đình lại kí <b>Hiệp ước Giáp Tuất (1874)</b>, thừa nhận sáu tỉnh Nam Kỳ thuộc Pháp.</li>\n  <li><b>Bắc Kỳ lần 2 (1882):</b> Ri-vi-e đánh thành Hà Nội (25/4/1882), Tổng đốc <b>Hoàng Diệu</b> tự vẫn để giữ khí tiết. Ngày <b>19/5/1883</b>, quân Cờ đen của Lưu Vĩnh Phúc cùng quân ta phục kích ở Cầu Giấy lần thứ hai, giết Ri-vi-e.</li>\n  <li><b>Kết thúc:</b> tháng 8/1883 Pháp đánh Thuận An (cửa ngõ kinh thành Huế); triều đình kí <b>Hiệp ước Hác-măng (25/8/1883)</b> và <b>Hiệp ước Pa-tơ-nốt (6/6/1884)</b>, chính thức công nhận quyền bảo hộ của Pháp. <span class=\"mark\">Việt Nam trở thành nước thuộc địa nửa phong kiến</span>.</li></ul>\n  <div class=\"note\"><b>Dễ nhầm:</b> hai trận Cầu Giấy cách nhau gần 10 năm: lần 1 (1873) giết <b>Gác-ni-ê</b>, lần 2 (1883) giết <b>Ri-vi-e</b>. Hai hiệp ước cuối: Hác-măng (<b>1883</b>) rồi Pa-tơ-nốt (<b>1884</b>), Pa-tơ-nốt là mốc kết thúc quá trình xâm lược.</div>\n </div>\n <div class=\"sec\"><h3>Dòng thời gian</h3>\n  <svg viewBox=\"0 0 280 316\" style=\"width:100%;max-width:360px;display:block;margin:8px 0\" role=\"img\" aria-label=\"Dòng thời gian kháng chiến chống Pháp 1858 đến 1885\">\n  <line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"260\" stroke=\"var(--line)\" stroke-width=\"3\"/>\n  <line x1=\"47\" y1=\"52.6\" x2=\"52\" y2=\"52.6\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"56.1\" class=\"svgm\" text-anchor=\"end\">1860</text>\n  <line x1=\"47\" y1=\"121.7\" x2=\"52\" y2=\"121.7\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"125.2\" class=\"svgm\" text-anchor=\"end\">1870</text>\n  <line x1=\"47\" y1=\"190.9\" x2=\"52\" y2=\"190.9\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"194.4\" class=\"svgm\" text-anchor=\"end\">1880</text>\n  <line x1=\"47\" y1=\"260.0\" x2=\"52\" y2=\"260.0\" stroke=\"var(--muted)\"/>\n  <text x=\"44\" y=\"263.5\" class=\"svgm\" text-anchor=\"end\">1890</text>\n  <circle cx=\"52\" cy=\"43.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,43.4 64,43.4 68,43.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"47.4\" class=\"svgt\"><tspan font-weight=\"700\">1/9/1858</tspan> Pháp đánh Đà Nẵng</text>\n  <circle cx=\"52\" cy=\"46.6\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,46.6 64,64.4 68,64.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"68.4\" class=\"svgt\"><tspan font-weight=\"700\">2/1859</tspan> Pháp đánh Gia Định</text>\n  <circle cx=\"52\" cy=\"69.4\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,69.4 64,85.4 68,85.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"89.4\" class=\"svgt\"><tspan font-weight=\"700\">1862</tspan> Hiệp ước Nhâm Tuất</text>\n  <circle cx=\"52\" cy=\"104.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,104.2 64,106.4 68,106.4\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"110.4\" class=\"svgt\"><tspan font-weight=\"700\">1867</tspan> Mất ba tỉnh miền Tây</text>\n  <circle cx=\"52\" cy=\"149.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,149.2 64,149.2 68,149.2\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"153.2\" class=\"svgt\"><tspan font-weight=\"700\">1873</tspan> Cầu Giấy lần 1</text>\n  <circle cx=\"52\" cy=\"150.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,150.8 64,170.2 68,170.2\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"174.2\" class=\"svgt\"><tspan font-weight=\"700\">1874</tspan> Hiệp ước Giáp Tuất</text>\n  <circle cx=\"52\" cy=\"206.8\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,206.8 64,206.8 68,206.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"210.8\" class=\"svgt\"><tspan font-weight=\"700\">1882</tspan> Pháp đánh Hà Nội lần 2</text>\n  <circle cx=\"52\" cy=\"214.2\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,214.2 64,227.8 68,227.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"231.8\" class=\"svgt\"><tspan font-weight=\"700\">5/1883</tspan> Cầu Giấy lần 2</text>\n  <circle cx=\"52\" cy=\"216.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,216.1 64,248.8 68,248.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"252.8\" class=\"svgt\"><tspan font-weight=\"700\">8/1883</tspan> Hiệp ước Hác-măng</text>\n  <circle cx=\"52\" cy=\"221.5\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,221.5 64,269.8 68,269.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"273.8\" class=\"svgt\"><tspan font-weight=\"700\">6/1884</tspan> Hiệp ước Pa-tơ-nốt</text>\n  <circle cx=\"52\" cy=\"229.1\" r=\"4\" fill=\"var(--accent)\"/>\n  <polyline points=\"56,229.1 64,290.8 68,290.8\" fill=\"none\" stroke=\"var(--muted)\" stroke-width=\"0.8\"/>\n  <text x=\"71\" y=\"294.8\" class=\"svgt\"><tspan font-weight=\"700\">7/1885</tspan> Chiếu Cần vương</text>\n  <text x=\"4\" y=\"312\" class=\"svgm\">Vị trí chấm đúng tỉ lệ thời gian</text>\n  </svg>\n  <div class=\"eg\"><b>Mẹo.</b> Ngày Pháp nổ súng là <b>1/9/1858</b>, gần như \"trùng tháng\" với ngày Quốc khánh <b>2/9</b>: tháng 9 năm 1858 nước ta bắt đầu bị xâm lược, tháng 9 năm 1945 nước ta tuyên bố độc lập. Hai hiệp ước cuối đi liền nhau theo bảng chữ cái: <b>H</b>ác-măng (1883) trước, <b>P</b>a-tơ-nốt (1884) sau.</div>\n </div>\n <div class=\"sec\"><h3>Phong trào Cần vương và khởi nghĩa Yên Thế</h3>\n  <p>Trong triều, phái chủ chiến do <b>Tôn Thất Thuyết</b> đứng đầu chuẩn bị chống Pháp. Đêm 4 rạng sáng <b>5/7/1885</b>, họ tấn công quân Pháp ở kinh thành Huế nhưng thất bại. Tôn Thất Thuyết đưa vua <b>Hàm Nghi</b> ra sơn phòng <b>Tân Sở</b> (Quảng Trị), ngày <b>13/7/1885</b> nhân danh vua xuống <span class=\"mark\">chiếu Cần vương</span> (\"giúp vua cứu nước\"), kêu gọi văn thân, sĩ phu và nhân dân đứng lên.</p>\n  <ul><li><b>Giai đoạn 1885–1888:</b> phong trào bùng nổ khắp nơi, nhất là Bắc Kỳ và Trung Kỳ. Cuối năm 1888, vua Hàm Nghi bị bắt, rồi bị đày sang An-giê-ri (châu Phi).</li>\n  <li><b>Giai đoạn 1888–1896:</b> phong trào quy tụ thành những cuộc khởi nghĩa lớn:</li></ul>\n  <div class=\"tbl\"><table><tr><th>Khởi nghĩa</th><th>Thời gian</th><th>Lãnh đạo, nơi diễn ra</th></tr>\n  <tr><td>Ba Đình</td><td>1886–1887</td><td>Phạm Bành, Đinh Công Tráng (Thanh Hoá)</td></tr>\n  <tr><td>Bãi Sậy</td><td>1883–1892</td><td>Nguyễn Thiện Thuật (Hưng Yên)</td></tr>\n  <tr><td>Hương Khê</td><td>1885–1896</td><td>Phan Đình Phùng, Cao Thắng (Hà Tĩnh), lớn nhất phong trào Cần vương</td></tr></table></div>\n  <p><b>Khởi nghĩa Yên Thế (1884–1913)</b> ở Bắc Giang, do <b>Hoàng Hoa Thám (Đề Thám)</b> lãnh đạo, là cuộc khởi nghĩa <span class=\"mark\">tự phát của nông dân</span> để bảo vệ làng quê, kéo dài gần 30 năm. Nghĩa quân đánh theo lối du kích, có lúc buộc Pháp phải giảng hoà. Năm 1913, Đề Thám bị tay sai sát hại, khởi nghĩa tan rã.</p>\n  <div class=\"note\"><b>Dễ nhầm:</b> Yên Thế <b>không thuộc</b> phong trào Cần vương: nó không do văn thân lãnh đạo theo chiếu của vua, mà là nông dân tự vũ trang bảo vệ quê hương.</div>\n </div>\n <div class=\"sec\"><h3>Trào lưu cải cách và phong trào yêu nước đầu thế kỉ XX</h3>\n  <ul><li><b>Cải cách cuối thế kỉ XIX:</b> nhiều sĩ phu thức thời như <b>Nguyễn Trường Tộ</b>, Nguyễn Lộ Trạch, Phạm Phú Thứ, Đinh Văn Điền gửi điều trần đề nghị canh tân: mở cửa buôn bán, phát triển công thương, cải tổ giáo dục, cử người đi học nước ngoài. Triều đình Tự Đức bảo thủ nên <span class=\"mark\">các đề nghị hầu như không được thực hiện</span>, nhưng chúng thể hiện tinh thần yêu nước, mở đường cho tư tưởng duy tân sau này.</li>\n  <li><b>Đầu thế kỉ XX:</b> <b>Phan Bội Châu</b> lập Duy tân hội (1904), tổ chức <b>phong trào Đông du</b> (1905–1908) đưa thanh niên sang Nhật học. <b>Phan Châu Trinh</b> chủ trương cải cách, \"khai dân trí, chấn dân khí, hậu dân sinh\". Trường <b>Đông Kinh nghĩa thục</b> (1907) ở Hà Nội dạy học miễn phí, cổ động dùng chữ Quốc ngữ, cắt tóc ngắn, mặc âu phục.</li>\n  <li>Ngày <b>5/6/1911</b>, người thanh niên <b>Nguyễn Tất Thành</b> ra đi tìm đường cứu nước từ <b>bến Nhà Rồng</b> (Sài Gòn).</li></ul>\n </div>\n <div class=\"sec\"><h3>Nhân vật</h3>\n  <ul><li><b>Vua Hàm Nghi</b> (1871–1944): lên ngôi năm 13 tuổi, theo phái chủ chiến ra sơn phòng kháng chiến. Bị bắt và đày sang An-giê-ri, ông trở thành hoạ sĩ, nhà điêu khắc nhưng không bao giờ chịu khuất phục.</li>\n  <li><b>Nguyễn Trung Trực</b> (1838–1868): anh hùng Nam Bộ, đốt tàu Hy Vọng trên sông Vàm Cỏ Đông, sau đánh đồn Kiên Giang. Trước khi bị xử tử, ông nói: \"Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây\".</li>\n  <li><b>Hoàng Hoa Thám</b> (mất năm 1913): \"Hùm thiêng Yên Thế\", thủ lĩnh khởi nghĩa nông dân bền bỉ nhất cuối thế kỉ XIX, đầu thế kỉ XX.</li></ul>\n </div>\n <div class=\"sec\"><h3>Vì sao…?</h3>\n  <details class=\"wq\"><summary>Vì sao Pháp chọn Đà Nẵng để nổ súng đầu tiên?</summary>Đà Nẵng có cảng biển sâu, tàu chiến vào dễ, lại gần kinh thành Huế. Pháp tính chiếm Đà Nẵng rồi tiến nhanh ra Huế, buộc triều Nguyễn đầu hàng. Kế hoạch đó thất bại vì sự kháng cự của quân dân ta.</details>\n  <details class=\"wq\"><summary>Vì sao nước ta mất vào tay Pháp?</summary>Pháp mạnh hơn về vũ khí, nhưng nguyên nhân chính nằm ở triều Nguyễn: không đoàn kết toàn dân, đường lối kháng chiến thiếu kiên quyết, nhiều lần kí hiệp ước nhượng đất, lại từ chối các đề nghị cải cách. Nhân dân thì chiến đấu không ngừng.</details>\n  <details class=\"wq\"><summary>Vì sao phong trào Cần vương cuối cùng vẫn thất bại?</summary>Phong trào đặt dưới ngọn cờ \"giúp vua\", mang tư tưởng phong kiến, đã lỗi thời; các cuộc khởi nghĩa mang tính địa phương, thiếu liên kết, lại phải chống kẻ thù mạnh hơn nhiều. Nhưng nó thể hiện tinh thần yêu nước bất khuất của dân tộc.</details>\n </div>\n <div class=\"sec real\"><h3>Liên hệ ngày nay</h3>\n  <div class=\"apps\">\n   <div class=\"app\"><b><span class=\"ico\">🏯</span>Cố đô Huế</b>Quần thể di tích Cố đô Huế, kinh đô triều Nguyễn, là Di sản văn hoá thế giới được UNESCO công nhận năm 1993.</div>\n   <div class=\"app\"><b><span class=\"ico\">🌉</span>Cầu Giấy, Hoàng Diệu</b>Ở Hà Nội có quận Cầu Giấy và phố Hoàng Diệu, nhắc nhớ những trận đánh và người anh hùng năm 1873, 1882–1883.</div>\n   <div class=\"app\"><b><span class=\"ico\">⛵</span>Bến Nhà Rồng</b>Nay là Bảo tàng Hồ Chí Minh, chi nhánh TP Hồ Chí Minh, nơi ghi dấu ngày 5/6/1911 Bác ra đi tìm đường cứu nước. Nơi đây có nhiều hiện vật về cuộc đời Bác.</div>\n   <div class=\"app\"><b><span class=\"ico\">🗿</span>Đền Nguyễn Trung Trực</b>Ở Rạch Giá (Kiên Giang) có đền thờ và lễ hội Nguyễn Trung Trực hằng năm vào tháng Tám âm lịch.</div>\n   <div class=\"app\"><b><span class=\"ico\">🏝️</span>Hoàng Sa, Trường Sa</b>Mộc bản, châu bản triều Nguyễn ghi chép việc thực thi chủ quyền ở Hoàng Sa, Trường Sa đã được UNESCO ghi danh là Di sản tư liệu thế giới.</div>\n   <div class=\"app\"><b><span class=\"ico\">🎋</span>Lễ hội Yên Thế</b>Hằng năm vào tháng 3 dương lịch, Bắc Giang tổ chức lễ hội Yên Thế tưởng nhớ Đề Thám và nghĩa quân.</div>\n  </div>\n </div>\n <p>Sang tab Khám phá để đi lần lượt qua các mốc từ 1858 đến đầu thế kỉ XX trên sơ đồ và trả lời câu hỏi nhanh nhé.</p>",
  "formulas": [
   [
    "1802",
    "Nguyễn Ánh lên ngôi (Gia Long), lập triều Nguyễn, đóng đô ở Phú Xuân (Huế)"
   ],
   [
    "1831–1832",
    "Minh Mạng cải cách hành chính: 30 tỉnh và phủ Thừa Thiên"
   ],
   [
    "1/9/1858",
    "Liên quân Pháp – Tây Ban Nha tấn công Đà Nẵng, mở đầu xâm lược"
   ],
   [
    "5/6/1862",
    "Hiệp ước Nhâm Tuất: nhượng ba tỉnh miền Đông Nam Kỳ"
   ],
   [
    "21/12/1873",
    "Trận Cầu Giấy lần 1, Gác-ni-ê bị giết"
   ],
   [
    "19/5/1883",
    "Trận Cầu Giấy lần 2, Ri-vi-e bị giết"
   ],
   [
    "6/6/1884",
    "Hiệp ước Pa-tơ-nốt: Pháp hoàn thành xâm lược Việt Nam"
   ],
   [
    "13/7/1885",
    "Tôn Thất Thuyết nhân danh vua Hàm Nghi ra chiếu Cần vương"
   ],
   [
    "1884–1913",
    "Khởi nghĩa Yên Thế do Hoàng Hoa Thám lãnh đạo"
   ],
   [
    "5/6/1911",
    "Nguyễn Tất Thành ra đi tìm đường cứu nước từ bến Nhà Rồng"
   ]
  ],
  "quiz": [
   {
    "q": "Thực dân Pháp nổ súng xâm lược Việt Nam vào ngày nào, tại đâu?",
    "o": [
     "1/9/1858, tại Đà Nẵng",
     "17/2/1859, tại Gia Định",
     "20/11/1873, tại Hà Nội",
     "18/8/1883, tại Thuận An"
    ],
    "why": "Liên quân Pháp – Tây Ban Nha tấn công bán đảo Sơn Trà (Đà Nẵng). Kế hoạch \"đánh nhanh thắng nhanh\" bị quân dân ta làm thất bại."
   },
   {
    "q": "Hiệp ước nào đánh dấu Pháp cơ bản hoàn thành xâm lược, Việt Nam trở thành nước thuộc địa nửa phong kiến?",
    "o": [
     "Hiệp ước Pa-tơ-nốt (6/6/1884)",
     "Hiệp ước Nhâm Tuất (1862)",
     "Hiệp ước Giáp Tuất (1874)",
     "Hiệp ước Hác-măng (1883)"
    ],
    "why": "Hác-măng (1883) đã công nhận quyền bảo hộ; Pa-tơ-nốt (1884) có nội dung tương tự nhưng mềm hơn đôi chút, là văn bản chính thức cuối cùng."
   },
   {
    "q": "Trong hai trận Cầu Giấy, những sĩ quan Pháp nào lần lượt bị tiêu diệt?",
    "o": [
     "Gác-ni-ê (1873), rồi Ri-vi-e (1883)",
     "Ri-vi-e (1873), rồi Gác-ni-ê (1883)",
     "Hác-măng (1873), rồi Pa-tơ-nốt (1883)",
     "Gác-ni-ê và Ri-vi-e cùng trong năm 1882"
    ],
    "why": "Hác-măng và Pa-tơ-nốt là tên các viên quan Pháp kí hiệp ước, không phải người bị giết ở Cầu Giấy."
   },
   {
    "q": "Chiếu Cần vương được ban ra năm 1885 nhân danh vị vua nào?",
    "o": [
     "Hàm Nghi",
     "Tự Đức",
     "Gia Long",
     "Minh Mạng"
    ],
    "why": "Ngày 13/7/1885, tại Tân Sở (Quảng Trị), Tôn Thất Thuyết nhân danh vua Hàm Nghi (khi đó mới 13 tuổi) ra chiếu kêu gọi giúp vua cứu nước."
   },
   {
    "q": "Cuộc khởi nghĩa lớn nhất, kéo dài nhất trong phong trào Cần vương là",
    "o": [
     "Khởi nghĩa Hương Khê (1885–1896) do Phan Đình Phùng lãnh đạo",
     "Khởi nghĩa Yên Thế (1884–1913)",
     "Khởi nghĩa Ba Đình (1886–1887)",
     "Khởi nghĩa Bãi Sậy (1883–1892)"
    ],
    "why": "Yên Thế kéo dài hơn nhưng không thuộc phong trào Cần vương. Ở Hương Khê, Cao Thắng còn chế tạo được súng trường theo mẫu của Pháp."
   },
   {
    "q": "Điểm khác biệt cơ bản của khởi nghĩa Yên Thế so với các cuộc khởi nghĩa Cần vương là",
    "o": [
     "Là phong trào nông dân tự phát nhằm bảo vệ quê hương, không theo chiếu Cần vương",
     "Do vua Hàm Nghi trực tiếp lãnh đạo",
     "Diễn ra ở Nam Kỳ",
     "Chỉ kéo dài vài tháng"
    ],
    "why": "Nghĩa quân Yên Thế do Hoàng Hoa Thám lãnh đạo, đánh du kích ở vùng rừng núi Bắc Giang suốt gần 30 năm (1884–1913)."
   },
   {
    "q": "Năm 1831–1832, vua Minh Mạng đã chia cả nước thành bao nhiêu đơn vị hành chính?",
    "o": [
     "30 tỉnh và phủ Thừa Thiên",
     "13 thừa tuyên",
     "63 tỉnh, thành phố",
     "3 kỳ: Bắc Kỳ, Trung Kỳ, Nam Kỳ"
    ],
    "why": "13 thừa tuyên là thời Lê sơ; 63 tỉnh, thành phố là trước đợt sắp xếp năm 2025; ba kỳ là cách chia của thực dân Pháp."
   },
   {
    "q": "Theo Hiệp ước Nhâm Tuất (1862), triều Nguyễn nhường cho Pháp",
    "o": [
     "Ba tỉnh miền Đông Nam Kỳ (Gia Định, Định Tường, Biên Hoà) và đảo Côn Lôn",
     "Toàn bộ sáu tỉnh Nam Kỳ",
     "Ba tỉnh miền Tây Nam Kỳ (Vĩnh Long, An Giang, Hà Tiên)",
     "Thành Hà Nội và Bắc Kỳ"
    ],
    "why": "Năm 1867 Pháp mới chiếm thêm ba tỉnh miền Tây, đến Hiệp ước Giáp Tuất (1874) triều đình thừa nhận cả sáu tỉnh Nam Kỳ thuộc Pháp."
   },
   {
    "q": "Vì sao các đề nghị cải cách của Nguyễn Trường Tộ và các sĩ phu cuối thế kỉ XIX không được thực hiện?",
    "o": [
     "Triều đình nhà Nguyễn bảo thủ, không chấp nhận thay đổi",
     "Các đề nghị đều sao chép nguyên của Trung Quốc",
     "Nhân dân phản đối việc mở cửa buôn bán",
     "Pháp đã thực hiện thay cho triều đình"
    ],
    "why": "Nguyễn Trường Tộ gửi khoảng 30 bản điều trần (1863–1871) đề nghị mở cửa, phát triển công thương, cải tổ giáo dục nhưng gần như không được đáp ứng."
   },
   {
    "q": "Đọc dòng thời gian: Pháp nổ súng ở Đà Nẵng (1858) và Hiệp ước Pa-tơ-nốt (1884). Thực dân Pháp mất bao nhiêu năm mới hoàn thành xâm lược Việt Nam?",
    "o": [
     "26 năm",
     "16 năm",
     "36 năm",
     "6 năm"
    ],
    "why": "1884 − 1858 = 26 năm. Pháp tính đánh nhanh thắng nhanh nhưng phải mất hơn một phần tư thế kỉ vì nhân dân ta kháng chiến bền bỉ."
   },
   {
    "q": "Những việc làm của vua Gia Long, Minh Mạng như cho đội Hoàng Sa ra đo đạc, dựng bia, cắm mốc có ý nghĩa gì?",
    "o": [
     "Khẳng định việc Nhà nước Việt Nam thực thi chủ quyền liên tục đối với quần đảo Hoàng Sa, Trường Sa",
     "Để chuẩn bị đánh Pháp ở Đà Nẵng",
     "Để khai thác vàng bạc cho triều đình",
     "Để mở cửa buôn bán với phương Tây"
    ],
    "why": "Các sử liệu như Mộc bản, Châu bản triều Nguyễn là bằng chứng pháp lí và lịch sử quan trọng về chủ quyền biển đảo của Việt Nam."
   },
   {
    "q": "Ngày 5/6/1911 gắn với sự kiện lịch sử nào?",
    "o": [
     "Nguyễn Tất Thành ra đi tìm đường cứu nước từ bến Nhà Rồng",
     "Thành lập trường Đông Kinh nghĩa thục",
     "Vua Hàm Nghi ra chiếu Cần vương",
     "Hiệp ước Nhâm Tuất được kí kết"
    ],
    "why": "Trùng hợp thú vị: Hiệp ước Nhâm Tuất kí ngày 5/6/1862 mất đất, còn đúng ngày 5/6 năm 1911 người thanh niên yêu nước ra đi tìm đường giành lại đất nước."
   }
  ],
  "ex": [],
  "published": true,
  "subject": "su-8"
 }
];
