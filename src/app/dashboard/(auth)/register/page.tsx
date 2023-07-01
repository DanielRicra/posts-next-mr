'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const Register = () => {
   const [error, setError] = useState(false);
   const router = useRouter();

   const nameRef = useRef<HTMLInputElement>(null);
   const emailRef = useRef<HTMLInputElement>(null);
   const passwordRef = useRef<HTMLInputElement>(null);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const name = nameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      console.log(name, email, password)

      try {
         const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
         });

         response.status === 201 &&
            router.push('/dashboard/login?success=Account has been created');
      } catch (error) {
         setError(true);
      }
   };

   return (
      <div className='flex items-center justify-center flex-col gap-4'>
         <form
            className='w-96 flex flex-col gap-4 [&>input]:p-4 [&>input]:bg-transparent [&>input]:border-2 dark:[&>input]:border-[#bbb] border-gray-700 [&>input]:rounded-md'
            onSubmit={handleSubmit}
         >
            <input
               ref={nameRef}
               type='text'
               placeholder='username'
               className='text-lg font-bold dark:text-gray-100'
               required
            />
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
            <button type='submit' className='primary-button text-gray-950'>
               Register
            </button>
         </form>
         {error && <p>Something went wrong</p>}
         <Link href='/dashboard/login'>Login with an existing account</Link>
      </div>
   );
};

export default Register;
