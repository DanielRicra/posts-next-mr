import mongoose from 'mongoose';
import { IUser } from '@/types';

const { Schema } = mongoose;

const userSchema = new Schema<IUser>(
   {
      name: {
         type: String,
         unique: true,
         required: true,
      },
      email: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
   },
   { timestamps: false }
);

const User = mongoose.models.User as mongoose.Model<IUser> ?? mongoose.model<IUser>('User', userSchema);

export default User;
