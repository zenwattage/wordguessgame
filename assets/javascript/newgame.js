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


var keyPress;


//function to get a random title from the array of movies
    function getRandom(array) {
        var getRandom = array[Math.floor(Math.random() * movies.length)];
        return getRandom;
    }

    var movieTitle = getRandom(movies);
    var turns = movieTitle.length;

    console.log(movieTitle);
    console.log(turns);
    console.log(typeof(turns));

    //output dashes equal to letters in title
    var dashArray = [];
    
    for(var i = 0; i < turns; i++) {
            dashArray[i] = "_";
        }
    
    console.log(dashArray);
 function logKey() {
     
     
 }

document.addEventListener("keypress", logKey)




    
    