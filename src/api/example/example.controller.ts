import { Request, Response } from 'express';
import chalk from 'chalk';
import { ExampleModel } from '../../models/example.model';
import mysql, { Query } from 'mysql';
import { DataBase } from '../../config/variables';

export class ExampleController {
  constructor() {}

  getPerson(req: Request, res: Response): Promise<Query> {
    const exampleModel = new ExampleModel(mysql.createPool(DataBase));
    return exampleModel.exampleQuery(
      Number(req.params.id),
      (error, results) => {
        if (error) {
          console.error(chalk.red(error));
          return res.status(500).send(error.message);
        }
        return res.send(results[0]);
      }
    );
  }
}
