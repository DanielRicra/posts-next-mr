import Button from '@/components/button/Button';
import Image from 'next/image';

const Contact = () => {
   return (
      <div className=''>
         <h1 className='text-5xl text-center mb-20'>Let&apos;s keep in touch</h1>
         <div className='flex items-center gap-2'>
            <div className='flex-1 h-[460px] relative'>
               <Image src='' className='object-contain' alt='' />
            </div>

            <form className='form-1 flex items-center gap-5 flex-col [&>input]:bg-transparent [&>textarea]:bg-transparent'>
               <input
                  type='text'
                  name=''
                  id=''
                  className='p-5 border-none outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 text-gray-100 border-2 border-gray-100 text-lg font-bold'
                  placeholder='name'
               />
               <input
                  type='text'
                  name=''
                  id=''
                  className='p-5 border-none outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 text-gray-100 border-2 border-gray-100 text-lg font-bold'
                  placeholder='email'
               />
               <textarea
                  cols={3}
                  placeholder='message'
                  rows={10}
                  className='p-5 border-none outline-none focus-visible:outline-dashed focus-visible:outline-2 outline-offset-2 text-gray-100 border-2 border-gray-100 text-lg font-bold'
               />
               <Button text='Send' url='#' />
            </form>
         </div>
      </div>
   );
};

export default Contact;
