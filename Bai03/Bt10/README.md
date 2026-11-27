# BÀI THỰC HÀNH 10 – MONGODB LOOKUP

## 1. Giới thiệu
- **Tên bài:** Bt10
- **Ngôn ngữ:** JavaScript (Node.js)
- **Cơ sở dữ liệu:** MongoDB
- **Công cụ:** MongoDB Compass, Visual Studio Code, Terminal.

**Mục tiêu:** Tạo hai collection `departments` và `students_join`, sử dụng toán tử `$lookup` để kết nối dữ liệu sinh viên với khoa tương ứng.

## 2. Cấu trúc thư mục

```text
Bt10/
│
├── bai10.js
└── README.md
```

## 3. Chức năng chương trình

### File bai10.js

Chương trình thực hiện các chức năng:

- Kết nối đến MongoDB tại địa chỉ `mongodb://127.0.0.1:27017`.
- Tạo database và collection `departments`.
- Thêm ít nhất 2 khoa vào collection `departments`.
- Tạo collection `students_join`.
- Thêm ít nhất 4 sinh viên vào collection `students_join`.
- Sử dụng `aggregate()` kết hợp với `$lookup` để liên kết dữ liệu giữa hai collection.
- Hiển thị thông tin sinh viên cùng mã khoa và tên khoa tương ứng.

## 4. Các bước thực hiện

**Bước 1: Mở Terminal tại thư mục Bt10.**

**Bước 2: Cài đặt thư viện MongoDB**

```bash
npm install mongodb
```

**Bước 3: Khởi động MongoDB trên máy tính.**

**Bước 4: Chạy chương trình**

```bash
node bai10.js
```

**Bước 5: Kiểm tra kết quả**

Quan sát thông tin sinh viên và tên khoa được liên kết thông qua `$lookup` trên Terminal.

## 5. Hình ảnh kết quả



### Hình : Kết quả chạy chương trình bai10.js trên Terminal

<img width="404" height="775" alt="image" src="https://github.com/user-attachments/assets/2d42d4e6-9914-4a58-82dd-a426255290a2" />


### Hình : Dữ liệu collection departments và students_join trên MongoDB Compass

<img width="1050" height="539" alt="image" src="https://github.com/user-attachments/assets/4df3ab73-21df-4c31-87ae-c164ab135354" />


## 6. Kết quả đạt được

- Tạo thành công hai collection `departments` và `students_join`.
- Thêm dữ liệu khoa và sinh viên vào MongoDB.
- Thực hiện liên kết dữ liệu bằng toán tử `$lookup`.
- Hiển thị thông tin sinh viên kèm tên khoa tương ứng.
- Hiểu cách sử dụng `aggregate()` trong MongoDB.

## 7. Kết luận

Qua bài thực hành 10, em đã hiểu cách tạo collection, thêm dữ liệu và sử dụng toán tử `$lookup` để kết nối dữ liệu giữa hai collection trong MongoDB bằng Node.js.
