import mongoose, { Schema, Document } from "mongoose";

interface ISeason extends Document {
  seriesId: mongoose.Types.ObjectId;
  seasonNo: number;
  episodes: mongoose.Types.ObjectId[];
}

const SeasonSchema: Schema = new Schema({
  seriesId: { type: mongoose.Schema.Types.ObjectId, ref: "Series", required: true },
  seasonNo: { type: Number, required: true },
  episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode" }],
});

export default mongoose.model<ISeason>("Season", SeasonSchema);
