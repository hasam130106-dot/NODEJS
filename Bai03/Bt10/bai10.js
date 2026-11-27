
const { MongoClient } = require('mongodb');

const ketNoiCSDL = new MongoClient('mongodb://127.0.0.1:27017');

async function traCuuKhoaSinhVien() {
    try {
        console.log('===== BAI THUC HANH 10 =====');

       
        await ketNoiCSDL.connect();
        console.log('\n[1] Da ket noi MongoDB.');

        
        const duLieuTruong = ketNoiCSDL.db('qlsinhvien');
        const danhMucKhoa = duLieuTruong.collection('departments');
        const hoSoSinhVien = duLieuTruong.collection('students_join');

        console.log('[2] Da truy cap database qlsinhvien.');

        
        await danhMucKhoa.deleteMany({});
        await hoSoSinhVien.deleteMany({});

        const cacKhoa = [
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'CNOT', tenkhoa: 'Cong nghe o to' },
            
        ];

        const themKhoa = await danhMucKhoa.insertMany(cacKhoa);
        console.log(`[3] Da tao ${themKhoa.insertedCount} khoa.`);

       
        const cacSinhVien = [
            { masv: 'SV210', hoten: 'Ha Van Sam', makhoa: 'CNTT' },
            { masv: 'SV211', hoten: 'Tran Quoc Huy', makhoa: 'CNTT' },
            { masv: 'SV212', hoten: 'Lam Minh Khang', makhoa: 'CNOT' },
            { masv: 'SV213', hoten: 'Nguyen Quoc Huy', makhoa: 'CNOT' },
            { masv: 'SV214', hoten: 'Vo Thanh Phuc', makhoa: 'CNTT' }
        ];

        const themSinhVien = await hoSoSinhVien.insertMany(cacSinhVien);
        console.log(`[4] Da them ${themSinhVien.insertedCount} sinh vien.`);

     
        const bangKetQua = await hoSoSinhVien.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'khoaCuaSinhVien'
                }
            },
            {
                $unwind: '$khoaCuaSinhVien'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$khoaCuaSinhVien.tenkhoa'
                }
            }
        ]).toArray();

      
        console.log('\n===== THONG TIN SINH VIEN THEO KHOA =====');

        bangKetQua.forEach((hoSo, stt) => {
            console.log(`\nThong tin thu ${stt + 1}`);
            console.log('Ma sinh vien :', hoSo.masv);
            console.log('Ho ten       :', hoSo.hoten);
            console.log('Ma khoa      :', hoSo.makhoa);
            console.log('Ten khoa     :', hoSo.tenkhoa);
        });

        console.log('\nTong so sinh vien da lien ket:', bangKetQua.length);
        console.log('\n===== HOAN THANH BAI 10 =====');

    } catch (loiKetNoi) {
        console.log('Khong the thuc hien chuong trinh:', loiKetNoi.message);
    } finally {
        await ketNoiCSDL.close();
        console.log('Da dong ket noi MongoDB.');
    }
}

traCuuKhoaSinhVien();
