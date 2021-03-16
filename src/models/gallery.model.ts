import { Pool, Query, queryCallback } from 'mysql';
import { Db } from '../config/db';

export class GalleryModel {
  private db: Db;
  constructor(db: Pool) {
    this.db = new Db(db);
  }
  async getImages(next: queryCallback): Promise<Query> {
    return await this.db.query('SELECT image FROM `image` ', null, next);
  }
}
