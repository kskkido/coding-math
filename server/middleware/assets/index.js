const path = require('path');
const express = require('express');
const config = require('../../config');

const router = express.Router();

module.exports = router
  .use(config.publicPath, express.static(config.outputPath))
  .get('*', (_, res) => {
    res.sendFile(path.join(config.outputPath, 'index.html'));
  });
