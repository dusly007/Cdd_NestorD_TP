import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const cheminDb = path.join(__dirname, "../data/db.json");

// Route 
router.get("/:id/medias", (req: Request, res: Response) => {
  const dbText = fs.readFileSync(cheminDb, "utf-8"); // Lecturefichier db.json
  const db = JSON.parse(dbText); // Convertir en objet JS

  const userId = req.params.id; 
  const resultats = db.medias.filter((media: any) => media.userId === userId); // Filtrer les médias de user

  res.json(resultats); // Retourne médias user
});

export default router;
