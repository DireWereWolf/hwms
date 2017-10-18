var fs = require('fs');
var hotelModel = require('../models/hotel');

var collection = [
    {
        title: 'Title 1',
        image: 'http://via.placeholder.com/200x200'
    },
    {
        title: 'Title 2',
        image: 'http://via.placeholder.com/200x200'
    },
    {
        title: 'Title 3',
        image: 'http://via.placeholder.com/200x200'
    },
    {
        title: 'Title 4',
        image: 'http://via.placeholder.com/200x200'
    }
];

var writeFile = JSON.stringify(collection.map(function (item) { return new hotelModel(item) }));

fs.writeFile("./data/hotels.json", writeFile, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});