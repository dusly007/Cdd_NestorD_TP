import { Router } from 'express';
import { MediaController } from '../controllers/mediaController';
import { validateMedia} from '../middlewares/Validation';
import { authenticate } from '../middlewares/authentification';

const router = Router();

// Liste films, séries
router.get('/medias', MediaController.getAllMedia);

// Obtenir média par id
router.get('/medias/:id', MediaController.getMediaById);

// Ajouter film  série - admin
router.post('/medias', authenticate, validateMedia, MediaController.createMedia);

// Modifier média film série - admin
router.put('/medias/:id', authenticate,validateMedia, MediaController.updateMedia);

// Supprimer film série - admin
router.delete('/medias/:id', authenticate, MediaController.deleteMedia);

// Obtenir épisodes série spécifique
router.get('/series/:id/episodes', MediaController.getSeriesEpisodes);

export { router };
