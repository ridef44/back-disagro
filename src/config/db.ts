import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"

dotenv.config({path:'.env'})

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    models:[__dirname + '/../models/**/*.ts'],
    logging: false
  });

  export default db
