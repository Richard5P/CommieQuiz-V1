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
    document.getElementById("welcome").style.visibility = "visible";
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("in listener");
    document.getElementById("start-game").addEventListener("click", function(){
        console.log("clicked");
        if (document.getElementById("game-area").style.backgroundColor == "magenta") {
             document.getElementById("game-area").style.backgroundColor = "aqua";
        } else {
            document.getElementById("game-area").style.backgroundColor = "magenta";
        }
        })
        })
    
