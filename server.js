// ========================= always first
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');

// ========== invoke app - always second
var app = express();

// ========== setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// ==================== all routes here
app.get('/', function (req, res){
    res.render('index');
  });

var user = {};
app.post('/process', function (req, res){
    user['name'] = req.body.name;
    user['location'] = req.body.location,
    user['language'] = req.body.language,
    user['comment'] = req.body.comment

    res.redirect('/result');
})

app.get('/result', function(req,res){
    res.render("info", user);
})

app.post('/back', function(req,res){
    res.redirect('/');
})

// ==================== listen is the last part
app.listen(8000, function() {
    console.log("listening on port 8000");
  })