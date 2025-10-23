import express from "express";
import { createMovie, getMovies } from "../controllers/moiveController";

const router = express.Router();

// Ajouter un film
router.post("/", createMovie);

// Récupérer les films avec pagination et filtres
router.get("/", getMovies);

export default router;
