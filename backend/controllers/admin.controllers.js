import Admin from '../models/admin.models.js';

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        res.status(200).json(admins);
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

export const createAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) { res.status(500).json({ message: error.message }); }
};

// ✨ เพิ่มฟังก์ชันอัปเดต Admin
export const updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        admin.username = req.body.username || admin.username;
        if (req.body.password) {
            admin.password = req.body.password;
        }
        
        await admin.save();
        res.status(200).json(admin);
    } catch (error) { res.status(500).json({ message: error.message }); }
};

export const deleteAdmin = async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Admin deleted' });
    } catch (error) { res.status(500).json({ message: error.message }); }
};