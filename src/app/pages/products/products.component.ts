import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   public  products: Product[];
   public  keyword = '';
   public  inputValue = '';
  constructor(
  private  procuctService: ProductService
  ) {
  this.products = this.procuctService.getProducts();
  }

  ngOnInit() {
  }
  searchProduct(value) {
    this.keyword = value;
  }
  handleStarChenge(star, index) {
    this.procuctService.changeProductStar(star, index);
  }
  itemDelete(id: number) {
    this.procuctService.deleteProductById(id);
    this.products = this.procuctService.getProducts();
  }
}

