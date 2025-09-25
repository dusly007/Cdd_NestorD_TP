import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); // affiche erreur dans console

  //réponse 500 avec message d’erreur
  res.status(500).json({
    error: "Une erreur est survenue sur le serveur.",
    message: err.message,
  });
}
