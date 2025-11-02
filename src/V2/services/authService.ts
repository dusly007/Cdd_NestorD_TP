import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Inscription utilisateur
export const registerUser = async (email: string, username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, username, password: hashedPassword, role: 'user' });
  await user.save();
  return user;
};

// Connexion utilisateur
export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, "dev-secret", { expiresIn: "1h" });
  return { token };
};

// Récupérer un utilisateur par son ID
export const getUserById = async (userId: string) => {
  return await User.findById(userId);
};
