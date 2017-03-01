import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }
}
