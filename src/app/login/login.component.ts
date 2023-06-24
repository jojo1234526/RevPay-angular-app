import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.userService.login(form.value.username, form.value.password)
      .subscribe(user => {
        if (user) {
          // Navigate to the transactions page
          this.router.navigate(['/transactions']);
        } else {
          // show error message
        }
      });
  }
}