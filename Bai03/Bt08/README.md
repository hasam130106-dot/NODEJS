# BÀI THỰC HÀNH 08 – NODE.JS MODULE FS

## 1. Giới thiệu
- **Tên bài:** Bt08 – Làm việc với tập tin bằng module fs.
- **Ngôn ngữ:** JavaScript (Node.js).
- **Tên file:** `bai08.js`.
- **Công cụ:** Visual Studio Code, Node.js.

## 2. Mục tiêu bài tập

Sử dụng module `fs` trong Node.js để thực hiện các thao tác:
- Tạo thư mục `data`.
- Tạo file `ghichu.txt`.
- Ghi ít nhất 3 dòng nội dung vào file.
- Đổi tên file thành `ghichu_moi.txt` bằng `fs.rename()`.
- Đọc và hiển thị nội dung file sau khi đổi tên.
- Tạo file `tam.txt` và xóa bằng `fs.unlink()`.
- Hiển thị thông báo sau mỗi thao tác.

## 3. Cấu trúc thư mục

```text
Bt08/
│
├── bai08.js
├── README.md
│
├── data/
│   └── ghichu_moi.txt
│
└── images/
    ├── terminal.png
    └── data.png
```

## 4. Chức năng của chương trình

### Bước 1: Khai báo module
Sử dụng `require('fs')` để gọi module xử lý tập tin và `require('path')` để tạo đường dẫn.

### Bước 2: Tạo thư mục data
Sử dụng `fs.existsSync()` để kiểm tra thư mục và `fs.mkdirSync()` để tạo thư mục nếu chưa tồn tại.

### Bước 3: Ghi nội dung vào file
Sử dụng `fs.writeFileSync()` để tạo file `ghichu.txt` và ghi 3 dòng nội dung.

### Bước 4: Đổi tên file
Sử dụng `fs.renameSync()` để đổi tên `ghichu.txt` thành `ghichu_moi.txt`.

### Bước 5: Đọc nội dung
Sử dụng `fs.readFileSync()` để đọc nội dung file mới và hiển thị lên Terminal.

### Bước 6: Tạo và xóa file tạm
- Sử dụng `fs.writeFileSync()` để tạo file `tam.txt`.
- Sử dụng `fs.unlinkSync()` để xóa file `tam.txt`.

## 5. Lệnh thực hiện

Mở Terminal tại thư mục Bt08 và chạy lệnh:

```bash
node bai08.js
```

## 6. Kết quả thực hiện

### Hình : Chạy chương trình trên Terminal

<img width="547" height="252" alt="image" src="https://github.com/user-attachments/assets/cd6dba1f-4e02-4bf7-ab92-43131d2dcce2" />




## 7. Kết quả đạt được

Sau khi chạy chương trình:
- Tạo thành công thư mục `data`.
- Ghi thành công 3 dòng nội dung vào file.
- Đổi tên thành công `ghichu_moi.txt`.
- Đọc và hiển thị được nội dung file.
- Tạo và xóa thành công file `tam.txt`.

**Kết luận:** Hoàn thành bài thực hành 08, hiểu và vận dụng được các thao tác xử lý tập tin cơ bản trong Node.js bằng module `fs`.
