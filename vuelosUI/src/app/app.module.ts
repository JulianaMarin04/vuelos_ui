import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ActualizarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
