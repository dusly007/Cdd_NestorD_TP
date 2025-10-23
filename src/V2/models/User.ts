import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  email: string;
  username: string;
  password: string;
  role: "user" | "admin";
  favorites?: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

export default mongoose.model<User>("User", UserSchema);
