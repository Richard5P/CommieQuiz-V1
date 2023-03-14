/*
Quiz Questions
*/

const quizQuestions = [{
    question: "\'There are decades where nothing happens; and there are weeks where decades happen.\' Is a quote from?",
    a: "Karl Marx",
    b: "Leon Trosky",
    c: "Rosa Luxemburg",
    d: "Vladimir Lenin",
    answer: "D",
    linkto: {
        docName: "War and Revolution",
        url: "https://www.marxists.org/archive/lenin/works/1917/may/14.htm",
    }
},
{
    question: "\'A specter is haunting Europe—the specter of Communism.\' was first published in?",
    a: "Das Kapital",
    b: "Neue Rheinische Zeitung",
    c: "The Communist Manifesto",
    d: "Founding Documents of the Communist League",
    answer: "C",
    linkto: {
        docName: "The Communist Manifesto",
        url: "https://www.marxists.org/archive/marx/works/1848/communist-manifesto/",
    },
}
]

/*
Game start and control script
 */

// Variables
const homePanelButton = document.getElementById("btn-home");
const menuPanelButton = document.getElementById("btn-menu");
const gameArea = document.getElementById("game-area");
const countDownDate = new Date();
// const gameCountDownInterval = setInterval(displayGameCountDown, 1000);
//const userNextQuestionInterval = setInterval(displayQuestionCountDown, 1000);

// Panels html
const welcomePanel = `<section id="welcome-panel" class="welcome">
<h2 class="welcome"> Welcome to the Commie Quiz!</h2>
<p class="welcome">A fun game where you can test your current knowledge about Communism and find resources for
    expanding on it.</p>
</section>`

const menuPanel = `<section id ="menu-panel">
<h2 class="hidden">Menu</h2>
<button id="btn-welcome" class="btn-menu">Home</button>
<button id="btn-quiz" class="btn-menu">Quiz</button>
<button id="btn-rules" class="btn-menu">Rules</button>
<button id="btn-scores" class="btn-menu">Scores</button>
</section>`;

const rulesPanel = `        <section id="rules-panel">
<label for="game-rules">
    <details>
        <summary>
            Rules of the game
        </summary>
        As a non-competitive socialist game, the rules have been designed for you to challenge yourself and
        provide you with an educational experience that you will share with your friends. After all,
        cooperation rather than competition is what distinguishes Communism from other ideologies.
    </details>
</label>
<ul id="game-rules">
    <li>Each game runs for a maximum of 2 minutes.</li>
    <li>Users can select 3 different challenges to alter the maximum response time for each question.</li>
    <li>
        <ul>
            <li>Comrade - 20s interval (max 6 questions).</li>
            <li>Vanguard - 20s interval (max 8 questions).</li>
            <li>Intelligentsia - 10s interval (max 12 questions).</li>
        </ul>
    </li>
    <li>Each correct answer will add a red star the user's score.</li>
    <li>The final score is calculated as a percentage based on the number of correct answer divided by the
        maximum questions for the game level.</li>
</ul>
</section>`;

window.onload = function() {
    displayHomePanel();
};

// Add event listeners

document.addEventListener("DOMContentLoaded", function () {
    /*        for (let button in homePanelButtons) {
                button.addEventListener("click", displayHomePanel);
            } */
    homePanelButton.addEventListener("click", displayHomePanel);
    menuPanelButton.addEventListener("click", displayMenuPanel);
})



function displayHomePanel() {
    console.log("Home Panel");
    if (gameArea.hasChildNodes()) {
        gameArea.removeChild(gameArea.firstChild);
    }
    gameArea.innerHTML = welcomePanel;
}

function displayMenuPanel() {
    console.log("Menu Panel");
    if (gameArea.hasChildNodes()) {
        gameArea.removeChild(gameArea.firstChild);
    }
    gameArea.innerHTML = menuPanel;
    document.getElementById("btn-welcome").addEventListener("click", displayHomePanel);
    document.getElementById("btn-quiz").addEventListener("click", displayQuizPanel);
    document.getElementById("btn-rules").addEventListener("click", displayRulesPanel);
    document.getElementById("btn-scores").addEventListener("click", displayScoresPanel);
}


function displayQuizPanel() {
    console.log("Quiz Panel");
    if (gameArea.hasChildNodes()) {
        gameArea.removeChild(gameArea.firstChild);
        loadQuizQuestions();
    }
}

function displayRulesPanel() {
    console.log("Rules Panel");
    if (gameArea.hasChildNodes()) {
        gameArea.removeChild(gameArea.firstChild);
    }
    gameArea.innerHTML = rulesPanel;
}

function displayScoresPanel() {
    console.log("Scores Panel");
    if (gameArea.hasChildNodes()) {
        gameArea.removeChild(gameArea.firstChild);
    }
    gameArea.innerHTML = `<p>Scores Panel</p>`;
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
        gameArea.innerHTML = quizHTML;
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

function stopCountDown(){

}

