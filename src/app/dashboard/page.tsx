'use client';
import { IPost, PostType } from '@/types';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<IPost[], string> = (url) =>
   fetch(url).then((res) => res.json());

const Dashboard = () => {
   const titleRef = useRef<HTMLInputElement>(null);
   const descRef = useRef<HTMLInputElement>(null);
   const imageRef = useRef<HTMLInputElement>(null);
   const contentRef = useRef<HTMLTextAreaElement>(null);
   const session = useSession();

   const { data, isLoading, mutate } = useSWR(
      `/api/posts?username=${session.data?.user?.name}`,
      fetcher
   );

   const router = useRouter();

   const handleDelete = async (id: string) => {
      try {
         await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
         });
         mutate();
      } catch (error) {}
   };

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let title = titleRef.current?.value;
      let desc = descRef.current?.value;
      let image = imageRef.current?.value;
      let content = contentRef.current?.value;

      function cleanRefs() {
         if (titleRef.current) {
            titleRef.current.value = '';
         }
         if (descRef.current) {
            descRef.current.value = '';
         }
         if (imageRef.current) {
            imageRef.current.value = '';
         }
         if (contentRef.current) {
            contentRef.current.value = '';
         }
      }

      try {
         await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
               title,
               image,
               desc,
               content,
               username: session.data?.user?.name,
            }),
         });
         mutate();

         cleanRefs();
      } catch (error) {}
   };

   if (session.status === 'loading') {
      return <p className='animate-pulse'>Loading User..</p>;
   }

   if (session.status === 'unauthenticated') {
      router.push('/dashboard/login');
   }

   return (
      <div className='flex gap-5'>
         <div className='flex flex-wrap gap-4 flex-1'>
            {isLoading && (
               <div className='animate-pulse text-2xl font-bold'>
                  Loading Posts...
               </div>
            )}
            {data?.map((post) => (
               <div
                  key={post._id.toString()}
                  className='flex items-center justify-between gap-2'
               >
                  <div className='w-[200px] relative h-[160px] overflow-hidden'>
                     <Image
                        src={post.image}
                        alt=''
                        fill
                        className='object-cover'
                     />
                  </div>
                  <h2 className=''>{post.title}</h2>
                  <span
                     className='text-xl'
                     onClick={() => handleDelete(post._id.toString())}
                  >
                     ❌
                  </span>
               </div>
            ))}
         </div>

         <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-3 w-80 [&>input]:p-2 [&>textarea]:p-2 [&>input]:bg-transparent [&>textarea]:bg-transparent'
         >
            <h1>Add new post</h1>
            <input
               ref={titleRef}
               type='text'
               placeholder='Title'
               className='border-2 rounded-md dark:border-gray-200 border-gray-600 dark:text-white'
            />
            <input
               ref={descRef}
               type='text'
               placeholder='Description'
               className='border-2 rounded-md dark:border-gray-200 border-gray-600 dark:text-white'
            />
            <input
               ref={imageRef}
               type='text'
               placeholder='Image'
               className='border-2 rounded-md dark:border-gray-200 border-gray-600 dark:text-white'
            />
            <textarea
               ref={contentRef}
               placeholder='Content'
               id=''
               cols={3}
               rows={4}
               className='border-2 rounded-md dark:border-gray-200 border-gray-600 dark:text-white'
            />
            <button type='submit' className='primary-button text-black w-full'>
               Create
            </button>
         </form>
      </div>
   );
};

export default Dashboard;
