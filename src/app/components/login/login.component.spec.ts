import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component.ts';
import { AuthenticationService } from '../../services/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationServiceStub;

  beforeEach(async(() => {
    authenticationServiceStub = {
      login(){}
    };

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{provide: AuthenticationService, useValue: authenticationServiceStub}]
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
