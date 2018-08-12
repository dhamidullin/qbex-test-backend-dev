import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public ShortDescriptionSymbolsCount: Number = 135;

  public username: string = "null";
  public isAdmin: boolean = true;

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
