import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private route : Router, private authenticationservice : AuthenticateService) { }

  ngOnInit() {
    this.authenticationservice.logOut();
    this.route.navigate(['login']);
  }

}
