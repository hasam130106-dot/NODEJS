
function tinhDiemTrungBinh(toan, van, anh) {
    return (toan + van + anh) / 3;
}

function xepLoai(dtb) {
    if (dtb >= 8) {
        return "Giỏi";
    } else if (dtb >= 6.5) {
        return "Khá";
    } else if (dtb >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
