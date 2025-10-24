import express from "express";
import { createSeries, getSeries } from "../controllers/seriesController";

const  seriesRoutes = express.Router();

// Ajouter une série
seriesRoutes.post("/", createSeries);

// Récupérer les séries avec filtres
seriesRoutes.get("/", getSeries);

export default  seriesRoutes;
