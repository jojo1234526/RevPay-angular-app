import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service'; // assuming this is the correct path

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RevPay-angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RevPay-angular-app');
  });

  it('should render title in the navigation bar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('RevPay');
  });

  it('should have nav items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const expectedNavItems = [
      { name: 'Users', path: 'users' },
      { name: 'Transactions', path: 'transactions' },
      { name: 'Register', path: 'register' },
      { name: 'Login', path: 'login' },
      { name: 'Send Money', path: 'send-money' },
      { name: 'Request Money', path: 'request-money' }
    ];
    expect(app.navItems).toEqual(expectedNavItems);
  });

});
