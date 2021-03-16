import { NextFunction, Request, Response } from 'express';
import chalk from 'chalk';
import multer, { MulterError } from 'multer';
import mysql from 'mysql';
import { DataBase } from '../../config/variables';
import { UploadModel } from '../../models/upload.model';
// import { ErrorHandler } from '../../views/errors/error-handler';
import path from 'path';
export class UploadController {
  uploadModel;
  multerOptions: multer.Options;
  multerStorage: multer.StorageEngine;
  constructor() {
    this.uploadModel = new UploadModel(mysql.createPool(DataBase));
    this.multerStorage = multer.memoryStorage();
    this.multerOptions = {
      limits: {
        fileSize: 1024 * 1024 * 6,
      },
      storage: this.multerStorage,
      fileFilter(
        req: Request,
        file: Express.Multer.File,
        callback: multer.FileFilterCallback
      ) {
        const ext = path.extname(file.originalname).toLowerCase();
        if (
          ext !== '.png' &&
          ext !== '.jpg' &&
          ext !== '.gif' &&
          ext !== '.jpeg'
        ) {
          return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
      },
    };
  }
  uploadContent = (req: Request, res: Response, _next: NextFunction) => {
    const uploads = multer(this.multerOptions).single('avatar');
    return uploads(req, res, async err => {
      if (err instanceof MulterError) {
        // const errorHandler = new ErrorHandler(err);
        res.render('errors', {
          title: 'Error 400',
          message: err ? `${err.code}` : 'Malformed Error',
          errorCode: 400,
          src: 'https://images.unsplash.com/photo-1597176116047-876a32798fcc',
          alt: 'Person with frowning brown bag over there head.',
        });
        return;
      }
      if (err) {
        console.error(chalk.red('Other Error:', err));
        res.render('errors', {
          title: 'Error 400',
          message: err ? `${err.code}` : 'Malformed Error',
          errorCode: 400,
          src: 'https://images.unsplash.com/photo-1597176116047-876a32798fcc',
          alt: 'Person with frowning brown bag over there head.',
        });
        return;
      }
      console.log(req.file);
      return this.uploadModel.uploadQuery(
        req.file.buffer.toString('base64'),
        (error, _results) => {
          if (error) {
            console.error(chalk.red(error));
            res.render('errors', {
              title: 'Error 500',
              message: error ? `${error.code}` : 'Sql Error',
              errorCode: 500,
              src:
                'https://images.unsplash.com/photo-1597176116047-876a32798fcc',
              alt: 'Person with frowning brown bag over there head.',
            });
            return;
          }
          return res.redirect('/gallery');
        }
      );
    });
  };
}
