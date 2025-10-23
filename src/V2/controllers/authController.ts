import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

// Inscription d'un utilisateur
export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password, role: "user" });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ message: "Error registering user" });
  }
};

// Connexion avec JWT
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, "dev-secret", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
