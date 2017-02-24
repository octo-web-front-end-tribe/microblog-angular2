import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthenticationService }      from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) { return true; }

    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

}
