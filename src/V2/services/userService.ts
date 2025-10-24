import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Inscription  user
export const registerUser = async (email: string, username: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, username, password: hashedPassword, role: 'user' });
    await user.save();
    return { message: "User registered successfully", user };
  } catch (err) {
    throw new Error("Error registering user");
  }
};

// Connexion user
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

// Récupérer ID user
export const getUserById = async (userId: string) => {
  return await User.findById(userId);
};

// Mise a jour user
export const updateUser = async (userId: string, username: string, favorites: string[]) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  
  user.username = username;
  user.favorites = favorites || [];
  await user.save();

  return user;
};
