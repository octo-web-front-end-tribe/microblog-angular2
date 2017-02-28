import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service.ts';
import { LocalStorageModule } from 'angular-2-local-storage';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig({
          prefix: 'app-root',
          storageType: 'localStorage'
        }),
        RouterTestingModule
      ],
      providers: [AuthenticationService]
    });
  });

  it('should inject authenticationService', inject([AuthenticationService], (service:AuthenticationService) => {
    expect(service).toBeTruthy();
  }));


  it("Should put login in local storage", inject([AuthenticationService], (service:AuthenticationService) => {
    //TODO write test
  }));

});
