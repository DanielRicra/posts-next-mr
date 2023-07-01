import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (category: string) => {
   if (
      category !== 'applications' &&
      category !== 'illustrations' &&
      category !== 'websites'
   ) {
      return notFound();
   }

   const data = items[category];
   return data;
};

const Category = ({ params }: { params: { category: string } }) => {
   const data = getData(params.category);

   return (
      <div className=''>
         <h1 className='capitalize text-primary'>{params.category}</h1>
         {data.map((post) => (
            <div className='flex mt-10 mb-20 gap-12 odd:flex-row-reverse' key={post.id}>
               <div className='flex-1 flex flex-col gap-4 justify-center'>
                  <h2 className='text-4xl'>{post.title}</h2>
                  <p className='text-lg'>
                     {post.desc}
                  </p>
                  <Button url='#' text='See More' />
               </div>
               <div className='flex-1 relative h-[440px]'>
                  <Image
                     fill={true}
                     src={post.image}
                     alt='radom'
                     className='object-cover'
                  />
               </div>
            </div>
         ))}
      </div>
   );
};

export default Category;
