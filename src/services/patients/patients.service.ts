import { AxiosResponse } from 'axios';
import AUTH_API from '../../libs/axios';
import { ApiResponseData } from '../../types/http/api/api-response-data.interface';

export const getPatientsRequest = async (): Promise<AxiosResponse<ApiResponseData<IPatient[]>>> => {
  return AUTH_API.get(`/patients`);
};
