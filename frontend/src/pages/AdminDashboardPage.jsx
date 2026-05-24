import AdminManagement from '../components/AdminManagement';
import UserManagement from '../components/UserManagement';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <AdminManagement />
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminDashboardPage;