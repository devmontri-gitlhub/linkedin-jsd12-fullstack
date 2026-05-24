import User from '../models/user.models.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) { res.status(500).json({ message: error.message }); }
};

// ✨ ปรับปรุงให้รองรับการแก้รหัสผ่าน
export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.fullname = req.body.fullname || user.fullname;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            user.password = req.body.password; // ถ้ามีการส่งรหัสใหม่มา จะทำการเข้ารหัสใหม่
        }
        
        await user.save();
        res.status(200).json(user);
    } catch (error) { res.status(500).json({ message: error.message }); }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted' });
    } catch (error) { res.status(500).json({ message: error.message }); }
};