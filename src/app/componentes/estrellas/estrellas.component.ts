import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.scss'],
})
export class EstrellasComponent {
  valor = input.required<number>();
  llenas = computed(() => Math.round(this.valor()));
}
