import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// import {AuthenticateService} from "../authenticate.service";
import {Router} from "@angular/router";
import {error} from "util";
import {AuthenticateService} from "../authenticate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  constructor(private router : Router,private loginservice: AuthenticateService) { }

  ngOnInit() {
  }
  checkLogin() {
    // @ts-ignore
    (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['home'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true

        }
      )
    );
    // if (this.loginservice.authenticate(this.username, this.password)) {
    //   this.router.navigate(['home'])
    //   this.invalidLogin = false
    // } else
    //   this.invalidLogin = true
  }




}
