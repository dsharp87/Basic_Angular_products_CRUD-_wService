import { Component, OnInit } from '@angular/core';
import { Product } from '.././product';
import { DataService } from './../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:Product[];
  

  constructor(private _dataservice:DataService, private _router:Router) {
    this.products = [];
  }

  edit(id) {
    this._router.navigate(['/products/edit/' + id]);
  }

  delete(id) {
    this._dataservice.delete(id, ()=> {
      this._router.navigate(['/products']);
    })
  }

  ngOnInit() {
    this._dataservice.prodchange.subscribe(
      (value) => {this.products = value}
    );
  }

}
