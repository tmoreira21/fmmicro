var express = require('express');
var app = express();
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/form.htm'));
});

app.get('/get-file-size', multipartMiddleware, function(req,res){
    res.send('No file sent.');
});

app.post('/get-file-size', multipartMiddleware, function(req,res){
    res.send(JSON.stringify({'File size' : req.files.file.size.toString() + ' bytes'}));
});

app.listen(8080,function(){
    console.log('Listening on port 8080');
});