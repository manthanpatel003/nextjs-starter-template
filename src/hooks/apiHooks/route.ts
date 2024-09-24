import { BASE_URL } from '@/config/config';

export const apiRoutes = {
  login: {
    post: {
      query: 'LOGIN',
      method: 'POST',
      url: `${BASE_URL}/user/login`,
    },
  },
  user: {
    get: {
      query: 'USER',
      method: 'GET',
      url: `${BASE_URL}/user/me`,
    },
    put: {
      query: 'USER',
      method: 'PUT',
      url: `${BASE_URL}/user`,
    },
    list: {
      query: 'USER_LIST',
      method: 'GET',
      url: `${BASE_URL}/user/`,
    },
    post: {
      query: 'UPDATE_PASSWORD',
      method: 'POST',
      url: `${BASE_URL}/user/update-password`,
    },
  },
};
