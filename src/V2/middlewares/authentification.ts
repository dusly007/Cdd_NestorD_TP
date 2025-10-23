import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware pour vérifier le JWT
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Aucun token fournit" });

  try {
    const decoded = jwt.verify(token, "dev-secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalide" });
  }
};
