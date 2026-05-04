import { authService } from '../services/authService.js';

export const authController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password, passwordConfirm } = req.body;

      // Validar campos requeridos
      if (!name || !email || !password || !passwordConfirm) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
      }

      if (password !== passwordConfirm) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden' });
      }

      const result = await authService.register(name, email, password);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos' });
      }

      const result = await authService.login(email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },

  validateToken: (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
      }

      const decoded = authService.validateToken(token);
      res.status(200).json({ valid: true, userId: decoded.id });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  },
};
