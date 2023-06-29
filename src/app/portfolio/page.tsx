import Link from 'next/link';

const Portfolio = () => {
   return (
      <div className=''>
         <h1 className='my-4'>Chose a gallery</h1>
         <div className='flex gap-12 [&>a]:bg-cover [&>a]:rounded-md [&>a]:relative [&>a]:border-4 [&>a]:border-[#bbb]'>
            <Link href='/portfolio/illustrations' className='w-[300px] h-[400px] bg-[url("/illustration.png")] group'>
               <span className='absolute right-2 bottom-2 text-3xl group-hover:text-primary'>Illustrations</span>
            </Link>
            <Link href='/portfolio/websites' className='w-[300px] h-[400px] bg-[url("/websites.jpg")] group'>
               <span className='absolute right-2 bottom-2 text-3xl group-hover:text-primary'>Websites</span>
            </Link>
            <Link href='/portfolio/applications' className='w-[300px] h-[400px] bg-[url("/apps.jpg")] group'>
               <span className='absolute right-2 bottom-2 text-3xl group-hover:text-primary'>Applications</span>
            </Link>
         </div>
      </div>
   );
};

export default Portfolio;
