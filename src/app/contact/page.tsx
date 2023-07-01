import Button from '@/components/button/Button';
import Image from 'next/image';

export const metadata = {
   title: 'Posts app | Contact',
   description: 'This is contact page',
};

const Contact = () => {
   return (
      <div className=''>
         <h1 className='text-5xl text-center mb-20'>
            Let&apos;s keep in touch
         </h1>
         <div className='flex items-center gap-2'>
            <div className='flex-1 h-[420px] relative'>
               <Image
                  src='/contact.png'
                  className='object-contain'
                  alt=''
                  fill
               />
            </div>

            <form className='flex-1 flex justify-center gap-5 flex-col [&>input]:bg-transparent [&>textarea]:bg-transparent'>
               <input
                  type='text'
                  name='name'
                  id=''
                  className='p-2 outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 text-lg font-bold'
                  placeholder='name'
               />
               <input
                  type='text'
                  name='email'
                  id=''
                  className='p-2 outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 text-lg font-bold'
                  placeholder='email'
               />
               <textarea
                  cols={3}
                  placeholder='message'
                  rows={4}
                  name='message'
                  className='p-2 outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 dark:text-gray-100 border-2 border-gray-900 dark:border-gray-100 text-lg font-bold'
               />
               <Button text='Send' url='#' />
            </form>
         </div>
      </div>
   );
};

export default Contact;
