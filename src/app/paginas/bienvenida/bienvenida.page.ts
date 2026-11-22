import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

import { LogoComponent } from '../../componentes/logo/logo.component';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  imports: [IonContent, IonButton, RouterLink, LogoComponent],
})
export class BienvenidaPage {}
