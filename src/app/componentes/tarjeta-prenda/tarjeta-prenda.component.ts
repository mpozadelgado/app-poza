import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard } from '@ionic/angular';

import type { Prenda } from '../../modelos/prenda';
import { EstadoPrendaComponent } from '../estado-prenda/estado-prenda.component';

@Component({
  selector: 'app-tarjeta-prenda',
  templateUrl: './tarjeta-prenda.component.html',
  styleUrls: ['./tarjeta-prenda.component.scss'],
  imports: [IonCard, RouterLink, EstadoPrendaComponent],
})
export class TarjetaPrendaComponent {
  prenda = input.required<Prenda>();
}
