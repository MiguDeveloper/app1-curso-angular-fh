import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mchFormatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(dates: Array<Date | null> | Date): string {
    console.log('value', dates);
    if (dates instanceof Date) {
      const dateUnique = new Date(dates).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      return dateUnique;
    }

    if (dates.length === 0) {
      return '';
    }

    if (dates.includes(null)) {
      const date = new Date(dates[0]!).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      console.log('date', date);
      return date;
    }
    const newDates = dates.map((date) =>
      new Date(date!).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    );

    return `${newDates[0]} - ${newDates[1]}`;
  }
}
