import { Request, Response } from "express";
import Rating from "../models/rating";

// Ajouter une note
export const addRating = async (req: Request, res: Response) => {
  const { target, targetId, score, review } = req.body;
  const rating = new Rating({ userId: req.user.userId, target, targetId, score, review });
  try {
    await rating.save();
    res.status(201).json({ message: "Rating added", rating });
  } catch (err) {
    res.status(400).json({ message: "Error adding rating" });
  }
};

// Moyenne des notes d'un film
export const getMovieRating = async (req: Request, res: Response) => {
  const movieId = req.params.movieId;
  try {
    const avgRating = await Rating.aggregate([
      { $match: { target: "movie", targetId: mongoose.Types.ObjectId(movieId) } },
      { $group: { _id: null, average: { $avg: "$score" } } },
    ]);
    res.status(200).json({ averageRating: avgRating[0]?.average || 0 });
  } catch (err) {
    res.status(500).json({ message: "Error calculating rating" });
  }
};
