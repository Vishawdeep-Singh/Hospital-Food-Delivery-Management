'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MealPlan {
  time: 'Morning' | 'Evening' | 'Night';
  ingredients: string;
  instructions: string;
}

interface DietChart {
  id: string;
  patientName: string;
  date: string;
  mealPlans: MealPlan[];
}

// Mock data for demonstration purposes
const mockDietCharts: DietChart[] = [
  {
    id: '1',
    patientName: 'John Doe',
    date: '2023-07-01',
    mealPlans: [
      {
        time: 'Morning',
        ingredients: 'Oatmeal, banana, almonds',
        instructions: 'No added sugar',
      },
      {
        time: 'Evening',
        ingredients: 'Grilled chicken, mixed vegetables',
        instructions: 'Low salt',
      },
      {
        time: 'Night',
        ingredients: 'Greek yogurt, berries',
        instructions: 'No additional toppings',
      },
    ],
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    date: '2023-07-02',
    mealPlans: [
      {
        time: 'Morning',
        ingredients: 'Whole grain toast, avocado, eggs',
        instructions: 'Limit to 2 eggs',
      },
      {
        time: 'Evening',
        ingredients: 'Baked salmon, quinoa, broccoli',
        instructions: 'Use olive oil for cooking',
      },
      {
        time: 'Night',
        ingredients: 'Cottage cheese, peach slices',
        instructions: 'Small portion',
      },
    ],
  },
  // Add more mock data as needed
];

export default function DietChartsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dietCharts, setDietCharts] = useState<DietChart[]>(mockDietCharts);

  const filteredCharts = dietCharts.filter(
    (chart) =>
      chart.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chart.date.includes(searchTerm)
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Diet Charts List</h1>

      <Card className="mb-6 bg-gray-800 border-gray-700 shadow-lg shadow-purple-500/20">
        <CardHeader className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl">
          <CardTitle className="text-white text-xl">
            Search Diet Charts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Label htmlFor="search" className="text-blue-300">
              Search
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Search by patient name or date"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </CardContent>
      </Card>

      <ScrollArea className="h-[600px] rounded-md border border-gray-700">
        <div className="space-y-4 p-4">
          {filteredCharts.map((chart) => (
            <Card
              key={chart.id}
              className="bg-gray-800 border-gray-700 shadow-lg shadow-indigo-500/20"
            >
              <CardHeader className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl">
                <CardTitle className="text-white text-xl">
                  {chart.patientName} - {chart.date}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {chart.mealPlans.map((meal) => (
                  <div key={meal.time} className="space-y-2">
                    <h3 className="text-lg font-semibold text-indigo-300">
                      {meal.time} Meal
                    </h3>
                    <p className="text-blue-300">
                      Ingredients: {meal.ingredients}
                    </p>
                    <p className="text-blue-300">
                      Instructions: {meal.instructions}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
