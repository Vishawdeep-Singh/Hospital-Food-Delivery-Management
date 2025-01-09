import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getStaffs } from '@/actions/staff';
import { toast } from 'sonner';

const MealAssigner: React.FC = () => {
  interface Staff {
    id: number;
    name: string;
    pantries: { userId: number; pantryId: number }[];
  }

  const [staffList, setStaffList] = useState<Staff[]>([]);
  // const [dietCharts, setDietCharts] = useState<DietChart[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<string>('');
  const [selectedMeal, setSelectedMeal] = useState<string>('');
  const [selectedDiet, setSelectedDiet] = useState<string>('');

  useEffect(() => {
    // Fetch staff names and diet charts from the API when the component mounts
    const fetchData = async () => {
      try {
        // Fetch staff data
        const staffResponse = await getStaffs();
        if (staffResponse.error) {
          toast.error(staffResponse.error, {
            position: 'top-right',
          });
        }
        if (staffResponse.data) {
          setStaffList(staffResponse.data);
        }

        // Fetch diet chart data
        const dietChartResponse = await fetch('/api/dietCharts');
        const dietChartData = await dietChartResponse.json();
        // setDietCharts(dietChartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on component mount

  const handleAssign = () => {
    if (selectedStaff && selectedMeal && selectedDiet) {
      console.log(
        `Assigned ${selectedMeal} with ${selectedDiet} diet to staff ${selectedStaff}`
      );
    } else {
      alert('Please select staff member, meal, and diet chart.');
    }
  };

  return (
    <Card className="w-full  max-w-md mx-auto bg-[#192e42] text-white border font-bold border-gray-700 shadow-lg shadow-purple-900  hover:shadow-indigo-700 transition-shadow ease-in-out duration-300 rounded-xl p-4">
      <CardHeader>
        <CardTitle>Meal Assigner</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="staff" className="text-sm font-medium">
            Select Staff:
          </label>
          <Select onValueChange={setSelectedStaff} value={selectedStaff}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a staff member" />
            </SelectTrigger>
            <SelectContent>
              {staffList.map((staff) => (
                <SelectItem key={staff.id} value={staff.id.toString()}>
                  {staff.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="meal" className="text-sm font-medium">
            Select Meal:
          </label>
          <Select onValueChange={setSelectedMeal} value={selectedMeal}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a meal" />
            </SelectTrigger>
            <SelectContent>
              {/* You can populate the meals dynamically as well */}
              <SelectItem value="1">Breakfast</SelectItem>
              <SelectItem value="2">Lunch</SelectItem>
              <SelectItem value="3">Dinner</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="diet" className="text-sm font-medium">
            Select Diet Chart:
          </label>
          <Select onValueChange={setSelectedDiet} value={selectedDiet}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a diet chart" />
            </SelectTrigger>
            <SelectContent>
              {/* {dietCharts.map((diet) => (
                <SelectItem key={diet.id} value={diet.id.toString()}>
                  {diet.name}
                </SelectItem>
              ))} */}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleAssign}
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Assign Meal
        </Button>
      </CardContent>
    </Card>
  );
};

export default MealAssigner;
