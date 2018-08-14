import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import { UserInfo } from '../classes/user-info'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http) { }

  // логин логаут и прочее
  signIn(loginData: UserInfo) {
    return this.http.post('/sign-in', loginData);
  }
  signUp(registrationData: UserInfo) {
    return this.http.post('/sign-up', registrationData);
  }
  logout() {
    return this.http.get('/logout');
  }
  getUsername() {
    return this.http.get('/username');
  }
  getIsAdmin() {
    return this.http.get('/isAdmin');
  }
  isAuthenticated() {
    return this.http.get('/isAuthenticated');
  }
  getBasket() {
    return this.http.get('/getBasket');
  }

  // безопасные роуты
  getCatalog(query: object) {
    return this.http.get('/getCatalog');
  }
  getProduct(link: String) {
    return this.http.get('/getProductByLink', { params: { link: link } });
  }
  getProductById(id: String) {
    return this.http.get('/getProductById', { params: { id: id } });
  }
  inBasket(id: any) {
    return this.http.get('/inBasket', { params: { id: id } });
  }
  addToBasket(id: any) {
    return this.http.get('/addToBasket', { params: { id: id } });
  }

  // для админов 
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
  getUserList() {
    return this.http.get('/getUserList');
  }
  deleteUser(id: any) {
    return this.http.delete('/deleteProduct', { params: { id: id } });
  }
  getUserObject(id: any) {
    return this.http.get('/getUserObject', { params: { id: id } });
  }
}
