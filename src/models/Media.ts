// Classe abstraite Media qui sert de base à Film et Serie
export abstract class Media {
    constructor(
      public id: string,
      public titre: string,
      public plateforme: string,
      public userId: string
    ) {}
  }
  