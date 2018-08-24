import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = null;
  link: string = null;
  inBasket: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private dataService: DataService,
    private title: Title
  ) { }


  ngOnInit() {
    this.title.setTitle('Загрузка...');

    this.link = this.activatedRoute.snapshot.params['link'];

    this.httpService.getProduct(this.link).subscribe(data => {
      this.product = data.json().product;
      this.title.setTitle(this.product.title);
      if (this.dataService.username !== null) {
        this.reloadInBasket();
      }
    });
  }

  reloadInBasket() {
    this.httpService.howManyInBasket(this.product._id).subscribe(data => {
      this.inBasket = data.json().n;
    });
  }

  addToBasket() {
    if (this.dataService.username == null)
      return alert('Сперва войдите в аккаунт');
    this.httpService.addToBasket(this.product._id).subscribe(data => {
      if (!data.json().err)
        this.reloadInBasket();
    })
  }
}
