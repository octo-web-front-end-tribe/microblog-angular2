import { ProtectedDirective } from './protected.directive';

describe('ProtectedDirective', () => {
  let service;
  let router;
  beforeEach(() => {
    service = {
      isLoggedIn() {

      }
    }
    router = {
      navigate() {

      }
    }
  });

  it('should create an instance', () => {
    const directive = new ProtectedDirective(service, router);
    expect(directive).toBeTruthy();
  });
});
