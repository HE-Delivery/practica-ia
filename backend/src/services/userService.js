import { User } from '../models/User.js';

export const userService = {
  /**
   * Obtiene un listado paginado de usuarios.
   * @param {object} options - { page, limit, role, isActive }
   * @returns {{ users: Array, total: number, page: number, totalPages: number }}
   */
  getAllUsers: async ({ page = 1, limit = 10, role, isActive } = {}) => {
    const filter = {};
    if (role) filter.role = role;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const skip = (page - 1) * limit;
    const [users, total] = await Promise.all([
      User.find(filter).select('-password').skip(skip).limit(limit).sort({ createdAt: -1 }),
      User.countDocuments(filter),
    ]);

    return {
      users,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
    };
  },
};
