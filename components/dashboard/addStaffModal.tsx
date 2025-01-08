'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddPatientDetails from '@/components/addPatient/page';
import AddDietChart from './addDiet';
import AddStaff from './addStaff';
import GeneralModal from '../DialogComponent';

export default function AddStaffModal() {
  return (
    <GeneralModal
      buttonLabel="Add Pantry Staff"
      title="Add Pantry Staff"
      component={<AddStaff />}
    />
  );
}
