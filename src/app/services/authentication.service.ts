import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  redirectUrl : string;

  login(username : string) : void {
    localStorage.setItem("user", username);
  }

  isLoggedIn() : boolean {
    return !!(localStorage.getItem("user"));
  }

}
