
const http = require('http');
const { URL } = require('url');

const cong = 3001;

const ungDung = http.createServer((yeuCau, phanHoi) => {
    const diaChi = new URL(yeuCau.url, 'http://localhost');
    const chucNang = diaChi.pathname;

    phanHoi.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (chucNang) {
        case '/hello': {
            let ten = diaChi.searchParams.get('name');

            if (ten === null || ten.trim() === '') {
                phanHoi.statusCode = 400;
                phanHoi.end('Loi: Vui long nhap ten!');
            } else {
                phanHoi.statusCode = 200;
                phanHoi.end('Xin chào ' + ten);
            }
            break;
        }

        case '/sum': {
            let soThuNhat = diaChi.searchParams.get('a');
            let soThuHai = diaChi.searchParams.get('b');

            if (soThuNhat === null || soThuHai === null ||
                soThuNhat.trim() === '' || soThuHai.trim() === '') {
                phanHoi.statusCode = 400;
                phanHoi.end('Loi: Vui long nhap day du a va b!');
            } else {
                let x = Number(soThuNhat);
                let y = Number(soThuHai);

                if (!Number.isFinite(x) || !Number.isFinite(y)) {
                    phanHoi.statusCode = 400;
                    phanHoi.end('Loi: Gia tri nhap vao khong hop le!');
                } else {
                    phanHoi.statusCode = 200;
                    phanHoi.end('Tổng = ' + (x + y));
                }
            }
            break;
        }

        default: {
            phanHoi.statusCode = 404;
            phanHoi.end('ERROR 404 - KHONG TIM THAY TRANG!');
            break;
        }
    }
});

ungDung.listen(cong, () => {
    console.log('Server dang chay tai cong ' + cong);
});
