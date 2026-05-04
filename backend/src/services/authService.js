import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const authService = {
  generateToken: (userId) => {
    return jwt.sign(
      { id: userId },
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

    const token = authService.generateToken(user._id);
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

    const token = authService.generateToken(user._id);
    return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token };
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
