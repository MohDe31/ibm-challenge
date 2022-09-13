import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform<T>(value: Array<T> | null, ...args: any[]): Array<T> | null {
    const { size, page } = args[0];
    return value?.slice(size * (page-1), size * page) || null;
  }

}
