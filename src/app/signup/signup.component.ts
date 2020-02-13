import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {postdata, respdata} from "../Postdataobj";
import {SignupService} from "../signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']

})
export class SignupComponent implements OnInit {

  constructor(private app : AppService,private route : Router, private http : HttpClient,
              private signupservice : SignupService) { }
  username;
  email;
  password;
  confirmpassword;
  pdata : postdata;
  rdata : respdata;
  ngOnInit() {
    if(this.app.checklogin())
    {
      this.route.navigate(['home']);
    }

  }
  Signup()
  {
    this.pdata=new postdata();
    this.pdata.email=this.email;
    this.pdata.password=this.password;
    this.pdata.username=this.username;
    this.signupservice.adddata(this.pdata).subscribe((res :respdata)=>{
      this.rdata=res;
      alert("User registered successfully");
  });
    this.route.navigate(['login']);
  }

}
