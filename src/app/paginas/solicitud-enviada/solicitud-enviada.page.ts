import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonRouterLink } from '@ionic/angular';

import { PRENDAS } from '../../datos/prendas';

@Component({
  selector: 'app-solicitud-enviada',
  templateUrl: './solicitud-enviada.page.html',
  styleUrls: ['./solicitud-enviada.page.scss'],
  imports: [IonContent, IonButton, IonIcon, RouterLink, IonRouterLink],
})
export class SolicitudEnviadaPage {
  prenda = input<string>();
  tipo = input<string>();
  desde = input<string>();
  hasta = input<string>();
  datos = computed(() => PRENDAS.find((p) => p.id === Number(this.prenda())));
  fechas = computed(() => `${this.formatear(this.desde())} – ${this.formatear(this.hasta())}`);

  formatear(fecha?: string): string {
    return fecha ? new Date(fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : '';
  }
}
