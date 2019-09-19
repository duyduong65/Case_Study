document.getElementById('requestAnswer').innerHTML = "Mạnh vì..., bạo vì tiền?";
document.getElementById('answer_1').value = "A: Gạo";
document.getElementById('answer_2').innerHTML = "B: Vàng";
document.getElementById('answer_3').innerHTML = "C: Lúa";
document.getElementById('answer_4').innerHTML = "D: Đất";

function abc() {
    alert("kjskdjfhkasd");
}

let arrQuestion = [
    "Mạnh vì..., bạo vì tiền",
    "Cây ngay không sợ chết... ",
    "Sat trong tiếng Anh là thứ mấy trong tuần",
    "'Bên trên là ngói, bên dưới là hang là' là cái gì?",
    "Liên đoàn bóng đá Úc thuộc liên đoàn bóng đá nào?",
    "Công thức hóa học của đá vôi?",
    "Huyện Võ Nhai thuộc tỉnh nào nước ta?",
    "Biển có nồng độ muối lớn nhất thế giới?",
    "Ủy ban nhân dân do ai bầu ra?",
    "Vua nào đặt nhiều niên hiệu nhất lịch sử nước ta?",
    "Lần đầu tiên nước ta dùng bộc phá 1000 kg thuốc nổ đánh giặc là ở đâu?",
    "Đất nước nào là quê hương của ông già tuyết? ",
    "Ở Chùa Bộc, ngoài thờ phật, nhân dân còn thờ vị tướng nào?",
    "Phim hoạt hình đầu tiên được công chiếu vào thời gian nào?",
    "Lớp trưởng lớp C0819H2 tên là gì?"
];
let arrAnswer = ["Gạo", "Đứng", "Thứ bảy", "Miệng", "Châu Á", "CaCO3", "Thái Nguyên", "Biển Chết", "Hội đồng nhân dân", "Lý Nhân Tông",
    "Điện Biên Phủ", "Phần Lan", "Quang Trung", "28-10-1892", "Lê Thanh Hải"
];
let arrAnswer_A = ["Gạo", "Cháy", "Thứ ba", "Miệng", "Châu Á", "CaO", "Bắc Ninh", "Caribean", "Hội đồng nhân dân", "Hồ Quý Ly",
    "Đồi A1", "Phần Lan", "Lý Công Uẩn", "5-10-1992", "An Xuân Bách"];
let arrAnswer_B = ["Vàng", "Ngạt", "Thứ năm", "Tai", "Châu Âu", "CaOH2", "Thái Nguyên", "Đại Tây Dương", "Hội đồng quản trị xã",
    "Trần Nhân tông", "Vị Xuyên", "Australia", "Lê Lợi", "28-10-1892", "Lê Thanh Hải"];
let arrAnswer_C = ["Lúa", "Gãy", "Chủ nhật", "Đầu gối", "Châu Úc", "CaCO3", "Lào Cai", "Thái Bình Dương", "Hội đồng quản trị huyện",
    "Lý Thái tổ", "Điện Biên Phủ", "Hà Lan", "Nguyễn Huệ", "27-3-1981", "Tùng 10m question"];
let arrAnswer_D = ["Đất", "Đứng", "Thứ bảy", "Bàn chân", "Châu Mỹ", "C6H12O6", "Tuyên Quang", "Biển Chết", "Hội đồng quản trị tỉnh",
    "Lý Nhân Tông", "Cửa Khẩu Thanh Thủy", "Bỉ", "Quang Trung", "6-6-1983", "Lê Duy Dương",];