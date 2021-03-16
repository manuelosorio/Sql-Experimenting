import express from 'express';
import path from 'path';
import chalk from 'chalk';

export const upload = express();

upload.set('views', path.join(__dirname, './'));
upload.set('view engine', 'pug');
upload.get('/', (req, res) => {
  try {
    return res.render('upload', {
      title: 'Upload Images',
    });
  } catch (e) {
    return console.log(chalk.red(e.errMessage));
  }
});
