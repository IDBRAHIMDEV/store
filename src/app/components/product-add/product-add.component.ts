import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
          private router: Router,
          private flashMessage: FlashMessagesService
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
                          this.flashMessage.show('This product id added Successfully !', {
                            cssClass: "alert-info",
                            timeout: 5000
                          })
                          this.router.navigate(['/products'])
                       })
                       .catch(err => {
                        this.flashMessage.show(err.message, {
                          cssClass: "alert-danger",
                          timeout: 5000
                        })
                       })
    }
    

  }

}
