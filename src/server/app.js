var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    routes = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/bp');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, {
        message: err.message
    });
});

module.exports = app;