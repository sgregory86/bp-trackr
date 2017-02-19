const express = require('express');
const BloodPressure = require('../models/blood-pressure');
const router = express.Router();

router.get('/api/readings', (req, res, next) => {
  let query = BloodPressure.find();
  query.exec((err, readings) => {
    if (err) return next(err);
    res.send(readings);
  });
});

router.get('/api/readings/:id', (req, res, next) => {
  BloodPressure.findById(req.params.id, (err, reading) => {
    if (err) return next(err);
    res.send(reading);
  });
});

router.post('/api/readings', (req, res, next) => {
  let bloodPressure = new BloodPressure({
    date: req.body.selectedDate,
    time: req.body.selectedTime,
    systolic: req.body.systolic,
    diastolic: req.body.diastolic
  });
  bloodPressure.save((err) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
});

router.delete('/api/readings/:id', (req, res, next) => {
  BloodPressure.findByIdAndRemove(req.params.id, (err, reading) => {
    if (err) return next(err);
    res.send(reading);
  });
});

router.get('*', (req, res) => {
  res.redirect('/#' + req.originalUrl);
});

module.exports = router;