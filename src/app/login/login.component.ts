import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthenticateService} from "../authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false;
  constructor(private router : Router ,private loginservice : AuthenticateService) { }

  ngOnInit() {
  }
  checkLogin()
  {
    if(this.loginservice.authenticate(this.email,this.password))
    {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    }
    else
    {
      this.invalidLogin = true;
      alert("Invalid Login Credentials");
    }

  }
}
