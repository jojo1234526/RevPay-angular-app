import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevPay-angular-app';

  navItems = [
    { name: 'Users', path: 'users' },
    { name: 'Transactions', path: 'transactions' },
    { name: 'Register', path: 'register' }, // new
    { name: 'Login', path: 'login' }, // new
    { name: 'Send Money', path: 'send-money' }, // new
    { name: 'Request Money', path: 'request-money' } // new
  ];
  
}
