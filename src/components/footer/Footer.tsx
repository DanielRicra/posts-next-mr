import Image from 'next/image';

const Footer = () => {
   return (
      <div className='flex h-[50px] items-center justify-between text-sm'>
         <div className=''>©2023. All rights reserved</div>
         <div className='flex items-center gap-[10px] [&>img]:opacity-80 [&>img]:cursor-pointer'>
            <Image src='/1.png' alt='Facebook' width={20} height={20} />
            <Image src='/2.png' alt='Instagram' width={20} height={20} />
            <Image src='/3.png' alt='Twitter' width={20} height={20} />
            <Image src='/4.png' alt='Youtube' width={20} height={20} />
         </div>
      </div>
   );
};
export default Footer;
