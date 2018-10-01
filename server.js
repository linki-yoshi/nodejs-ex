"use strict";
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));


const appRoute = require('./src/routes/route.js'); 
appRoute(app);

// const port = 3000;

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

    app.listen(port, ip);

// app.listen(port, function () {
//    console.log(`Server is up and running on port numner ${port}`);
// });