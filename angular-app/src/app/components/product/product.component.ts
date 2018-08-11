import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = null;
  link: string = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }


  ngOnInit() {

    this.link = this.activatedRoute.snapshot.params['link'];


    this.httpService.getProduct(this.link).subscribe(data => {
      this.product = data.json().product;
      console.log(data.json());
    });

    // this.product = {
    //   title: 'Kingston SSDNow A400 240GB 2.5" SATAIII TLC (SA400S37/240G)',
    //   link: 'kingston_sa400s37_240g',
    //   images: [
    //     'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202184.jpg',
    //     'https://i2.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202262.jpg',
    //     'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202340.jpg',
    //     'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202574.jpg',
    //     'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202652.jpg'
    //   ],
    //   short_description: '',
    //   description: `Твердотельный накопитель Kingston A400 радикально повышает отзывчивость компьютерных систем, обеспечивая невероятно малое время загрузки операционной системы, старта программ и копирования файлов, недостижимое при использовании механических жестких дисков. Под управлением контроллера последнего поколения, позволяющего достичь скоростей чтения и записи до 500 и 450 МБ/с соответственно, этот SSD оказывается в десять раз быстрее традиционных жестких дисков при нагрузках, требующих высокую производительность, позволяет получить очень отзывчивую работу системы в многозадачных условиях и в целом более быструю систему.`,
    //   price: 149999
    // };
  }
}
