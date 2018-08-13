import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  helloText: string = 'text privet'

  title: String = 'qbex';
  displayBasket: boolean = false;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.reloadUser();
  }

  logout() {
    this.httpService.logout().subscribe(data => {
      if (data.json().err == false) {
        alert('вышел');
        this.dataService.reloadUser();
        this.router.navigate(['/']);
        setTimeout(() => {
          this.dataService.reloadUser();
        }, 300)
      }
    });
  }
}
