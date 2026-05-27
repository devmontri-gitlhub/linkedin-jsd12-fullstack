import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import adminLoginRoute from './routes/admin.login.route.js';
import adminRoutes from './routes/admin.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
        'http://localhost:5173', // สำหรับทดสอบในเครื่อง
        'https://linkedin-jsd12-fullstack.vercel.app' // << เปลี่ยนเป็น URL หน้าเว็บ Vercel ของพี่ (ระวังอย่าให้มีเครื่องหมาย / ต่อท้ายนะครับ)
    ],
    credentials: true
}));

// Routes
app.use('/api/auth', adminLoginRoute);
app.use('/api/admins', adminRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/project_db';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => console.log('❌ MongoDB Connection Error:', err));