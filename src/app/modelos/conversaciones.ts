import type { Perfil } from './prenda';

export interface Mensaje {
  texto: string;
  hora: string;
  mio: boolean;
}

export interface Conversaciones {
  id: number;
  perfil: Perfil;
  hora: string;
  noLeidos: number;
  enLinea: boolean;
  solicitud?: 'pendiente' | 'aceptada' | 'rechazada';
  mensajes: Mensaje[];
}
