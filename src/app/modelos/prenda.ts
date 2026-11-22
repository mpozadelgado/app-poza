export interface Perfil {
  id: number;
  nombre: string;
  apellido1: string;
  universidad: string;
  campus: string;
  ciudad: string;
  foto: string;
  valoracion: number;
  valoraciones: number;
  intercambios: number;
  prestamos: number;
  estilos: string[];
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
