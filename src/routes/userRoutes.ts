import { Router } from "express";
import { body, param } from 'express-validator'
import { createUser, getUsers, getUserById } from "../controllers/userController";
import { handleInputErrors } from '../middlewares'


const router = Router();

// Obtener todos los usuarios
router.get('/', getUsers);

// Obtener usuario por ID
router.get('/:id', 
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  getUserById
);

// Crear un nuevo usuario
router.post('/', 
  body('nombre')
    .notEmpty().withMessage('El campo nombre está vacío'),
  body('apellidos')
    .notEmpty().withMessage('El campo apellidos está vacío'),
  body('correo')
    .isEmail().withMessage('Correo no válido')
    .notEmpty().withMessage('El campo correo está vacío'),
  handleInputErrors,
  createUser
);

export default router;