import express from 'express';
import { login, logout, register } from '../controllers/admin.login.controller.js';

const router = express.Router();

router.post('/register', register); // ✨ เพิ่ม Route นี้เข้ามา
router.post('/login', login);
router.post('/logout', logout);

export default router;