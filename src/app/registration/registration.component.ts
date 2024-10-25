import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  login?:string;
  password?:string;
  repeatenPassword?:string;

  checkPasswordCorrect(){
    if (this.password != this.repeatenPassword)
      console.log('passwords dont match');
  }

}
