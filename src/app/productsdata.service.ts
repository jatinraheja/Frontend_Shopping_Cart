import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IProduct} from "./product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  constructor(private http: HttpClient) { }
  // getProductListbyElectronics(): Observable<IProduct[]>
  // {
  //   return this.http.get<IProduct[]>("http://localhost:8888/api/items/category/Electronics")
  // }
  // getproductauth()
  // {
  //
  //
  // }
  gethomeList()
  {
    return[
      {
        name:'Footwear',
        image:'../assets/image/footwearhome.jpg',
      },
      {
        name:'Electronics',
        image:'../assets/image/electronicshome.jpg',
      },
      {
        name:'Books',
        image:'../assets/image/bookshome.jpg',
      }
    ]
  }
  getproductbyid(id)
  {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
    return this.http.get<IProduct[]>("http://localhost:8888/api/items/"+id,{headers});
  }
   getProductList()
   {
     const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
     return this.http.get<IProduct[]>("http://localhost:8888/api/items",{headers});

  }
  getproductbyprice(price1,price2)
  {
  const token = sessionStorage.getItem('token');
  const headers = new HttpHeaders({ Authorization : 'Basic ' + token});
  return this.http.get<IProduct[]>("http://localhost:8888/api/items/"+price1+"/"+price2,{headers});
  }
    // return [
    //   {
    //     // 'id': 1,
    //     'image': '../assets/image/addidasshoe1.jpg',
    //     'name': 'Addidas Sports Shoe',
    //      'details': 'color : Black',
    //     'price': '900',
    //     // 'off': '17% off',
    //     'category': 'Footwear',
    //     'sub_category': 'Men Shoes',
    //     // 'material': 'Synthetic',
    //     // 'productwarranty': '2 months',
    //     // 'lifestyle' : 'Sports'
    //   },
    //   {
    //     // 'id': 10,
    //     'image': 'assets/image/QA.jpg',
    //     'name': 'QA by RK Tyagi',
    //     'price': '899',
    //     // 'off': '30% off',
    //     'category': 'Books',
    //     'details': 'pages: 700 pages,publisher : S Chand',
    //     'sub_category': 'Competition Books',
    //
    //   },
    //   {
    //     // 'id': 20,
    //     'image': 'assets/image/smarttv1.jpg',
    //     'name': 'LG 80cm (32) smart tv',
    //     'price': '12000',
    //     'details': 'color: Black,productwarranty: 1 year',
    //     'category': 'Electronics',
    //     'sub_category': 'Television',
    //     // 'off': '17% off',
    //     // 'yousafe': '₹6,060'
    //   },
    //   {
    //     // 'id': 2,
    //     'image': 'assets/image/canvasshoe.jpeg',
    //     'name': 'DLS Mesh Running Shoes',
    //     'price': '499',
    //     'category': 'Footwear',
    //     'details': 'color : Black',
    //     'sub_category': 'Men Shoes',
    //     // 'color': 'Blue and White',
    //     // 'material': 'Synthetic',
    //     // 'productwarranty': '2 months',
    //     // 'Life style' : 'Casual',
    //     // 'off': '20% off',
    //     // 'yousafe': '₹6,060'
    //   },
    //   {
    //     // 'id': 21,.....
    //     'image': 'assets/image/refrigerator1.jpeg',
    //     'name' : 'Whirlpool 340 L Refrigerator',
    //     'details': 'color: Black,productwarranty: 1 year',
    //     'category': 'Electronics',
    //     'sub_category': 'Refrigerators',
    //     // 'productwarranty': '1 year',
    //     'price': '29999',
    //     // 'off': '17% off',
    //     // 'yousafe': '₹10,060'
    //   },
    //   {
    //     // 'id': 11,
    //     'image': 'assets/image/book2.jpg',
    //     'name': 'Pro 2020 by Rita Bhimani',
    //     'price': '199',
    //     'category': 'Books',
    //     'details': 'pages: 700 pages, publisher : BEE BOOKS',
    //     'sub_category': 'Public Relations'
    //     // 'off': '17% off',
    //     // 'pages': '700 pages'
    //   },
    //   {
    //     // 'id': 22,
    //     'image': 'assets/image/lglaptop.jpg',
    //     'name': 'LG Laptop i5 8gb/1Tb',
    //     'details':'color: Black ,productwarranty: 1 year',
    //     'category': 'Electronics',
    //     'price': '40999',
    //     'sub_category': 'Laptop'
    //     // 'off': '16% off',
    //     // 'yousafe': '₹6,060'
    //   },
    //   {
    //     // 'id': 3,
    //     'image': 'assets/image/wshoe3.jpeg',
    //     'name': 'Women Casual Shoe Plus Size',
    //     'category': 'Footwear',
    //     'details':'color: Pink and White ,productwarranty: 2 months, material : Synthetic',
    //     'price': '1499',
    //     'sub_category': 'Women Shoes'
    //     // 'off': '17% off',
    //     // 'yousafe': '₹200'
    //   }



}
