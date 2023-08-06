import axios from 'axios';
import { API_URL } from '../config/config';
import { useAuthStore } from '../store/auth';

const AUTH_API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// extendin Axios Headers with auth
// interface AxiosOptions extends AxiosRequestHeaders {
//   Authorization: string;
// }

AUTH_API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  // Update the headers using AxiosRequestConfig type
  config.headers.set('Authorization', `Bearer ${token}`);

  return config;
});

export default AUTH_API;
