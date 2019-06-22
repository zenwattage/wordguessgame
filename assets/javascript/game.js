//REFACTOR
//theme: 80's movies

var wrongGuesses = 10; 
var spaceList = [];
var letterList = [];
var guessList = [];


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
    //GET STATE OF GAME FUNCTION
    //CHECK WINSTATE FUNCTION
    //RESET GAME FUNCTION

    //check if keys are between a(65)-z(90)
    //if(event.keyPressed >= 65 && event.keyPressed <= 90)

    //game chooses title from array randomly
    var movie = movies[Math.floor(Math.random() * movies.length)];
    //NOT PREVENTING REPEATS    

    var chosenWord = movie.toLowerCase();

    //fill empty array with spaces equal to letters in chosen word
    
    for(var i = 0; i < chosenWord.length; i++) {
        spaceList[i] = "_";
    }

    //fill empty array with chosenWord seperated into characters
    
    for(var g = 0; g < chosenWord.length; g++) {
        letterList[g] = chosenWord[g];
        console.log(letterList);
    }

    
      
    //display dashes on page
    document.getElementById("spaces").innerHTML = spaceList.join("");

    var keyPressed = "";

    addEventListener("keyup", function(event) {
        keyPressed = event.key;
        //console.log(keyPressed);

        for(var j = 0; j < chosenWord.length; j++) {
            //if the index of the chosen word matches key
            if(chosenWord[j] === keyPressed){
                //update dashed line with character pressed
                rightAnSound.play();
                
                spaceList[j] = String(keyPressed);
                //console.log("In the Word: "+chosenWord[j]);
            } else {
                guessList.push(keyPressed);
            }
           
        }

        
        //write score to screen
        document.getElementById("wrongGuesses").innerHTML = "Guessed Letters: " + guessList;
        document.getElementById("score").innerHTML = "Turns Remaining: " + turns;
        document.getElementById("spaces").innerHTML = spaceList.join("");
        

        })




        //sounds
       var wrongAnSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
       var rightAnSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
       var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
       var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
