import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/pages/pipes-page/pages/pipe-personalizados-page/pipe-personalizados-page.component';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  transform(value: Product[], sortBy?: keyof Product | ''): Product[] {
    if (!sortBy) {
      return value;
    }
    return value.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }
}
