// Definición de la estructura de un elemento individual en 'data'
interface IPatient {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  fecha_nacimiento: string;
  estado: boolean;
  fecha_borrado: null | string;
}
