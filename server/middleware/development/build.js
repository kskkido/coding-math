const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('../../../webpack.config/client');

const router = express.Router();
const compiler = webpack(config);

module.exports = router
  .use(
    devMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  )
  .use(
    hotMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
    }),
  );
