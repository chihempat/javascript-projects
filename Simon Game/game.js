var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenColour;
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function(e) {
    if (!started) {

        $("h1").html("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    index = (userClickedPattern.length) - 1;
    checkAnswer(index);

})



function checkAnswer(currentLevel) {
    console.log(currentLevel);
    console.log(gamePattern[gamePattern.length]);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("failure");
        var a1 = new Audio("sounds/wrong.mp3");
        a1.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over,Press key to Restart");
        startOver();

    }
}

function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
}

function nextSequence() {
    userClickedPattern = [];
    ++level;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("h1").html("Level " + level);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var a1 = new Audio("sounds/" + randomChosenColour + ".mp3");
    a1.play();


}

function playSound(name) {
    var a1 = new Audio("sounds/" + name + ".mp3");
    a1.play();
}

function animatePress(name) {
    $("." + name).addClass("pressed");
    setTimeout(function() {
        $("." + name).removeClass("pressed");
    }, 100);

}