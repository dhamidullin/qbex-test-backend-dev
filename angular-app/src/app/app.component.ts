import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { EventsService } from './services/events.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  helloText: string = 'text privet'

  title: String = 'qbex';
  // username: string = null;
  // admin: boolean = false;
  displayBasket: boolean = false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private eventsService: EventsService,
    private dataServce: DataService
  ) { }

  ngOnInit() {
    this.eventsService.reloadUserEvent.subscribe(() => {
      this.dataServce.reloadUser();
    });
    this.dataServce.reloadUser();
  }

  logout() {
    this.httpService.logout().subscribe(data => {
      if (data.json().err == false) {
        alert('вышел');
        this.dataServce.reloadUser();
        this.router.navigate(['/']);
        setTimeout(() => {
          this.dataServce.reloadUser();
        }, 300)
      }
    });
  }

  toggleBasket() {
    this.displayBasket = !this.displayBasket
  }
}
