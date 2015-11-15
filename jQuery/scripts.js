var createdTime; 
var clickedTime; 
var reactionTime;
var time;
var top; 
var left;

function getRandomColor() {
    var letters = "0123456789abcdef".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
}

function squareOrCircle() {
    var random = Math.random();
    var radius;

    if (random > 0.5) {
        radius = "50%";
    } else {
        radius = "0";
    }
    return radius;
}

function makeBox() {

    time = Math.random()*3000;
    top = Math.random()*800 + "px";
    left = Math.random()*800 + "px";

    setTimeout(function () {

        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.backgroundColor = getRandomColor();
        document.getElementById("box").style.borderRadius = squareOrCircle();
        document.getElementById("box").style.top = top;
        document.getElementById("box").style.left = left;

        createdTime = Date.now();

    }, time);
}

document.getElementById("box").onclick = function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;
    document.getElementById("time").innerHTML = reactionTime + " s";
    this.style.display = "none";
    makeBox();
}


makeBox();

