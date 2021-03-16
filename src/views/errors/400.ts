import express, { Response, Request } from 'express';
import path from 'path';

const templatePath = path.join(__dirname, '../template/');
export const badRequest = express()
  .set('views', templatePath)
  .set('view engine', 'pug');

export const renderBadRequest = (req: Request, res: Response, error?: any) => {
  const errBadRequest = express();
  const templatePath = path.join(__dirname, '../template/');
  errBadRequest.set('views', templatePath);
  errBadRequest.set('view engine', 'pug');
  return errBadRequest.use((req, res, next) => {
    next(
      res.status(400).render('errors-test', {
        title: 'Err 400',
        message: error ? `${error.code}` : 'Malformed Error',
        errorCode: 400,
        src: 'https://images.unsplash.com/photo-1597176116047-876a32798fcc',
        alt: 'Person with frowning brown bag over there head.',
      })
    );
  });
};
