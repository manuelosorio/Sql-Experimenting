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
      id INT UNIQUE,
      NAME VARCHAR(255),
      age INT
  );`;

  return await db.query(query, null, (error, _results, _fields) => {
    if (error) {
      return console.log(chalk.red(error));
    }
    console.log(chalk.green('Create Table.'));
  });
}

init.get('/', (_req, res) => {
  createExampleTable();
  return res.status(200).send('Database is being initialized!');
});
