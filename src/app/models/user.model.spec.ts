import { User } from './user.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
