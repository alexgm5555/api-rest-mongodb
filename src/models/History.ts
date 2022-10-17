import mongoose, { Schema } from "mongoose";

export interface IHistory extends  mongoose.Document {
    transaction: string,
    date: Date,
    Uid: string,
  }

const historySchema: Schema = new mongoose.Schema<IHistory>({
    transaction: { type: String, required: true },
    date: { type: Date },
    Uid: { type: String },
});
  
export default mongoose.model<IHistory>("History", historySchema);
