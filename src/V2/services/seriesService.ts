import Series from '../models/Serie';
<<<<<<< HEAD
import Season from '../models/Season';
=======
import Season from '../models/Saison';
>>>>>>> adfbe6ac4033e3e1f156bcd0ac94c14a8eb4d09b
import Episode from '../models/Episode';

// Créer une série
export const createSeries = async (title: string, genres: string[], status: string) => {
  const series = new Series({ title, genres, status });
  await series.save();
  return series;
};

// Créer une saison pour une série
export const createSeason = async (seriesId: string, seasonNo: number) => {
  const season = new Season({ seriesId, seasonNo });
  await season.save();
  return season;
};

// Créer un épisode pour une saison
export const createEpisode = async (seriesId: string, seasonId: string, epNo: number, title: string, durationMin: number) => {
  const episode = new Episode({ seriesId, seasonId, epNo, title, durationMin });
  await episode.save();
  return episode;
};

// Récupérer les épisodes d'une saison
export const getEpisodesBySeason = async (seasonId: string) => {
  return await Episode.find({ seasonId });
};
