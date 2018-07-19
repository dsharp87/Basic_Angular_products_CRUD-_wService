import { Component, OnInit } from '@angular/core';
import { Product } from '.././product';
import { DataService } from './../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product:Product;

  constructor(private _dataservice:DataService, private _route: ActivatedRoute, private _router:Router) {
    this.product = new Product();
    }

  onSubmit() {
    this._dataservice.create(this.product, ()=> {
      this._router.navigate(['/products']);
    });
  }

  ngOnInit() {
  }

}
