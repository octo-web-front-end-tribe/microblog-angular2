import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import {AuthenticationService} from "../../services/authentication.service";
import {RouterTestingModule} from "@angular/router/testing/router_testing_module";

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;
  let authenticationServiceStub;

  beforeEach(async(() => {
    authenticationServiceStub = {
      logout() {}
    };
    TestBed.configureTestingModule({
      declarations: [ NavigationBarComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: AuthenticationService, useValue: authenticationServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#logout should call logout service', () => {
    let service = fixture.debugElement.injector.get(AuthenticationService);
    spyOn(service, 'logout');
    component.logout();
    expect(service.logout).toHaveBeenCalled();
  });

});
