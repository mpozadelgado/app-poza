import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { App } from '@capacitor/app';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  colorWand,
  colorWandOutline,
  homeOutline,
  heartOutline,
  addOutline,
  chatbubbleOutline,
  personOutline,
  notificationsOutline,
  closeOutline,
  moonOutline,
  searchOutline,
  shirtOutline,
  heart,
  createOutline,
  ellipsisHorizontal,
  send,
  checkmark,
  shieldCheckmarkOutline,
  starOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      colorWand,
      colorWandOutline,
      homeOutline,
      heartOutline,
      addOutline,
      chatbubbleOutline,
      personOutline,
      notificationsOutline,
      closeOutline,
      moonOutline,
      searchOutline,
      shirtOutline,
      heart,
      createOutline,
      ellipsisHorizontal,
      send,
      checkmark,
      shieldCheckmarkOutline,
      starOutline,
    });
    const location = inject(Location);
    inject(Platform).backButton.subscribeWithPriority(-1, (): void => {
      if (location.path() === '/app/explorar' || location.path() === '/bienvenida') {
        void App.exitApp();
      } else {
        location.back();
      }
    });
  }
}
