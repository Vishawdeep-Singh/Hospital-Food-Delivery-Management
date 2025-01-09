'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { signUp } from '@/actions/signup';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { LoaderCircle } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [contact, setContact] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !role || !contact) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    try {
      const response = await signUp(name, email, contact, password, role);

      if (response.data) {
        toast.success('User created successfully', {
          position: 'top-right',
          duration: 5000,
        });

        const signinresponse = await signIn('credentials', {
          email: email,
          password: password,
          redirect: false,
        });

        if (signinresponse?.ok) {
          router.push(`/dashboard`);
        } else {
          toast.error('Login failed. Please try again.', {
            position: 'top-right',
            duration: 5000,
          });
        }
      } else {
        toast.error(
          response.error || 'Something went wrong. Please try again.',
          {
            position: 'top-right',
            duration: 5000,
          }
        );
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.', {
        position: 'top-right',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };
  //   bg-gradient-to-b from-gray-900 to-black

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create your account for Hospital Food Delivery Management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact No.</Label>
              <Input
                id="contact"
                type="number"
                placeholder="123-456-7890"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={setRole} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MANAGER">Food Manager</SelectItem>
                  <SelectItem value="STAFF">Pantry Staff</SelectItem>
                  <SelectItem value="DELIVERY">Delivery Personnel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full mt-4" type="submit" disabled={loading}>
              {loading && (
                <LoaderCircle
                  color="white"
                  className="mr-2 h-4 w-4  animate-spin"
                />
              )}
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
