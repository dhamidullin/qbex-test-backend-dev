import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket_ids: any = []
  products: any = [];


  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Корзина');
    this.httpService.getBasket().subscribe(data => {
      this.basket_ids = data.json().basket
    });

    for (var i = 0; i < this.basket_ids.length; i++) {
      this.httpService.getProductById(this.basket_ids[i]).subscribe(data => {
        this.products[i] = data.json().product;
      });
    }
  }
}
