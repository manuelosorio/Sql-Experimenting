import express from 'express';
import mysql from 'mysql';
import { Db } from '../db';
import { DataBase } from '../variables';
import chalk from 'chalk';

export const init = express();

const db = new Db(mysql.createPool(DataBase));

/*
  Creates Example Table
*/
async function createExampleTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS example(
      id INT UNIQUE auto_increment,
      name VARCHAR(255),
      age INT
  ) ENGINE = InnoDB;;`;
  return db
    .query(query, null, (error, _results, _fields) => {
      if (error) {
        return console.log(chalk.red(error));
      }
    })
    .finally(() => {
      console.log(chalk.green('Create Example Table.'));
    });
}

async function createImageTable() {
  const query = `
    CREATE TABLE image(
      id INT NOT NULL AUTO_INCREMENT,
      image LONGBLOB NOT NULL,
      PRIMARY KEY(id)
    ) ENGINE = InnoDB;
    `;

  return db
    .query(query, null, (error, results, _fields) => {
      if (error) {
        return console.log(chalk.red(error));
      }
      console.log(results);
    })
    .finally(() => {
      console.log(chalk.green('Create Image Table.'));
    });
}

init.get('/', (_req, res) => {
  createExampleTable();
  createImageTable();
  return res.status(200).send('Database is being initialized!');
});
