import express from 'express';
import path from 'path';
import chalk from 'chalk';

export const home = express();

home.set('views', path.join(__dirname, './'));
home.set('view engine', 'pug');
home.get('/', (req, res) => {
  try {
    return res.render('home', {
      title: 'Lighthouse Images | Home',
      img: 'https://images.unsplash.com/photo-1504389557830-b293439b92d0',
      alt: 'Ice cream cone that was dropped.',
    });
  } catch (e) {
    return console.log(chalk.red(e.errMessage));
  }
});
