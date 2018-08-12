import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import { UserInfo } from '../classes/user-info'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http) { }

  signIn(loginData: UserInfo) {
    return this.http.post('/sign-in', loginData);
  }

  signUp(registrationData: UserInfo) {
    return this.http.post('/sign-up', registrationData);
  }

  logout() {
    return this.http.get('/logout');
  }

  getUserObject() {
    return this.http.get('/userObject');
  }

  isAuthenticated() {
    return this.http.get('/isAuthenticated');
  }

  getCatalog(query: object) {
    return this.http.get('/getCatalog');
  }

  // addProduct

  updateProduct(product: any) {
    console.log(product);
    return this.http.put('/updateProduct', { product: product });
  }

  getProduct(link: String) {
    return this.http.get('/getProductByLink' + link);
  }

  // editProduct(id: String) { }

  deleteProduct(link: String) {
    return this.http.delete('/product' + link);
  }
}
