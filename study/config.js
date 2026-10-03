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
  SUPABASE_URL: 'https://sphhyodmfjjekssvyypx.supabase.co',
  SUPABASE_KEY: 'sb_publishable_oFGgeVgTSXJp_etO2XWTMg_NEaggPXM',
  SUBJECT: 'vat-ly-8'
};
