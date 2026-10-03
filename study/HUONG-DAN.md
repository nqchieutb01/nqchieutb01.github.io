# Sổ tay Vật lý 8: hướng dẫn đưa lên mạng (miễn phí 100%)

Website gồm 2 trang:

- **index.html**: trang học sinh (lý thuyết, thí nghiệm ảo, trắc nghiệm, bài nâng cao).
- **admin.html**: trang quản trị để bạn thêm, sửa, xóa chương, câu trắc nghiệm và bài tập.

Nội dung bài học nằm trong database **Supabase** (miễn phí). Website nằm trên **Netlify** (miễn phí). Sửa bài trong trang admin là học sinh thấy ngay, không cần đăng lại website.

Thời gian cài đặt: khoảng 20 phút. Không cần cài phần mềm nào.

---

## Bước 1. Tạo database Supabase

1. Vào https://supabase.com, bấm **Start your project**, đăng nhập bằng GitHub hoặc email.
2. Bấm **New project**. Đặt tên (ví dụ `so-tay-vat-ly`), đặt mật khẩu database (lưu lại), chọn Region **Southeast Asia (Singapore)** cho nhanh ở Việt Nam. Gói **Free**.
3. Chờ khoảng 2 phút cho dự án khởi tạo xong.

## Bước 2. Tạo bảng dữ liệu

1. Mở file **supabase-setup.sql** bằng Notepad. Ở dòng cuối, đổi `email-cua-ban@gmail.com` thành email bạn sẽ dùng để đăng nhập admin.
2. Trong Supabase, vào **SQL Editor** (thanh bên trái) → **New query**.
3. Dán toàn bộ nội dung file vào, bấm **Run**. Thấy chữ "Success" là xong.

## Bước 3. Tạo tài khoản admin

1. Vào **Authentication** → **Users** → **Add user** → **Create new user**.
2. Nhập đúng email ở bước 2 và một mật khẩu. Chọn **Auto Confirm User**. Bấm **Create user**.
3. Nên làm thêm: vào **Authentication** → **Sign In / Providers**, tắt **Allow new users to sign up** để không ai tự đăng ký được. (Kể cả không tắt, người lạ đăng ký cũng không sửa được bài vì không có trong bảng admins.)

## Bước 4. Điền thông tin kết nối

1. Trong Supabase, vào **Project Settings** → **API Keys**. Copy **Publishable key** (bắt đầu bằng `sb_publishable_`). Nếu chỉ thấy tab "Legacy", copy **anon public**.
2. Vào **Project Settings** → **Data API** (hoặc trang Overview), copy **Project URL** (dạng `https://abcd1234.supabase.co`).
3. Mở file **config.js**, dán 2 giá trị vào:

```js
window.APP_CONFIG = {
  SUPABASE_URL: 'https://abcd1234.supabase.co',
  SUPABASE_KEY: 'sb_publishable_xxxxxxxx',
  SUBJECT: 'vat-ly-8'
};
```

> Publishable/anon key được phép để công khai. Tuyệt đối **không** dán *secret key* hay *service_role key* vào file này.

## Bước 5. Đưa website lên Netlify

1. Vào https://app.netlify.com/drop và đăng ký tài khoản miễn phí.
2. Kéo **cả thư mục** chứa các file này (index.html, admin.html, config.js, default-data.js...) thả vào ô trên trang.
3. Sau vài giây bạn có link dạng `https://ten-ngau-nhien.netlify.app`. Vào **Site configuration** → **Change site name** để đổi thành tên dễ nhớ, ví dụ `vatly8-thayhung.netlify.app`.

Cách khác cũng miễn phí: Cloudflare Pages (Workers & Pages → Create → Pages → Upload assets) hoặc GitHub Pages.

## Bước 6. Nạp bài học

1. Mở `https://ten-trang-cua-ban.netlify.app/admin.html`.
2. Đăng nhập bằng tài khoản ở bước 3.
3. Bấm **Nạp dữ liệu mẫu Vật lý 8**: 6 chương, 44 câu trắc nghiệm và 55 bài nâng cao được đưa vào database.
4. Gửi link trang chính (không có `/admin.html`) cho học sinh.

---

## Dùng trang quản trị

- **Thêm chương**: bấm "+ Thêm chương". Chương mới mặc định **ẩn** với học sinh; soạn xong thì chọn "Hiện chương này cho học sinh" rồi bấm **Lưu**.
- **Lý thuyết**: soạn bằng HTML, có nút chèn nhanh khung "Mục mới", "Công thức", "Ghi nhớ", "Ví dụ"... và khung xem trước ngay bên cạnh.
- **Trắc nghiệm**: bấm chấm tròn để chọn đáp án đúng. Trang học sinh tự xáo thứ tự phương án.
- **Bài nâng cao**: điền đáp số nếu muốn chấm tự động; để trống thì học sinh tự đánh dấu "Đã giải".
- **Lưu**: mỗi chương lưu riêng bằng nút "Lưu chương này" (hoặc Ctrl+S).
- **Sao lưu**: thỉnh thoảng bấm "Tải file sao lưu (.json)". Khi cần, dùng "Khôi phục từ file sao lưu".

## Câu hỏi thường gặp

**Có tốn tiền về sau không?** Không, nếu dùng trong giới hạn gói free: Supabase 500 MB database, Netlify 100 GB băng thông/tháng. Một lớp học hay cả trường vẫn dư rất nhiều.

**Supabase tạm dừng dự án?** Gói free tự tạm dừng nếu 7 ngày liền không có ai truy cập. Khi đó trang học sinh vẫn chạy bằng bản lưu sẵn, còn bạn vào supabase.com bấm **Restore project** để bật lại.

**Tiến độ học của học sinh lưu ở đâu?** Trên trình duyệt của máy học sinh. Đổi máy hoặc xóa dữ liệu trình duyệt thì tiến độ bắt đầu lại.

**Khi nào cần đăng lại website?** Chỉ khi sửa giao diện (file .html). Sửa bài học trong trang admin thì **không** cần.

**Thêm môn khác?** Sao chép thư mục, đổi `SUBJECT` trong config.js (ví dụ `'hoa-8'`), rồi đăng lên một site Netlify mới. Cả hai môn dùng chung một database Supabase.
