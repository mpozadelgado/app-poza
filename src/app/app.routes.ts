import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./paginas/bienvenida/bienvenida.page').then((m) => m.BienvenidaPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: 'solicitar/:id',
    loadComponent: () => import('./paginas/solicitar/solicitar.page').then((m) => m.SolicitarPage),
  },
  {
    path: 'solicitud-enviada',
    loadComponent: () =>
      import('./paginas/solicitud-enviada/solicitud-enviada.page').then((m) => m.SolicitudEnviadaPage),
  },
  {
    path: 'valorar/:id',
    loadComponent: () => import('./paginas/valorar/valorar.page').then((m) => m.ValorarPage),
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./paginas/notificaciones/notificaciones.page').then((m) => m.NotificacionesPage),
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
        path: 'explorar/usuario/:id',
        loadComponent: () => import('./paginas/usuario/usuario.page').then((m) => m.UsuarioPage),
      },
      {
        path: 'explorar/:id',
        loadComponent: () => import('./paginas/prenda-detalle/prenda-detalle.page').then((m) => m.PrendaDetallePage),
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
        path: 'chat/:id',
        loadComponent: () => import('./paginas/conversacion/conversacion.page').then((m) => m.ConversacionPage),
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
  {
    path: '**',
    loadComponent: () => import('./paginas/no-encontrada/no-encontrada.page').then((m) => m.NoEncontradaPage),
  },
];
