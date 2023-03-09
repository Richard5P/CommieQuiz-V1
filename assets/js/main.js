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
    let classElmts = document.getElementsByClassName("welcome");
    for (let i = 0; i < classElmts.length; i++) {
        classElmts[i].style.visibility = "hidden";
    }
    let classElmts2 = document.getElementsByClassName("menu");
    for (let i = 0; i < classElmts2.length; i++) {
        classElmts2[i].style.visibility = "visible";
    }
}


function displayChildren() {
    let divKids = document.getElementById("game-area");
    for (let i = 0; i < divKids.length; i++) {
        console.log(divKids[i].tagName);
    }
}