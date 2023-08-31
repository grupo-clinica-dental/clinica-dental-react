import { AxiosResponse } from 'axios';
import AUTH_API from '../../../libs/axios';
import { ApiResponseData } from '../../../types/http/api/api-response-data.interface';
import { TemplatesByType } from '../../../types/messages/templates/templates.interface';

export const getTemplatesByTypeRequest = async (): Promise<AxiosResponse<ApiResponseData<TemplatesByType>>> => {
  return AUTH_API.get(`messages/templates/by-type`);
};
