import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'explorar',
        loadComponent: () => import('./paginas/explorar/explorar.page').then((m) => m.ExplorarPage),
      },
      {
        path: 'guardado',
        loadComponent: () => import('./paginas/guardado/guardado.page').then((m) => m.GuardadoPage),
      },
      {
        path: 'publicar',
        loadComponent: () => import('./paginas/publicar/publicar.page').then((m) => m.PublicarPage),
      },
      {
        path: 'chat',
        loadComponent: () => import('./paginas/chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'explorar',
        pathMatch: 'full',
      },
    ],
  },
];
