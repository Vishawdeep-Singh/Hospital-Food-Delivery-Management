import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/db';
import { Role } from '@prisma/client';
import { getServerSession } from 'next-auth';

export async function getStaffs() {
  try {
    const session = await getServerSession(authOptions);
    console.log(session?.user);
    if (!session?.user) {
      return { error: 'Unauthorized' };
    }
    const response = await prisma.user.findMany({
      where: {
        role: Role.STAFF,
      },
      select: {
        id: true,
        name: true,
        pantries: true,
      },
    });
    return { data: response };
  } catch (error: any) {
    console.error(error.message);
    return { error: 'Not able to get staff data at the moment' };
  }
}
