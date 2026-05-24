import express from 'express';
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/admin.controllers.js';
import { verifyAdmin } from '../middleware/admin.auth.middleware.js';

const router = express.Router();

router.get('/', verifyAdmin, getAdmins);
router.post('/', verifyAdmin, createAdmin);
router.put('/:id', verifyAdmin, updateAdmin); // ✨ เพิ่ม Route Edit
router.delete('/:id', verifyAdmin, deleteAdmin);

export default router;