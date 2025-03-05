import { Router } from "express"
import { getFruits, getPin, selectFruit } from '../controller/fruits.controllers.js'

const router = Router();

// Ruta para obtener la lista de frutas
router.get('/', getFruits);

// Verificar conexión con MySQL
router.get('/ping', getPin)

// Ruta para obtener la lista de frutas desde MySQL
router.get('/fruits', selectFruit);


export default router;