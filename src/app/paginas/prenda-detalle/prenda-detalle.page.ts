import { Component, computed, input } from '@angular/core';
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
import { PRENDAS } from '../../datos/prendas';

@Component({
  selector: 'app-prenda-detalle',
  templateUrl: './prenda-detalle.page.html',
  styleUrls: ['./prenda-detalle.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    RouterLink,
    EstadoVacioComponent,
  ],
})
export class PrendaDetallePage {
  id = input<string>();
  prenda = computed(() => PRENDAS.find((p) => p.id === Number(this.id())));
}
