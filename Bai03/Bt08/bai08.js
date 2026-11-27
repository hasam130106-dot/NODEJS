
const fs = require('fs');
const path = require('path');

const thuMucDuLieu = path.join(__dirname, 'data');
const tepGhiChu = path.join(thuMucDuLieu, 'ghichu.txt');
const tepMoi = path.join(thuMucDuLieu, 'ghichu_moi.txt');
const tepTam = path.join(thuMucDuLieu, 'tam.txt');

console.log('===== BAI THUC HANH 08 =====');

// 1. Tao thu muc data
if (!fs.existsSync(thuMucDuLieu)) {
    fs.mkdirSync(thuMucDuLieu);
    console.log('Da tao thu muc data.');
} else {
    console.log('Thu muc data da co san.');
}

// 2. Ghi noi dung vao file ghichu.txt
const noiDungGhiChu = [
    'Ho va ten: Sinh vien thuc hanh Node.js',
    'Noi dung: Tim hieu cach xu ly tap tin voi module fs.',
    'Ket qua: Da hoan thanh cac thao tac tao, ghi, doi ten va xoa file.'
].join('\n');

fs.writeFileSync(tepGhiChu, noiDungGhiChu, 'utf8');
console.log('Da ghi 3 dong noi dung vao ghichu.txt.');

// 3. Doi ten file
fs.renameSync(tepGhiChu, tepMoi);
console.log('Da doi ten thanh ghichu_moi.txt.');

// 4. Doc noi dung file moi
const noiDungDoc = fs.readFileSync(tepMoi, 'utf8');

console.log('\n--- NOI DUNG SAU KHI DOI TEN ---');
console.log(noiDungDoc);

// 5. Tao file tam.txt
fs.writeFileSync(tepTam, 'Tap tin nay duoc tao ra de thu nghiem lenh xoa.');
console.log('\nDa tao tap tin tam.txt.');

// 6. Xoa file tam.txt
fs.unlinkSync(tepTam);
console.log('Da xoa tap tin tam.txt bang fs.unlink().');

console.log('\n===== KET THUC BAI THUC HANH 08 =====');
