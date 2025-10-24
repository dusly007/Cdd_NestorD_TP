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

export default app;
