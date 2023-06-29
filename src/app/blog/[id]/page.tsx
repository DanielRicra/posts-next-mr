import Image from 'next/image';
import React from 'react';

const BlogPost = () => {
   return (
      <div className=''>
         <div className='flex'>
            <div className='flex-1 flex flex-col justify-between'>
               <h1 className='text-4xl'>Main title</h1>
               <p className='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  minus a deserunt obcaecati labore, iure soluta ullam
                  architecto nam suscipit qui rem. Beatae, quisquam consectetur?
                  Labore exercitationem reprehenderit modi rem!
               </p>
               <div className='flex items-center gap-2'>
                  <Image
                     src='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                     alt='avatar'
                     width={40}
                     height={40}
                     className='w-10 h-10 rounded-full'
                  />
                  <span className='text-base'>Lana Del Rey</span>
               </div>
            </div>
            <div className='flex-1 h-72 relative'>
               <Image
                  src='https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  alt='post image'
                  fill={true}
                  className='object-cover'
               />
            </div>
         </div>
         <div className='mt-11 text-xl font-light text-[#bbb] text-justify'>
            <p className=''>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
               praesentium itaque, est assumenda odit reiciendis asperiores
               harum. Laboriosam, ab dolor.
               <br />
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam impedit, a recusandae sequi ad doloremque aliquam nesciunt fugit sint veritatis odio soluta, voluptatibus cupiditate, deserunt non quasi provident laudantium odit eligendi. Magnam, pariatur mollitia! Laboriosam voluptas officia temporibus adipisci!
            </p>
         </div>
      </div>
   );
};

export default BlogPost;
