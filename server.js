var express = require('express');
var app = express();

var hotels = require('./data/hotels.json');

app.get('/hotels', function (req, res) {
    res.json(hotels)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});