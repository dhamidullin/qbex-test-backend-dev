import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

    product: any = {
        title: '',
        link: '',
        images: [],
        short_description: '',
        description: ' ',
        price: null,
        updatedDate: null
    };
    productjson: string = '';

    link: string = null;
    creatorMode: boolean = false;
    imageUrlBuffer: String = '';


    constructor(
        private activatedRoute: ActivatedRoute,
        private httpService: HttpService,
        private dataService: DataService,
        private router: Router,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle('Редактор товара');
        setInterval(() => {
            this.productjson = JSON.stringify(this.product);
        }, 1000);

        this.link = this.activatedRoute.snapshot.params['link'];

        if (!this.link) {
            this.creatorMode = true;
        }
        else
            this.httpService.getProduct(this.link).subscribe(data => {
                this.product = data.json().product;
                this.product.updatedDate = Date.now();
            });
    }

    addImageUrl() {
        this.product.images.push(this.imageUrlBuffer);
        this.imageUrlBuffer = '';
    }
    deleteImageUrl(index: number) {
        this.product.images.splice(index, 1);
    }
    updateProduct() {
        if (confirm('Точно обновить?')) {
            this.httpService.updateProduct(this.product).subscribe(data => {
                if (data.json().err == false) {
                    this.router.navigate(['/catalog/' + this.product.link]);
                }
                else {
                    alert(data.json().err);
                }
            });
        }
    }
    addProduct() {
        if (confirm('Точно добавить?')) {
            this.httpService.addProduct(this.product).subscribe(data => {
                if (data.json().err == false) {
                    this.router.navigate(['/catalog/' + this.product.link]);
                }
                else {
                    alert(data.json().err);
                }
            });
        }
    }
}
