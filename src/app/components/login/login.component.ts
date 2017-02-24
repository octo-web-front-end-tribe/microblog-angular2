import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login(input): void {
    this.authenticationService.login(input.value);
  }
}
