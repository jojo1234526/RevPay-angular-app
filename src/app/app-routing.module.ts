import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RegisterComponent } from './register/register.component'; // new
import { LoginComponent } from './login/login.component'; // new
import { SendMoneyComponent } from './send-money/send-money.component'; // new
import { RequestMoneyComponent } from './request-money/request-money.component'; // new

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'register', component: RegisterComponent }, // new
  { path: 'login', component: LoginComponent }, // new
  { path: 'send-money', component: SendMoneyComponent }, // new
  { path: 'request-money', component: RequestMoneyComponent } // new
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
