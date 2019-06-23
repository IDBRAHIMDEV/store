import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
      this.productsCollection = afs.collection('products');
   }
  
   
   getAll() {
     return this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
   }

   create(product) {
      return this.productsCollection.add(product);
   }

   getOne(id) {
     return this.productsCollection.doc(id).valueChanges();
   }

   update(id, product) {
     return this.productsCollection.doc(id).update(product);
   }

   delete(id) {
     return this.productsCollection.doc(id).delete();
   }

   takeProduct(id, stock) {
     return this.productsCollection.doc(id).update({
       stock: stock - 1
     })
   }

}
