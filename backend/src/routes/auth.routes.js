import express from 'express';
import { authController } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/validate', protect, authController.validateToken);
router.post('/logout-all', protect, authController.logoutAllDevices);

export default router;
