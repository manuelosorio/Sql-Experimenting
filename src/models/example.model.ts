import { Pool, Query, queryCallback } from 'mysql';
import { Db } from '../config/db';

export class ExampleModel {
  private db: Db;

  constructor(db: Pool) {
    this.db = new Db(db);
  }

  async exampleQuery(id: number, next: queryCallback): Promise<Query> {
    return await this.db.query(
      'select name, age from example where id = ?',
      id,
      next
    );
  }
}
