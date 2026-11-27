
// Định nghĩa đối tượng calculatorModel
const calculatorModel = {
  // Hàm calculate nhận hai số và phép toán cần thực hiện
  calculate: (num1, num2, operation) => {

    // Chuyển đổi hai giá trị đầu vào thành số thực
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Sử dụng switch để kiểm tra phép toán
    switch (operation) {

      // Trường hợp cộng
      case 'add':
        return num1 + num2;

      // Trường hợp trừ
      case 'subtract':
        return num1 - num2;

      // Trường hợp nhân
      case 'multiply':
        return num1 * num2;

      // Trường hợp chia
      case 'divide':
        // Nếu số chia bằng 0 thì trả về NaN
        if (num2 === 0) return NaN;

        // Thực hiện phép chia
        return num1 / num2;

      // Nếu phép toán không hợp lệ thì trả về NaN
      default:
        return NaN;
    }
  },
};

// Xuất đối tượng calculatorModel để Controller sử dụng
module.exports = calculatorModel;
