import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const authService = {
  generateToken: (userId, tokenVersion = 0) => {
    return jwt.sign(
      { id: userId, tokenVersion },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
  },

  register: async (name, email, password) => {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    // Crear nuevo usuario
    const user = await User.create({
      name,
      email,
      password,
    });

    const token = authService.generateToken(user._id, user.tokenVersion);
    return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token };
  },

  login: async (email, password) => {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    const token = authService.generateToken(user._id, user.tokenVersion);
    return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token };
  },

  logoutAllDevices: async (userId) => {
    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { tokenVersion: 1 } },
      { new: true, runValidators: true }
    );

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return user.tokenVersion;
  },

  validateToken: (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new Error('Token inválido o expirado');
    }
  },
};
