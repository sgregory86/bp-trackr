var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});