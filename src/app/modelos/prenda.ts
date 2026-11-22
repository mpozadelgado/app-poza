export interface Perfil {
  id: number;
  nombre: string;
  apellido1: string;
  campus: string;
  foto: string;
  valoracion: number;
  intercambios: number;
}

export interface Prenda {
  id: number;
  titulo: string;
  descripcion: string;
  talla: 'XS' | 'S' | 'M' | 'L' | 'XL';
  estado: 'Nuevo' | 'Casi nuevo' | 'Muy buen estado' | 'Buen estado' | 'Usado';
  disponibilidad: boolean;
  prendaIntercambio?: string;
  fechaPublicacion: string;
  categoria: string;
  foto: string;
  guardada: boolean;
  perfil: Perfil;
}
