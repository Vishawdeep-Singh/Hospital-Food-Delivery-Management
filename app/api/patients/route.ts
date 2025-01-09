import { authOptions } from '@/lib/authOptions';
import prisma from '@/lib/db';
import { error } from 'console';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const req = {
      headers: request.headers,
      method: request.method,
      body: request.body,
    };
    console.log(req);
    const session = await getServerSession({ req, options: authOptions });
    console.log(session?.user);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
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
    return NextResponse.json({ data: response });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: 'Not able to get patient data at the moment' },
      { status: 500 }
    );
  }
}
