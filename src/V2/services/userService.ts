import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../data/db.json');

// Lire les données
function loadData() {
  if (!fs.existsSync(dbPath)) return { medias: [] };
  const file = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(file);
}

export class UserService {
  // Récupérer tous les médias d’un utilisateur donné
  public static getUserMedias(userId: string) {
    const data = loadData();
    return data.medias.filter((m: any) => m.userId === userId);
  }
}
