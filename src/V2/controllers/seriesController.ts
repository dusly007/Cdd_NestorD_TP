import { Request, Response } from 'express';
import { MediaService } from '../services/mediaService';

export class SerieController {
  // Retourne tous les épisodes d’une série (toutes les saisons)
  public static async getEpisodesBySerieId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const episodes = await MediaService.getSeriesEpisodes(id);
      if (!episodes || episodes.length === 0) {
        res.status(404).json({ message: 'Aucun épisode trouvé pour cette série.' });
      } else {
        res.status(200).json(episodes);
      }
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des épisodes.' });
    }
  }
}
