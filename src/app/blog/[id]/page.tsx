import { IPost } from '@/types';
import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';

async function getData(id: number) {
   const response = await fetch(`http://localhost:3000/api/posts/${id}`);

   if (!response.ok) {
      return notFound();
   }

   return response.json() as Promise<IPost>;
}

export async function generateMetadata({ params }: { params: { id: number } }) {
   const post = await getData(params.id);
   return {
      title: post.title,
      description: post.desc,
   };
}

const BlogPost = async ({ params }: { params: { id: number } }) => {
   const data = await getData(params.id);

   return (
      <div className=''>
         <div className='flex'>
            <div className='flex-1 flex flex-col justify-between'>
               <h1 className='text-4xl'>{data.title}</h1>
               <p className='text-lg'>{data.desc}</p>
               <div className='flex items-center gap-2'>
                  <Image
                     src='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                     alt='avatar'
                     width={40}
                     height={40}
                     className='w-10 h-10 rounded-full'
                  />
                  <span className='text-base'>{data.username}</span>
               </div>
            </div>
            <div className='flex-1 h-72 relative'>
               <Image
                  src={data.image}
                  alt='post image'
                  fill={true}
                  className='object-cover'
               />
            </div>
         </div>
         <div className='mt-11 text-xl font-light dark:text-gray-200 text-gray-800 text-justify'>
            <p className=''>{data.content}</p>
         </div>
      </div>
   );
};

export default BlogPost;
