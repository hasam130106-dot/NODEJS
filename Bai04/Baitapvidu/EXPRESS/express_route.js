
// Import thư viện Express
const express = require('express');

// Tạo ứng dụng Express
const app = express();

// Định nghĩa route cho đường dẫn gốc
app.get('/', (req, res) => {
  // Khi truy cập trang chủ, hiển thị Trang chủ
  res.send('Trang chủ');
});

// Định nghĩa route cho đường dẫn '/about'
app.get('/about', (req, res) => {
  // Khi truy cập /about, hiển thị Trang giới thiệu
  res.send('Trang giới thiệu');
});

// Định nghĩa route cho đường dẫn '/users' với tham số query
app.get('/users', (req, res) => {
  // Lấy giá trị name từ query parameter
  const { name } = req.query;

  // Hiển thị lời chào theo tên người dùng
  res.send(`Xin chào, ${name}`);
});

// Định nghĩa route mặc định khi không tìm thấy route phù hợp
app.use((req, res) => {
  // Trả về mã lỗi 404 và thông báo không tìm thấy trang
  res.status(404).send('Không tìm thấy trang');
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
  // Hiển thị thông báo server đang chạy
  console.log('Server đang chạy tại cổng 3000');
});
