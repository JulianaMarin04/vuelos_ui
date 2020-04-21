import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(items:any, filtro:any, isAnd:boolean): any {
    if (filtro && Array.isArray(items)) {
      const filterKeys = Object.keys(filtro);
      if (isAnd) {
        return items.filter(item =>
          filterKeys.reduce((memo,keyName) =>
          (memo && new RegExp(filtro[keyName],'gi').test(item[keyName])) || filtro[keyName] === '', true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            if (filtro[keyName]) {
              const fil = filtro[keyName].split(' ');
              let check = false;
              for(const f of fil){
                if(new RegExp(f, 'gi').test(item[keyName]) || f == ''){
                  check = true;
                }else{
                  check= false;
                  break;
                }
              }
              return check;
            }else{
              return true;
            }
          });
        });
    }
  }else{
    return items;
  }
  }
}
