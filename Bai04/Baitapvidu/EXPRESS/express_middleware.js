
// Import thư viện Express
const express = require('express');

// Tạo ứng dụng Express
const app = express();

// Middleware ghi log
app.use((req, res, next) => {
  // In ra địa chỉ yêu cầu được gửi đến server
  console.log(`Yêu cầu đến địa chỉ: ${req.url}`);

  // Chuyển quyền điều khiển cho Middleware tiếp theo hoặc route chính
  next();
});

// Route chính
app.get('/', (req, res) => {
  // Gửi thông báo về trình duyệt
  res.send('Chào mừng đến với ứng dụng Express!');
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
  // Hiển thị thông báo server đang chạy
  console.log('Server đang chạy tại cổng 3000');
});
