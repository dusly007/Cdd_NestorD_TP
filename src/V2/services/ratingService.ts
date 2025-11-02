import Rating from '../models/rating';

// Ajouter une note
export const addRating = async (userId: string, target: string, targetId: string, score: number, review: string) => {
  const rating = new Rating({ userId, target, targetId, score, review });
  await rating.save();
  return rating;
};

// Moyenne des notes d'un film
export const getMovieRating = async (movieId: string) => {
  const avgRating = await Rating.aggregate([
    { $match: { target: "movie", targetId: movieId } },
    { $group: { _id: null, average: { $avg: "$score" } } },
  ]);
  return avgRating[0]?.average || 0;
};

// Moyenne des notes d'une série
export const getSeriesRating = async (seriesId: string) => {
  const avgRating = await Rating.aggregate([
    { $match: { target: "series", targetId: seriesId } },
    { $group: { _id: null, average: { $avg: "$score" } } },
  ]);
  return avgRating[0]?.average || 0;
};
