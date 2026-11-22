import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular';

import { TarjetaPrendaComponent } from '../../componentes/tarjeta-prenda/tarjeta-prenda.component';
import { PRENDAS } from '../../datos/prendas';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
    TarjetaPrendaComponent,
  ],
})
export class ExplorarPage {
  prendas = PRENDAS;
}
