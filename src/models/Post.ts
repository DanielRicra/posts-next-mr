import mongoose from 'mongoose';
import { IPost } from '@/types';

const { Schema } = mongoose;

const postSchema = new Schema<IPost>(
   {
      title: {
         type: String,
         required: true,
      },
      desc: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      content: {
         type: String,
         required: true,
      },
      username: {
         type: String,
         required: true,
      },
   },
   { timestamps: false }
);

const Post = mongoose.models.Post ?? mongoose.model<IPost>('Post', postSchema)

export default Post;
