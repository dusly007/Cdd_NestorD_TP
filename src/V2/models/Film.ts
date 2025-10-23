import mongoose, { Schema, Document } from "mongoose";

interface IMovie extends Document {
  title: string;
  genres: string[];
  releaseDate?: Date;
  durationMin: number;
}

const MovieSchema: Schema = new Schema({
  title: { type: String, required: true },
  genres: { type: [String], required: true },
  releaseDate: { type: Date },
  durationMin: { type: Number, required: true }
});

export default mongoose.model<IMovie>("Movie", MovieSchema);
