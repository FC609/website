import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product, ProductService} from '../../services/product.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public product: Product = null;
  public fb: FormBuilder = new FormBuilder();
  public formModel = this.fb.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required, Validators.minLength(3)]],
    stars: [5],
    price: [0, [Validators.pattern('^[0-9]+$')]],
    stock: [0, [Validators.pattern('^[0-9]+$')]],
  })
  constructor(
    private router: Router,
    private  route: ActivatedRoute,
    private  productService: ProductService
  ) {
    this.route.params.subscribe((params) => {
      this.product = this.productService.getProductById(parseInt(params.id, 10));
      console.log(this.product);
      this.formModel.setValue(this.product);
    });
  }

  ngOnInit() {
  }
  cancelClick() {
    this.router.navigate(['/Products']);
  }
  handleStarChange(stars) {
    this.product.stars = stars;
    this.formModel.setValue({
      ...this.formModel.value,
      stars: stars
    });
  }
  handleSubmit() {
    if (this.formModel.valid) {
      this.productService.changeProductById(this.formModel.value);
      this.router.navigate(['/Products']);
    }
  }
}
