import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonFooter,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { CONVERSACIONES } from '../../datos/conversaciones';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.page.html',
  styleUrls: ['./conversacion.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonContent,
    IonFooter,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonInput,
    EstadoVacioComponent,
  ],
})
export class ConversacionPage {
  id = input<string>();
  conversacion = computed(() => CONVERSACIONES.find((c) => c.id === Number(this.id())));
  texto = '';

  enviar(): void {
    const c = this.conversacion();
    if (c && this.texto.trim() !== '') {
      c.mensajes.push({ texto: this.texto, hora: new Date().toTimeString().slice(0, 5), mio: true });
      this.texto = '';
    }
  }

  responder(respuesta: 'aceptada' | 'rechazada'): void {
    const c = this.conversacion();
    if (c) {
      c.solicitud = respuesta;
    }
  }
}
