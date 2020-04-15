import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
      });
  }
  Actualizar(cliente:Cliente):void{
<<<<<<< HEAD
    localStorage.setItem("id",cliente.idCliente.toString());
=======
    localStorage.setItem("id",cliente.id.toString());
>>>>>>> master
    this.router.navigate(["actualizar"]);
  }

  Eliminar(cliente:Cliente){
    this.service.eliminarCliente(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(c=>c!==cliente);
      alert("Pasajero Eliminado!!");
    })
  }
}
