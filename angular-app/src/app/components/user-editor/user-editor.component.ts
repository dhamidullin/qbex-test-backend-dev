import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  id: string = null;
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private dataService: DataService,
    private title: Title
  ) { }

  ngOnInit() {this.title.setTitle('Редактор пользователя');
    this.id = this.activatedRoute.snapshot.params['id'];
    this.httpService.getUserObject(this.id).subscribe(data => {
      this.user = JSON.stringify(data.json().userObject);
    });
  }

}
