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
    document.getElementById("wins").innerText = wins;
    document.getElementById("currentWord").innerText="";
    for(var i = 0; i < currentWord.length; i ++){
        document.getElementById("currentWord").innerText += currentWord[i];
    }

    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("guessedList").innerText = guessedList;






};


//GET GUESS FUNCTION
function makeGuess(letter) {
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
};


//CHECK FOR MATCHING KEY PRESSES IN CHOSEN STRING 
function checkGuess(letter){
    var pos = [];

    for(var i = 0 ; i < movies[wordIndex].length; i++) {
        if(movies[wordIndex][i] === letter){
        pos.push(i);
        }
    }

    if(pos.length <= 0) {
        guessesLeft--;
        //updateimage
    } else {
        //replace _ on page with matched letter
        for(var i = 0; i < pos.length; i++){
            currentWord[pos[i]] = letter;
        }
    }

};


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

    //guessed word
    for (var i = 0; i < movies[wordIndex].length; i++){
        currentWord.push("_");
    }

    //hide images
    document.getElementById("tryagain").style.cssText = "display:none";
    document.getElementById("youlose").style.cssText = "display:none";
    document.getElementById("youwin").style.cssText = "display:none";

    //dislay to user
    displayToUser();
};



//UPDATE IMAGE UPON WIN OR LOSE
function imageUpdate() {
    document.getElementById("winLoseImage").src = "assets/images/" + (startTries - guessesLeft) +".jpg";
};


document.onkeydown = function(event) {
    //if game is not running reset game
    if(gameOver){
        resetGame();
        gameOver = false;
    } else {
        //accepting only a(65) through z(90) keys
        if(event.keyCode >= 65 && event.keyCode <= 90){
            makeGuess(event.key.toLowerCase());
        }
    }
}




//GET STATE OF GAME FUNCTION
function getWin() {
    if(currentWord.indexOf("_") === -1) {
        document.getElementById("winImage").style.cssText = "display: block";
        document.getElementById("loseImage").style.cssText = "display: block";
        wins++;
        gameOver = true;
    }

};

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
