import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var span = document.createElement('span');
    var lines = [];
    for (let key in value) {
      span.innerText = '' + key + ':' + '......................' + value[key] + '';
      span.textContent = '' + key + ':' + '......................' + value[key] + '';  //for Firefox
      lines.push(span.innerHTML);
    }
    return lines.join('\n');
  }
}
