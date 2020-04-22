import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar-all',
  templateUrl: './listar-all.component.html',
  styleUrls: ['./listar-all.component.css']
})
export class ListarAllComponent implements OnInit {
  clientes:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
     this.service.getClientes()
    .subscribe(data=>{
     this.clientes=data;
    });
  }

}
