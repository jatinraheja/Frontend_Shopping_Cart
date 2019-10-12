import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  showcart()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic' + token});
    const url ="http://localhost:8888/carts/allcart";
    return this.http.get(url,{headers});
  }
  addItemtoCart(id)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic' + token});
    const url ="http://localhost:8888/carts/cart/addItem/productId/{id}";
    return this.http.get(url,{headers});
  }
}
