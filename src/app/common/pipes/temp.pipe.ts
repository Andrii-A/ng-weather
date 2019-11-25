import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, unit?: string) {
    const K = 273.15;

    if (!unit) {
      return value + '°K';
    }


    if (value && !isNaN(value)) {
      if (unit === 'metric') {
        let t = value - K;
        return t.toFixed(1) + '°C';
      }
      if (unit === 'imperial') {
        let t = ( (value - K) * 1.8) + 32;
        return t.toFixed(1) + '°F';
      }
    }
    return;
  }

}
