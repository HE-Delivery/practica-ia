import { User } from '../models/User.js';

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

  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find().select('-password');
      res.status(200).json(users);
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
