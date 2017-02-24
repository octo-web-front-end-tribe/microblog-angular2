import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  login(username : string) : void {
    localStorage.setItem("user", username);
  }

}
