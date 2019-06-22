import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = {
    title: '',
    description: '',
    price: 0,
    stock: 0,
    active: true
  }

  constructor(
          private productService: ProductService,
          private router: Router
    ) { }

  ngOnInit() {
  }

  log(myTitle) {
    console.log(myTitle);
  }

  onSubmit(form) {
    
    if(form.valid) {
      this.productService.create(this.product)
                       .then(res => {
                          this.router.navigate(['/products'])
                       })
                       .catch()
    }
    

  }

}
