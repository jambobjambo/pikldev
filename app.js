/**
 * Created by jamie on 21/10/2016.
 */
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'product' : 'Mens T shirt' }));
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});