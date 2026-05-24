import { useState, useEffect } from 'react';
import { loginAdmin, logoutAdmin } from '../services/admin.service';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn');
    if (status === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginAdmin(username, password);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      alert('เข้าสู่ระบบสำเร็จ!');
      navigate('/dashboard'); 
      window.location.reload();
    } catch (err) {
      alert('เข้าสู่ระบบไม่สำเร็จ: รหัสผ่านไม่ถูกต้อง');
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      alert('ออกจากระบบเรียบร้อย (Clear Cookie)');
      navigate('/'); 
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  // ✨ UI ตอน Login สำเร็จ (สไตล์ Admin Profile)
  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-3 bg-white/15 px-4 py-1.5 rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {/* จุดไฟสีเขียวกระพริบ */}
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <span className="text-white font-medium tracking-wide text-sm">Admin Online</span>
        </div>
        
        {/* เส้นคั่นกลาง */}
        <div className="w-px h-5 bg-white/30 mx-1"></div> 
        
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md"
        >
          Logout
        </button>
      </div>
    );
  }

 
return (
    <form onSubmit={handleLogin} className="flex gap-2 items-center">
      <input 
        type="text" 
        placeholder="Username" 
        // ปรับเป็นพื้นขาวล้วน ขอบมน (rounded-md) มีเงาบางๆ (shadow-sm) และเวลาคลิกเรืองแสงสีเหลืองนุ่มๆ
        className="px-3 py-1.5 w-36 text-sm text-gray-800 bg-white border border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        // ใช้คลาสเดียวกันเพื่อให้ดีไซน์ไปในทิศทางเดียวกัน
        className="px-3 py-1.5 w-36 text-sm text-gray-800 bg-white border border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <button 
        type="submit" 
        className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-1.5 rounded-md transition-all font-bold shadow-sm text-sm"
      >
        Login
      </button>
    </form>
  );
};

export default AdminLogin;