import { useState, useEffect } from 'react';
import { getAdminProfile, createAdmin, updateAdmin, deleteAdmin } from '../services/Admin_Auth_Service';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = () => getAdminProfile().then(setAdmins).catch(console.error);
  useEffect(() => { fetchAdmins(); }, []);

  const handleAdd = async () => {
    const username = prompt('กรอก Username แอดมินใหม่:');
    if (!username) return;
    const password = prompt('กรอก Password:');
    if (!password) return;

    try {
      await createAdmin({ username, password });
      fetchAdmins();
    } catch (err) { alert('ไม่สามารถสร้างได้ (Username อาจซ้ำ)'); }
  };

  // ✨ ฟังก์ชันแก้ไขแอดมิน
  const handleEdit = async (id, oldUsername) => {
    const username = prompt('แก้ไข Username:', oldUsername) || oldUsername;
    const password = prompt('กรอกรหัสผ่านใหม่ (ปล่อยว่างถ้าไม่ต้องการเปลี่ยน):');
    
    const data = { username };
    if (password) data.password = password;

    try {
      await updateAdmin(id, data);
      fetchAdmins();
    } catch (err) { alert('เกิดข้อผิดพลาดในการแก้ไข'); }
  };

  const handleDelete = async (id) => {
    if (confirm('ยืนยันการลบแอดมินนี้?')) {
      await deleteAdmin(id);
      fetchAdmins();
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Admin List</h2>
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow-sm text-sm">
          + เพิ่มแอดมิน
        </button>
      </div>
      <ul className="divide-y divide-gray-200 mt-2">
        {admins.map(a => (
          <li key={a._id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{a.username}</p>
              <p className="text-xs text-gray-400">Role: Admin</p>
            </div>
            <div className="flex gap-2">
              {/* ✨ เพิ่มปุ่มแก้ไขตรงนี้ */}
              <button onClick={() => handleEdit(a._id, a.username)} className="bg-amber-500 text-white px-3 py-1 rounded text-xs hover:bg-amber-600">แก้ไข</button>
              <button onClick={() => handleDelete(a._id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600">ลบ</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManagement;