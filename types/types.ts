interface personalInfo {
  name: string;
  age: string;
  gender: string;
  contactNumber: string;
  emergencyContact: string;
}

interface medicalInfo {
  diseases: string;
  allergies: string;
  dietaryRestrictions: string;
}

interface locationInfo {
  floorNumber: string;
  roomNumber: string;
  bedNumber: string;
}

export interface PatientData {
  personalInfo: personalInfo;
  medicalInfo: medicalInfo;
  locationInfo: locationInfo;
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  room: string;
  bed: string;
  floor: number;
  contact: string;
  emergencyContact: string;
  mealLogs: MealLog[];
  dietaryRestrictions: DietaryRestriction[];
  allergies: Allergy[];
  diseases: Disease[];
  dietCharts: DietChart[];
}

interface MealLog {
  // Define the properties for MealLog if needed
  id: number;
  date: string;
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  servedBy: string | null;
}

interface DietaryRestriction {
  // Define the properties for DietaryRestriction if needed
  id: number;
  name: string;
}

interface Allergy {
  // Define the properties for Allergy if needed
  id: number;
  name: string;
}

interface Disease {
  // Define the properties for Disease if needed
  id: number;
  name: string;
}

interface DietChart {
  // Define the properties for DietChart if needed
  id: number;
  morningName: string;
  morningIngredients: string;
  eveningName: string;
  eveningIngredients: string;
  nightName: string;
  nightIngredients: string;
  instructions: string | null;
}
