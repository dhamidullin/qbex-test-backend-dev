import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog: any = null;
  rowDisplay: boolean = true; //  отображать в виде списка
  query: any = {}

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.httpService.getCatalog(this.query).subscribe(data => {
      this.catalog = data.json().catalog;
      console.log(this.catalog);
    });


    // test catalog for ng serve 
    this.catalog = [{
      title: 'Kingston SSDNow A400 240GB 2.5" SATAIII TLC (SA400S37/240G)',
      link: 'kingston_sa400s37_240g',
      images: [
        'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202184.jpg',
        'https://i2.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202262.jpg',
        'https://i1.rozetka.ua/goods/1869202/copy_kingston_sa400s37_480g_58b165d6202d1_images_1869202340.jpg',
        'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202574.jpg',
        'https://i2.rozetka.ua/goods/1869202/kingston_sa400s37_240g_images_1869202652.jpg'
      ],
      short_description: '',
      description: `Твердотельный накопитель Kingston A400 радикально повышает отзывчивость компьютерных систем, обеспечивая невероятно малое время загрузки операционной системы, старта программ и копирования файлов, недостижимое при использовании механических жестких дисков. Под управлением контроллера последнего поколения, позволяющего достичь скоростей чтения и записи до 500 и 450 МБ/с соответственно, этот SSD оказывается в десять раз быстрее традиционных жестких дисков при нагрузках, требующих высокую производительность, позволяет получить очень отзывчивую работу системы в многозадачных условиях и в целом более быструю систему.`,
      price: 149999
    }, {
      title: 'NVIDIA GTX 1060',
      link: 'msi_nvidia_gtx_1060',
      images: [
        'https://i.ebayimg.com/images/g/HEAAAOSwkjta-tCV/s-l640.jpg',
        'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-msi-geforce-gtx-1060-armor-6g-ocv1-912-v328-028__67289639m.jpg',
        'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-inno3d-gtx-1060-6gb-gddr5-x2-n106f-2sdn-n5gs__85193804m.jpg'
      ],
      short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
      description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

    <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>`,
      price: 538099
    }];
    this.catalog = [this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1], this.catalog[0], this.catalog[1]]
  }

  deleteProduct(link: String) {
    alert(link);
  }
}
