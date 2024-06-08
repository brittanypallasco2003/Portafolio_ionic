import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAyhd0Hxs9uxmivLs216OYqNZwfXjPc4LQ',
      authDomain: 'auth-example-f5d92.firebaseapp.com',
      projectId: 'auth-example-f5d92',
      storageBucket: 'auth-example-f5d92.appspot.com',
      messagingSenderId: '1053157597541',
      appId: '1:1053157597541:web:4b2b127dce4de8c180418c',
      measurementId: 'G-S2VBSLQ1SG',
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAyhd0Hxs9uxmivLs216OYqNZwfXjPc4LQ',
        authDomain: 'auth-example-f5d92.firebaseapp.com',
        projectId: 'auth-example-f5d92',
        storageBucket: 'auth-example-f5d92.appspot.com',
        messagingSenderId: '1053157597541',
        appId: '1:1053157597541:web:4b2b127dce4de8c180418c',
        measurementId: 'G-S2VBSLQ1SG',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
