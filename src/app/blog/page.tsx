import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IPost } from '@/types';

async function getData() {
   const response = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });

   if (!response.ok) {
      throw new Error('Failed t fetch posts');
   }

   return response.json() as Promise<IPost[]>;
}

export const metadata = {
   title: 'Posts app | Blog',
   description: 'Some description',
};

const Blog = async () => {
   const data = await getData();

   return (
      <div className=''>
         {data.map((post) => (
            <Link
               href={`/blog/${post._id}`}
               className='flex items-center gap-10  mb-10'
               key={post._id.toString()}
            >
               <div className='w-[400px] h-[250px] overflow-hidden relative'>
                  <Image
                     alt='Galaxy'
                     src={post.image}
                     fill
                     className='object-cover'
                  />
               </div>
               <div className='flex-1'>
                  <h1 className='mb-2'>{post.title}</h1>
                  <p className='text-lg text-[#999]'>{post.desc}</p>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default Blog;
