import mongoose, { Schema, Document } from "mongoose";

export interface MovieInterface extends Document {
  title: string;
}

const MovieSchema: Schema = new Schema({
  title: { type: String, required: true }
});

const Movie = mongoose.model<MovieInterface>("Movie", MovieSchema);
export default Movie;