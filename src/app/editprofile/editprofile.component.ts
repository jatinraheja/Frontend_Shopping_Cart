import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {postdata} from "../Postdataobj";
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(public userservice : UserService, private route : Router, private app : AppService) { }
  contact;
  gender;
  userdata;
  userdata2;
  username;
  email;
  password;
  id;
  alluser;
  pdata : postdata;
  rdata;
  ngOnInit() {
    this.userservice.getuser().subscribe(data=>{
      this.userdata=data;
      this.id=this.userdata.id;
      this.email=this.userdata.email;
      this.password=this.userdata.password;
      this.username=this.userdata.username;
      this.contact=this.userdata.contact;
      this.gender=this.userdata.gender;

    })


  }

  edituser()
  {
    this.pdata=new postdata();
    this.pdata.username=this.username;
    this.pdata.email=this.email;
    this.pdata.password=this.password;
    this.pdata.contact=this.contact;
    this.pdata.gender=this.gender;
    console.log(this.pdata.gender);

    this.userservice.updateuser(this.id,this.pdata).subscribe(data=>{
      this.rdata=data;
      alert("User profile updated successfully")

      this.route.navigate(['/login']);
    })
  }
}
