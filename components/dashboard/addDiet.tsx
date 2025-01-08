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

export default function AddDietChart() {
  const [dietCharts, setDietCharts] = useState<DietChart[]>([]);
  const [newChart, setNewChart] = useState<DietChart>({
    patientName: '',
    date: '',
    mealPlans: [
      { time: 'Morning', ingredients: '', instructions: '' },
      { time: 'Evening', ingredients: '', instructions: '' },
      { time: 'Night', ingredients: '', instructions: '' },
    ],
  });

  const handleInputChange = (field: string, value: string) => {
    setNewChart({ ...newChart, [field]: value });
  };

  const handleMealPlanChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedMealPlans = [...newChart.mealPlans];
    updatedMealPlans[index] = { ...updatedMealPlans[index], [field]: value };
    setNewChart({ ...newChart, mealPlans: updatedMealPlans });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDietCharts([...dietCharts, newChart]);
    setNewChart({
      patientName: '',
      date: '',
      mealPlans: [
        { time: 'Morning', ingredients: '', instructions: '' },
        { time: 'Evening', ingredients: '', instructions: '' },
        { time: 'Night', ingredients: '', instructions: '' },
      ],
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-white  bg-black">
      {/* Add New Diet Chart Form */}
      <Card className="mb-8 bg-gray-800 border-gray-700 shadow-lg shadow-purple-500/20">
        <CardHeader className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl">
          <CardTitle className="text-white text-xl">
            Add New Diet Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName" className="text-blue-300">
                  Patient Name
                </Label>
                <Input
                  id="patientName"
                  value={newChart.patientName}
                  onChange={(e) =>
                    handleInputChange('patientName', e.target.value)
                  }
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-blue-300">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newChart.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {newChart.mealPlans.map((meal, index) => (
              <div key={meal.time} className="space-y-2">
                <h3 className="text-lg font-semibold text-indigo-300">
                  {meal.time} Meal
                </h3>
                <div>
                  <Label
                    htmlFor={`ingredients-${meal.time}`}
                    className="text-blue-300"
                  >
                    Ingredients
                  </Label>
                  <Textarea
                    id={`ingredients-${meal.time}`}
                    value={meal.ingredients}
                    onChange={(e) =>
                      handleMealPlanChange(index, 'ingredients', e.target.value)
                    }
                    className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor={`instructions-${meal.time}`}
                    className="text-blue-300"
                  >
                    Instructions
                  </Label>
                  <Textarea
                    id={`instructions-${meal.time}`}
                    value={meal.instructions}
                    onChange={(e) =>
                      handleMealPlanChange(
                        index,
                        'instructions',
                        e.target.value
                      )
                    }
                    className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            ))}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Diet Chart
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Display Existing Diet Charts */}
      <div className="space-y-6">
        {dietCharts.map((chart, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 shadow-lg shadow-indigo-500/20"
          >
            <CardHeader className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl">
              <CardTitle className="text-white text-xl">
                Diet Chart for {chart.patientName} - {chart.date}
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
    </div>
  );
}
