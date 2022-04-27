const express = require('express');
const bodyParser = require('body-parser');
const User = require('./Model/userSchema');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./conn');
app.use(require('./Router/auth'));


app.listen(5000, function() {
    console.log("Listening on port 5000");
})