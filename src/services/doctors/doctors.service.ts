import { AxiosResponse } from 'axios';
import AUTH_API from '../../libs/axios';
import { Doctor } from '../../types/doctors/doctors.interface';
import { ApiResponseData } from '../../types/http/api/api-response-data.interface';

export const getDoctorsRequest = async (): Promise<AxiosResponse<ApiResponseData<Doctor[]>>> => {
  return AUTH_API.get(`/doctors`);
};
