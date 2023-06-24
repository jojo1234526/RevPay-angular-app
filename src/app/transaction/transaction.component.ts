import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionService, Transaction } from '../transaction.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private userService: UserService) { }

  ngOnInit() {
    this.getTransactions();
  }

// TransactionComponent
onSubmit(form: NgForm) {
  this.userService.user$.subscribe(user => {
    if (user) {
      const senderId = user.id;
      this.userService.sendMoney(senderId, form.value.receiver, form.value.amount)
        .subscribe(response => {
          // handle response here
          // Update transactions after successful transaction
          this.getTransactions();
        });
    } else {
      // handle case when user is not logged in
    }
  });
}

  getTransactions() {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
