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
  // getUserObject() {
  //   return this.http.get('/userObject');
  // }
  getUsername() {
    return this.http.get('/username');
  }
  getIsAdmin() {
    return this.http.get('/isAdmin');
  }
  isAuthenticated() {
    return this.http.get('/isAuthenticated');
  }
  getCatalog(query: object) {
    return this.http.get('/getCatalog');
  }
  getProduct(link: String) {
    return this.http.get('/getProductByLink', { params: { link: link } });
  }
  deleteProduct(link: String) {
    return this.http.delete('/deleteProduct', { params: { link: link } });
  }
  updateProduct(product: any) {
    console.log(product);
    return this.http.post('/updateProduct', { product: product });
  }
  addProduct(product: any) {
    console.log(product);
    return this.http.post('/addProduct', { product: product });
  }
}
