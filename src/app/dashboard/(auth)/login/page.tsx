'use client';

import { signIn } from 'next-auth/react';
import { useRef } from 'react';

const Login = () => {
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;

      if (email?.trim() === '' || password?.trim() === '') return

      signIn('credentials', {email, password})
   }

   return (
      <div className='flex items-center justify-center flex-col gap-4'>
         <form
            className='w-96 flex flex-col gap-4 [&>input]:p-4 [&>input]:bg-transparent [&>input]:border-2 dark:[&>input]:border-[#bbb] border-gray-700 [&>input]:rounded-md'
            onSubmit={handleSubmit}
         >
            <input
               ref={emailRef}
               type='email'
               placeholder='email'
               className='text-lg font-bold dark:text-gray-100'
               required
            />
            <input
               ref={passwordRef}
               type='password'
               placeholder='password'
               className='text-lg font-bold dark:text-gray-100'
               required
            />
            <button type='submit' className='primary-button text-gray-950 w-full'>
               Login
            </button>
         </form>

         <button type='button' onClick={() => signIn('google')} className='primary-button text-black w-96'>
            Login with Google
         </button>
      </div>
   );
};

export default Login;
