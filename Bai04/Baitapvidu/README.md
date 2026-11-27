# BÀI 4: XÂY DỰNG ỨNG DỤNG WEB VỚI EXPRESS.JS

## 1. Giới thiệu

Xây dựng ứng dụng Calculator sử dụng nền tảng Express.js và mô hình MVC (Model - View - Controller).

Ứng dụng cho phép người dùng nhập hai số và lựa chọn phép toán để tính kết quả.

**Công nghệ sử dụng:**
- Node.js
- Express.js
- Pug Template Engine
- HTML, CSS
- JavaScript

## 2. Chức năng chính

- Nhập số thứ nhất.
- Nhập số thứ hai.
- Lựa chọn phép cộng, trừ, nhân, chia.
- Nhấn nút Calculate để thực hiện tính toán.
- Hiển thị kết quả trên giao diện.

## 3. Cấu trúc thư mục

```text
my-express-app/
│
├── controllers/
│   └── calculatorController.js
│
├── models/
│   └── calculatorModel.js
│
├── public/
│   └── styles.css
│
├── views/
│   └── calculator.pug
│
├── app.js
├── package.json
└── package-lock.json
```

## 4. Mô tả chức năng các tập tin

| Tập tin | Chức năng |
|---|---|
| app.js | Khởi tạo máy chủ Express và cấu hình ứng dụng |
| calculatorController.js | Tiếp nhận yêu cầu và xử lý điều hướng |
| calculatorModel.js | Thực hiện các phép tính |
| calculator.pug | Thiết kế giao diện Calculator |
| styles.css | Trang trí giao diện bằng CSS |

## 5. Hình ảnh giao diện

### Giao diện chính

<img width="453" height="511" alt="image" src="https://github.com/user-attachments/assets/1a54ba16-e10c-40b1-adb2-a8de27978694" />


### Kết quả thực hiện phép tính

<img width="359" height="509" alt="image" src="https://github.com/user-attachments/assets/341f106d-40c8-4e16-82e7-b08f92ae127c" />


## 6. Cách chạy chương trình

**Bước 1:** Mở Terminal tại thư mục dự án.

**Bước 2:** Cài đặt thư viện:

```bash
npm install
```

**Bước 3:** Khởi động máy chủ:

```bash
node app.js
```

**Bước 4:** Mở trình duyệt và truy cập:
http://localhost:3000/calculator

## 7. Kết quả đạt được

- Xây dựng được ứng dụng Calculator bằng Express.js.
- Hiểu cách tổ chức dự án theo mô hình MVC.
- Biết cách sử dụng Route và Controller.
- Biết cách truyền dữ liệu từ biểu mẫu đến máy chủ.
- Hiển thị kết quả tính toán bằng Pug.

## 8. Kết luận

Qua bài thực hành, em đã làm quen với Express.js, mô hình MVC và cách xây dựng một ứng dụng web đơn giản. Ứng dụng Calculator thực hiện được các phép toán cơ bản và hiển thị kết quả cho người dùng.
