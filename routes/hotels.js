var express = require('express');
var router = express.Router();

var hotels = require('./../data/hotels.json');

router.get('/hotels', function (req, res) {
    res.json(hotels)
});

module.exports= router;
