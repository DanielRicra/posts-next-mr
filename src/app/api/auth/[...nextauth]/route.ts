import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';
import User from '@/models/User';
import { IUser } from '@/types';

interface ICredentials extends Record<'email' | 'password', string> {}

const handler = NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_ID as string,
         clientSecret: process.env.GOOGLE_SECRET as string,
      }),
      CredentialsProvider({
         id: 'credentials',
         name: 'credentials',
         credentials: {
            email: { label: 'email', type: 'text' },
            password: { label: 'password', type: 'text' },
         },
         async authorize(credentials?: ICredentials): Promise<any> {
            if (!credentials) throw new Error('Credentials must be provided');

            const { email, password } = credentials;

            try {
               await connect();

               const user: IUser | null = await User.findOne({
                  email: email,
               });

               if (!user) {
                  throw new Error('User not found!');
               }

               const isPasswordValid = await bcrypt.compare(
                  password,
                  user.password
               );

               if (!isPasswordValid) {
                  throw new Error('Wrong Credentials!');
               }

               return user;
            } catch (error) {
               if (error instanceof Error) {
                  throw new Error(error.message);
               }
               throw new Error('Something went wrong');
            }
         },
      }),
   ],
   pages: {
      error: '/dashboard/login',
   },
});

export { handler as GET, handler as POST };
