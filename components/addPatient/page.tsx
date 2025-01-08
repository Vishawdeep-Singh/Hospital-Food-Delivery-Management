'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PatientData } from '@/types/types';

const AddPatientDetails = () => {
  const [patientData, setPatientData] = useState<PatientData>({
    personalInfo: {
      name: '',
      age: '',
      gender: '',
      contactNumber: '',
      emergencyContact: '',
    },
    medicalInfo: {
      diseases: '',
      allergies: '',
      dietaryRestrictions: '',
    },
    locationInfo: {
      floorNumber: '',
      roomNumber: '',
      bedNumber: '',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Patient data:', patientData);
  };

  const handleInputChange = <
    T extends keyof PatientData,
    K extends keyof PatientData[T],
  >(
    category: T,
    field: K,
    value: string
  ) => {
    setPatientData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  return (
    <div className={`w-full max-w-4xl mx-auto p-4  text-white bg-black `}>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Card className="mb-6 bg-gray-800 border-gray-700 shadow-lg shadow-purple-500/20">
          <CardHeader className="bg-gradient-to-r from-blue-900 rounded-xl to-purple-900">
            <CardTitle className="text-white text-xl">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-blue-300">
                  Patient Name
                </Label>
                <Input
                  required
                  id="name"
                  value={patientData.personalInfo.name}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'name', e.target.value)
                  }
                  placeholder="Enter patient name"
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="age" className="text-blue-300">
                  Age
                </Label>
                <Input
                  required
                  id="age"
                  type="number"
                  value={patientData.personalInfo.age}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'age', e.target.value)
                  }
                  placeholder="Enter age"
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender" className="text-blue-300">
                  Gender
                </Label>
                <Input
                  required
                  id="gender"
                  value={patientData.personalInfo.gender}
                  onChange={(e) =>
                    handleInputChange('personalInfo', 'gender', e.target.value)
                  }
                  placeholder="Enter gender"
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="contact" className="text-blue-300">
                  Contact Number
                </Label>
                <Input
                  required
                  id="contact"
                  value={patientData.personalInfo.contactNumber}
                  onChange={(e) =>
                    handleInputChange(
                      'personalInfo',
                      'contactNumber',
                      e.target.value
                    )
                  }
                  placeholder="Enter contact number"
                  className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="mb-6 bg-gray-800 border-gray-700 shadow-lg shadow-indigo-500/20">
          <CardHeader className="bg-gradient-to-r rounded-xl from-indigo-900 to-purple-900">
            <CardTitle className="text-white text-xl">
              Medical Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 mt-4">
            <div>
              <Label htmlFor="diseases" className="text-indigo-300">
                Diseases/Conditions
              </Label>
              <Input
                required
                id="diseases"
                value={patientData.medicalInfo.diseases}
                onChange={(e) =>
                  handleInputChange('medicalInfo', 'diseases', e.target.value)
                }
                placeholder="Enter diseases/conditions"
                className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="allergies" className="text-indigo-300">
                Allergies
              </Label>
              <Input
                required
                id="allergies"
                value={patientData.medicalInfo.allergies}
                onChange={(e) =>
                  handleInputChange('medicalInfo', 'allergies', e.target.value)
                }
                placeholder="Enter allergies"
                className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <Label htmlFor="dietary" className="text-indigo-300">
                Dietary Restrictions
              </Label>
              <Input
                required
                id="dietary"
                value={patientData.medicalInfo.dietaryRestrictions}
                onChange={(e) =>
                  handleInputChange(
                    'medicalInfo',
                    'dietaryRestrictions',
                    e.target.value
                  )
                }
                placeholder="Enter dietary restrictions"
                className="bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Location Information */}
        <Card className="mb-6 bg-gray-800 border-gray-700 shadow-lg shadow-blue-500/20">
          <CardHeader className="bg-gradient-to-r rounded-xl from-blue-900 to-indigo-900">
            <CardTitle className="text-white text-xl">
              Location Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <Label htmlFor="floor" className="text-blue-300">
                Floor Number
              </Label>
              <Input
                required
                id="floor"
                value={patientData.locationInfo.floorNumber}
                onChange={(e) =>
                  handleInputChange(
                    'locationInfo',
                    'floorNumber',
                    e.target.value
                  )
                }
                placeholder="Floor"
                className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="room" className="text-blue-300">
                Room Number
              </Label>
              <Input
                required
                id="room"
                value={patientData.locationInfo.roomNumber}
                onChange={(e) =>
                  handleInputChange(
                    'locationInfo',
                    'roomNumber',
                    e.target.value
                  )
                }
                placeholder="Room"
                className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="bed" className="text-blue-300">
                Bed Number
              </Label>
              <Input
                required
                id="bed"
                value={patientData.locationInfo.bedNumber}
                onChange={(e) =>
                  handleInputChange('locationInfo', 'bedNumber', e.target.value)
                }
                placeholder="Bed"
                className="bg-gray-700 text-white border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Save Patient Information
        </Button>
      </form>
    </div>
  );
};

export default AddPatientDetails;
