import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular';

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
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
  ],
})
export class ExplorarPage {
  prendas = PRENDAS;
}
