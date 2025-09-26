import { Request, Response, NextFunction } from 'express';

// Middleware pour vérifier que le header 'user' est là et bien formé
export function authenticate(req: Request, res: Response, next: NextFunction) {
  const userHeader = req.headers['user'];

  if (!userHeader || typeof userHeader !== 'string') {
    return res.status(401).json({ error: 'Header user manquant' });
  }
  // On coupe le header en deux morceaux : username et role
  const data = userHeader.split(':');
  if (data.length !== 2) {
    return res.status(400).json({ error: 'Format header invalide, mettre "username:role"' });
  }

  const username = data[0];
  const role = data[1];
  //admin ou user
  if (role !== 'admin' && role !== 'user') {
    return res.status(400).json({ error: 'Rôle incorrect, doit être admin ou user' });
  }

  (req as any).user = { username, role };

  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const user = (req as any).user;

  if (!user) {
    return res.status(401).json({ error: 'Pas authentifié' });
  }

  if (user.role !== 'admin') {
    return res.status(403).json({ error: 'Pas autorisé, rôle admin requis' });
  }

  next();
}
