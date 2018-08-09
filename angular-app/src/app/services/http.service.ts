import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import {UserInfo} from '../classes/user-info'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http) { }

  signIn(loginData: UserInfo) {
    return this.http.post("/sign-in", loginData);
  }

  signUp(registrationData: UserInfo) {
    return this.http.post("/sign-up", registrationData);
  }

  // getUserObject() {
  //   return this.http.get("/userObject");
  // }

  isAuthenticated() {
    return this.http.get("/isAuthenticated");
  }
}
