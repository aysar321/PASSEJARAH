const questions = [
    {
        question: "Apa nama kerajaan Hindu-Buddha pertama yang berdiri di Indonesia?",
        answer: 
        [
            {
                text: "Kerajaan Sriwijaya, berdiri pada abad ke-7 di Sumatra.",
                correct: false
            },{
                text: "Kerajaan Kutai, berdiri sekitar abad ke-4 di Kalimantan Timur.",
                correct: true
            },{
                text: "Kerajaan Majapahit, berdiri pada abad ke-13 di Jawa Timur.",
                correct: false
            },
        ]
    },{
        question: "Siapa raja terkenal dari Kerajaan Sriwijaya, dan apa kontribusinya dalam penyebaran agama Buddha?",
        answer: 
        [
            {
                text: "Raja Balaputradewa; ia memperluas pengaruh Sriwijaya sebagai pusat pembelajaran agama Buddha di Asia Tenggara.",
                correct: true
            },{
                text: "Raja Jayabaya; terkenal sebagai raja dari Kerajaan Kediri.",
                correct: false
            },{
                text: "Raja Hayam Wuruk; pemimpin besar dari Kerajaan Majapahit.",
                correct: false
            },
        ]
    },{
        question: "Sebutkan tiga kerajaan Islam besar di Indonesia beserta lokasi pusat pemerintahannya!",
        answer: 
        [
            {
                text: "Kerajaan Tarumanegara (Jawa Barat), Majapahit (Jawa Timur), dan Sriwijaya (Sumatra).",
                correct: false
            },{
                text: "Kerajaan Kutai (Kalimantan Timur), Kediri (Jawa Timur), dan Mataram Kuno (Jawa Tengah).",
                correct: false
            },{
                text: "Kerajaan Samudera Pasai (Aceh), Kesultanan Demak (Jawa Tengah), dan Kesultanan Gowa-Tallo (Sulawesi Selatan).",
                correct: true
            },
        ]
    },{
        question: "Apa peristiwa yang menjadi awal penjajahan Belanda di Indonesia?",
        answer: 
        [
            {
                text: "Kedatangan VOC (Vereenigde Oostindische Compagnie) yang didirikan pada tahun 1602.",
                correct: true
            },{
                text: "Perang Diponegoro yang terjadi pada tahun 1825-1830.",
                correct: false
            },{
                text: "Perjanjian Linggarjati yang terjadi pada tahun 1946.",
                correct: false
            },
        ]
    },
    {
        question: "Kapan dan di mana peristiwa Sumpah Pemuda terjadi, serta apa isi utamanya?",
        answer: 
        [
            {
                text: "17 Agustus 1945 di Jakarta; isinya proklamasi kemerdekaan Indonesia.",
                correct: false
            },{
                text: "28 Oktober 1928 di Jakarta; isinya adalah pengakuan satu bangsa, satu tanah air, dan satu bahasa: Indonesia.",
                correct: true
            },{
                text: "20 Mei 1908 di Jakarta; isinya adalah pembentukan Budi Utomo.",
                correct: false
            },
        ]
    },{
        question: "Siapa tokoh yang memimpin perlawanan rakyat Aceh terhadap penjajahan Belanda?",
        answer: 
        [
            {
                text: "Cut Nyak Dien.",
                correct: true
            },{
                text: "Pangeran Diponegoro (memimpin perlawanan di Jawa).",
                correct: false
            },{
                text: "Sultan Hasanuddin (memimpin perlawanan di Sulawesi)",
                correct: false
            },
        ]
    },{
        question: "Jelaskan peristiwa Rengasdengklok dan apa pengaruhnya terhadap Proklamasi Kemerdekaan Indonesia!",
        answer: 
        [
            {
                text: "Pertemuan antara Soekarno dan Jenderal Sudirman untuk membahas strategi perang gerilya.",
                correct: false
            },{
                text: "Penandatanganan perjanjian antara Indonesia dan Jepang terkait kemerdekaan.",
                correct: false
            },{
                text: "Peristiwa ini adalah penculikan Soekarno dan Hatta oleh pemuda untuk mendesak segera memproklamasikan kemerdekaan pada 16 Agustus 1945.",
                correct: true
            },
        ]
    },{
        question: "Apa tujuan dibentuknya organisasi Budi Utomo pada tahun 1908?",
        answer: 
        [
            {
                text: "Meningkatkan pendidikan dan kesadaran nasional di kalangan rakyat Indonesia.",
                correct: true
            },{
                text: "Menuntut kemerdekaan penuh dari penjajah Belanda.",
                correct: false
            },{
                text: "Membentuk pasukan militer untuk melawan penjajah.",
                correct: false
            },
        ]
    },
    {
        question: "Sebutkan isi pokok Perjanjian Linggarjati antara Indonesia dan Belanda!",
        answer: 
        [
            {
                text: "Belanda menyerahkan seluruh wilayah Hindia Belanda kepada Indonesia.",
                correct: false
            },{
                text: "Belanda mengakui kekuasaan de facto Indonesia atas Jawa, Madura, dan Sumatra.",
                correct: true
            },{
                text: "Belanda mengakui Indonesia sebagai negara merdeka sepenuhnya.",
                correct: false
            },
        ]
    },{
        question: "Apa nama kabinet pertama Indonesia setelah kemerdekaan, dan siapa yang menjadi Perdana Menterinya?",
        answer: 
        [
            {
                text: "Kabinet Presidensial, dengan Soekarno sebagai Presiden.",
                correct: true
            },{
                text: "Kabinet Amir Sjarifuddin, dipimpin oleh Amir Sjarifuddin.",
                correct: false
            },{
                text: "Kabinet Djuanda, dipimpin oleh Ir. Djuanda Kartawidjaja.",
                correct: false
            },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =  answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `Kamu Benar ${score} Dari ${questions.length}!`;
    nextButton.innerHTML = "Main Lagi";
    nextButton.style.display = "block";
};


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
};



nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
});


startQuiz();
