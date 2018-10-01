 const route = app => {
 
	const express = require("express");
	const router = express.Router();
	const path = require('path');

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
     });

}; 

module.exports = route; 