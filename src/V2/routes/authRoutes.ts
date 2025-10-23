import express from "express";
import { register, login } from "../controllers/authController";

const router = express.Router();

// Inscription
router.post("/register", register);

// Connexion
router.post("/login", login);

export default router;
