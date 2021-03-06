

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var quotes = require("./quotes.js");
// app.get('/css/style.css', function(req, res) {
//    res.sendFile(__dirname + '/static/css/style.css'); 
// });
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', routes);

app.get('/', function(req, res, next) {
    res.render('index.html');
});
/* GET home page. */
app.get('/index', function(req, res, next) {
    res.render('index.html');
});
app.get('/index.html', function(req, res, next) {
    res.render('index.html');
});

app.get('/api/quote', function(req, res) {
    quotes.getQuoteFromDB(function(err,q){
        res.json(q);
    });
});

app.get('/api/quotes', function(req, res) {
    quotes.getQuotesFromDB(function(err,q){
        res.json(q);
    });
});


 app.use(express.static('./public'));

 console.log("go to local with port 3000");



module.exports = app ; 




