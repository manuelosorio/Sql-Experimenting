import express from 'express';
import { exampleRoute } from './example/example.route';
import { home } from '../views/home/home';
import { notFound } from '../views/errors/404';

export const api = express();

api.use('/api/example', exampleRoute);
api.use('/assets', express.static('public/assets'));
api.use('/', home);
api.use(notFound);
