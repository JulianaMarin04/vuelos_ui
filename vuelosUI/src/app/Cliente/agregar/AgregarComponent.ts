import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  cliente: Cliente = new Cliente();
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
  }
  Agregar() {
    this.service.registroCliente(this.cliente)
      .subscribe(data => {
        alert("Registro exitoso!!!");
        this.router.navigate(["listar"]);
      });
  }
}
