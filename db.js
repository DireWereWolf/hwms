var mongoose = require('mongoose');

var dbHost = 'localhost',
    dbPort = '27017',
    database = 'ThomasCook';

// Connection URL
var url = 'mongodb://' + dbHost + ':' + dbPort + '/' + database;

mongoose.createConnection(url, {
    useMongoClient: true
});

module.exports = mongoose.connect(url);


