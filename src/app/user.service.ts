import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post<User>('/users/register', user);
  }

  login(username: string, password: string) {
    return this.http.post<User>('/users/login', {username, password});
  }

  sendMoney(senderId: number, receiverId: number, amount: number) {
    return this.http.post<string>('/users/send', {senderId, receiverId, amount});
  }

  requestMoney(requesterUsername: string, giverUsername: string, amount: number) {
    return this.http.post<string>('/users/request', {requesterUsername, giverUsername, amount});
  }

  getAllUsers() {
    return this.http.get<User[]>('/users/all');
  }
}
