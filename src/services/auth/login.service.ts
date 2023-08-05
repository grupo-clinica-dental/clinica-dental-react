import axios from 'axios';
import { API_URL } from '../../config/config';

export const loginRequest = async (email: string, password: string) => {
  console.log(API_URL);
  return axios.post(`${API_URL}/login`, { email, password });
};
