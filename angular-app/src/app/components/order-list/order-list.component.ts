import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any[] = [];

  constructor(
    private httpService: HttpService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Заказы');
    this.httpService.getOrders().subscribe(data => {
      console.log(data.json());
      this.orders = data.json().orders;
    });
  }
}
