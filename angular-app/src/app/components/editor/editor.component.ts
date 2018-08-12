import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { DataService } from '../../services/data.service';

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
    link: string = null;
    creatorMode: boolean = false;
    imageUrlBuffer: String = '';


    constructor(
        private activatedRoute: ActivatedRoute,
        private httpService: HttpService,
        private dataService: DataService,
        private router: Router
    ) { }

    ngOnInit() {

        this.link = this.activatedRoute.snapshot.params['link'];

        if (!this.link) {
            this.creatorMode = true;
        }
        this.httpService.getProduct(this.link).subscribe(data => {
            this.product = data.json().product;
            this.product.updatedDate = Date.now();
            console.log(data.json());
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
            // this.httpService.updateProduct(this.link, this.product);
            // this.router.navigate(['/catalog/product/' + this.link]);
        }
    }
}
