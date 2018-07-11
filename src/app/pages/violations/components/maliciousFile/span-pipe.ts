import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'span',
  pure: false
})

export class SpanPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
    var span = document.createElement('span');
    var lines = value.split('\,')
    for (var i = 0; i < lines.length; i++) {
      var parts = lines[i].split(/\:(.+)/)
      span.innerText = '' + parts[0] + ':' + '......................' + parts[1] + '';
      span.textContent = '' + parts[0] + ':' + '....................' + parts[1] + '';  //for Firefox
      lines[i] = span.innerHTML;
    }


    return lines.join('\n');
  }
}
