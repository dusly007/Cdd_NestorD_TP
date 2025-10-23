import mongoose, { Schema, Document } from "mongoose";

interface ISeries extends Document {
  title: string;
  genres: string[];
  status: "ongoing" | "ended";
}

const SeriesSchema: Schema = new Schema({
  title: { type: String, required: true },
  genres: { type: [String], required: true },
  status: { type: String, enum: ["ongoing", "ended"], required: true },
});

export default mongoose.model<ISeries>("Series", SeriesSchema);
