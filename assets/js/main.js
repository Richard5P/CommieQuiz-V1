// Variables
const homePanelButton = document.getElementById("btn-home");
const menuPanelButton = document.getElementById("btn-menu");
const panelArea = document.getElementById("panel-area");
const welcomePanel = document.getElementById("welcome-panel");
const menuPanel = document.getElementById("menu-panel");
const rulesPanel = document.getElementById("rules-panel");
const quizPanel = document.getElementById("quiz-panel");



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



function displayHomePanel() {
    console.log("Home Panel");

    panelArea.firstChild.classList;
}

function displayMenuPanel() {
    console.log("Menu Panel");
    if (panelArea.hasChildNodes()) {
        panelArea.removeChild(panelArea.firstChild);
    }
    panelArea.innerHTML = menuPanel;

}


function displayQuizPanel() {
    console.log("Quiz Panel");
    if (panelArea.hasChildNodes()) {
        panelArea.removeChild(panelArea.firstChild);
        loadQuizQuestions();
    }
}

function displayRulesPanel() {
    console.log("Rules Panel");
    if (panelArea.hasChildNodes()) {
        panelArea.removeChild(panelArea.firstChild);
    }
    panelArea.innerHTML = rulesPanel;
}

function displayScoresPanel() {
    console.log("Scores Panel");
    if (panelArea.hasChildNodes()) {
        panelArea.removeChild(panelArea.firstChild);
    }
    panelArea.innerHTML = `<p>Scores Panel</p>`;
}

function loadQuizQuestions() {
    document.getElementById("correct-answers").value = 0;
    for (let question of quizQuestions) {
        let quizHTML = `<h2>${question.question}</h2>
        <button id="btn-answer-1" class="btn-answer">${question.a}</button>
        <button id="btn-answer-2" class="btn-answer">${question.b}</button>
        <button id="btn-answer-3" class="btn-answer">${question.c}</button>
        <button id="btn-answer-4" class="btn-answer">${question.d}</button>
        <button id="btn-next">Next</button>`;
        panelArea.innerHTML = quizHTML;
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
        }
    }, 1000);
}

function stopCountDown() {

}