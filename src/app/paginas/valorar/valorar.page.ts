import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonRouterLink,
} from '@ionic/angular';

@Component({
  selector: 'app-valorar',
  templateUrl: './valorar.page.html',
  styleUrls: ['./valorar.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    RouterLink,
    IonRouterLink,
  ],
})
export class ValorarPage {
  id = input<string>();
}
