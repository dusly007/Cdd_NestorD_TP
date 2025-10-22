// Middleware pour valider données envoyées dans requêtes

import { Request, Response, NextFunction } from "express";

export function validateMedia(req: Request, res: Response, next: NextFunction) {
  const { titre, plateforme, duree, statut, annee } = req.body;

  const titreRegex = /^[a-zA-Z0-9 ]+$/;  // lettres, chiffres et espaces
  const plateformeRegex = /^[a-zA-Z]+$/; // lettres
  const dureeRegex = /^[1-9][0-9]*$/;  // chiffres 
  const statutValides = ["en_attente", "en_cours", "terminee"]; 

    // Validation titre
  if (titre && !titreRegex.test(titre)) {
    return res.status(400).json({ error: "Titre invalide" });
  }
  // Validation plateforme
  if (plateforme && !plateformeRegex.test(plateforme)) {
    return res.status(400).json({ error: "Plateforme invalide" });
  }
   // Validation durée
  if (duree && !dureeRegex.test(duree.toString())) {
    return res.status(400).json({ error: "Durée invalide" });
  }
  // Validation statut
  if (statut && !statutValides.includes(statut)) {
    return res.status(400).json({ error: "Statut invalide" });
  }
  // Validation année
  if (annee) {
    const an = Number(annee);
    const currentYear = new Date().getFullYear();
    if (isNaN(an) || an > currentYear) {
      return res.status(400).json({ error: "Année invalide" });
    }
  }

  next();
}
