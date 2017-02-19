const mongoose = require('mongoose');

const BloodPressureSchema = new mongoose.Schema({
  date: String,
  time: String,
  systolic: Number,
  diastolic: Number
});

module.exports = mongoose.model('BloodPressure', BloodPressureSchema);