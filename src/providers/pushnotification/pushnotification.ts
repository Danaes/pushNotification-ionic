import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
              private platform: Platform){}

  init_notifications(){

    if( !this.platform.is("cordova") ){
        console.warn("OneSignal no funcional en el navegador Web");
        return;
    }

    this.oneSignal.startInit('9482ffac-174c-4c07-86a7-6743c5a0a8e4', '606627179275');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });
    
    this.oneSignal.endInit();
  }

}
