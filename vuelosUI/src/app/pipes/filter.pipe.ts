import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg===' ' || arg.length < 3) return value;
    const resultadoList =[];
    for (const cliente of value){
      if(cliente.nombre.toLowerCase().indexOf(arg.toLowerCase()) >-1){
        resultadoList.push(cliente);
      };
    }; 
    return resultadoList;
  }
}

