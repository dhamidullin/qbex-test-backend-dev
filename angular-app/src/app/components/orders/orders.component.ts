import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(
    private httpService: HttpService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Заказы');
    this.httpService.getOrders().subscribe(data => {
      this.orders = data.json().orders;





    });
  }

}
