import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {ProductsdataService} from "../productsdata.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private cartservice : CartService, private productservice : ProductsdataService,private route : Router) { }
  data;
  str;
  ct:number;
  sum:number;
  quantityzero;
    // {
    //   'id': 1,
    //   'url': 'assets/image/addidasshoe1.jpg',
    //   'item': 'Addidas Sports Shoe',
    //   'price': 'Rs 900 ',
    //   'off': '17%off'
    // },
    // {
    //   'id': 2,
    //   'url': 'assets/image/QA.jpg',
    //   'item': 'Quantitative aptitude',
    //   'price': 'Starting at Rs 499 only ',

    //   'off': '30%off'
    // },
    // {
    //   'id': 3,
    //   'url': 'assets/image/t-shirts.jpg',
    //   'item': 'Tom T-shirt',
    //   'price': 'Starting at Rs 499 only',
    //   'off': '17%off'
    // },
    // {
    //   'id': 3,
    //   'url': 'assets/image/t-shirts.jpg',
    //   'item': 'Tom T-shirt',
    //   'price': 'Starting at Rs 499 only',
    //   'off': '17%off'
    // },
    // {
    //   'id': 3,
    //   'url': 'assets/image/t-shirts.jpg',
    //   'item': 'Tom T-shirt',
    //   'price': 'Starting at Rs 499 only',
    //   'off': '17%off'
    // },
    // {
    //   'id': 3,
    //   'url': 'assets/image/t-shirts.jpg',
    //   'item': 'Tom T-shirt',
    //   'price': 'Starting at Rs 499 only',
    //   'off': '17%off'
    // }

  ngOnInit() {
    this.cartservice.showcart().subscribe(data =>
    {
      this.data=data;
      this.sum=0;

      this.ct=0;
      for(let val of this.data)
      {
          this.sum += val.items.price * val.quantity;
          this.ct += 1;

      }
    })

  }
  decrement(id,quantity)
  {

    if(quantity>1) {
      this.cartservice.decrement(id).subscribe(data => {
        this.cartservice.showcart().subscribe(data1 => {
          this.data = data1;
          this.ngOnInit();

        })

      });
      this.ngOnInit();

    }

  }
  increment(id)
  {
      this.cartservice.increment(id).subscribe(data=>
    {
      this.cartservice.showcart().subscribe(data1=>
      {
        this.data=data1;

      })


    });
    this.ngOnInit();
    //this.ngOnInit();
    // console.log(this.str);
  }
  removefromcart(id)
  {
    this.cartservice.deleteitemfromcart(id).subscribe(data =>
    {
      this.cartservice.showcart().subscribe(data1=>
      {
        this.data=data1;

      })
    })
    this.ngOnInit();
    // console.log(this.str);
  }
  navigate()
  {
    this.route.navigate(['/orderhistory']);
  }

}
