import { Request, Response } from "express";
import Series from "../models/Serie";

// Créer une série
export const createSeries = async (req: Request, res: Response) => {
  try {
    const { title, genres, status } = req.body;
    const series = new Series({ title, genres, status });
    await series.save();
    res.status(201).json({ message: "Series created", series });
  } catch (err) {
    res.status(400).json({ message: "Error creating series" });
  }
};

// Récupérer toutes les séries
export const getSeries = async (req: Request, res: Response) => {
  const { title, genre, status } = req.query;
  try {
    const series = await Series.find({
      title: { $regex: title || "", $options: "i" },
      genres: { $in: [genre] },
      status: status || { $exists: true },
    });
    res.status(200).json(series);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving series" });
  }
};
