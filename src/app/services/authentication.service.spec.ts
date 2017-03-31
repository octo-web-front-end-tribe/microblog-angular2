import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import {LocalStorageService} from "angular-2-local-storage/dist/index";
import {Router} from "@angular/router";

describe('AuthenticationService', () => {

  let localStorageServiceStub;

  beforeEach(() => {
    localStorageServiceStub = {
      set(){},
      get(){},
      remove(){}
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthenticationService,
        {provide: LocalStorageService, useValue: localStorageServiceStub}
      ]
    });
  });

  it('should inject authenticationService', inject([AuthenticationService], (service:AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('#logout should delete user on localStorage', inject([AuthenticationService, LocalStorageService, Router],
    (service:AuthenticationService, localStorage:LocalStorageService, router:Router) => {
      spyOn(router, 'navigate').and.returnValue();
      spyOn(localStorage, 'remove');
      service.logout();
      expect(localStorage.remove).toHaveBeenCalledWith('user')
  }));

  it('#logout should redirect to login page', inject([AuthenticationService, LocalStorageService  , Router],
    (service:AuthenticationService, localStorage:LocalStorageService, router:Router) => {
      spyOn(router, 'navigate').and.returnValue();
      service.logout();
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    }));

  it('#login should set user value into localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
    spyOn(localStorage, 'set');
    service.login('abc');
    expect(localStorage.set).toHaveBeenCalledWith('user', 'abc');
  }));

  it('#login should redirect to home', inject([AuthenticationService, LocalStorageService, Router],
    (service:AuthenticationService, localStorage:LocalStorageService, router:Router) => {
      spyOn(router, 'navigate');
      service.login('abc');
      expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));

  it('#getUser should set user value into localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
    spyOn(localStorage, 'get').and.returnValue('abc');
    expect(service.getUser()).toBe('abc');
    expect(localStorage.get).toHaveBeenCalledWith('user');
  }));

  it('#isLoggedIn should return true if user is set inside localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
    spyOn(localStorage, 'get').and.returnValue('abc');
    expect(service.isLoggedIn()).toBe(true);
  }));

  it('#isLoggedIn should return false if user is not set inside localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    spyOn(localStorageServiceStub, 'get').and.returnValue(undefined);
    expect(service.isLoggedIn()).toBe(false);
  }));

});
