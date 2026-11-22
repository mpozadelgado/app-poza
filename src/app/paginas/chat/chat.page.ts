import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonSearchbar } from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { CONVERSACIONES } from '../../datos/conversaciones';
import type { Conversaciones } from '../../modelos/conversaciones';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [FormsModule, RouterLink, IonContent, IonButton, IonIcon, IonSearchbar, EstadoVacioComponent],
})
export class ChatPage {
  busqueda = '';

  get conversaciones(): Conversaciones[] {
    const texto = this.busqueda.toLowerCase();
    return CONVERSACIONES.filter((c) => `${c.perfil.nombre} ${c.perfil.apellido1}`.toLowerCase().includes(texto));
  }
}
