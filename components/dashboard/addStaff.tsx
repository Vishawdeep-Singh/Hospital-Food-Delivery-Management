'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface MealPlan {
  time: 'Morning' | 'Evening' | 'Night';
  ingredients: string;
  instructions: string;
}

interface DietChart {
  patientName: string;
  date: string;
  mealPlans: MealPlan[];
}

export default function AddStaff() {
  const [staffName, setName] = useState('');
  const [staffId, setStaffId] = useState('');
  const [location, setLocation] = useState('');

  const handleInputChange = (field: string, value: string) => {
    if (field === 'name') {
      setName(value);
    } else if (field === 'staffId') {
      setStaffId(value);
    } else if (field === 'location') {
      setLocation(value);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white  bg-black">
      {/* Add New Diet Chart Form */}
      <Card className="mb-8 bg-gray-800 border-gray-700 shadow-lg shadow-purple-500/20">
        <CardHeader className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl">
          <CardTitle className="text-white text-xl">Add New Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName" className="text-blue-300">
                  Staff Name
                </Label>
                <Input
                  id="staffName"
                  value={staffName}
                  onChange={(e) =>
                    handleInputChange('staffName', e.target.value)
                  }
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-blue-300">
                  Staff Id
                </Label>
                <Input
                  id="staffId"
                  type="number"
                  value={staffId}
                  onChange={(e) => handleInputChange('staffId', e.target.value)}
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-blue-300">
                  Location
                </Label>
                <Input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) =>
                    handleInputChange('location', e.target.value)
                  }
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Staff
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
