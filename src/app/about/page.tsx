import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';

const About = () => {
   return (
      <div className=''>
         <div className='w-full h-[300px] relative'>
            <Image
               src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
               fill={true}
               alt=''
               className='object-cover grayscale'
            />
            <div className='absolute bottom-5 left-5 bg-primary p-[5px] text-gray-950 rounded-lg px-2'>
               <h1 className=''>Digital Storytellers</h1>
               <h2 className=''>
                  Handcrafting award wining digital experiences
               </h2>
            </div>
         </div>
         <div className='flex gap-14 [&>div]:flex-1 [&>div]:mt-12'>
            <div className='flex flex-col gap-[22px]'>
               <h2 className='capitalize'>Wo we are</h2>
               <p className='text-lg text-justify font-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  possimus soluta non minus temporibus illum nihil expedita eos
                  magni dolores facere, pariatur tenetur quasi molestias amet
                  blanditiis vero excepturi voluptatibus officiis laboriosam
                  sunt fugiat nam consequatur! Corporis,
                  <br />
                  <br />
                  ratione esse numquam quod aliquid sunt, sed quam aspernatur
                  tempore inventore vitae dignissimos. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Fuga repellat sunt nihil
                  accusamus iusto id velit labore est.
               </p>
            </div>

            <div className='flex flex-col gap-[22px]'>
               <h2 className='capitalize'>What we do?</h2>
               <p className='text-lg text-justify font-light'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
                  possimus soluta non minus temporibus illum nihil expedita eos
                  magni dolores facere, pariatur tenetur quasi molestias amet
                  blanditiis vero excepturi voluptatibus officiis laboriosam
                  sunt fugiat nam consequatur! Corporis,
                  <br />
                  <br />   
                  <ul className='[&>li]:list-disc ml-6'>
                     <li>Creative Illustrations</li>
                     <li>Dynamic websites</li>
                     <li>Fast and handy Mobile apps</li>
                  </ul>
               </p>
               <Button text='Contact' url='/contact' />
            </div>
         </div>
      </div>
   );
};

export default About;
