import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

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

//rutas de api
server.use('/api/products', router)

export default server

