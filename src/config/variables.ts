import dotenv from 'dotenv';
import { PoolConfig } from 'mysql';

dotenv.config();

export const Server = {
  httpPort: process.env.HTTP_PORT,
  httpsPort: process.env.HTTP_PORT,
  environment: process.env.NODE_ENV,
};

export const DataBase: PoolConfig = {
  host: process.env.DB_URL,
  port: (process.env.DB_PORT as unknown) as number,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  debug: false,
};
