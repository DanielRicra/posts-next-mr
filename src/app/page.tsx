import Button from '@/components/button/Button';
import Image from 'next/image';

import heroImg from 'public/hero.png';

export default function Home() {
   return (
      <div className='flex items-center gap-[100px]'>
         <div className='flex-1 flex flex-col gap-[50px]'>
            <h1 className='2xl:text-[72px] lg:text-[52px] md:text-[48px] from-[#3a9e6c] to-[#bbb] bg-gradient-to-b bg-clip-text text-transparent'>
               Better design for your digital products
            </h1>
            <p className='text-xl 2xl:text-2xl font-light'>
               Turning your idea into reality. We bring together the teams from
               the global tech industry.
            </p>
            <Button url='/portfolio' text='See our works' />
         </div>

         <div className='flex-1'>
            <Image
               src={heroImg}
               alt='hero'
               className='w-[440px] object-contain'
            />
         </div>
      </div>
   );
}
