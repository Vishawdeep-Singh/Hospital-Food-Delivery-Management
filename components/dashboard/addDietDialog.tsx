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
import GeneralModal from '../DialogComponent';

export default function AddDietModal() {
  return (
    <GeneralModal
      buttonLabel="Add Diet Chart"
      title="Add Diet Chart"
      component={<AddDietChart />}
    />
  );
}
