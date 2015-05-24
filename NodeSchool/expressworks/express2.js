var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

// var path = require('path');

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/', function(req, res) {
    res.end('Hello World!');
});

app.get('/home', function(req, res){
	res.render('index', {date: new Date().toDateString()});
});

app.post('/form', function(req, res){

	res.end(req.body.str.split('').reverse().join(''));

});

app.listen(process.argv[2]);
