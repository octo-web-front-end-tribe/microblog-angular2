import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {LoginFormComponent} from "../login-form/login-form.component";
import { AuthenticationService } from '../../services/authentication.service';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService;
  

  beforeEach(async(() => {
    authenticationService = {
      isLoggedIn() {}
    }

    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        LoginFormComponent
      ],
      providers: [
        {provide: AuthenticationService, useValue: authenticationService},
        {provide: Router, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
