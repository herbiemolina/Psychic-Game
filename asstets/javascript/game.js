var computerChoice = [
    "e",
    "x",
    "b",
    "o"
]

var userlog = []



var wins = 0
var losses = 0

var directionText = document.getElementById("direction-text");
var userGuessText = document.getElementById("userguess-text");
var compChoicesText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function(event) {

    var userGuess = event.key;

    for (var i = 0; i < computerChoice.length; i++) {
        if (userGuess === computerChoice[i]) {
            wins++;
        }
        else {
            losses++;
        }
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        userGuessText.textContent = "user guess: " + userlog;

        
        }
        if (userlog.length > 9){

            alert("play again? refresh page!")
        }

    userlog.push(userGuess);

    
}
