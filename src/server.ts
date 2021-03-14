import express from 'express';
import http from 'http';
import { api } from './api/api-index';
import * as variables from './config/variables';
import { environment } from './config/environment';

const app = express();
app.use(environment);
const server = new http.Server(app);
app.use('/', api);
app.set('port', variables.Server.httpPort || 3000);

server.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
