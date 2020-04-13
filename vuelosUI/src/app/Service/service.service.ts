import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  url_api= "http://localhost:8080/AppicacionVuelos/Home/Pasajeros";
  
  getClientes(){
    return this.http.get<Cliente[]>(this.url_api);
  }
  registroCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.url_api, cliente);
  }
}
