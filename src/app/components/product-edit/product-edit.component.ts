import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: '';

  product: Product = {
    title: '',
    description: '',
    price: 0,
    stock: 0,
    active: true
  } 
  
  constructor(
        private productService: ProductService, 
        private route: ActivatedRoute,
        private router: Router
        ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getOneProduct(this.id);
  }

 

  getOneProduct(id) {
    this.productService.getOne(id).subscribe((res: Product) => {
      this.product = res;
    })
  }

  onSubmit(form) {

    if(form.valid) {
      this.productService.update(this.id, this.product)
                       .then(res => {
                          this.router.navigate(['/products'])
                       })
    }
    
  }

}
