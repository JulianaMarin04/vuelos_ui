import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { ListarVuelosComponent } from './Vuelo/listar-vuelos/listar-vuelos.component';
import { ListarAllComponent } from './Cliente/listar-all/listar-all.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'agregar', component:AgregarComponent},
  {path:'actualizar', component:ActualizarComponent},
  {path: 'listarVuelos', component:ListarVuelosComponent},
  {path: 'listarAll', component:ListarAllComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
