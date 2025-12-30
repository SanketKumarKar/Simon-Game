const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
let started = false;
// Detecting keyboard press to start the game
$(document).on("keydown", function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});
// Handling button clicks
$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});
// Play sound based on the color name
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
// Animate button press by adding and removing "pressed" class
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
     setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
// Generate the next sequence plus title ko change karna
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}
// Check the user's answer very imp function, cheking last input
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
// Check if the user has finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 500);
    }
}
// Reset the game variables to start over
function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}