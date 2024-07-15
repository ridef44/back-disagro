import { Router } from 'express';
import { getSeleccionProductos, createSeleccion } from '../controllers/seleccionProductoController';

const router = Router();


router.get('/', getSeleccionProductos);


router.post('/', createSeleccion);

export default router;
