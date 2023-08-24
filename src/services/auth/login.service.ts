import AUTH_API from '../../libs/axios';

export const loginRequest = async (email: string, password: string) => {
  return AUTH_API.post(`/login`, { email, password });
};

export const profileRequest = async () => {
  return AUTH_API.get(`/profile`);
};
