import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getuser()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
    return this.http.get("http://localhost:8888/user/users",{headers});

  }

}
