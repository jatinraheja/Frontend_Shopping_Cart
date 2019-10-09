import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsdataService} from '../productsdata.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
// @ts-ignore


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {

  public image = [];
  constructor(private router: Router, private productdata: ProductsdataService, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
this.productdata.getProductList().subscribe(data=>{
  this.image = data;
});

  }

  gotodetails(id) {
    this.router.navigate(['/details', id]);
  }
  addtocart(id) {
    this.router.navigate(['/cart', id]);
  }
}
