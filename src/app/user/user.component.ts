import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  register(user: User) {
    this.userService.register(user).subscribe(newUser => {
      // handle response
    });
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(user => {
      // handle response
    });
  }

  sendMoney(senderId: number, receiverId: number, amount: number) {
    this.userService.sendMoney(senderId, receiverId, amount).subscribe(response => {
      // handle response
    });
  }

  requestMoney(requesterUsername: string, giverUsername: string, amount: number) {
    this.userService.requestMoney(requesterUsername, giverUsername, amount).subscribe(response => {
      // handle response
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}

