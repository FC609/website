import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[];
  constructor() {
    this.products = [
      new Product( 1, 'jack1', '好东西1', 1, 199, 100 ),
      new Product( 2, 'jack2', '好东西2', 2, 299, 200 ),
      new Product( 3, 'jack3', '好东西3', 3, 399, 300 ),
      new Product( 4, 'jack4', '好东西4', 4, 499, 400 ),
    ];
  }
  public getProducts(): Product[] {
    return [...this.products];
  }
  public changeProductStar(star: number, index: number){
   this.products[index].stars = star;
  }
  public deleteProductById(id) {
    let deleteIndex;
    this.products.forEach((a, index) => {
      if (a.id === id) {
        deleteIndex = index;
      }
    });
    this.products.splice(deleteIndex, 1);
  }
  getProductById(id): Product {
    return this.products.find( item  => item.id === id);
  }
  changeProductById(info) {
    const product = this.products.find( (item) => {
      return item.id === info.id;
    });
    product.name = info.name;
    product.stars = parseInt(info.stars, 10);
    product.category = info.category;
    product.price = parseInt(info.price, 10);
    product.stock = parseInt(info.stock, 10);
  }
}
// 导出
export class Product {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public stars: number,
    public price: number,
    public stock: number
  ) {}
}
