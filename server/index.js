const express = require('express');
const consola = require('consola');
const config = require('./config');
const middleware = require('./middleware');

const app = express();

app.use(middleware);

if (module === require.main) {
  const server = app.listen(config.port, () => {
    const { address } = server.address();
    const host = address === '::' ? 'localhost' : address;
    const urlSafeHost = host.includes(':') ? `[${host}]` : host;

    consola.success(`Listening on http://${urlSafeHost}:${config.port}`);
  });
}
