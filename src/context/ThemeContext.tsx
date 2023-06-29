'use client';

import React, { createContext, useState } from 'react';

export type ThemeContextType = {
   theme: 'light' | 'dark';
   toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState<ThemeContextType['theme']>('light');

   const toggleTheme = () => {
      if (theme === 'light') {
         setTheme('dark');
         document.documentElement.classList.add('dark')
      } else {
         setTheme('light');
         document.documentElement.classList.remove('dark')
      }
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         <div className={theme === 'dark' ? 'dark' : ''}>
            {children}
         </div>
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;
