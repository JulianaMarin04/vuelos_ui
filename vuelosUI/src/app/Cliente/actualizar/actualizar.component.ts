import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  cliente : Cliente= new Cliente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Actualizar();
  }

  Actualizar(){
    let id=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }

  Act(cliente:Cliente){
    this.service.actualizarCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"]);
    })
  }
}

