
const { MongoClient } = require('mongodb');

const ketNoiDB = new MongoClient('mongodb://127.0.0.1:27017');

async function quanLySinhVien() {
    try {
        console.log('===== CHUONG TRINH QUAN LY SINH VIEN =====');

      
        await ketNoiDB.connect();
        console.log('\n[1] Ket noi MongoDB thanh cong.');

        
        const duLieuHocTap = ketNoiDB.db('qlsinhvien');
        const bangSinhVien = duLieuHocTap.collection('students_test');

        console.log('[2] Dang lam viec voi collection students_test.');

      
        await bangSinhVien.deleteMany({});

       
        const lopHoc = [
            { masv: 'SV101', hoten: 'Lam Minh Khang', tuoi: 19, diem: 8.5 },
            { masv: 'SV102', hoten: 'Tran Quoc Huy', tuoi: 20, diem: 6.5 },
            { masv: 'SV103', hoten: 'Nguyen Anh Quan', tuoi: 19, diem: 7.5 },
            { masv: 'SV104', hoten: 'Vo Thanh Phuc', tuoi: 21, diem: 4.0 },
            { masv: 'SV105', hoten: 'Pham Hoang Hai', tuoi: 20, diem: 3.5 }
        ];

        const themDuLieu = await bangSinhVien.insertMany(lopHoc);
        console.log(`[3] Da them ${themDuLieu.insertedCount} sinh vien vao database.`);

  
        const xoaTheoMa = await bangSinhVien.deleteOne({
            masv: 'SV103'
        });

        console.log(`[4] So sinh vien xoa theo ma SV103: ${xoaTheoMa.deletedCount}`);

        
        const xoaTheoDiem = await bangSinhVien.deleteMany({
            diem: { $lt: 5 }
        });

        console.log(`[5] So sinh vien co diem duoi 5 da xoa: ${xoaTheoDiem.deletedCount}`);

       
        const ketQuaCuoi = await bangSinhVien.find({}).toArray();

        console.log('\n===== DANH SACH SINH VIEN SAU KHI XOA =====');

        if (ketQuaCuoi.length === 0) {
            console.log('Khong con sinh vien nao trong danh sach.');
        } else {
            ketQuaCuoi.forEach((sv, index) => {
                console.log(`\n--- Sinh vien thu ${index + 1} ---`);
                console.log(`Ma sinh vien : ${sv.masv}`);
                console.log(`Ho va ten    : ${sv.hoten}`);
                console.log(`Tuoi         : ${sv.tuoi}`);
                console.log(`Diem         : ${sv.diem}`);
            });
        }

        console.log('\nTong so sinh vien con lai:', ketQuaCuoi.length);
        console.log('===== KET THUC CHUONG TRINH =====');

    } catch (error) {
        console.log('Loi khi thuc hien:', error.message);
    } finally {
        await ketNoiDB.close();
        console.log('Da dong ket noi MongoDB.');
    }
}

quanLySinhVien();
