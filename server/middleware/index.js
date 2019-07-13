const express = require('express');
const bodyParser = require('body-parser');
const consola = require('consola');
const assetsMiddleware = require('./assets');
const parserMiddleware = require('./parser');

const router = express.Router();

module.exports = router
  .use(parserMiddleware)
  .use(
    process.env.NODE_ENV === 'production'
      ? require('./production')
      : require('./development'),
  )
  .use(assetsMiddleware)
  .use((_, res, err) => {
    consola.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  });
