import Movie from '../models/Film';

// Créer un film
export const createMovie = async (title: string, genres: string[], releaseDate: Date, durationMin: number) => {
  const movie = new Movie({ title, genres, releaseDate, durationMin });
  await movie.save();
  return movie;
};

// Récupérer tous les films avec pagination et filtres
export const getMovies = async (title: string, genre: string, page: number = 1, limit: number = 10) => {
  const movies = await Movie.find({
    title: { $regex: title, $options: "i" },
    genres: { $in: [genre] },
  })
    .skip((page - 1) * limit)
    .limit(limit);
  const total = await Movie.countDocuments();
  return { movies, total };
};
