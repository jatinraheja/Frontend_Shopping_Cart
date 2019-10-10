import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "./product";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient ) { }
  getByCat(category)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    const url = 'http://localhost:8888/api/items/cat/' + category;
    return this.http.get<IProduct[]>(url,{headers});
  }

}
