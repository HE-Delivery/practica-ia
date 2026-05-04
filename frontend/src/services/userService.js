import apiClient from './api'

export const userService = {
  getProfile: () => apiClient.get('/users/profile'),
  updateProfile: (data) => apiClient.put('/users/profile', data),
  deleteProfile: () => apiClient.delete('/users/profile'),
  getAllUsers: () => apiClient.get('/users'),
}
