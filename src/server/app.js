const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/bp');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send(500, {
    message: err.message
  });
});

module.exports = app;