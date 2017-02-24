import { TestBed, inject } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service.ts';
import {AuthenticationService} from "./authentication.service";
import {
  CanActivate, Router, ROUTER_PRIMARY_COMPONENT,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, AuthenticationService, ROUTER_PRIMARY_COMPONENT]
    });
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
