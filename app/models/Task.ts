import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  text: string;
  completed: boolean;
}

const TaskSchema = new Schema<ITask>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);