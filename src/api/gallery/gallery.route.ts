import { Router } from 'express';
import { GalleryController } from './gallery.controller';

export const galleryRoute = Router();
const galleryController = new GalleryController();

galleryRoute.get('/', galleryController.getContent);
