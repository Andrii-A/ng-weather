import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {

  transform(value: number, unit?: string) {
    if (!unit) {
      return (value * 100 / 101325).toFixed(2) + ' atm';
    }

    if (value && !isNaN(value)) {
      if (unit === 'metric') {
        return (value * 100 / 133.32).toFixed(1) + ' mmHg';
      }
      if (unit === 'imperial') {
        return (value * 100 / 3386.38).toFixed(2) + ' inHg';
      }
    }
    return;
  }
}
