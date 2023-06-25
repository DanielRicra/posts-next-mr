import { links } from '@/app/constants';
import Link from 'next/link';

const Navbar = () => {
   return (
      <div>
         <Link href='/'>Daniel</Link>
         <div>
            {links.map((link) => (
               <Link href={link.url} key={link.id}>
                  {link.title}
               </Link>
            ))}
         </div>
      </div>
   );
};
export default Navbar;
