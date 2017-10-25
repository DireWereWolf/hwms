var express = require('express');
var app = express();
var router = require('./routes');

app.use('/',
    router.hotels,
    router.hotel
);

app.listen(3001, function () {
    console.log('App listening on port 3001!')
});