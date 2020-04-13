import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ActualizarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
