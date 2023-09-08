import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sino',
})
export class SinoPipe implements PipeTransform {
  transform(value: number): string {
    if (value == 0) {
      return 'No';
    } else {
      return 'Si';
    }
  }
}
