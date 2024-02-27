import api from '~/services/api';

export const authService = {
  sciences: (data) => api.get(`tests/sciences/`, data),
  specialists: (data) => api.get('tests/specialists/', data),
  subjects: (data) => api.get('tests/subjects/', data),
  classes: (data) => api.get('tests/classes/', data),
  testTypes: (data) => api.get('tests/test-types/', data),
  testHistory: (data) => api.get('tests/test-history/', data),
  examTests: (data) => api.get('tests/exam-tests/', data),
  researches: (data) => api.get('tests/researches/', data),
  researchesId: (data, payload) => api.get(`tests/researches/${payload}`, data),
  specifications: (data) => api.get('tests/researches/specifications', data),
};
