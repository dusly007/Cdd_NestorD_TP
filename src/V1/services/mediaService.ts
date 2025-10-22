import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../data/db.json');

function readData() {
  return JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
}

function writeData(data: any) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export const MediaService = {
  getAllMedia: () => {
    const data = readData();
    return data.medias || [];
  },

  getMediaById: (id: string) => {
    const data = readData();
    return data.medias.find((m: any) => m.id === id);
  },

  createMedia: (mediaData: any) => {
    const data = readData();
    const newMedia = { id: generateId(), ...mediaData };
    data.medias.push(newMedia);
    writeData(data);
    return newMedia;
  },

  updateMedia: (id: string, updatedMedia: any) => {
    const data = readData();
    const index = data.medias.findIndex((m: any) => m.id === id);
    if (index === -1) return null;
    data.medias[index] = { ...data.medias[index], ...updatedMedia };
    writeData(data);
    return data.medias[index];
  },

  deleteMedia: (id: string) => {
    const data = readData();
    const index = data.medias.findIndex((m: any) => m.id === id);
    if (index === -1) return false;
    data.medias.splice(index, 1);
    writeData(data);
    return true;
  },

  getSeriesEpisodes: (id: string) => {
    const data = readData();
    const serie = data.medias.find((m: any) => m.id === id && m.type === 'serie');
    if (!serie || !serie.saisons) return null;
    return serie.saisons.flatMap((saison: any) => saison.episodes || []);
  }
};
