import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/User';
import connect from '@/utils/db';


export const POST = async (request: Request) => {
   const { name, email, password } = await request.json();

   const hashedPassword = await bcrypt.hash(password, 5);

   const newUser = new User({
      name,
      email,
      password: hashedPassword,
   });

   try {
      await connect();

      await newUser.save();

      return new NextResponse('User has been created', { status: 201 });
   } catch (error) {
      if (error instanceof Error) {
         return new NextResponse(error.message, { status: 500 });
      }
      return new NextResponse('Something went wrong', { status: 500 });
   }
};
