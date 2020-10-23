const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



app.use(morgan('dev'));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())


//Router
app.use('/api/signup', require('./router/signup'));


module.exports = app;