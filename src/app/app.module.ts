import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({ 
      apiKey: "AIzaSyAiSF7ztZpX5FRmTGrYZZ8v5JlLLuvCCCQ",
      authDomain: "book-rosa-sugar-daddy.firebaseapp.com",
      projectId: "book-rosa-sugar-daddy",
      storageBucket: "book-rosa-sugar-daddy.appspot.com",
      messagingSenderId: "456609339747",
      appId: "1:456609339747:web:fcb9a792dd70de4e4a1b56"
     }),
     AngularFirestoreModule,
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule,
     AppRoutingModule,
     AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
