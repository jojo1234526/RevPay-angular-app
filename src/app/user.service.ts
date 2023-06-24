import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | undefined>(undefined);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post<User>('/users/register', user);
  }

  login(username: string, password: string) {
    return this.http.post<User>('/users/login', {username, password})
      .pipe(
        tap(user => {
          this.userSubject.next(user);
        })
      );
  }

  logout() {
    this.userSubject.next(undefined);
    // Also remove token from local storage or any other cleanup you need to do
  }

// UserService
sendMoney(senderId: number, receiverId: number, amount: number): Observable<any> {
  return this.http.post<any>('/users/send', {senderId, receiverId, amount});
}


  requestMoney(requesterUsername: string, giverUsername: string, amount: number) {
    return this.http.post<string>('/users/request', {requesterUsername, giverUsername, amount});
  }

  getAllUsers() {
    return this.http.get<User[]>('/users/all');
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`/users/username/${username}`);
  }
  
}
