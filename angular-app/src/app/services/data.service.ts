import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public ShortDescriptionSymbolsCount: Number = 135;

  public username: string = null;
  public isAdmin: boolean = false;
  public rowDisplay: boolean = false;
  public showBasket: boolean = false;

  constructor(
    private httpService: HttpService
  ) { }

  reloadUser() {
    this.httpService.getUsername().subscribe(data => {
      this.username = data.json();
    });
    this.httpService.getIsAdmin().subscribe(data => {
      this.isAdmin = data.json();
    });
  }
}
