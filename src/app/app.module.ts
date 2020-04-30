import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventosService } from './eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
