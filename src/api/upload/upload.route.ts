import { Router } from 'express';
import { UploadController } from './upload.controller';

export const uploadRoute = Router();
const uploadController = new UploadController();

uploadRoute.post('/', uploadController.uploadContent);
