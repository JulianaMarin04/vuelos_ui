import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Vuelo } from 'src/app/Modelo/Vuelo';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar-vuelos',
  templateUrl: './listar-vuelos.component.html',
  styleUrls: ['./listar-vuelos.component.css']
})
export class ListarVuelosComponent implements OnInit {

  vuelos:Vuelo[];
  cliente:Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getVuelos()
    .subscribe(data=>{
      this.vuelos=data;
      });
  }
  ListarPasajeros(){
    this.service.getClientesVuelos()
    .subscribe(data=>{
      this.cliente=data;
      });
  }

}
