import express from 'express';
import { protect } from '../middlewares/auth.js';
import { userController } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', protect, userController.getProfile);
router.put('/profile', protect, userController.updateProfile);
router.delete('/profile', protect, userController.deleteUser);
router.get('/', protect, userController.getAllUsers);

export default router;
