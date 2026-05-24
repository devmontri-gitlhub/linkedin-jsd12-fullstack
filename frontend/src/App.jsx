import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ExplainPage from './pages/ExplainPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ExplainPage />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="about" element={<AboutMePage />} />
      </Route>
    </Routes>
  );
}

export default App;