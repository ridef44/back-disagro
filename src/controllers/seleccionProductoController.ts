import { Request, Response } from 'express';
import SeleccionProductos from '../models/seleccionProductos.model';
import Asistencia from '../models/asistencia.model';
import Producto from '../models/producto.model';
import { Transaction } from 'sequelize';

export const getSeleccionProductos = async (req: Request, res: Response) => {
  try {
    const asistenciaProductos = await SeleccionProductos.findAll();
    res.status(200).json({ data: asistenciaProductos });
  } catch (error) {
    console.error('Error al obtener asociaciones:', error);
    res.status(500).json({ error: 'Error al obtener asociaciones' });
  }
};

export const createSeleccion = async (req: Request, res: Response) => {
  const { asistenciaId, productoId } = req.body;
  try {
    // Validar los datos de entrada
    if (!asistenciaId || !productoId) {
      return res.status(400).json({ error: 'asistenciaId y productoId son requeridos' });
    }

    const existeAsistencia = await Asistencia.findByPk(asistenciaId);
    const existeProducto = await Producto.findByPk(productoId);

    if (!existeAsistencia || !existeProducto) {
      return res.status(404).json({ error: 'Asistencia o Producto no encontrado' });
    }

    // Crear la nueva selección de producto
    const seleccion = await SeleccionProductos.create({ asistenciaId, productoId });

    res.status(201).json({ data: seleccion });
  } catch (error) {
    console.error('Error al crear la selección:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
