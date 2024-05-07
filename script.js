const question = [
    {
        question: "The Mission of the Software & Information Industry Association and the bussiness Software Alliance is to?",
        answer: [
            { Text: "Protect the trade secrets of world’s largest software and hardware manufacturers.", correct: false},
            { Text: "Encourage disgruntled employees to report misdeeds by their employers.", correct: false},
            { Text: "Stop the unauthorized copying of software produced by its members.", correct: true},
            { Text: "Provide recommendations on how to develop software code that is unhackable.", correct: false},
        ]
    },
    {
        question: "This occurs when a party fails to perform certain express or implied obligations, which impairs or destroys the very essence of a contract.",
        answer: [
            { Text: "Fraud", correct: false},
            { Text: "Material breach of contract", correct: true},
            { Text: "Breach of contract", correct: false},
            { Text: "Misrepresentation", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: true},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();