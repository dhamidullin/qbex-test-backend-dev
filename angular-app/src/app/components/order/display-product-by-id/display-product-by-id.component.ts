import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-display-product-by-id',
  templateUrl: './display-product-by-id.component.html',
  styleUrls: ['./display-product-by-id.component.css']
})
export class DisplayProductByIdComponent implements OnInit {

  @Input() id: string;
  product: any = null;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getProductById(this.id).subscribe(data => {
      this.product = data.json().product;
    })
  }
}
