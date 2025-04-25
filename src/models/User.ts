// import mongoose from "mongoose";
// import { AutoIncrementID } from 'mongoose-sequence';
import mongoose from 'mongoose';
// import AutoIncrementFactory from 'mongoose-sequence'; // ← This is the factory

// const AutoIncrement = AutoIncrementFactory(mongoose); 

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

// userSchema.plugin(AutoIncrementID, { field: 'userId' });

// userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model<IUser>("User", userSchema);

export default User;
