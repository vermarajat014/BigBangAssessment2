import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      const expectedRoles = next.data['expectedRoles'] as string[];
      const userRole = this.authService.getUserRole();

      if (expectedRoles && !expectedRoles.includes(userRole)) {
        alert("you are not authorized");
        this.router.navigate(['/unauthorized']);
        return false;
      }

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
