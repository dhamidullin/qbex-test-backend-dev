import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  product: any = null;
  link: string = null;
  creatorMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private dataService: DataService
  ) { }

  imageUrlBuffer: String = '';
  addImageUrl() {
    this.product.images.push(this.imageUrlBuffer);
    this.imageUrlBuffer = '';
  }
  deleteImageUrl(index: number) {
    this.product.images.splice(index, 1);
  }

  ngOnInit() {

    this.link = this.activatedRoute.snapshot.params['link'];

    if (!this.link) {
      this.creatorMode = true;
    }
    // this.httpService.getProduct(this.link).subscribe(data => {
    //   this.product = data.json().product;
    //   console.log(data.json());
    // });


    /*
    
        const ProductSchema = new Schema({
            title: {
                type: String,
            },
            link: {
                type: String,
                unique: true,
                index: true
            },
            images: {
                type: Array
            },
            short_description: {
                type: String
            },
            description: {
                type: String
            },
            price: {
                type: Number
            },
            createdDate: {
                type: Date,
                default: Date.now
            },
            updatedDate: {
                type: Date,
                default: Date.now
            }
        });
    
    */

    this.product = {
      title: '',
      link: '',
      images: [],
      short_description: '',
      description: ' ',
      price: null
    };
  }
}
