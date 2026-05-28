import { User } from '../models/User.js';
import { userService } from '../services/userService.js';

export const userController = {
  getProfile: async (req, res, next) => {
    try {
      const user = await User.findById(req.userId).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  updateProfile: async (req, res, next) => {
    try {
      const { name, email } = req.body;
      const user = await User.findByIdAndUpdate(
        req.userId,
        { name, email },
        { new: true, runValidators: true }
      );
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },

  /**
   * GET /api/users
   * Query params: page (default 1), limit (default 10), role ('user'|'admin'), isActive ('true'|'false')
   */
  getAllUsers: async (req, res, next) => {
    try {
      const { page = 1, limit = 10, role, isActive } = req.query;

      const parsedLimit = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);
      const parsedPage = Math.max(parseInt(page, 10) || 1, 1);

      const result = await userService.getAllUsers({
        page: parsedPage,
        limit: parsedLimit,
        role,
        isActive,
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.userId);
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      next(error);
    }
  },
};
