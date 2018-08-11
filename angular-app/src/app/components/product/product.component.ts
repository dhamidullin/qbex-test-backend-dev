import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  product: any = null;

  ngOnInit() {
    this.httpService.getProduct(this.id).subscribe(data => {
      this.product = data.json();
      console.log(data.json());
    });
  }

}
