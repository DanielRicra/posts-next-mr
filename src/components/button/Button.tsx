import Link from 'next/link';

const Button = ({ text, url }: { text: string; url: string }) => {
   return (
      <Link href={url} className='primary-button text-gray-950'>
         <button className=''>{text}</button>
      </Link>
   );
};
export default Button;
