/* ================================================================
   CẤU HÌNH KẾT NỐI SUPABASE
   Lấy 2 giá trị này trong Supabase: Project Settings → API Keys / Data API.
   - SUPABASE_URL: dạng https://abcdxyz.supabase.co
   - SUPABASE_KEY: "Publishable key" (sb_publishable_...) hoặc "anon public key".
   Khóa này được phép công khai; dữ liệu đã được bảo vệ bằng chính sách
   bảo mật trong file supabase-setup.sql.
   KHÔNG BAO GIỜ dán "secret key" hay "service_role key" vào đây.
   ================================================================ */
window.APP_CONFIG = {
  SUPABASE_URL: 'https://xxxx.supabase.co',
  SUPABASE_KEY: 'DAN_PUBLISHABLE_KEY_VAO_DAY',
  SUBJECT: 'vat-ly-8'
};
