import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class Users{
  constructor(
    public status:string,
  ) {}

}
export class AuthenticateService {

  constructor(private http : HttpClient) { }
  authenticate(username,password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    this.http.get<User>("http://localhost:8888/api/validate/validateLogin", {headers})
      .pipe(
      map(
        userData => {
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
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut()
  {
    sessionStorage.removeItem('email');
  }
}
