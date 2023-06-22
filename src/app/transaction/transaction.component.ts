import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  createTransaction(transaction: Transaction) {
    this.transactionService.createTransaction(transaction).subscribe(newTransaction => {
      // handle response
    });
  }

  sendMoney(transaction: Transaction) {
    this.transactionService.sendMoney(transaction).subscribe(newTransaction => {
      // handle response
    });
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
