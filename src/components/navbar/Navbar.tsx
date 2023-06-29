import { links } from '@/constants';
import Link from 'next/link';
import ColorSchemeToggle from '../switch/ColorSchemeToggle';

const Navbar = () => {
   return (
      <div className='h-24 flex justify-between items-center'>
         <Link href='/' className='font-bold text-[22px]'>
            Daniel
         </Link>
         <div className='flex gap-[20px] items-center'>
            <ColorSchemeToggle />
            {links.map((link) => (
               <Link
                  href={link.url}
                  key={link.id}
                  className='px-2 py-1 hover:text-primary font-medium transition-color duration-300 ease-out'
               >
                  {link.title}
               </Link>
            ))}

            <button className='p-[5px] px-3 border-none bg-[#53c28b] text-white cursor-pointer rounded-md'>
               Logout
            </button>
         </div>
      </div>
   );
};
export default Navbar;
