var express = require('express');
var app = express();
var port = process.env.port || 22999;

var bodyParser = require('body-parser');
var cors = require('cors');

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var productController = require('./controller/productController')();
app.use("/cbstest", productController);


app.listen(port, function () {
  var datetime = new Date();
  var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
  console.log(message);
});
