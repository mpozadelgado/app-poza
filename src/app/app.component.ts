import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
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
    });
  }
}
