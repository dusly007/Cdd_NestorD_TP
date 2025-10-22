import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Chemin vers fichier log 
const logFile = path.join(__dirname, '../data/logs.txt');

// Classe pour logs
export class LogController {
  
  // Route GET
  // Retourne dernière ligne fichier log
  public static getLogs(req: Request, res: Response) {
    try {
      // Lire tout le contenu du fichier logs.txt
      const data = fs.readFileSync(logFile, 'utf8');

      // Séparer texte
      const lines = data.trim().split('\n');

      // Prendre la dernière ligne (dernier log écrit)
      const lastLog = lines.length > 0 ? lines[lines.length - 1] : 'Pas de logs';

      // Envoyer le dernier log au client
      res.status(200).json({ lastLog });
    } catch (error) {
        // En cas d’erreur, retourner 500 avec un message
        res.status(500).json({ message: 'Erreur lors de la lecture des logs' });
      }
    }
  }
  
