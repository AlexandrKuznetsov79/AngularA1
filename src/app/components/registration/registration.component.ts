import { Component, OnInit } from '@angular/core';
import { IRegUser } from 'src/app/models/auth.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  createUserData: IRegUser = { login: '', password: '' };

  checkPasswordCorrect() {
    /*  */
  }
}
