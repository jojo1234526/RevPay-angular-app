import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service'; // ensure you have this file in the correct location

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService) {} // inject the UserService

  onSubmit(form: NgForm) {
    this.userService.register(form.value).subscribe(user => {
      // handle response
    });
  }
}
