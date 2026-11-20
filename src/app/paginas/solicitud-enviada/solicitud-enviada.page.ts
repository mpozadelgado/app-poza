import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-enviada',
  templateUrl: './solicitud-enviada.page.html',
  styleUrls: ['./solicitud-enviada.page.scss'],
  imports: [IonContent, IonButton, IonIcon, RouterLink, IonRouterLink],
})
export class SolicitudEnviadaPage {}
