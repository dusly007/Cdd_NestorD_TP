import fs from 'fs';
import path from 'path';

const logPath = path.join(__dirname, '../data/logs.txt');

export class LogService {
  // Ajouter un log dans le fichier
  public static writeLog(action: string) {
    const logEntry = `[${new Date().toISOString()}] ${action}\n`;
    fs.appendFileSync(logPath, logEntry, 'utf8');
  }

  // Récupérer la dernière ligne
  public static getLastLog(): string {
    if (!fs.existsSync(logPath)) return 'Aucun log disponible.';
    const logs = fs.readFileSync(logPath, 'utf8').trim().split('\n');
    return logs[logs.length - 1];
  }
}
