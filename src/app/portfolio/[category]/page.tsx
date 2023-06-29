import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';

const Category = ({ params }: { params: { category: string } }) => {
   return (
      <div className=''>
         <h1 className='capitalize text-primary'>{params.category}</h1>
         <div className='flex mt-10 mb-20 gap-12 odd:flex-row-reverse'>
            <div className='flex-1 flex flex-col gap-4 justify-center'>
               <h2 className='text-4xl'>Test</h2>
               <p className='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <Button url='#' text='See More' />
            </div>
            <div className='flex-1 relative h-[440px]'>
               <Image
                  fill={true}
                  src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='radom'
                  className='object-cover'
               />
            </div>
         </div>
         <div className='flex mt-10 mb-20 gap-12 odd:flex-row-reverse'>
            <div className='flex-1 flex flex-col gap-4 justify-center'>
               <h2 className='text-4xl'>Test</h2>
               <p className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
               <Button url='#' text='See More' />
            </div>
            <div className='flex-1 relative h-[440px]'>
               <Image
                  fill={true}
                  src='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='radom'
                  className='object-cover'
               />
            </div>
         </div>
      </div>
   );
};

export default Category;
