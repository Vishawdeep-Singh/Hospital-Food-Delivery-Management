import AddPatientModal from '../addPatient/addPatient';
import { Button } from '../ui/button';
import Link from 'next/link';
import AddDietModal from './addDietDialog';
import AddStaffModal from './addStaffModal';

export const Manager = () => {
  return (
    <div>
      <div className="flex justify-between">
        <AddPatientModal />
        <AddStaffModal />
        <AddDietModal />
      </div>
    </div>
  );
};
