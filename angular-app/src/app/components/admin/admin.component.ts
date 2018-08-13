import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  catalog: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private title: Title
  ) { }

  ngOnInit() { 
    this.title.setTitle('Админ-панель');
  }

}
