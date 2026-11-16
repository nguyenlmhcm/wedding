// ★ Sửa thông tin thiệp ở file này. Ảnh/video đặt trong thư mục public/ rồi ghi tên file vào đây.
// Sửa xong: `npm run serve` để xem thử, `npm run build` để xuất bản ra thư mục docs/.
module.exports = {
  // Tiêu đề tab + tiêu đề khi gửi link qua Zalo/Messenger
  title: "Minh & Lan — Chúng mình cưới nhau",

  groom: "Minh",
  bride: "Lan",
  intro: {
    heading: "Chúng mình cưới nhau",
    image: null, // muốn dùng ảnh vẽ riêng thay cho chữ: "img/intro.png"
    video: "intro.mp4", // null = ẩn video
    poster: "img/video-thumbnail.jpg",
  },

  invitation: {
    quote: "Cùng nắm tay nhau nhé?",
    message: [
      "Sau bao năm cố gắng cho cuộc sống riêng,",
      "giờ đây chúng mình muốn nắm tay nhau",
      "cùng bước tiếp trên một con đường.",
      "Trân trọng báo tin vui và mời bạn đến chung vui.",
    ],
    // Giờ cưới theo giờ Việt Nam (dùng cho nút "Thêm vào lịch")
    datetime: "2027-01-16T11:00:00+07:00",
    dateText: "Thứ Bảy, 16 tháng 01 năm 2027",
    timeText: "11 giờ 00",
    lunarText: "Nhằm ngày 09 tháng 12 năm Bính Ngọ", // ghi đúng theo lịch nhà mình
    families: [
      { side: "Nhà trai", parents: "Ông Nguyễn Văn A · Bà Trần Thị B" },
      { side: "Nhà gái", parents: "Ông Lê Văn C · Bà Phạm Thị D" },
    ],
  },

  venue: {
    name: "Trung tâm tiệc cưới ABC",
    address: "123 Đường XYZ, Quận 1, TP. Hồ Chí Minh",
    // Tên/địa chỉ dùng để tìm trên Google Maps
    mapQuery: "Trung tâm tiệc cưới ABC, 123 Đường XYZ, Quận 1, TP. Hồ Chí Minh",
  },

  // Ảnh album: đặt vào public/gallery/
  gallery: ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"],

  // Hộp mừng cưới (xóa cả mục = ẩn phần này)
  gifts: [
    { side: "Mừng cưới chú rể", bank: "Vietcombank", account: "0000000000", holder: "NGUYEN VAN MINH", qr: null },
    { side: "Mừng cưới cô dâu", bank: "MB Bank", account: "0000000000", holder: "LE THI LAN", qr: null },
  ],
};
