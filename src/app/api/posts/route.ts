import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';
import { IPost } from '@/types';

export const GET = async () => {
   try {
      await connect();

      const posts: IPost[] = await Post.find();

      return NextResponse.json(posts, { status: 200 });
   } catch (error) {
      return new NextResponse('Database error!', { status: 500 });
   }
};
