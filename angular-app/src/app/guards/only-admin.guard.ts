import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyAdminGuard implements CanActivate {
  constructor(
    private http: HttpService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // return this.http.getUserObject().toPromise()
    //   .then(data => {
    //     return data.json().access_rights == 'admin';
    //   })
    //   .catch(() => {
    //     return false;
    //   });
  }
}
