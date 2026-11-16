// Đường dẫn tới file trong public/, đúng cả khi chạy thử lẫn khi đăng lên GitHub Pages
export const asset = (path) => process.env.BASE_URL + path;
