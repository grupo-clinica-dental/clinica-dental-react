import AUTH_API from '../../libs/axios';

export const getAppointmentsRequest = async () => {
  return AUTH_API.get(`/appointments`);
};
