import { Types } from 'mongoose';

export type PostType = {
   userId: string;
   id: number;
   title: string;
   body: string;
};

export interface IPost {
   _id: Types.ObjectId;
   title: string;
   desc: string;
   content: string;
   username: string;
   image: string;
}

export interface IUser {
   _id: Types.ObjectId;
   name: string;
   email: string;
   password: string;
}
