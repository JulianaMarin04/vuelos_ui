import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';


@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  url_api= 'http://localhost:8080/Home/Pasajeros';
  
  getClientes(){
    return this.http.get<Cliente[]>(this.url_api);
  }
  registroCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.url_api, cliente);
  }
  getClienteId(id:number){
    return this.http.get<Cliente>(this.url_api +"/"+ id)
  }

  actualizarCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.url_api +"/"+ cliente.id,cliente);
  }
  eliminarCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.url_api +"/"+ cliente.id);
  }

}

