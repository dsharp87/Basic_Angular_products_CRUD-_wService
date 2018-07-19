import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  products:Product[];
  prodchange:BehaviorSubject<Product[]>;
  id:number

  constructor(private _http:Http) {
    this.products = [];
    this.id = 0;
    this.prodchange = new BehaviorSubject([]);
    
  }

  create(product, callback) {
    product.id = this.id;
    this.id ++;
    this.products.push(product);
    this.prodchange.next(this.products);
    callback();
  }

  findproduct(id) {
    for (let i = 0; i < this.products.length; i ++) {
      if ( this.products[i].id == id ) {
        return this.products[i];
      }
    }
  }

  update(product, callback) {
    for (let i = 0; i < this.products.length; i ++) {
      if ( this.products[i].id == product.id ) {
        this.products[i].title = product.title;
        this.products[i].price = product.price;
        this.products[i].imgurl = product.imgurl;
        this.prodchange.next(this.products);
        callback();
      }
    }
  }



  delete(id, callback) {
    for (let i = 0; i < this.products.length; i ++) {
      if ( this.products[i].id == id ) {
        this.products.splice(i, 1);
        break;
      }
    }
    this.prodchange.next(this.products);
    callback();
  }

}
