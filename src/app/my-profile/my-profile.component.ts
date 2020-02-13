import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {OrderHistoryService} from "../order-history.service";
import {LoginComponent} from "../login/login.component";
import {CartService} from "../cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private orderhistory : OrderHistoryService,public userservice : UserService, private route : Router) { }
orderdata;
 contact;
 gender;
userdata;
  username;
  email;
  password;
  ngOnInit() {
    this.userservice.getuser().subscribe(data=>{
      // this.orderdata=data;
      this.userdata=data;
      this.orderhistory.finalCart().subscribe(data1=>
      {
        this.orderdata = data1;
        this.username=this.userdata.username;
        this.password=this.userdata.password;
        this.email = this.userdata.email;
        this.contact=this.userdata.contact;
        this.gender=this.userdata.gender;
      })

    })

  }
  gotohistory()
  {
    this.route.navigate(['/orderhistory']);
  }
  editprofile()
  {
    this.route.navigate(['/editprofile']);
  }
  order()
  {
    this.route.navigate(['/orderhistory']);
  }
}
