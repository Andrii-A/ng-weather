import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(value: number, unit?: string) {
    if (!unit) {
      return value + ' meter/s';
    }

    if (value && !isNaN(value)) {
      if (unit === 'metric') {
        return value.toFixed(1) + ' meter/s';
      }
      if (unit === 'imperial') {
        return (value * 2.237).toFixed(1) + ' miles/h';
      }
    }
    return;
  }

}
