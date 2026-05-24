import Admin from '../models/admin.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        
        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '1d' });

        res.cookie('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400000 // 1 วัน
        });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const logout = (req, res) => {
    res.clearCookie('admin_token');
    res.status(200).json({ message: 'Logout successful (Client Reset)' });
};

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // เช็กว่ามี username นี้ในระบบหรือยัง
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // สร้าง Admin ใหม่ (รหัสผ่านจะถูกเข้ารหัสอัตโนมัติจากไฟล์ Models)
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};