import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-prenda-detalle',
  templateUrl: './prenda-detalle.page.html',
  styleUrls: ['./prenda-detalle.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, RouterLink],
})
export class PrendaDetallePage {
  id = input<string>();
}
