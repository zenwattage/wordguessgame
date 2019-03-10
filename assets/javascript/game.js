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
    

    var chosenWord = random;
    //console.log(typeof(chosenWord));

    //fill empty array with spaces equal to letters in chosen word
    var guessList = [];
    for(var i = 0; i < chosenWord.length; i++) {
        guessList[i] = "_";
    }

    //fill empty array with chosenWord seperated into characters
    var letterList = [];
    for(var g = 0; g < chosenWord.length; g++) {
        letterList[g] = chosenWord[g];
        console.log(letterList);
    }

    //console.log(guessList);
    
    //DISPLAY CURRENT SCORE
    
    //display dashes on page
    document.getElementById("spaces").innerHTML = guessList.join("");

    //display chosen word on page
    document.getElementById("letters").innerHTML = chosenWord;

    //amount of turns is the amount of letters in the chosen word
    //lose turns on incorrect guesses
    
    var turns= chosenWord.length;
    
    console.log("Turns Remaining: " + turns);

    //console.log(typeof(random));

    //while turns > 0 {
    
    //get key pressed by user
    var keyPressed = "";
    addEventListener("keyup", function(event) {
        keyPressed = String(event);
        console.log("keyPressed type is: " + typeof(keyPressed));
        //convert keyPressed from object to char



        for(var lettercheck = 0; lettercheck < letterList.length; lettercheck++) {
            console.log(keyPressed);
            if(keyPressed == letterList[lettercheck]){
                console.log(keyPressed);
                console.log(letterList[lettercheck]);
            }
        }


        
    })
        
    //compare key pressed to chosen word (random)

    //if keypressed is in the chosen word
    //update spaces with correct letter(keypress)
    //if keypressed is not in chosen word
    //
    







//sounds
    this.goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
    this.badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
    this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
    this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3")