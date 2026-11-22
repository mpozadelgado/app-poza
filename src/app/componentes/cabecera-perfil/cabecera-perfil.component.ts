import { Component, input } from '@angular/core';

import type { Perfil } from '../../modelos/prenda';
import { EstrellasComponent } from '../estrellas/estrellas.component';

@Component({
  selector: 'app-cabecera-perfil',
  templateUrl: './cabecera-perfil.component.html',
  styleUrls: ['./cabecera-perfil.component.scss'],
  imports: [EstrellasComponent],
})
export class CabeceraPerfilComponent {
  perfil = input.required<Perfil>();
  prendas = input(0);
}
