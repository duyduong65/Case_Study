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

let Ques = function (question, collectAnswer, answer_A, answer_B, answer_C, answer_D) {
    this.question = question;
    this.answer_A = answer_A;
    this.answer_B = answer_B;
    this.answer_C = answer_C;
    this.answer_D = answer_D;
    this.collectAnswer = collectAnswer;

    this.getQuestion = () => {
        return this.question;
    };
    this.setQuestion = value => {
        this.question = value;
    };
    this.getAnswer_A = () => {
        return this.answer_A;
    };
    this.setAnswer_A = value => {
        this.answe_A = value;
    };
    this.getAnswer_B = () => {
        return this.answer_B;
    };
    this.setAnswer_B = value => {
        this.answe_B = value;
    };
    this.getAnswer_C = () => {
        return this.answer_C;
    };
    this.setAnswer_C = value => {
        this.answe_C = value;
    };
    this.getAnswer_D = () => {
        return this.answer_D;
    };
    this.setAnswer_D = value => {
        this.answer_D = value;
    };
    this.getCollectAnswer = () => {
        return this.collectAnswer;
    };
    this.setCollectAnswer = value => {
        this.collectAnswer = value;
    };
};

let question_1 = new Ques(arrQuestion[0], arrAnswer[0], arrAnswer_A[0], arrAnswer_B[0], arrAnswer_C[0], arrAnswer_D[0]);
let question_2 = new Ques(arrQuestion[1], arrAnswer[1], arrAnswer_A[1], arrAnswer_B[1], arrAnswer_C[1], arrAnswer_D[1]);
let question_3 = new Ques(arrQuestion[2], arrAnswer[2], arrAnswer_A[2], arrAnswer_B[2], arrAnswer_C[2], arrAnswer_D[2]);
let question_4 = new Ques(arrQuestion[3], arrAnswer[3], arrAnswer_A[3], arrAnswer_B[3], arrAnswer_C[3], arrAnswer_D[3]);
let question_5 = new Ques(arrQuestion[4], arrAnswer[4], arrAnswer_A[4], arrAnswer_B[4], arrAnswer_C[4], arrAnswer_D[4]);
let question_6 = new Ques(arrQuestion[5], arrAnswer[5], arrAnswer_A[5], arrAnswer_B[5], arrAnswer_C[5], arrAnswer_D[5]);
let question_7 = new Ques(arrQuestion[6], arrAnswer[6], arrAnswer_A[6], arrAnswer_B[6], arrAnswer_C[6], arrAnswer_D[6]);
let question_8 = new Ques(arrQuestion[7], arrAnswer[7], arrAnswer_A[7], arrAnswer_B[7], arrAnswer_C[7], arrAnswer_D[7]);
let question_9 = new Ques(arrQuestion[8], arrAnswer[8], arrAnswer_A[8], arrAnswer_B[8], arrAnswer_C[8], arrAnswer_D[8]);
let question_10 = new Ques(arrQuestion[9], arrAnswer[9], arrAnswer_A[9], arrAnswer_B[9], arrAnswer_C[9], arrAnswer_D[9]);
let question_11 = new Ques(arrQuestion[10], arrAnswer[10], arrAnswer_A[10], arrAnswer_B[10], arrAnswer_C[10], arrAnswer_D[10]);
let question_12 = new Ques(arrQuestion[11], arrAnswer[11], arrAnswer_A[11], arrAnswer_B[11], arrAnswer_C[11], arrAnswer_D[11]);
let question_13 = new Ques(arrQuestion[12], arrAnswer[12], arrAnswer_A[12], arrAnswer_B[12], arrAnswer_C[12], arrAnswer_D[12]);
let question_14 = new Ques(arrQuestion[13], arrAnswer[13], arrAnswer_A[13], arrAnswer_B[13], arrAnswer_C[13], arrAnswer_D[13]);
let question_15 = new Ques(arrQuestion[14], arrAnswer[14], arrAnswer_A[14], arrAnswer_B[14], arrAnswer_C[14], arrAnswer_D[14]);

let arrQuestionObj = [];
arrQuestionObj.push(question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10, question_11, question_12, question_13, question_14, question_15);
let count = 0;
let countHelp5050 = 1;
let counHeplAudience = 1;

function reset() {
    return count = 0, countHelp5050 = 1, counHeplAudience = 1, display();
}

function display() {
    document.getElementById('question').value = arrQuestionObj[count].getQuestion();
    document.getElementById('answer_A').value = arrQuestionObj[count].getAnswer_A();
    document.getElementById('answer_B').value = arrQuestionObj[count].getAnswer_B();
    document.getElementById('answer_C').value = arrQuestionObj[count].getAnswer_C();
    document.getElementById('answer_D').value = arrQuestionObj[count].getAnswer_D();
}

function isUser5050() {
    if (countHelp5050 === 1) {
        switch (arrQuestionObj[count].getCollectAnswer()) {
            case arrQuestionObj[count].getAnswer_A() :
                document.getElementById('answer_B').value = " ";
                document.getElementById('answer_D').value = " ";
                break;
            case arrQuestionObj[count].getAnswer_B():
                document.getElementById('answer_A').value = " ";
                document.getElementById('answer_C').value = " ";
                break;
            case arrQuestionObj[count].getAnswer_C():
                document.getElementById('answer_A').value = " ";
                document.getElementById('answer_B').value = " ";
                break;
            case arrQuestionObj[count].getAnswer_D():
                document.getElementById('answer_B').value = " ";
                document.getElementById('answer_C').value = " ";
                break;
        }
        --countHelp5050;
    }
}

function askAudience() {
    if (counHeplAudience === 1) {
        if (countHelp5050 === 1) {
            let randomA = Math.ceil(Math.random() * 70);
            let randomB = Math.ceil(Math.random() * (70 - randomA));
            let randomC = Math.ceil(Math.random() * ((100 - randomA) - randomB));
            let randomD = ((100 - randomA) - randomB) - randomC;
            alert(` Có ${randomA} % chọn A \n ${randomB} % Chọn B \n ${randomC} % Chọn C \n ${randomD} % Chọn D`)
        } else {
            let randomValue = Math.round(Math.random() * 50 + 40);
            switch (arrQuestionObj[count].getCollectAnswer()) {
                case arrQuestionObj[count].getAnswer_A() :
                    alert(randomValue + " % khán giả chọn A, " + (100 - randomValue) + " % khán chọn phương án còn lại");
                    break;
                case arrQuestionObj[count].getAnswer_B() :
                    alert(randomValue + " % khán giả chọn B, " + (100 - randomValue) + " % khán chọn phương án còn lại");
                    break;
                case arrQuestionObj[count].getAnswer_C() :
                    alert(randomValue + " % khán giả chọn C, " + (100 - randomValue) + " % khán chọn phương án còn lại");
                    break;
                case arrQuestionObj[count].getAnswer_D() :
                    alert(randomValue + " % khán giả chọn D, " + (100 - randomValue) + " % khán chọn phương án còn lại");
                    break;
            }
        }
    }
    --counHeplAudience;
}

function collectAnswer(value) {
    if (value === arrQuestionObj[count].getCollectAnswer()) {
        if (count + 1 === 5) {
            alert("Chúc mừng bạn đạt mốc 5 triệu!");
            alert("Mời bạn đến với câu 6!")
        } else if (count + 1 === 10) {
            alert("Chúc mừng bạn đạt mốc 50 triệu!");
            alert("Mời bạn đến với câu 11!");
        } else if (count + 1 === 15) {
            alert("Bạn là người chiến thắng!");
            alert("Bạn nhận được 100 triệu!")
        } else {
            alert("Mời bạn đến với câu số " + (count + 2));
        }
        ++count;
    } else {
        if ((count + 1) < 5) {
            alert("Sai rồi! Bạn phải ra về với 500 nghìn!");
        } else if ((count + 1) >= 5 && (count + 1) < 10) {
            alert("Sai rồi, Bạn phải ra về với 5 triệu!");
        } else if ((count + 1) >= 10 && (count + 1) < 15) {
            alert("Sai rồi! Bạn phải ra về với 50 triệu!")
        }
        return count = 0;
    }
    display();
}


