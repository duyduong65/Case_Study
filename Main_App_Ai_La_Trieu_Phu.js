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
    "Đất nước nào là quê hương của ông già tuyết?",
    "Ở Chùa Bộc, ngoài thờ phật, nhân dân còn thờ vị tướng nào?",
    "Phim hoạt hình đầu tiên được công chiếu vào thời gian nào?",
    "Lớp trưởng lớp C0819H2 tên là gì?"
];
let arrAnswer = ["Gạo", "Đứng", "Thứ bảy", "Miệng", "Châu Á", "CaCO3", "Thái Nguyên", "Biển Chết", "Hội đồng nhân dân", "Lý Nhân Tông",
    "Điện Biên Phủ", "Phần Lan", "Quang Trung", "28-10-1892", "Lê Thanh Hải"];
let arrAnswer_A = ["Gạo", "Cháy", "Thứ ba", "Miệng", "Châu Á", "CaO", "Bắc Ninh", "Caribean", "Hội đồng nhân dân", "Hồ Quý Ly",
    "Đồi A1", "Phần Lan", "Lý Công Uẩn", "5-10-1992", "An Xuân Bách"];
let arrAnswer_B = ["Vàng", "Ngạt", "Thứ năm", "Tai", "Châu Âu", "CaOH2", "Thái Nguyên", "Đại Tây Dương", "Hội đồng quản trị xã",
    "Trần Nhân tông", "Vị Xuyên", "Australia", "Lê Lợi", "28-10-1892", "Lê Thanh Hải"];
let arrAnswer_C = ["Lúa", "Gãy", "Chủ nhật", "Đầu gối", "Châu Úc", "CaCO3", "Lào Cai", "Thái Bình Dương", "Hội đồng quản trị huyện",
    "Lý Thái tổ", "Điện Biên Phủ", "Hà Lan", "Nguyễn Huệ", "27-3-1981", "Tùng 10m question"];
let arrAnswer_D = ["Đất", "Đứng", "Thứ bảy", "Bàn chân", "Châu Mỹ", "C6H12O6", "Tuyên Quang", "Biển Chết", "Hội đồng quản trị tỉnh",
    "Lý Nhân Tông", "Cửa Khẩu Thanh Thủy", "Bỉ", "Quang Trung", "6-6-1983", "Lê Duy Dương"];

let count = 0;

function collectAnswer(value) {
    if (value === arrAnswer[count]) {
        if ((count + 1) === 5) {
            alert("Chúc mừng bạn đã đạt mốc 5 triệu");
            alert("Mời bạn đến với câu thứ 6");
        } else if ((count + 1) === 10) {
            alert("Chúc mừng bạn đạt mốc 50 triệu");
            alert("Mời bạn đến với câu thứ 11");
        } else if ((count + 1) === 15) {
            alert("Bạn là người thắng cuộc!")
        } else {
            alert("Mời bạn đến với câu thứ " + (count + 2));
        }
        count++;
        question.setQuestion(arrQuestion);
        answer_A.setAnswer(arrAnswer_A);
        answer_B.setAnswer(arrAnswer_B);
        answer_C.setAnswer(arrAnswer_C);
        answer_D.setAnswer(arrAnswer_D);
        display();
    } else {
        if ((count + 1) >= 0 && (count + 1) < 5) {
            alert("Rất tiếc bạn đã ra về với 200 nghìn");
        } else if ((count + 1) >= 5 && (count + 1) < 10) {
            alert("Rất tiếc bạn đã ra về với 5 triệu");
        } else if ((count + 1) >= 10 && (count + 1) < 15) {
            alert("Rất tiếc bạn đã ra về với 50 triệu");
        }
        count = 0;
        question.setQuestion(arrQuestion);
        answer_A.setAnswer(arrAnswer_A);
        answer_B.setAnswer(arrAnswer_B);
        answer_C.setAnswer(arrAnswer_C);
        answer_D.setAnswer(arrAnswer_D);
    }
}

let Answer = function (value) {
    this._value = value;

    this.getValue = function () {
        return this._value;
    };
    this.setAnswer = function (nameButton) {
        this._value = nameButton[count];
    }
};

let Question = function (value) {
    this._value = value;

    this.getValue = function () {
        return this._value;
    };
    this.setQuestion = function (namButton) {
        this._value = namButton[count];
    }
};

let value_question = arrQuestion[count];
let value_answer_A = arrAnswer_A[count];
let value_answer_B = arrAnswer_B[count];
let value_answer_C = arrAnswer_C[count];
let value_answer_D = arrAnswer_D[count];

let question = new Question(value_question);
let answer_A = new Answer(value_answer_A);
let answer_B = new Answer(value_answer_B);
let answer_C = new Answer(value_answer_C);
let answer_D = new Answer(value_answer_D);

function display() {
    document.getElementById("question").value = question._value;
    document.getElementById("answer_A").value = answer_A.getValue();
    document.getElementById("answer_B").value = answer_B.getValue();
    document.getElementById("answer_C").value = answer_C.getValue();
    document.getElementById("answer_D").value = answer_D.getValue();
}

function askAudience() {
    let randomA = Math.round(Math.random() * 100);
    let randomB = Math.round(Math.random() * (100 - randomA));
    let randomC = Math.round(Math.random() * ((100 - randomA) - randomB));
    let randomD = ((100 - randomA) - randomB) - randomC;

    alert(` Có ${randomC} % chọn A \n ${randomB} % Chọn B \n ${randomC} % Chọn C \n ${randomD} % Chọn D`)
}
