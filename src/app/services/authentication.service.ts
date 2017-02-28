import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {

  constructor(private localStorageService: LocalStorageService) { }

  login(login: string): void {
    this.localStorageService.set('user', login);
  }

  getUser(): any {
    return this.localStorageService.get('user');
  }

  isLoggedIn() : boolean {
    return !!(localStorage.getItem("user"));
  }

}
