
# BÀI TẬP 06 – TÍNH ĐIỂM TRUNG BÌNH VÀ XẾP LOẠI SINH VIÊN

## 1. Giới thiệu
Bài tập xây dựng chương trình JavaScript sử dụng Module trong Node.js để tính điểm trung bình 3 môn học và xếp loại học tập cho sinh viên.

## 2. Cấu trúc thư mục

```text
Bt06/
│
├── bai06.js
├── xulyDiem.js
├── README.md
└── images/
    ├── hinh1.png
    ├── hinh2.png
    └── hinh3.png
```

## 3. Chức năng từng tập tin

### 3.1. File xulyDiem.js
- Xây dựng hàm `tinhDiemTrungBinh()` để tính điểm trung bình của 3 môn Toán, Văn và Anh.
- Xây dựng hàm `xepLoai()` để xếp loại học tập:
  - Giỏi: từ 8 trở lên.
  - Khá: từ 6.5 đến dưới 8.
  - Trung bình: từ 5 đến dưới 6.5.
  - Yếu: dưới 5.
- Sử dụng `module.exports` để xuất các hàm.

### 3.2. File bai06.js
- Sử dụng `require()` để gọi các hàm từ file `xulyDiem.js`.
- Tạo dữ liệu gồm 3 sinh viên.
- Tính điểm trung bình từng sinh viên.
- Hiển thị họ tên, điểm trung bình và xếp loại trên Terminal.

## 4. Các bước thực hiện

### Bước 1: Tạo hai tập tin JavaScript
Tạo `bai06.js` và `xulyDiem.js` trong cùng thư mục Bt06.

### Bước 2: Viết chương trình
Nhập code tính điểm trung bình và xếp loại vào file `xulyDiem.js`.

Nhập code sử dụng `require()` và dữ liệu 3 sinh viên vào file `bai06.js`.

### Bước 3: Chạy chương trình
Mở Terminal tại thư mục Bt06 và nhập lệnh:

```bash
node bai06.js
```

### Bước 4: Kiểm tra kết quả
Chương trình hiển thị họ tên, điểm trung bình và xếp loại của 3 sinh viên.





 Kết quả chạy chương trình trên Terminal
<img width="335" height="219" alt="image" src="https://github.com/user-attachments/assets/8fee4f40-0bf7-4ba2-b13d-9d63912d5004" />


## 6. Kết quả đạt được
- Biết cách tạo và sử dụng Module trong Node.js.
- Biết sử dụng `module.exports` để xuất hàm.
- Biết sử dụng `require()` để gọi hàm từ tập tin khác.
- Tính được điểm trung bình của 3 môn học.
- Xếp loại học tập cho 3 sinh viên theo yêu cầu.

## 7. Lệnh chạy chương trình

```bash
node bai06.js
```

**Kết luận:** Hoàn thành bài tập 06 về sử dụng Module trong Node.js để tính điểm trung bình và xếp loại học tập của sinh viên.
