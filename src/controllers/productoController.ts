import { Request, Response } from "express";
import Producto from "../models/producto.model";


//obtener productos

export const getProduct = async (req: Request, res: Response) => {
    try {
        const products = await Producto.findAll({
            order: [
                ['price', 'DESC']
            ]
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

//Traer producto por id
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Producto.findByPk(id)

        if(!product) {
            return res.status(404).json({
                error: 'Producto No Encontrado'
            })
        }

        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

//Modificar productos
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    // Actualizar
    await product.update(req.body)
    await product.save()
    res.json({data: product})
}



//Crear productos
export const createProduct = async (req : Request, res : Response) => {
    try {
        const product = await Producto.create(req.body)
        res.status(201).json({data: product})
    } catch (error) {
        console.log(error)
    }
}

//modificar con patch
export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    // Actualizar
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({data: product})
}

//Borrar porductos
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)

    if(!product) {
        return res.status(404).json({
            error: 'Producto No Encontrado'
        })
    }
    
    await product.destroy()
    res.json({data: 'Producto Eliminado'})
}