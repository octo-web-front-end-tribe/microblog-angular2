import { Directive } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Directive({
  selector: '[protected]'
})
export class ProtectedDirective {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    if (!authenticationService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
