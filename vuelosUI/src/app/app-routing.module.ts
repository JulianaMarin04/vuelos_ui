import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Cliente/listar/listar.component';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { ActualizarComponent } from './Cliente/actualizar/actualizar.component';
import { ListarVuelosComponent } from './Vuelo/listar-vuelos/listar-vuelos.component';




const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'agregar', component:AgregarComponent},
<<<<<<< HEAD
  {path:'actualizar', component:ActualizarComponent},
  {path: 'listarVuelos', component:ListarVuelosComponent}
  
=======
  {path:'actualizar', component:ActualizarComponent}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
