import { Request, Response } from 'express';
import Asistencia from '../models/asistencia.model';



export const createAsistencia = async (req: Request, res: Response) => {
  const { usuarioId, fechaHora, montoFinal  } = req.body;

  try {
  
    // Crear la asistencia con el monto final recibido del frontend
    const nuevaAsistencia = await Asistencia.create({
      usuarioId,
      fechaHora,
      montoFinal
    });

   
 
    res.status(201).json({ data: nuevaAsistencia });
  } catch (error) {
    console.error('Error al crear asistencia:', error);
    res.status(500).json({ error: 'Error al crear asistencia' });
  }
};
