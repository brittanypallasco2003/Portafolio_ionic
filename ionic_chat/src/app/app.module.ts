import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyD0qdjfw6G1tRTsB8M7lQYXRXtYko6vvYY",
      authDomain: "chat-ionic-45fef.firebaseapp.com",
      databaseURL: "https://chat-ionic-45fef-default-rtdb.firebaseio.com",
      projectId: "chat-ionic-45fef",
      storageBucket: "chat-ionic-45fef.appspot.com",
      messagingSenderId: "866684525529",
      appId: "1:866684525529:web:837d4c0d575223faf797c8",
      measurementId: "G-1MYSQJL5L8"}),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyD0qdjfw6G1tRTsB8M7lQYXRXtYko6vvYY",
      authDomain: "chat-ionic-45fef.firebaseapp.com",
      databaseURL: "https://chat-ionic-45fef-default-rtdb.firebaseio.com",
      projectId: "chat-ionic-45fef",
      storageBucket: "chat-ionic-45fef.appspot.com",
      messagingSenderId: "866684525529",
      appId: "1:866684525529:web:837d4c0d575223faf797c8",
      measurementId: "G-1MYSQJL5L8"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
