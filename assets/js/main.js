// Variables
const homePanelButton = document.getElementById("btn-home");
const menuPanelButton = document.getElementById("btn-menu");
const gameTimerDisplay = document.getElementById("game-timer");
const questionTimerDisplay = document.getElementById("question-timer");
const correctAnswerDisplay = document.getElementById("correct-answers");
const panelArea = document.getElementById("panel-area");
const welcomePanel = document.getElementById("welcome-panel");
const menuPanel = document.getElementById("menu-panel");
const rulesPanel = document.getElementById("rules-panel");
const quizPanel = document.getElementById("quiz-panel");
const scoresPanel = document.getElementById("scores-panel");
const welcomeButton = document.getElementById("btn-welcome");
const quizButton = document.getElementById("btn-quiz");
const rulesButton = document.getElementById("btn-rules");
const scoresButton = document.getElementById("btn-scores");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswer1 = document.getElementById("btn-answer-1");
const quizAnswer2 = document.getElementById("btn-answer-2");
const quizAnswer3 = document.getElementById("btn-answer-3");
const quizAnswer4 = document.getElementById("btn-answer-4");
const nextQuestion = document.getElementById("btn-next");
const gameStartingMinutes = 2;
let gameTime = gameStartingMinutes * 60;
let questionTime = 5; // this should change for the user option

let currentPanel = "welcome-panel";
let quizCorrectAnswer = "";
let correctAnswerCount = 0;
let gameTimerBool = true;
let questionTimerBool = true;
let nextQuestionBool = true;

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
    menuPanelButton.addEventListener("click", displayMenuPanel);
    menuPanelButton.addEventListener("click", stopCountDown);

    // menu panel
    welcomeButton.addEventListener("click", displayHomePanel);
    quizButton.addEventListener("click", displayQuizPanel);
    rulesButton.addEventListener("click", displayRulesPanel);
    scoresButton.addEventListener("click", displayScoresPanel);

    //quiz panel
    quizAnswer1.addEventListener("click", function () {
        checkAnswer("A");
    });
    quizAnswer2.addEventListener("click", function () {
        checkAnswer("B");
    });
    quizAnswer3.addEventListener("click", function () {
        checkAnswer("C");
    });
    quizAnswer4.addEventListener("click", function () {
        checkAnswer("D");
    });
    quizAnswer1.addEventListener("keydown", function () {
        checkAnswer("A");
    });
    quizAnswer2.addEventListener("keydown", function () {
        checkAnswer("B");
    });
    quizAnswer3.addEventListener("keydown", function () {
        checkAnswer("C");
    });
    quizAnswer4.addEventListener("keydown", function () {
        checkAnswer("D");
    });
    nextQuestion.addEventListener("click", function(){
        console.log("Next Question");
    });
    nextQuestion.addEventListener("click", loadNextQuestion);
    nextQuestion.addEventListener("click", stopCountDown);
    nextQuestion.addEventListener("keydown", loadNextQuestion);
    nextQuestion.addEventListener("keydown", stopCountDown);
});

function hidePanels() {
// hide timers as well
    gameTimerDisplay.classList.add("hidden");
    questionTimerDisplay.classList.add("hidden");    

    let panels = document.getElementsByClassName("panel");
    for (let i = 0; i < panels.length; i++)
        panels[i].classList.add("hidden");
}

function displayHomePanel() {
    console.log("Home Panel");
    hidePanels();
    welcomePanel.classList.remove("hidden");
    currentPanel = "welcome-panel";
}

function displayMenuPanel() {
    console.log("Menu Panel");
    hidePanels();
    menuPanel.classList.remove("hidden");
    currentPanel = "menu-panel";
}


function displayQuizPanel() {
    console.log("Quiz Panel");
    hidePanels();
    quizPanel.classList.remove("hidden");
    currentPanel = "quiz-panel";
    loadQuizQuestions();
}

function displayRulesPanel() {
    console.log("Rules Panel");
    hidePanels();
    rulesPanel.classList.remove("hidden");
    currentPanel = "rules-panel";
}

function displayScoresPanel() {
    console.log("Scores Panel");
    hidePanels();
    scoresPanel.classList.remove("hidden");
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
            questionTimerBool = true;
            console.log("in for before wait");
            waitResponse();
            console.log("in for after wait");
        };
}

/*        if (nextQuestionBool) {
            continue;
        } else {
            break;
        }*/


function checkAnswer(selectedAnswer) {
    correctAnswerDisplay.innerText = quizCorrectAnswer === selectedAnswer ? ++correctAnswerCount : correctAnswerCount;
}

// Timers
//setInterval(gameCountDown, 1000);

function gameCountDown() {
    const minutes = Math.floor(gameTime / 60);
    do {
        let seconds = gameTime % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        gameTimerDisplay.innerHTML = `${minutes}:${seconds}`;
    }
    while (gameTime-- > 0 && gameTimerBool);
}

function waitResponse () {
    const questionInterval = setInterval(questionCountDown, 1000);
    let time = 5;
    questionTimerDisplay.classList.remove("hidden");
    function questionCountDown() {
        console.log("QuestionCountDown Time", time);
        let remainingSeconds = time % 60;
        remainingSeconds = remainingSeconds < 10 ? '0'+ remainingSeconds : remainingSeconds;
        questionTimerDisplay.innerHTML = `${remainingSeconds}`;

       if (time >= 1){
          time--;
        } else {
          clearInterval(questionInterval);
          nextQuestionBool = true;
          return(true);
        }; 
    }
}




function MyquestionCountDown() {
    questionTimerDisplay.classList.remove("hidden");
    do {
        let seconds = questionTime;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        questionTimerDisplay.innerHTML = `${seconds}`;
    }
    while (questionTime-- > 0 && questionTimerBool);
}

function stopCountDown() {
    questionTimerBool = false;
    nextQuestionBool = false;
}

function loadNextQuestion() {
    nextQuestionBool = true;
}