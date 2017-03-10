import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service.ts';
import { RouterTestingModule } from '@angular/router/testing';
import {LocalStorageService} from "angular-2-local-storage/dist/index";

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

  it('#logout should delete user on localStorage', inject([AuthenticationService, LocalStorageService],
    (service:AuthenticationService, localStorage:LocalStorageService) => {
      spyOn(localStorage, 'remove');
      service.logout();
      expect(localStorage.remove).toHaveBeenCalledWith('user')
  }));

  xit('#login should set user value into localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    const spy = spyOn(localStorageServiceStub, 'set');
    service.login('abc');
    expect(spy).toHaveBeenCalledWith('user', 'abc');
  }));

  xit('#getUser should set user value into localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    const spy = spyOn(localStorageServiceStub, 'get').and.returnValue('abc');
    expect(service.getUser()).toBe('abc');
    expect(spy).toHaveBeenCalledWith('user', 'abc');
  }));

  xit('#isLoggedIn should return true if user is set inside localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    const spy = spyOn(localStorageServiceStub, 'get').and.returnValue('abc');
    expect(service.isLoggedIn()).toBe(true);
  }));

  xit('#isLoggedIn should return false if user is not set inside localStorage', inject([AuthenticationService], (service:AuthenticationService) => {
    const spy = spyOn(localStorageServiceStub, 'get').and.returnValue(undefined);
    expect(service.isLoggedIn()).toBe(false);
  }));

});
