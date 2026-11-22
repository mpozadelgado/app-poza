# SwapCloset

App móvil para intercambiar y prestar ropa entre estudiantes universitarios. Puedes explorar prendas de otras personas, filtrarlas por talla, guardarlas, pedir un intercambio o un préstamo, chatear con la dueña, valorar la experiencia y publicar tus propias prendas.

Entrega 1 (interfaz con datos de maqueta) · Angular 22 + Ionic 9 + Capacitor 8 · Tu nombre

## Cómo arrancarla

```
npm install
ionic serve
```

En Android:

```
ionic build
npx cap sync
npx cap run android
```

## Capturas

| Pantalla | Modo claro | Modo oscuro |
|---|---|---|
| Bienvenida | ![](capturas/bienvenida-claro.png) | ![](capturas/bienvenida-oscuro.png) |
| Iniciar sesión | ![](capturas/login-claro.png) | ![](capturas/login-oscuro.png) |
| Crear cuenta | ![](capturas/registro-claro.png) | ![](capturas/registro-oscuro.png) |
| Explorar | ![](capturas/explorar-claro.png) | ![](capturas/explorar-oscuro.png) |
| Detalle de prenda | ![](capturas/detalle-claro.png) | ![](capturas/detalle-oscuro.png) |
| Perfil de usuario | ![](capturas/usuario-claro.png) | ![](capturas/usuario-oscuro.png) |
| Guardado | ![](capturas/guardado-claro.png) | ![](capturas/guardado-oscuro.png) |
| Nueva prenda | ![](capturas/publicar-claro.png) | ![](capturas/publicar-oscuro.png) |
| Mensajes | ![](capturas/chat-claro.png) | ![](capturas/chat-oscuro.png) |
| Conversación | ![](capturas/conversacion-claro.png) | ![](capturas/conversacion-oscuro.png) |
| Crear solicitud | ![](capturas/solicitar-claro.png) | ![](capturas/solicitar-oscuro.png) |
| Solicitud enviada | ![](capturas/solicitud-enviada-claro.png) | ![](capturas/solicitud-enviada-oscuro.png) |
| Valorar experiencia | ![](capturas/valorar-claro.png) | ![](capturas/valorar-oscuro.png) |
| Mi perfil | ![](capturas/perfil-claro.png) | ![](capturas/perfil-oscuro.png) |
| Notificaciones | ![](capturas/notificaciones-claro.png) | ![](capturas/notificaciones-oscuro.png) |
| Página 404 | ![](capturas/404-claro.png) | ![](capturas/404-oscuro.png) |

## Paleta de colores

| Uso | Modo claro | Modo oscuro |
|---|---|---|
| Principal (botones, pestaña activa, píldoras) | `#6D3B69` | `#C79BC2` |
| Secundario (estadísticas, etiquetas) | `#EADDE9` | `#3A2C39` |
| Terciario (estrellas) | `#A96500` | `#A96500` |
| Éxito ("Disponible", check) | `#3F8A67` | `#3F8A67` |
| Fondo | `#F6F4EF` | `#161314` |
| Tarjetas | `#FFFFFF` | `#221D1F` |
| Texto | `#24211F` | `#ECE7E9` |
| Texto secundario | `#7A7570` | `#A39D98` |

## Tipografías

- **Inter**: textos, botones y formularios.
- **Inter Tight**: títulos.

Instaladas con `@fontsource` para que funcionen sin conexión.

## Árbol de rutas

```
/                          → redirige a /bienvenida
/bienvenida                Bienvenida (sin menú)
/login                     Iniciar sesión (sin menú)
/registro                  Crear cuenta (sin menú)
/solicitar/:id             Crear solicitud (pantalla completa)
/solicitud-enviada         Solicitud enviada (pantalla completa)
/valorar/:id               Valorar experiencia (pantalla completa)
/notificaciones            Notificaciones (pantalla completa)
/app                       Menú inferior (TabsPage)
├── explorar               Explorar
├── explorar/:id           Detalle de prenda
├── explorar/usuario/:id   Perfil de otra persona
├── guardado               Guardado
├── publicar               Nueva prenda
├── chat                   Mensajes
├── chat/:id               Conversación
└── perfil                 Mi perfil
/**                        Página 404
```

## Árbol de componentes

```
BienvenidaPage, LoginPage
└── app-logo

ExplorarPage, GuardadoPage
├── app-tarjeta-prenda        [prenda]
│   └── app-estado-prenda     [estado]
└── app-estado-vacio          [icono] [titulo] [texto] + ng-content (botón)

UsuarioPage, PerfilPage
└── app-cabecera-perfil       [perfil] [prendas]
    └── app-estrellas         [valor]

PerfilPage (valoraciones)
└── app-estrellas             [valor]

PrendaDetallePage, ChatPage, ConversacionPage, SolicitarPage, ValorarPage, NotificacionesPage
└── app-estado-vacio          (cuando no hay datos)
```

## Qué usa de Angular e Ionic

- Componentes standalone, rutas con `loadComponent`, parámetros `:id` leídos con `input()`.
- `@for`, `@empty`, `@if`, `@switch`, `computed()`, `[(ngModel)]`.
- Lista, tarjeta, píldoras (`ion-chip`), segmento, buscador, modal, botón flotante, aviso (`ion-toast`).
- Formularios con texto, fecha, desplegable, área de texto, casilla y selector de foto.
- Tema propio con variables CSS, componentes de Ionic personalizados y modo oscuro.

## Fotos

Las fotos tienen licencia libre. Sus autores están en [CREDITOS.md](CREDITOS.md).
