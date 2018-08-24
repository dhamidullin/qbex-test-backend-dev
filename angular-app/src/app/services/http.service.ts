import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
// import { HttpParams, HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { UserInfo } from '../classes/user-info';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  // для юзера
  signIn(loginData: UserInfo) {
    return this.http.post('api/sign-in', loginData);
  }
  signUp(registrationData: UserInfo) {
    return this.http.post('api/sign-up', registrationData);
  }
  logout() {
    return this.http.get('api/logout');
  }
  getUsername() {
    return this.http.get('api/username');
  }
  getIsAdmin() {
    return this.http.get('api/isAdmin');
  }
  isAuthenticated() {
    return this.http.get('api/isAuthenticated');
  }
  getBasket() {
    return this.http.get('api/getBasket');
  }
  remooveFromBasket(id: string) {
    return this.http.get('api/remooveFromBasket', { params: { id: id } });
  }
  addToBasket(id: any) {
    return this.http.get('api/addToBasket', { params: { id: id } });
  }
  makeOrder() {
    return this.http.get('api/makeOrder');
  }
  remooveAllFromBasket() {
    return this.http.get('api/remooveAllFromBasket');
  }

  // безопасные роуты
  getCatalog(query: object) {
    return this.http.get('api/getCatalog');
  }
  getProduct(link: String) {
    return this.http.get('api/getProductByLink', { params: { link: link } });
  }
  getProductById(id: String) {
    return this.http.get('api/getProductById', { params: { id: id } });
  }
  howManyInBasket(id: any) {
    return this.http.get('api/howManyInBasket', { params: { id: id } });
  }
  getProductsByManyIds(ids: string[]) {
    return this.http.post('api/getProductsByManyIds', { ids: ids });
  }

  // для админов 
  deleteProduct(link: String) {
    return this.http.delete('api/deleteProduct', { params: { link: link } });
  }
  updateProduct(product: any) {
    console.log(product);
    return this.http.post('api/updateProduct', { product: product });
  }
  addProduct(product: any) {
    console.log(product);
    return this.http.post('api/addProduct', { product: product });
  }
  getUserList() {
    return this.http.get('api/getUserList');
  }
  deleteUser(id: any) {
    return this.http.delete('api/deleteUser', { params: { id: id } });
  }
  getUserObject(id: any) {
    return this.http.get('api/getUserObject', { params: { id: id } });
  }
  getOrders() {
    return this.http.get('api/getOrders');
  }
  getOrderById(id: string) {
    return this.http.get('api/getOrder', { params: { id: id } });
  }
}
