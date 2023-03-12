/*
Game start and control script
 */

// Variables
const homePanelButton = document.getElementById("btn-home");
const menuPanelButton = document.getElementById("btn-menu");
console.log(menuPanelButton);
const displayArea = document.getElementById("display-area");

// Panels html
const welcomePanel = `<section id="welcome-panel" class="welcome">
<h2 class="welcome"> Welcome to the Commie Quiz!</h2>
<p class="welcome">A fun game where you can test your current knowledge about Communism and find resources for
    expanding on it.</p>
<button id="start-game" class="welcome">Start</button>
</section>`

const menuPanel = `<section id ="menu-panel">
<h2 class="hidden">Menu</h2>
<button id="btn-welcome" class="btn-menu">Home</button>
<button id="btn-quiz" class="btn-menu">Quiz</button>
<button id="btn-rules" class="btn-menu">Rules</button>
<button id="btn-scores" class="btn-menu">Scores</button>
</section>`;

const rulesPanel = `        <section id="rules-panel" class="hidden">
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
    if (displayArea.hasChildNodes()) {
        displayArea.removeChild(displayArea.firstChild);
    }
    displayArea.innerHTML = welcomePanel;
}

function displayMenuPanel() {
    console.log("Menu Panel");
    if (displayArea.hasChildNodes()) {
        displayArea.removeChild(displayArea.firstChild);
    }
    displayArea.innerHTML = menuPanel;
    console.log("display area", document.getElementById("btn-welcome"));
    document.getElementById("btn-welcome").addEventListener("click", displayHomePanel);
    document.getElementById("btn-quiz").addEventListener("click", displayQuizPanel);
    document.getElementById("btn-rules").addEventListener("click", displayRulesPanel);
    document.getElementById("btn-scores").addEventListener("click", displayScoresPanel);

}

function displayQuizPanel() {
    console.log("Quiz Panel");
    countDown();
    /*    if (displayArea.hasChildNodes()) {
            displayArea.removeChild(displayArea.firstChild);
        }
        for (let question of quizQuestions){
            let correctAnswer = question.answer;
            let quizHTML = `<h2>${question.question}</h2>
            <button id="btn-answer-1" class="btn-answer">${question.a}</button>
            <button id="btn-answer-2" class="btn-answer">${question.b}</button>
            <button id="btn-answer-3" class="btn-answer">${question.c}</button>
            <button id="btn-answer-4" class="btn-answer">${question.d}</button>`;
            displayArea.innerHTML=quizHTML; */
}

function displayRulesPanel() {
    console.log("Rules Panel");
    if (displayArea.hasChildNodes()) {
        displayArea.removeChild(displayArea.firstChild);
    }
    displayArea.innerHTML = rulesPanel;
}

/* 
    let quizArea = document.getElementById("quiz-panel");
    let resultsArea = document.getElementById("results-area");
    
        if(!runQuiz(question.answer)){
            /* append answer and linkto to resultsPanel */

function displayScoresPanel() {
    console.log("Scores Panel");
    if (displayArea.hasChildNodes()) {
        displayArea.removeChild(displayArea.firstChild);
    }
    displayArea.innerHTML = `<p>Scores Panel</p>`;
}

function countDown() {
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
        document.getElementById("timer").innerHTML = minutes + "." + seconds;
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000)
};