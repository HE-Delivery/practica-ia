import express from 'express';
import { protect } from '../middlewares/auth.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { userController } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, userController.updateProfile);
router.delete('/profile', protect, userController.deleteUser);

// Solo admins pueden listar todos los usuarios
router.get('/', protect, isAdmin, userController.getAllUsers);

export default router;
