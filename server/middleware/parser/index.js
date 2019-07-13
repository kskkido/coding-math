const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

module.exports = router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json());
