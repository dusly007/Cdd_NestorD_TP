import express from "express";
import { addRating, getMovieRating } from "../controllers/ratingController";

const ratingRoutes = express.Router();

// Ajouter une note
ratingRoutes.post("/", addRating);

// Récupérer la moyenne des notes d'un film
ratingRoutes.get("/avg/movie/:movieId", getMovieRating);

export default ratingRoutes;
