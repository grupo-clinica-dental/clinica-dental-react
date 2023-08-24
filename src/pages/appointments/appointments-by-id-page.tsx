import { useParams } from 'react-router-dom';

export default function AppointmentById() {
  const { id } = useParams();

  return <div>Appointment with id: {id}</div>;
}
