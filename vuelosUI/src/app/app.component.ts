import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router:Router, public translate: TranslateService){
    this.translate.addLangs(['es','en','zh']);
    this.translate.setDefaultLang('es');
    this.translate.use('zh');
  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  Agregar(){
    this.router.navigate(["agregar"]);
  }

  ListarVuelos(){
    this.router.navigate(["listarVuelos"]);
  }
  ListarPasajeros(){
    this.router.navigate(["listar"]);
  }

}
