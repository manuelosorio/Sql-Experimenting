import express, { Application } from 'express';
import path from 'path';

export class ErrorHandler {
  private errorHandler: Application;
  readonly error;
  constructor(error?: any) {
    this.setErrorHandler();
    this.error = error;
  }
  private setErrorHandler(): void {
    this.errorHandler = express();
    this.errorHandler.set('views', path.join(__dirname, '../template/'));
    this.errorHandler.set('view engine', 'pug');
  }
  public getErrorHandler(): Application {
    return this.errorHandler;
  }
  notFound = (_req, res) => {
    res.status(404).render('errors', {
      title: '404 - Page not found',
      message: 'Page not found',
      errorCode: 400,
      src: 'https://images.unsplash.com/photo-1555861496-0666c8981751',
      alt: '',
    });
  };

  public badRequest = {
    title: 'Err 400',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    message: this.error ? `${this.error.code}` : 'Malformed Error',
    errorCode: 400,
    src: 'https://images.unsplash.com/photo-1597176116047-876a32798fcc',
    alt: 'Person with frowning brown bag over there head.',
  };
}
