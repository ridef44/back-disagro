import { Router } from 'express';
import { body, param } from 'express-validator';
import { createAsistencia,  } from '../controllers/asistenciaController';
import { handleInputErrors } from '../middlewares';

const router = Router();



router.post('/', 
    body('usuarioId')
      .isInt().withMessage('ID de usuario no válido')
      .notEmpty().withMessage('El campo usuarioId está vacío'),
    body('fechaHora')
      .notEmpty().withMessage('El campo fechaHora está vacío')
      .isISO8601().withMessage('Fecha y hora no válidas'),
    handleInputErrors,
    createAsistencia
  );
  
export default router;
