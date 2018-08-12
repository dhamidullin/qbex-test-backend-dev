import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfo } from '../../classes/user-info';
import { HttpService } from '../../services/http.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginData: UserInfo = {
    username: null,
    password: null
  };

  constructor(
    private httpService: HttpService,
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit() { }

  login() {
    this.httpService.signIn(this.loginData).subscribe(data => {
      var err = data.json().err
      if (err)
        return alert(err);
      alert('Вход выполнен! \n Переадресация на главную страницу.');
      this.eventsService.reloadUser();
      this.router.navigate(['/']);
    });
  }
}
