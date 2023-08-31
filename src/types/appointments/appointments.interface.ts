interface Color {
  id: number;
  codigo: string;
}

interface Doctor {
  id: number;
  nombre: string;
  color: Color;
}

export interface Paciente {
  id: number;
  nombre: string;
  email: string;
}

interface Estado {
  id: number;
  nombre: string;
}

interface Mensaje {
  cita_id: number;
  tipo: string;
  fecha_programada: string;
  estado_mensaje_nombre: string;
}

export interface Appointment {
  id: number;
  fecha_creacion: string;
  fecha_inicio: string;
  fecha_final: string;
  doctor: Doctor;
  paciente: Paciente;
  estado: Estado;
  google_calendar_event_id: string | null;
  ubicacion: string;
  descripcion: string | null;
  notas: string | null;
  mensajes: Mensaje[];
}

export type Appointments = Appointment[];
