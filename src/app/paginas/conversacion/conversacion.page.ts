import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.page.html',
  styleUrls: ['./conversacion.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, RouterLink],
})
export class ConversacionPage {
  id = input<string>();
}
