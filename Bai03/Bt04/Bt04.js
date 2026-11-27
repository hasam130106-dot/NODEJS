
const { MongoClient } = require('mongodb');

// Địa chỉ kết nối MongoDB
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // 1. Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // 2. Chọn database và collection
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // 3. Danh sách sinh viên
        const danhSach = [
            {
                masv: 'SV001',
                hoten: 'Lâm Minh Khang',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Hà Văn Sâm',
                tuoi: 21,
                diem: 9
            },
            {
                masv: 'SV003',
                hoten: 'Trần Quốc Huy',
                tuoi: 19,
                diem: 7.5
            }
        ];

        // 4. Xóa dữ liệu cũ trong collection
        const xoa = await students.deleteMany({});
        console.log('Đã xóa dữ liệu cũ:', xoa.deletedCount);

        // 5. Thêm 3 sinh viên mới bằng insertMany()
        const ketQua = await students.insertMany(danhSach);
        console.log('Đã thêm:', ketQua.insertedCount, 'sinh viên');

        // 6. Hiển thị danh sách sinh viên bằng find()
        const ds = await students.find().toArray();

        console.log('\n===== DANH SÁCH SINH VIÊN =====');

        ds.forEach((sv, index) => {
            console.log(`\nSinh viên ${index + 1}:`);
            console.log('Mã SV:', sv.masv);
            console.log('Họ tên:', sv.hoten);
            console.log('Tuổi:', sv.tuoi);
            console.log('Điểm:', sv.diem);
        });

    } catch (error) {
        console.log('Lỗi:', error);
    } finally {
        // 7. Đóng kết nối MongoDB
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

// Chạy chương trình
main();

