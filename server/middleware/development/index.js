const express = require('express');
const morgan = require('morgan');
const build = require('./build');

const router = express.Router();

module.exports = router.use(morgan('combined')).use(build);
