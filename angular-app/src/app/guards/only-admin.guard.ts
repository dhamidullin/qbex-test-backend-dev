import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyAdminGuard implements CanActivate {
  constructor(
    private http: HttpService,
    private router: Router,
    private dataService: DataService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.dataService.isAdmin;
  }
}
