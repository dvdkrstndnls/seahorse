// //do i need to pull in the required dependencies here?
// //var path = require('path');

// //import the list of friends/characters
// var friends = require("../data/friends.js")



// module.exports = function(app) {
//   // Basic route that sends the user first to the AJAX Page
//   app.get("/", function(req, res) {
//     res.JSON(friends)
//   });
  
//   app.post("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"));

// // We will use this object to hold the "best match". We will constantly update it as we 
// 		// loop through all of the options 
// 		var bestMatch = {
//       name: "",
//       email: "",
//       zip: ""
// 			photo: "",
// 			friendDifference: 1000000
// 		};



// // Here we take the result of the user's survey POST and parse it.
// var userData 	= req.body;
// var userName 	= req.body.name;
// var email = req.body.email;
// var zip = req.body.zip
// var userPhoto 	= req.body.photo;
// var userScores 	= req.body.scores;


// var newfriends = .scores;
// var scoresArray = [];
// var friendCount = 0;
// //is bestMatch the same idea as comparison result


//   //outer for loop with [i]  loop over each existing firndss function ingest friends
//   // function(arrayFriends) {

//   //runs through all current friends in list
//   for (i = 0; i < friends.length; i++) {
//     var scoresDiff = 0;
//     //run thru scores to compare characters
//   }
   
//   function difference(arrayFriends, arrayNewFriends) {
//     //code to be executed: caluculate difference ie compare scores "find distance between sum of 2 arrays" differnce) inner for loop using [j] loop over new character scors and compare to [i]
//     for (j = 0; j < newFriend.length; j++) {
//       console.log(newFriend.length)
//       return Math.abs(a - b);
//     }
    
//     console.log(difference(3, 5));
//     // expected output: 2
//   }
//               //compare to me and add the 
//               // add up the difference for each score (math.abs)
//   }
// //var persist the closest match ie least difference 
//   });
//   }

//   //total list of character entries
//   app.get("/api/friends", function(req, res) {
//     res.JSON(friends)
//   });
  
//   //add a new character (ie friend)
//   app.post("/api/friends", function(req, res) {
//     res.JSON(comparisonResult));




    // ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on all possible friends
// ===============================================================================

var friends = require('../data/friends.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to a user's survey result
		// Then compare those results against every user in the database.
		// It will then calculate the difference between each of the numbers and the user's numbers.
		// It will then choose the user with the least differences as the "best friend match."
		// In the case of multiple users with the same result it will choose the first match.
		// After the test, it will push the user to the database. 

		// We will use this object to hold the "best match". We will constantly update it as we 
		// loop through all of the options 
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		// Here we take the result of the user's survey POST and parse it.
		var userData 	= req.body;
		var userName 	= userData.name;
		var userPhoto 	= userData.photo;
		var userScores 	= userData.scores;

		// This variable will calculate the difference between the user's scores and the scores of
		// each user in the database
		var totalDifference = 0;

		// Here we loop through all the friend possibilities in the database. 
		for  (var i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			totalDifference = 0;

			// We then loop through all the scores of each friend
			for (var j=0; j< friends[i].scores[j]; j++){

				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDifference;
				}
			}
		}

		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
		// the database will always return that the user is the user's best friend).
		friends.push(userData);

		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
		res.json(bestMatch);

	});

}