import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  id: string = null;
  order: any = null;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    this.httpService.getOrderById(this.id).subscribe(data => {
      this.order = data.json().order;
    });

  }

}
