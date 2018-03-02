import http from 'http';
import app from './app';
import config from './config';

const server = http.createServer(app.callback());

server.listen(config.port, () => {
  /* eslint-disable no-console */
  console.log(`Server is listening on http://localhost:${config.port}`);
});
