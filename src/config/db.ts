import { MysqlError, Pool, PoolConnection, Query, queryCallback } from 'mysql';
import chalk from 'chalk';

export class Db {
  db: Pool;

  /**
   * Initialize Database
   * @param db
   */
  constructor(db: Pool) {
    this.db = db;
  }

  /**
   * Retrieve Database Connection
   */

  getConnection(): Pool {
    this.db.getConnection((err: MysqlError, connection: PoolConnection) => {
      const errMessage =
        'Connection to database base refused. ' +
        'Please check that connection details are correct and that the database is running.';
      if (err) return console.error(chalk.red(errMessage));
      console.log('Connected to Database');
      if (connection) {
        connection.release();
        console.log('Connection has been released!');
      }
    });
    return this.db;
  }

  /**
   * Run Database Queries
   * @param query SQL query
   * @param params
   * @param next (MysqlError, fields, results)
   */
  async query(
    query: string,
    params: unknown | null,
    next: queryCallback
  ): Promise<Query> {
    return !params
      ? this.getConnection().query(query, next)
      : this.getConnection().query(query, params, next);
  }
}
