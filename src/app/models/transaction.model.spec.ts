import { Transaction } from './transaction.model';

describe('Transaction', () => {
  it('should create an instance', () => {
    let mockTransaction: Transaction = {
      id: 1,
      sender: { 
        id: 1,
        username: "testUser1",
        password: "testPassword1",
        email: "test1@example.com",
        phoneNumber: "1234567890",
        balance: 100.0
      },
      receiver: { 
        id: 2,
        username: "testUser2",
        password: "testPassword2",
        email: "test2@example.com",
        phoneNumber: "1234567891",
        balance: 200.0
      },
      amount: 100
    };    
    expect(mockTransaction).toBeTruthy();
  });
});
