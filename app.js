/**
 * Created by jonathandavis on 10/7/15.
 */
var express = require('express');
var app = express();
var http = require('http');
var httpserver = http.Server(app);

// http server port
var port = 3000;

// static files
app.use(express.static(__dirname + '/public'));

//catch-all
app.use(function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

httpserver.listen(port, function(){
    console.log('http server listening on *:' + port);
});