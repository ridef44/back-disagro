import { Request, Response } from 'express';
import Usuario from '../models/user.model';

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { nombre, apellidos, correo } = req.body;
    const usuario = await Usuario.create({ nombre, apellidos, correo });
    res.status(201).json({ data: usuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

// Obtener todos los usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({ data: usuarios });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener usuario por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ data: usuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
};
