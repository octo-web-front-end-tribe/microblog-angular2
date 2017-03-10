import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router) {

  }

  login(login: string): void {
    this.localStorageService.set('user', login);
    this.router.navigate(['/']);
  }

  getUser(): any {
    return this.localStorageService.get('user');
  }

  isLoggedIn() : boolean {
    return !!(this.localStorageService.get('user'));
  }

  logout(): void {
    this.localStorageService.remove('user');
  }

}
