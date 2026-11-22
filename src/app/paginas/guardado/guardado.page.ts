import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { TarjetaPrendaComponent } from '../../componentes/tarjeta-prenda/tarjeta-prenda.component';
import { PRENDAS } from '../../datos/prendas';
import type { Prenda } from '../../modelos/prenda';

@Component({
  selector: 'app-guardado',
  templateUrl: './guardado.page.html',
  styleUrls: ['./guardado.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterLink,
    TarjetaPrendaComponent,
    EstadoVacioComponent,
  ],
})
export class GuardadoPage {
  get guardadas(): Prenda[] {
    return PRENDAS.filter((p) => p.guardada);
  }
}
