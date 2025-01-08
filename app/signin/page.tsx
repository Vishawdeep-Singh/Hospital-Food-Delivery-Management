import SignIn from '@/components/authentication/SignIn';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  const session = await getServerSession();
  if (session?.user) {
    redirect('/dashboard');
  }
  return <SignIn />;
};

export default SignInPage;
