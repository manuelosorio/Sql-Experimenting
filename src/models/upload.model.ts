import { Pool, queryCallback } from 'mysql';
import { Db } from '../config/db';

export class UploadModel {
  private db: Db;
  constructor(db: Pool) {
    this.db = new Db(db);
  }
  async uploadQuery(file, next: queryCallback) {
    return await this.db.query(
      'INSERT INTO `image` (image) VALUES (?)',
      file,
      next
    );
  }
}
