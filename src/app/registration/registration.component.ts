import { Component } from "@angular/core";
import { IUser, User } from "src/shared/models/user.model";
import { NgForm } from '@angular/forms';

@Component({
  selector:'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls:['./registration.component.scss']
})

export class RegisTrationComponent{
  user: IUser = new User();
  emailRegex="^[A-Za-z0-9+_.-]+@(.+)$";

  onSignIn(form: NgForm) {
    console.log('form =>', form.value);
  }

}
