import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-prenda-detalle',
  templateUrl: './prenda-detalle.page.html',
  styleUrls: ['./prenda-detalle.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton],
})
export class PrendaDetallePage {
  id = input<string>();
}
