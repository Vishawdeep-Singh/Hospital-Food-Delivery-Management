'use client';

import AddPatientDetails from '@/components/addPatient/page';
import GeneralModal from '../DialogComponent';

export default function AddPatientModal() {
  return (
    <GeneralModal
      buttonLabel="Add Patient"
      title="Add Patient Data"
      component={<AddPatientDetails />}
    />
  );
}
