// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/assets', express.static('assets'));

// look in same directory for app/routing etc.
require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

// Star Wars Characters (DATA)
// =============================================================
var friends = [
  {
    name:"David",
    email: "karstenisgerman@yahoo.com",
    zip: "75206",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1,
        1
      ]
  },
  {
    name:"Kris",
    email: "krish@gmail.com",
    zip: "75206",
    photo:"https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/11401137_10102177783591113_2452561150233494324_n.jpg",
    scores:[
        4,
        5,
        2,
        3,
        4,
        1,
        2,
        4,
        3,
        3,
        2
      ]
  }
];




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
