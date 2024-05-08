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
        question: "A statement that highlights an organization’s key ethical issues and identifies the overarching values and principles that are important to the organization and its decision making. ",
        answer: [
            { Text: "Morals", correct: false},
            { Text: "Code of ethics", correct: true},
            { Text: "Virtuous", correct: false},
            { Text: "Law", correct: false},
        ]
    },
    {
        question: "The moral corruption of people in power, which is often facilitated by a tendency for people to look the other way when their leaders act inappropriately.",
        answer: [
            { Text: "Morals", correct: false},
            { Text: "Ethics", correct: false},
            { Text: "Bribery", correct: false},
            { Text: "Bathsheba syndrome", correct: true},
        ]
    },
    {
        question: "A senior-level manager who provides an organization with vision and leadership in the area of business conduct.",
        answer: [
            { Text: "Corporate Ethics Officer", correct: true},
            { Text: "Chief Executive Officer", correct: false},
            { Text: "Corporate Technology Officer", correct: false},
            { Text: "Chief Information Officer", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "The concept that an organization should act ethically by taking responsibility for the impact of its actions on its shareholders, consumers, employees, community, environment, and suppliers.",
        answer: [
            { Text: "Corporate Social Responsability (CSR)", correct: true},
            { Text: "Integrity", correct: false},
            { Text: "Social Audit", correct: false},
            { Text: "Law", correct: false},
        ]
    },
    {
        question: "A code of behavior that is defined by the group to which an individual belongs.",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
            { Text: "", correct: false},
        ]
    },
    {
        question: "",
        answer: [
            { Text: "", correct: false},
            { Text: "", correct: false},
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