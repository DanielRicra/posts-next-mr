'use client';

import { ThemeContext, ThemeContextType } from '@/context/ThemeContext';
import { useContext } from 'react';

const ColorSchemeToggle = () => {
   const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

   return (
      <div
         className='w-12 h-6 border-[1.5px] border-[#53c28b70] rounded-3xl relative flex justify-between items-center p-1 cursor-pointer'
         onClick={toggleTheme}
      >
         <div className='text-xs'>🌙</div>
         <div className='text-yellow-400 text-base'>☀</div>
         <div
            className='w-[18px] h-[18px] bg-primary rounded-full absolute top-0.5 transition-transform duration-500'
            style={
               theme === 'light'
                  ? { transform: 'translateX(0)' }
                  : { transform: 'translateX(20px)' }
            }
         />
      </div>
   );
};
export default ColorSchemeToggle;
