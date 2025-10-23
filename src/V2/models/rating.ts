import mongoose, { Schema, Document } from "mongoose";

interface IRating extends Document {
  userId: mongoose.Types.ObjectId;
  target: "movie" | "episode";
  targetId: mongoose.Types.ObjectId;
  score: number;
  review?: string;
}

const RatingSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  target: { type: String, enum: ["movie", "episode"], required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId, refPath: "target", required: true },
  score: { type: Number, min: 0, max: 10, required: true },
  review: { type: String, maxLength: 2000 },
});

export default mongoose.model<IRating>("Rating", RatingSchema);
