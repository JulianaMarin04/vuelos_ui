import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListarVuelosComponent } from './Vuelo/listar-vuelos/listar-vuelos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarVuelosComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
