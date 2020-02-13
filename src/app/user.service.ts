import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {postdata} from "./Postdataobj";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpoptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };

  constructor(private http : HttpClient) { }
  getalluser()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
    return this.http.get("http://localhost:8888/user/allusers",{headers});
  }
  getuser()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
    return this.http.get("http://localhost:8888/user/users",{headers});

  }
  updateuser(id,pdata:postdata)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
    return this.http.put("http://localhost:8888/user/updateuser/"+id,pdata,{headers});
  }

}
