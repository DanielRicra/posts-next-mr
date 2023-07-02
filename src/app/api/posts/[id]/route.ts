import { NextResponse } from 'next/server';
import { IPost } from '@/types';
import Post from '@/models/Post';
import connect from '@/utils/db';

export const GET = async (
   _request: Request,
   { params }: { params: { id: string } }
) => {
   const { id } = params;

   try {
      await connect();

      const post: IPost | null = await Post.findById(id);

      if (!post) {
         return NextResponse.json('Post Not Found', { status: 404 });
      }

      return NextResponse.json(post, { status: 200 });
   } catch (error) {
      return new NextResponse('Database error!', { status: 500 });
   }
};

export const DELETE = async (
   _request: Request,
   { params }: { params: { id: string } }
) => {
   const { id } = params;

   try {
      await connect();

      const post = await Post.findByIdAndDelete(id);

      if (!post) {
         return NextResponse.json('Post Not Found', { status: 404 });
      }

      return NextResponse.json('Post deleted successfully', { status: 200 });
   } catch (error) {
      return new NextResponse('Database error!', { status: 500 });
   }
};
