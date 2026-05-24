export default function AboutMePage() {
    return (
        <div className="max-w-4xl bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* โลโก้จำลองโปรไฟล์ผู้พัฒนา */}
                <div className="w-32 h-32 bg-indigo-600 text-white font-black text-4xl flex items-center justify-center rounded-full shadow-lg shadow-indigo-600/30">
                    TRI
                </div>
                <div className="flex-1 space-y-3 text-center md:text-left">
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">คุณไตร (P'Tri)</h2>
                    <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase">Full-Stack Developer & IT Support Infrastructure</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        ยินดีต้อนรับเข้าสู่ระบบจัดการแอดมินหลังบ้าน ระบบนี้ขับเคลื่อนด้วยโครงสร้างสถาปัตยกรรมเว็บสมัยใหม่ 
                        ใช้ระบบการยืนยันตัวตนแบบสากลผ่าน **JWT (JSON Web Token)** ควบคู่กับ **HTTP-only Cookies** ฝั่งหน้าบ้านถูกรังสรรค์ด้วย **React คอร์ฟังก์ชันหลักครบชุด** พร้อมตกแต่งหน้าตาด้วย **Tailwind CSS เวอร์ชัน 4**
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200">React Hooks</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200">Node.js / Express</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200">JWT Security</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200">MongoDB Mongoose</span>
                    </div>
                </div>
            </div>
        </div>
    );
}