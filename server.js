//requiring our dependencies
var express = require("express");
var path = require("path");
//setting up express app
var app = express();
var PORT = process.env.PORT || 3000;
//setup for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//reservation data
var reservation = [
    {
      customerName: "john",
      phoneNumber: "9259001000",
      email: "nkjf@sbcglobal.net",
      uniqueID: 29,
    },]
var waitlist = [
    {
        customerName: "ray",
        phoneNumber: "5106667000",
        email: "townbiz510@gmail.com",
        uniqueID: 30,
    }
]

    // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    //res.sendFile(path.join(__dirname, "tables.html"));
    return res.json([waitlist,reservation]);
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
//creating new reservation to take in JSON
  app.post("/reservation", function(req, res) {
    var newreservation = req.body;
    // console logging & pushing
      console.log(newreservation);
    
      reservation.push(newreservation);
  });



  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });