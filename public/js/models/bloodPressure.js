var mongoose = require('mongoose');

var bloodPressureSchema = new mongoose.Schema({
  date: String,
  systolic: Number,
  diastolic: Number
});

module.exports = mongoose.model('BloodPressure', bloodPressureSchema);