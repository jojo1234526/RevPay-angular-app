import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { UserService } from './user.service';
import { TransactionService } from './transaction.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { RequestMoneyComponent } from './request-money/request-money.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionComponent,
    RegisterComponent,
    LoginComponent,
    SendMoneyComponent,
    RequestMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // add HttpClientModule to the imports array
    FormsModule
  ],
  providers: [UserService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
