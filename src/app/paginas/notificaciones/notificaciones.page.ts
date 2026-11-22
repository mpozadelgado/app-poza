import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
} from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    EstadoVacioComponent,
  ],
})
export class NotificacionesPage {
  avisos = [
    {
      id: 1,
      icono: 'chatbubble-outline',
      texto: 'Marta te ha enviado una solicitud para el Vestido rojo.',
      hora: 'Hace 5 min',
      leida: false,
      enlace: '/app/chat/1',
    },
    {
      id: 2,
      icono: 'heart-outline',
      texto: 'A Elena le ha gustado tu Jersey crema.',
      hora: 'Hace 1 h',
      leida: false,
      enlace: '/app/explorar/9',
    },
    {
      id: 3,
      icono: 'checkmark',
      texto: 'Clara ha aceptado tu solicitud de la Falda midi.',
      hora: 'Ayer',
      leida: true,
      enlace: '/app/chat/3',
    },
    {
      id: 4,
      icono: 'star-outline',
      texto: 'Andrea te ha valorado con 5 estrellas.',
      hora: 'Lun',
      leida: true,
      enlace: '/app/perfil',
    },
  ];

  get sinLeer(): number {
    return this.avisos.filter((a) => !a.leida).length;
  }

  leerTodas(): void {
    for (const a of this.avisos) {
      a.leida = true;
    }
  }
}
