import SignUp from '@/components/authentication/SignUp';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignUpPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    redirect('/dashboard');
  }
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
