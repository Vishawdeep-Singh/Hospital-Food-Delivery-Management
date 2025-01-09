'use client';
import AddPatientModal from '../addPatient/addPatient';
import { Button } from '../ui/button';
import Link from 'next/link';
import AddDietModal from './addDietDialog';
import AddStaffModal from './addStaffModal';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import MealAssigner from './mealAssigner';
import { Patient } from '@/types/types';

const data = [
  {
    id: 112,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    room: '101',
    bed: 'A1',
    floor: 1,
    contact: '123-456-7890',
    breakfast: 'Delivered',
    lunch: 'In Progress',
    dinner: 'Delayed',
  },
  {
    id: 11,
    name: 'Jane Smith',
    age: 39,
    gender: 'Female',
    room: '102',
    bed: 'B3',
    floor: 2,
    contact: '987-654-3210',
    breakfast: 'Delivered',
    lunch: 'In Progress',
    dinner: 'Delayed',
  },
  {
    id: 20,
    name: 'Emily Johnson',
    age: 55,
    gender: 'Female',
    room: '103',
    bed: 'C2',
    floor: 3,
    contact: '456-789-1234',
    breakfast: 'Delivered',
    lunch: 'In Progress',
    dinner: 'Delayed',
  },
];

export const Manager = ({ patientData }: { patientData: Patient[] }) => {
  console.log('hi', patientData);
  return (
    <main className="z-0 h-full">
      <div className="flex justify-between">
        <AddPatientModal />
        <AddStaffModal />
        <AddDietModal />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-1 mt-10  gap-6">
        {/* Food Deliveries */}

        {/* Pantry Performance */}
        <div className="bg-[#192e42] text-white border font-bold border-gray-700 shadow-lg shadow-purple-900  hover:shadow-indigo-700 transition-shadow ease-in-out duration-300 rounded-xl p-4">
          <h2 className="text-lg font-bold mb-4">Pantry Performance</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Meals Prepared Today</span>
              <span className="font-bold text-blue-400">120</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pending Deliveries</span>
              <span className="font-bold text-yellow-400">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Delayed Deliveries</span>
              <span className="font-bold text-red-400">2</span>
            </div>
          </div>
        </div>
        <div className="bg-[#192e42] h-96 overflow-auto text-white border font-bold border-gray-700 shadow-lg shadow-purple-900  hover:shadow-indigo-700 transition-shadow ease-in-out duration-300 rounded-xl p-4">
          <h2 className="text-lg font-bold mb-4">Patient Information</h2>
          <Table className="w-full text-left text-sm text-gray-400">
            <TableHeader className="bg-gray-700 text-gray-300">
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>Bed</TableCell>
                <TableCell>Floor</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Breakfast</TableCell>
                <TableCell>Lunch</TableCell>
                <TableCell>Dinner</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientData.map((patient, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-700 transition duration-300"
                >
                  <TableCell>{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.room}</TableCell>
                  <TableCell>{patient.bed}</TableCell>
                  <TableCell>{patient.floor}</TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{'patient.dietCharts.'}</TableCell>
                  <TableCell>{'patient.lunch'}</TableCell>
                  <TableCell>{'patient.dinner'}</TableCell>
                  <TableCell>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md"
                      onClick={() =>
                        alert(`Viewing details for ${patient.name}`)
                      }
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <MealAssigner />
      </div>
    </main>
  );
};

function PatientTable() {
  const data = [
    {
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      room: '101',
      bed: 'A1',
      floor: 1,
      contact: '123-456-7890',
    },
    {
      name: 'Jane Smith',
      age: 39,
      gender: 'Female',
      room: '102',
      bed: 'B3',
      floor: 2,
      contact: '987-654-3210',
    },
    {
      name: 'Emily Johnson',
      age: 55,
      gender: 'Female',
      room: '103',
      bed: 'C2',
      floor: 3,
      contact: '456-789-1234',
    },
  ];

  return (
    <div className="bg-gray-800 border-gray-700 shadow-lg shadow-blue-500/20 rounded-xl p-4">
      <h2 className="text-lg font-bold text-white mb-4">Patient Information</h2>
      <Table className="w-full text-left text-sm text-gray-400">
        <TableHeader className="bg-gray-700 text-gray-300">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Bed</TableCell>
            <TableCell>Floor</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="hover:bg-gray-700 transition duration-300"
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.bed}</TableCell>
              <TableCell>{row.floor}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md"
                  onClick={() => alert(`Viewing details for ${row.name}`)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PatientTable;
