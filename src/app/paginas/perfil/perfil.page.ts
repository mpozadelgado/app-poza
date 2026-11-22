import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonToggle,
  IonToast,
  IonRouterLink,
  type ToggleCustomEvent,
} from '@ionic/angular';

import { CabeceraPerfilComponent } from '../../componentes/cabecera-perfil/cabecera-perfil.component';
import { EstrellasComponent } from '../../componentes/estrellas/estrellas.component';
import { PERFILES, PRENDAS } from '../../datos/prendas';
import type { Prenda } from '../../modelos/prenda';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonRouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    IonToggle,
    IonToast,
    CabeceraPerfilComponent,
    EstrellasComponent,
  ],
})
export class PerfilPage {
  yo = PERFILES[1];
  seccion = 'armario';
  aviso = '';
  valoraciones = [
    {
      nombre: 'Marta Ruiz',
      foto: 'assets/fotos/marta.jpg',
      puntos: 5,
      texto: 'Muy puntual y el jersey estaba impecable.',
    },
    { nombre: 'Elena Navarro', foto: 'assets/fotos/elena.jpg', puntos: 4, texto: 'Todo genial, repetiría sin dudar.' },
    {
      nombre: 'Andrea Martín',
      foto: 'assets/fotos/andrea.jpg',
      puntos: 5,
      texto: 'Súper amable y muy fácil quedar con ella.',
    },
  ];

  get misPrendas(): Prenda[] {
    return PRENDAS.filter((p) => p.perfil.id === 2);
  }

  get prestadas(): Prenda[] {
    return this.misPrendas.slice(0, 1);
  }

  cambiarTema(evento: ToggleCustomEvent): void {
    document.documentElement.classList.toggle('ion-palette-dark', evento.detail.checked);
  }
}
