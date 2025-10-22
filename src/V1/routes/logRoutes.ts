import { Router } from 'express';
import { LogController } from '../controllers/logController';

const router = Router();

// Obtenir les derniers logs
router.get('/logs', LogController.getLogs);

export { router };
