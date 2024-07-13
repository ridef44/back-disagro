import { Request, Response } from 'express';
import SeleccionProductos from '../models/seleccionProductos.model';

// Obtener todas las selecciones de productos
export const getSeleccionProductos = async (req: Request, res: Response) => {
  try {
    const asistenciaProductos = await SeleccionProductos.findAll();
    res.status(200).json({ data: asistenciaProductos });
  } catch (error) {
    console.error('Error al obtener asociaciones:', error);
    res.status(500).json({ error: 'Error al obtener asociaciones' });
  }
};

// Crear una nueva selección de producto
export const createSeleccion = async (req: Request, res: Response) => {
  try {
    const { asistenciaId, productoId } = req.body;

    // Validar los datos de entrada
    if (!asistenciaId || !productoId) {
      return res.status(400).json({ error: 'asistenciaId y productoId son requeridos' });
    }

    // Crear la nueva selección de producto
    const seleccion = await SeleccionProductos.create({ asistenciaId, productoId });

    res.status(201).json({ data: seleccion });
  } catch (error) {
    console.error('Error al crear la selección:', error);
    res.status(500).json({ error: 'Error al crear la selección' });
  }
};