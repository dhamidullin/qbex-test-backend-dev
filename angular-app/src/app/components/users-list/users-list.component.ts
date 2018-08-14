import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private title: Title
  ) { }

  users: any[] = [
    {
      username: 'admin',
      status: 'admin',
      _id: 1
    },
    {
      username: 'rweteewrt',
      status: 'user',
      _id: 3
    },
    {
      username: '123132ewrrtwertwert',
      status: 'user',
      _id: 2
    },
  ];

  ngOnInit() {
    this.title.setTitle('Список пользователей');
    this.reloadUsers();
  }
  reloadUsers() {
    this.httpService.getUserList().subscribe(data => {
      this.users = data.json().users;
    })
  }
  deleteUser(id: any) {
    if (confirm('Удалить пользователя?')) {
      this.httpService.deleteUser(id).subscribe(data => {
        if (!data.json().err) {
          this.reloadUsers();
          alert('Удален');
        }
      });
    }
    else {
      alert('Действие отменено');
    }
  }
}
