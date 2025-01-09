import { getPatients } from '@/actions/patients';
import { Manager } from '@/components/dashboard/manager';
import { Navbar } from '@/components/navbar/navbar';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { toast } from 'sonner';

async function getPatientsData() {
  const response = await getPatients();
  if (response.data) {
    return response.data;
  } else {
    toast.error('Not able to get patient data at the moment');
    return [];
  }
}
const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const patients = await getPatientsData();
  console.log(patients);
  return (
    <div className="bg-gradient-to-b p-4 min-h-screen from-gray-900 to-black">
      <Navbar />
      <Manager patientData={patients} />
    </div>
  );
};

export default DashboardPage;
