import { Request, Response } from "express";
import Movie from "../models/Film";

// Ajouter un film
export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, genres, releaseDate, durationMin } = req.body;
    const movie = new Movie({ title, genres, releaseDate, durationMin });
    await movie.save();
    res.status(201).json({ message: "Movie created", movie });
  } catch (err) {
    res.status(400).json({ message: "Error creating movie" });
  }
};

// Récupérer tous les films avec pagination et filtres
export const getMovies = async (req: Request, res: Response) => {
  const { title, genre, page = 1, limit = 10 } = req.query;
  try {
    const movies = await Movie.find({
      title: { $regex: title || "", $options: "i" },
      genres: { $in: [genre] },
    })
      .skip((parseInt(page as string) - 1) * parseInt(limit as string))
      .limit(parseInt(limit as string));
    const total = await Movie.countDocuments();
    res.status(200).json({ items: movies, total, page, pages: Math.ceil(total / parseInt(limit as string)) });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving movies" });
  }
};
