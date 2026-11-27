
const express = require('express');
const path = require('path');

const app = express();

// Đọc dữ liệu từ biểu mẫu
app.use(express.urlencoded({ extended: true }));

// Sử dụng thư mục CSS
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Kết nối Controller
const calculatorController = require('./controllers/calculatorController');
app.use('/calculator', calculatorController);

// Xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('Something broke!');
});

// Khởi động máy chủ
app.listen(3000, () => {
    console.log('Server đang chạy tại cổng 3000');
});
