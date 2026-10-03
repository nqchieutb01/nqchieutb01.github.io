-- =================================================================
--  CÀI ĐẶT DATABASE CHO SỔ TAY VẬT LÝ 8
--  Cách chạy: Supabase → SQL Editor → New query → dán toàn bộ file → Run.
--  TRƯỚC KHI CHẠY: sửa email ở dòng cuối cùng thành email admin của bạn.
-- =================================================================

-- Bảng chương học (mỗi dòng = 1 chương: lý thuyết, công thức, trắc nghiệm, bài nâng cao)
create table if not exists public.chapters (
  id          text primary key,
  subject     text not null default 'vat-ly-8',
  position    int  not null default 0,
  title       text not null,
  icon        text not null default '📘',
  lab         text,
  theory      text not null default '',
  formulas    jsonb not null default '[]'::jsonb,
  quiz        jsonb not null default '[]'::jsonb,
  ex          jsonb not null default '[]'::jsonb,
  published   boolean not null default true,
  updated_at  timestamptz not null default now()
);

-- Danh sách email được quyền quản trị
create table if not exists public.admins (
  email text primary key
);

alter table public.chapters enable row level security;
alter table public.admins   enable row level security;

-- Hàm kiểm tra người đang đăng nhập có phải admin không
create or replace function public.is_admin()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

drop policy if exists "doc_chuong"   on public.chapters;
drop policy if exists "them_chuong"  on public.chapters;
drop policy if exists "sua_chuong"   on public.chapters;
drop policy if exists "xoa_chuong"   on public.chapters;
drop policy if exists "xem_admin"    on public.admins;

-- Học sinh (không đăng nhập) chỉ đọc được chương đã xuất bản; admin đọc được tất cả
create policy "doc_chuong"  on public.chapters for select using (published or public.is_admin());
-- Chỉ admin được thêm / sửa / xóa
create policy "them_chuong" on public.chapters for insert with check (public.is_admin());
create policy "sua_chuong"  on public.chapters for update using (public.is_admin()) with check (public.is_admin());
create policy "xoa_chuong"  on public.chapters for delete using (public.is_admin());
create policy "xem_admin"   on public.admins   for select using (public.is_admin());

grant usage on schema public to anon, authenticated;
grant select on public.chapters to anon, authenticated;
grant insert, update, delete on public.chapters to authenticated;
grant select on public.admins to authenticated;
grant execute on function public.is_admin() to anon, authenticated;

-- Tự cập nhật thời gian sửa
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
drop trigger if exists chapters_touch on public.chapters;
create trigger chapters_touch before update on public.chapters
for each row execute function public.touch_updated_at();

-- >>> SỬA EMAIL DƯỚI ĐÂY THÀNH EMAIL CỦA BẠN <<<
insert into public.admins (email) values ('quangchieu180901@gmail.com')
on conflict do nothing;
