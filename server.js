var express = require('express');
var app = express();

var hotels = require('./data/hotels.json');

app.get('/hotels', function (req, res) {
    res.json(hotels)
});

app.get('/hotel', function (req, res) {
    var hotel = hotels[Math.floor(Math.random()*hotels.length)];
    res.json(hotel);
});

app.listen(3001, function () {
    console.log('App listening on port 3001!')
});