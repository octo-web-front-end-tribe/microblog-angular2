import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service.ts';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should inject authenticationService', inject([AuthenticationService], (service:AuthenticationService) => {
    expect(service).toBeTruthy();
  }));


  it("Should put login in local storage", inject([AuthenticationService], (service:AuthenticationService) => {
    service.login('toto');
    expect(localStorage.getItem('user')).toEqual('toto');
  }));

});
