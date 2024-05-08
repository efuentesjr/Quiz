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
        question: "An employee of a large tech company notices that the company is not taking the proper steps to protect consumer information. The employee has raised concerns to management multiple times but has been ignored. The employee finds that the company is harming the public interest and takes steps to attract public attention. Which action is the employee demonstrating?",
        answer: [
            { Text: "Whistleblowing", correct: true},
            { Text: "Filing lawsuits", correct: false},
            { Text: "Insubordination", correct: false},
            { Text: "otifying police", correct: false},
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
            { Text: "Vice", correct: false},
            { Text: "Ethics", correct: true},
            { Text: "Morals", correct: false},
            { Text: "Virtue", correct: false},
        ]
    },
    {
        question: "Adherence to a personal code of principles.",
        answer: [
            { Text: "Vice", correct: false},
            { Text: "Audits", correct: false},
            { Text: "Integrity", correct: true},
            { Text: "Bathsheba Syndrome", correct: false},
        ]
    },
    {
        question: "A system of rules that tells us what we can and cannot do.",
        answer: [
            { Text: "Code of Conduct", correct: false},
            { Text: "Bathsheba Syndrome", correct: false},
            { Text: "Law", correct: true},
            { Text: "Stakeholder", correct: false},
        ]
    },
    {
        question: "Two programmers disagree about which philosophical theory is best suited for their autonomous vehicles. One programmer suggests their vehicle should always choose the greatest good for the greatest number of people.",
        answer: [
            { Text: "Virtue Ethics", correct: false},
            { Text: "Deontology", correct: false},
            { Text: "Utilitarianism", correct: true},
            { Text: "Kantian Ethics", correct: false},
        ]
    },
    {
        question: "The personal principles upon which an individual bases his or her decisions about what is right and what is wrong.",
        answer: [
            { Text: "Sportsmanship", correct: false},
            { Text: "Code of Honor", correct: false},
            { Text: "Kantian Ethics", correct: false},
            { Text: "Morals", correct: true},
        ]
    },
    {
        question: "What is the difference between ethics and morals?",
        answer: [
            { Text: "Ethics reflect personal principles, whereas morals reflect a system of rules.", correct: false},
            { Text: "Ethics reflect a societal code of behavior, whereas morals reflect personal principles.", correct: true},
            { Text: "Ethics reflect a system of rules, whereas morals reflect personal principles.", correct: false},
            { Text: "Ethics reflect personal principles, whereas morals reflect a societal code of behavior.", correct: false},
        ]
    },
    {
        question: "An IT company holds itself accountable for how its actions affect its shareholders, consumers, employees, community, the environment, and suppliers. What is this company demonstrating?",
        answer: [
            { Text: "Corporate code of ethics", correct: false},
            { Text: "Corporate social responsibility", correct: true},
            { Text: "Environmental, social, and governance policies", correct: false},
            { Text: "Supply chain morals", correct: false},
        ]
    },
    {
        question: "Which ethical concept is related to the right to use a person's or an organization's intangible creative activities?",
        answer: [
            { Text: "Property", correct: true},
            { Text: "Accuracy", correct: false},
            { Text: "Privacy", correct: false},
            { Text: "Access", correct: false},
        ]
    },
    {
        question: "A process whereby an organization reviews how well it is meeting its ethical and social responsibility goals and communicates its new goals for the upcoming year.",
        answer: [
            { Text: "Ethical algorithms", correct: false},
            { Text: "Kantian ethics", correct: false},
            { Text: "Social audit", correct: true},
            { Text: "ISO standards", correct: false},
        ]
    },
    {
        question: "What is a reason for organizations to pursue corporate social responsibility (CSR) goals?",
        answer: [
            { Text: "Cross-sell products", correct: false},
            { Text: "Attract publicity", correct: false},
            { Text: "Avoid controversy", correct: false},
            { Text: "Gain goodwill", correct: true},
        ]
    },
    {
        question: "A software development company develops a public website for the federal government. The website is dedicated to remediating threats of a pandemic based on detailed specifications provided by the customer. During final tests, the company discovers specification flaws that could potentially aggravate the effects of the pandemic. What should the company do to mitigate its risk associated with strict liability?",
        answer: [
            { Text: "Record the flaws as part of internal documentation", correct: false},
            { Text: "Deliver the software according to the specifications", correct: false},
            { Text: "Alter the specifications to mitigate the flaws", correct: false},
            { Text: "Disclose the test results to the government", correct: true},
        ]
    },
    {
        question: "A software engineering company offers its employees free technical training every year. Many of its software engineers are taking the training to further their knowledge in the design, development, and testing of software. Which concept of the Software Engineering Code of Ethics and Professional Practice are the engineers following?",
        answer: [
            { Text: "Maintained integrity", correct: false},
            { Text: "Lifelong learning", correct: true},
            { Text: "Maintained integrity", correct: false},
            { Text: "High standards", correct: false},
        ]
    },
    {
        question: "A form of copyright infringement that involves making copies of software or enabling others to access software to which they are not entitled.",
        answer: [
            { Text: "intellectual property protection", correct: false},
            { Text: "Creative rights", correct: false},
            { Text: "software piracy", correct: true},
            { Text: "IP protection", correct: false},
        ]
    },
    {
        question: "While on vacation, an IT leader leaves a manager in charge of a major client project. Because the IT leader's team abides by a strong code of ethics, the IT leader knows the manager has the tools to perform ethical self-assessment during and after any challenging situations that may arise. Which benefit of following a professional code of ethics do these self-assessment tools provide?",
        answer: [
            { Text: "Trust and respect from the general public", correct: false},
            { Text: "Evaluation benchmark", correct: true},
            { Text: "Censure procedures for serious violations", correct: false},
            { Text: "Corporate tax deductions", correct: false},
        ]
    },
    {
        question: "A component of corporate social responsibility (CSR) that focuses on developing and maintaining a supply chain that meets the needs of the present without compromising the ability of future generations to meet their needs.",
        answer: [
            { Text: "intellectual property protection", correct: false},
            { Text: "trade secrets", correct: false},
            { Text: "supply chain sustainability", correct: true},
            { Text: "sustainability and ehtical", correct: false},
        ]
    },
    {
        question: "A university is authoring a code of ethics for its professors to abide by to promote high standards of practice and ethical behavior. What is the main part of a code of ethics the university should include?",
        answer: [
            { Text: "Brief orientation to moral philosophy", correct: false},
            { Text: "Description of noncompliance repercussions", correct: false},
            { Text: "SLA agreement", correct: false},
            { Text: "List of rules and principles to follow", correct: true},
        ]
    },
    {
        question: "A company hires an independent contractor to build a website for a product launch. In the contract, the contractor agrees to deliver the finished website within two months. The company promises more contracts if the contractor successfully completes the project. The company provides the contractor with a laptop and tablet with unrestricted access. The schedule requires the contractor to work around 60 hours per week with no overtime compensation or paid time off. The contractor delivers the website, meeting the contract terms. However, the company does not award the contractor more contracts. The contractor sues the company on the grounds that the company misclassified the contractor and treated them as an employee. What establishes the contractor's grounds for arguing for the misclassification?",
        answer: [
            { Text: "Working more than 40 hours a week but not receiving overtime pay", correct: false},
            { Text: "Working on a company-provided laptop and tablet", correct: true},
            { Text: "Receiving no paid time off or sick leave compensation", correct: false},
            { Text: "Receiving no additional contracts after the initial project completion", correct: false},
        ]
    },
    {
        question: "A software engineering company offers its employees free technical training every year. Many of its software engineers are taking the training to further their knowledge in the design, development, and testing of software. Which concept of the Software Engineering Code of Ethics and Professional Practice are the engineers following?",
        answer: [
            { Text: "Lifelong learning", correct: true},
            { Text: "Maintained integrity", correct: false},
            { Text: "Principled approach", correct: false},
            { Text: "High standards", correct: false},
        ]
    },
    {
        question: "Which verification should a software engineer obtain from the state to serve as proof of professional ability?",
        answer: [
            { Text: "Certification", correct: false},
            { Text: "Vendor certification", correct: false},
            { Text: "License", correct: true},
            { Text: "Body of knowledge", correct: false},
        ]
    },
    {
        question: "A company releases a new financial software package. Along with the installation program, the company includes a written assurance that the program meets appropriate levels of quality. It also provides for specific remedies in the case of malperformance. What did the company use to limit its legal liabilities?",
        answer: [
            { Text: "Limited warranty", correct: true},
            { Text: "Code of conduct", correct: false},
            { Text: "Copyright protection", correct: false},
            { Text: "Contractual breach", correct: false},
        ]
    },
    {
        question: "_____ is/are one’s personal beliefs about what is right and wrong ",
        answer: [
            { Text: "Virtues and vices", correct: false},
            { Text: "morals", correct: true},
            { Text: "Ethics", correct: false},
            { Text: "code of ethics", correct: false},
        ]
    },
    {
        question: "The moral corruption of people in power has been given the name",
        answer: [
            { Text: "Bathsheba syndrome", correct: true},
            { Text: "Abusive behavior", correct: false},
            { Text: "Win at all cost", correct: false},
            { Text: "Authority power", correct: false},
        ]
    },
    {
        question: "According to the Ethics Resource Center, which of the following is the most commonly observed form of employee misconduct?",
        answer: [
            { Text: "Lying to employees", correct: false},
            { Text: "Abusive behavior", correct: false},
            { Text: "Inappropriate social networking", correct: false},
            { Text: "Misuse of company time", correct: true},
        ]
    },
    {
        question: "Nonmanagers are responsible for what percent of instances of reported misconduct?",
        answer: [
            { Text: "Roughly 25 percent", correct: false},
            { Text: "Over 50 percent", correct: false},
            { Text: "About 40 percent", correct: true},
            { Text: "Less than 33 percent ", correct: false},
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