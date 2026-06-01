import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('_id tokenVersion');

    if (!user) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }

    if ((decoded.tokenVersion ?? 0) !== user.tokenVersion) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

export const optionalAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
    }
  } catch (error) {
    // Token inválido, continuar sin autenticación
  }
  next();
};
