var express = require('express'),
    browserify = require('browserify'),
    BloodPressure = require('.././public/app/models/bloodPressure'),
    router = express.Router();

router.get('/api/readings', function(req, res, next) {
    var query = BloodPressure.find();
    query.exec(function(err, readings) {
        if (err) return next(err);
        res.send(readings);
    });
});

router.get('/api/readings/:id', function(req, res, next) {
    BloodPressure.findById(req.params.id, function(err, reading) {
        if (err) return next(err);
        res.send(reading);
    });
});

router.post('/api/readings', function(req, res, next) {
    var bloodPressureTest = new BloodPressure({
        date: req.body.selectedDate,
        time: req.body.selectedTime,
        systolic: req.body.systolic,
        diastolic: req.body.diastolic
    });
    bloodPressureTest.save(function(err) {
        if (err) return next(err);
        res.send(200);
    });
});

router.delete('/api/readings/:id', function(req, res, next) {
    BloodPressure.findByIdAndRemove(req.params.id, function(err, reading) {
        if (err) return next(err);
        res.send(reading);
    });
});

router.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
});

module.exports = router;