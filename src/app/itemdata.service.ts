import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Itemdata} from "./Itemdata";

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  constructor(private http : HttpClient) { }
  additem(itemdata : Itemdata)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization : 'Basic ' + token});
    return this.http.post("http://localhost:8888/api/items",itemdata,{headers});
  }
}
