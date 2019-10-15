import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../authenticate.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   constructor(private loginservice : AuthenticateService, private route : Router) { }

  ngOnInit() {


  }
gotohome()
{
  this.route.navigate(['home']);
}
gotocart()
{
  this.route.navigate(['/cart']);
}
gotoprofile()
{
  this.route.navigate(['/myprofile']);
}

}
