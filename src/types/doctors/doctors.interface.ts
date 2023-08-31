export interface Color {
  id: number;
  codigo: string;
}

// Definición de la estructura de 'Especialidad'
export interface Especialidad {
  id: number;
  nombre: string;
}

// Definición de la estructura de un elemento individual en 'data'
export interface Doctor {
  id: number;
  nombre: string;
  email: string;
  color: Color;
  especialidades: Especialidad[];
}
