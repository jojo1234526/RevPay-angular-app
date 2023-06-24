import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';  // Add this import
import { UserService } from '../user.service';  // Adjust this import to your path

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.component.html',
  styleUrls: ['./request-money.component.css']
})
export class RequestMoneyComponent {
  constructor(private userService: UserService) {}  // Inject UserService

  onSubmit(form: NgForm) {
    this.userService.requestMoney(form.value.sender, form.value.receiver, form.value.amount)
      .subscribe(response => {
        // handle response here
      });
  }
}
