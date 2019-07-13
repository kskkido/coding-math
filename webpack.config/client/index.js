const merge = require('webpack-merge');
const base = require('./base');
const development = require('./development');
const production = require('./production');

module.exports = merge(
  base,
  process.env.NODE_ENV === 'production' ? production : development,
);
