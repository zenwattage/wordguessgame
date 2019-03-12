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

    var movie = movies[Math.floor(Math.random() * movies.length)];
    

    var chosenWord = movie;
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
    
    //DISPLAY CURRENT COS
    
    //display dashes on page
    document.getElementById("spaces").innerHTML = guessList.join("");

    //display chosen word on page
    document.getElementById("letters").innerHTML = chosenWord;

    //amount of turns is the amount of letters in the chosen word
    //lose turns on incorrect guesses
    
   var turns= parseInt(chosenWord.length); 
    
    console.log("Turns Remaining: " + turns);

    //console.log(typeof(random));
        
    //get key pressed by user & convert it to a
    var keyPressed = "";
    addEventListener("keyup", function(event) {
        keyPressed = event.key; 
        console.log(typeof(keyPressed));

        for(var j = 0; j < chosenWord.length; j++) {
            
            //if the index of the chosen word matches key
            if(chosenWord[j] === keyPressed){
                //update dashed line with character pressed
                rightAnSound.play();
                guessList[j] = String(keyPressed);
                //console.log("In the Word: "+chosenWord[j]);
            }
            
            else{(chosenWord[j] != keyPressed){
                turns--;
            }
        }
            
            /* else {
                //play wrong answer sound
                wrongAnSound.play();
                turns--
                
            } */
        }

        //write score to screen
        document.getElementById("score").innerHTML = "Turns Remaining: " + turns;
        document.getElementById("spaces").innerHTML = guessList.join(chosenWord[j]);
        //document.getElementById("imageTest").innerHTML = 



        })



        //sounds
       var wrongAnSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
       var rightAnSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3");
       var winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3");
       var loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3");
            
      
        
    //compare key pressed to chosen word (random)

    //if keypressed is in the chosen word
    //update spaces with correct letter(keypress)
    //if keypressed is not in chosen word
    //
    





/* 

//sounds
    this.goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
    this.badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
    this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
    this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3") */