import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const db = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  models: [__dirname + '/../models/**/*.ts'],
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default db;
