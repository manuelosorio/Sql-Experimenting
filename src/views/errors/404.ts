import express from 'express';
import path from 'path';

export const notFound = express();
notFound.set('views', path.join(__dirname, '../template/'));
notFound.set('view engine', 'pug');
notFound.use((req, res) => {
  res.status(404).render('errors', {
    title: 'Page not found',
    errorCode: 404,
    src: 'https://images.unsplash.com/photo-1555861496-0666c8981751',
    alt: '',
  });
});
