export class Episode {
    constructor(
      public titre: string,
      public numero: number,
      public duree: number,
      public statut: 'watched' | 'unwatched' = 'unwatched'
    ) {}
  }
  