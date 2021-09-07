var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
})


app.post("/", function(req, res) {

    var num1 = Number(req.body.height) / 100;
    var num2 = Number(req.body.weight);
    var result = num2 / (num1 * num1);

    res.send("Your BMI is " + result);
})


app.listen("3000", function(req, res) {

});