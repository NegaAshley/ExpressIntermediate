//Run npm install express
//Run node app.js
var express = require("express");
var app = express();

app.get("/", function(req, res){
    console.log("Someone made a request to root!");
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "Suzy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Ashley"}
    ];
    
    res.render("posts.ejs", {posts: posts});
});

//Undefined route
app.get("*", function(req, res){
    console.log("Undefined route requested");
    res.send("<h1>Sorry, page not found...<h1><h2>What are you doing with your life?<h2>");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});