import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  helloText: string = 'text privet'

  title: String = 'qbex';
  username: string = null;
  admin: boolean = false;
  displayBasket: boolean = false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.eventsService.reloadUserEvent.subscribe(() => {
      this.reloadUser();
    });
    this.reloadUser();
  }

  reloadUser() {
    this.httpService.getUserObject().subscribe(data => {
      this.username = data.json().user.username;
      this.admin = data.json().user.admin;
    });
  }

  logout() {
    this.httpService.logout().subscribe(data => {
      if (data.json().err == false) {
        this.router.navigate(['/']);
        this.reloadUser();
      }
    });
  }

  toggleBasket() {
    this.displayBasket = !this.displayBasket
  }
}
