import mongoose from "mongoose";
import { AutoIncrementID } from 'mongoose-sequence';

export interface IUser extends mongoose.Document {
  userId: number,
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  userId: { type: Number, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(AutoIncrementID, { field: 'userId' });

const User = mongoose.model<IUser>("User", userSchema);

export default User;
