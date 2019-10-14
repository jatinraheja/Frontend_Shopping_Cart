import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ProductsdataService} from '../productsdata.service';
import {IProduct} from "../product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productid;
  public productsdata
  public productdt;
  public pid;
  public data;
  constructor(private route: ActivatedRoute, private productservice: ProductsdataService,private cartservice: CartService,
  private router : Router ) {
  }

  ngOnInit() {
    // let prid = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.productid = prid;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productid = parseInt(params.get('id'));
      console.log(this.productid);
    });
    this.productservice.getproductbyid(this.productid).subscribe(data => {
      this.productsdata = data;
    });
    // for (let product of this.productsdata)
    // {
    //  if (product.productid === this.productid)
    //  {
    //    console.log(product.productid);
    //    this.productdt = product;
    //    // if(this.productdt.id < 10)
    //    // {
    //    //   this.pid = 1;
    //    // }
    //    // if(this.productdt.id >= 10 && this.productdt.id < 20)
    //    // {
    //    //   this.pid = 2;
    //    // }
    //    // if(this.productdt.id >= 20 && this.productdt.id < 30)
    //    // {
    //    //   this.pid = 3;
    //    // }
    //  }
    //   }
    // }
  }
  gotocart(id)
  {

    this.cartservice.addItemtoCart(id).subscribe(data=>
    {
      this.data=data;
      this.router.navigate(['usercart']);
    })

  }

}
