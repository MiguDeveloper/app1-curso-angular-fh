import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedProperty',
  standalone: true,
})
export class NestedPropertyPipe implements PipeTransform {
  transform(obj: any, path: string): any {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : null), obj);
  }
}
