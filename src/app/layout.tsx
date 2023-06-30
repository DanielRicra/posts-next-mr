import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import ThemeProvider from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Posts app',
   description: 'Some description',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <ThemeProvider>
               <div className='container dark:text-white dark:bg-[#091420] duration-500 ease-in transition-colors'>
                  <Navbar />
                  {children}
                  <Footer />
               </div>
            </ThemeProvider>
         </body>
      </html>
   );
}
