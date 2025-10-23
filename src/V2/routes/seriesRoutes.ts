import express from "express";
import { createSeries, getSeries } from "../controllers/seriesController";

const router = express.Router();

// Ajouter une série
router.post("/", createSeries);

// Récupérer les séries avec filtres
router.get("/", getSeries);

export default router;
