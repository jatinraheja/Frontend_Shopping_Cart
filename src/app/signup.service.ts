import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {postdata} from "./Postdataobj";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }
  httpoptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };
  adddata(pdata:postdata)
  {
    return this.http.post("http://localhost:8888/signup/savedata",pdata,this.httpoptions);
  }
}
