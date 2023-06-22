import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';  // Import UserComponent
import { TransactionComponent } from './transaction/transaction.component'; // Import TransactionComponent

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redirect from the root to the /users path
  { path: 'users', component: UserComponent }, // Route for UserComponent
  { path: 'transactions', component: TransactionComponent } // Route for TransactionComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
