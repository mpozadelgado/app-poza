import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonSearchbar, IonChip } from '@ionic/angular';

import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { TarjetaPrendaComponent } from '../../componentes/tarjeta-prenda/tarjeta-prenda.component';
import { PRENDAS } from '../../datos/prendas';
import type { Prenda } from '../../modelos/prenda';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  imports: [
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonChip,
    TarjetaPrendaComponent,
    EstadoVacioComponent,
  ],
})
export class ExplorarPage {
  prendas = PRENDAS;
  busqueda = '';
  talla = 'Todo';
  filtros = [
    { valor: 'Todo', texto: 'Todo' },
    { valor: 'XS', texto: 'Talla XS' },
    { valor: 'S', texto: 'Talla S' },
    { valor: 'M', texto: 'Talla M' },
    { valor: 'L', texto: 'Talla L' },
  ];

  get prendasVisibles(): Prenda[] {
    const texto = this.busqueda.toLowerCase();
    return this.prendas.filter(
      (p) =>
        (this.talla === 'Todo' || p.talla === this.talla) &&
        (p.titulo.toLowerCase().includes(texto) ||
          p.categoria.toLowerCase().includes(texto) ||
          p.perfil.campus.toLowerCase().includes(texto)),
    );
  }

  get masPrendas(): Prenda[] {
    return this.prendas.filter((p) => !this.prendasVisibles.includes(p));
  }

  limpiar(): void {
    this.busqueda = '';
    this.talla = 'Todo';
  }
}
