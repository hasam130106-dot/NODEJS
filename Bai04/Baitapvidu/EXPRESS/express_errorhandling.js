
// Import thư viện Express
const express = require('express');

// Import thư viện body-parser
const bodyParser = require('body-parser');

// Tạo ứng dụng Express
const app = express();

// Sử dụng body-parser để phân tích dữ liệu gửi từ form HTML
app.use(bodyParser.urlencoded({ extended: true }));

// Trang giao diện
app.get('/', (req, res) => {
  // Hiển thị biểu mẫu nhập số bị chia và số chia
  res.send(`
    <form action="/divide" method="post">
      <label for="dividend">Dividend:</label>
      <input type="number" id="dividend" name="dividend" required>
      <br>
      <label for="divisor">Divisor:</label>
      <input type="number" id="divisor" name="divisor" required>
      <br>
      <input type="submit" value="Submit">
    </form>
  `);
});

// Xử lý yêu cầu POST
app.post('/divide', (req, res) => {
  // Lấy giá trị số bị chia từ form và chuyển thành số thực
  const dividend = parseFloat(req.body.dividend);

  // Lấy giá trị số chia từ form và chuyển thành số thực
  const divisor = parseFloat(req.body.divisor);

  // Kiểm tra dữ liệu nhập vào có hợp lệ hay không
  // Nếu dữ liệu không phải số hoặc số chia bằng 0 thì báo lỗi
  if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
    // Trả về mã lỗi 400 và thông báo Invalid input
    res.status(400).send('Invalid input');
    return;
  }

  // Thực hiện phép chia hai số
  const result = dividend / divisor;

  // Hiển thị kết quả phép chia
  res.send(`Result: ${result}`);
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
  // Hiển thị thông báo server đang chạy
  console.log('Server đang chạy tại cổng 3000');
});
