import { Router } from 'express';
import { GetDataFromArduino, SendDataToArduino } from '../controllers/arduino.controller.js';

const router = Router();

router.post('/arduino', GetDataFromArduino);
router.get('/arduino', SendDataToArduino);

export default router;
