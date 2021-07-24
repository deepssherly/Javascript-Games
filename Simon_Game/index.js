var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(document).keypress(function() {
    if (!started) {
        started = true;
        $('#title').text("Level " + level);
        nextSequence();
    }
});
$('.btn').click(function() {
    var userColour = $(this).attr('id');
    userClickedPattern.push(userColour);
    playSound(userColour);
    animatePress(userColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    var randomColour = buttonColours[randomNum];
    gamePattern.push(randomColour);
    $('#' + randomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColour);
    level += 1;
    $('#title').text("Level " + level);
};

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(colour) {
    $('#' + colour).addClass('pressed');
    setTimeout(() => { $('#' + colour).removeClass('pressed'); }, 100);
}

function checkAnswer(current) {
    if ((gamePattern[current] === userClickedPattern[current]) && (userClickedPattern.length === gamePattern.length)) {
        setTimeout(function() {
            nextSequence();
        }, 800);
    } else {
        playSound("wrong");
        $("body").addClass('game-over');
        setTimeout(() => {
            $("body").removeClass('game-over');
        }, 200);
        $("#title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}