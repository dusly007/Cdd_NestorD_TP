import { Router } from 'express';
import { SerieController } from '../controllers/seriesController';

const router = Router();

// Route pour obtenir les épisodes d’une série spécifique
router.get('/series/:id/episodes', SerieController.getEpisodesBySerieId);

export default router;
