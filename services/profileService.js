import api from '~/services/api';

export const profileService = {
  user: () => api.get(`users/profile/`),
  updateProfile: (data) => api.patch('users/profile/', data),
};
