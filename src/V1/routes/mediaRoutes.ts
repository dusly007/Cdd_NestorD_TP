<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../data/db.json');

function readData() {
  return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

function writeData(data: any) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export const MediaService = {
  getAllMedia: async () => {
    const data = readData();
    return data.medias || [];
  },

  getMediaById: async (id: string) => {
    const data = readData();
    return data.medias.find((m: any) => m.id === id);
  },

  createMedia: async (mediaData: any) => {
    const data = readData();
    const newMedia = { id: generateId(), ...mediaData };
    data.medias.push(newMedia);
    writeData(data);
    return newMedia;
  },

  updateMedia: async (id: string, updatedMedia: any) => {
    const data = readData();
    const index = data.medias.findIndex((m: any) => m.id === id);
    if (index === -1) return null;
    data.medias[index] = { ...data.medias[index], ...updatedMedia };
    writeData(data);
    return data.medias[index];
  },

  deleteMedia: async (id: string) => {
    const data = readData();
    const index = data.medias.findIndex((m: any) => m.id === id);
    if (index === -1) return false;
    data.medias.splice(index, 1);
    writeData(data);
    return true;
  },

  getSeriesEpisodes: async (id: string) => {
    const data = readData();
    const serie = data.medias.find((m: any) => m.id === id && m.type === 'serie');
    if (!serie || !serie.saisons) return null;
    return serie.saisons.flatMap((saison: any) => saison.episodes || []);
  }
};
=======
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
>>>>>>> ce44c1ad6ba561c8bd9b4364a7abcedb869f1001
