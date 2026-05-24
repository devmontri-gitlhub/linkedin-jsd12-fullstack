import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controllers.js';
import { verifyAdmin } from '../middleware/admin.auth.middleware.js';

const router = express.Router();

router.get('/', verifyAdmin, getUsers);
router.post('/', verifyAdmin, createUser);
router.put('/:id', verifyAdmin, updateUser);
router.delete('/:id', verifyAdmin, deleteUser);

export default router;