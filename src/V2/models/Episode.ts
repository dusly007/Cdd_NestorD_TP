import mongoose, { Schema, Document } from "mongoose";

interface IEpisode extends Document {
  seriesId: mongoose.Types.ObjectId;
  seasonId: mongoose.Types.ObjectId;
  epNo: number;
  title: string;
  durationMin: number;
}

const EpisodeSchema: Schema = new Schema({
  seriesId: { type: mongoose.Schema.Types.ObjectId, ref: "Series", required: true },
  seasonId: { type: mongoose.Schema.Types.ObjectId, ref: "Season", required: true },
  epNo: { type: Number, required: true },
  title: { type: String, required: true },
  durationMin: { type: Number, required: true },
});

export default mongoose.model<IEpisode>("Episode", EpisodeSchema);
