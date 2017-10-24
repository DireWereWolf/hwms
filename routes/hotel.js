var express = require('express');
var router = express.Router();

var hotels = require('./../data/hotels.json');

router.get('/hotel', function (req, res) {
    var hotel = hotels[Math.floor(Math.random()*hotels.length)];
    res.json(hotel);
});

module.exports= router;
