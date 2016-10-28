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
    pythonPath: 'ImageCheck',
    pythonOptions: ['-u'],
    scriptPath: 'ImageCheck/label.py',
    args: ['testdata/download.jpg']
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){
    PythonShell.run('piklimageprediction/label.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
    //var image = req.query.image
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ 'product' : 'Mens T shirt' }));
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});