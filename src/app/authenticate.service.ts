import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http : HttpClient,private service : AppService) { }
  authenticate(username,password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get("http://localhost:8888/user/allusers", {headers})
      .pipe(
      map(
          data => {
          sessionStorage.setItem('token', btoa(username + ':' + password));

        }
      ));
    // if (email === "jatin171361.cse@chitkara.edu.in" && password === "1234") {
    //   sessionStorage.setItem('email',email)
    //   return true;
    // } else {
    //   return false;
    // }
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('token')

    return (user === null)
  }
  logOut()
  {
    sessionStorage.removeItem('token');
    this.service.isLoggedIn(false);

  }
}
