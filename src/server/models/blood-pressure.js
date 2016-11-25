var mongoose = require('mongoose');

var BloodPressureSchema = new mongoose.Schema({
  date: String,
  time: String,
  systolic: Number,
  diastolic: Number
});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema);