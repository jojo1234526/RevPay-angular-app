import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Make sure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', () => {
    const dummyUser: User = { 
      id: 1,
      username: 'testuser',
      password:'testpassword',
      email: 'greg@gmail.com',
      phoneNumber: '250-467-3456',
      balance: 10000
    };

    service.register(dummyUser).subscribe(user => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne('/users/register');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  // More tests go here...
});
