import SignUp from '@/components/authentication/SignUp';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignUpPage = async () => {
  const session = await getServerSession();
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
