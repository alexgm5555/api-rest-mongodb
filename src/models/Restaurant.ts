import mongoose, { Schema } from "mongoose";

export interface IRestaurant extends  mongoose.Document {
    transaction: string,
    date: Date,
    Uid: string,
  }

const restaurantSchema: Schema = new mongoose.Schema<IRestaurant>({
    transaction: { type: String, required: true },
    date: { type: Date },
    Uid: { type: String, required: true },
});
  
export default mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
