var path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  moment = require('moment');

var bloodPressureSchema = new mongoose.Schema({
  date: String,
  systolic: Number,
  diastolic: Number
});

var BloodPressure = mongoose.model('BloodPressure', bloodPressureSchema);

mongoose.connect('mongodb://localhost:27017/bp');

var app = express();

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/readings', function(req, res, next) {
  var query = BloodPressure.find();
  query.exec(function(err, readings) {
    if (err) return next(err);
    res.send(readings);
  });
});

app.get('/api/readings/:id', function(req, res, next) {
  BloodPressure.findById(req.params.id, function(err, reading) {
    if (err) return next(err);
    res.send(reading);
  });
});

app.post('/api/readings', function(req, res, next) {
  var bloodPressureTest = new BloodPressure({
    date: req.body.selectedDate,
    systolic: req.body.systolic,
    diastolic: req.body.diastolic
  });
  bloodPressureTest.save(function(err) {
    if (err) return next(err);
    res.send(200);
  });
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});