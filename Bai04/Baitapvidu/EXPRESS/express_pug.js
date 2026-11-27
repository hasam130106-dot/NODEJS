
// Import thư viện Express
const express = require('express');

// Tạo ứng dụng Express
const app = express();

// Thiết lập template engine Pug
app.set('view engine', 'pug');

// Xử lý yêu cầu GET đến đường dẫn '/'
app.get('/', (req, res) => {
  // Khai báo biến name có giá trị John Doe
  const name = 'John Doe';

  // Hiển thị file index.pug và truyền dữ liệu name vào giao diện
  res.render('index', { name });
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
  // Hiển thị thông báo server đang chạy
  console.log('Server đang chạy tại cổng 3000');
});
