// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/web", function(req, res){
res.render("web");
});

app.get("/design", function(req, res){
  res.render("design");
});

app.listen(3000, function(req, res){
  console.log("The server is running on port 3000");
});
