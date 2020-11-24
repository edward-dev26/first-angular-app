import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMark'
})
export class ExMarkPipe implements PipeTransform {
  transform(value: string) {
    return value.trim() + '!!!';
  }
}
