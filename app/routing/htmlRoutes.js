// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
// functions that tell server where to find the html content to display
module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}

//path requirememt
//routesthemselves

