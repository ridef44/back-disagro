import { Router } from "express";
import { createProduct } from "./controllers/productoController";

const router = Router()

//routing
router.get('/', (req, res)=>{
    res.send('Desde GET')
})

//Metodo Post
router.post('/', createProduct)


//routing
router.patch('/', (req, res)=>{
    res.send('Desde Patch')
})

//routing
router.delete('/', (req, res)=>{
    res.send('Desde Delete')
})

export default router
