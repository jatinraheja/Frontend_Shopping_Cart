import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsdataService} from '../productsdata.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from "../app.service";
import {HomeService} from "../home.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CartService} from "../cart.service";
// @ts-ignore


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {

  public image = [];
  public addeditem;
  constructor(private router: Router, private productdata: ProductsdataService, config: NgbCarouselConfig,
              private service : AppService , private homeservice:HomeService,private cartservice : CartService
  ,private http : HttpClient) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {

  this.productdata.getProductList().subscribe(data=> {
    this.image = data;
  });
}


  logout()
  {
    this.service.isLoggedIn(false);
    this.router.navigate(['login']);
  }
  getByCategory(category)
  {
    console.log(category);
    this.homeservice.getByCat(category).subscribe(data=>{
      this.image = data;
    });
  }

  gotodetails(id) {
    this.router.navigate(['/details', id]);
  }
  gotohome()
  {
    this.productdata.getProductList().subscribe(data=> {
      this.image = data;
    });
  }
  addtocart(id) {
    // const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    this.cartservice.addItemtoCart(id).subscribe(data=>
    {
      this.addeditem=data;
      this.router.navigate(['/usercart']);
    });

  }
  productdetails(id)
  {
    this.router.navigate(['/details',id]);
  }
  pricebetween(price1 ,  price2)
{
  return this.productdata.getproductbyprice(price1,price2).subscribe(data=>
  {
    this.image=data;
  })
}
}

