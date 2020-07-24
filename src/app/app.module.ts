import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './squelette/nav/nav.component';
import { HeaderComponent } from './squelette/header/header.component';
import { FooterComponent } from './squelette/footer/footer.component';
import { EtapeComponent } from './accueil/etape/etape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    EtapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
