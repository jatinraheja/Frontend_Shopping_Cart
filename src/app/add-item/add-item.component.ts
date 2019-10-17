import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemdataService} from "../itemdata.service";
import {Itemdata} from "../Itemdata";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemname;
  price;
  details;
  image;
  category;
  subcategory;
  pdata:Itemdata;
  rdata;
  constructor(private http : HttpClient,private itemdataService : ItemdataService) { }

  ngOnInit() {
  }
  additem()
  {
    this.pdata = new Itemdata();
    this.pdata.name=this.itemname;
    this.pdata.price = this.price;
    this.pdata.category=this.category;
    this.pdata.image=this.image;
    this.pdata.subcategory=this.subcategory;
    this.itemdataService.additem(this.pdata).subscribe(data=>
    {
      this.rdata=data;
    })
  }

}
