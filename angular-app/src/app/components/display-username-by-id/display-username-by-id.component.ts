import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-display-username-by-id',
  templateUrl: './display-username-by-id.component.html',
  styleUrls: ['./display-username-by-id.component.css']
})
export class DisplayUsernameByIdComponent implements OnInit {

  @Input() user_id: string;
  username: string;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getUserObject(this.user_id).subscribe(data => {
      this.username = data.json().userObject.username
    });
  }

}
