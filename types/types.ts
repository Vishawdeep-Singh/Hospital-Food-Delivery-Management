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
