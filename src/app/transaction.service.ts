import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Create an interface for your Transaction object
export interface Transaction {
  id: number;
  sender: { id: number };
  receiver: { id: number };
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiBaseUrl = 'http://localhost:9000/api/transactions'; // replace with your API's base URL

  constructor(private http: HttpClient) { }

  // Create a new transaction
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiBaseUrl, transaction);
  }

  // Get all transactions
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiBaseUrl);
  }

  // Send money
  sendMoney(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiBaseUrl}/send`, transaction);
  }
}
