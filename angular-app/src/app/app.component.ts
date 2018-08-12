import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'qbex';
  user: any = null;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {

    this.httpService.getUserObject().subscribe(data => {
      this.user = data.json().user;
    });
  }

  logout() {
    this.httpService.logout().subscribe(data => {
      if (data.json().err == false)
        this.router.navigate(['/']);
    });
  }

  displayBasket: boolean = false;


}
