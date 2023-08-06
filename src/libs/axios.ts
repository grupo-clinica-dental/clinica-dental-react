import axios from 'axios';
import { API_URL } from '../config/config';
import { useAuthStore } from '../store/auth';

const AUTH_API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

AUTH_API.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

export default AUTH_API;
