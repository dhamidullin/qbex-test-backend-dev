import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser'
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket_ids: string[] = [];
  products: any[] = [];

  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private title: Title
  ) { }

  ngOnInit() {
    this.getBasket();
  }

  getBasket() {
    this.title.setTitle('Корзина');
    if (this.dataService.username)
      this.refreshBasket();
  }

  refreshBasket() {
    this.basket_ids = [];
    this.products = [];
    this.httpService.getBasket().subscribe(data => {
      this.basket_ids = data.json().basket;
      if (this.basket_ids.length > 0) {
        this.httpService.getProductsByManyIds(this.basket_ids).subscribe(data => {

          let productsCache = data.json().products;

          productsCache.forEach((product, index) => {
            productsCache[index].count = this.basket_ids.filter(x => x === product._id).length;
            console.log(this.basket_ids.filter(x => x === product._id).length);
          });
          this.products = productsCache;
        });
      }
    });
  }
  remooveFromBasket(id: string) {
    this.httpService.remooveFromBasket(id).subscribe(data => {
      // console.log(data.json())
      if (data.json().err == false)
        this.refreshBasket();
    });
  }
}
