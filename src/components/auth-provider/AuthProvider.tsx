'use client'
import { FC } from 'react'
import { SessionProvider } from 'next-auth/react';

interface AuthProviderI {
   children: React.JSX.Element
}

const AuthProvider: FC<AuthProviderI> = ({ children }) => {
   return (
      <SessionProvider>
        {children}
      </SessionProvider>
   );
};
export default AuthProvider;
