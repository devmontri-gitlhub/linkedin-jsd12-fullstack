import { Outlet, Link } from 'react-router-dom';
import AdminLogin from '../components/AdminLogin';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex gap-4">
          <Link to="/">Explain</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About Me</Link>
        </div>
        <AdminLogin /> {/* วาง Login ไว้บน Navbar */}
      </nav>
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;