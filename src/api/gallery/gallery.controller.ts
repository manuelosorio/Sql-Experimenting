import mysql from 'mysql';
import { DataBase } from '../../config/variables';
import { GalleryModel } from '../../models/gallery.model';

export class GalleryController {
  galleryModel;
  constructor() {
    this.galleryModel = new GalleryModel(mysql.createPool(DataBase));
  }
  getContent = (_req, res, next) => {
    return this.galleryModel.getImages((error, results) => {
      if (error) {
        return next(error.message);
      }
      const data: Buffer = results.map(result => {
        return Buffer.from(result.image, 'base64');
      });
      res.status(200).render('gallery', {
        gallery: data,
      });
      // res.send(data[0]);
    });
  };
}
