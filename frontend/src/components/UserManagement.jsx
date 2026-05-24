import { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from '../services/UserService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => getAllUsers().then(setUsers).catch(console.error);
  useEffect(() => { fetchUsers(); }, []);

  const handleAdd = async () => {
    const fullname = prompt('กรอกชื่อ-นามสกุล ผู้ใช้งาน:');
    if (!fullname) return;
    const email = prompt('กรอกอีเมล:');
    if (!email) return;
    const password = prompt('กรอกรหัสผ่าน (Password):'); // ✨ รับรหัสผ่าน
    if (!password) return;
    
    try {
      await createUser({ fullname, email, password });
      fetchUsers();
    } catch (err) { alert('เกิดข้อผิดพลาดในการสร้าง User'); }
  };

  const handleEdit = async (id, oldName, oldEmail) => {
    const fullname = prompt('แก้ไขชื่อ-นามสกุล:', oldName) || oldName;
    const email = prompt('แก้ไขอีเมล:', oldEmail) || oldEmail;
    const password = prompt('กรอกรหัสผ่านใหม่ (ปล่อยว่างถ้าไม่ต้องการเปลี่ยน):'); // ✨ แก้รหัสผ่านได้
    
    const data = { fullname, email };
    if (password) data.password = password;

    try {
      await updateUser(id, data);
      fetchUsers();
    } catch (err) { alert('เกิดข้อผิดพลาดในการแก้ไข'); }
  };

  const handleDelete = async (id) => {
    if (confirm('ยืนยันการลบผู้ใช้งานนี้?')) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">User List</h2>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-sm text-sm">
          + เพิ่มผู้ใช้งาน
        </button>
      </div>
      <ul className="divide-y divide-gray-200 mt-2">
        {users.map(u => (
          <li key={u._id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{u.fullname}</p>
              <p className="text-sm text-gray-500">{u.email}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(u._id, u.fullname, u.email)} className="bg-amber-500 text-white px-3 py-1 rounded text-xs hover:bg-amber-600">แก้ไข</button>
              <button onClick={() => handleDelete(u._id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600">ลบ</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;