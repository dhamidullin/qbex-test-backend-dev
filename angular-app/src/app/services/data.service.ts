import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public username: string = null;
  public isAdmin: boolean = false;

  constructor(
    private httpService: HttpService
  ) { }

  reloadUser() {
    this.httpService.getUserObject().subscribe(data => {
      this.username = data.json().user.username;
      this.isAdmin = data.json().user.isAdmin;
    });
  }



}
