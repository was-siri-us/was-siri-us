let level = 0;
var rand = -1;
var pattern = [];

var inp = "";
var userInput = [];
const b = ["green", "red", "yellow", "blue"];

const gameoverAudio = new Audio();
gameoverAudio.src = "sounds\wrong.mp3";


var audio = [];
for (let i = 0; i < 4; i++) {
    var a = new Audio();
    var s = `sounds\\${b[i]}.mp3`;
    a.src = s;
    console.log(a.src);
    audio.push(a);
}


//Start game
$(document).keypress(function (e) {
    if (level == 0) {
        nextSequence();
    }
});


//Generate next box
function nextSequence() {
    level++;
    $("#level-title").text(`level ${level}`);
    rand = Math.random() * (4);
    rand = Math.floor(rand);
    console.log(rand);
    pattern.push(b[rand]);
    $("." + b[rand]).fadeOut(200).fadeIn(200);
    playSound(b[rand]);
}

function checkAnswer(index) {
    if (pattern[index] == userInput[index]) {
        if (index == pattern.length - 1) {
            userInput = [];
            setTimeout(() => {

                nextSequence();
            }, 1000);
        }
    }
    else {
        gameover();
    }
}
//gameOver
function gameover() {
    level = 0;
    $("#level-title").text("Game Over, Press Any Key to Restart");
    userInput = [];
    pattern = [];
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    gameoverAudio.play();
}

$(".btn").click(function (e) {
    e.preventDefault();
    inp = this.id;
    console.log(inp);
    userInput.push(inp);

    playSound(inp);
    console.log(userInput);

    $(this).addClass("pressed");
    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 100);
    checkAnswer(userInput.length - 1);


});




//play sounds on click
function playSound(st) {
    audio[b.indexOf(st)].play();
}