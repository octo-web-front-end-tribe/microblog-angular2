import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service.ts';
import { LocalStorageModule } from 'angular-2-local-storage';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig({
          prefix: 'app-root',
          storageType: 'localStorage'
        })
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
