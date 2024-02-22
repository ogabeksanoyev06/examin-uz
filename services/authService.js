import api from '~/services/api';

export const authService = {
  login: (data) => api.get(`/jawbdawjdh`, data),
  register: (data) => api.post("/create")
};
