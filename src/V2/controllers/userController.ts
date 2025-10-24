import { Request, Response } from 'express';
import  * as UserService from '../services/userService';

export class UserController {
  // Retourne les médias appartenant à un utilisateur
  public static async getUserMedias(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userMedias = await UserService.getUserById(id);
      res.status(200).json(userMedias);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des médias utilisateur.' });
    }
  }
}
