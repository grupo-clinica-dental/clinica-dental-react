import React, { useEffect } from 'react';
import { useGlobalStore } from '../../store/auth';
import { getAppointmentsRequest } from '../../services/appointments/appointments.service';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const AppointmentsPage = () => {
  const appointments = useGlobalStore((state) => state.appointments);
  const setAppointments = useGlobalStore((state) => state.setAppointments);

  const loadAppointments = async () => {
    const response = await getAppointmentsRequest();
    setAppointments(response.data.data);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <main className="flex flex-col gap-y-10">
      <header>
        <div className="flex justify-between p-10">
          <h1 className="text-4xl font-bold">Citas</h1>
          <Link to={`/appointments/new`} className="flex items-center gap-x-2 rounded-full bg-maincolor-700 p-5 font-bold text-white">
            {' '}
            Nueva Cita <Plus />
          </Link>
        </div>
      </header>

      <section className="px-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-10">
          {appointments.map((app) => (
            <React.Fragment key={app.id}>
              {/* <span className="w-full">{JSON.stringify(app)}</span> */}
              <li className="flex w-full grow flex-col gap-y-2 sm:w-[45%] lg:w-[30%]" key={app.id}>
                <h3 className="text-2xl font-bold">Cita con {app.paciente.nombre}</h3>
                <div className="flex gap-x-2">
                  <h4>Fecha: </h4>
                  <span>{dayjs(app.fecha_final).format('DD-MM-YY')}</span>
                </div>
                <div className="flex gap-x-2">
                  <h4>Hora: </h4>
                  <div>
                    <span>{dayjs(app.fecha_inicio).format('h:mm A')}</span>
                    <span> - </span>
                    <span>{dayjs(app.fecha_final).format('h:mm A')}</span>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <h4>Estado</h4>
                  <span>{app.estado.nombre}</span>
                </div>
                <div className="flex gap-x-2">
                  <h4>Doctor</h4>
                  <span>{app.doctor.nombre}</span>
                </div>
                <div className="flex gap-x-2">
                  <h4>Color:</h4>
                  <span className="p-3" style={{ background: app.doctor.color.codigo }}></span>
                </div>
                <div className="flex gap-x-2">
                  <Link className="w-[40%} grow bg-maincolor-700 p-2 text-secondary-50" to={`/appointments/${app.id}`}>
                    Ir a Detalle
                  </Link>
                  <button className="w-[40%} grow bg-maincolor-700 p-2 text-secondary-50">ReAgendar</button>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AppointmentsPage;
