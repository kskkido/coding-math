const config = require('../webpack.config/client');

module.exports = {
  get baseUrl() {
    return process.env.BASE_URL || `http://localhost:${module.exports.port}`;
  },
  get port() {
    return process.env.PORT || 2019;
  },
  get outputPath() {
    return config.output.path;
  },
  get publicPath() {
    return config.output.publicPath;
  },
};
