var characters = require("../data/friend.js")



module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.JSON(characters)
  });
  
  app.post("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  }