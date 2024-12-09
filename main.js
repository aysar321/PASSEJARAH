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
    },{
        question: "Jelaskan alasan terjadinya Agresi Militer Belanda I dan II!",
        answer: 
        [
            {
                text: "Belanda menyerang Indonesia karena masalah perbatasan wilayah dengan Malaysia.",
                correct: false
            },{
                text: "Belanda melakukan agresi untuk membantu rakyat Indonesia melawan Jepang.",
                correct: false
            },{
                text: "Belanda ingin menguasai kembali wilayah Indonesia setelah proklamasi kemerdekaan.",
                correct: true
            },
        ]
    },{
        question: "Sebutkan tiga tokoh nasional yang terlibat dalam perundingan Konferensi Meja Bundar (KMB)!",
        answer: 
        [
            {
                text: "Mohammad Hatta, Mohammad Roem, dan Ali Sastroamidjojo.",
                correct: true
            },{
                text: "Soekarno, Sutan Sjahrir, dan Sudirman.",
                correct: false
            },{
                text: "Cut Nyak Dien, Pangeran Diponegoro, dan Sultan Agung.",
                correct: false
            },
        ]

    },{
        question: "Apa yang melatarbelakangi terbentuknya gerakan G30S/PKI pada tahun 1965?",
        answer: 
        [
            {
                text: "Konflik ideologi antara kelompok komunis dan non-komunis dalam pemerintahan Indonesia.",
                correct: true
            },{
                text: "Penyerangan Belanda ke wilayah Indonesia pasca kemerdekaan.",
                correct: false
            },{
                text: "Perebutan wilayah antara Indonesia dan Malaysia.",
                correct: false
            },
        ]
    },{
        question: "Kapan dan bagaimana Presiden Soeharto mulai menjabat sebagai Presiden Indonesia?",
        answer: 
        [
            {
                text: "Pada tahun 1950 setelah pembentukan RIS.",
                correct: false
            },{
                text: "Pada tahun 1945 setelah proklamasi kemerdekaan.",
                correct: false
            },{
                text: "Pada tahun 1967 setelah Soekarno menyerahkan kekuasaan melalui Sidang Istimewa MPRS.",
                correct: true
            },
        ]
    },{
        question: "Jelaskan peran Indonesia dalam Gerakan Non-Blok (GNB) selama masa Orde Baru!",
        answer: 
        [
            {
                text: "Indonesia menjadi salah satu pendiri dan aktif mendorong kerja sama negara-negara berkembang untuk menjaga kemandirian dari blok Barat maupun Timur.",
                correct: true
            },{
                text: "Indonesia bergabung sebagai anggota NATO untuk melawan Blok Timur.",
                correct: false
            },{
                text: "Indonesia menjadi sekutu Amerika Serikat untuk melawan komunisme.",
                correct: false
            },
        ]
    },{
        question: " Apa tujuan utama didirikannya VOC (Vereenigde Oostindische Compagnie) di Indonesia?",
        answer: 
        [
            {
                text: "Menyebarkan agama Kristen di seluruh Nusantara.",
                correct: false
            },{
                text: "Menguasai perdagangan rempah-rempah di Nusantara.",
                correct: true
            },{
                text: "Membentuk koloni pertanian di wilayah Indonesia.",
                correct: false
            },
        ]
    },{
        question: "Siapa tokoh yang dikenal sebagai ‘Bapak Pendidikan Indonesia’?",
        answer: 
        [
            {
                text: "R.A. Kartini.",
                correct: false
            },{
                text: "Mohammad Hatta.",
                correct: false
            },{
                text: "Ki Hajar Dewantara.",
                correct: true
            },
        ]
    },{
        question: "Apa nama perlawanan yang dipimpin oleh Pangeran Diponegoro pada tahun 1825-1830?",
        answer: 
        [
            {
                text: "Perang Jawa.",
                correct: true
            },{
                text: "Perang Aceh.",
                correct: false
            },{
                text: "Perang Padri",
                correct: false
            },
        ]
    },{
        question: "Kapan Indonesia resmi menjadi anggota Perserikatan Bangsa-Bangsa (PBB)?",
        answer: 
        [
            {
                text: "Pada 28 September 1950.",
                correct: true
            },{
                text: "Pada 17 Agustus 1945.",
                correct: false
            },{
                text: "Pada 1 Juni 1945.",
                correct: false
            },
        ]
    },{
        question: "Apa alasan utama jatuhnya Kerajaan Majapahit pada akhir abad ke-15?",
        answer: 
        [
            {
                text: " Serangan Mongol dari Asia Tengah.",
                correct: false
            },{
                text: "Invasi besar-besaran dari bangsa Eropa.",
                correct: false
            },{
                text: "Konflik internal dan serangan dari kerajaan-kerajaan Islam di pesisir utara Jawa.",
                correct: true
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
