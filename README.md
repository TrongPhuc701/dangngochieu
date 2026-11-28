# dangngochieu

Từ 25/11/2026 repo này chứa hai phần, đẩy lên `main` là Vercel (project "dangngochieu") tự triển khai:

- **Gốc (`/`)**: website Next.js mới của Đặng Ngọc Hiếu, đã build sẵn (thư mục `out/`). Mã nguồn ở repo website riêng (`WebsiteDNH-T4-preview`, nhánh `task/ui-kem-xanh`). Sửa ở đó, build với `NEXT_PUBLIC_SITE_URL=https://www.dangngochieu.vn NEXT_PUBLIC_ALLOW_INDEX=1 NEXT_PUBLIC_TRACKING=1`, rồi chép `out/` đè vào gốc repo này (giữ nguyên `khoahocfoodapp/`, `vercel.json`, `README.md`).
- **`/khoahocfoodapp/`** (trước 25/11 tạm là `/saleapp/`, link cũ tự chuyển sang): Ladipage bán khóa cũ (index.html + profile.html + ảnh). Sửa thẳng trong thư mục `khoahocfoodapp/`.

`vercel.json`:
- `/profile.html` chuyển sang `/khoahocfoodapp/profile.html`.
- Khách bấm quảng cáo vào trang chủ (link có `ttclid`, `gclid`, `gbraid`, `wbraid`; riêng Facebook phải có cả `fbclid` lẫn `utm_source`, vì Facebook gắn `fbclid` vào mọi link bấm ra ngoài, kể cả link trên trang cá nhân) được chuyển sang `/khoahocfoodapp/`, giữ nguyên tham số đo. Khi đã đổi link quảng cáo sang `/khoahocfoodapp/` thì có thể bỏ các dòng này.

Quay lại bản cũ: `git revert` commit chuyển đổi rồi đẩy `main`.
