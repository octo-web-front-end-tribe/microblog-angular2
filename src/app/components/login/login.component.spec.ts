import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component.ts';
import {LoginFormComponent} from "../login-form/login-form.component";
import { AuthenticationService } from '../../services/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        LoginFormComponent
      ],
      providers: [{provide: AuthenticationService, useValue: {}}]
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
