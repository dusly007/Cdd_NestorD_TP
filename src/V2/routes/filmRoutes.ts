import express from "express";
import { createMovie, getMovies } from "../controllers/moiveController";

const movieRoutes = express.Router();

// Ajouter un film
movieRoutes.post("/", createMovie);

// Récupérer les films avec pagination et filtres
movieRoutes.get("/", getMovies);

export default movieRoutes;
