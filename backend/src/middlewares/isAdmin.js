import { User } from '../models/User.js';

/** Verifica que el usuario autenticado tenga rol 'admin'. */
export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select('role');
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Acceso denegado: se requiere rol admin' });
    }
    next();
  } catch (error) {
    next(error);
  }
};
