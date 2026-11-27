# BÀI THỰC HÀNH 04 – KẾT NỐI MONGODB

## 1. Mục tiêu
- Kết nối MongoDB đang chạy trên máy.
- Sử dụng database `qlsinhvien`.
- Sử dụng collection `students`.
- Thêm ít nhất 3 sinh viên bằng `insertMany()`.
- Sử dụng `find()` để hiển thị danh sách sinh viên.
- Đóng kết nối sau khi hoàn thành.

## 2. Cấu trúc thư mục

```text
Bt04/
├── bai04.js
├── README.md
└── images/
    ├── code.png
    ├── terminal.png
    └── mongodb.png
```

## 3. Các lệnh thực hiện

Cài đặt MongoDB Driver:

```bash
npm install mongodb
```

Chạy chương trình:

```bash
node bai04.js
```

## 4. Chức năng chương trình

- `MongoClient`: Kết nối đến MongoDB.
- `client.connect()`: Mở kết nối MongoDB.
- `client.db('qlsinhvien')`: Chọn database qlsinhvien.
- `db.collection('students')`: Chọn collection students.
- `insertMany()`: Thêm 3 sinh viên vào database.
- `find().toArray()`: Lấy và hiển thị danh sách sinh viên.
- `client.close()`: Đóng kết nối MongoDB.

## 5. Danh sách sinh viên

| Mã sinh viên | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Lâm Minh Khang | 20 | 8.5 |
| SV002 | Hà Văn Sâm | 21 | 9 |
| SV003 | Trần Quốc Huy | 19 | 7.5 |

## 6. Hình ảnh thực hiện


### Hình 2: Kết quả chạy Terminal

<img width="298" height="316" alt="image" src="https://github.com/user-attachments/assets/590e1da4-151a-431f-b7b1-175cb55172b1" />

### Hình 3: Dữ liệu trong MongoDB Compass

<img width="1021" height="599" alt="image" src="https://github.com/user-attachments/assets/9fddcebd-ebaf-46c6-99f7-c2d01facf252" />


## 7. Kết quả

Chương trình kết nối MongoDB thành công, thêm 3 sinh viên vào database `qlsinhvien`, collection `students`, hiển thị danh sách sinh viên bằng `find()` và đóng kết nối sau khi hoàn thành.

**Kết luận:** Hoàn thành bài thực hành 04 theo yêu cầu.

