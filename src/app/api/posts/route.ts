import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';
import { IPost } from '@/types';

export const GET = async (request: Request) => {
   const url = new URL(request.url);

   const username = url.searchParams.get('username');
   let posts: IPost[];

   try {
      await connect();
      if (username) {
         posts = await Post.find({ username });
      } else {
         posts = await Post.find();
      }

      return NextResponse.json(posts, { status: 200 });
   } catch (error) {
      return new NextResponse('Database error!', { status: 500 });
   }
};

export const POST = async (request: Request) => {
   const body = await request.json();

   const newPost = new Post(body);


   try {
      await connect();
      
      await newPost.save();

      return NextResponse.json('The post has been created', { status: 201 });
   } catch (error) {
      return new NextResponse('Database error!', { status: 500 });
   }
};
