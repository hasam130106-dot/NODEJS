
# BÀI THỰC HÀNH 07 – NODE.JS HTTP SERVER

## 1. Giới thiệu
Xây dựng Web Server bằng Node.js sử dụng module `http` và đối tượng `URL`.

- Tên bài: Bt07
- Ngôn ngữ: JavaScript
- Công cụ: Node.js
- Cổng Server: 3001
- Tập tin chương trình: `Bt07.js`

## 2. Cấu trúc thư mục

```text
Bt07/
├── Bt07.js
└── README.md
```

## 3. Mô tả chức năng chương trình

### 3.1. Khai báo module

```javascript
const http = require('http');
const { URL } = require('url');
const cong = 3001;
```

- `http`: Tạo Web Server.
- `URL`: Phân tích đường dẫn và lấy tham số.
- `cong`: Khai báo cổng chạy Server là 3001.

### 3.2. Chức năng tạo Server

```javascript
const ungDung = http.createServer((yeuCau, phanHoi) => {
    const diaChi = new URL(yeuCau.url, 'http://localhost');
    const chucNang = diaChi.pathname;
});
```

Tạo Web Server và xác định đường dẫn mà người dùng truy cập.

### 3.3. Chức năng chào hỏi

Đường dẫn:

`http://localhost:3001/hello?name=Minh`

Kết quả:

```text
Xin chào Minh
```

Chương trình lấy tham số `name` và hiển thị lời chào. Nếu thiếu tên sẽ thông báo lỗi.

### 3.4. Chức năng tính tổng

Đường dẫn:

`http://localhost:3001/sum?a=10&b=20`

Kết quả:

```text
Tổng = 30
```

Chương trình lấy hai tham số `a`, `b`, chuyển thành số và tính tổng.

### 3.5. Chức năng xử lý lỗi

- Thiếu tham số: Trả về lỗi 400.
- Giá trị không hợp lệ: Trả về lỗi 400.
- Đường dẫn không tồn tại: Trả về lỗi 404.

## 4. Các bước thực hiện

### Bước 1: Tạo tập tin
Tạo tập tin có tên `Bt07.js` và nhập mã nguồn chương trình.

### Bước 2: Chạy chương trình

Mở Terminal tại thư mục chứa tập tin và nhập lệnh:

```bash
node Bt07.js
```

Kết quả:

```text
Server dang chay tai cong 3001
```

**Hình 1: Chạy chương trình trên Terminal**

<img width="290" height="75" alt="image" src="https://github.com/user-attachments/assets/6a52fb66-5be7-4098-837f-83c63ea11e1d" />


### Bước 3: Kiểm tra chức năng chào hỏi

Truy cập:

`http://localhost:3001/hello?name=Minh`

Kết quả:

```text
Xin chào Minh
```

**Hình 2: Kết quả chức năng chào hỏi**

<img width="348" height="112" alt="image" src="https://github.com/user-attachments/assets/cb20649c-e7ec-41d3-9baf-8930b0511d52" />


### Bước 4: Kiểm tra chức năng tính tổng

Truy cập:

`http://localhost:3001/sum?a=10&b=20`

Kết quả:

```text
Tổng = 30
```

**Hình 3: Kết quả tính tổng**

<img width="345" height="124" alt="image" src="https://github.com/user-attachments/assets/fe70ff0f-6efd-4c3c-9461-85568963dbe4" />


### Bước 5: Kiểm tra lỗi thiếu tham số

Truy cập:

`http://localhost:3001/sum?a=10`

Kết quả:

```text
Loi: Vui long nhap day du a va b!
```

**Hình 4: Thông báo lỗi thiếu tham số**

<img width="301" height="107" alt="image" src="https://github.com/user-attachments/assets/cdb98f57-b8a4-44c1-b53c-d78b52ac157c" />


### Bước 6: Kiểm tra giá trị không hợp lệ

Truy cập:

`http://localhost:3001/sum?a=abc&b=20`

Kết quả:

```text
Loi: Gia tri nhap vao khong hop le!
```

**Hình 5: Thông báo lỗi giá trị không hợp lệ**
<img width="334" height="91" alt="image" src="https://github.com/user-attachments/assets/aeaa94e0-6bc9-4380-a2db-5779615ee6cd" />



### Bước 7: Kiểm tra lỗi 404

Truy cập:

`http://localhost:3001/abc123`

Kết quả:

```text
ERROR 404 - KHONG TIM THAY TRANG!
```

**Hình 6: Thông báo lỗi 404**

<img width="269" height="112" alt="image" src="https://github.com/user-attachments/assets/a5dbcb5d-0f8a-4533-9b1a-0562fa9368ae" />


## 5. Kết luận

Sau khi hoàn thành bài thực hành, em đã:

- Biết cách sử dụng module `http` trong Node.js.
- Biết sử dụng đối tượng `URL` để lấy đường dẫn và tham số.
- Tạo được Web Server chạy tại cổng 3001.
- Xử lý chức năng chào hỏi và tính tổng hai số.
- Biết kiểm tra và xử lý lỗi khi thiếu tham số, nhập giá trị không hợp lệ và truy cập đường dẫn không tồn tại.

**Bài thực hành Bt07 đã hoàn thành theo yêu cầu.**
