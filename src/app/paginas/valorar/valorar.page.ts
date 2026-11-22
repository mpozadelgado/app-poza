import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonChip,
  IonTextarea,
  IonRouterLink,
} from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { CONVERSACIONES } from '../../datos/conversaciones';

@Component({
  selector: 'app-valorar',
  templateUrl: './valorar.page.html',
  styleUrls: ['./valorar.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonRouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonChip,
    IonTextarea,
    EstadoVacioComponent,
  ],
})
export class ValorarPage {
  id = input<string>();
  conversacion = computed(() => CONVERSACIONES.find((c) => c.id === Number(this.id())));
  puntos = 5;
  textos = ['Muy mala', 'Mala', 'Normal', 'Buena', 'Excelente'];
  etiquetas = ['Puntual', 'Comunicación clara', 'Prenda cuidada', 'Amable'];
  elegidas = ['Puntual', 'Comunicación clara', 'Amable'];
  comentario = '';

  marcar(etiqueta: string): void {
    if (this.elegidas.includes(etiqueta)) {
      this.elegidas = this.elegidas.filter((e) => e !== etiqueta);
    } else {
      this.elegidas = [...this.elegidas, etiqueta];
    }
  }

  publicar(): void {
    const c = this.conversacion();
    if (c) {
      c.perfil.valoraciones++;
    }
  }
}
