import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
      this.productsCollection = afs.collection('products');
   }
  
   
   getAll() {
     return this.productsCollection.valueChanges();
   }

   create(product) {
      return this.productsCollection.add(product);
   }

}
