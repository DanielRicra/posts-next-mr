import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
   return (
      <div className=''>
         <Link href='/blog/testId' className='flex items-center gap-10  mb-10'>
            <div className=''>
               <Image
                  alt='Galaxy'
                  src='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  width={400}
                  height={250}
                  className='object-cover w-[400px] h-[250px]'
               />
            </div>
            <div className=''>
               <h1 className='mb-2'>Test 1</h1>
               <p className='text-lg text-[#999]'>Description 1</p>
            </div>
         </Link>

         <Link href='/blog/testId' className='flex items-center gap-10  mb-10'>
            <div className=''>
               <Image
                  alt='Galaxy'
                  src='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  width={400}
                  height={250}
                  className='object-cover w-[400px] h-[250px]'
               />
            </div>
            <div className=''>
               <h1 className='mb-2'>Test 1</h1>
               <p className='text-lg text-[#999]'>Description 1</p>
            </div>
         </Link>
      </div>
   );
};

export default Blog;
