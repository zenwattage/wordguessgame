//REFACTOR
//theme: 80's movies

var wrongTries = 10;
var guessesLeft = 0;

var spaceList = [];
var letterList = [];
var guessList = [];

var wins = 0;

var gameRunning = false;
var gameOver = false;

//array of movies
var movies = [
    "Ghostbusters",
    "Superman",
    "Gremlins",
    "Beetlejuice",
    "Wargames",
    "Caddyshack",
    "Labryinth",
    "Flashdance",
    "Footloose",
    "Willow",
    "Highlander",
    "Legend"
];

//GAME VIEW UPDATE FUNCTION
function displayToUser() {
    
}

//GET STATE OF GAME FUNCTION
function getWin() {

}

//GET GUESS FUNCTION
function checkGuess() {
    
//check if keys are between a(65)-z(90)
//if(event.keyPressed >= 65 && event.keyPressed <= 90)

}
//RESET GAME FUNCTION
function restGame() {

}

//UPDATE IMAGE UPON WIN OR LOSE
function imageUpdate() {
    document.getElementById("winLoseImage").src= "assets/images/" + 

}


//game chooses title from array randomly
var movie = movies[Math.floor(Math.random() * movies.length)];
//NOT PREVENTING REPEATS    

var chosenWord = movie.toLowerCase();
console.log(chosenWord);
//fill empty array with spaces equal to letters in chosen word

for (var i = 0; i < chosenWord.length; i++) {
    spaceList[i] = "_";
}

//fill empty array with chosenWord seperated into characters

for (var g = 0; g < chosenWord.length; g++) {
    letterList[g] = chosenWord[g];
    
}
console.log(letterList);


//display dashes on page
document.getElementById("spaces").innerHTML = spaceList.join("");

var keyPressed = "";

addEventListener("keyup", function (event) {
    keyPressed = event.key;
    //console.log(keyPressed);

    for (var j = 0; j < chosenWord.length; j++) {
        //if the index of the chosen word matches key
        if (chosenWord[j] === keyPressed) {
            //update dashed line with character pressed
            rightAnSound.play();

            spaceList[j] = String(keyPressed);
            //console.log("In the Word: "+chosenWord[j]);
        } else {
            guessList.push(keyPressed);
            wrongTries--;
        }

    }

    //write score to screen
    document.getElementById("currentScore").innerHTML = "wins: " + wins;
    document.getElementById("wrongTries").innerHTML = "Guessed Letters: " + guessList;
    document.getElementById("score").innerHTML = "Turns Remaining: " + wrongTries;
    document.getElementById("spaces").innerHTML = spaceList.join("");


})





//sounds
var wrongAnSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
var rightAnSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
