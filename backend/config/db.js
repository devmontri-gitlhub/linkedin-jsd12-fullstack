import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // เชื่อมต่อฐานข้อมูลโดยดึงค่าจาก MONGO_URI ในไฟล์ .env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`🍃 MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Database Connection Error: ${error.message}`);
        process.exit(1); // หยุดการทำงานของเซิร์ฟเวอร์ทันทีหากเชื่อมต่อฐานข้อมูลไม่สำเร็จ
    }
};

export default connectDB;