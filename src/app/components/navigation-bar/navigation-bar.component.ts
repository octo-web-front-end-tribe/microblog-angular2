import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    console.log("isLoggedIn : ", this.authenticationService.isLoggedIn());
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
  }

}
