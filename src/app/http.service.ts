import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }
  getAllItems()
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders();
  }
}
