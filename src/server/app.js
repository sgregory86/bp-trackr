const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const config = require('./config/db.config.json');

const dbUrl = `mongodb://${config.host}:${config.port}/${config.database}`;

mongoose.connect(dbUrl);

const app = express();

app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
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