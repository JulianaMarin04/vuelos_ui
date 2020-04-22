import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListarVuelosComponent } from './Vuelo/listar-vuelos/listar-vuelos.component';
import { FiltroPipe } from './filtro.pipe';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ListarAllComponent } from './Cliente/listar-all/listar-all.component';
  
export function HttpLoaderFactory (http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    ActualizarComponent,
    ListarVuelosComponent,
    FiltroPipe,
    ListarAllComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
