import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../services/product.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], keyword: string): any {
    const  arr = [];
    products.forEach((item) => {
      if (item.name.indexOf(keyword) > -1) {
        arr.push(item);
      }
    });
    return arr;
  }

}
