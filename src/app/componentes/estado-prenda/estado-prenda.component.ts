import { Component, input } from '@angular/core';

@Component({
  selector: 'app-estado-prenda',
  templateUrl: './estado-prenda.component.html',
  styleUrls: ['./estado-prenda.component.scss'],
})
export class EstadoPrendaComponent {
  estado = input.required<string>();
}
