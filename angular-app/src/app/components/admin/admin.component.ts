import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  catalog: any = null;

  // catalog: any = [{
  //   id: 0,
  //   title: 'NVIDIA GTX 1060',
  //   images: [
  //     'https://i.ebayimg.com/images/g/HEAAAOSwkjta-tCV/s-l640.jpg',
  //     'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-msi-geforce-gtx-1060-armor-6g-ocv1-912-v328-028__67289639m.jpg',
  //     'https://cdn2.riastatic.com/photosnew/general/adv_photos/hardware-vydeokarta-inno3d-gtx-1060-6gb-gddr5-x2-n106f-2sdn-n5gs__85193804m.jpg'
  //   ],
  //   description: `<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    
  //   <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

  //   <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

  //   <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>`
  // }];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getCatalog({}).subscribe(data => {
      this.catalog = data.json().catalog;
      console.log(data.json());
    });
  }

}
