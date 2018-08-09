import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import {UserInfo} from '../classes/user-info'

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: Http) { }

  getTestData() {
    return this.http.get("/getTestData");
  }

  login(loginData: UserInfo) {
    return this.http.post("/login", loginData);
  }

  registration(registrationData: UserInfo) {
    return this.http.post("/registration", registrationData);
  }

  getUserObject() {
    return this.http.get("/userObject");
  }

  isAuthenticated() {
    return this.http.get("/isAuthenticated");
  }
}
