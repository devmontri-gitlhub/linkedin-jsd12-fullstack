import Admin from '../models/admin.models.js';

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        return res.status(200).json({ success: true, data: admins });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await Admin.findOne({ email });
        if (exist) return res.status(400).json({ success: false, message: 'อีเมลนี้ถูกใช้งานแล้ว' });

        const newAdmin = new Admin({ name, email, password });
        await newAdmin.save(); // ตัว Pre-save ในโมเดลจะแฮชรหัสให้ที่นี่เอง
        return res.status(201).json({ success: true, message: 'เพิ่มผู้ดูแลระบบเรียบร้อย' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const updated = await Admin.findByIdAndUpdate(id, { name, email }, { new: true }).select('-password');
        return res.status(200).json({ success: true, message: 'อัปเดตข้อมูลสำเร็จ', data: updated });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        await Admin.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: 'ลบแอดมินสำเร็จ' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};