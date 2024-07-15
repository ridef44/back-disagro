import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import Producto from '../models/producto.model';
import Asistencia from '../models/asistencia.model';
import SeleccionProductos from '../models/seleccionProductos.model';
import Usuario from '../models/user.model';

dotenv.config({ path: '.env' });

const db = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  models: [Producto, Asistencia, SeleccionProductos, Usuario], 
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default db;
