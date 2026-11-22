import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/angular';

import { CabeceraPerfilComponent } from '../../componentes/cabecera-perfil/cabecera-perfil.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { PERFILES, PRENDAS } from '../../datos/prendas';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    RouterLink,
    CabeceraPerfilComponent,
    EstadoVacioComponent,
  ],
})
export class UsuarioPage {
  id = input<string>();
  perfil = computed(() => PERFILES.find((p) => p.id === Number(this.id())));
  prendas = computed(() => PRENDAS.filter((p) => p.perfil.id === Number(this.id())));
}
