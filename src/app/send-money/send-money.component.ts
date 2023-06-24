// Component
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent {
  constructor(private userService: UserService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.getUserByUsername(form.value.sender).pipe(
        switchMap(sender => 
          this.userService.getUserByUsername(form.value.receiver).pipe(
            switchMap(receiver => 
              this.userService.sendMoney(sender.id, receiver.id, form.value.amount)
            )
          )
        )
      ).subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    }
  }
}
