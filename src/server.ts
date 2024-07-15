import express from 'express'
import productRoutes from './routes/productRoutes'
import db from './config/db'
import colors from 'colors'
import cors from 'cors'
import usuarioRoutes from './routes/userRoutes';
import asistenciaRoutes from './routes/asistenciaRoute';
import seleccionProductos from './routes/seleccionProductoRoutes'
import 'reflect-metadata';
import './sequelize';




async function conectDB () {
    try {
        await db.authenticate()
        db.sync() 
        console.log(colors.blue( 'Conexion correcta a BD'))
    } catch (error) {
        console.log(error)
        console.log( colors.red('Hubo un error al conectar a la base de datos'))
        
    }
    
}

conectDB()

//Servidor de express
const server = express()

//Datos para lectura de formuñariops
server.use(express.json())

server.use(cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000'
  }));
  

//Ruta de productos
server.use('/api/products', productRoutes) 
//Ruta de usuarios
server.use('/api/usuarios', usuarioRoutes);
//Ruta de asistencia
server.use('/api/asistencias', asistenciaRoutes);

//SelecciónProductos
server.use('/api/seleccionProducto', seleccionProductos);



export default server

