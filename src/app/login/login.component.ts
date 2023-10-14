import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser, User } from 'src/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: IUser = new User();

  onSignIn(form: NgForm) {
    console.log('form =>', form.value);
    // console.log('user => ', this.user);
  }
}
