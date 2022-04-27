"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var User = require('./Model/userSchema');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./conn');

app.use(require('./Router/auth'));
app.listen(5000, function () {
  console.log("Listening on port 5000");
});