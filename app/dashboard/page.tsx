import { Manager } from '@/components/dashboard/manager';
import { Navbar } from '@/components/navbar/navbar';

const DashboardPage = async () => {
  return (
    <div className="bg-gradient-to-b p-4 from-gray-900 h-screen to-black">
      <Navbar />
      <Manager />
    </div>
  );
};

export default DashboardPage;
