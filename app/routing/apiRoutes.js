//do i need to pull in the required dependencies here?
//var path = require('path');

//import the list of friends/characters
var characters = require("../data/friends.js")



module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.JSON(characters)
  });
  
  app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));


var newCharacter = req.body.scores;
var scoresArray = [];
var characterCount = 0;
//is bestMatch the same idea as comparison result
var bestMatch

  //outer for loop with [i]  loop over each existing characters function ingest characters
  // function(arrayCharacters) {
    
  //runs through all current characters in list
  for (i = 0; i < characters.length; i++) {
    var scoresDiff = 0;
    console.log(characters.length)
  }
   
  function difference(arrayCharacters, arrayNewCharacter) {
    //code to be executed: caluculate difference ie compare scores "find distance between sum of 2 arrays" differnce) inner for loop using [j] loop over new character scors and compare to [i]
    for (j = 0; j < characters.length; j++) {
      console.log(characters.length)
      return Math.abs(a - b);
    }
    
    console.log(difference(3, 5));
    // expected output: 2
  }
              //compare to me and add the 
              // add up the difference for each score (math.abs)
  }
//var persist the closest match ie least difference 
  });
  }

  //total list of character entries
  app.get("/api/friends", function(req, res) {
    res.JSON(characters)
  });
  
  //add a new character (ie friend)
  app.post("/api/friends", function(req, res) {
    res.JSON(comparisonResult));