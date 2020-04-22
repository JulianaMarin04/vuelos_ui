import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { Vuelo } from '../Modelo/Vuelo';


@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  url_api= 'http://localhost:8080/Home/Pasajeros';
  url_api_vuelos= 'http://localhost:8080/HomeVuelos/Vuelos';
  
  getClientes(){
    return this.http.get<Cliente[]>(this.url_api);
  }
  getClientesVuelos(idVuelo: number){
    return this.http.get<Vuelo>(this.url_api +"/"+ idVuelo);;
  }
  getVuelos(){
    return this.http.get<Vuelo[]>(this.url_api_vuelos);
  }
  registroCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.url_api, cliente);
  }
  getClienteId(idCliente:number){
    return this.http.get<Cliente>(this.url_api +"/"+ idCliente);
  }
  actualizarCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.url_api +"/"+ cliente.idCliente,cliente);
  }
  eliminarCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.url_api +"/"+ cliente.idCliente);
  }
  getClienteIdBuscador(idCliente:number): Cliente{
    return;
  }


}

