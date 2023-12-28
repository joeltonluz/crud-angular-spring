import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true,
})
export class CategoryPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const categoriesValues: any = {
      Backend: 'terminal',
      Blockchain: 'currency_bitcoin',
      Design: 'brush',
      'Data Science': 'psychology',
      Frontend: 'html',
      'Mobile App Development': 'apps',
    };

    return categoriesValues[value] || 'computer';
  }
}
