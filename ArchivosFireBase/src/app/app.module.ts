import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyD4Ajj1WgLQYYCh481M7l13po_Vd_OjMwU',
      authDomain: 'a-fa60d.firebaseapp.com',
      databaseURL: 'https://a-fa60d-default-rtdb.firebaseio.com',
      projectId: 'a-fa60d',
      storageBucket: 'a-fa60d.appspot.com',
      messagingSenderId: '780730301574',
      appId: '1:780730301574:web:4b90f9dd21c30c8da36507',
      measurementId: 'G-9M95G7TRM8',
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
