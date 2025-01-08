'use server';

import prisma from '@/lib/db';
import { Role } from '@prisma/client';
import bcrypt from 'bcrypt';

export const signUp = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const hashedPassword = await bcrypt.hash(password as string, 10);
  const isExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (isExists) {
    return {
      error: 'User Already Exists',
    };
  }
  if (!Object.keys(Role).includes(role)) {
    return {
      error: `Invalid role: ${role}. Allowed roles are ${Object.keys(Role).join(', ')}.`,
    };
  }

  try {
    const response = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: Role[role as keyof typeof Role],
      },
    });

    return { data: response };
  } catch (error) {
    console.error('Error creating user:', error);
    return { error: 'Error creating user' };
  }
};
