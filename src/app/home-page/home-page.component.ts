import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsdataService} from '../productsdata.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from "../app.service";
import {HomeService} from "../home.service";
import {HttpHeaders} from "@angular/common/http";
// @ts-ignore


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {

  public image = [];
  constructor(private router: Router, private productdata: ProductsdataService, config: NgbCarouselConfig,
              private service : AppService , private homeservice:HomeService) {
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
    console.log("Electronics");
    this.homeservice.getByCat(category).subscribe(data=>{
      this.image = data;
    });
  }

  gotodetails(id) {
    this.router.navigate(['/details', id]);
  }
  addtocart(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    this.router.navigate(['/cart', id]);

  }
}
