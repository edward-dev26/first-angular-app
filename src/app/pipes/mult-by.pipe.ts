import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult'
})

export class MultByPipe implements PipeTransform {
  transform(value: number, pow: number = 1): number {
    return value * pow;
  }
}
