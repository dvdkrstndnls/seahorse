var characters = require("../data/friends.js")



module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.JSON(characters)
  });
  
  app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  //outer for loop with [i]  loop over each existing characters function ingest characters
      
   
        // (function(array1, array2) caluculate difference ie compare scores "find distance between sum of 2 arrays" differnce) inner for loop using [j] loop over new character scors and compare to [i]
              //compare to me and add the 
              // add up the difference for each score (math.abs)

//var persist the closest match ie least difference 
  });
  }

  app.get("/api/friends", function(req, res) {
    res.JSON(characters)
  });
  
  app.post("/api/friends", function(req, res) {
    res.JSON(comparisonResult));