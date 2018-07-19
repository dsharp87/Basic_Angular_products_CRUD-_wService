import { Component, OnInit } from '@angular/core';
import { Product } from '.././product';
import { DataService } from './../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:Product;

  constructor(private _dataservice:DataService, private _route: ActivatedRoute, private _router:Router) {
    this._route.paramMap.subscribe((params) => { 
      this.product = this._dataservice.findproduct(params.get('id'));
    });
  }

  delete(id) {
    this._dataservice.delete(id, ()=> {
      this._router.navigate(['/products']);
    })
  }

  update() {
    this._dataservice.update(this.product, ()=> {
      this._router.navigate(['/products']);
    })
  }

  ngOnInit() {
  }

}
