var mongoose = require('mongoose');

var bloodPressureSchema = new mongoose.Schema({
  date: String,
  time: String,
  systolic: Number,
  diastolic: Number
});

module.exports = mongoose.model('BloodPressure', bloodPressureSchema);