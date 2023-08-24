import AUTH_API from '../../libs/axios';

export const getRolesRequest = async () => {
  return AUTH_API.get(`/roles`);
};
