const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const lodash = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// //connecting to our MongoDB Atlas cluster...
// mongoose.connect("mongodb://0.0.0.0:27017/journalDB");



app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
