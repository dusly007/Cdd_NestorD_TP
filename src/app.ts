import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'rate-limit-express';
import config from 'config';
//import { authenticate } from '.V2/middlewares/authentification';
//import { errorHandler } from '.V2/middlewares/errorHandler';

// Routes
import authRoutes from './V2/routes/authRoutes';
import movieRoutes from './V2/routes/filmRoutes';
import ratingRoutes from './V2/routes/ratingRoutes';
import seriesRoutes from './V2/routes/seriesRoutes';
import userRoutes from './V2/routes/userRoutes

// Configuration de l'application
const app = express();
app.use(express.json()); // Parse les corps des requêtes en JSON
app.use(express.urlencoded({ extended: true })); // Pour les requêtes avec des données encodées en URL

// Sécurisation des routes avec CORS


// Rate-limiting : Limite le nombre de requêtes sur les routes critiques


// Connexion à MongoDB

// Routes
app.use('/api/v2/auth', authRoutes); // v2 routes
app.use('/api/v2/movies', movieRoutes);
app.use('/api/v2/ratings', ratingRoutes);
app.use('/api/v2/series', seriesRoutes);
app.use('/api/v2/users', userRoutes);

// Middleware d'authentification pour les routes protégées
app.use('/api/v2', authenticate); // Toutes les routes après celle-ci sont protégées par JWT

// Gestion des erreurs globales
app.use(errorHandler);

// Route de base
app.get('/', (req: Request, res: Response) => {
  res.send("Bienvenue dans l'application de suivi de médias!");
});

// Exporter l'application
export default app;
