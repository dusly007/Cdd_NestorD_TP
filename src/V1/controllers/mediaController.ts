import { Request, Response } from 'express';
import { MediaService } from '../services/mediaService';

export class MediaController {
  // Récupère films séries
  public static async getAllMedia(req: Request, res: Response): Promise<void> {
    try {
      //Erreur car j'ai pas pu faire logger mediaservice
      const media = await MediaService.getAllMedia();
      res.status(200).json(media);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des médias.' });
    }
  }

  // Récupère média par ID
  public static async getMediaById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const media = await MediaService.getMediaById(id);
      if (media) {
        res.status(200).json(media);
      } else {
        res.status(404).json({ message: 'Média non trouvé.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération du média.' });
    }
  }

  // Ajouter nouveau média (film série)
  public static async createMedia(req: Request, res: Response): Promise<void> {
    const mediaData = req.body;
    try {
      const newMedia = await MediaService.createMedia(mediaData);
      res.status(201).json(newMedia);
    } catch (error) {
      res.status(400).json({ message: 'Erreur lors de l\'ajout du média.', error });
    }
  }

  // Modifier média existant (film série)
  public static async updateMedia(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const mediaData = req.body;
    try {
      const updatedMedia = await MediaService.updateMedia(id, mediaData);
      if (updatedMedia) {
        res.status(200).json(updatedMedia);
      } else {
        res.status(404).json({ message: 'Média non trouvé pour la mise à jour.' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Erreur lors de la mise à jour du média.' });
    }
  }

  // Supprimer un média
  public static async deleteMedia(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const deleted = await MediaService.deleteMedia(id);
      if (deleted) {
        res.status(200).json({ message: 'Média supprimé avec succès.' });
      } else {
        res.status(404).json({ message: 'Média non trouvé pour la suppression.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression du média.' });
    }
  }

  // Récupère épisodes d'une série spécifique
  public static async getSeriesEpisodes(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const episodes = await MediaService.getSeriesEpisodes(id);
      if (episodes) {
        res.status(200).json(episodes);
      } else {
        res.status(404).json({ message: 'Aucun épisode trouvé pour cette série.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des épisodes.' });
    }
  }
}
