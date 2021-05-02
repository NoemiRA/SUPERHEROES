import { ContadorModule } from './heroes/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillanoModule } from './heroes/villano.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    VillanoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
