const question = [
    {
        question: "Quantitive Data",
        answer: [
            { Text: "also called numerical data, consists of data values that are numerical, representing quantities that can be counted or measured.", correct: true},
       ]
    },
    {
        question: "Categorical Data",
        answer: [
            { Text: "also called qualitative data*, consists of data that are groups, such as names or labels, and are not necessarily numerical.", correct: true},
       ]
    },
    {
        question: "The latest software test report produced the following metrics: Total number of test cases written for all requirements =100; Total number of test cases executed =68; Number of test cases passed =35; Number of test cases failed =30; Number of test cases blocked =3; Number of test cases unexecuted =32.",
        answer: [
            { Text: "categorical data", correct: true},
            { Text: "quantitative data", correct: false},
       ]
    },
    {
        question: "A salesperson is sorting the customers they will call today by the area code in their phone number.",
        answer: [
            { Text: "Categorical data", correct: true},
            { Text: "Quantitative data", correct: false},
       ]    
    },
    {
        question: "Each section of a pie chart corresponds to a category of data. True or False? ",
        answer: [
            { Text: "True", correct: true},
            { Text: "False", correct: false},
       ]
    },
    {
        question: "When creating a pie chart, the percentages for each category are calculated from the data.",
        answer: [
            { Text: "True", correct: true},
            { Text: "False", correct: false},
       ]
    },
    {
        question: "The sum of all the percents in a pie chart add up to 100% or close to it because of rounding. True or False?",
        answer: [
            { Text: "True", correct: true},
            { Text: "False", correct: false},
       ]
    },
    {
        question: "The height of each bar in a bar chart is determined by the number of values in the category for that bar. True or false?",
        answer: [
            { Text: "True", correct: true},
            { Text: "False", correct: false},
       ]
    },
    {
        question: "When constructing a bar chart, it is not necessary to include all of the data collected. True or false?",
        answer: [
            { Text: "True", correct: false},
            { Text: "False", correct: true},
       ]
    },
    {
        question: "Histogram",
        answer: [
            { Text: "displays frequencies (i.e., counts) or relative frequencies for categorical data", correct: false},
            { Text: "displays frequencies or relative frequencies for quantitative data", correct: true},

       ]
    },
    {
        question: "Bar Chart",
        answer: [
            { Text: "displays frequencies (i.e., counts) or relative frequencies for categorical data", correct: true},
            { Text: "displays frequencies or relative frequencies for quantitative data", correct: false},
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