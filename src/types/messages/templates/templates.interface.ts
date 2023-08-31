export interface Template {
  id: number;
  contenido: string;
}

export interface TemplatesByType {
  [key: string]: Template[];
}
