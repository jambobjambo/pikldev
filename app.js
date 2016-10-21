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
    res.send(JSON.stringify({ a: 1 }));
});

app.use("/",router);

app.listen(3000,function(){
    console.log("Live at Port 3000");
});
