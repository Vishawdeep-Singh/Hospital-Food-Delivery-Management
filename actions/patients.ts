'use server';

import { authOptions } from '@/lib/authOptions';
import { error } from 'console';
import { getServerSession } from 'next-auth';

export async function getPatients() {
  try {
    const session = await getServerSession(authOptions);
    console.log(session?.user);
    if (!session?.user) {
      return { error: 'Unauthorized' };
    }
    const response = await prisma.patient.findMany({
      include: {
        mealLogs: true,
        dietaryRestrictions: true,
        allergies: true,
        diseases: true,
        dietCharts: true,
      },
    });
    return { data: response };
  } catch (error: any) {
    console.error(error.message);
    return { error: 'Not able to get patient data at the moment' };
  }
}
