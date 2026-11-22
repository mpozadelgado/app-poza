import type { Conversaciones } from '../modelos/conversaciones';
import { PERFILES } from './prendas';

export const CONVERSACIONES: Conversaciones[] = [
  {
    id: 1,
    perfil: PERFILES[0],
    hora: '12:42',
    noLeidos: 2,
    enLinea: true,
    solicitud: 'pendiente',
    mensajes: [
      {
        texto: '¡Hola, Lucía! ¿Te viene bien quedar mañana en la entrada de la biblioteca?',
        hora: '18:32',
        mio: false,
      },
      { texto: '¡Perfecto! Salgo de clase a las 17:30. Puedo estar allí a las 17:45 😊', hora: '18:35', mio: true },
      {
        texto: 'Genial. Llevaré el vestido en una bolsa. Para devolverlo quedamos en el mismo sitio.',
        hora: '18:36',
        mio: false,
      },
      { texto: '¡Perfecto! Mañana te llevo el vestido ✨', hora: '12:42', mio: false },
    ],
  },
  {
    id: 2,
    perfil: PERFILES[2],
    hora: '11:18',
    noLeidos: 1,
    enLinea: true,
    mensajes: [{ texto: '¿Te viene bien intercambiarlo por la chaqueta vaquera?', hora: '11:18', mio: false }],
  },
  {
    id: 3,
    perfil: PERFILES[3],
    hora: 'Ayer',
    noLeidos: 0,
    enLinea: false,
    solicitud: 'aceptada',
    mensajes: [{ texto: 'Solicitud aceptada · Falda midi', hora: '20:10', mio: false }],
  },
  {
    id: 4,
    perfil: PERFILES[4],
    hora: 'Ayer',
    noLeidos: 0,
    enLinea: false,
    mensajes: [{ texto: 'Gracias, me ha encantado 💜', hora: '19:02', mio: false }],
  },
  {
    id: 5,
    perfil: PERFILES[5],
    hora: 'Lun',
    noLeidos: 0,
    enLinea: false,
    mensajes: [{ texto: 'Te envío las medidas esta tarde', hora: '10:45', mio: false }],
  },
  {
    id: 6,
    perfil: PERFILES[6],
    hora: 'Dom',
    noLeidos: 0,
    enLinea: false,
    mensajes: [{ texto: 'Foto', hora: '17:30', mio: false }],
  },
];
