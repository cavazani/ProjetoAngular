import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponenteComponent } from './pasta/nome-componente/nome-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
