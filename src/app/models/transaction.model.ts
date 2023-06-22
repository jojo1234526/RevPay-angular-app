import { User } from './user.model';

export interface Transaction {
  id: number;
  sender: User; // or senderId: number, if you want to use just IDs
  receiver: User; // or receiverId: number, if you want to use just IDs
  amount: number;
}
