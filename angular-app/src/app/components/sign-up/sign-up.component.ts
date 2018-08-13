import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../classes/user-info'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registrationData: UserInfo = {
    username: null,
    password: null
  };
  confirmPassword: String = null;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Регистрация на сайте');
  }

  registration() {
    this.httpService.signUp(this.registrationData).subscribe(data => {
      var err = data.json().err
      if (err)
        return alert(err);
      alert("Успех! Переадресация на страницу для входа.");
      this.router.navigate(["/sign-in"]);
    });
  }
}
