# BÀI THỰC HÀNH 09 – NODE.JS VÀ MONGODB

## 1. Giới thiệu bài tập

- **Tên bài:** Bt09 – Xóa dữ liệu trong MongoDB.
- **Ngôn ngữ:** JavaScript (Node.js).
- **Cơ sở dữ liệu:** MongoDB.
- **Database:** `qlsinhvien`.
- **Collection:** `students_test`.
- **File chương trình:** `bai09.js`.

## 2. Mục tiêu thực hiện

- Kết nối database `qlsinhvien`.
- Sử dụng collection riêng `students_test`.
- Thêm ít nhất 5 sinh viên mẫu.
- Sử dụng `deleteOne()` để xóa một sinh viên theo mã sinh viên.
- Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa.
- Sử dụng `find()` để hiển thị danh sách sinh viên còn lại.

## 3. Cấu trúc thư mục

```text
NodeJS/
└── Bai03/
    └── Bt09/
        ├── bai09.js
        ├── README.md
        └── images/
            ├── terminal.png
            └── mongodb.png
```

## 4. Các bước thực hiện

### Bước 1: Kết nối MongoDB

Sử dụng thư viện `mongodb` và địa chỉ kết nối:

```javascript
const { MongoClient } = require('mongodb');

const ketNoiDB = new MongoClient(
    'mongodb://127.0.0.1:27017'
);
```

### Bước 2: Chọn database và collection

```javascript
const duLieuHocTap = ketNoiDB.db('qlsinhvien');
const bangSinhVien = duLieuHocTap.collection('students_test');
```

### Bước 3: Thêm dữ liệu sinh viên

Sử dụng `insertMany()` để thêm 5 sinh viên mẫu với các thông tin:
- Mã sinh viên (masv).
- Họ tên (hoten).
- Tuổi (tuoi).
- Điểm (diem).

### Bước 4: Xóa một sinh viên

Sử dụng `deleteOne()` để xóa sinh viên có mã `SV103`.

### Bước 5: Xóa nhiều sinh viên

Sử dụng `deleteMany()` để xóa những sinh viên có điểm dưới 5.

### Bước 6: Hiển thị danh sách còn lại

Sử dụng `find({}).toArray()` để lấy danh sách sinh viên sau khi xóa và hiển thị thông tin trên Terminal.

## 5. Các lệnh thực hiện

Cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

Chạy chương trình:

```bash
node bai09.js
```

## 6. Hình ảnh kết quả

### Hình 1: Chạy chương trình trên Terminal

<img width="396" height="392" alt="image" src="https://github.com/user-attachments/assets/58c5e9b0-509e-4107-8cfe-119f419ffc21" />


### Hình 2: Dữ liệu trong MongoDB Compass

<img width="1073" height="440" alt="image" src="https://github.com/user-attachments/assets/67fd375a-e373-4783-a2ca-8c8e8ec9faa1" />


## 7. Kết quả thực hiện

Sau khi chạy chương trình thu được kết quả:

- Thêm thành công 5 sinh viên vào collection `students_test`.
- Xóa thành công 1 sinh viên có mã SV103 bằng `deleteOne()`.
- Xóa thành công 2 sinh viên có điểm dưới 5 bằng `deleteMany()`.
- Còn lại 2 sinh viên trong danh sách.

### Danh sách sinh viên còn lại

| Mã sinh viên | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV101 | Lam Minh Khang | 19 | 8.5 |
| SV102 | Tran Quoc Huy | 20 | 6.5 |

## 8. Kết luận

Qua bài thực hành 09, em đã biết cách kết nối Node.js với MongoDB, thêm dữ liệu sinh viên, thực hiện xóa một bản ghi bằng `deleteOne()`, xóa nhiều bản ghi bằng `deleteMany()` và truy vấn dữ liệu bằng `find()`.

**Kết quả:** Hoàn thành các yêu cầu của bài thực hành 09.
