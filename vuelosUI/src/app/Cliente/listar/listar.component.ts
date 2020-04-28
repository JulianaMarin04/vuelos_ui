import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Vuelo } from 'src/app/Modelo/Vuelo';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];
  cliente:Cliente=new Cliente();
  vuelo: Vuelo = new Vuelo();
  idVuelo: number;
  filterList = '';


  constructor(private service:ServiceService, private router:Router) { }
  
  ngOnInit(): void {
    this.ListarPasajeros();
  }

  ListarPasajeros(){
    let idVuelo=localStorage.getItem("idVuelo");
    this.service.getClientesVuelos(+idVuelo)
    .subscribe(data=>{
      this.clientes=data;
    });
  }
  
  Agregar(){
    this.service.registroCliente(this.cliente)
    .subscribe(data=>{
      alert("Registro exitoso!!!");
      this.router.navigate(["listar"]);
       })
  }
  Actualizar(cliente:Cliente):void{
    localStorage.setItem("idCliente",cliente.idCliente.toString());
    this.router.navigate(["actualizar"]);
  }

  Eliminar(cliente:Cliente){
    this.service.eliminarCliente(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(c=>c!==cliente);
      alert("Pasajero Eliminado!!");
    })
  }
  Buscar(idCliente: number){
    this.service.getClienteId(idCliente)
    .subscribe(data=>{
      this.cliente=data;
    })
    this.router.navigate(["buscar"]);
  }
}
