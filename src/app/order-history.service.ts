import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private http : HttpClient) {

  }
  finalCart()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const url="http://localhost:8888/carts/checkout";
    return this.http.get(url,{headers});
  }
}
