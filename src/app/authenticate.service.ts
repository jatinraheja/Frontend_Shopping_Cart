import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  authenticate(email,password)
  {
    if(email === "jatinraheja1999@gmail.com" && password === "12345")
    {
      sessionStorage.setItem('email',email)
      return true;
    }
    else {
      return false;
    }
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
