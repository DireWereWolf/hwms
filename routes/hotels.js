var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./../db');

var hotels = require('./../data/hotels.json');

var hotelsSchema = new Schema({
    id: Number,
    title: String,
    image: String
}, {collection: 'hotels'});

var dbHotels = mongoose.model('hotels', hotelsSchema);

router.get('/hotels', function (req, res) {
    dbHotels.find()
        .then(function (docs) {
            res.json(docs || hotels)
        });
});

module.exports= router;
