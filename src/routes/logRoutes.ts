import { Router } from 'express';
//import { LogController } from '../controllers/log.controller';

const router = Router();

// Obtenir les derniers logs
router.get('/logs', logController.getLogs);

export { router };
