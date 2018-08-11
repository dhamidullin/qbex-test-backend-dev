import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) { }

  catalog: any = null;

  ngOnInit() {
    this.httpService.getCatalog().subscribe(data =>{
      this.catalog = data.json();
      console.log(this.catalog);
    });
  }

}
