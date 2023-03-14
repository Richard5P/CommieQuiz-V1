// Variables
const homePanelButton = document.getElementById("btn-home");
const menuPanelButton = document.getElementById("btn-menu");
const panelArea = document.getElementById("panel-area");
const welcomePanel = document.getElementById("welcome-panel");
const menuPanel = document.getElementById("menu-panel");
const rulesPanel = document.getElementById("rules-panel");
const quizPanel = document.getElementById("quiz-panel");
const scoresPanel = document.getElementById("scores-panel");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswer1 = document.getElementById("btn-answer-1");
const quizAnswer2 = document.getElementById("btn-answer-2");
const quizAnswer3 = document.getElementById("btn-answer-3");
const quizAnswer4 = document.getElementById("btn-answer-4");

let currentPanel = "welcome-panel";
let quizCorrectAnswer = "";

const countDownDate = new Date();
// const gameCountDownInterval = setInterval(displayGameCountDown, 1000);
//const userNextQuestionInterval = setInterval(displayQuestionCountDown, 1000);


window.onload = function () {
    displayHomePanel();
};

// Add event listeners

document.addEventListener("DOMContentLoaded", function () {
    // controls Area
    homePanelButton.addEventListener("click", displayHomePanel);
    menuPanelButton.addEventListener("click", displayMenuPanel)

    // menu panel
    document.getElementById("btn-welcome").addEventListener("click", displayHomePanel);
    document.getElementById("btn-quiz").addEventListener("click", displayQuizPanel);
    document.getElementById("btn-rules").addEventListener("click", displayRulesPanel);
    document.getElementById("btn-scores").addEventListener("click", displayScoresPanel);

    //quiz panel
    document.getElementById("btn-answer-1").addEventListener("click", function () {
        checkAnswer(question.answer, "A");
    });
    document.getElementById("btn-answer-2").addEventListener("click", function () {
        checkAnswer(question.answer, "B");
    });
    document.getElementById("btn-answer-3").addEventListener("click", function () {
        checkAnswer(question.answer, "C");
    });
    document.getElementById("btn-answer-4").addEventListener("click", function () {
        checkAnswer(question.answer, "D");
    });
    document.getElementById("btn-answer-1").addEventListener("keydown", function () {
        checkAnswer(question.answer, "A");
    });
    document.getElementById("btn-answer-2").addEventListener("keydown", function () {
        checkAnswer(question.answer, "B");
    });
    document.getElementById("btn-answer-3").addEventListener("keydown", function () {
        checkAnswer(question.answer, "C");
    });
    document.getElementById("btn-answer-4").addEventListener("keydown", function () {
        checkAnswer(question.answer, "D");
    });
    document.getElementById("btn-next").addEventListener("click", nextQuestion);
    document.getElementById("btn-next").addEventListener("click", stopCountDown);
    document.getElementById("btn-next").addEventListener("keydown", nextQuestion);
    document.getElementById("btn-next").addEventListener("keydown", stopCountDown);
});

function hidePanels(){
    let panels = document.getElementsByClassName("panel");
    for (let i=0;i < panels.length; i++)
        panels[i].classList.add("hidden");
}

function displayHomePanel() {
    console.log("Home Panel");
    hidePanels();
    welcomePanel.classList.remove ("hidden");
    currentPanel = "welcome-panel";
}

function displayMenuPanel() {
    console.log("Menu Panel");
    hidePanels();
    menuPanel.classList.remove ("hidden");
    currentPanel = "menu-panel";
}


function displayQuizPanel() {
    console.log("Quiz Panel");
    hidePanels();
    quizPanel.classList.remove ("hidden");
    currentPanel = "quiz-panel";
    loadQuizQuestions();
    }

function displayRulesPanel() {
    console.log("Rules Panel");
    hidePanels();
    rulesPanel.classList.remove ("hidden");
    currentPanel = "rules-panel";
}

function displayScoresPanel() {
    console.log("Scores Panel");
    hidePanels();
    scoresPanel.classList.remove ("hidden");
    currentPanel = "scores-panel";
}

function loadQuizQuestions() {
    console.log("load Quiz Questions");
    document.getElementById("correct-answers").value = 0;
    for (let currentQuestion of quizQuestions) {
        quizQuestion.innerText = currentQuestion.question;
        quizAnswer1.innerText = currentQuestion.a;
        quizAnswer2.innerText = currentQuestion.b;
        quizAnswer3.innerText = currentQuestion.c;
        quizAnswer4.innerText = currentQuestion.d;
        quizCorrectAnswer = currentQuestion.answer;
        console.log(quizCorrectAnswer);
//        while(displayQuestionCountDown){};
    }
}


function checkAnswer(correctAnswer, selectedAnswer) {
    let correctAnswerCount = document.getElementById("correct-answers").value;
    Display.innerText = correctAnswer === selectedAnswer ? ++correctAnswerCount : correctAnswerCount;
}

// Add displayGameCountDown 

function displayQuestionCountDown() {
    // Set the date we're counting down to
    var countDownDate = new Date(Date.now() + (1000 * 60 * 2) + 2);

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Calculate the minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerText = minutes + "." + seconds;
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            return(false);
        }
    }, 1000);
}

function stopCountDown() {

}

function nextQuestion(){
    let i = 1;
}