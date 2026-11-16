# Thiệp cưới online

Fork từ [kimyoon21/wedding](https://github.com/kimyoon21/wedding) (thiệp Hàn), đã chuyển sang tiếng Việt.
Mọi thông tin nằm trong **một file: `wedding.config.js`**.

## Sửa thiệp
1. Mở `wedding.config.js`: tên cô dâu chú rể, ngày giờ, ngày Âm lịch, bố mẹ hai bên, nhà hàng, số tài khoản mừng cưới.
2. Thay ảnh/video trong `public/`:
   - `public/intro.mp4` + `public/img/video-thumbnail.jpg`: video mở đầu (để `video: null` nếu không có).
   - `public/gallery/`: ảnh album (khung vòm 240×360, nên dùng ảnh dọc), rồi ghi tên file vào `gallery`.
   - `public/img/thumbnail.jpg`: ảnh hiện khi gửi link qua Zalo/Messenger.
   - Có tranh vẽ riêng cho phần mở đầu: đặt `public/img/intro.png`, ghi `intro.image: "img/intro.png"`.
   - Mã QR ngân hàng: đặt ảnh vào `public/img/`, ghi vào `qr` của từng tài khoản.

> ⚠️ Ảnh/video hiện tại là của cặp đôi gốc — **phải thay bằng ảnh của mình trước khi gửi khách**.

## Chạy thử / xuất bản
```
npm install
npm run serve      # xem thử ở http://localhost:8080
npm run build      # xuất ra thư mục docs/
```
Đăng lên GitHub Pages: Settings → Pages → Branch `main`, thư mục `/docs` → link `https://<tài-khoản>.github.io/wedding/`.
