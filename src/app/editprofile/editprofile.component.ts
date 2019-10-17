import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {postdata} from "../Postdataobj";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(public userservice : UserService) { }
  contact;
  gender;
  userdata;
  username;
  email;
  password;pl
  id;
  pdata : postdata;
  rdata;
  ngOnInit() {
    this.userservice.getuser().subscribe(data=>{
      this.userdata=data;
      this.id=this.userdata.id;

    })
  }

  edituser()
  {
    this.pdata=new postdata();
    this.pdata.username=this.username;
    this.pdata.email=this.email;
    this.pdata.password=this.password;
    this.pdata.contact=this.contact;

    this.userservice.updateuser(this.id,this.pdata).subscribe(data=>{
      this.rdata=data;
    })
  }
}
