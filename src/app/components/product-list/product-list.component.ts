import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  somme = 0;
  products: any[] = []
  constructor(
       private productService: ProductService,
       private flashMessage: FlashMessagesService
       ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((res: any[]) => {
        console.log(res)
        this.products = res;
        this.somePrices();
    })
  }

  deleteProduct(id) {
    this.productService.delete(id)
                       .then(res => {
                        this.flashMessage.show('This product id Deleted Successfully !', {
                          cssClass: "alert-info",
                          timeout: 5000
                        })
                       })
  }

  buyProduct(id, stock) {
    this.productService.takeProduct(id, stock)
                       .then(res => {
                          // this.flashMessage.show('This product is Buy Successfully !', {
                          //   cssClass: "alert-info",
                          //   timeout: 5000
                          // })
                       })
                       .catch(err => {
                        this.flashMessage.show(err.message, {
                          cssClass: "alert-danger",
                          timeout: 5000
                        })
                       })
  }

  toggleActiveProduct(product) {
    this.productService.toggleActive(product)
                       .then(res => {

                       }).catch(err => {})
  }

  somePrices() {
    this.somme = this.products.reduce((total, product) => {
      return total + (parseFloat(product.price) * parseFloat(product.stock))
    }, 0);
  }

}
