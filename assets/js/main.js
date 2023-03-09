/**
 * Load
 */

/*
window.onload = function () {
    document.getElementById("welcome").style.visibility = "visible";
    console.log("before listener");
    document.addEventListener("DOMContentLoaded", function(){
        console.log("in listener");
        document.getElementById("start-game").addEventListener("click"), function(){
            console.log("clicked");
            document.getElementById("game-area").style.backgroundColor = "magenta";
            }
        }
    }
  */

/* Replace individual listener assignment with class loop and have function with case to action */


window.onload = function () {
    document.getElementById("welcome-panel").style.visibility = "visible";
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("in listener");
    document.getElementById("start-game").addEventListener("click", bcChange);

    document.getElementById("btn-menu").addEventListener("click", displayPanel);

    displayChildren();

})


function bcChange() {
    if (document.getElementById("welcome-panel").style.backgroundColor == "magenta") {
        document.getElementById("welcome-panel").style.backgroundColor = "aqua";
    } else {
        document.getElementById("welcome-panel").style.backgroundColor = "magenta";
    }
}


function displayPanel() {
    console.log("in displayPanel");

    if (document.getElementById("welcome-panel").style.visibility === 'hidden') {
        document.getElementById("welcome-panel").style.visibility = 'visible';
        document.getElementById("menu-panel").style.visibility = 'hidden';
    } else {
        document.getElementById("welcome-panel").style.visibility = 'hidden';
        document.getElementById("menu-panel").style.visibility = 'visible';
    }
}

function displayQuestion () {
    let quizArea = document.getElementById("quiz-panel");
    let resultsArea = document.getElementById("results-area");
    for (question of quizQuestions){
        let correctAnswer = question.answer;
        let quizHTML = `<h2>${question.question}</h2>
        <button id="btn-answer-1" class="btn-answer">${question.a}</button>
        <button id="btn-answer-1" class="btn-answer">${question.b}</button>
        <button id="btn-answer-1" class="btn-answer">${question.c}</button>
        <button id="btn-answer-1" class="btn-answer">${question.d}</button>`;
        quizArea.innerHTML=quizHTML;
        if(!runQuiz(question.answer)){
            /* append answer and linkto to resultsPanel */
        }
    }
}


function displayChildren() {
    let divKids = document.getElementById("game-area");
    for (let i = 0; i < divKids.length; i++) {
        console.log(divKids[i].tagName);
    }
}