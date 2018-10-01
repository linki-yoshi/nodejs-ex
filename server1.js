"use strict";
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));


const appRoute = require('./src/routes/route.js'); 
appRoute(app);

const port = 3000;

app.listen(port, function () {
   console.log(`Server is up and running on port numner ${port}`);
});