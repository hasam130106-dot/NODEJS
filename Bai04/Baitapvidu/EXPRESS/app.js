
// Import thư viện Express để xây dựng ứng dụng web
const express = require('express');

// Tạo một ứng dụng Express
const app = express();

// Khai báo cổng mà máy chủ sẽ chạy
const port = 3000;

// Định nghĩa route cho đường dẫn gốc "/"
app.get('/', (req, res) => {
  // Gửi nội dung Hello, Express! về trình duyệt
  res.send('Hello, Express!');
});

// Khởi động máy chủ và lắng nghe yêu cầu tại cổng 3000
app.listen(port, () => {
  // Hiển thị thông báo khi máy chủ chạy thành công
  console.log(`Server is running on port ${port}`);
});
