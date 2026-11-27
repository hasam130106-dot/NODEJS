
const { MongoClient } = require('mongodb');

const mayChu = new MongoClient('mongodb://127.0.0.1:27017');

async function chayBai05() {
    try {
        await mayChu.connect();

       const noiLuu = mayChu.db('qlsinhvien');
        const bangSV = noiLuu.collection('students');

        console.log('\n KẾT QUẢ TÌM KIẾM =\n');

        // Lấy sinh viên có điểm từ 7 trở lên
        const ketQua = await bangSV.find({
            diem: { $gte: 7 }
        }).sort({
            diem: -1
        }).toArray();

        console.log('STT | MÃ SV | HỌ TÊN | ĐIỂM');
        console.log('--------------------------------');

        let stt = 1;

        for (const nguoi of ketQua) {
            console.log(
                `${stt++} | ${nguoi.masv} | ${nguoi.hoten} | ${nguoi.diem}`
            );
        }

        // Chọn sinh viên cần thay đổi điểm
        const maCanSua = 'SV001';
        const diemThayDoi = 8.5;

        console.log('\n THAY ĐỔI ĐIỂM ');

        const sua = await bangSV.updateOne(
            { masv: maCanSua },
            {
                $set: {
                    diem: diemThayDoi
                }
            }
        );

        if (sua.matchedCount !== 0) {
            console.log('Đã tìm thấy sinh viên:', maCanSua);
            console.log('Điểm sau cập nhật:', diemThayDoi);
        } else {
            console.log('Mã sinh viên không tồn tại!');
        }

        // Đọc lại dữ liệu trong MongoDB
        console.log('\nDỮ LIỆU MỚI ');

        const duLieuMoi = await bangSV.findOne({
            masv: maCanSua
        });

        if (duLieuMoi !== null) {
            for (const [thuocTinh, giaTri] of Object.entries(duLieuMoi)) {
                console.log(`${thuocTinh}: ${giaTri}`);
            }
        }

        console.log('\n HOÀN THÀNH ');

    } catch (err) {
        console.log('Lỗi chương trình:', err.message);
    } finally {
        await mayChu.close();
    }
}

chayBai05();
