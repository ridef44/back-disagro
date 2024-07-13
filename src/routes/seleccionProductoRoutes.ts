import { Router } from 'express';
import { getSeleccionProductos, createSeleccion } from '../controllers/seleccionProductoController';

const router = Router();

// Obtener todas las selecciones
router.get('/', getSeleccionProductos);

// Obtener todas las selecciones
router.post('/', createSeleccion);

export default router;
