import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor() { }
  image = [
    {
      'id': 1,
      'url': 'assets/image/addidasshoe1.jpg',
      'item': 'Addidas Sports Shoe',
      'price': 'Rs 900 ',
      'off': '17%off'
    },
    {
      'id': 2,
      'url': 'assets/image/QA.jpg',
      'item': 'Quantitative aptitude',
      'price': 'Starting at Rs 499 only ',
      'off': '30%off'
    },
    {
      'id': 3,
      'url': 'assets/image/t-shirts.jpg',
      'item': 'Tom T-shirt',
      'price': 'Starting at Rs 499 only',
      'off': '17%off'
    },
    {
      'id': 3,
      'url': 'assets/image/t-shirts.jpg',
      'item': 'Tom T-shirt',
      'price': 'Starting at Rs 499 only',
      'off': '17%off'
    },
    {
      'id': 3,
      'url': 'assets/image/t-shirts.jpg',
      'item': 'Tom T-shirt',
      'price': 'Starting at Rs 499 only',
      'off': '17%off'
    },
    {
      'id': 3,
      'url': 'assets/image/t-shirts.jpg',
      'item': 'Tom T-shirt',
      'price': 'Starting at Rs 499 only',
      'off': '17%off'
    }
    ];
  ngOnInit() {
  }

}
