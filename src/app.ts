<<<<<<< HEAD
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
=======
//APP INCOMPLET
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from 'config';
import rateLimit from 'rate-limit-express';
import jwt from 'jsonwebtoken';
import path from 'path';
import { authenticate } from './V1/middlewares/authentification';
import { errorHandler } from './V1/middlewares/errorHandling';
import  userRoutes from './V1/routes/userRoutes';
import movieRoutes from './V2/routes/filmRoutes';
import seriesRoutes from './V2/routes/seriesRoutes';
import ratingRoutes from './V2/routes/ratingRoutes';

// Création de l'application Express
const app = express();




app.use(express.json());

// Connexion à MongoDB



// Routes API
// Routes publiques
app.use('/api/v2/auth', userRoutes);  // Inscription, connexion
app.use('/api/v2/movies', movieRoutes); // Films
app.use('/api/v2/series', seriesRoutes); // Séries
app.use('/api/v2/ratings', ratingRoutes); // Notations

// Middleware d'authentification global pour protéger les routes nécessitant un JWT
app.use('/api/v2/protected', authenticate);


//Si route n'existe pas
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Route not found' });
});

// Middleware global pour gérer les erreurs
app.use(errorHandler);

// Démarrage du serveur
const port = config.get<number>('server.http.port');
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

>>>>>>> adfbe6ac4033e3e1f156bcd0ac94c14a8eb4d09b
export default app;
