
// Import module express để tạo Router
const express = require('express');

// Tạo một Router mới
const router = express.Router();

// Import calculatorModel từ thư mục models
const calculatorModel = require('../models/calculatorModel');

// Xử lý yêu cầu GET khi người dùng truy cập trang máy tính
router.get('/', (req, res) => {
  // Hiển thị giao diện calculator.pug
  res.render('calculator');
});

// Xử lý yêu cầu POST khi người dùng gửi biểu mẫu tính toán
router.post('/calculate', (req, res, next) => {
  // Lấy hai số và phép toán từ dữ liệu biểu mẫu
  const { num1, num2, operation } = req.body;

  // Gọi hàm calculate trong Model để thực hiện phép tính
  const result = calculatorModel.calculate(num1, num2, operation);

  // Kiểm tra kết quả có phải là số hợp lệ hay không
  if (isNaN(result)) {
    // Tạo đối tượng lỗi nếu dữ liệu không hợp lệ
    const err = new Error('Invalid input');

    // Thiết lập mã lỗi 400
    err.status = 400;

    // Chuyển lỗi đến middleware xử lý lỗi
    return next(err);
  }

  // Hiển thị giao diện calculator.pug cùng với kết quả
  res.render('calculator', { result });
});

// Xuất Router để file app.js có thể sử dụng
module.exports = router;
