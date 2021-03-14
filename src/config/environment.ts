import express from 'express';
import { Server } from './variables';
import { development } from './enviornment/dev';
import { production } from './enviornment/prod';
import { init } from './enviornment/init';

export const environment = express();
switch (Server.environment) {
  case 'Development':
  case 'development':
    environment.use(development);
    break;
  case 'Init':
  case 'init':
    environment.use('/init', init);
    break;
  case 'Production':
  case 'production':
    environment.use(production);
    break;
}
