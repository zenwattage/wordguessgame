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

    
    //display dashes on page
    document.getElementById("spaces").innerHTML = guessList.join("");
    document.getElementById("letters").innerHTML = random;

    var blankSpaces = random.length;

    console.log(blankSpaces);



//sounds
    this.goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
    this.badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
    this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
    this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3")