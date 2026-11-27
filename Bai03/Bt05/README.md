
# BÀI THỰC HÀNH 05 – TRUY VẤN VÀ CẬP NHẬT SINH VIÊN TRONG MONGODB

## 1. Giới thiệu
Bài thực hành sử dụng Node.js kết nối MongoDB để thực hiện tìm kiếm, sắp xếp và cập nhật thông tin sinh viên trong collection `students` của database `qlsinhvien`.

**Công nghệ sử dụng:**
- Node.js
- MongoDB
- MongoDB Driver

## 2. Cấu trúc thư mục

```text
NodeJS/
└── Bai03/
    └── Bt05/
        ├── Bt05.js
        ├── README.md
        └── images/
            └── ket-qua-bai05.png
```

## 3. Nội dung chương trình

File thực hiện: `Bt05.js`

### Chức năng 1: Kết nối MongoDB

Sử dụng `MongoClient` để kết nối đến MongoDB tại địa chỉ:

```javascript
mongodb://127.0.0.1:27017
```

Truy cập database `qlsinhvien` và collection `students`.

### Chức năng 2: Tìm kiếm sinh viên

Sử dụng `find()` kết hợp với `$gte` để tìm các sinh viên có điểm lớn hơn hoặc bằng 7.

```javascript
const ketQua = await bangSV.find({
    diem: { $gte: 7 }
}).sort({
    diem: -1
}).toArray();
```

### Chức năng 3: Sắp xếp điểm

Sử dụng `sort({ diem: -1 })` để sắp xếp danh sách sinh viên theo điểm từ cao xuống thấp.

### Chức năng 4: Cập nhật điểm sinh viên

Sử dụng `updateOne()` và `$set` để cập nhật điểm của sinh viên có mã `SV001` thành `8.5`.

```javascript
await bangSV.updateOne(
    { masv: maCanSua },
    {
        $set: {
            diem: diemThayDoi
        }
    }
);
```

### Chức năng 5: Kiểm tra sau cập nhật

Sử dụng `findOne()` để tìm lại sinh viên SV001 và hiển thị thông tin mới sau khi cập nhật.

## 4. Các bước thực hiện

**Bước 1: Cài đặt MongoDB Driver**

```bash
npm install mongodb
```

**Bước 2: Chạy chương trình**

```bash
node Bt05.js
```

**Bước 3: Kiểm tra kết quả**

Chương trình hiển thị danh sách sinh viên đạt điểm từ 7 trở lên, sắp xếp giảm dần và thông tin sinh viên sau khi cập nhật.

## 5. Kết quả thực hiện

### Hình 1: Kết quả chạy chương trình trên Terminal

<img width="310" height="270" alt="image" src="https://github.com/user-attachments/assets/cc7a987f-a7b9-4e15-947e-d2d989aa7334" />



Kết quả thu được:
- SV002 – Hà Văn Sâm: 9 điểm.
- SV001 – Lâm Minh Khang: 8.5 điểm.
- SV003 – Trần Quốc Huy: 7.5 điểm.

Sau khi cập nhật, sinh viên SV001 có điểm mới là 8.5.

## 6. Kết luận

Qua bài thực hành, em đã thực hiện được:
- Kết nối Node.js với MongoDB.
- Tìm kiếm sinh viên bằng `find()` và `$gte`.
- Sắp xếp dữ liệu bằng `sort()`.
- Cập nhật điểm bằng `updateOne()` và `$set`.
- Kiểm tra thông tin sinh viên sau khi cập nhật bằng `findOne()`.

Bài thực hành đã hoàn thành và chạy thành công.
