var express = require('express');
var app = express();
var fs = require('fs');



// var path = require('path');
// app.use(express.static(process.argv[3]));

// app.use(require('stylus').middleware(process.argv[3]));

app.put('/message/:id', function(req, res) {

    res.end(require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex'));

});

app.get('/search', function(req, res){
	res.json(req.query);
});

app.get('/books', function(req, res){
	fs.readFile(process.argv[3], function(err, data){
		// object = JSON.parse(data);

		// console.log(data);

		res.json(JSON.parse(data));
	});
});

app.listen(process.argv[2]);
