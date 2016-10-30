/**
 * Created by jamie on 21/10/2016.
 */
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    scriptPath: 'piklimageprediction',
    args: ['testdata/download.jpg']
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){
    PythonShell.run('label.py', options, function (err, results) {
        res.send("Python running")
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        res.send('results: %j', results);
    });
    res.send("Welcome");
    //var image = req.query.image
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ 'product' : 'Mens T shirt' }));
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});