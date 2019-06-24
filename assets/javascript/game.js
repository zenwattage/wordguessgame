//REFACTOR
//theme: 80's movies

var startTries = 10;             //beginning # of tries player has
var guessesLeft = 0;         //tries remaining
var wordIndex;              //index of chosen word
var spaceList = [];          //dashes matching letters in chosen word

var guessedList = [];          //list of letters guessed
var currentWord = [];       //current word 

var wins = 0;               //amount of users wins

var gameRunning = false;             //flag for game start
var gameOver = false;            //flag for game end

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
function checkGuess(letter) {
    if (guessesLeft > 0) {
        if (!gameRunning) {
            gameRunning = true;
        }
    }

    //check for repeats
    if (guessedList.indexOf(letter) === -1) {
        guessedList.push(letter);
    }

    displayToUser();
    getWin();
}


//RESET GAME FUNCTION
function resetGame() {
    guessesLeft = startTries;
    gameRunning = false;
    //clear arrays
    guessList = [];
    currentWord = [];
    //choose new random word from array
    wordIndex = movies[Math.floor(Math.random() * movies.length)];
    //put new word into spaces
    for (var i = 0; i < movies[wordIndex].length; i++) {
        currentWord.push("_");
    }
    //reset win/lose image
    document.getElementById("winLoseImage").src = "";
}



//UPDATE IMAGE UPON WIN OR LOSE
function imageUpdate() {
    document.getElementById("winLoseImage").src = "assets/images/" + WINORLOSESTATE + ".jpg";

}


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


            //check if keys are between a(65)-z(90)
            //if(event.keyPressed >= 65 && event.keyPressed <= 90)


            guessList.push(keyPressed);
            wrongTries--;
        }

    }


})





//write score to screen
document.getElementById("currentScore").innerHTML = "wins: " + wins;
document.getElementById("wrongTries").innerHTML = "Guessed Letters: " + guessList;
document.getElementById("score").innerHTML = "Turns Remaining: " + wrongTries;
document.getElementById("spaces").innerHTML = spaceList.join("");


//sounds
var wrongAnSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
var rightAnSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
