
// Gọi các hàm từ file xulyDiem.js
const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

// Danh sách 3 sinh viên
const sinhVien = [
    {
        hoTen: "Hà Văn Sâm",
        toan: 9,
        van: 8,
        anh: 9
    },
    {
        hoTen: "Võ thành Phúc",
        toan: 7,
        van: 6,
        anh: 7
    },
    {
        hoTen: "Nguyễn Quốc Huy",
        toan: 4,
        van: 5,
        anh: 4
    }
];

// Hiển thị thông tin sinh viên
console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv, index) => {
    const dtb = tinhDiemTrungBinh(sv.toan, sv.van, sv.anh);
    const loai = xepLoai(dtb);

    console.log("--------------------------");
    console.log("Sinh vien:", index + 1);
    console.log("Ho ten:", sv.hoTen);
    console.log("Diem trung binh:", dtb.toFixed(2));
    console.log("Xep loai:", loai);
});
