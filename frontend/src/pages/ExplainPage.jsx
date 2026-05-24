// ExplainPage.jsx
const ExplainPage = () => {
  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h1 className="text-3xl font-bold mb-4">อธิบายโปรเจกต์</h1>
      <p>ระบบนี้ใช้ React ทำหน้าบ้าน และ Node.js + Express + MongoDB ทำหลังบ้าน</p>
      <p>มีการเข้ารหัสผ่านด้วย bcrypt และจัดการสิทธิ์ด้วย JWT Token (HTTP-Only Cookie)</p>
    </div>
  );
};
export default ExplainPage;