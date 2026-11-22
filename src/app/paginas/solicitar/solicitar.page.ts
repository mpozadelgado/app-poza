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
  IonInput,
  IonTextarea,
  IonIcon,
  IonModal,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { PRENDAS } from '../../datos/prendas';
import type { Prenda } from '../../modelos/prenda';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonChip,
    IonInput,
    IonTextarea,
    IonIcon,
    IonModal,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    EstadoVacioComponent,
  ],
})
export class SolicitarPage {
  id = input<string>();
  prenda = computed(() => PRENDAS.find((p) => p.id === Number(this.id())));
  misPrendas = PRENDAS.filter((p) => p.perfil.id === 2);
  tipo = 'intercambio';
  recogida = '';
  devolucion = '';
  mensaje = '';
  miPrenda?: Prenda;
  modalAbierto = false;

  get completa(): boolean {
    return this.recogida !== '' && this.devolucion !== '' && (this.tipo === 'prestamo' || this.miPrenda !== undefined);
  }

  elegir(prenda: Prenda): void {
    this.miPrenda = prenda;
    this.modalAbierto = false;
  }
}
