//theme: 80's movies
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



//game chooses title from array randomly
//prevent repeats

var random = movies[Math.floor(Math.random() * movies.length)];
console.log(random);


//fill empty array with spaces equal to letters in chosen word
var guessList = [];
for(var i = 0; i < random.length; i++) {
    guessList[i] = "_";
}
console.log(guessList);
var blankSpaces = random.length;

console.log(blankSpaces);
//display dashes on page

//document.getElementById("message").innerHTML = guessList;
/* //while word has no been guessed {
    show the player current score 
    Get guess from player
} */


while (blankSpaces > 0) {
    guessList.join(" ");

    //var userGuess = onkeyup.key;
    if ( userGuess === null) {
        //exit the game
        break;
    } else if ( userGuess.length !== 1) {
        alert("Only enter a single letter.");
    } else {
        //update blank spaces with guess
        for ( var j = 0; j < random.length; j++){
            if(random[j] === userGuess) {
                guessList[j] = userGuess;
                blankSpaces--;
            }
        }
    }
}


//while (blankSpaces > 0) {
    //show score
    //get guesses
    //update score and blankSpaces each correct guess
//}

//if guess is > single letter
// promp for single letter guess

//if userGuess is in the word
// update score


//you lose!
//you win!



//sounds
    this.goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
    this.badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
    this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
    this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3")