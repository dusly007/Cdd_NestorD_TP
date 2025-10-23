import express from "express";
import { addRating, getMovieRating } from "../controllers/ratingController";

const router = express.Router();

// Ajouter une note
router.post("/", addRating);

// Récupérer la moyenne des notes d'un film
router.get("/avg/movie/:movieId", getMovieRating);

export default router;
