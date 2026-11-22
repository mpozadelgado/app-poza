import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonChip,
  IonToast,
} from '@ionic/angular';

import { PERFILES, PRENDAS } from '../../datos/prendas';
import type { Prenda } from '../../modelos/prenda';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonChip,
    IonToast,
  ],
})
export class PublicarPage {
  foto = '';
  titulo = '';
  categoria = 'Jerséis';
  talla: Prenda['talla'] = 'M';
  estado: Prenda['estado'] = 'Muy buen estado';
  modalidad = 'Intercambio';
  aviso = '';
  categorias = ['Vestidos', 'Jerséis', 'Camisetas', 'Faldas', 'Pantalones', 'Conjuntos'];
  tallas = ['XS', 'S', 'M', 'L', 'XL'];
  estados = ['Nuevo', 'Casi nuevo', 'Muy buen estado', 'Buen estado', 'Usado'];
  modalidades = ['Intercambio', 'Préstamo', 'Ambas'];

  get completa(): boolean {
    return this.foto !== '' && this.titulo.trim() !== '';
  }

  elegirFoto(evento: Event): void {
    const fichero = (evento.target as HTMLInputElement).files?.[0];
    if (fichero) {
      const lector = new FileReader();
      lector.onload = (): void => {
        this.foto = lector.result as string;
      };
      lector.readAsDataURL(fichero);
    }
  }

  publicar(): void {
    PRENDAS.unshift({
      id: PRENDAS.length + 1,
      titulo: this.titulo,
      descripcion: '',
      talla: this.talla,
      estado: this.estado,
      disponibilidad: true,
      fechaPublicacion: new Date().toISOString().slice(0, 10),
      categoria: this.categoria,
      foto: this.foto,
      guardada: false,
      perfil: PERFILES[1],
    });
    this.foto = '';
    this.titulo = '';
  }
}
