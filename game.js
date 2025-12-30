const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
let started = false;

$(document).on("keydown", function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
     setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    console.log("the random number is " + randomNumber, gamePattern);
}

function checkAnswer(currentIndex) {
    const latestCorrect = userClickedPattern[currentIndex] === gamePattern[currentIndex];

    if (!latestCorrect) {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        playSound("wrong");
        startOver();
        return;
    }

    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 500);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}